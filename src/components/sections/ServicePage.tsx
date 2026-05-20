"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BarChart3, Cog, Network, Sparkles } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollCounter } from "@/components/ui/ScrollCounter";
import { HoverTilt } from "@/components/ui/HoverTilt";
import { HLDDiagram } from "@/components/ui/HLDDiagram";
import { HorizontalCarousel } from "@/components/ui/HorizontalCarousel";
import { CTAStrip } from "@/components/sections/CTAStrip";
import type { ServiceContent } from "@/lib/services-data";

const OFFERING_CARD_BACKGROUNDS = [
  "/service-card-bg/offer-01-ai-architecture.png",
  "/service-card-bg/offer-02-data-pipeline.png",
  "/service-card-bg/offer-03-orchestration-flow.png",
  "/service-card-bg/offer-04-analytics-delivery.png",
] as const;

const SERVICE_SNAPSHOT_COPY: Record<ServiceContent["slug"], { headline: string; summary: string }> =
  {
    "agentic-ai": {
      headline: "Autonomous workflows, built for action.",
      summary:
        "Agent systems with orchestration, tool use, memory, guardrails, and audit trails ready for production teams.",
    },
    "genai-chatbots": {
      headline: "Grounded answers, shipped safely.",
      summary:
        "RAG, prompt operations, role-aware retrieval, citations, and eval loops for chatbots people can trust.",
    },
    "data-engineering": {
      headline: "Reliable data pipelines at scale.",
      summary:
        "Streaming, lakehouse, orchestration, migration, and cost controls for data platforms that stay dependable.",
    },
    "data-analytics": {
      headline: "Analytics tied to decisions.",
      summary:
        "Semantic layers, executive dashboards, predictive models, and embedded insights built around business action.",
    },
    "machine-learning": {
      headline: "Models that move decisions.",
      summary:
        "Forecasting, optimization, experimentation, and monitored ML systems built for operational adoption.",
    },
    "app-development": {
      headline: "Products built around workflows.",
      summary:
        "Web and mobile apps connected to data, AI, APIs, and enterprise systems from the first release.",
    },
  };

const SERVICE_EXPERTISE_FOCUS: Record<ServiceContent["slug"], { title: string; body: string }[]> = {
  "agentic-ai": [
    {
      title: "Agent orchestration",
      body: "Role-based agent graphs, task routing, memory, and tool execution designed around real business workflows.",
    },
    {
      title: "Operational guardrails",
      body: "Human review paths, output validation, fallbacks, and observability baked into every autonomous action.",
    },
    {
      title: "Enterprise integration",
      body: "Secure connections into CRMs, ERPs, databases, APIs, and collaboration tools without fragile handoffs.",
    },
  ],
  "genai-chatbots": [
    {
      title: "Retrieval quality",
      body: "Hybrid search, chunking, reranking, and citation controls tuned to the way your enterprise knowledge is used.",
    },
    {
      title: "Conversation safety",
      body: "Prompt versioning, refusal logic, access control, and regression evals for dependable answers at scale.",
    },
    {
      title: "Channel delivery",
      body: "One trusted assistant experience across web, Slack, Teams, CRM, and internal support surfaces.",
    },
  ],
  "data-engineering": [
    {
      title: "Modern ingestion",
      body: "Streaming, CDC, batch, and API pipelines engineered for freshness, replayability, and clean ownership.",
    },
    {
      title: "Lakehouse design",
      body: "Storage, partitioning, schema governance, and transformation layers that keep data usable as volume grows.",
    },
    {
      title: "Cost-aware operations",
      body: "Monitoring, orchestration, lineage, and cloud optimization so pipelines stay fast without runaway spend.",
    },
  ],
  "data-analytics": [
    {
      title: "Decision modeling",
      body: "Metrics and dashboards shaped around the decisions teams actually need to make every week.",
    },
    {
      title: "Semantic governance",
      body: "Shared definitions, modeled dimensions, and access patterns that make self-serve analytics trustworthy.",
    },
    {
      title: "Operational insight",
      body: "Forecasts, alerts, embedded analytics, and models delivered into the workflows where action happens.",
    },
  ],
  "machine-learning": [
    {
      title: "Predictive systems",
      body: "Forecasting, scoring, and classification models shaped around concrete business actions.",
    },
    {
      title: "Optimization engines",
      body: "Decision logic for planning, pricing, routing, inventory, and capacity constraints.",
    },
    {
      title: "Production MLOps",
      body: "Model monitoring, retraining loops, feature governance, and deployment patterns that hold up.",
    },
  ],
  "app-development": [
    {
      title: "Product architecture",
      body: "UX, frontend, backend, data, and integrations designed as one coherent product system.",
    },
    {
      title: "Workflow delivery",
      body: "Portals, dashboards, tools, and customer apps built around repeated daily use.",
    },
    {
      title: "AI-ready platforms",
      body: "Applications prepared for embedded agents, analytics, search, and automation from day one.",
    },
  ],
};

