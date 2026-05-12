import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Careers | CentricaSoft",
  description:
    "Explore careers at CentricaSoft across AI engineering, data platforms, analytics, product design, and solutions architecture.",
  path: "/careers",
});

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
