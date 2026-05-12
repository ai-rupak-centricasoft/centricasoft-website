import { NextResponse } from "next/server";
import {
  buildReactBotFallbackReply,
  REACTBOT_SYSTEM_PROMPT,
} from "@/lib/reactbot/server-knowledge";

type IncomingMessage = {
  role: "user" | "assistant";
  text: string;
};

function extractStringContent(value: unknown): string | null {
  if (typeof value === "string" && value.trim()) {
    return value.trim();
  }

  if (Array.isArray(value)) {
    const joined = value
      .map((entry) => {
        if (typeof entry === "string") return entry;
        if (
          entry &&
          typeof entry === "object" &&
          "type" in entry &&
          "text" in entry &&
          entry.type === "text" &&
          typeof entry.text === "string"
        ) {
          return entry.text;
        }

        return "";
      })
      .join("")
      .trim();

    return joined || null;
  }

  return null;
}

function normalizeUpstreamReply(data: unknown) {
  if (!data || typeof data !== "object") return null;

  if ("reply" in data) {
    return extractStringContent(data.reply);
  }

  if ("message" in data) {
    return extractStringContent(data.message);
  }

  if ("text" in data) {
    return extractStringContent(data.text);
  }

  if (
    "choices" in data &&
    Array.isArray(data.choices) &&
    data.choices[0] &&
    typeof data.choices[0] === "object" &&
    "message" in data.choices[0] &&
    data.choices[0].message &&
    typeof data.choices[0].message === "object" &&
    "content" in data.choices[0].message
  ) {
    return extractStringContent(data.choices[0].message.content);
  }

  if (
    "candidates" in data &&
    Array.isArray(data.candidates) &&
    data.candidates[0] &&
    typeof data.candidates[0] === "object" &&
    "content" in data.candidates[0] &&
    data.candidates[0].content &&
    typeof data.candidates[0].content === "object" &&
    "parts" in data.candidates[0].content &&
    Array.isArray(data.candidates[0].content.parts)
  ) {
    const text = data.candidates[0].content.parts
      .map((part: unknown) =>
        part && typeof part === "object" && "text" in part && typeof part.text === "string"
          ? part.text
          : "",
      )
      .join("")
      .trim();

    return text || null;
  }

  return null;
}

async function fetchUpstreamReply(messages: IncomingMessage[]) {
  const apiUrl = process.env.REACTBOT_API_URL;
  if (!apiUrl) return null;

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemPrompt: REACTBOT_SYSTEM_PROMPT,
      messages,
      contents: [
        { role: "user", parts: [{ text: REACTBOT_SYSTEM_PROMPT }] },
        ...messages.map((message) => ({
          role: message.role === "assistant" ? "model" : "user",
          parts: [{ text: message.text }],
        })),
      ],
    }),
  });

  if (!response.ok) {
    throw new Error(`Upstream chatbot request failed with status ${response.status}.`);
  }

  const data = (await response.json()) as unknown;
  return normalizeUpstreamReply(data);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { messages?: IncomingMessage[] };
    const messages = Array.isArray(body.messages) ? body.messages : [];
    const latestUserMessage = [...messages].reverse().find((message) => message.role === "user");

    if (!latestUserMessage?.text?.trim()) {
      return NextResponse.json({ error: "A user message is required." }, { status: 400 });
    }

    try {
      const upstreamReply = await fetchUpstreamReply(messages);
      if (upstreamReply) {
        return NextResponse.json({ reply: upstreamReply, source: "upstream" });
      }
    } catch {
      // If an upstream model is configured but unavailable, fall back to site knowledge.
    }

    return NextResponse.json({
      reply: buildReactBotFallbackReply(latestUserMessage.text),
      source: "fallback",
    });
  } catch {
    return NextResponse.json(
      { error: "Centrica Assistant could not process the request." },
      { status: 500 },
    );
  }
}
