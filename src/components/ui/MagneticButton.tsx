"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "white";
  className?: string;
};

export function MagneticButton({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 15 });
  const sy = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist < 120) {
      x.set(dx * 0.25);
      y.set(dy * 0.25);
    }
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 will-change-transform";
  const variants = {
    primary:
      "bg-gradient-brand-h text-white px-8 h-[52px] text-[15px] shadow-[0_8px_30px_-8px_var(--glow)] hover:shadow-[0_12px_40px_-8px_var(--glow)]",
    ghost:
      "border border-[var(--border-2)] text-[var(--ink)] px-7 h-[52px] text-[15px] hover:bg-[var(--surface-2)]",
    white: "bg-white text-[var(--navy)] px-8 h-[52px] text-[15px] hover:bg-[var(--surface-2)]",
  };
  const cls = `${base} ${variants[variant]} ${className}`;

  const inner = (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      {to ? (
        <Link href={to} className={cls} onClick={onClick}>
          {children}
        </Link>
      ) : href ? (
        <a href={href} className={cls} onClick={onClick}>
          {children}
        </a>
      ) : (
        <button type="button" onClick={onClick} className={cls}>
          {children}
        </button>
      )}
    </motion.div>
  );
  return inner;
}
