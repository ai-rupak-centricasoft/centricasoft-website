"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CASE_STUDIES } from "@/lib/constants";

const CASE_STUDY_VISUALS: Record<
  string,
  {
    image: string;
    eyebrow: string;
    accent: string;
    metric: string;
    metricLabel: string;
    glow: string;
  }
> = {
  "01": {
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80",
    eyebrow: "Clinical Operations",
    accent: "#55E6D7",
    metric: "38%",
    metricLabel: "less nurse workload",
    glow: "rgba(85,230,215,0.22)",
  },
  "02": {
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
    eyebrow: "Research Intelligence",
    accent: "#8F7CFF",
    metric: "12Y",
    metricLabel: "of filings grounded",
    glow: "rgba(143,124,255,0.22)",
  },
  "03": {
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80",
    eyebrow: "Global Logistics",
    accent: "#7DE7FF",
    metric: "14x",
    metricLabel: "faster pipelines",
    glow: "rgba(125,231,255,0.22)",
  },
};

const CASE_STUDY_AUTHORS: Record<string, string> = {
  "Samad Nalagadda": "/team/Samad.jpeg",
  "Amit Basu": "/team/Amit.jpeg",
  "Shampa Ghosh": "/team/Shampa.jpeg",
};

export function CaseStudies() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", dragFree: false, loop: false });
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(CASE_STUDIES.length);

  useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    const onSel = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSel);
    onSel();
    return () => {
      emblaApi.off("select", onSel);
    };
  }, [emblaApi]);

  return (
    <section className="pt-6 pb-[clamp(72px,9vw,120px)] md:pt-8">
      <div className="container-x">
        <SectionLabel number="05">Case Studies</SectionLabel>

        <div className="mt-10 text-center">
          <ScrollReveal y={-24}>
            <h2 className="font-display mx-auto text-[clamp(40px,6vw,64px)] leading-[1.05] text-[var(--ink)]">
              Latest Articles
            </h2>
          </ScrollReveal>
        </div>

        {/* Controls row: counter + progress LEFT — arrows RIGHT */}
        <ScrollReveal className="mt-6 flex items-center justify-between gap-4" y={10} delay={0.1}>
          {/* Left: counter + progress bar */}
          <div className="flex items-center gap-4">
            <div className="shrink-0 font-mono text-[12px] text-[var(--ink-3)]">
              <span className="text-[var(--navy)]">{String(selected + 1).padStart(2, "0")}</span>
              {" / "}
              {String(count).padStart(2, "0")}
            </div>
            <div className="relative h-px w-32 overflow-hidden bg-[var(--border)] sm:w-48">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-brand-h"
                animate={{ width: `${((selected + 1) / count) * 100}%` }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          {/* Right: arrow buttons */}
          <div className="flex shrink-0 gap-2">
            {[ArrowLeft, ArrowRight].map((Icon, i) => (
              <button
                key={i}
                onClick={() => (i === 0 ? emblaApi?.scrollPrev() : emblaApi?.scrollNext())}
                aria-label={i === 0 ? "Previous" : "Next"}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--ink-2)] transition-all hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>
        </ScrollReveal>



        <ScrollReveal className="mt-16 -mx-5 lg:-mx-20" y={34} delay={0.1}>
          <div className="overflow-hidden px-5 lg:px-20" ref={emblaRef}>
            <div className="flex gap-6">
              {CASE_STUDIES.map((study) => {
                const visual = CASE_STUDY_VISUALS[study.counter];
                const tags = study.tag.split(/·|Â·|Ã‚Â·/).map((part) => part.trim());

                return (
                  <article
                    key={study.counter}
                    className="group flex-[0_0_86%] md:flex-[0_0_54%] lg:flex-[0_0_400px]"
                  >
                    <div className="relative flex h-[500px] flex-col overflow-hidden rounded-[6px] border border-[var(--border)] bg-white transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_24px_70px_-28px_rgba(0,32,87,0.2)]">
                      <div
                        className="absolute inset-x-0 top-0 h-[3px]"
                        style={{
                          background: `linear-gradient(90deg, ${visual.accent} 0%, var(--sky-bright) 100%)`,
                        }}
                      />

                      <div className="relative h-[300px] overflow-hidden border-b border-[var(--border)]">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.04]"
                          style={{ backgroundImage: `url(${visual.image})` }}
                        />
                        <div className="absolute inset-0 bg-[rgba(0,18,52,0.16)]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,18,52,0.82)] via-[rgba(0,32,87,0.12)] to-transparent" />
                        <div
                          className="absolute inset-0 opacity-30"
                          style={{
                            background:
                              "linear-gradient(125deg, transparent 0 46%, rgba(255,255,255,0.14) 49%, transparent 56%)",
                          }}
                        />
                        <div
                          className="absolute -bottom-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full blur-3xl transition-opacity duration-300"
                          style={{ backgroundColor: visual.glow }}
                        />

                        <div className="absolute left-4 top-4">
                          <span className="rounded-full border border-white/16 bg-[rgba(0,18,52,0.34)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/82 backdrop-blur-md">
                            {visual.eyebrow}
                          </span>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                          <div className="max-w-[62%]">
                            <div className="font-heading text-[22px] font-bold leading-[1.05] text-white">
                              {study.title}
                            </div>
                          </div>
                          <div className="border border-white/14 bg-[rgba(0,18,52,0.38)] px-4 py-3 text-right backdrop-blur-md">
                            <div
                              className="font-display text-[30px] leading-none"
                              style={{ color: visual.accent }}
                            >
                              {visual.metric}
                            </div>
                            <div className="mt-1 text-[11px] text-white/68">
                              {visual.metricLabel}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-5">
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                              <span
                                key={`${study.counter}-${tag}`}
                                className="rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--ink-3)]"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="h-px flex-1 bg-[var(--border)]" />
                        </div>

                        <div className="mt-4 overflow-hidden">
                          <p className="max-h-[2.9rem] text-[14px] leading-[1.65] text-[var(--ink-2)] transition-all duration-300 group-hover:max-h-[8.4rem]">
                            {study.body}
                          </p>
                        </div>

                        <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-5">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9 border border-[var(--border)]">
                              <AvatarImage
                                src={CASE_STUDY_AUTHORS[study.author]}
                                alt={study.author}
                                className="object-cover"
                              />
                              <AvatarFallback className="bg-gradient-brand text-[13px] text-white">
                                {study.author
                                  .split(" ")
                                  .map((part) => part[0])
                                  .join("")
                                  .slice(0, 2)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="text-[12.5px] font-medium text-[var(--ink)]">
                                {study.author}
                              </div>
                              <div className="text-[11px] text-[var(--ink-3)]">{study.date}</div>
                            </div>
                          </div>

                          <span
                            className="text-[13px] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                            style={{ color: visual.accent }}
                          >
                            Open →
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
