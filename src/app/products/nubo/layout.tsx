import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Nubo | CentricaSoft",
  description:
    "Discover Nubo, CentricaSoft's enterprise GenAI platform for grounded retrieval, prompt engineering, and production-ready integrations.",
  path: "/products/nubo",
});

export default function NuboLayout({ children }: { children: React.ReactNode }) {
  return children;
}
