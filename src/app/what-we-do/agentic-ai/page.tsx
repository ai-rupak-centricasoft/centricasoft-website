import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";
import { SERVICE_CONTENT } from "@/lib/services-data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Agentic AI & Autonomous Agents - CentricaSoft",
  description:
    "Multi-agent systems with tool use, memory, and reflection loops engineered for production workflows.",
  path: "/what-we-do/agentic-ai",
});

export default function AgenticAiPage() {
  return <ServicePage content={SERVICE_CONTENT["agentic-ai"]} />;
}
