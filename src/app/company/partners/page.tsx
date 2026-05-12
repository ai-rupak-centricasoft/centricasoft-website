"use client";

import { motion } from "framer-motion";
import { Brain, Briefcase, Cloud, Database } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { HoverTilt } from "@/components/ui/HoverTilt";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionAccentPattern } from "@/components/ui/SectionAccentPattern";

const TIERS = ["Strategic", "Premier", "Select"] as const;

const TECH_PARTNERS: {
  name: string;
  category: string;
  tier: (typeof TIERS)[number];
  blurb: string;
  icon: typeof Cloud;
}[] = [
  {
    name: "Snowflake",
    category: "Data Cloud",
    tier: "Strategic",
    blurb: "Certified consulting partner for lakehouse migrations and Cortex AI deployments.",
    icon: Database,
  },
  {
    name: "Databricks",
    category: "Lakehouse",
    tier: "Strategic",
    blurb: "Partnered delivery for production Spark, Delta, and ML pipeline implementation.",
    icon: Database,
  },
  {
    name: "AWS",
    category: "Hyperscaler",
    tier: "Strategic",
    blurb: "Bedrock, SageMaker, and serverless data platforms with enterprise governance.",
    icon: Cloud,
  },
  {
    name: "Google Cloud",
    category: "Hyperscaler",
    tier: "Premier",
    blurb: "Vertex AI, BigQuery, and Looker delivery for full-stack modern data estates.",
    icon: Cloud,
  },
  {
    name: "Microsoft Azure",
    category: "Hyperscaler",
    tier: "Premier",
    blurb: "Azure OpenAI, Fabric, and Synapse for enterprise-grade Microsoft cloud delivery.",
    icon: Cloud,
  },
  {
    name: "OpenAI",
    category: "AI Provider",
    tier: "Premier",
    blurb: "Production-grade GPT deployments with guardrails, usage governance, and cost control.",
    icon: Brain,
  },
  {
    name: "Anthropic",
    category: "AI Provider",
    tier: "Premier",
    blurb: "Claude-based systems for high-stakes agentic workloads and safer enterprise adoption.",
    icon: Brain,
  },
  {
    name: "LangChain",
    category: "AI Tooling",
    tier: "Select",
    blurb: "LangGraph and LangSmith orchestration and observability for multi-agent systems.",
    icon: Brain,
  },
  {
    name: "Pinecone",
    category: "Vector DB",
    tier: "Select",
    blurb: "Hosted vector search powering our largest production RAG deployments.",
    icon: Database,
  },
];

const DELIVERY_PARTNERS = [
  {
    name: "Cognivantix Advisory",
    region: "North America",
    focus: "Healthcare strategy",
  },
  {
    name: "Northstar Consulting",
    region: "Europe",
    focus: "Financial services delivery",
  },
  {
    name: "Vellum Talent",
    region: "Global",
    focus: "Specialist AI staff augmentation",
  },
  {
    name: "Aperture Insights",
    region: "APAC",
    focus: "Retail and logistics analytics",
  },
] as const;

