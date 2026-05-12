export type ReactBotRole = "user" | "assistant";

export type ReactBotMessage = {
  id: string;
  role: ReactBotRole;
  text: string;
  isError?: boolean;
};
