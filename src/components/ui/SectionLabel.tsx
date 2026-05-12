"use client";

import { motion } from "framer-motion";

export function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.6 }}
      className="inline-flex items-center gap-4"
    >
      <span className="h-px w-8 bg-[#a9bfd1]" aria-hidden="true" />
      <span className="label-mono text-[#7695b0]">{number}</span>
      <span className="label-mono text-[#58718a]">{children}</span>
    </motion.div>
  );
}
