"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Database, Plug, Sparkles } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { NuboChatCard } from "@/components/ui/NuboChatCard";
import { HoverTilt } from "@/components/ui/HoverTilt";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Prompt Engineering",
    body: "Precision prompts that eliminate hallucinations and reduce token cost.",
  },
  {
    icon: Database,
    title: "Retrieval-Augmented Generation",
    body: "Grounded answers with referenced sources from your own knowledge base for full transparency.",
  },
  {
    icon: Plug,
    title: "Seamless Integration",
    body: "Deploys into Slack, Salesforce, your CRM, or your wiki in minutes.",
  },
];

export function NuboFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative overflow-hidden py-[clamp(72px,9vw,120px)]">
      {/* decorative giant text */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.035] select-none"
      >
        <span className="font-display font-bold text-[clamp(200px,30vw,400px)] leading-none text-[var(--navy)]">
          NUBO
        </span>
      </div>

      <div className="container-x relative">
        <SectionLabel number="03">Featured Product</SectionLabel>

        <div className="mt-14 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <ScrollReveal y={26}>
            <h2 className="font-display text-[clamp(40px,6vw,64px)] leading-[1.05] text-[var(--ink)]">
              Meet Nubo.
            </h2>
            <p className="mt-3 font-heading text-[clamp(20px,2.5vw,28px)] text-[var(--ink-2)]">
              Your Enterprise AI Brain.
            </p>
            <p className="mt-6 max-w-[520px] text-[17px] text-[var(--ink-2)] leading-[1.75]">
              Nubo is our production-grade GenAI chatbot platform — built on RAG, prompt
              engineering, and enterprise integration. One backbone for support, research, sales,
              and operations.
            </p>
          </ScrollReveal>

          <div className="mt-10 space-y-6 max-w-[540px]">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--surface-2)] flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-5 h-5 text-[var(--sky-deep)]" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-[16px] text-[var(--ink)]">
                    {f.title}
                  </h4>
                  <p className="mt-1 text-[14px] text-[var(--ink-2)] leading-[1.65]">{f.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <a
            href="/products/nubo"
            className="mt-10 inline-flex items-center gap-1.5 text-[15px] text-gradient-brand font-medium group"
          >
            <span className="relative text-[var(--navy)]">
              Explore Nubo
              <span className="absolute left-0 right-0 -bottom-1 h-px bg-[var(--sky-deep)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </span>
            <span aria-hidden className="text-[var(--sky-deep)]">
              →
            </span>
          </a>
        </div>

        <ScrollReveal x={32} y={20} delay={0.08} className="lg:col-span-5 flex justify-center">
          <motion.div style={{ y }}>
            <div className="animate-float-y">
              <HoverTilt>
                <NuboChatCard />
              </HoverTilt>
            </div>
          </motion.div>
        </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
