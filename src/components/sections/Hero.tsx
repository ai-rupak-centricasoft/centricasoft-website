"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SmoothScrollHeroBackground } from "@/components/ui/smooth-scroll-hero";

const SCROLL_HEIGHT = 800;
const NAVBAR_H = 72;

const DESKTOP_IMAGE =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2940&auto=format&fit=crop";
const MOBILE_IMAGE =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1080&auto=format&fit=crop";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
} as const;

export function Hero() {
  return (
    <section
      className="relative isolate w-full bg-neutral-200"
      style={{ height: `calc(${SCROLL_HEIGHT}px + 100vh)` }}
    >
      <SmoothScrollHeroBackground
        scrollHeight={SCROLL_HEIGHT}
        navbarHeight={NAVBAR_H}
        gapTop={10}
        gapSide={20}
        gapBottomVh={18}
        startRadius={16}
        desktopImage={DESKTOP_IMAGE}
        mobileImage={MOBILE_IMAGE}
      >
        <div className="flex flex-1 flex-col items-center justify-between px-6 py-10 text-center md:py-14">
          <div />

          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="mx-auto flex max-w-[860px] flex-col items-center gap-7"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-black/18 px-4 py-2 backdrop-blur-md"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#7DE7FF]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/62">
                Agentic AI, data platforms, and analytics delivery
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="max-w-[980px] font-display text-[clamp(34px,6.2vw,72px)] leading-[1.02] tracking-[-0.045em] text-white"
              style={{ textShadow: "0 8px 32px rgba(0,0,0,0.26)" }}
            >
              <span className="block font-[430] text-white/90">Data & AI Partner
for Modern Enterprises</span>
              {/* <span className="block font-semibold text-white">
                designed with production discipline
              </span> */}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-[640px] text-[15px] leading-[1.8] tracking-[-0.01em] text-white/68 sm:text-[17px]"
            >
              We build agentic workflows, GenAI products, and governed data foundations
              that help modern enterprises move from experimentation to dependable
              operating capability.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            >
              <MagneticButton
                to="/what-we-do/agentic-ai"
                variant="white"
                className="!h-[50px] !gap-2 !px-7 !text-[14px] !font-medium sm:!h-[54px] sm:!px-10 sm:!text-[15px]"
              >
                See What We Build
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>

              <Link
                href="/products/nubo"
                className="group inline-flex h-[50px] items-center gap-2 rounded-full border border-white/16 bg-white/8 px-7 text-[14px] font-normal text-white/90 backdrop-blur-md transition-all duration-300 hover:border-white/28 hover:bg-white/14 hover:text-white sm:h-[54px] sm:px-9 sm:text-[15px]"
              >
                Meet Nubo
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-5"
          >
            <p className="max-w-[540px] text-[13px] leading-[1.8] tracking-[0.01em] text-white/46 sm:text-[14px]">
              Strategic architecture, measured execution, and systems built to survive
              real enterprise complexity.
            </p>

            <div className="flex flex-col items-center gap-1.5">
              <span className="font-mono text-[9px] tracking-[0.22em] text-white/32">SCROLL</span>
              <div className="relative h-8 w-px overflow-hidden rounded-full bg-white/14">
                <motion.div
                  className="absolute left-0 top-0 h-full w-full rounded-full bg-gradient-to-b from-white/70 to-[#1EBFFF]/70"
                  animate={{ y: ["-100%", "100%"] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </SmoothScrollHeroBackground>
    </section>
  );
}
