import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: {
    default: "Naeem | Personal Portfolio",
    template: "%s | Naeem",
  },
  description:
    "Personal portfolio of Naeem, an Electrical Engineering diploma student exploring app development, website design and Telegram bot projects.",
  applicationName: "Naeem Portfolio",
  keywords: [
    "Naeem",
    "Personal Portfolio",
    "Electrical Engineering",
    "Android App Projects",
    "Website Design",
    "Telegram Bots",
    "UI UX",
  ],
  authors: [{ name: "Naeem", url: "https://github.com/nansari7287-sys" }],
  creator: "Naeem",
  publisher: "Naeem",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drakoxnaeem.vercel.app/",
    title: "Naeem | Personal Portfolio",
    description: "Education, interests and personal digital projects by Naeem.",
    siteName: "Naeem Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naeem | Personal Portfolio",
    description: "Electrical Engineering student exploring apps, websites and bots.",
  },
  robots: { index: true, follow: true },
};

export const config = {
  appName: "Naeem Portfolio",
  appDescription: "Personal portfolio of Naeem",
  author: "Naeem",
  handle: "Naeem",
  institute: "Al-Kabir Institute of Management and Technology",
  branch: "Diploma in Electrical Engineering",
  location: "India",
  siteUrl: "https://drakoxnaeem.vercel.app/",
  githubUrl: "https://github.com/nansari7287-sys",
  instagramUrl: "https://www.instagram.com/drakoxnaeem",
  telegramUrl: "https://t.me/frexxxy",
  email: "nansari7287@gmail.com",
} as const;

export default siteConfig;
