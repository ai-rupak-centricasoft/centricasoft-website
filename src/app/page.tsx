import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { Services } from "@/components/sections/Services";
import { NuboFeature } from "@/components/sections/NuboFeature";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "CentricaSoft",
  description:
    "CentricaSoft builds AI Agents, GenAI platforms, and enterprise data infrastructure that scale without limits.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <MarqueeStrip />
      <WhoWeAre />
      <Services />
      <NuboFeature />
      <Testimonials />
      <CaseStudies />
      <CTAStrip />
    </>
  );
}
