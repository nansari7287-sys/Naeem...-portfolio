// ============================================================================
// 📁 app/layout.tsx
// 👑 MASTER ROOT LAYOUT ARCHITECTURE & SEO MATRIX
// ============================================================================
// AUTHOR: DrakoXNaeem (Md Naeem Ansari)
// ROLE: Electrical Engineer & Full-Stack Systems Architect
// ============================================================================

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

// ----------------------------------------------------------------------------
// 🧩 COMPONENT IMPORTS
// ----------------------------------------------------------------------------
import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";

// ----------------------------------------------------------------------------
// ⚙️ CONFIGURATION & UTILITIES IMPORTS
// ----------------------------------------------------------------------------
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

// ----------------------------------------------------------------------------
// 🎨 GLOBAL STYLESHEET
// ----------------------------------------------------------------------------
import "./globals.css";

// ----------------------------------------------------------------------------
// 🔠 FONT OPTIMIZATION MATRIX
// ----------------------------------------------------------------------------
const inter = Inter({ 
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

// ----------------------------------------------------------------------------
// 📱 VIEWPORT & THEME CONFIGURATION
// ----------------------------------------------------------------------------
export const viewport: Viewport = {
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ----------------------------------------------------------------------------
// 🌐 GLOBAL METADATA OVERRIDES (DRAKOXNAEEM & NAEEM BRANDING & SEO MATRIX)
// ----------------------------------------------------------------------------
export const metadata: Metadata = {
  ...siteConfig,
  metadataBase: new URL("https://frexxy-portfolio-3dri.vercel.app"),
  title: {
    default: "Naeem Ansari (DrakoXNaeem) | Elite Systems Architect",
    template: "%s | Naeem Ansari (DrakoXNaeem) Portfolio",
  },
  description:
    "Official portfolio of Naeem Ansari (Md Naeem Ansari / DrakoXNaeem). Electrical Engineer bridging hardware logic with advanced Python automation, Termux deployments, and highly scalable Telegram C2 bot networks.",
  applicationName: "Naeem Ansari (DrakoXNaeem) Enterprise Systems",
  generator: "Next.js 14",
  keywords: [
    "Naeem",
    "Naeem Ansari",
    "Md Naeem Ansari",
    "DrakoXNaeem",
    "DrakoXNaeem Portfolio",
    "Naeem Portfolio",
    "Naeem Electrical Engineer",
    "Naeem Systems Architect",
    "Electrical Engineer",
    "Telegram Bots",
    "Python",
    "Termux Automation",
    "Systems Architect"
  ],
  authors: [{ name: "Md Naeem Ansari", url: "https://github.com/nansari7287-sys" }],
  creator: "Md Naeem Ansari (DrakoXNaeem)",
  publisher: "DrakoXNaeem Enterprise Systems",
  verification: {
    google: "Az7D687nqxA8jOie1RMCHHL1fn32VpR-nJGbd73qFjE", // Google Search Console Verification Tag
  },
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
  openGraph: {
    title: "Naeem Ansari (DrakoXNaeem) | Elite Systems Architect",
    description:
      "Official portfolio of Naeem Ansari (Md Naeem Ansari / DrakoXNaeem). Bridging Electrical Engineering hardware logic with advanced Python automation, Termux deployments, and highly scalable Telegram C2 bot networks.",
    url: "https://frexxy-portfolio-3dri.vercel.app",
    siteName: "Naeem Ansari (DrakoXNaeem) Portfolio",
    locale: "en_US",
    type: "website",
  },
};

// ----------------------------------------------------------------------------
// 🏗️ ROOT LAYOUT MAIN COMPONENT
// ----------------------------------------------------------------------------
export default function RootLayout({ children }: PropsWithChildren) {
  // Google Person Schema for Knowledge Graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Naeem Ansari",
    "alternateName": ["DrakoXNaeem", "Md Naeem Ansari", "Naeem"],
    "url": "https://frexxy-portfolio-3dri.vercel.app",
    "jobTitle": "Electrical Engineer & Systems Architect",
    "sameAs": [
      "https://github.com/nansari7287-sys",
      "https://t.me/frexxxy",
      "https://www.instagram.com/drakoxnaeem",
      "https://www.facebook.com/share/1Dyr1kjXoM/"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={cn(
          "bg-[#030014] text-gray-100 overflow-y-scroll overflow-x-hidden antialiased selection:bg-cyan-500/30 selection:text-cyan-200",
          inter.className,
          inter.variable
        )}
      >
        {/* 🌌 Persistent Background Animation */}
        <StarsCanvas />

        {/* 🧭 Persistent Top Navigation Bar */}
        <Navbar />

        {/* 🖥️ Dynamic Page Content Injection */}
        <main className="relative z-10 min-h-screen flex flex-col w-full">
          {children}
        </main>

        {/* 📜 Persistent Footer Area */}
        <Footer />
      </body>
    </html>
  );
}
