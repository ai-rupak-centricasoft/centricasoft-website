import type { Metadata } from "next";
import { ServicePage } from "@/components/sections/ServicePage";
import { SERVICE_CONTENT } from "@/lib/services-data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Machine Learning & Advanced Analytics - CentricaSoft",
  description:
    "Forecasting, optimization, experimentation, and production ML systems built for enterprise decisions.",
  path: "/what-we-do/machine-learning",
});

export default function MachineLearningPage() {
  return <ServicePage content={SERVICE_CONTENT["machine-learning"]} />;
}
