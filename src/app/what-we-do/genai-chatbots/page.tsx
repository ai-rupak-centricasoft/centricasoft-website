import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";
import { SERVICE_CONTENT } from "@/lib/services-data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "GenAI Chatbots - CentricaSoft",
  description:
    "Enterprise GenAI chatbot platforms with grounded retrieval, prompt systems, and integration-ready architecture.",
  path: "/what-we-do/genai-chatbots",
});

export default function GenaiChatbotsPage() {
  return <ServicePage content={SERVICE_CONTENT["genai-chatbots"]} />;
}
