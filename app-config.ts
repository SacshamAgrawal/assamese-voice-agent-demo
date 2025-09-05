import type { AppConfig } from "./lib/types";

export const APP_CONFIG_DEFAULTS: AppConfig = {
  companyName: "Pathnovo Solutions",
  pageTitle: "Assamese Voice Agent - Pathnovo Solutions",
  pageDescription: "Experience our advanced Assamese voice agent powered by Pathnovo Solutions",

  supportsChatInput: true,
  supportsVideoInput: true,
  supportsScreenShare: true,
  isPreConnectBufferEnabled: true,

  logo: "",
  accent: "#002cf2",
  logoDark: "",
  accentDark: "#1fd5f9",
  startButtonText: "Start Voice Session",

  agentName: undefined,
};
