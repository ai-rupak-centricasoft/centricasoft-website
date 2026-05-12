"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const ROW_1 = [
  "Mercer Health",
  "Northwind Capital",
  "Volaris Logistics",
  "Helix Bio",
  "Atlas Retail",
  "Quantum Energy",
  "Bridgepoint Bank",
];
const ROW_2 = [
  "Avery Pharma",
  "Continental Freight",
  "Stratos Insurance",
  "Vertex Manufacturing",
  "Polaris Telecom",
  "Indigo Markets",
  "Forge Industries",
];

function Row({ items, reverse }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="overflow-hidden mask-fade-x">
      <div
        className={`flex gap-16 whitespace-nowrap ${reverse ? "animate-marquee-rev" : "animate-marquee"}`}
      >
        {[...items, ...items, ...items].map((n, i) => (
          <span
            key={i}
            className="font-heading font-medium text-[20px] text-[var(--ink-3)] hover:text-[var(--navy)] transition-colors"
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Clients() {
  return (
    <section className="py-24 bg-[var(--surface-2)]">
      <ScrollReveal className="container-x mb-12" y={22}>
        <SectionLabel number="05">Trusted By</SectionLabel>
        <h2 className="mt-4 font-display text-[clamp(28px,4vw,40px)] text-[var(--ink)]">
          Enterprises building the next decade of intelligence.
        </h2>
      </ScrollReveal>
      <div className="space-y-6">
        <ScrollReveal y={18} delay={0.05}>
          <Row items={ROW_1} />
        </ScrollReveal>
        <ScrollReveal y={18} delay={0.12}>
          <Row items={ROW_2} reverse />
        </ScrollReveal>
      </div>
    </section>
  );
}
