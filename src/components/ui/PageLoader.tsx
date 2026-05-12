"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * First-load intro overlay (1.2s total):
 *  0.00 – 0.70s  hex outline draws via stroke-dashoffset
 *  0.55 – 0.95s  wordmark fades in with subtle rise
 *  0.95 – 1.20s  full overlay fades out
 * Session-scoped: only shows once per browser session.
 */
export function PageLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setVisible(true);
    document.documentElement.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      setVisible(false);
      document.documentElement.style.overflow = "";
    }, 1200);
    return () => {
      window.clearTimeout(t);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, delay: 0.95, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[var(--bg)]"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-5">
            <svg
              width="72"
              height="72"
              viewBox="0 0 32 32"
              fill="none"
              className="overflow-visible"
            >
              <defs>
                <linearGradient
                  id="loader-hexg"
                  x1="0"
                  y1="0"
                  x2="32"
                  y2="32"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#002057" />
                  <stop offset="1" stopColor="#1EBFFF" />
                </linearGradient>
              </defs>
              <motion.path
                d="M16 2L28.124 9V23L16 30L3.876 23V9L16 2Z"
                stroke="url(#loader-hexg)"
                strokeWidth={1.5}
                strokeLinejoin="round"
                fill="transparent"
                initial={{ pathLength: 0, opacity: 0.6 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
              />
              <motion.path
                d="M16 9L22 12.5V19.5L16 23L10 19.5V12.5L16 9Z"
                fill="url(#loader-hexg)"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ transformOrigin: "16px 16px" }}
                transition={{ duration: 0.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[20px] font-semibold tracking-tight text-[var(--navy)]"
            >
              CentricaSoft
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
