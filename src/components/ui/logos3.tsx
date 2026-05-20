"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  subheading?: string;
  logos?: Logo[];
  /** "light" = white bg section, "dark" = navy bg section */
  variant?: "light" | "dark";
}

// ─── Component ────────────────────────────────────────────────────────────────

const Logos3 = ({ heading, subheading, logos = [], variant = "light" }: Logos3Props) => {
  const isDark = variant === "dark";

  return (
    <div className="w-full">
      {(heading || subheading) && (
        <div className="container-x mb-8 text-center">
          {heading && (
            <p
              className={`mb-1 font-mono text-[12px] uppercase tracking-[0.2em] ${
                isDark ? "text-white/50" : "text-[var(--sky-deep)]"
              }`}
            >
              {heading}
            </p>
          )}
          {subheading && (
            <p className={`text-[13px] ${isDark ? "text-white/25" : "text-[var(--ink-3)]"}`}>
              {subheading}
            </p>
          )}
        </div>
      )}

      <div className="relative">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 1.2, stopOnInteraction: false })]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {/* Duplicate logos for seamless loop feel */}
            {[...logos, ...logos].map((logo, i) => (
              <CarouselItem
                key={`${logo.id}-${i}`}
                className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-1/8"
              >
                <div className="mx-5 flex shrink-0 flex-col items-center justify-center gap-3 py-3 md:mx-8">
                  <img
                    src={logo.image}
                    alt={logo.description}
                    className={`${logo.className ?? "h-8 w-auto"} scale-110 opacity-85`}
                    draggable={false}
                  />
                  <span
                    className={`whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.16em] ${
                      isDark ? "text-white/45" : "text-[var(--ink-3)]"
                    }`}
                  >
                    {logo.description}
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Fade edges */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
          style={{
            background: isDark
              ? "linear-gradient(to right, #001234, transparent)"
              : "linear-gradient(to right, var(--bg), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
          style={{
            background: isDark
              ? "linear-gradient(to left, #001234, transparent)"
              : "linear-gradient(to left, var(--bg), transparent)",
          }}
        />
      </div>
    </div>
  );
};

export { Logos3, type Logos3Props, type Logo };
