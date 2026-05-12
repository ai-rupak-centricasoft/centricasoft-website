import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";
import { SERVICE_CONTENT } from "@/lib/services-data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Data Engineering - CentricaSoft",
  description:
    "Lakehouse, warehouse, and streaming data infrastructure for reliable enterprise-scale intelligence.",
  path: "/what-we-do/data-engineering",
});

export default function DataEngineeringPage() {
  return <ServicePage content={SERVICE_CONTENT["data-engineering"]} />;
}
