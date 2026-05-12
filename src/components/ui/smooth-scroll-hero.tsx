"use client";
import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SmoothScrollHeroProps {
  /** Extra scroll travel (px) before the card fully expands. @default 900 */
  scrollHeight?: number;
  /** Fixed navbar height (px) — card top starts below this. @default 72 */
  navbarHeight?: number;
  /** Gap (px) between navbar bottom and card top. @default 10 */
  gapTop?: number;
  /** Side margin (px) on left + right. @default 20 */
  gapSide?: number;
  /**
   * Bottom gap expressed as % of viewport height.
   * 30 = card occupies ~60 % of the screen at rest (like the Eucloid reference).
   * @default 30
   */
  gapBottomVh?: number;
  /** Border-radius (px) of the card at rest. @default 16 */
  startRadius?: number;
  /** Video URL — used as the background when provided. */
  videoSrc?: string;
  /** Fallback / poster image for desktop. */
  desktopImage?: string;
  /** Fallback image for mobile. */
  mobileImage?: string;
  /** Content rendered inside the card. */
  children?: React.ReactNode;
}

// ─── Component ───────────────────────────────────────────────────────────────

/**
 * Sticky card that starts as a compact inset box (white space visible below)
 * and expands to full-screen as the user scrolls.
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

  // Track viewport height so we can express the bottom gap in vh
  const [winH, setWinH] = React.useState(768);
  React.useLayoutEffect(() => {
    setWinH(window.innerHeight);
    const onResize = () => setWinH(window.innerHeight);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const bottomInsetPx = (gapBottomVh / 100) * winH;

  // Insets animate from their rest values → 0 (full-screen)
  const top    = useTransform(scrollY, [0, scrollHeight], [navbarHeight + gapTop, 0]);
  const side   = useTransform(scrollY, [0, scrollHeight], [gapSide, 0]);
  const bottom = useTransform(scrollY, [0, scrollHeight], [bottomInsetPx, 0]);

  // Border-radius disappears before card is fully expanded
  const radius = useTransform(
    scrollY,
    [0, scrollHeight * 0.65],
    [startRadius, 0],
  );

  // Subtle parallax zoom on the media
  const scale = useTransform(scrollY, [0, scrollHeight + 300], [1.08, 1.0]);

  return (
    // Outer: full-screen sticky anchor — transparent, just provides the sticky point
    <div className="sticky top-0 h-screen w-full">
      {/* Inner: the actual visible card — absolutely inset, clips all children */}
      <motion.div
        className="absolute overflow-hidden bg-black"
        style={{ top, left: side, right: side, bottom, borderRadius: radius }}
      >
        {/* ── Media layer ── */}
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

        {/* ── Vignette — light touch, lets the image breathe ── */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden
          style={{
            background: [
              /* subtle dark tint — just enough for text contrast */
              "rgba(0, 5, 18, 0.30)",
              /* gentle radial — edges fade without killing the image */
              "radial-gradient(ellipse 100% 85% at 50% 50%, transparent 35%, rgba(0,4,16,0.55) 100%)",
              /* bottom scrim for the subtitle text */
              "linear-gradient(to top, rgba(0,3,14,0.72) 0%, transparent 38%)",
            ].join(", "),
          }}
        />

        {/* ── Content slot ── */}
        {children && (
          <div className="absolute inset-0 flex flex-col">{children}</div>
        )}
      </motion.div>
    </div>
  );
}

// ─── Standalone default export ────────────────────────────────────────────────

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 900,
  ...rest
}) => (
  <div
    style={{ height: `calc(${scrollHeight}px + 100vh)` }}
    className="relative w-full"
  >
    <SmoothScrollHeroBackground scrollHeight={scrollHeight} {...rest} />
  </div>
);

export default SmoothScrollHero;
