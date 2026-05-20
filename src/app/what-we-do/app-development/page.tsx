import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";
import { SERVICE_CONTENT } from "@/lib/services-data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "App Development - CentricaSoft",
  description:
    "Web and mobile application development connected to AI, data, APIs, and enterprise workflows.",
  path: "/what-we-do/app-development",
});

export default function AppDevelopmentPage() {
  return <ServicePage content={SERVICE_CONTENT["app-development"]} />;
}
