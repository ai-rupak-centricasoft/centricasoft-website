"use client";

import { FormEvent, useState } from "react";
import { SendHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ReactBotComposer({
  disabled,
  onSubmit,
}: {
  disabled?: boolean;
  onSubmit: (message: string) => Promise<void> | void;
}) {
  const [value, setValue] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = value.trim();
    if (!message || disabled) return;

    setValue("");
    await onSubmit(message);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <div
        className={cn(
          "relative flex min-h-12 flex-1 items-end rounded-[10px] border border-[rgba(168,207,230,0.65)] bg-white px-4 py-2.5 shadow-[0_12px_28px_-24px_rgba(0,32,87,0.24)] transition-all",
          disabled && "opacity-80",
        )}
      >
        <textarea
          rows={1}
          value={value}
          disabled={disabled}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Ask Centrica Assistant about CentricaSoft..."
          className="max-h-28 min-h-7 w-full resize-none bg-transparent text-[13px] leading-6 text-[var(--ink)] outline-none placeholder:text-[var(--ink-3)]"
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              const form = event.currentTarget.form;
              if (form) form.requestSubmit();
            }
          }}
        />
      </div>
      <Button
        type="submit"
        size="icon"
        disabled={disabled || !value.trim()}
        className="h-11 w-11 rounded-[10px] bg-[var(--navy)] text-white shadow-[0_18px_36px_-24px_rgba(0,32,87,0.45)] hover:bg-[var(--navy-mid)]"
      >
        <SendHorizontal className="h-4 w-4" />
      </Button>
    </form>
  );
}
