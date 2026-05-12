"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BotMessageSquare, Minus, Sparkles, X } from "lucide-react";
import { ReactBotComposer } from "@/components/reactbot/ReactBotComposer";
import { ReactBotIcon } from "@/components/reactbot/ReactBotIcon";
import { ReactBotMessage } from "@/components/reactbot/ReactBotMessage";
import type { ReactBotMessage as ReactBotMessageType } from "@/components/reactbot/types";
import { REACTBOT_QUICK_REPLIES, REACTBOT_WELCOME_MESSAGE } from "@/lib/reactbot/prompt-data";
import { cn } from "@/lib/utils";

const INITIAL_MESSAGES: ReactBotMessageType[] = [
  {
    id: "welcome",
    role: "assistant",
    text: REACTBOT_WELCOME_MESSAGE,
  },
];

function createMessage(role: ReactBotMessageType["role"], text: string, isError?: boolean) {
  return {
    id: `${role}-${crypto.randomUUID()}`,
    role,
    text,
    isError,
  } satisfies ReactBotMessageType;
}

export function ReactBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ReactBotMessageType[]>(INITIAL_MESSAGES);
  const [isReplying, setIsReplying] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    viewport.scrollTo({ top: viewport.scrollHeight, behavior: "smooth" });
  }, [messages, isReplying, isOpen]);

  const shouldShowQuickReplies = useMemo(
    () => messages.length <= 1 && !isReplying,
    [isReplying, messages.length],
  );

  const sendMessage = async (text: string) => {
    if (isReplying) return;

    const userMessage = createMessage("user", text);
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setIsReplying(true);

    try {
      const response = await fetch("/api/reactbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, text: value }) => ({ role, text: value })),
        }),
      });

      const data = (await response.json()) as { reply?: string; error?: string };
      if (!response.ok || !data.reply) {
        throw new Error(
          data.error || "CentricaSoft Assistant could not generate a response right now.",
        );
      }

      const reply = data.reply;
      setMessages((current) => [...current, createMessage("assistant", reply)]);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "CentricaSoft Assistant could not generate a response right now.";
      setMessages((current) => [...current, createMessage("assistant", message, true)]);
    } finally {
      setIsReplying(false);
    }
  };

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[1200] flex justify-end p-4 sm:p-6">
      <div className="pointer-events-auto flex max-w-full flex-col items-end gap-3">
        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.section
              key="reactbot-panel"
              initial={{ opacity: 0, y: 28, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[min(78vh,680px)] w-[min(calc(100vw-24px),420px)] overflow-hidden rounded-[12px] border border-[rgba(168,207,230,0.6)] bg-[rgba(252,253,255,0.97)] text-[var(--ink)] shadow-[0_40px_100px_-46px_rgba(0,18,52,0.48)] backdrop-blur-xl sm:w-[420px]"
            >
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(244,249,253,0.98) 100%)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,191,255,0.08),transparent_28%)]"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,rgba(0,32,87,0),rgba(30,191,255,0.95),rgba(0,32,87,0))]"
              />

              <div className="relative flex h-full flex-col">
                <div className="border-b border-[rgba(168,207,230,0.45)] px-5 pb-4 pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <ReactBotIcon />
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-display text-[20px] font-semibold tracking-[-0.03em] text-[var(--navy)]">
                            CentricaSoft Assistant
                          </p>
                          <span className="rounded-[6px] border border-[rgba(30,191,255,0.18)] bg-[rgba(30,191,255,0.1)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[var(--sky-deep)]">
                            live
                          </span>
                        </div>
                        <p className="mt-1 text-[12px] text-[var(--ink-3)]">
                          CentricaSoft assistant for services, Nubo, and project discovery
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        aria-label="Minimize Centrica Assistant"
                        className="grid h-9 w-9 place-items-center rounded-[8px] border border-[rgba(168,207,230,0.55)] bg-white text-[var(--ink-2)] transition-colors hover:bg-[var(--highlight)]"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        aria-label="Close Centrica Assistant"
                        className="grid h-9 w-9 place-items-center rounded-[8px] border border-[rgba(168,207,230,0.55)] bg-white text-[var(--ink-2)] transition-colors hover:bg-[var(--highlight)]"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      { label: "Use Cases", value: "AI + Data" },
                      { label: "Response", value: "Guided" },
                      { label: "Next Step", value: "Consult" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[10px] border border-[rgba(168,207,230,0.5)] bg-white px-3 py-2.5 shadow-[0_14px_28px_-26px_rgba(0,32,87,0.24)]"
                      >
                        <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--ink-3)]">
                          {item.label}
                        </div>
                        <div className="mt-1 font-heading text-[12px] font-semibold text-[var(--navy)]">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  ref={viewportRef}
                  className="relative flex-1 overflow-y-auto px-4 py-4 [scrollbar-color:rgba(168,207,230,0.45)_transparent] [scrollbar-width:thin] sm:px-5"
                >
                  <div className="flex flex-col gap-4 pb-4">
                    {messages.map((message) => (
                      <ReactBotMessage key={message.id} message={message} />
                    ))}

                    {isReplying ? (
                      <div className="flex gap-3">
                        <ReactBotIcon compact />
                        <div className="flex items-center gap-1 rounded-[10px] border border-[rgba(168,207,230,0.45)] bg-white px-4 py-3">
                          {[0, 1, 2].map((dot) => (
                            <motion.span
                              key={dot}
                              animate={{ opacity: [0.25, 1, 0.25], y: [0, -1.5, 0] }}
                              transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.14 }}
                              className="h-1.5 w-1.5 rounded-full bg-[var(--sky-deep)]"
                            />
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {shouldShowQuickReplies ? (
                      <div className="rounded-[10px] border border-dashed border-[rgba(168,207,230,0.75)] bg-[rgba(255,255,255,0.68)] p-3">
                        <div className="mb-3 flex items-center gap-2 text-[12px] text-[var(--ink-3)]">
                          <Sparkles className="h-3.5 w-3.5 text-[var(--sky-deep)]" />
                          Try one of these
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {REACTBOT_QUICK_REPLIES.map((prompt) => (
                            <button
                              key={prompt}
                              type="button"
                              onClick={() => void sendMessage(prompt)}
                              className="rounded-[999px] border border-[rgba(168,207,230,0.75)] bg-white px-3 py-2 text-left text-[12px] font-medium text-[var(--ink-2)] transition-all hover:-translate-y-0.5 hover:border-[var(--sky-bright)] hover:text-[var(--navy)]"
                            >
                              {prompt}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="border-t border-[rgba(168,207,230,0.45)] bg-[rgba(250,252,255,0.92)] px-4 py-4 backdrop-blur-xl sm:px-5">
                  <ReactBotComposer disabled={isReplying} onSubmit={sendMessage} />
                </div>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Close CentricaSoft Assistant" : "Open CentricaSoft Assistant"}
          className={cn(
            "group relative grid h-[60px] w-[60px] place-items-center overflow-hidden rounded-full border border-[rgba(0,32,87,0.16)] bg-[rgba(255,255,255,0.97)] text-[var(--navy)] shadow-[0_20px_44px_-20px_rgba(0,18,52,0.52),0_0_0_3px_rgba(30,191,255,0.18)] transition-transform duration-200 hover:scale-[1.02] hover:shadow-[0_26px_56px_-22px_rgba(0,18,52,0.58),0_0_0_4px_rgba(30,191,255,0.24)]",
            isOpen && "scale-95",
          )}
        >
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(30,191,255,0.18),transparent_52%)]" />
          <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(30,191,255,0.14),rgba(255,255,255,0.08),transparent)]" />
          </span>
          <span className="absolute inset-[8px] rounded-full bg-[linear-gradient(135deg,rgba(0,32,87,0.05),rgba(30,191,255,0.16))]" />
          <BotMessageSquare className="relative h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
