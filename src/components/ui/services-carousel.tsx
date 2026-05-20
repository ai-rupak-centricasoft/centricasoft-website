"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";

export interface ServicesCarouselItem {
  title: string;
  description: string;
  eyebrow: string;
  src: string;
  href: string;
  tags: string[];
}

interface ServicesCarouselProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  subtitle: string;
  eyebrow?: string;
  items: ServicesCarouselItem[];
}

export const ServicesCarousel = React.forwardRef<HTMLDivElement, ServicesCarouselProps>(
  ({ title, subtitle, eyebrow, items, className, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleNext = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, [items.length]);

    const handlePrev = React.useCallback(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    }, [items.length]);

    // Auto-rotate
    React.useEffect(() => {
      const timer = setInterval(handleNext, 4500);
      return () => clearInterval(timer);
    }, [handleNext]);

    const currentItem = items[currentIndex];

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex w-full flex-col items-center justify-center overflow-x-hidden pt-4 pb-10 md:pt-5 md:pb-16 text-[var(--ink)]",
          className,
        )}
        {...props}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-40"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(50% 50% at 20% 30%, rgba(99,140,255,0.08), transparent), radial-gradient(40% 40% at 80% 60%, rgba(168,120,255,0.06), transparent)",
          }}
        />

        <div className="z-10 flex w-full flex-col items-center text-center">
          <div className="space-y-5 px-4 mb-12">
            {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
            <h2 className="max-w-4xl font-display text-4xl tracking-[-0.04em] sm:text-5xl md:text-6xl">
              {title}
            </h2>
            <p className="mx-auto max-w-2xl text-[var(--ink-3)] md:text-xl">{subtitle}</p>
          </div>

          <div className="relative flex h-[420px] md:h-[480px] w-full items-center justify-center">
            <div className="relative flex h-full w-full items-center justify-center">
              {items.map((item, index) => {
                const offset = index - currentIndex;
                const total = items.length;
                let pos = (offset + total) % total;
                if (pos > Math.floor(total / 2)) {
                  pos -= total;
                }

                const isCenter = pos === 0;
                const isAdjacent1 = Math.abs(pos) === 1;
                const isAdjacent2 = Math.abs(pos) === 2;

                // Exact flush positioning for side cards
                let translateX = 0;
                if (pos === 1) translateX = 92;
                else if (pos === -1) translateX = -92;
                else if (pos === 2) translateX = 175;
                else if (pos === -2) translateX = -175;

                // Uniform scale and opacity for all side cards
                let scale = isCenter ? 1 : 0.85;
                let zIndex = isCenter ? 10 : isAdjacent1 ? 5 : isAdjacent2 ? 2 : 1;
                let opacity = isCenter ? 1 : 0.95;
                let visibility = Math.abs(pos) > 2 ? "hidden" : "visible";

                // Dynamic vibrant colors for center card's background
                const bgColors = [
                  "from-blue-600/70",
                  "from-purple-600/70",
                  "from-emerald-600/70",
                  "from-rose-600/70",
                  "from-amber-600/70",
                  "from-cyan-600/70",
                ];
                const vibrantGlow = bgColors[index % bgColors.length];

                return (
                  <div
                    key={index}
                    className="absolute flex h-[400px] w-[280px] items-center justify-center transition-all duration-700 ease-out md:h-[460px] md:w-[320px]"
                    style={{
                      transform: `
                        translateX(${translateX}%)
                        scale(${scale})
                      `,
                      zIndex,
                      opacity,
                      visibility: visibility as any,
                    }}
                  >
                    <div className={cn(
                      "group relative flex h-full w-full flex-col overflow-hidden rounded-[20px] transition-all duration-700",
                      isCenter 
                        ? "bg-[#0B1120] shadow-[0_32px_80px_-24px_rgba(11,17,32,0.8)] border border-white/5" 
                        : "bg-[#8E95A5] shadow-md border-transparent"
                    )}>
                      <div className="absolute inset-0">
                        {isCenter && (
                          <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80 to-transparent", vibrantGlow)} />
                        )}
                        
                        <img 
                          src={item.src} 
                          alt={item.title} 
                          className={cn(
                            "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
                            isCenter ? "opacity-30" : "opacity-20"
                          )} 
                        />
                        <div className={cn(
                          "absolute inset-0",
                          isCenter 
                            ? "bg-gradient-to-t from-[#0B1120] via-[#0B1120]/80 to-[#0B1120]/30"
                            : "bg-[#8E95A5]/40"
                        )} />
                      </div>
                      
                      <div className={cn(
                        "relative flex h-full flex-col p-5 md:p-6 transition-all duration-700",
                        isCenter ? "justify-end text-left" : "justify-end items-center text-center pb-8"
                      )}>
                        {isCenter && (
                          <div className="mb-3 text-[11px] font-semibold tracking-wider text-blue-400 uppercase opacity-90">
                            {item.eyebrow}
                          </div>
                        )}
                        
                        <h3 className={cn(
                          "font-bold text-white leading-tight",
                          isCenter ? "mb-2 text-xl md:text-2xl" : "text-lg md:text-xl"
                        )}>
                          {item.title}
                        </h3>
                        
                        {isCenter && (
                          <>
                            <p className="mb-4 text-xs md:text-sm leading-relaxed text-white/70 line-clamp-3">
                              {item.description}
                            </p>
                            <div className="mt-auto flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <span 
                                  key={tag} 
                                  className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/80 border border-white/5"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Controls Area */}
          <div className="mt-12 flex w-full max-w-[1200px] flex-col items-center justify-between px-6 sm:flex-row sm:items-end">
            <div className="hidden sm:block w-[120px]" /> {/* Spacer for centering */}
            
            {/* Center Pagination */}
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center space-x-2">
                {items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      idx === currentIndex ? "w-6 bg-[var(--ink)]" : "w-1.5 bg-[var(--ink)]/20 hover:bg-[var(--ink)]/40"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Navigation Arrows */}
            <div className="mt-8 flex space-x-3 sm:mt-0 sm:w-[120px] sm:justify-end">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-[rgba(168,207,230,0.55)] bg-white/78 text-[var(--ink)] shadow-sm backdrop-blur-md hover:bg-white"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-[rgba(168,207,230,0.55)] bg-white/78 text-[var(--ink)] shadow-sm backdrop-blur-md hover:bg-white"
                onClick={handleNext}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

ServicesCarousel.displayName = "ServicesCarousel";