const expertiseIcons = [BarChart3, Cog, Network] as const;

function LightSectionPattern({
  variant,
}: {
  variant: "top-left" | "bottom-right" | "split-right" | "bottom-left";
}) {
  const variants = {
    "top-left": {
      shellClass:
        "pointer-events-none absolute inset-y-0 left-0 hidden w-[42%] lg:block opacity-90",
      style: {
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='520' height='520' viewBox='0 0 520 520'><g fill='none' stroke='%23C8DFF0' stroke-width='2' stroke-linecap='round' opacity='0.82'><path d='M-24 96 C54 28,146 24,230 74 S390 170,520 86' stroke-dasharray='10 20'/><path d='M-40 182 C36 126,132 122,214 170 S380 268,520 182' stroke-dasharray='9 19'/><path d='M-10 280 C82 214,180 212,266 262 S422 350,548 286' stroke-dasharray='10 18'/><path d='M18 386 C116 330,212 334,292 384 S446 470,560 412' stroke-dasharray='8 18'/><path d='M52 478 C142 432,230 438,312 482 S448 548,538 516' stroke-dasharray='8 20'/><path d='M72 58 l14 -6'/><path d='M162 110 l14 -6'/><path d='M262 150 l14 -6'/><path d='M122 242 l14 -6'/><path d='M332 300 l14 -6'/><path d='M214 404 l14 -6'/><path d='M404 430 l14 -6'/></g></svg>\")",
        backgroundSize: "540px 540px",
        backgroundPosition: "0 0",
        maskImage: "linear-gradient(90deg, black 0%, black 62%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(90deg, black 0%, black 62%, transparent 100%)",
      },
    },
    "bottom-right": {
      shellClass:
        "pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block opacity-90",
      style: {
        backgroundImage:
          "repeating-radial-gradient(circle at 100% 84%, rgba(168,207,230,0.52) 0 2px, transparent 2px 24px), linear-gradient(225deg, rgba(30,191,255,0.1), transparent 58%)",
        backgroundSize: "520px 520px, auto",
        maskImage: "linear-gradient(270deg, black 0%, black 62%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(270deg, black 0%, black 62%, transparent 100%)",
      },
    },
    "split-right": {
      shellClass:
        "pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block opacity-95",
      style: {
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='460' height='620' viewBox='0 0 460 620'><g fill='none' stroke='%23C8DFF0' stroke-width='2' stroke-linecap='round' opacity='0.8'><path d='M430 -10 C360 58,354 138,412 214 S452 374,394 454 S332 604,424 652' stroke-dasharray='10 18'/><path d='M344 0 C286 74,292 156,350 224 S384 368,334 446 S278 580,350 636' stroke-dasharray='9 18'/><path d='M250 34 C206 96,214 168,268 232 S306 364,264 430 S214 554,270 612' stroke-dasharray='8 18'/><path d='M404 86 l12 8'/><path d='M314 146 l12 8'/><path d='M238 274 l12 8'/><path d='M360 334 l12 8'/><path d='M292 484 l12 8'/><path d='M388 558 l12 8'/></g></svg>\")",
        backgroundSize: "420px 620px",
        backgroundPosition: "100% 0",
        backgroundRepeat: "no-repeat",
        maskImage:
          "linear-gradient(270deg, black 0%, black 72%, rgba(0,0,0,0.35) 84%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(270deg, black 0%, black 72%, rgba(0,0,0,0.35) 84%, transparent 100%)",
      },
    },
    "bottom-left": {
      shellClass:
        "pointer-events-none absolute inset-y-0 left-0 hidden w-[40%] lg:block opacity-90",
      style: {
        backgroundImage:
          "repeating-radial-gradient(circle at 0% 86%, rgba(168,207,230,0.54) 0 2px, transparent 2px 24px), linear-gradient(160deg, rgba(30,191,255,0.1), transparent 60%)",
        backgroundSize: "480px 480px, auto",
        maskImage: "linear-gradient(90deg, black 0%, black 64%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(90deg, black 0%, black 64%, transparent 100%)",
      },
    },
  } as const;

  const selected = variants[variant];

  return <div aria-hidden className={selected.shellClass} style={selected.style} />;
}

