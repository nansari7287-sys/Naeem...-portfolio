// ============================================================================
// 📁 components/main/navbar.tsx
// 👑 VIP ENTERPRISE NAVIGATION BAR COMPONENT
// ============================================================================
// AUTHOR: DrakoXNaeem (Naeem)
// ROLE: Electrical Engineer & Full-Stack Systems Architect
// ============================================================================
// DESCRIPTION:
// This component renders the global navigation bar. It features a fully 
// responsive glassmorphism design, desktop navigation links, social media 
// integrations, and a smooth animated mobile dropdown menu.
// "Ansari" has been strictly omitted as per architectural guidelines.
// ============================================================================

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State for scroll blur effect
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener for dynamic navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-[70px] fixed top-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-[#030014]/50 backdrop-blur-xl shadow-lg shadow-[#2A0E61]/50 border-b border-purple-500/20"
          : "bg-transparent"
      } px-6 md:px-10`}
    >
      {/* 🌟 Master Navbar Container */}
      <div className="w-full h-full flex items-center justify-between m-auto max-w-[1500px]">
        
        {/* ===================================================================
            🔹 LOGO & BRANDING SECTION
            =================================================================== */}
        <Link
          href="#about-me"
          className="flex items-center gap-3 group"
          aria-label="Go to Home"
        >
          <div className="relative overflow-hidden rounded-full border-2 border-transparent group-hover:border-cyan-400/50 transition-colors duration-300 p-0.5">
            <Image
              src="/logo.png"
              alt="Naeem Brand Logo"
              width={50}
              height={50}
              draggable={false}
              className="cursor-pointer rounded-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="hidden md:flex font-black text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_15px_rgba(112,66,248,0.6)]">
            Naeem
          </div>
        </Link>

        {/* ===================================================================
            🔹 DESKTOP NAVIGATION LINKS (Hidden on Mobile)
            =================================================================== */}
        <div className="hidden md:flex w-[550px] h-full flex-row items-center justify-center md:mr-10">
          <div className="flex items-center justify-between w-full h-auto border border-purple-500/30 bg-[#030014]/40 px-[25px] py-[12px] rounded-full text-gray-200 shadow-[0_0_20px_rgba(112,66,248,0.2)] backdrop-blur-md">
            
            {/* Dynamic Iteration of Nav Links from Constants */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer font-mono text-[14px] uppercase tracking-widest text-gray-300 hover:text-cyan-400 hover:scale-105 transition-all duration-300"
              >
                {link.title}
              </Link>
            ))}

            {/* Source Code Special Link */}
            <Link
              href={LINKS.sourceCode}
              target="_blank"
              rel="noreferrer noopener"
              className="cursor-pointer font-mono text-[14px] uppercase tracking-widest text-pink-400 hover:text-cyan-400 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse"></span>
              Source Code
            </Link>
          </div>
        </div>

        {/* ===================================================================
            🔹 SOCIAL MEDIA ICONS ARRAY (Desktop View)
            =================================================================== */}
        <div className="hidden md:flex flex-row gap-4 items-center">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              aria-label={`Naeem's ${name} Profile`}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 hover:-translate-y-1 group"
            >
              <Icon className="h-5 w-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
            </Link>
          ))}
        </div>

        {/* ===================================================================
            🔹 HAMBURGER MENU BUTTON (Mobile View)
            =================================================================== */}
        <button
          className="md:hidden text-gray-300 hover:text-cyan-400 focus:outline-none text-4xl transition-colors z-[110]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Navigation Menu"
        >
          {isMobileMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* ===================================================================
          📱 MOBILE FULL-SCREEN NAVIGATION DROPDOWN
          =================================================================== */}
      <div 
        className={`absolute top-[70px] left-0 w-full bg-[#030014]/95 backdrop-blur-3xl p-8 flex flex-col items-center text-gray-300 md:hidden border-b border-purple-500/40 shadow-2xl transition-all duration-500 origin-top ${
          isMobileMenuOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        {/* Mobile Nav Links */}
        <div className="flex flex-col items-center gap-6 w-full mb-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="cursor-pointer font-mono text-xl uppercase tracking-widest text-gray-300 hover:text-cyan-400 transition-all text-center w-full pb-3 border-b border-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          
          <Link
            href={LINKS.sourceCode}
            target="_blank"
            rel="noreferrer noopener"
            className="cursor-pointer font-mono text-xl uppercase tracking-widest text-pink-400 hover:text-cyan-400 transition-all text-center w-full pb-3 border-b border-white/5 flex items-center justify-center gap-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse"></span>
            Source Code
          </Link>
        </div>

        {/* Mobile Social Icons Grid */}
        <div className="flex flex-wrap justify-center gap-6 w-full max-w-[300px]">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              aria-label={`Naeem's ${name} Profile`}
              className="p-3.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all duration-300"
            >
              <Icon className="h-7 w-7 text-cyan-400" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
