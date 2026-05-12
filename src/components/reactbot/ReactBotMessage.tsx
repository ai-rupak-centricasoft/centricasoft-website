import { ReactBotIcon } from "@/components/reactbot/ReactBotIcon";
import { cn } from "@/lib/utils";
import type { ReactBotMessage as ReactBotMessageType } from "@/components/reactbot/types";

export function ReactBotMessage({ message }: { message: ReactBotMessageType }) {
  const isAssistant = message.role === "assistant";

  return (
    <div className={cn("flex gap-3", isAssistant ? "justify-start" : "justify-end")}>
      {isAssistant ? <ReactBotIcon compact /> : null}
      <div
        className={cn(
          "max-w-[88%] rounded-[22px] px-4 py-3 text-[13px] leading-[1.6] shadow-sm sm:text-[13.5px]",
          isAssistant
            ? message.isError
              ? "rounded-tl-md border border-[rgba(239,68,68,0.18)] bg-[rgba(254,242,242,0.98)] text-[#991B1B]"
              : "rounded-tl-md border border-[rgba(168,207,230,0.45)] bg-[rgba(255,255,255,0.98)] text-[var(--ink)] shadow-[0_18px_36px_-30px_rgba(0,32,87,0.32)]"
            : "rounded-tr-md bg-[var(--navy)] text-white shadow-[0_22px_44px_-30px_rgba(0,32,87,0.55)]",
        )}
      >
        <p className="whitespace-pre-wrap">{message.text}</p>
      </div>
    </div>
  );
}
