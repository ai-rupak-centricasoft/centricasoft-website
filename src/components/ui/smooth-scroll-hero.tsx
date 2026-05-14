"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface SmoothScrollHeroProps {
  /** Extra scroll travel (px) before the card fully expands. @default 900 */
  scrollHeight?: number;
  /** Fixed navbar height (px) the card top starts below. @default 72 */
  navbarHeight?: number;
  /** Gap (px) between navbar bottom and card top. @default 10 */
  gapTop?: number;
  /** Side margin (px) on left and right. @default 20 */
  gapSide?: number;
  /**
   * Bottom gap expressed as % of viewport height.
   * 30 = card occupies about 60% of the screen at rest.
   * @default 30
   */
  gapBottomVh?: number;
  /** Border radius (px) of the card at rest. @default 16 */
  startRadius?: number;
  /** Video URL used as the background when provided. */
  videoSrc?: string;
  /** Fallback / poster image for desktop. */
  desktopImage?: string;
  /** Fallback image for mobile. */
  mobileImage?: string;
  /** Content rendered inside the card. */
  children?: React.ReactNode;
}

/**
 * Sticky card that starts as a compact inset box and expands to full-screen on scroll.
 */
export function SmoothScrollHeroBackground({
  scrollHeight = 900,
  navbarHeight = 72,
  gapTop = 10,
  gapSide = 20,
  gapBottomVh = 30,
  startRadius = 16,
  videoSrc,
  desktopImage,
  mobileImage,
  children,
}: SmoothScrollHeroProps) {
  const { scrollY } = useScroll();

  const [winH, setWinH] = React.useState(768);
  const [winW, setWinW] = React.useState(1280);
  React.useLayoutEffect(() => {
    setWinH(window.innerHeight);
    setWinW(window.innerWidth);
    const onResize = () => {
      setWinH(window.innerHeight);
      setWinW(window.innerWidth);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = winW < 768;
  const effectiveGapBottomVh = isMobile ? Math.max(gapBottomVh - 8, 8) : gapBottomVh;
  const bottomInsetPx = (effectiveGapBottomVh / 100) * winH;

  const top = useTransform(scrollY, [0, scrollHeight], [navbarHeight + gapTop, 0]);
  const side = useTransform(scrollY, [0, scrollHeight], [gapSide, 0]);
  const bottom = useTransform(scrollY, [0, scrollHeight], [bottomInsetPx, 0]);

  const radius = useTransform(scrollY, [0, scrollHeight * 0.65], [startRadius, 0]);
  const scale = useTransform(scrollY, [0, scrollHeight + 300], [1.08, 1.0]);

  return (
    <div className="sticky top-0 h-screen w-full">
      <motion.div
        className="absolute overflow-hidden bg-black"
        style={{ top, left: side, right: side, bottom, borderRadius: radius }}
      >
        {videoSrc ? (
          <motion.div className="absolute inset-0" style={{ scale }}>
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              poster={desktopImage}
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden
            />
          </motion.div>
        ) : (
          <>
            <motion.div
              className="absolute inset-0 md:hidden"
              style={{
                backgroundImage: `url(${mobileImage ?? desktopImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                scale,
              }}
            />
            <motion.div
              className="absolute inset-0 hidden md:block"
              style={{
                backgroundImage: `url(${desktopImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                scale,
              }}
            />
          </>
        )}

        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background: [
              "rgba(0, 5, 18, 0.42)",
              "radial-gradient(ellipse 100% 85% at 50% 50%, rgba(0,8,22,0.06) 12%, rgba(0,4,16,0.68) 100%)",
              "linear-gradient(to top, rgba(0,3,14,0.82) 0%, rgba(0,3,14,0.22) 42%, transparent 68%)",
              "linear-gradient(to bottom, rgba(0,6,18,0.34) 0%, transparent 28%)",
            ].join(", "),
          }}
        />

        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background:
              "radial-gradient(circle at 50% 42%, rgba(8,18,38,0.24) 0%, rgba(8,18,38,0.10) 34%, transparent 62%)",
            backdropFilter: "blur(2px) saturate(88%) brightness(0.92)",
            WebkitBackdropFilter: "blur(2px) saturate(88%) brightness(0.92)",
          }}
        />

        {children && <div className="absolute inset-0 flex flex-col">{children}</div>}
      </motion.div>
    </div>
  );
}

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({ scrollHeight = 900, ...rest }) => (
  <div style={{ height: `calc(${scrollHeight}px + 100vh)` }} className="relative w-full">
    <SmoothScrollHeroBackground scrollHeight={scrollHeight} {...rest} />
  </div>
);

export default SmoothScrollHero;
