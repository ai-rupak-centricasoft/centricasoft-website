"use client";

import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function WhoWeAre() {
  return (
    <section className="pt-[clamp(72px,9vw,120px)] pb-[clamp(48px,7vw,88px)]">
      <div className="container-x">
        <SectionLabel number="01">Who We Are</SectionLabel>

        <div className="mx-auto mt-16 grid max-w-[1180px] items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,0.9fr)] lg:gap-16">
          <ScrollReveal y={24}>
            <h2 className="heading-lg max-w-[620px] text-center tracking-[-0.035em] text-[var(--ink)] lg:text-left">
              Enterprise AI and data engineering, built for production.
            </h2>
          </ScrollReveal>

          <ScrollReveal y={20} delay={0.1}>
            <div className="mx-auto max-w-[620px] space-y-6 text-center body-lg text-[var(--ink-2)] lg:mx-0 lg:text-left">
              <p>
                CentricaSoft is an AI, Data, and Cloud consulting firm focused on helping
                organizations design, build, and scale intelligent enterprise systems.
              </p>
              <p>
                We combine deep engineering expertise with enterprise delivery experience across AI,
                data platforms, cloud modernization, intelligent automation, and modern application
                development to deliver scalable technology solutions aligned with business outcomes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
