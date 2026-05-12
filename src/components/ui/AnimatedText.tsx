"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  highlight?: string; // word(s) to apply gradient class
};

export function AnimatedText({
  children,
  className = "",
  delay = 0,
  as: Tag = "h1",
  highlight,
}: Props) {
  const words = children.split(" ");
  const inner: ReactNode = (
    <>
      {words.map((w, i) => {
        const isHi = highlight && w.replace(/[.,!?]/g, "") === highlight;
        return (
          <span
            key={i}
            className="inline-block overflow-hidden align-bottom pb-[0.12em] mr-[0.25em]"
          >
            <motion.span
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: 0.9,
                delay: delay + i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`inline-block ${isHi ? "text-gradient-brand" : ""}`}
            >
              {w}
            </motion.span>
          </span>
        );
      })}
    </>
  );
  return <Tag className={className}>{inner}</Tag>;
}
