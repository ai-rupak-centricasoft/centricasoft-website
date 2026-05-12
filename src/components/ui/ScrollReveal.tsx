"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type ScrollRevealProps = Omit<
  HTMLMotionProps<"div">,
  "initial" | "whileInView" | "transition" | "viewport"
> & {
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  scale?: number;
  blur?: number;
  once?: boolean;
  margin?: string;
  amount?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  x = 0,
  y = 28,
  scale = 1,
  blur = 10,
  once = true,
  margin = "-12%",
  amount = 0.25,
  ...props
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        prefersReducedMotion
          ? { opacity: 0 }
          : { opacity: 0, x, y, scale, filter: `blur(${blur}px)` }
      }
      whileInView={
        prefersReducedMotion
          ? { opacity: 1 }
          : { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
      }
      viewport={{ once, margin, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
