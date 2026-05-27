import { NextResponse } from "next/server";
import { SESClient, SendRawEmailCommand } from "@aws-sdk/client-ses";
import { z } from "zod";
import { buildContactRawEmail } from "./email-template";

// On Amplify (and any AWS-hosted environment) credentials are picked up
// automatically from the execution role — no hardcoded keys needed.
// For local dev, set SES_ACCESS_KEY_ID / SES_SECRET_ACCESS_KEY in .env.local.
// Note: Amplify blocks the "AWS_" prefix on env vars, so we use "SES_" instead.
const ses = new SESClient({
  region: process.env.SES_REGION ?? "us-east-1",
  ...(process.env.SES_ACCESS_KEY_ID && {
    credentials: {
      accessKeyId: process.env.SES_ACCESS_KEY_ID,
      secretAccessKey: process.env.SES_SECRET_ACCESS_KEY ?? "",
      ...(process.env.SES_SESSION_TOKEN && { sessionToken: process.env.SES_SESSION_TOKEN }),
    },
  }),
});

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(120).optional(),
  interest: z.string().min(1),
  message: z.string().trim().min(10).max(1500),
  turnstileToken: z.string().min(1),
});

async function verifyTurnstile(token: string): Promise<boolean> {
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY ?? "",
      response: token,
    }),
  });
  const data = (await res.json()) as { success: boolean };
  return data.success;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }

    const isHuman = await verifyTurnstile(parsed.data.turnstileToken);
    if (!isHuman) {
      return NextResponse.json({ error: "Bot check failed. Please try again." }, { status: 400 });
    }

    const { rawMessage } = buildContactRawEmail(parsed.data);

    await ses.send(
      new SendRawEmailCommand({
        Source: "CentricaSoft Contact <Rupak.Swar@centricasoft.com>",
        Destinations: ["Rupak.Swar@centricasoft.com"],
        RawMessage: { Data: Buffer.from(rawMessage, "utf8") },
      }),
    );
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SES error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
