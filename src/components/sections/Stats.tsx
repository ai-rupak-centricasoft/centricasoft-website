"use client";

import { motion } from "framer-motion";
import { ScrollCounter } from "@/components/ui/ScrollCounter";

// ─── Data ─────────────────────────────────────────────────────────────────────

const STATS = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30,  suffix: "+", label: "Expert Consultants" },
  { value: 8,   suffix: "+", label: "Industries Served"  },
] as const;

// ─── Component ────────────────────────────────────────────────────────────────

export function Stats() {
  return (
    <section className="w-full bg-white py-14 md:py-18">
      <div className="container-x">

        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center text-[15px] font-medium tracking-wide"
        >
          <span className="text-[var(--navy,#001234)]">Driving growth</span>
          {" "}
          <span
            style={{
              background: "linear-gradient(90deg, #0077B6 0%, #1EBFFF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            and intelligence
          </span>
        </motion.p>

        {/* Stats row */}
        <div className="grid grid-cols-3 divide-x divide-neutral-100">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.65,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center px-3 py-2 text-center sm:px-8 sm:py-0"
            >
              {/* Number */}
              <span className="font-display text-[clamp(34px,7vw,72px)] font-semibold leading-none tracking-tight text-[#0d1b2a]">
                <ScrollCounter value={stat.value} suffix={stat.suffix} />
              </span>

              {/* Label */}
              <span className="mt-2 max-w-[12ch] text-[11px] leading-[1.35] text-neutral-500 sm:mt-3 sm:max-w-none sm:text-[12.5px] sm:leading-snug">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
