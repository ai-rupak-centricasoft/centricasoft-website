"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollCounter } from "@/components/ui/ScrollCounter";
import { HoverTilt } from "@/components/ui/HoverTilt";
import { HLDDiagram } from "@/components/ui/HLDDiagram";
import { HorizontalCarousel } from "@/components/ui/HorizontalCarousel";
import { CTAStrip } from "@/components/sections/CTAStrip";
import type { ServiceContent } from "@/lib/services-data";

const OFFERING_CARD_BACKGROUNDS = [
  "/service-card-bg/offer-01-ai-architecture.png",
  "/service-card-bg/offer-02-data-pipeline.png",
  "/service-card-bg/offer-03-orchestration-flow.png",
  "/service-card-bg/offer-04-analytics-delivery.png",
] as const;

function LightSectionPattern({
  variant,
}: {
  variant: "top-left" | "bottom-right" | "split-right" | "bottom-left";
}) {
  const variants = {
    "top-left": {
      shellClass:
        "pointer-events-none absolute inset-y-0 left-0 hidden w-[42%] lg:block opacity-90",
      style: {
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='520' height='520' viewBox='0 0 520 520'><g fill='none' stroke='%23C8DFF0' stroke-width='2' stroke-linecap='round' opacity='0.82'><path d='M-24 96 C54 28,146 24,230 74 S390 170,520 86' stroke-dasharray='10 20'/><path d='M-40 182 C36 126,132 122,214 170 S380 268,520 182' stroke-dasharray='9 19'/><path d='M-10 280 C82 214,180 212,266 262 S422 350,548 286' stroke-dasharray='10 18'/><path d='M18 386 C116 330,212 334,292 384 S446 470,560 412' stroke-dasharray='8 18'/><path d='M52 478 C142 432,230 438,312 482 S448 548,538 516' stroke-dasharray='8 20'/><path d='M72 58 l14 -6'/><path d='M162 110 l14 -6'/><path d='M262 150 l14 -6'/><path d='M122 242 l14 -6'/><path d='M332 300 l14 -6'/><path d='M214 404 l14 -6'/><path d='M404 430 l14 -6'/></g></svg>\")",
        backgroundSize: "540px 540px",
        backgroundPosition: "0 0",
        maskImage: "linear-gradient(90deg, black 0%, black 62%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(90deg, black 0%, black 62%, transparent 100%)",
      },
    },
    "bottom-right": {
      shellClass:
        "pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block opacity-90",
      style: {
        backgroundImage:
          "repeating-radial-gradient(circle at 100% 84%, rgba(168,207,230,0.52) 0 2px, transparent 2px 24px), linear-gradient(225deg, rgba(30,191,255,0.1), transparent 58%)",
        backgroundSize: "520px 520px, auto",
        maskImage: "linear-gradient(270deg, black 0%, black 62%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(270deg, black 0%, black 62%, transparent 100%)",
      },
    },
    "split-right": {
      shellClass:
        "pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block opacity-95",
      style: {
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='460' height='620' viewBox='0 0 460 620'><g fill='none' stroke='%23C8DFF0' stroke-width='2' stroke-linecap='round' opacity='0.8'><path d='M430 -10 C360 58,354 138,412 214 S452 374,394 454 S332 604,424 652' stroke-dasharray='10 18'/><path d='M344 0 C286 74,292 156,350 224 S384 368,334 446 S278 580,350 636' stroke-dasharray='9 18'/><path d='M250 34 C206 96,214 168,268 232 S306 364,264 430 S214 554,270 612' stroke-dasharray='8 18'/><path d='M404 86 l12 8'/><path d='M314 146 l12 8'/><path d='M238 274 l12 8'/><path d='M360 334 l12 8'/><path d='M292 484 l12 8'/><path d='M388 558 l12 8'/></g></svg>\")",
        backgroundSize: "420px 620px",
        backgroundPosition: "100% 0",
        backgroundRepeat: "no-repeat",
        maskImage:
          "linear-gradient(270deg, black 0%, black 72%, rgba(0,0,0,0.35) 84%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(270deg, black 0%, black 72%, rgba(0,0,0,0.35) 84%, transparent 100%)",
      },
    },
    "bottom-left": {
      shellClass:
        "pointer-events-none absolute inset-y-0 left-0 hidden w-[40%] lg:block opacity-90",
      style: {
        backgroundImage:
          "repeating-radial-gradient(circle at 0% 86%, rgba(168,207,230,0.54) 0 2px, transparent 2px 24px), linear-gradient(160deg, rgba(30,191,255,0.1), transparent 60%)",
        backgroundSize: "480px 480px, auto",
        maskImage: "linear-gradient(90deg, black 0%, black 64%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(90deg, black 0%, black 64%, transparent 100%)",
      },
    },
  } as const;

  const selected = variants[variant];

  return <div aria-hidden className={selected.shellClass} style={selected.style} />;
}