export function ServicePage({ content }: { content: ServiceContent }) {
  const practiceName = content.title.split(/[&,]/)[0].trim();
  const snapshotCopy = SERVICE_SNAPSHOT_COPY[content.slug];
  const expertiseFocus = SERVICE_EXPERTISE_FOCUS[content.slug];

  const renderTitle = () => {
    if (!content.highlight) return content.title;
    const parts = content.title.split(content.highlight);
    return (
      <>
        {parts[0]}
        <span className="text-white">{content.highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <>
      {/* ── Dark navy hero — blue theme, no video ─────────────── */}
      <section className="bg-[var(--bg)] px-4 pb-4 pt-[88px] text-white md:px-5 md:pb-6 md:pt-[92px]">
        <div className="relative isolate flex min-h-[390px] items-center justify-center overflow-hidden rounded-[24px] bg-[var(--navy-deep)] px-6 py-12 text-center shadow-[0_26px_72px_-58px_rgba(0,18,52,0.72)] md:min-h-[430px] md:px-10 md:py-12">
          {/* Base gradient */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(112deg, rgba(0,18,52,0.98) 0%, rgba(0,30,80,0.92) 46%, rgba(0,52,120,0.82) 100%)",
            }}
          />

          {/* Soft ambient wash */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(48% 58% at 20% 18%, rgba(30,191,255,0.16), transparent 72%), radial-gradient(36% 44% at 82% 24%, rgba(168,207,230,0.11), transparent 74%), linear-gradient(180deg, rgba(255,255,255,0.03), transparent 28%, transparent 74%, rgba(255,255,255,0.02))",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
            }}
          />

          {/* Top-left soft sky glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -left-24 h-[560px] w-[560px] opacity-20"
            style={{
              background: "radial-gradient(circle, rgba(30,191,255,0.6) 0%, transparent 70%)",
            }}
          />
          {/* Bottom-right subtle accent */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[420px] opacity-15"
            style={{
              background:
                "radial-gradient(ellipse at 100% 100%, rgba(100,160,255,0.5) 0%, transparent 68%)",
            }}
          />

          <div className="relative z-10 mx-auto flex max-w-[980px] flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 rounded-full border border-white/18 bg-black/30 px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.24)] backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-[var(--sky-bright)]" />
              <span className="label-mono !text-[10px] !tracking-[0.2em] !text-white/82">
                {content.pill}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-[860px] font-display text-[clamp(34px,5.2vw,60px)] font-[430] leading-[1.02] tracking-[-0.045em] text-white"
              style={{ textShadow: "0 8px 32px rgba(0,0,0,0.26)" }}
            >
              {renderTitle()}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-[640px] text-[14px] leading-[1.7] tracking-[-0.01em] text-white/84 sm:text-[15.5px]"
            >
              {content.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex max-w-[760px] flex-wrap justify-center gap-2.5"
            >
              {content.problemPoints.slice(0, 2).map((point) => (
                <div
                  key={point}
                  className="body-sm max-w-[320px] rounded-full border border-white/14 bg-white/8 px-4 py-2 text-white/76 backdrop-blur-md"
                >
                  {point}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Delivery snapshot — overlays hero with negative margin ── */}
      <section className="relative z-10 -mt-8 pb-9 md:-mt-10 md:pb-12">
        <div className="container-x max-w-[1180px]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[24px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,247,252,0.96))] px-5 py-6 shadow-[0_24px_72px_-40px_rgba(0,18,52,0.42)] backdrop-blur-sm md:px-8 md:py-8"
          >
            {/* Subtle inner radial on card */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(52% 64% at 0% 28%, rgba(168,207,230,0.22), transparent 72%), radial-gradient(36% 44% at 100% 90%, rgba(30,191,255,0.12), transparent 74%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.42]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(87,151,190,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(87,151,190,0.12) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
                maskImage:
                  "linear-gradient(90deg, black 0%, rgba(0,0,0,0.72) 46%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(90deg, black 0%, rgba(0,0,0,0.72) 46%, transparent 100%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 top-8 h-[320px] w-[520px] rotate-[-8deg] rounded-full border border-[var(--border-2)]/40 opacity-50"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute right-8 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[var(--border-2)]/70 to-transparent lg:block"
            />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-5 border-b border-[var(--border)]/80 pb-6">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-2)] bg-white/80 px-4 py-2 shadow-[0_10px_30px_-24px_rgba(0,32,87,0.42)] backdrop-blur-sm">
                    <ArrowUpRight className="h-4 w-4 text-[var(--sky-deep)]" />
                    <span className="label-mono !text-[10px] !text-[var(--ink-2)]">
                      Delivery Snapshot
                    </span>
                  </div>
                  <div className="hidden h-px w-20 bg-gradient-to-r from-[var(--border-2)] to-transparent sm:block" />
                </div>
                <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/55 px-3 py-2 backdrop-blur-sm">
                  {["Strategy", "Delivery", "Outcomes"].map((item, index) => (
                    <div key={item} className="flex items-center gap-2">
                      {index > 0 && (
                        <span className="h-1 w-1 rounded-full bg-[var(--sky-deep)]/45" />
                      )}
                      <span className="label-mono !text-[10px] !text-[var(--ink-3)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 grid gap-7 lg:grid-cols-[minmax(0,0.78fr)_minmax(320px,0.95fr)] lg:gap-12">
                <div className="relative">
                  <div className="mb-4 h-1.5 w-20 rounded-full bg-gradient-brand-h" />
                  <h2 className="max-w-[430px] font-display text-[clamp(30px,3.6vw,44px)] leading-[1.02] tracking-[-0.035em] text-[var(--ink)]">
                    {snapshotCopy.headline}
                  </h2>
                </div>

                <div className="relative">
                  <div className="absolute -left-6 top-2 hidden h-[calc(100%-16px)] w-px bg-gradient-to-b from-[var(--sky-deep)]/0 via-[var(--sky-deep)]/35 to-[var(--sky-deep)]/0 lg:block" />
                  <p className="max-w-[560px] text-[17px] leading-[1.65] tracking-[-0.01em] text-[var(--ink-2)]">
                    {snapshotCopy.summary}
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {content.expertiseGrid.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-white/88 px-4 py-5 shadow-[0_14px_38px_-32px_rgba(0,32,87,0.44)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-2)] hover:shadow-[0_22px_52px_-34px_rgba(0,32,87,0.48)]"
                  >
                    <div
                      aria-hidden
                      className="absolute right-0 top-0 h-20 w-20 translate-x-8 translate-y-[-36px] rounded-full border border-[var(--border-2)]/50 transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-[-30px]"
                    />
                    <div className="relative flex items-center justify-between gap-3">
                      <div className="h-1 w-12 rounded-full bg-gradient-brand-h" />
                      <span className="font-mono text-[11px] text-[var(--ink-3)]">
                        0{index + 1}
                      </span>
                    </div>
                    <div className="relative mt-4 font-display text-[clamp(30px,3.4vw,40px)] leading-none text-gradient-brand">
                      <ScrollCounter value={metric.value} suffix={metric.suffix} />
                    </div>
                    <div className="body-sm relative mt-3 max-w-[190px] text-[var(--ink-2)]">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--surface-2)] py-20 md:py-28">
        <div className="container-x">
          <SectionLabel number="01">Why This Matters</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="heading-lg mx-auto mt-8 max-w-[760px] text-center text-[var(--ink)]"
          >
            &ldquo;{content.problemQuote}&rdquo;
          </motion.h2>
          <div className="mx-auto mt-6 h-[2px] w-16 bg-gradient-brand-h" />

          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-12 grid max-w-[900px] gap-4 sm:grid-cols-2"
          >
            {content.problemPoints.map((point, index) => (
              <li
                key={point}
                className="flex items-start gap-4 rounded-xl border border-[var(--border)] bg-white px-5 py-4"
              >
                <span className="mt-1 shrink-0 font-mono text-[11px] text-[var(--sky-deep)]">
                  0{index + 1}
                </span>
                <p className="text-[16px] leading-[1.65] text-[var(--ink-2)]">{point}</p>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container-x relative z-10">
          <div className="mb-10 text-center">
            <SectionLabel number="02">What We Offer</SectionLabel>
            <h2 className="heading-lg mt-6 text-[var(--ink)]">Our {practiceName} Practice.</h2>
          </div>

          <HorizontalCarousel itemCount={content.offerings.length}>
            {content.offerings.map((offering, index) => (
              <div
                key={offering.title}
                className="shrink-0 grow-0 px-2"
                style={{ flex: "0 0 min(420px, 90%)" }}
              >
                <HoverTilt max={3}>
                  <div className="group relative h-[440px] overflow-hidden rounded-none border border-[var(--border)] bg-[var(--navy-deep)] transition-all duration-300 hover:border-[var(--border-2)] hover:shadow-[0_24px_70px_-24px_rgba(0,32,87,0.24)] md:h-[410px]">
                    <div className="absolute inset-0 overflow-hidden">
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.05]"
                        style={{
                          backgroundImage: `url(${OFFERING_CARD_BACKGROUNDS[index % OFFERING_CARD_BACKGROUNDS.length]})`,
                        }}
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(0,18,52,0.18) 0%, rgba(0,18,52,0.34) 42%, rgba(0,18,52,0.88) 100%)",
                        }}
                      />
                      <div className="absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-none border border-white/18 bg-white/10 text-[20px] text-white backdrop-blur-md">
                        {offering.icon}
                      </div>

                      <div className="absolute inset-x-0 top-0 bg-[linear-gradient(180deg,rgba(0,18,52,0.94),rgba(0,18,52,0.76)_74%,rgba(0,18,52,0))] px-5 pb-10 pt-20 opacity-100 transition-all duration-350 ease-out md:opacity-0 md:group-hover:opacity-100">
                        <div className="label-mono !text-[9px] !tracking-[0.18em] !text-white/62">
                          What We Offer
                        </div>
                        <div className="mt-4 translate-y-0 opacity-100 transition-all duration-350 ease-out md:translate-y-[-10px] md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                          <p className="max-w-[280px] text-[15px] leading-[1.65] text-white/86">
                            {offering.body}
                          </p>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {offering.tags.map((tag) => (
                              <span
                                key={tag}
                                className="label-mono rounded-none border border-white/14 bg-white/10 px-2.5 py-1 !text-[10px] !text-white/74 backdrop-blur-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 mt-auto bg-[linear-gradient(180deg,rgba(0,18,52,0),rgba(0,18,52,0.82)_28%,rgba(0,18,52,0.96)_100%)] px-6 pb-6 pt-16">
                        <h3 className="heading-md font-bold text-white">{offering.title}</h3>
                      </div>
                    </div>
                  </div>
                </HoverTilt>
              </div>
            ))}
          </HorizontalCarousel>
        </div>
      </section>

      <section className="bg-[var(--surface-2)] py-20 md:py-28">
        <div className="container-x">
          <SectionLabel number="03">Our Expertise</SectionLabel>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="mt-8 text-center"
          >
            <h2 className="heading-lg text-[var(--ink)]">Depth before width.</h2>
            <p className="body-lg mx-auto mt-4 max-w-[640px] text-[var(--ink-2)]">
              {content.expertiseNarrative}
            </p>
          </motion.div>

          <div className="mx-auto mt-12 grid max-w-[1080px] gap-5 md:grid-cols-3">
            {expertiseFocus.map((item, index) => {
              const Icon = expertiseIcons[index % expertiseIcons.length];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="group flex min-h-[245px] flex-col items-center rounded-[14px] border border-[#D8DEE9] bg-[linear-gradient(180deg,#F4F7FF_0%,#FFFFFF_100%)] px-7 py-10 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#C2D5E8] hover:shadow-[0_18px_44px_-34px_rgba(0,32,87,0.3)]"
                >
                  <div className="flex h-[58px] w-[58px] items-center justify-center rounded-xl bg-[rgba(30,191,255,0.12)] text-[var(--sky-deep)] transition-colors duration-300 group-hover:bg-[rgba(0,32,87,0.08)] group-hover:text-[var(--navy)]">
                    <Icon className="h-6 w-6 stroke-[1.8]" />
                  </div>

                  <h3 className="mt-7 max-w-[270px] text-[19px] font-medium leading-[1.45] tracking-[-0.01em] text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[300px] text-[14.5px] leading-[1.7] text-[var(--ink-2)]">
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container-x relative z-10">
          <SectionLabel number="04">Technology Stack</SectionLabel>
          <h2 className="heading-lg mx-auto mt-6 max-w-[700px] text-center text-[var(--ink)]">
            Our Core Technology Stack
          </h2>
          <div className="mt-12 space-y-6">
            {content.techStack.map((group, groupIndex) => (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                className="grid items-center gap-6 border-b border-[var(--border)] pb-6 md:grid-cols-[160px_1fr]"
              >
                <div className="label-mono !text-[var(--sky-deep)]">{group.group}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="body-sm rounded-lg border border-[var(--border)] bg-white px-4 py-2 font-medium text-[var(--ink)] transition-all hover:-translate-y-0.5 hover:border-[var(--border-2)] hover:shadow-[0_8px_24px_-12px_rgba(0,32,87,0.2)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-2)] py-20 md:py-28">
        <div className="container-x">
          <SectionLabel number="05">Approach</SectionLabel>
          <h2 className="heading-lg mx-auto mt-6 max-w-[700px] text-center text-[var(--ink)]">
            How We Work.
          </h2>

          <div className="mt-16 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <ol className="space-y-8">
              {content.approach.map((step, index) => (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid grid-cols-[60px_1fr] gap-5"
                >
                  <div className="pt-1 font-mono text-[28px] leading-none text-gradient-brand">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="heading-md font-bold text-[var(--ink)]">{step.title}</h3>
                    <p className="body-base mt-2 text-[var(--ink-2)]">{step.body}</p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <div>
              <HLDDiagram spec={content.hld} />
              <div className="label-mono mt-3 text-center">High-level architecture</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-[var(--navy)] p-12 text-white md:p-20"
          >
            <div className="relative grid items-end gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <div className="label-mono !text-[var(--sky)]">{content.caseStudy.tag}</div>
                <h3 className="heading-lg mt-4 max-w-[720px] text-white">
                  {content.caseStudy.title}
                </h3>
                <p className="body-base mt-5 text-white/70">{content.caseStudy.outcome}</p>
                <div className="mt-2 text-[13px] text-white/40">{content.caseStudy.client}</div>
              </div>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 border-b border-white/30 pb-1 text-[14px] text-white transition-colors hover:border-[var(--sky-bright)]"
              >
                Read Case Study <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container-x">
          <div className="flex flex-wrap items-center justify-between gap-6 border-y border-[var(--border)] py-8">
            <div className="heading-md text-[var(--ink)]">Have a project in mind?</div>
            <MagneticButton to="/contact">
              Talk to a specialist <ArrowRight className="ml-2 h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
