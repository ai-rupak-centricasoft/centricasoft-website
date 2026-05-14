"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";

export default function InsightsPage() {
  return (
    <>
      {/* Previous placeholder insights/articles content was intentionally removed until real posts are ready. */}
      <PageHero
        pill="04 - Insights"
        title="Insights"
        variant="immersive"
        tone="photo"
        size="compact"
        asideLabel="Editorial update"
        meta={["In progress", "Fresh content", "Coming soon"]}
        backgroundImage="https://images.pexels.com/photos/6285258/pexels-photo-6285258.jpeg?cs=srgb&dl=pexels-gustavo-fring-6285258.jpg&fm=jpg"
        subtitle="We are preparing a sharper, more useful insights experience with real stories, practical field notes, and thoughtful updates from the team."
      />

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7faff_0%,#eef4ff_48%,#ffffff_100%)] py-16 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(44% 44% at 20% 18%, rgba(30,191,255,0.12), transparent 72%), radial-gradient(34% 40% at 78% 24%, rgba(0,32,87,0.08), transparent 76%)",
          }}
        />

        <div className="container-x relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-white/70 bg-[linear-gradient(135deg,rgba(0,18,52,0.96)_0%,rgba(0,32,87,0.92)_52%,rgba(11,91,153,0.9)_100%)] shadow-[0_40px_100px_-52px_rgba(0,18,52,0.55)]"
          >
            <div className="relative grid gap-8 px-6 py-8 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:px-12 md:py-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-80"
                style={{
                  background:
                    "radial-gradient(circle at 18% 24%, rgba(125,231,255,0.18), transparent 26%), radial-gradient(circle at 82% 72%, rgba(255,255,255,0.09), transparent 24%)",
                }}
              />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-2 shadow-[0_16px_36px_-28px_rgba(0,0,0,0.4)] backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-[var(--sky-bright)]" />
                  <span className="label-mono !text-[10px] !tracking-[0.18em] !text-white/78">
                    Page Update
                  </span>
                </div>

                <h2 className="mt-6 font-display text-[clamp(32px,5vw,56px)] leading-[0.98] tracking-[-0.04em] text-white">
                  This page is coming soon.
                </h2>

                <p className="mt-5 max-w-xl text-[15px] leading-[1.8] text-white/78 md:text-[17px]">
                  We have taken down the temporary content and are rebuilding this section to
                  better reflect the quality of the CentricaSoft website.
                </p>
              </div>

              <div className="relative flex flex-col justify-between rounded-[24px] border border-white/12 bg-white/[0.08] p-6 backdrop-blur-md">
                <div>
                  <div className="label-mono !text-[10px] !tracking-[0.16em] !text-[#b7cadc]">
                    What to expect
                  </div>
                  <ul className="mt-4 space-y-3 text-[14px] leading-[1.7] text-white/78">
                    <li>Real articles and case-led insights instead of placeholder copy.</li>
                    <li>Thoughtful updates on AI, data, and product engineering work.</li>
                    <li>A cleaner editorial experience aligned with the current brand.</li>
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/14 bg-white px-5 py-3 text-[13px] font-medium text-[var(--navy)] transition-all duration-300 hover:gap-3 hover:bg-[#eaf6ff]"
                >
                  Talk to our team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
