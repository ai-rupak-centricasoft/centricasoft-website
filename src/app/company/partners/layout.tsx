import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Partners | CentricaSoft",
  description:
    "Explore CentricaSoft's partner ecosystem across hyperscalers, AI platforms, data tools, and global delivery alliances.",
  path: "/company/partners",
});

export default function PartnersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
