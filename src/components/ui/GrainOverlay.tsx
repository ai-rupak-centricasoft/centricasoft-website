"use client";

export function GrainOverlay() {
  return (
    <div
      aria-hidden
      className="grain pointer-events-none fixed inset-0 z-[9999] opacity-[0.025] mix-blend-multiply"
    />
  );
}
