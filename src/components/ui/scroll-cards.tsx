"use client";

import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface iServiceCard {
  title: string;
  description: string;
  eyebrow: string;
  src: string;
  href: string;
  tags: string[];
  index: number;
  total: number;
}

const ServiceCard: FC<iServiceCard> = ({
  title,
  description,
  eyebrow,
  src,
  href,
  tags,
  index,
  total,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.97, 1, 1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={ref}
      className="h-screen flex items-center justify-center sticky top-0 px-4 md:px-8"
      style={{ paddingTop: "80px" }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          background: "linear-gradient(145deg, #103a78 0%, #0c2d62 100%)",
          boxShadow:
            "0 0 0 1px rgba(30,191,255,0.22), 0 32px 80px -16px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.10)",
        }}
        className="relative w-full max-w-[1060px] mx-auto overflow-hidden rounded-2xl grid md:grid-cols-[1fr_420px] lg:grid-cols-[1fr_460px] min-h-[400px] md:min-h-[440px]"
      >
        <div className="relative flex flex-col justify-center px-8 py-10 md:px-12 md:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-12 -left-12 h-48 w-48 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #1EBFFF, transparent 70%)" }}
          />

          <p className="relative mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-[#1EBFFF]/70">
            {String(index + 1).padStart(2, "0")}&thinsp;/&thinsp;
            {String(total).padStart(2, "0")}
          </p>

          <h3 className="relative max-w-[18ch] font-heading text-[clamp(22px,2.8vw,34px)] font-bold leading-[1.1] text-white">
            {title}
          </h3>

          <div
            className="relative mt-5 mb-5 h-px w-10"
            style={{ background: "linear-gradient(to right, #1EBFFF, transparent)" }}
          />

          <p className="relative max-w-[38ch] text-[14.5px] leading-[1.85] text-white/72">
            {description}
          </p>

          <div className="relative mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#1EBFFF]/80"
                style={{
                  background: "rgba(30,191,255,0.10)",
                  border: "1px solid rgba(30,191,255,0.25)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={href}
            className="group relative mt-8 inline-flex w-fit items-center gap-1.5 text-[13px] font-medium text-[#1EBFFF]/75 transition-colors duration-200 hover:text-[#1EBFFF]"
          >
            Explore practice
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="relative order-first min-h-[200px] overflow-hidden md:order-last md:min-h-0">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 460px"
            priority={index === 0}
          />

          <div className="absolute inset-0 bg-[#001234]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c2d62]/85 via-[#0c2d62]/25 to-transparent" />

          <div
            className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-md px-3 py-1.5"
            style={{
              background: "rgba(0,18,52,0.55)",
              border: "1px solid rgba(30,191,255,0.18)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#1EBFFF]/60" />
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/55">
              {eyebrow}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export interface iScrollCardsProps {
  items: Omit<iServiceCard, "index" | "total">[];
}

export const ScrollCards: FC<iScrollCardsProps> = ({ items }) => {
  return (
    <div>
      {items.map((item, i) => (
        <ServiceCard key={item.title} {...item} index={i} total={items.length} />
      ))}
    </div>
  );
};
