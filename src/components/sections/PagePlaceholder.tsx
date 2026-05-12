"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function PagePlaceholder({
  pill,
  title,
  highlight,
  subtitle,
  children,
}: {
  pill: string;
  title: string;
  highlight?: string;
  subtitle: string;
  children?: ReactNode;
}) {
  // split title for highlight word
  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-gradient-brand">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <>
      <section className="relative pt-[160px] pb-32 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 70% at 70% 20%, rgba(30,191,255,0.1), transparent), radial-gradient(50% 50% at 10% 90%, rgba(0,32,87,0.05), transparent)",
          }}
        />
        <div className="container-x relative">
          <SectionLabel number={pill.split("·")[0]?.trim() ?? "—"}>
            {pill.split("·")[1]?.trim() ?? pill}
          </SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-display text-[clamp(48px,8vw,88px)] leading-[1.0] text-[var(--ink)] max-w-[1100px]"
          >
            {renderTitle()}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 max-w-[640px] text-[20px] text-[var(--ink-2)] leading-[1.6]"
          >
            {subtitle}
          </motion.p>
        </div>
      </section>

      {children ?? (
        <section className="section-y bg-[var(--surface-2)]">
          <div className="container-x">
            <div className="rounded-3xl bg-white border border-[var(--border)] p-12 md:p-20 text-center">
              <div className="label-mono text-[var(--sky-deep)]">In production · Coming next</div>
              <h2 className="mt-6 font-display text-[clamp(28px,4vw,40px)] text-[var(--ink)] max-w-[600px] mx-auto">
                Full storytelling page in build.
              </h2>
              <p className="mt-4 text-[15px] text-[var(--ink-2)] max-w-[480px] mx-auto leading-[1.7]">
                The expanded section — with HLD diagrams, expertise grids, technology stack and case
                study teasers — ships in the next iteration. In the meantime, talk to our team.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                <MagneticButton to="/contact">
                  Request a Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </MagneticButton>
                <Link href="/" className="text-[14px] text-[var(--sky-deep)] font-medium">
                  ← Back to home
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
