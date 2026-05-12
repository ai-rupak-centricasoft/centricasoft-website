"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollCards, type iScrollCardsProps } from "@/components/ui/scroll-cards";

const SERVICE_CARDS: iScrollCardsProps["items"] = [
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
    href: "/what-we-do/data-analytics",
    tags: ["ML Models", "Forecasting", "Optimization"],
  },
  {
    title: "App Development",
    description:
      "Web and mobile product development connected to modern data, AI, and enterprise platforms from day one - built to scale, not just to demo.",
    eyebrow: "Product Engineering",
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
    href: "/contact",
    tags: ["Web Apps", "Mobile", "Platform UX"],
  },
];

export function Services() {
  return (
    <section className="relative bg-[#001234] text-white">
      <div className="sticky top-0 z-20 border-b border-white/[0.06] bg-[#001234]/98 backdrop-blur-sm">
        <div className="container-x flex flex-col gap-3 py-6 md:py-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel number="02">Services</SectionLabel>
            <h2 className="mt-2 font-heading font-bold leading-[1.1] text-white text-[clamp(18px,3.5vw,32px)]">
              What we build, <span className="text-white/35">end to end.</span>
            </h2>
          </div>
          <p className="max-w-[32ch] text-[13px] leading-[1.7] text-white/35 sm:text-right">
            Six core practices. <br className="hidden sm:block" />
            Scroll to explore each one.
          </p>
        </div>
      </div>

      <ScrollCards items={SERVICE_CARDS} />

      <div className="h-16 md:h-20" />
    </section>
  );
}
