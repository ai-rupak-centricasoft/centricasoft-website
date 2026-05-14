"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * First-load intro overlay (1.2s total):
 *  0.00 - 0.65s  logo mark scales in with soft rotation and blur release
 *  0.35 - 0.90s  wordmark fades in with subtle rise
 *  0.95 - 1.20s  full overlay fades out
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
          <div className="relative flex flex-col items-center gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.72, rotate: -10, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[1.25rem] bg-[radial-gradient(circle_at_center,rgba(30,191,255,0.22),transparent_68%)] blur-2xl" />
              <Image
                src="/assest/logo.webp"
                alt="CentricaSoft loader mark"
                width={88}
                height={88}
                priority
                className="relative h-[4.8rem] w-[4.8rem] object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.45, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-[1.5rem] font-bold leading-none tracking-[-0.01em]"
            >
              <span className="inline-block bg-[linear-gradient(90deg,#3341A7_0%,#3053B3_22%,#2B6EC6_46%,#238AD9_70%,#18ADF1_100%)] bg-clip-text text-transparent">
                CentricaSoft
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
