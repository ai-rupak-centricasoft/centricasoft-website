"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HorizontalCarousel({
  children,
  itemCount,
}: {
  children: ReactNode;
  itemCount: number;
}) {
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", loop: false, dragFree: false });
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
    setCanPrev(embla.canScrollPrev());
    setCanNext(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("reInit", onSelect);
  }, [embla, onSelect]);

  const total = String(itemCount).padStart(2, "0");
  const current = String(selected + 1).padStart(2, "0");
  const progress = ((selected + 1) / itemCount) * 100;

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-6">
          <div className="font-mono text-[12px] text-[var(--ink-3)]">
            <span className="text-[var(--ink)]">{current}</span> / {total}
          </div>
          <div className="w-32 h-[2px] bg-[var(--border)] overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-gradient-brand-h origin-left"
              style={{ scaleX: progress / 100 }}
              initial={false}
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => embla?.scrollPrev()}
            disabled={!canPrev}
            className="w-10 h-10 rounded-full border border-[var(--border-2)] flex items-center justify-center text-[var(--ink)] transition-all hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[var(--ink)] disabled:hover:border-[var(--border-2)]"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => embla?.scrollNext()}
            disabled={!canNext}
            className="w-10 h-10 rounded-full border border-[var(--border-2)] flex items-center justify-center text-[var(--ink)] transition-all hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[var(--ink)] disabled:hover:border-[var(--border-2)]"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden -mx-2" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
    </div>
  );
}
