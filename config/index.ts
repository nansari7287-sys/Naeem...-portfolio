import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "MAGMA | Developer Portfolio",
  description: "MAGMA builds Telegram Bots, powerful APIs, automation tools and modern web applications.",
  keywords: [
    "MAGMA",
    "developer portfolio",
    "Telegram Bots",
    "APIs",
    "Automation Tools",
    "FastAPI",
    "Python",
    "AWS",
    "Next.js",
    "TypeScript",
    "Web Development",
  ] as Array<string>,
  authors: {
    name: "MAGMA",
    url: "https://github.com/themagmalord333-oss",
  },
} as const;