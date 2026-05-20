"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, Database, Plug } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { HoverTilt } from "@/components/ui/HoverTilt";
import { HLDDiagram } from "@/components/ui/HLDDiagram";
import { HorizontalCarousel } from "@/components/ui/HorizontalCarousel";
import { CTAStrip } from "@/components/sections/CTAStrip";
import type { HLDSpec } from "@/lib/services-data";

const NUBO_HLD: HLDSpec = {
  height: 560,
  nodes: [
    {
      id: "user",
      label: "User Layer",
      sub: "Web · App · API",
      x: 4,
      y: 8,
      w: 200,
      variant: "muted",
    },
    {
      id: "gw",
      label: "Nubo Gateway",
      sub: "Auth · Routing",
      x: 38,
      y: 8,
      w: 200,
      variant: "primary",
    },
    { id: "audit", label: "Audit Log", x: 74, y: 8, w: 160, variant: "muted" },
    { id: "prompt", label: "Prompt Engine", sub: "System + Few-shot", x: 4, y: 32, w: 200 },
    { id: "rag", label: "RAG Retriever", sub: "Hybrid + Rerank", x: 38, y: 32, w: 200 },
    {
      id: "vec",
      label: "Vector DB",
      sub: "Pinecone / pgvector",
      x: 74,
      y: 32,
      w: 200,
      variant: "muted",
    },
    {
      id: "llm",
      label: "LLM Router",
      sub: "GPT-4o · Claude · Mistral",
      x: 22,
      y: 56,
      w: 280,
      variant: "primary",
    },
    {
      id: "guard",
      label: "Guardrails + Formatter",
      sub: "Citations · Schema",
      x: 22,
      y: 78,
      w: 280,
    },
    { id: "out", label: "Response", x: 4, y: 92, w: 140, variant: "primary" },
    {
      id: "kb",
      label: "Knowledge Base",
      sub: "Confluence · S3 · DB",
      x: 60,
      y: 92,
      w: 200,
      variant: "muted",
    },
  ],
  edges: [
    { from: "user", to: "gw" },
    { from: "gw", to: "audit" },
    { from: "gw", to: "prompt" },
    { from: "gw", to: "rag" },
    { from: "rag", to: "vec" },
    { from: "vec", to: "kb" },
    { from: "prompt", to: "llm" },
    { from: "rag", to: "llm" },
    { from: "llm", to: "guard" },
    { from: "guard", to: "out" },
  ],
};

const USE_CASES = [
  {
    industry: "Healthcare",
    title: "Clinical knowledge assistant",
    body: "Grounded in 12+ years of clinical guidelines, protocols, and case histories — with full source citations.",
    metric: "62% reduction in support tickets",
  },
  {
    industry: "Finance",
    title: "Equity research copilot",
    body: "Instant answers from internal filings, earnings calls, and analyst notes — cited and audit-ready.",
    metric: "Hours → seconds for analyst lookups",
  },
  {
    industry: "Sales",
    title: "Deal intelligence agent",
    body: "Surface account history, competitive positioning, and next-best-action — directly inside Salesforce.",
    metric: "28% lift in qualified pipeline",
  },
  {
    industry: "HR",
    title: "Policy & benefits assistant",
    body: "Answer employee questions across 40+ policy documents — securely, with permission-aware retrieval.",
    metric: "85% deflection from HR helpdesk",
  },
  {
    industry: "Logistics",
    title: "Operations chat",
    body: "Conversational interface for ops teams — track shipments, query SLAs, escalate exceptions.",
    metric: "11min avg time saved per dispatcher",
  },
  {
    industry: "Legal",
    title: "Contract intelligence",
    body: "Search across thousands of contracts with clause-level retrieval and obligation tracking.",
    metric: "47× faster contract review",
  },
];

const CAPABILITIES = [
  {
    icon: Sparkles,
    title: "Prompt Engineering",
    body: "We craft precision prompts that guide Nubo's intelligence — eliminating hallucinations, improving accuracy, reducing cost. Versioned, evaluated, and continuously refined like production code.",
    chips: ["System prompts", "Few-shot", "Output schemas", "A/B testing"],
  },
  {
    icon: Database,
    title: "Retrieval-Augmented Generation",
    body: "Nubo connects to your knowledge base in real time — fetching context, synthesizing answers, citing sources. Hybrid search combines semantic and keyword retrieval with reranking for accuracy.",
    chips: ["Hybrid search", "Reranking", "Citations", "RBAC"],
    flip: true,
  },
  {
    icon: Plug,
    title: "Seamless Integration",
    body: "Connect Nubo to your CRM, ERP, ticketing system, or internal wiki in days, not months. Prebuilt connectors cover Salesforce, ServiceNow, Confluence, Slack, Teams, and custom APIs.",
    chips: ["Salesforce", "ServiceNow", "Confluence", "Slack"],
  },
];

