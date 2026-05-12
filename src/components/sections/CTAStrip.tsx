"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CTAStrip() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface-2)] py-[clamp(72px,9vw,120px)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03] select-none"
      >
        <span className="font-display font-bold text-[clamp(180px,28vw,360px)] leading-none text-[var(--navy)] whitespace-nowrap">
          CENTRICASOFT
        </span>
      </div>
      <ScrollReveal className="container-x relative text-center" y={28}>
        <h2 className="font-display text-[clamp(40px,7vw,80px)] leading-[1.0] text-[var(--ink)] max-w-[900px] mx-auto">
          Ready to engineer
          <br />
          your <span className="text-gradient-brand">future?</span>
        </h2>
        <p className="mt-6 text-[16px] text-[var(--ink-2)] max-w-[480px] mx-auto leading-[1.7]">
          Schedule a consultation with our AI and data experts. We respond within 24 hours.
        </p>
        <div className="mt-10 inline-block">
          <MagneticButton to="/contact" className="!h-14 !px-10 !text-[16px]">
            Request a Consultation
          </MagneticButton>
        </div>
      </ScrollReveal>
    </section>
  );
}
