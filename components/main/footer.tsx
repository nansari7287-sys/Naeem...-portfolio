// ============================================================================
// 📁 components/main/footer.tsx
// 👑 VIP ENTERPRISE FOOTER ARCHITECTURE
// ============================================================================
// AUTHOR: DrakoXNaeem (Naeem)
// ROLE: Electrical Engineer & Full-Stack Systems Architect
// ============================================================================
// DESCRIPTION:
// This component renders the global footer section. It incorporates
// dynamic navigation maps from constants, social link routing, brand identity,
// telemetry system status indicators, and clean glassmorphism styling.
// "Ansari" has been strictly omitted as per architectural guidelines.
// ============================================================================

"use client";

import React from "react";
import Link from "next/link";
import { FOOTER_DATA, PERSONAL_INFO } from "@/constants";
import { FaTerminal, FaMapMarkerAlt, FaCodeBranch, FaShieldAlt } from "react-icons/fa";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#030014]/80 backdrop-blur-2xl text-gray-200 border-t border-purple-500/30 relative z-50 overflow-hidden pt-16 pb-8 mt-20 shadow-[0_-10px_40px_rgba(112,66,248,0.15)]">
      
      {/* 🌌 Top Neon Gradient Divider Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[2px] bg-gradient-to-r from-transparent via-cyan-400 via-purple-500 to-transparent shadow-[0_0_20px_rgba(6,182,212,0.8)] opacity-80" />

      <div className="w-full max-w-[1500px] flex flex-col items-center justify-center m-auto px-6 md:px-12 lg:px-16">
        
        {/* ===================================================================
            🏢 FOOTER TOP SECTION: BRANDING SUMMARY & DYNAMIC COLUMNS
            =================================================================== */}
        <div className="w-full flex flex-col lg:flex-row items-start justify-between flex-wrap gap-12 pb-14 border-b border-white/10">
          
          {/* 🔹 Brand & Bio Column */}
          <div className="min-w-[280px] max-w-[380px] flex flex-col items-start justify-start">
            <h3 className="font-extrabold text-[24px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 mb-4 tracking-wider flex items-center gap-2.5 drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              <FaTerminal className="text-cyan-400 text-xl animate-pulse" />
              {PERSONAL_INFO?.brand_name || "DrakoXNaeem"}
            </h3>
            
            <p className="text-[14px] text-gray-400 leading-relaxed font-light mb-6">
              {PERSONAL_INFO?.tagline || "Engineering scalable Telegram C2 networks, Python automation, and modern web architectures."}
            </p>
            
            {/* Status Badges */}
            <div className="flex flex-col gap-2.5 w-full">
              <div className="flex items-center gap-2.5 text-[12px] font-mono text-cyan-300 bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20 w-fit">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span>Jamshedpur, Jharkhand, India</span>
              </div>
              
              <div className="flex items-center gap-2.5 text-[12px] font-mono text-pink-300 bg-pink-500/10 px-3.5 py-1.5 rounded-full border border-pink-500/20 w-fit">
                <FaCodeBranch className="text-pink-400" />
                <span>Al-Kabir Institute of Management & Technology</span>
              </div>
            </div>
          </div>

          {/* 🔹 Dynamic Category Columns mapped from FOOTER_DATA */}
          {FOOTER_DATA.map((column) => (
            <div
              key={`footer-col-${column.title}`}
              className="min-w-[200px] h-auto flex flex-col items-start justify-start"
            >
              <h4 className="font-bold text-[16px] text-white mb-6 uppercase tracking-widest border-b border-purple-500/50 pb-2.5 inline-block">
                {column.title}
              </h4>
              
              <div className="flex flex-col gap-3.5 w-full">
                {column.data.map(({ icon: Icon, name, link }) => (
                  <Link
                    key={`${column.title}-${name}`}
                    href={link}
                    target={link.startsWith("http") ? "_blank" : "_self"}
                    rel={link.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="flex flex-row items-center text-[14px] text-gray-400 hover:text-cyan-400 transition-all duration-300 group py-1"
                  >
                    {Icon ? (
                      <Icon className="text-purple-400 group-hover:text-cyan-400 transition-colors mr-2.5 text-base" />
                    ) : (
                      <span className="text-purple-500 mr-2.5 group-hover:translate-x-1.5 group-hover:text-cyan-400 transition-transform duration-300 font-black">
                        &gt;
                      </span>
                    )}
                    <span className="group-hover:translate-x-1 transition-transform duration-300 font-medium">
                      {name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ===================================================================
            ⚖️ FOOTER BOTTOM SECTION: COPYRIGHT & SYSTEM STATUS TELEMETRY
            =================================================================== */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between mt-8 text-[13px] text-gray-500 font-mono gap-4">
          
          {/* Copyright text without MAGMA or restricted name elements */}
          <div className="text-center md:text-left">
            &copy; {currentYear}{" "}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 text-[15px] uppercase mx-1">
              Naeem
            </span>{" "}
            (DrakoXNaeem). All rights reserved.
          </div>

          {/* Telemetry and Security Metrics */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="flex items-center gap-1.5 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer">
              <FaShieldAlt className="text-cyan-400 text-xs" />
              <span>Encrypted Protocol</span>
            </span>
            <span className="text-gray-700">|</span>
            <span className="flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/30 text-green-400 text-[12px]">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,1)] animate-pulse" />
              Systems Operational
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
