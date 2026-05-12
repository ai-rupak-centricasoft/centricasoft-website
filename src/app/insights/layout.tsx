import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Insights | CentricaSoft",
  description:
    "Read CentricaSoft insights on agentic AI, GenAI, data engineering, analytics, and production system design.",
  path: "/insights",
});

export default function InsightsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
