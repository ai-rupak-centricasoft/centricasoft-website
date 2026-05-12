import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us | CentricaSoft",
  description:
    "Learn about CentricaSoft, our mission, leadership, global delivery model, and the values behind our AI and data engineering work.",
  path: "/company/about",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