export default function NuboPage() {
  return (
    <>
      {/* â”€â”€ Split hero: left text Â· right chat card â”€â”€ */}
      <section className="bg-[var(--bg)] px-4 pb-4 pt-[88px] text-white md:px-5 md:pb-6 md:pt-[92px]">
        <div className="relative isolate flex min-h-[390px] items-center justify-center overflow-hidden rounded-[24px] bg-[var(--navy-deep)] px-6 py-12 text-center shadow-[0_26px_72px_-58px_rgba(0,18,52,0.72)] md:min-h-[430px] md:px-10 md:py-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(118deg, rgba(0,18,52,0.98) 0%, rgba(0,32,87,0.9) 48%, rgba(0,53,128,0.82) 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-75"
            style={{
              background:
                "radial-gradient(60% 70% at 50% 22%, rgba(30,191,255,0.25), transparent 72%), radial-gradient(34% 42% at 18% 76%, rgba(168,207,230,0.16), transparent 72%), radial-gradient(34% 44% at 86% 30%, rgba(0,119,182,0.26), transparent 76%)",
            }}
          />
          <div className="pointer-events-none absolute inset-x-0 top-[18%] mx-auto h-[52%] max-w-[760px] rounded-[48px] bg-[radial-gradient(circle_at_center,rgba(4,12,28,0.54)_0%,rgba(4,12,28,0.28)_48%,transparent_78%)] blur-3xl" />

          <div className="relative z-10 mx-auto flex max-w-[880px] flex-col items-center">
            {/* ── TOP: text ── */}
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-3 rounded-full border border-white/18 bg-black/34 px-4 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.26)] backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--sky-bright)] animate-pulse-dot" />
              <span className="label-mono !text-[10px] !tracking-[0.2em] !text-white/80">
                Enterprise GenAI chatbot platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-[820px] font-display text-[clamp(34px,5.2vw,60px)] font-[430] leading-[1.02] tracking-[-0.045em]"
              style={{ textShadow: "0 8px 32px rgba(0,0,0,0.26)" }}
            >
              Nubo for dependable enterprise AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-[610px] text-[14px] leading-[1.7] tracking-[-0.01em] text-white/84 sm:text-[15.5px]"
            >
              End-to-end GenAI chatbot platform. RAG-grounded, prompt-engineered, integration-ready
              — built for enterprises that cannot afford hallucinations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
              className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            >
              <MagneticButton
                to="/contact"
                variant="white"
                className="!h-[50px] !gap-2 !px-7 !text-[14px] !font-medium sm:!h-[54px] sm:!px-10 sm:!text-[15px]"
              >
                Request a Demo
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
              <a
                href="#how-it-works"
                className="group inline-flex h-[50px] items-center gap-2 rounded-full border border-white/16 bg-white/8 px-7 text-[14px] font-normal text-white/90 backdrop-blur-md transition-all duration-300 hover:border-white/28 hover:bg-white/14 hover:text-white sm:h-[54px] sm:px-9 sm:text-[15px]"
              >
                See How It Works
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            {/* Mini stats row */}

            {/* ── BOTTOM: chat card ── */}
          </div>
        </div>
      </section>

      {/* CAPABILITIES — alternating rows */}
      <section className="bg-[var(--bg)] pb-16 pt-10 md:pb-24 md:pt-12" id="how-it-works">
        <div className="container-x">
          <SectionLabel number="02">Core Capabilities</SectionLabel>
          <h2 className="mt-6 mx-auto max-w-[640px] text-center font-display text-[clamp(32px,4.2vw,48px)] leading-[1.08] text-[var(--ink)]">
            Three pillars. One platform.
          </h2>

          <div className="mt-16 space-y-24">
            {CAPABILITIES.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.7 }}
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-12 ${
                    c.flip ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-brand-h text-white shadow-[0_18px_40px_-24px_rgba(0,32,87,0.7)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="mt-4 font-mono text-[11px] text-[var(--ink-3)]">
                      0{i + 1} / 03
                    </div>
                    <h3 className="mt-3 font-display text-[clamp(24px,3vw,34px)] leading-[1.12] text-[var(--ink)]">
                      {c.title}
                    </h3>
                    <p className="mt-5 text-[16px] leading-[1.75] text-[var(--ink-2)]">{c.body}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {c.chips.map((ch) => (
                        <span
                          key={ch}
                          className="label-mono !text-[10px] px-2.5 py-1 rounded-md bg-[var(--surface-2)] !text-[var(--sky-deep)]"
                        >
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>
                  <CapabilityVisual index={i} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="section-y bg-[var(--surface-2)]">
        <div className="container-x">
          <SectionLabel number="03">Architecture</SectionLabel>
          <div className="mb-12 mt-6 text-center">
            <h2 className="mx-auto max-w-[640px] font-display text-[clamp(32px,4.2vw,48px)] leading-[1.08] text-[var(--ink)]">
              Built for production. Audited by design.
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-[15px] text-[var(--ink-2)] leading-[1.7]">
              Every Nubo deployment ships with logging, citations, and guardrails — not as an
              afterthought, as the foundation.
            </p>
          </div>
          <HLDDiagram spec={NUBO_HLD} />
        </div>
      </section>

      {/* USE CASES carousel */}
      <section className="section-y bg-white">
        <div className="container-x">
          <div className="mb-10 text-center">
            <SectionLabel number="04">Use Cases</SectionLabel>
            <h2 className="mx-auto mt-6 max-w-[560px] font-display text-[clamp(32px,4.2vw,48px)] leading-[1.08] text-[var(--ink)]">
              One platform. Every industry.
            </h2>
          </div>
          <HorizontalCarousel itemCount={USE_CASES.length}>
            {USE_CASES.map((u, i) => (
              <div key={i} className="shrink-0 grow-0 px-2" style={{ flex: "0 0 min(380px, 90%)" }}>
                <HoverTilt max={3}>
                  <div className="h-full rounded-2xl border border-[var(--border)] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-24px_rgba(0,32,87,0.16)]">
                    <div className="label-mono !text-[var(--sky-deep)]">{u.industry}</div>
                    <h3 className="mt-4 font-heading font-bold text-[20px] text-[var(--ink)] leading-tight">
                      {u.title}
                    </h3>
                    <p className="mt-3 text-[14px] text-[var(--ink-2)] leading-[1.7]">{u.body}</p>
                    <div className="mt-6 pt-5 border-t border-[var(--border)]">
                      <div className="font-display text-[18px] leading-tight text-[var(--navy)]">
                        {u.metric}
                      </div>
                    </div>
                  </div>
                </HoverTilt>
              </div>
            ))}
          </HorizontalCarousel>
        </div>
      </section>

      {/* PRODUCT CTA */}
      <section className="py-24 bg-[var(--navy)] text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-35"
          style={{
            background:
              "radial-gradient(42% 70% at 50% 50%, rgba(30,191,255,0.42), transparent 70%), radial-gradient(34% 50% at 16% 32%, rgba(168,207,230,0.18), transparent 72%)",
          }}
        />
        <div className="container-x relative text-center">
          <h2 className="mx-auto max-w-[720px] font-display text-[clamp(34px,4.8vw,58px)] leading-[1.08]">
            Ready to deploy <span className="text-[#9fd8f3]">Nubo?</span>
          </h2>
          <p className="mt-6 text-[16px] text-white/65 max-w-[500px] mx-auto leading-[1.7]">
            Book a working session with our team. We'll scope your use case and ship a
            proof-of-value in 14 days.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <MagneticButton to="/contact" variant="white">
              Request a Nubo Demo
            </MagneticButton>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[15px] text-white/80 hover:text-white border-b border-white/30 pb-1"
            >
              Talk to an Expert <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}

/* — Inline visuals for capability rows (CSS/SVG, no images) — */
function CapabilityVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="relative rounded-2xl bg-gradient-subtle border border-[var(--border)] p-8 aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 grain opacity-[0.04]" />
        <div className="relative h-full flex flex-col justify-between gap-3">
          <div className="space-y-3">
            <div className="label-mono">Prompt</div>
            <div className="rounded-xl bg-white border border-[var(--border)] p-4 font-mono text-[12px] text-[var(--ink-2)] leading-[1.6]">
              <span className="text-[var(--sky-deep)]">system:</span> Answer using only the
              retrieved context. Cite source IDs. Refuse if unsure.
              <br />
              <span className="text-[var(--sky-deep)]">user:</span> Summarize Q3 risk exposure.
            </div>
          </div>
          <div className="flex items-center gap-3 self-center">
            <div className="h-px w-12 bg-gradient-brand-h" />
            <div className="font-mono text-[10px] text-[var(--sky-deep)]">PROCESS</div>
            <div className="h-px w-12 bg-gradient-brand-h" />
          </div>
          <div className="space-y-2">
            <div className="label-mono !text-[var(--sky-deep)]">Output</div>
            <div className="rounded-xl bg-[var(--navy)] text-white p-4 text-[12.5px] leading-[1.55]">
              Q3 risk exposure rose 8.4% driven by FX volatility{" "}
              <span className="text-[var(--sky-bright)]">[src: 12, 47]</span>.
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (index === 1) {
    return (
      <div className="relative rounded-2xl bg-gradient-subtle border border-[var(--border)] p-10 aspect-[4/3]">
        <div className="absolute inset-0 grain opacity-[0.04] rounded-2xl" />
        <div className="relative h-full grid grid-cols-3 gap-4 items-center">
          <div className="space-y-3">
            {["Confluence", "S3 Bucket", "Postgres"].map((s) => (
              <div
                key={s}
                className="rounded-lg bg-white border border-[var(--border)] px-3 py-2.5 text-[12px] text-[var(--ink-2)] text-center"
              >
                {s}
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="rounded-xl bg-gradient-brand-h text-white px-3 py-3 text-[11px] text-center font-medium leading-tight">
              Embed
              <br />+ Index
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-[var(--sky-bright)] to-transparent" />
            <div className="rounded-xl bg-[var(--navy)] text-white px-3 py-3 text-[11px] text-center font-medium leading-tight">
              Retrieve
              <br />+ Rerank
            </div>
          </div>
          <div className="rounded-xl bg-white border border-[var(--border-2)] p-4 text-center">
            <div className="label-mono !text-[var(--sky-deep)]">LLM</div>
            <div className="mt-2 font-display text-[28px] text-gradient-brand">N</div>
            <div className="mt-2 text-[10.5px] text-[var(--ink-3)]">Cited answer</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative rounded-2xl bg-gradient-subtle border border-[var(--border)] aspect-[4/3] overflow-hidden">
      <div className="absolute inset-0 grain opacity-[0.04]" />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
        <defs>
          <radialGradient id="nubo-hub" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#1EBFFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#002057" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="nubo-edge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#002057" />
            <stop offset="100%" stopColor="#1EBFFF" />
          </linearGradient>
        </defs>
        <circle cx="200" cy="150" r="120" fill="url(#nubo-hub)" />
        {[
          [60, 60],
          [340, 60],
          [40, 150],
          [360, 150],
          [60, 240],
          [340, 240],
        ].map(([x, y], i) => (
          <line
            key={i}
            x1="200"
            y1="150"
            x2={x}
            y2={y}
            stroke="url(#nubo-edge)"
            strokeWidth="1"
            strokeDasharray="3 4"
            opacity="0.5"
          />
        ))}
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl bg-[var(--navy)] text-white flex items-center justify-center font-display text-[28px] shadow-[0_20px_60px_-20px_rgba(0,32,87,0.5)]">
        N
      </div>
      {[
        { label: "Salesforce", pos: "top-[12%] left-[8%]" },
        { label: "Slack", pos: "top-[12%] right-[8%]" },
        { label: "ServiceNow", pos: "top-1/2 left-[2%] -translate-y-1/2" },
        { label: "Teams", pos: "top-1/2 right-[2%] -translate-y-1/2" },
        { label: "Confluence", pos: "bottom-[12%] left-[8%]" },
        { label: "Custom API", pos: "bottom-[12%] right-[8%]" },
      ].map((p) => (
        <div
          key={p.label}
          className={`absolute ${p.pos} px-2.5 py-1.5 rounded-lg bg-white border border-[var(--border)] text-[11px] font-medium text-[var(--ink-2)] shadow-sm`}
        >
          {p.label}
        </div>
      ))}
    </div>
  );
}
