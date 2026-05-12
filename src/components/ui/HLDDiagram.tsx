"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import type { HLDSpec } from "@/lib/services-data";

type Box = {
  id: string;
  left: number;
  top: number;
  width: number;
  height: number;
  right: number;
  bottom: number;
  cx: number;
  cy: number;
};

const DIAGRAM_PAD_X = 24;
const DIAGRAM_PAD_BOTTOM = 28;
const DIAGRAM_PAD_TOP = 72;

function getNodeHeight(hasSub: boolean) {
  return hasSub ? 88 : 72;
}

function getOrthogonalPath(from: Box, to: Box) {
  const gap = 22;

  if (to.left >= from.right) {
    const sx = from.right;
    const sy = from.cy;
    const ex = to.left;
    const ey = to.cy;
    const midX = sx + (ex - sx) / 2;
    return `M ${sx} ${sy} L ${midX} ${sy} L ${midX} ${ey} L ${ex} ${ey}`;
  }

  if (from.left >= to.right) {
    const sx = from.left;
    const sy = from.cy;
    const ex = to.right;
    const ey = to.cy;
    const midX = ex + (sx - ex) / 2;
    return `M ${sx} ${sy} L ${midX} ${sy} L ${midX} ${ey} L ${ex} ${ey}`;
  }

  if (to.top >= from.bottom) {
    const sx = from.cx;
    const sy = from.bottom;
    const ex = to.cx;
    const ey = to.top;
    const midY = sy + Math.max((ey - sy) / 2, gap);
    return `M ${sx} ${sy} L ${sx} ${midY} L ${ex} ${midY} L ${ex} ${ey}`;
  }

  const sx = from.cx;
  const sy = from.top;
  const ex = to.cx;
  const ey = to.bottom;
  const midY = ey + Math.max((sy - ey) / 2, gap);
  return `M ${sx} ${sy} L ${sx} ${midY} L ${ex} ${midY} L ${ex} ${ey}`;
}

export function HLDDiagram({ spec }: { spec: HLDSpec }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-15%" });
  const [size, setSize] = useState({ w: 0, h: spec.height ?? 540 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      setSize({ w: el.clientWidth, h: el.clientHeight });
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const boxes = useMemo(() => {
    const map = new Map<string, Box>();

    spec.nodes.forEach((node) => {
      const width = node.w ?? 180;
      const height = getNodeHeight(Boolean(node.sub));
      const left = (node.x / 100) * size.w;
      const top = (node.y / 100) * size.h;

      map.set(node.id, {
        id: node.id,
        left,
        top,
        width,
        height,
        right: left + width,
        bottom: top + height,
        cx: left + width / 2,
        cy: top + height / 2,
      });
    });

    return map;
  }, [size.h, size.w, spec.nodes]);

  const fit = useMemo(() => {
    if (!boxes.size || size.w === 0 || size.h === 0) {
      return { scale: 1, x: 0, y: 0 };
    }

    const values = Array.from(boxes.values());
    const minX = Math.min(...values.map((box) => box.left));
    const minY = Math.min(...values.map((box) => box.top));
    const maxX = Math.max(...values.map((box) => box.right));
    const maxY = Math.max(...values.map((box) => box.bottom));

    const boundsWidth = Math.max(maxX - minX, 1);
    const boundsHeight = Math.max(maxY - minY, 1);
    const availableWidth = Math.max(size.w - DIAGRAM_PAD_X * 2, 1);
    const availableHeight = Math.max(size.h - DIAGRAM_PAD_TOP - DIAGRAM_PAD_BOTTOM, 1);
    const scale = Math.min(availableWidth / boundsWidth, availableHeight / boundsHeight, 1);

    return {
      scale,
      x: DIAGRAM_PAD_X + (availableWidth - boundsWidth * scale) / 2 - minX * scale,
      y: DIAGRAM_PAD_TOP + (availableHeight - boundsHeight * scale) / 2 - minY * scale,
    };
  }, [boxes, size.h, size.w]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-[28px] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(238,245,251,0.9))] shadow-[0_24px_70px_-44px_rgba(0,18,52,0.35)]"
      style={{ height: spec.height ?? 540 }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 70% at 0% 100%, rgba(168,207,230,0.18), transparent 60%), radial-gradient(46% 40% at 100% 0%, rgba(30,191,255,0.1), transparent 70%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.42]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,207,230,0.42) 1px, transparent 1px), linear-gradient(90deg, rgba(168,207,230,0.42) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.12))",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.12))",
        }}
      />

      <div className="absolute left-5 top-5 z-[3] rounded-full border border-white/80 bg-white/84 px-4 py-2 shadow-[0_12px_30px_-24px_rgba(0,18,52,0.6)] backdrop-blur-sm">
        <div className="label-mono !text-[10px] !tracking-[0.18em] !text-[var(--sky-deep)]">
          System Flow
        </div>
      </div>

      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${fit.x}px, ${fit.y}px) scale(${fit.scale})`,
          transformOrigin: "top left",
        }}
      >
        <svg
          className="absolute left-0 top-0 pointer-events-none"
          style={{ zIndex: 1, width: size.w, height: size.h }}
        >
          <defs>
            <linearGradient id="hld-edge" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--sky-deep)" />
              <stop offset="100%" stopColor="var(--sky-bright)" />
            </linearGradient>
            <marker
              id="hld-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="var(--sky-bright)" />
            </marker>
          </defs>

          {size.w > 0 &&
            spec.edges.map((edge, index) => {
              const from = boxes.get(edge.from);
              const to = boxes.get(edge.to);
              if (!from || !to) return null;

              return (
                <motion.path
                  key={`${edge.from}-${edge.to}-${index}`}
                  d={getOrthogonalPath(from, to)}
                  stroke="url(#hld-edge)"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  markerEnd="url(#hld-arrow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 0.9 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.28 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              );
            })}
        </svg>

        {spec.nodes.map((node, index) => {
          const width = node.w ?? 180;
          const height = getNodeHeight(Boolean(node.sub));

          const variant =
            node.variant === "primary"
              ? "border-[rgba(0,32,87,0.8)] bg-[linear-gradient(135deg,rgba(0,32,87,0.98),rgba(0,119,182,0.95))] text-white shadow-[0_22px_42px_-24px_rgba(0,32,87,0.7)]"
              : node.variant === "muted"
                ? "border-[rgba(168,207,230,0.95)] bg-[linear-gradient(180deg,rgba(242,249,253,0.98),rgba(228,240,249,0.98))] text-[var(--ink-2)] shadow-[0_18px_36px_-28px_rgba(0,32,87,0.35)]"
                : "border-[rgba(168,207,230,0.95)] bg-white/96 text-[var(--ink)] shadow-[0_18px_36px_-28px_rgba(0,32,87,0.28)]";

          return (
            <motion.div
              key={node.id}
              className={`absolute rounded-[24px] border px-5 py-4 backdrop-blur-sm ${variant}`}
              style={{
                left: (node.x / 100) * size.w,
                top: (node.y / 100) * size.h,
                width,
                minHeight: height,
                zIndex: 2,
              }}
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.52, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-[15px] font-semibold leading-[1.2]">{node.label}</div>
              {node.sub && (
                <div
                  className={`mt-2 font-mono text-[10px] uppercase tracking-[0.24em] ${
                    node.variant === "primary" ? "text-white/68" : "text-[var(--sky-deep)]"
                  }`}
                >
                  {node.sub}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
