"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Quote } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { ScrollCounter } from "@/components/ui/ScrollCounter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionAccentPattern } from "@/components/ui/SectionAccentPattern";

const INDUSTRIES = [
  "All",
  "Healthcare",
  "Finance",
  "Logistics",
  "Retail",
  "Manufacturing",
  "Insurance",
  "Public Sector",
] as const;

type Industry = (typeof INDUSTRIES)[number];

const CLIENTS: { name: string; industry: Industry; tag: string }[] = [
  { name: "Northbridge Health", industry: "Healthcare", tag: "12-hospital network" },
  { name: "Meridian Capital", industry: "Finance", tag: "Asset management" },
  { name: "Vanta Logistics", industry: "Logistics", tag: "Global 3PL" },
  { name: "Halcyon Retail", industry: "Retail", tag: "Apparel / Global" },
  { name: "Atrium Health Group", industry: "Healthcare", tag: "Integrated delivery" },
  { name: "Beacon Insurance", industry: "Insurance", tag: "P&C carrier" },
  { name: "Polaris Industries", industry: "Manufacturing", tag: "Industrial OEM" },
  { name: "Ridgeline Bank", industry: "Finance", tag: "Regional banking" },
  { name: "Coastline Foods", industry: "Retail", tag: "Grocery chain" },
  { name: "Aerie Freight", industry: "Logistics", tag: "Air cargo" },
  { name: "Summit County", industry: "Public Sector", tag: "State agency" },
  { name: "Lattice Robotics", industry: "Manufacturing", tag: "Automation" },
];

const TESTIMONIALS = [
  {
    quote:
      "CentricaSoft did not just build us a chatbot. They built us a system our analysts actually trust. Citations, audit logs, the whole stack. We rolled it out across the firm in 90 days.",
    author: "VP, Equity Research",
    company: "Top-10 US asset manager",
    industry: "Finance",
  },
  {
    quote:
      "We had tried two other vendors before CentricaSoft. Their team was the only one that understood healthcare workflows and petabyte data. The agent shipped on time. Nurses love it.",
    author: "CTO",
    company: "12-hospital health system",
    industry: "Healthcare",
  },
  {
    quote:
      "They cut our cloud bill by 62 percent while making our pipelines 14x faster. They optimized things we did not even know were broken. Best engineering partnership we have had.",
    author: "VP, Data Engineering",
    company: "Global 3PL provider",
    industry: "Logistics",
  },
] as const;

const TOPLINE_STATS = [
  { value: 100, suffix: "+", label: "Engagements delivered" },
  { value: 8, suffix: "", label: "Industries served" },
  { value: 3, suffix: "", label: "Continents" },
] as const;

