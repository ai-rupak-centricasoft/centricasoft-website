import { OFFICE_LOCATIONS, SERVICES, SITE } from "@/lib/constants";

const serviceSummary = SERVICES.map(
  (service) => `- ${service.title}: ${service.short} (${service.tags.join(", ")})`,
).join("\n");

const locationSummary = OFFICE_LOCATIONS.map(
  (office) => `- ${office.city}, ${office.region}, ${office.country} - ${office.note}`,
).join("\n");

export const REACTBOT_SYSTEM_PROMPT = `You are Centrica Assistant, the official CentricaSoft assistant.

Stay focused on CentricaSoft and its offerings. Answer clearly, confidently, and concisely.
If a question is unrelated, briefly redirect the conversation back to CentricaSoft's services.

Company:
- Name: ${SITE.name}
- Tagline: ${SITE.tagline}
- Description: ${SITE.description}
- Contact email: ${SITE.email}
- Careers email: ${SITE.careersEmail}

Services:
${serviceSummary}

Locations:
${locationSummary}

Guidelines:
- Sound professional, warm, and helpful.
- Encourage users to book a consultation for project-specific needs.
- Do not invent confidential details, pricing, or case study numbers beyond the provided context.
- Keep replies short unless the user explicitly asks for more detail.`;

function includesAny(input: string, terms: string[]) {
  return terms.some((term) => input.includes(term));
}

export function buildReactBotFallbackReply(rawMessage: string) {
  const message = rawMessage.toLowerCase();

  if (includesAny(message, ["hello", "hi", "hey", "good morning", "good evening"])) {
    return "Hello. I can help with CentricaSoft's AI services, Nubo, delivery model, locations, careers, or how to start an engagement.";
  }

  if (includesAny(message, ["service", "offer", "what do you do", "capabilities"])) {
    return [
      "CentricaSoft focuses on four core areas:",
      "",
      "1. Agentic AI and autonomous systems",
      "2. Generative AI chatbots and RAG platforms",
      "3. Data engineering and cloud-scale pipelines",
      "4. Analytics and decision intelligence",
      "",
      "If you want, I can narrow that down to the best fit for your use case.",
    ].join("\n");
  }

  if (includesAny(message, ["nubo", "chatbot", "rag", "genai"])) {
    return [
      "Nubo is CentricaSoft's enterprise GenAI chatbot platform.",
      "",
      "It is designed for grounded answers with retrieval, prompt engineering, citations, guardrails, and integration into internal tools like web apps, Slack, Teams, and CRM workflows.",
      "",
      "If you're evaluating a chatbot project, I can also outline the typical rollout approach.",
    ].join("\n");
  }

  if (includesAny(message, ["agent", "agentic", "autonomous"])) {
    return [
      "CentricaSoft builds agentic AI systems that go beyond chat and can take actions across business workflows.",
      "",
      "Typical work includes orchestration, tool calling, memory, enterprise integrations, and observability for production operations.",
    ].join("\n");
  }

  if (includesAny(message, ["data", "pipeline", "engineering", "etl", "elt", "lakehouse"])) {
    return [
      "CentricaSoft also delivers large-scale data engineering work: ingestion pipelines, lakehouse design, orchestration, cloud migration, and analytics-ready infrastructure.",
      "",
      "That is usually paired with AI or analytics so teams can move from raw data to decisions faster.",
    ].join("\n");
  }

  if (includesAny(message, ["analytics", "dashboard", "insight", "reporting", "bi"])) {
    return [
      "On the analytics side, CentricaSoft builds executive dashboards, governed semantic layers, predictive models, and embedded analytics experiences.",
      "",
      "The goal is to turn data into usable decisions, not just more reports.",
    ].join("\n");
  }

  if (includesAny(message, ["where", "location", "office", "based"])) {
    return [
      "CentricaSoft operates across the United States and India.",
      "",
      ...OFFICE_LOCATIONS.map(
        (office) => `- ${office.city}, ${office.region}: ${office.note.toLowerCase()}`,
      ),
    ].join("\n");
  }

  if (includesAny(message, ["contact", "consultation", "project", "start", "demo", "quote"])) {
    return [
      `The best next step is to reach CentricaSoft through ${SITE.email} or the contact form on /contact.`,
      "",
      "A typical kickoff starts with a consultation to define the use case, data sources, integrations, guardrails, and rollout plan.",
    ].join("\n");
  }

  if (includesAny(message, ["career", "job", "hiring", "work with you"])) {
    return [
      `For careers, the team can be reached at ${SITE.careersEmail} and through the /careers page.`,
      "",
      "CentricaSoft hires across AI engineering, data platforms, product design, and consulting delivery.",
    ].join("\n");
  }

  if (includesAny(message, ["about", "company", "who are you"])) {
    return [
      `${SITE.name} is an AI and data engineering company focused on enterprise-grade automation, GenAI systems, and modern data platforms.`,
      "",
      `The company tagline is "${SITE.tagline}" and the work centers on building practical systems that scale in production.`,
    ].join("\n");
  }

  return [
    "I can help with CentricaSoft's services, Nubo, AI agents, data engineering, analytics, company details, or how to begin a project.",
    "",
    "Try asking:",
    "- What services do you offer?",
    "- Tell me about Nubo.",
    "- Where is CentricaSoft located?",
    "- How do I start a project?",
  ].join("\n");
}
