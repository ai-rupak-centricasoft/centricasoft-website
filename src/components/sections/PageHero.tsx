"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";

const COMPANY_HERO_IMAGE =
  'url("https://plus.unsplash.com/premium_photo-1661578924417-12711ba96163?auto=format&fit=crop&fm=jpg&q=80&w=2400")';

export function PageHero({
  pill,
  title,
  highlight,
  highlightClassName,
  subtitle,
  children,
  variant = "default",
  tone = "default",
  size = "default",
  asideLabel,
  meta,
  backgroundImage,
}: {
  pill: string;
  title: string;
  highlight?: string;
  highlightClassName?: string;
  subtitle: string;
  children?: ReactNode;
  variant?: "default" | "immersive";
  tone?: "default" | "company" | "photo";
  size?: "default" | "compact";
  asideLabel?: string;
  meta?: string[];
  backgroundImage?: string;
}) {
  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className={highlightClassName ?? "text-gradient-brand"}>{highlight}</span>
        {parts[1]}
      </>
    );
  };

  if (variant === "immersive") {
    const isPhotoTone = tone === "company" || tone === "photo";
    const isCompact = size === "compact";

    return (
      <section
        className={`relative isolate overflow-hidden bg-[var(--navy-deep)] ${
          isPhotoTone
            ? isCompact
              ? "min-h-[20svh] pt-[92px] pb-6 md:min-h-[22svh] md:pt-[98px] md:pb-7 lg:min-h-[21svh] lg:pt-[102px] lg:pb-8"
              : "min-h-[52svh] pt-[120px] pb-16 md:min-h-[56svh] md:pt-[136px] md:pb-20 lg:min-h-[54svh]"
            : "pt-[136px] pb-[104px] md:pt-[160px] md:pb-32"
        }`}
      >
        {isPhotoTone ? (
          <>
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 0.95, scale: [1.02, 1.05, 1.02] }}
              transition={{
                opacity: { duration: 1.1, ease: "easeOut" },
                scale: { duration: 18, repeat: Infinity, ease: "easeInOut" },
              }}
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: backgroundImage ? `url("${backgroundImage}")` : COMPANY_HERO_IMAGE,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />

            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(118deg, rgba(0,18,52,0.9) 8%, rgba(0,20,58,0.8) 42%, rgba(0,28,76,0.56) 100%)",
              }}
            />

            <div
              aria-hidden
              className="grain pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-screen"
            />

            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(42% 52% at 14% 18%, rgba(30,191,255,0.1), transparent 72%), radial-gradient(30% 40% at 84% 20%, rgba(168,207,230,0.08), transparent 72%), linear-gradient(180deg, rgba(255,255,255,0.03), transparent 24%, transparent 76%, rgba(255,255,255,0.02))",
                maskImage: "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
              }}
            />

            <div
              aria-hidden
              className="grain pointer-events-none absolute inset-x-0 top-0 h-[42%] opacity-[0.14] mix-blend-screen"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 58%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 58%, transparent 100%)",
              }}
            />
          </>
        ) : (
          <>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(112deg, rgba(0,18,52,0.94) 8%, rgba(0,32,87,0.82) 42%, rgba(0,53,128,0.68) 100%)",
              }}
            />

            <motion.video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3, scale: [1.04, 1.08, 1.04] }}
              transition={{
                opacity: { duration: 1.2, ease: "easeOut" },
                scale: { duration: 16, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute inset-0 hidden h-full w-full object-cover md:block"
              aria-hidden
            >
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </motion.video>

            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(52% 64% at 12% 18%, rgba(30,191,255,0.22), transparent 70%), radial-gradient(36% 40% at 84% 24%, rgba(168,207,230,0.18), transparent 72%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "auto, auto, 92px 92px, 92px 92px",
                maskImage: "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 0%, black 78%, transparent 100%)",
              }}
            />
          </>
        )}

        <div
          aria-hidden
          className={`pointer-events-none absolute inset-y-0 left-0 ${
            isPhotoTone && isCompact ? "w-[34%] md:w-[36%] lg:w-[32%]" : "w-[48%]"
          }`}
          style={{
            background:
              "linear-gradient(90deg, rgba(0,18,52,0.9) 0%, rgba(0,18,52,0.72) 52%, rgba(0,18,52,0) 100%)",
          }}
        />

        <div className="container-x relative">
          <div
            className={`grid ${isPhotoTone ? "items-end" : ""} lg:items-start ${
              isPhotoTone
                ? isCompact
                  ? "gap-4 md:gap-5 lg:grid-cols-[minmax(0,0.84fr)_minmax(280px,0.56fr)] lg:gap-8 xl:grid-cols-[minmax(0,0.88fr)_minmax(300px,0.58fr)]"
                  : "gap-6 md:gap-8 lg:grid-cols-[minmax(0,0.98fr)_minmax(320px,0.72fr)] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_minmax(360px,0.74fr)]"
                : "gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.85fr)]"
            }`}
          >
            <div
              className={
                isPhotoTone
                  ? isCompact
                    ? "max-w-[560px] xl:max-w-[600px]"
                    : "max-w-[680px] xl:max-w-[740px]"
                  : "max-w-[760px]"
              }
            >
              <div
                className={
                  isPhotoTone
                    ? isCompact
                      ? "rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,23,55,0.24),rgba(7,23,55,0.1))] p-4 shadow-[0_22px_54px_-40px_rgba(0,18,52,0.62)] backdrop-blur-sm md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none"
                      : "rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,23,55,0.3),rgba(7,23,55,0.12))] p-6 shadow-[0_28px_70px_-42px_rgba(0,18,52,0.68)] backdrop-blur-sm md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none"
                    : ""
                }
              >
                <motion.div
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-xl ${
                    isPhotoTone
                      ? "border border-white/12 bg-white/[0.06] shadow-[0_16px_40px_-30px_rgba(0,18,52,0.55)]"
                      : "border border-white/14 bg-white/10"
                  }`}
                >
                  <Sparkles className="h-3.5 w-3.5 text-[var(--sky-bright)]" />
                  <span className="label-mono !text-[10px] !tracking-[0.2em] !text-white/78">
                    {pill}
                  </span>
                </motion.div>

                {isPhotoTone && (
                  <div className="mt-5 label-mono !text-[10px] !tracking-[0.16em] !text-white/46 md:hidden">
                    {asideLabel ?? "Page brief"}
                  </div>
                )}

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`font-display tracking-[-0.045em] text-white ${
                    isPhotoTone
                      ? isCompact
                        ? "mt-5 max-w-[520px] text-[clamp(28px,3.6vw,46px)] leading-[1.02] xl:max-w-[560px] xl:text-[clamp(30px,3.4vw,50px)]"
                        : "mt-8 max-w-[680px] text-[clamp(40px,5.8vw,72px)] leading-[0.98] xl:max-w-[740px] xl:text-[clamp(44px,5.2vw,76px)]"
                      : "max-w-[900px] text-[clamp(46px,7vw,84px)] leading-[0.95]"
                  }`}
                >
                  {renderTitle()}
                </motion.h1>

                {isPhotoTone && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scaleX: 0.8 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className={`${isCompact ? "mt-5 w-20" : "mt-8 w-24"} h-[2px] origin-left bg-gradient-to-r from-[var(--sky-bright)] to-transparent`}
                    />

                    {meta?.length ? (
                      <div
                        className={`${isCompact ? "mt-4" : "mt-6"} flex flex-wrap gap-2 md:hidden`}
                      >
                        {meta.map((item) => (
                          <span
                            key={`hero-mobile-${item}`}
                            className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium tracking-[0.03em] text-white/72"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </>
                )}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className={
                isPhotoTone
                  ? isCompact
                    ? "lg:pt-[18px] xl:pt-[22px]"
                    : "lg:pt-[60px] xl:pt-[72px]"
                  : "lg:pt-[88px]"
              }
            >
              {isPhotoTone ? (
                <div
                  className={`relative overflow-hidden rounded-[24px] border border-white/12 bg-[linear-gradient(180deg,rgba(8,24,58,0.32),rgba(8,24,58,0.18))] shadow-[0_28px_80px_-42px_rgba(0,18,52,0.55)] backdrop-blur-sm lg:ml-auto ${
                    isCompact ? "p-4 md:p-5 lg:max-w-[360px]" : "p-6 md:p-7 lg:max-w-[420px]"
                  }`}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-[radial-gradient(circle_at_top,rgba(157,192,216,0.12),transparent_72%)]"
                  />
                  <div className="relative">
                    <div className="label-mono !text-[10px] !tracking-[0.16em] !text-[#b7cadc]">
                      {asideLabel ?? "Company brief"}
                    </div>
                    <p
                      className={`max-w-[520px] text-white/84 ${
                        isCompact
                          ? "mt-3 text-[15px] leading-[1.65] md:text-[16px] lg:text-[15px]"
                          : "mt-4 text-[18px] leading-[1.72] md:text-[19px] lg:text-[18px] xl:text-[19px]"
                      }`}
                    >
                      {subtitle}
                    </p>

                    {meta?.length ? (
                      <div
                        className={`${isCompact ? "mt-5 gap-2" : "mt-7 gap-2.5"} hidden flex-wrap md:flex`}
                      >
                        {meta.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/12 bg-white/[0.05] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.03em] text-white/74"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    {children && <div className={isCompact ? "mt-5" : "mt-8"}>{children}</div>}
                  </div>
                </div>
              ) : (
                <>
                  <p className="max-w-[560px] text-[18px] leading-[1.7] text-white/78 md:text-[20px]">
                    {subtitle}
                  </p>
                  {children && <div className="mt-8">{children}</div>}
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden pt-[160px] pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 70% at 75% 20%, rgba(30,191,255,0.12), transparent), radial-gradient(50% 50% at 10% 90%, rgba(0,32,87,0.06), transparent)",
        }}
      />
      <div className="container-x relative">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-2)] bg-[var(--surface-2)]/60 px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--sky-bright)] animate-pulse-dot" />
          <span className="label-mono !text-[10px] !text-[var(--sky-deep)]">{pill}</span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-[1100px] font-display text-[clamp(48px,8vw,88px)] leading-[1] text-[var(--ink)]"
        >
          {renderTitle()}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 max-w-[680px] text-[20px] leading-[1.6] text-[var(--ink-2)]"
        >
          {subtitle}
        </motion.p>
        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}