export function ServicePage({ content }: { content: ServiceContent }) {
  const practiceName = content.title.split(/[&,]/)[0].trim();

  const renderTitle = () => {
    if (!content.highlight) return content.title;
    const parts = content.title.split(content.highlight);
    return (
      <>
        {parts[0]}
        <span className="text-gradient-brand">{content.highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[var(--navy-deep)] pt-[136px] pb-[104px] md:pt-[160px] md:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(112deg, rgba(0,18,52,0.94) 8%, rgba(0,32,87,0.82) 42%, rgba(0,53,128,0.68) 100%)",
          }}
        />

        <motion.video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.34, scale: [1.04, 1.08, 1.04] }}
          transition={{
            opacity: { duration: 1.2, ease: "easeOut" },
            scale: { duration: 16, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
          aria-hidden
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </motion.video>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(52% 64% at 12% 18%, rgba(30,191,255,0.22), transparent 70%), radial-gradient(36% 40% at 84% 24%, rgba(168,207,230,0.18), transparent 72%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "auto, auto, 92px 92px, 92px 92px",
            maskImage: "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
          }}
        />

        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-[48%]"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,18,52,0.9) 0%, rgba(0,18,52,0.72) 52%, rgba(0,18,52,0) 100%)",
          }}
        />

        <div className="container-x relative">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.85fr)] lg:items-start">
            <div className="max-w-[760px]">
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-4 py-2 backdrop-blur-xl"
              >
                <Sparkles className="h-3.5 w-3.5 text-[var(--sky-bright)]" />
                <span className="label-mono !text-[10px] !tracking-[0.2em] !text-white/78">
                  {content.pill}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 max-w-[900px] font-display text-[clamp(46px,7vw,84px)] leading-[0.95] tracking-[-0.045em] text-white"
              >
                {renderTitle()}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="lg:pt-[88px]"
            >
              <p className="max-w-[520px] text-[18px] leading-[1.7] text-white/78 md:text-[20px]">
                {content.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {content.problemPoints.slice(0, 2).map((point) => (
                  <div
                    key={point}
                    className="max-w-[260px] rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-[13px] leading-[1.55] text-white/66 backdrop-blur-sm"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-12 pb-10 md:-mt-[72px] md:pb-14">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[32px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(238,245,251,0.94))] px-6 py-8 shadow-[0_28px_80px_-42px_rgba(0,18,52,0.42)] backdrop-blur-sm md:px-10 md:py-12"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(48% 60% at 0% 30%, rgba(168,207,230,0.26), transparent 72%), radial-gradient(34% 42% at 100% 86%, rgba(30,191,255,0.16), transparent 74%)",
              }}
            />

            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 hidden w-[38%] lg:block"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 0 0, rgba(168,207,230,0.22) 0, transparent 56%), repeating-radial-gradient(circle at 0 50%, rgba(168,207,230,0.28) 0 2px, transparent 2px 18px)",
                maskImage: "linear-gradient(90deg, black 0%, black 74%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(90deg, black 0%, black 74%, transparent 100%)",
              }}
            />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-5 border-b border-[var(--border)]/80 pb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-2)] bg-white/70 px-4 py-2 backdrop-blur-sm">
                  <ArrowUpRight className="h-4 w-4 text-[var(--sky-deep)]" />
                  <span className="label-mono !text-[10px] !text-[var(--ink-2)]">
                    Our Expertise
                  </span>
                </div>
                <div className="label-mono !text-[11px] !text-[var(--ink-3)]">
                  Strategy . Delivery . Outcomes
                </div>
              </div>

              <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.95fr)] lg:gap-16">
                <div>
                  <h2 className="font-display text-[clamp(34px,5vw,60px)] leading-[0.98] text-[var(--ink)]">
                    Built to move your {practiceName.toLowerCase()} roadmap faster.
                  </h2>
                </div>

                <p className="max-w-[640px] text-[18px] leading-[1.75] text-[var(--ink-2)]">
                  {content.expertiseNarrative}
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {content.expertiseGrid.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="rounded-[22px] border border-white/70 bg-white/88 px-5 py-6 shadow-[0_18px_44px_-34px_rgba(0,18,52,0.38)]"
                  >
                    <div className="h-1 w-12 rounded-full bg-gradient-brand-h" />
                    <div className="mt-5 font-display text-[clamp(32px,4vw,48px)] leading-none text-gradient-brand">
                      <ScrollCounter value={metric.value} suffix={metric.suffix} />
                    </div>
                    <div className="mt-3 max-w-[180px] text-[13px] leading-[1.5] text-[var(--ink-2)]">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--surface-2)] py-20 md:py-24">
        <LightSectionPattern variant="top-left" />
        <div className="container-x relative z-10">
          <SectionLabel number="01">Why This Matters</SectionLabel>
          <div className="mt-12 grid items-start gap-12 md:grid-cols-2 md:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-[clamp(32px,5vw,52px)] leading-[1.1] text-[var(--ink)]">
                "{content.problemQuote}"
              </h2>
              <div className="mt-6 h-[2px] w-16 bg-gradient-brand-h" />
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-6"
            >
              {content.problemPoints.map((point, index) => (
                <li key={point} className="flex items-start gap-4">
                  <span className="mt-1.5 shrink-0 font-mono text-[11px] text-[var(--sky-deep)]">
                    0{index + 1}
                  </span>
                  <p className="text-[17px] leading-[1.65] text-[var(--ink-2)]">{point}</p>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="container-x relative z-10">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel number="02">What We Offer</SectionLabel>
              <h2 className="mt-6 font-display text-[clamp(36px,5vw,56px)] leading-[1.05] text-[var(--ink)]">
                Our {practiceName} Practice.
              </h2>
            </div>
          </div>

          <HorizontalCarousel itemCount={content.offerings.length}>
            {content.offerings.map((offering, index) => (
              <div
                key={offering.title}
                className="shrink-0 grow-0 px-2"
                style={{ flex: "0 0 min(420px, 90%)" }}
              >
                <HoverTilt max={3}>
                  <div className="group relative h-[440px] overflow-hidden rounded-none border border-[var(--border)] bg-[var(--navy-deep)] transition-all duration-300 hover:border-[var(--border-2)] hover:shadow-[0_24px_70px_-24px_rgba(0,32,87,0.24)] md:h-[410px]">
                    <div className="absolute inset-0 overflow-hidden">
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.05]"
                        style={{
                          backgroundImage: `url(${OFFERING_CARD_BACKGROUNDS[index % OFFERING_CARD_BACKGROUNDS.length]})`,
                        }}
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(0,18,52,0.18) 0%, rgba(0,18,52,0.34) 42%, rgba(0,18,52,0.88) 100%)",
                        }}
                      />
                      <div className="absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-none border border-white/18 bg-white/10 text-[20px] text-white backdrop-blur-md">
                        {offering.icon}
                      </div>

                      <div className="absolute inset-x-0 top-0 bg-[linear-gradient(180deg,rgba(0,18,52,0.94),rgba(0,18,52,0.76)_74%,rgba(0,18,52,0))] px-5 pb-10 pt-20 opacity-100 transition-all duration-350 ease-out md:opacity-0 md:group-hover:opacity-100">
                        <div className="label-mono !text-[9px] !tracking-[0.18em] !text-white/62">
                          What We Offer
                        </div>
                        <div className="mt-4 translate-y-0 opacity-100 transition-all duration-350 ease-out md:translate-y-[-10px] md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                          <p className="max-w-[280px] text-[15px] leading-[1.65] text-white/86">
                            {offering.body}
                          </p>
                          <div className="mt-5 flex flex-wrap gap-2">
                            {offering.tags.map((tag) => (
                              <span
                                key={tag}
                                className="label-mono rounded-none border border-white/14 bg-white/10 px-2.5 py-1 !text-[10px] !text-white/74 backdrop-blur-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 mt-auto bg-[linear-gradient(180deg,rgba(0,18,52,0),rgba(0,18,52,0.82)_28%,rgba(0,18,52,0.96)_100%)] px-6 pb-6 pt-16">
                        <h3 className="font-heading text-[22px] font-bold leading-[1.08] text-white">
                          {offering.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </HoverTilt>
              </div>
            ))}
          </HorizontalCarousel>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--surface-2)] py-20 md:py-24">
        <LightSectionPattern variant="split-right" />
        <div className="container-x relative z-10">
          <SectionLabel number="03">Expertise</SectionLabel>
          <div className="mt-12 grid items-start gap-12 md:grid-cols-2 md:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-[clamp(32px,4.5vw,48px)] leading-[1.1] text-[var(--ink)]">
                Depth before width.
              </h2>
              <p className="mt-6 text-[17px] leading-[1.8] text-[var(--ink-2)]">
                {content.expertiseNarrative}
              </p>
            </motion.div>

            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)]">
              <div className="grid grid-cols-2 gap-px">
                {content.expertiseGrid.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, delay: index * 0.08 }}
                    className="bg-white p-8"
                  >
                    <div className="font-display text-[clamp(32px,4vw,44px)] leading-none text-gradient-brand">
                      <ScrollCounter value={metric.value} suffix={metric.suffix} />
                    </div>
                    <div className="mt-3 text-[13px] text-[var(--ink-2)]">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
              <div className="border-t border-[var(--border)] bg-[var(--navy)] px-6 py-5 text-[14px] leading-[1.7] text-white/72">
                Teams work with us when they need measurable movement, not another deck of ideas.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="container-x relative z-10">
          <SectionLabel number="04">Technology Stack</SectionLabel>
          <h2 className="mt-6 max-w-[700px] font-display text-[clamp(32px,4.5vw,48px)] leading-[1.1] text-[var(--ink)]">
            Our Core Technology Stack
          </h2>
          <div className="mt-12 space-y-6">
            {content.techStack.map((group, groupIndex) => (
              <motion.div
                key={group.group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                className="grid items-center gap-6 border-b border-[var(--border)] pb-6 md:grid-cols-[160px_1fr]"
              >
                <div className="label-mono !text-[var(--sky-deep)]">{group.group}</div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-[var(--border)] bg-white px-4 py-2 text-[14px] font-medium text-[var(--ink)] transition-all hover:-translate-y-0.5 hover:border-[var(--border-2)] hover:shadow-[0_8px_24px_-12px_rgba(0,32,87,0.2)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-2)] py-20 md:py-24">
        <div className="container-x">
          <SectionLabel number="05">Approach</SectionLabel>
          <h2 className="mt-6 max-w-[700px] font-display text-[clamp(36px,5vw,56px)] leading-[1.05] text-[var(--ink)]">
            How We Work.
          </h2>

          <div className="mt-16 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
            <ol className="space-y-8">
              {content.approach.map((step, index) => (
                <motion.li
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid grid-cols-[60px_1fr] gap-5"
                >
                  <div className="pt-1 font-mono text-[28px] leading-none text-gradient-brand">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-heading text-[20px] font-bold text-[var(--ink)]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-[1.7] text-[var(--ink-2)]">
                      {step.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <div>
              <HLDDiagram spec={content.hld} />
              <div className="label-mono mt-3 text-center">High-level architecture</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
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
                  "radial-gradient(60% 80% at 80% 50%, rgba(30,191,255,0.4), transparent)",
              }}
            />
            <div className="relative grid items-end gap-10 md:grid-cols-[1fr_auto]">
              <div>
                <div className="label-mono !text-[var(--sky)]">{content.caseStudy.tag}</div>
                <h3 className="mt-4 max-w-[720px] font-display text-[clamp(28px,4vw,44px)] leading-[1.15]">
                  {content.caseStudy.title}
                </h3>
                <p className="mt-5 text-[15px] text-white/70">{content.caseStudy.outcome}</p>
                <div className="mt-2 text-[13px] text-white/40">{content.caseStudy.client}</div>
              </div>
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 border-b border-white/30 pb-1 text-[14px] text-white transition-colors hover:border-[var(--sky-bright)]"
              >
                Read Case Study <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container-x">
          <div className="flex flex-wrap items-center justify-between gap-6 border-y border-[var(--border)] py-8">
            <div className="font-display text-[clamp(20px,2.5vw,28px)] text-[var(--ink)]">
              Have a project in mind?
            </div>
            <MagneticButton to="/contact">
              Talk to a specialist <ArrowRight className="ml-2 h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
