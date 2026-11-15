import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";
import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://drakoxnaeem.vercel.app";

export const viewport: Viewport = {
  themeColor: "#030014",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Naeem | Personal Portfolio",
    template: "%s | Naeem",
  },
  description:
    "The personal portfolio of Naeem, an Electrical Engineering diploma student exploring Android apps, website design and Telegram bot projects.",
  applicationName: "Naeem Portfolio",
  keywords: [
    "Naeem",
    "Naeem Portfolio",
    "Electrical Engineering Student",
    "Android App Projects",
    "Website Design",
    "Telegram Bots",
    "UI UX Design",
  ],
  authors: [{ name: "Naeem", url: "https://github.com/nansari7287-sys" }],
  creator: "Naeem",
  publisher: "Naeem",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Naeem | Personal Portfolio",
    description:
      "Explore Naeem's education, personal app projects, website design interests and Telegram bot work.",
    url: siteUrl,
    siteName: "Naeem Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naeem | Personal Portfolio",
    description: "Electrical Engineering student exploring apps, websites and bots.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: PropsWithChildren) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Naeem",
    url: siteUrl,
    description:
      "Electrical Engineering diploma student interested in Android app projects, website design and Telegram bots.",
    sameAs: [
      "https://github.com/nansari7287-sys",
      "https://t.me/frexxxy",
      "https://www.instagram.com/drakoxnaeem",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={cn("overflow-x-hidden bg-[#030014] text-gray-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-100", inter.className, inter.variable)}>
        <StarsCanvas />
        <Navbar />
        <div className="relative z-10 min-h-screen w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
