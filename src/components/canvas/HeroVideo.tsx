"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    void video.play().catch(() => {
      // The gradient layers remain visible if autoplay is blocked.
    });
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, #001234 0%, #002057 50%, #003580 100%)",
        }}
      />

      <motion.video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [1.05, 1.08, 1.05] }}
        transition={{
          opacity: { duration: 1.6, ease: "easeOut", delay: 0.15 },
          scale: { duration: 16, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </motion.video>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(0,18,52,0.74) 0%, rgba(0,32,87,0.66) 42%, rgba(0,53,128,0.55) 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: "rgba(0,32,87,0.22)",
          mixBlendMode: "multiply",
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "42%",
          background: `linear-gradient(
            to bottom,
            transparent 0%,
            rgba(226,241,251,0.6) 70%,
            #E2F1FB 100%
          )`,
        }}
      />

      <div
        className="absolute left-0 right-0 top-0"
        style={{
          height: "18%",
          background: "linear-gradient(to bottom, rgba(0,18,52,0.28), transparent)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 28%, rgba(0,10,30,0.42) 100%)",
        }}
      />

      <motion.div
        className="pointer-events-none absolute"
        style={{
          bottom: "14%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(72vw, 760px)",
          height: "min(34vw, 320px)",
          borderRadius: "999px",
          background: "radial-gradient(ellipse, rgba(30,191,255,0.2) 0%, transparent 72%)",
          filter: "blur(44px)",
        }}
        animate={{ opacity: [0.38, 0.92, 0.38], scaleX: [1, 1.14, 1] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute"
        style={{
          top: "10%",
          left: "-6%",
          width: "min(34vw, 420px)",
          height: "min(34vw, 420px)",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,207,230,0.12) 0%, transparent 70%)",
          filter: "blur(22px)",
        }}
        animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 46%, black 42%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 46%, black 42%, transparent 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, x: "-45%" }}
        animate={{ opacity: [0, 0.18, 0], x: ["-45%", "42%", "95%"] }}
        transition={{ duration: 1.9, delay: 0.45, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-y-[18%] left-0 w-[28%] bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.18),rgba(255,255,255,0))] blur-3xl"
      />
    </div>
  );
}
