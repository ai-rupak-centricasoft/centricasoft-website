import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Clients | CentricaSoft",
  description:
    "See the industries and enterprise clients CentricaSoft supports across healthcare, finance, logistics, retail, and more.",
  path: "/company/clients",
});

export default function ClientsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
