// ============================================================================
// 📁 config/index.ts
// 👑 MASTER SEO & METADATA CONFIGURATION MATRIX
// ============================================================================
// AUTHOR: DrakoXNaeem (Naeem)
// ROLE: Electrical Engineer & Full-Stack Systems Architect
// LOCATION: Jamshedpur, Jharkhand, India
// ============================================================================
// DESCRIPTION:
// This file dictates the global SEO (Search Engine Optimization) and Metadata
// configuration for the entire Next.js application. It is strictly typed using
// Next.js 'Metadata' interface to prevent any deployment or build errors.
// All previous aliases have been purged. Strictly authenticated for 'Naeem'.
// ============================================================================

import type { Metadata } from "next";

/**
 * @constant siteConfig
 * @description The primary metadata object injected into the Root Layout.
 * It controls browser tabs, search engine indexing, social media link previews
 * (OpenGraph/Twitter), and core application identity.
 */
export const siteConfig: Metadata = {
  // 🔹 Core Identity
  title: {
    default: "Naeem | Elite Systems Architect & Electrical Engineer",
    template: "%s | DrakoXNaeem Portfolio",
  },
  description: 
    "Official portfolio of Naeem (DrakoXNaeem). Bridging Electrical Engineering hardware logic with advanced Python automation, native Termux deployments, and highly scalable Telegram C2 bot networks.",
  applicationName: "DrakoXNaeem Enterprise Systems",
  generator: "Next.js 14",
  
  // 🔹 Search Engine Keywords
  keywords: [
    "Naeem",
    "DrakoXNaeem",
    "Systems Architect",
    "Electrical Engineer",
    "Telegram Bots",
    "Python Automation",
    "Termux OSINT",
    "Next.js 14",
    "TypeScript",
    "Full-Stack Developer",
    "Backend Architecture",
    "Command and Control Networks",
    "Jamshedpur Developer",
    "Node.js",
    "MongoDB",
    "Hardware Logic Integration"
  ] as Array<string>,

  // 🔹 Authorship & Ownership
  authors: [
    {
      name: "Naeem (DrakoXNaeem)",
      url: "https://github.com/nansari7287-sys",
    }
  ],
  creator: "Naeem",
  publisher: "DrakoXNaeem Architecture",

  // 🔹 Social Media Link Previews (Discord, WhatsApp, LinkedIn, Facebook)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://frexxy-portfolio-3dri.vercel.app/",
    title: "Naeem | Elite Systems Architect",
    description: "Engineering intelligent architectures and advanced cloud automation via Python and Termux.",
    siteName: "DrakoXNaeem Portfolio",
    images: [
      {
        url: "/1000323657.jpg", // Dynamically mapping to your provided VIP photo asset
        width: 1200,
        height: 630,
        alt: "Naeem - Elite Systems Architect",
      },
    ],
  },

  // 🔹 Twitter/X Specific Previews
  twitter: {
    card: "summary_large_image",
    title: "Naeem | Elite Systems Architect",
    description: "Bridging physical electrical logic with cloud software automation.",
    creator: "@drakoxnaeem",
    images: ["/1000323657.jpg"], // Ensure this asset exists in your public/ folder
  },

  // 🔹 Web Crawler & Indexing Rules
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 🔹 Canonical Links
  alternates: {
    canonical: "https://frexxy-portfolio-3dri.vercel.app/",
  },

  // 🔹 PWA / Browser Theme Customization
  category: "technology",
} as const;

/**
 * @constant fallbackConfig
 * @description A secondary configuration object containing raw application strings
 * exported for use in regular React components that cannot import 'Metadata'.
 */
export const config = {
  appName: "DrakoXNaeem Portfolio",
  appDescription: "Elite Systems Architect & Full-Stack Automation Portfolio of Naeem",
  author: "Naeem",
  handle: "DrakoXNaeem",
  institute: "Al-Kabir Institute of Management and Technology",
  branch: "Diploma in Electrical Engineering",
  location: "Jamshedpur, Jharkhand, India",
  siteUrl: "https://frexxy-portfolio-3dri.vercel.app/",
  githubUrl: "https://github.com/nansari7287-sys",
  instagramUrl: "https://www.instagram.com/drakoxnaeem",
  telegramUrl: "https://t.me/frexxxy",
  youtubeUrl: "https://www.youtube.com/@KHOKHRACOMEDY",
  email: "nansari7287@gmail.com",
} as const;

// Default export required for some Next.js configurations
export default siteConfig;