const TIER_STYLE: Record<(typeof TIERS)[number], string> = {
  Strategic: "bg-gradient-brand-h text-white",
  Premier: "bg-[var(--navy)] text-white",
  Select: "bg-[var(--surface-3)] text-[var(--sky-deep)]",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        pill="03 · Company"
        title="Partnerships that strengthen delivery."
        subtitle="Our ecosystem brings together the platforms, tooling, and specialist partners that help enterprise programs move with more confidence and less friction."
        variant="immersive"
        tone="company"
        size="compact"
        asideLabel="Partner ecosystem"
        meta={["Cloud platforms", "AI providers", "Delivery allies"]}
        backgroundImage="https://images.pexels.com/photos/6931199/pexels-photo-6931199.jpeg?cs=srgb&dl=pexels-mikhail-nilov-6931199.jpg&fm=jpg"
      />

      <section className="relative overflow-hidden bg-[var(--surface-2)] py-20 md:py-24">
        <SectionAccentPattern variant="top-left" />
        <div className="container-x relative z-10">
          <SectionLabel number="01">Why It Matters</SectionLabel>
          <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <h2 className="font-display text-[clamp(32px,5vw,52px)] leading-[1.1] text-[var(--ink)]">
              Certified expertise. <span className="text-gradient-brand">Direct lines</span> to
              product teams.
            </h2>
            <div className="space-y-5 text-[16px] leading-[1.8] text-[var(--ink-2)]">
              <p>
                Our partner program is not decoration. It is leverage. Direct escalation paths to
                Snowflake support, early access to Bedrock features, and joint roadmap sessions with
                Databricks engineering.
              </p>
              <p>
                When your project needs a hand from the platform team itself, we already have it on
                speed dial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="container-x relative z-10">
          <SectionLabel number="02">Technology Partners</SectionLabel>
          <h2 className="mt-6 max-w-[700px] font-display text-[clamp(36px,5vw,56px)] leading-[1.05] text-[var(--ink)]">
            The platforms we deploy on.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TECH_PARTNERS.map((partner, index) => {
              const Icon = partner.icon;

              return (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                >
                  <HoverTilt max={3}>
                    <div className="group h-full rounded-2xl border border-[var(--border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,32,87,0.15)]">
                      <div className="flex items-start justify-between gap-4">
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--sky-deep)] transition-all group-hover:bg-gradient-brand-h group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span
                          className={`label-mono rounded-md px-2 py-1 !text-[9px] !text-current ${TIER_STYLE[partner.tier]}`}
                        >
                          {partner.tier}
                        </span>
                      </div>
                      <h3 className="mt-6 font-display text-[24px] leading-tight text-[var(--ink)]">
                        {partner.name}
                      </h3>
                      <div className="label-mono mt-1 !text-[var(--sky-deep)]">
                        {partner.category}
                      </div>
                      <p className="mt-4 text-[14px] leading-[1.7] text-[var(--ink-2)]">
                        {partner.blurb}
                      </p>
                    </div>
                  </HoverTilt>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--surface-2)] py-20 md:py-24">
        <SectionAccentPattern variant="split-right" />
        <div className="container-x relative z-10">
          <SectionLabel number="03">Delivery Partners</SectionLabel>
          <div className="mb-12 mt-6 grid items-end gap-6 lg:grid-cols-[1fr_auto]">
            <h2 className="max-w-[700px] font-display text-[clamp(36px,5vw,56px)] leading-[1.05] text-[var(--ink)]">
              Global reach. Local expertise.
            </h2>
            <p className="max-w-[400px] text-[15px] leading-[1.7] text-[var(--ink-2)]">
              Our delivery network extends our team into every major region without losing the
              quality bar.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)]">
            <div className="grid gap-px md:grid-cols-2">
              {DELIVERY_PARTNERS.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-start gap-5 bg-white p-8"
                >
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-2)] text-[var(--sky-deep)]">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="label-mono !text-[var(--sky-deep)]">{partner.region}</div>
                    <h3 className="mt-2 font-heading text-[20px] font-bold text-[var(--ink)]">
                      {partner.name}
                    </h3>
                    <p className="mt-2 text-[14px] text-[var(--ink-2)]">{partner.focus}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-[var(--navy)] p-12 text-white md:p-20"
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(50% 70% at 80% 50%, rgba(30,191,255,0.4), transparent)",
              }}
            />
            <div className="relative grid items-end gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <div className="label-mono !text-[var(--sky)]">Partner With Us</div>
                <h2 className="mt-5 max-w-[640px] font-display text-[clamp(32px,5vw,52px)] leading-[1.05]">
                  Want to join the ecosystem?
                </h2>
                <p className="mt-5 max-w-[520px] text-[15px] leading-[1.7] text-white/65">
                  Whether you are a technology platform, a regional consultancy, or a specialist
                  studio, we are always looking for partners who care about engineering excellence.
                </p>
              </div>
              <a
                href="mailto:partners@centricasoft.com"
                className="inline-flex h-[52px] items-center gap-2 rounded-full bg-white px-7 text-[15px] font-medium text-[var(--navy)] transition-colors hover:bg-[var(--sky)]"
              >
                Become a Partner {"->"}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
