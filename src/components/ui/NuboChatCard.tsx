"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, DatabaseZap, Send, ShieldCheck } from "lucide-react";

const MESSAGES = [
  { from: "user", text: "Analyze Q3 pipeline performance" },
  {
    from: "nubo",
    text: "Pipeline efficiency is 94.2%. Stage 3 averages 4.1d, so I recommend automating the ops handoff.",
  },
];

export function NuboChatCard({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let active = true;

    const seq = async () => {
      const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

      while (active) {
        setStep(0);
        setTyping(false);
        await wait(1200);
        if (!active) return;

        setStep(1);
        await wait(800);
        if (!active) return;

        setTyping(true);
        await wait(1400);
        if (!active) return;

        setTyping(false);
        setStep(2);
        await wait(4500);
      }
    };

    seq();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div
      className={`relative isolate overflow-hidden text-white ${
        compact ? "h-[420px] w-full" : "h-[420px] w-full max-w-[390px]"
      }`}
      style={{
        background: "#001A3D",
        borderRadius: "20px",
        border: "1px solid rgba(30,191,255,0.15)",
        boxShadow: `
          0 0 0 1px rgba(30,191,255,0.08),
          0 24px 64px rgba(0,18,52,0.35),
          0 8px 24px rgba(0,18,52,0.25),
          inset 0 1px 0 rgba(255,255,255,0.06)
        `,
      }}
    >
      <div
        aria-hidden
        className="absolute left-0 right-0 top-0 z-10"
        style={{
          height: "2px",
          background: "linear-gradient(90deg, #002057, #0077B6, #1EBFFF)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 18% 10%, rgba(30,191,255,0.3), transparent 28%), radial-gradient(circle at 88% 42%, rgba(168,207,230,0.16), transparent 26%), linear-gradient(145deg, rgba(255,255,255,0.02) 0%, rgba(0,119,182,0.1) 100%)",
        }}
      />
      <div aria-hidden className="grain absolute inset-0 -z-10 opacity-[0.06]" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
        <div className="flex min-w-0 items-center gap-3">
          <div className="relative grid h-9 w-9 flex-shrink-0 place-items-center rounded-xl bg-white text-[var(--navy)] shadow-[0_12px_30px_-16px_rgba(30,191,255,0.9)]">
            <span className="font-display text-[15px] font-bold">N</span>
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--navy)] bg-[var(--sky-bright)]" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <div className="text-[13px] font-semibold leading-none">Nubo</div>
              <span className="rounded-full border border-white/10 bg-white/10 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.12em] text-[var(--sky-bright)]">
                live
              </span>
            </div>
            <div className="mt-1.5 flex items-center gap-1.5 text-[10px] text-white/55">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--sky-bright)] animate-pulse-dot" />
              Secure RAG workspace
            </div>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.06] px-2 py-1 font-mono text-[9px] text-white/45">
          v2.4
        </div>
      </div>

      <div className="grid h-[72px] grid-cols-3 gap-2 border-b border-white/10 px-5 py-3">
        {[
          { icon: ShieldCheck, label: "Trust", value: "99.1%" },
          { icon: DatabaseZap, label: "Sources", value: "42" },
          { icon: Activity, label: "Latency", value: "0.8s" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-white/10 bg-white/[0.07] px-2.5 py-2"
          >
            <div className="flex items-center gap-1.5 text-white/45">
              <item.icon className="h-3 w-3 text-[var(--sky-bright)]" />
              <span className="font-mono text-[8px] uppercase tracking-[0.12em]">{item.label}</span>
            </div>
            <div className="mt-1 font-display text-[17px] font-semibold leading-none text-white">
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div className="h-[258px] px-5 py-4">
        <div className="flex h-full flex-col justify-end gap-3">
          <motion.div
            initial={false}
            animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 10 }}
            transition={{ duration: 0.28 }}
            className="flex min-h-[46px] justify-end"
          >
            <div className="max-w-[82%] rounded-2xl rounded-tr-md border border-white/10 bg-white/[0.12] px-3.5 py-2.5 text-[13px] leading-[1.35] shadow-sm">
              {MESSAGES[0].text}
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: typing ? 1 : 0, y: typing ? 0 : 8 }}
            transition={{ duration: 0.22 }}
            className="flex min-h-[44px] justify-start"
          >
            <div className="flex rounded-2xl rounded-tl-md bg-[linear-gradient(90deg,var(--sky-deep),var(--sky-bright))] px-4 py-3 shadow-[0_16px_36px_-22px_rgba(30,191,255,0.9)]">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                  className="mx-0.5 h-1.5 w-1.5 rounded-full bg-white"
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="flex min-h-[92px] justify-start"
          >
            <div className="max-w-[88%] rounded-2xl rounded-tl-md bg-[linear-gradient(135deg,var(--sky-deep),var(--sky-bright))] px-3.5 py-3 text-[13px] leading-[1.5] shadow-[0_18px_42px_-22px_rgba(30,191,255,0.9)]">
              {MESSAGES[1].text}
              <div className="mt-2 flex flex-wrap gap-1.5">
                {["Stage 3", "Ops handoff", "Priority"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-white/16 px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-[0.1em] text-white/78"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[rgba(0,18,52,0.36)] px-5 py-3 backdrop-blur-sm">
        <div className="flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.08] px-3 text-[11px] text-white/45">
          <span className="flex-1 truncate">Ask Nubo anything...</span>
          <button
            type="button"
            aria-label="Send message"
            className="grid h-7 w-7 place-items-center rounded-lg bg-white text-[var(--navy)] transition-transform duration-200 hover:scale-105"
          >
            <Send className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
