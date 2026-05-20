"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ServicesCarousel, type ServicesCarouselItem } from "@/components/ui/services-carousel";

const SERVICE_CARDS: ServicesCarouselItem[] = [
  {
    title: "Agentic AI & Autonomous Agents",
    description:
      "Multi-agent systems with tool use, memory, and reflection loops - engineered for production workflows that act, adapt, and self-correct at scale.",
    eyebrow: "Autonomous Systems",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
    href: "/what-we-do/agentic-ai",
    tags: ["LangGraph", "AutoGen", "CrewAI"],
  },
  {
    title: "Generative AI Chatbots",
    description:
      "Precision prompt engineering, retrieval-augmented generation, and seamless enterprise integration - chatbots that know your business and answer with evidence.",
    eyebrow: "Enterprise Conversations",
    src: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1400&q=80",
    href: "/what-we-do/genai-chatbots",
    tags: ["RAG", "Prompt Eng", "LLM Ops"],
  },
  {
    title: "Data Engineering & Pipelines",
    description:
      "Streaming ingestion, lakehouse architectures, and orchestration that handle large volumes data daily. From raw source to clean gold layer - without flinching.",
    eyebrow: "Cloud Data Fabric",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",
    href: "/what-we-do/data-engineering",
    tags: ["Spark", "Databricks", "Snowflake"],
  },
  {
    title: "Data Analytics & Insights",
    description:
      "Self-serve analytics, executive dashboards, and predictive models that move the metrics that matter - insights your leadership team will actually trust.",
    eyebrow: "Decision Intelligence",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    href: "/what-we-do/data-analytics",
    tags: ["dbt", "Looker", "Power BI"],
  },
  {
    title: "Machine Learning & Advanced Analytics",
    description:
      "Forecasting, prediction, optimization, and decision intelligence for teams that need sharper planning and faster action - models that improve with every run.",
    eyebrow: "Predictive Systems",
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    href: "/what-we-do/machine-learning",
    tags: ["ML Models", "Forecasting", "Optimization"],
  },
  {
    title: "App Development",
    description:
      "Web and mobile product development connected to modern data, AI, and enterprise platforms from day one - built to scale, not just to demo.",
    eyebrow: "Product Engineering",
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
    href: "/what-we-do/app-development",
    tags: ["Web Apps", "Mobile", "Platform UX"],
  },
];

export function Services() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F7FF] to-[#E5EDFD] pt-[clamp(40px,6vw,80px)] pb-12 md:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/60 via-transparent to-transparent pointer-events-none" />

      <div className="container-x relative z-10 mb-2 md:mb-3">
        <SectionLabel number="02">Services</SectionLabel>
      </div>

      <div className="w-full relative z-10">
        <ServicesCarousel
          title={<>What we build, end to end</>}
          subtitle="Six core practices. Swipe to explore each one."
          items={SERVICE_CARDS}
        />
      </div>
    </section>
  );
}
