"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { HoverTilt } from "@/components/ui/HoverTilt";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionAccentPattern } from "@/components/ui/SectionAccentPattern";

const TIERS = ["Strategic", "Premier", "Select"] as const;

const AWS_LOGO =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23FF9900' d='M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.063-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.15 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.15 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.256-.024-.32-.08-.063-.056-.12-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.557 15.547c-2.623 1.94-6.442 2.97-9.724 2.97-4.598 0-8.74-1.7-11.868-4.527-.247-.223-.024-.527.271-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.384.607z'/%3E%3C/svg%3E";
const AZURE_LOGO =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%230078D4' d='M13.05 4.24L6.56 18.05l-4.57-.01 5.32-9.25-2.91-5.47zm.7 1.06l4.45 12.76-8.35-1.36 6.49-1.4-2.88-5.4z'/%3E%3C/svg%3E";
const OPENAI_LOGO =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2310a37f' d='M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.001 14.63A4.504 4.504 0 0 1 2.34 7.896zm16.597 3.855l-5.843-3.372 2.019-1.168a.076.076 0 0 1 .071 0l4.817 2.797a4.4 4.4 0 0 1-.684 7.94v-5.68a.79.79 0 0 0-.38-.517zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.815-2.787a4.5 4.5 0 0 1 6.679 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z'/%3E%3C/svg%3E";
const PINECONE_LOGO =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cg fill='none' stroke='%2300A878' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M24 5l13 7.5v15L24 43 11 27.5v-15L24 5z'/%3E%3Cpath d='M24 5v15M11 12.5l13 7.5 13-7.5M11 27.5l13 7.5 13-7.5M24 20v15'/%3E%3C/g%3E%3C/svg%3E";

const TECH_PARTNERS: {
  name: string;
  category: string;
  tier: (typeof TIERS)[number];
  blurb: string;
  logo: string;
  logoClassName?: string;
}[] = [
  {
    name: "Snowflake",
    category: "Data Cloud",
    tier: "Strategic",
    blurb: "Certified consulting partner for lakehouse migrations and Cortex AI deployments.",
    logo: "https://cdn.simpleicons.org/snowflake/29B5E8",
  },
  {
    name: "Databricks",
    category: "Lakehouse",
    tier: "Strategic",
    blurb: "Partnered delivery for production Spark, Delta, and ML pipeline implementation.",
    logo: "https://cdn.simpleicons.org/databricks/FF3621",
  },
  {
    name: "AWS",
    category: "Hyperscaler",
    tier: "Strategic",
    blurb: "Bedrock, SageMaker, and serverless data platforms with enterprise governance.",
    logo: AWS_LOGO,
  },
  {
    name: "Google Cloud",
    category: "Hyperscaler",
    tier: "Premier",
    blurb: "Vertex AI, BigQuery, and Looker delivery for full-stack modern data estates.",
    logo: "https://cdn.simpleicons.org/googlecloud/4285F4",
  },
  {
    name: "Microsoft Azure",
    category: "Hyperscaler",
    tier: "Premier",
    blurb: "Azure OpenAI, Fabric, and Synapse for enterprise-grade Microsoft cloud delivery.",
    logo: AZURE_LOGO,
  },
  {
    name: "OpenAI",
    category: "AI Provider",
    tier: "Premier",
    blurb: "Production-grade GPT deployments with guardrails, usage governance, and cost control.",
    logo: OPENAI_LOGO,
  },
  {
    name: "Anthropic",
    category: "AI Provider",
    tier: "Premier",
    blurb: "Claude-based systems for high-stakes agentic workloads and safer enterprise adoption.",
    logo: "https://cdn.simpleicons.org/anthropic/111827",
  },
  {
    name: "LangChain",
    category: "AI Tooling",
    tier: "Select",
    blurb: "LangGraph and LangSmith orchestration and observability for multi-agent systems.",
    logo: "https://cdn.simpleicons.org/langchain/1C3C3C",
  },
  {
    name: "Pinecone",
    category: "Vector DB",
    tier: "Select",
    blurb: "Hosted vector search powering our largest production RAG deployments.",
    logo: PINECONE_LOGO,
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
  Strategic: "bg-gradient-brand-h !text-white",
  Premier: "bg-[var(--navy)] !text-white",
  Select: "bg-[var(--surface-3)] !text-[var(--sky-deep)]",
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

      <section className="bg-[var(--surface-2)] py-20 md:py-28">
        <div className="container-x">
          <SectionLabel number="01">Why It Matters</SectionLabel>
          <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
            <h2 className="heading-lg text-center text-[var(--ink)]">
              Certified expertise. <span className="text-gradient-brand">Direct lines</span> to
              product teams.
            </h2>
            <div className="body-base space-y-5 text-[var(--ink-2)]">
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

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container-x relative z-10">
          <SectionLabel number="02">Technology Partners</SectionLabel>
          <h2 className="heading-lg mx-auto mt-6 max-w-[700px] text-center text-[var(--ink)]">
            The platforms we deploy on.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TECH_PARTNERS.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
              >
                <HoverTilt max={3}>
                  <div className="group flex h-full min-h-[270px] flex-col rounded-2xl border border-[var(--border-2)] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--sky-deep)]/35 hover:shadow-[0_20px_60px_-24px_rgba(0,32,87,0.18)]">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-3">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className={partner.logoClassName ?? "h-8 w-8 object-contain"}
                          loading="lazy"
                        />
                      </div>
                      <span
                        className={`label-mono rounded-md px-2.5 py-1.5 !text-[9px] ${TIER_STYLE[partner.tier]}`}
                      >
                        {partner.tier}
                      </span>
                    </div>
                    <h3 className="heading-md mt-7 text-[var(--ink)]">{partner.name}</h3>
                    <div className="label-mono mt-2 !text-[11px] !tracking-[0.18em] !text-[var(--sky-deep)]">
                      {partner.category}
                    </div>
                    <p className="body-base mt-5 text-[var(--ink-2)]">{partner.blurb}</p>
                  </div>
                </HoverTilt>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-2)] py-20 md:py-28">
        <div className="container-x">
          <SectionLabel number="03">Delivery Partners</SectionLabel>
          <div className="mb-12 mt-6 grid items-end gap-6 lg:grid-cols-[1fr_auto]">
            <h2 className="heading-lg mx-auto max-w-[700px] text-center text-[var(--ink)]">
              Global reach. Local expertise.
            </h2>
            <p className="body-base max-w-[400px] text-[var(--ink-2)]">
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
                    <h3 className="heading-md mt-2 font-bold text-[var(--ink)]">{partner.name}</h3>
                    <p className="body-sm mt-2 text-[var(--ink-2)]">{partner.focus}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
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
                <h2 className="heading-lg mt-5 max-w-[640px]">Want to join the ecosystem?</h2>
                <p className="body-base mt-5 max-w-[520px] text-white/65">
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
