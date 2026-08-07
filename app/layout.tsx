// ============================================================================
// 📁 app/layout.tsx
// 👑 MASTER ROOT LAYOUT ARCHITECTURE
// ============================================================================
// AUTHOR: DrakoXNaeem (Md Naeem Ansari)
// ROLE: Electrical Engineer & Full-Stack Systems Architect
// ============================================================================
// DESCRIPTION:
// This is the foundational layout matrix for the entire portfolio application.
// It initializes the Next.js 14 App Router layout, injects global stylesheets,
// configures the primary font (Inter), and orchestrates the persistent UI
// components (Navbar, StarsCanvas Background, Footer) across all routes.
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
// Utilizing Next.js optimized Google Fonts. Subsets defined for maximum performance.
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
// 🌐 GLOBAL METADATA OVERRIDES (DRAKOXNAEEM BRANDING)
// ----------------------------------------------------------------------------
export const metadata: Metadata = {
  ...siteConfig,
  title: {
    default: "DrakoXNaeem | Elite Systems Architect",
    template: "%s | DrakoXNaeem Portfolio",
  },
  description:
    "Official portfolio of Md Naeem Ansari (DrakoXNaeem). Bridging Electrical Engineering hardware logic with advanced Python automation, Termux deployments, and highly scalable Telegram C2 bot networks.",
  applicationName: "DrakoXNaeem Enterprise Systems",
  generator: "Next.js 14",
  keywords: [
    "DrakoXNaeem", 
    "Md Naeem Ansari", 
    "Electrical Engineer", 
    "Telegram Bots", 
    "Python", 
    "Termux Automation",
    "Systems Architect"
  ],
  authors: [{ name: "Md Naeem Ansari", url: "https://github.com/nansari7287-sys" }],
  creator: "Md Naeem Ansari",
};

// ----------------------------------------------------------------------------
// 🏗️ ROOT LAYOUT MAIN COMPONENT
// ----------------------------------------------------------------------------
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        The body element acts as the primary container.
        overflow-y-scroll: Prevents layout shift when scrollbar appears.
        overflow-x-hidden: Prevents horizontal scrolling issues.
        selection: Custom highlight color when text is selected by the user.
      */}
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
