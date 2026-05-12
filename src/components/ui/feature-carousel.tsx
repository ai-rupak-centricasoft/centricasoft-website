"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface FeatureCarouselItem {
  src: string;
  alt: string;
  quote: string;
  role: string;
  organization: string;
}

interface FeatureCarouselProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  subtitle: string;
  items: FeatureCarouselItem[];
}

export const FeatureCarousel = React.forwardRef<HTMLDivElement, FeatureCarouselProps>(
  ({ title, subtitle, items, className, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(Math.floor(items.length / 2));

    const handleNext = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, [items.length]);

    const handlePrev = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    }, [items.length]);

    React.useEffect(() => {
      const timer = setInterval(handleNext, 4500);
      return () => clearInterval(timer);
    }, [handleNext]);

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full flex-col items-center justify-center overflow-x-hidden rounded-[32px] border border-[rgba(168,207,230,0.38)] bg-[linear-gradient(180deg,rgba(248,251,254,0.98)_0%,rgba(238,245,251,0.98)_100%)] px-4 py-8 text-[var(--ink)] shadow-[0_28px_80px_-48px_rgba(0,18,52,0.28)] md:px-8 md:py-10",
          className,
        )}
        {...props}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-70"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(40% 30% at 20% 20%, rgba(88,113,138,0.12), transparent), radial-gradient(34% 26% at 80% 75%, rgba(58,110,165,0.12), transparent)",
          }}
        />

        <div className="z-10 flex w-full flex-col items-center space-y-6 text-center md:space-y-8">
          <div className="space-y-4">
            <h2 className="max-w-4xl font-display text-4xl tracking-[-0.04em] sm:text-5xl md:text-6xl">
              {title}
            </h2>
            <p className="mx-auto max-w-2xl text-[var(--ink-3)] md:text-xl">{subtitle}</p>
          </div>

          <div className="relative flex h-[390px] w-full items-center justify-center md:h-[470px]">
            <div className="relative flex h-full w-full items-center justify-center [perspective:1000px]">
              {items.map((item, index) => {
                const offset = index - currentIndex;
                const total = items.length;
                let pos = (offset + total) % total;
                if (pos > Math.floor(total / 2)) {
                  pos -= total;
                }

                const isCenter = pos === 0;
                const isAdjacent = Math.abs(pos) === 1;

                return (
                  <div
                    key={index}
                    className="absolute flex h-[340px] w-56 items-end justify-center transition-all duration-500 ease-in-out md:h-[410px] md:w-72"
                    style={{
                      transform: `
                        translateX(${pos * 52}%)
                        scale(${isCenter ? 1 : isAdjacent ? 0.86 : 0.72})
                        rotateY(${pos * -10}deg)
                      `,
                      zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                      opacity: isCenter ? 1 : isAdjacent ? 0.46 : 0,
                      filter: isCenter ? "blur(0px)" : "blur(4px)",
                      visibility: Math.abs(pos) > 1 ? "hidden" : "visible",
                    }}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/50 bg-[var(--surface)] shadow-[0_24px_60px_-28px_rgba(0,18,52,0.28)]">
                      <img src={item.src} alt={item.alt} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,18,52,0.72)] via-[rgba(0,18,52,0.18)] to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5 text-left md:p-6">
                        <p className="text-[14px] leading-[1.65] text-white/92 md:text-[15px]">
                          "{item.quote}"
                        </p>
                        <div className="mt-4 h-px w-12 bg-white/18" />
                        <div className="mt-4">
                          <div className="text-[13px] font-semibold text-white">{item.role}</div>
                          <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/58">
                            {item.organization}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-full border-[rgba(168,207,230,0.55)] bg-white/78 backdrop-blur-sm hover:bg-white sm:left-6"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 z-20 h-10 w-10 -translate-y-1/2 rounded-full border-[rgba(168,207,230,0.55)] bg-white/78 backdrop-blur-sm hover:bg-white sm:right-6"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    );
  },
);

FeatureCarousel.displayName = "FeatureCarousel";
