"use client";

import { motion } from "framer-motion";

export function SectionLabel({ children }: { number?: string; children: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.6 }}
      className="flex justify-center"
    >
      <div
        className="relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-5 py-2"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,32,87,0.08) 0%, rgba(30,191,255,0.10) 100%)",
          boxShadow:
            "0 0 0 1px rgba(0,119,182,0.22), inset 0 1px 0 rgba(255,255,255,0.55)",
        }}
      >
        {/* shimmer sweep */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full opacity-60"
          style={{
            background:
              "linear-gradient(105deg, transparent 30%, rgba(30,191,255,0.18) 50%, transparent 70%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 3s ease-in-out infinite",
          }}
        />
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{ background: "linear-gradient(135deg, var(--sky-deep), var(--sky-bright))" }}
        />
        <span
          className="label-mono relative"
          style={{ color: "var(--navy-mid)", fontWeight: 600, letterSpacing: "0.20em" }}
        >
          {children}
        </span>
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{ background: "linear-gradient(135deg, var(--sky-bright), var(--sky-deep))" }}
        />
      </div>
    </motion.div>
  );
}
