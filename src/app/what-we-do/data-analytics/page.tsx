import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";
import { SERVICE_CONTENT } from "@/lib/services-data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Data Analytics - CentricaSoft",
  description:
    "Decision intelligence dashboards, semantic layers, and analytics platforms built for business action.",
  path: "/what-we-do/data-analytics",
});

export default function DataAnalyticsPage() {
  return <ServicePage content={SERVICE_CONTENT["data-analytics"]} />;
}
