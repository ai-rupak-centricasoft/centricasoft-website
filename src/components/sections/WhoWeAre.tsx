"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function WhoWeAre() {
  return (
    <section className="pt-[clamp(72px,9vw,120px)] pb-[clamp(32px,5vw,64px)]">
      <div className="container-x">
        <SectionLabel number="01">Who We Are</SectionLabel>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-12 lg:gap-20">
          <ScrollReveal x={-36} className="lg:col-span-7">
            <div className="max-w-[760px]">
              <h2 className="font-display text-[clamp(34px,5vw,58px)] leading-[1.07] tracking-[-0.035em] text-[var(--ink)]">
                Enterprise AI and data engineering,
                <br />
                built for production.
              </h2>

              <div className="mt-8 h-px w-20 bg-[rgba(88,113,138,0.28)]" />
            </div>
          </ScrollReveal>

          <ScrollReveal
            x={36}
            delay={0.08}
            className="space-y-6 lg:col-span-5 text-[17px] leading-[1.85] text-[var(--ink-2)]"
          >
            <p>
              CentricaSoft is an AI, Data, and Cloud consulting firm focused on helping
              organizations design, build, and scale intelligent enterprise systems.
            </p>

            <p>
              We combine deep engineering expertise with enterprise delivery experience across
              AI, data platforms, cloud modernization, intelligent automation, and modern
              application development to deliver scalable technology solutions aligned with
              business outcomes.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