export default function ClientsPage() {
  const [active, setActive] = useState<Industry>("All");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const filtered = useMemo(
    () => (active === "All" ? CLIENTS : CLIENTS.filter((client) => client.industry === active)),
    [active],
  );

  return (
    <>
      <PageHero
        pill="02 · Company"
        title="Trusted by teams with real stakes."
        subtitle="We work with healthcare, finance, logistics, and public-sector organizations that need dependable execution, not experimentation theater."
        variant="immersive"
        tone="company"
        size="compact"
        asideLabel="Client relationships"
        meta={["100+ engagements", "Enterprise workflows", "Outcome-driven delivery"]}
        backgroundImage="https://images.pexels.com/photos/7495196/pexels-photo-7495196.jpeg?cs=srgb&dl=pexels-moe-magners-7495196.jpg&fm=jpg"
      />

      <section className="relative z-10 -mt-10 pb-10 md:-mt-14 md:pb-14">
        <div className="container-x">
          <div className="overflow-hidden rounded-[28px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(238,245,251,0.94))] shadow-[0_28px_80px_-42px_rgba(0,18,52,0.42)] backdrop-blur-sm">
            <div className="grid grid-cols-3 gap-px bg-[var(--border)]">
              {TOPLINE_STATS.map((stat) => (
                <div key={stat.label} className="bg-white px-6 py-5">
                  <div className="font-display text-[clamp(28px,4vw,40px)] leading-none text-gradient-brand">
                    <ScrollCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-[13px] text-[var(--ink-2)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="container-x relative z-10">
          <SectionLabel number="01">Selected Clients</SectionLabel>
          <h2 className="mt-6 max-w-[700px] font-display text-[clamp(36px,5vw,56px)] leading-[1.05] text-[var(--ink)]">
            Industries we serve.
          </h2>

          <div className="mt-12 flex flex-wrap gap-2">
            {INDUSTRIES.map((industry) => {
              const isActive = active === industry;

              return (
                <button
                  key={industry}
                  type="button"
                  onClick={() => setActive(industry)}
                  className={`relative rounded-full px-4 py-2 text-[13px] font-medium transition-all ${
                    isActive
                      ? "text-white"
                      : "border border-[var(--border)] bg-white text-[var(--ink-2)] hover:border-[var(--border-2)]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="industry-pill"
                      className="absolute inset-0 rounded-full bg-gradient-brand-h"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{industry}</span>
                </button>
              );
            })}
          </div>

          <motion.div
            layout
            className="mt-12 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)]"
          >
            <div className="grid grid-cols-2 gap-px md:grid-cols-3 lg:grid-cols-4">
              <AnimatePresence mode="popLayout">
                {filtered.map((client) => (
                  <motion.div
                    key={client.name}
                    layout
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.3 }}
                    className="group relative flex min-h-[148px] flex-col justify-between bg-white p-6 transition-colors hover:bg-[var(--surface-2)]"
                  >
                    <div className="label-mono !text-[var(--sky-deep)]">{client.industry}</div>
                    <div>
                      <div className="font-display text-[18px] leading-tight text-[var(--ink)]">
                        {client.name}
                      </div>
                      <div className="mt-1 text-[12px] text-[var(--ink-3)]">{client.tag}</div>
                    </div>
                    <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-[var(--border-2)] opacity-0 transition-opacity group-hover:opacity-100" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-[15px] text-[var(--ink-3)]">
              No clients in this category yet. Talk to us about being the first.
            </p>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--surface-2)] py-20 md:py-24">
        <SectionAccentPattern variant="split-right" />
        <div className="container-x relative z-10">
          <SectionLabel number="02">In Their Words</SectionLabel>
          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[auto_1fr]">
            <div className="font-mono text-[12px] text-[var(--ink-3)]">
              <span className="text-[var(--ink)]">
                {String(testimonialIndex + 1).padStart(2, "0")}
              </span>{" "}
              / {String(TESTIMONIALS.length).padStart(2, "0")}
            </div>
            <div className="flex gap-3 lg:justify-end">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setTestimonialIndex(index)}
                  aria-label={`Testimonial ${index + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    index === testimonialIndex
                      ? "w-10 bg-gradient-brand-h"
                      : "w-6 bg-[var(--border-2)] hover:bg-[var(--ink-3)]"
                  }`}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={testimonialIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 max-w-[1000px]"
            >
              <Quote className="h-12 w-12 text-[var(--sky-bright)] opacity-50" />
              <blockquote className="mt-6 font-display text-[clamp(24px,3.5vw,40px)] leading-[1.25] text-[var(--ink)]">
                {TESTIMONIALS[testimonialIndex].quote}
              </blockquote>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-[16px] text-white font-display">
                  {TESTIMONIALS[testimonialIndex].author.split(",")[0][0]}
                </div>
                <div>
                  <div className="text-[15px] font-medium text-[var(--ink)]">
                    {TESTIMONIALS[testimonialIndex].author}
                  </div>
                  <div className="text-[13px] text-[var(--ink-3)]">
                    {TESTIMONIALS[testimonialIndex].company} /{" "}
                    {TESTIMONIALS[testimonialIndex].industry}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
