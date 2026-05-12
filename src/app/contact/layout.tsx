import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact | CentricaSoft",
  description:
    "Contact CentricaSoft to discuss AI agents, GenAI chatbots, data engineering, analytics, and enterprise delivery needs.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
