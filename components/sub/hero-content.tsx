// ============================================================================
// 📁 components/sub/hero-content.tsx
// 👑 VIP ENTERPRISE HERO COMPONENT (TOP ALIGNMENT & COLORFUL HIGHLIGHTS)
// ============================================================================
// AUTHOR: 𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎 (𝑵𝒂𝒆𝒆𝒎)
// ROLE: Electrical Engineer & Full-Stack Systems Architect
// ============================================================================
// DESCRIPTION:
// - Absolute Top Placement: Reduced top margins so the main headline renders directly at the top.
// - Authentic Stylish Monikers: Strictly enforcing '𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎' and '𝑵𝒂𝒆𝒆𝒎'.
// - Vibrant Multi-Color Institution: Highlights Al-Kabir Institute with custom gradient styling.
// - New Live Photo Asset: Direct integration of the verified image endpoint.
// ============================================================================

"use client";

import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      // mt-10 and pt-2 on mobile forces the component to start directly at the top
      className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 mt-10 md:mt-24 pt-2 w-full z-[50] gap-10 lg:gap-8 max-w-[1600px] mx-auto relative"
    >
      
      {/* 
        =======================================================================
        🌟 LEFT COLUMN: TEXT, BIO, VIBRANT HIGHLIGHTS & BUTTONS
        =======================================================================
      */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start lg:w-[58%] relative z-[60]">
        
        {/* 🔹 Top Welcome Badge with Stylish 𝑵𝒂𝒆𝒆𝒎 */}
        <motion.div
          variants={slideInFromTop}
          className="py-2 px-4 border border-cyan-500/50 rounded-xl bg-[#030014]/90 backdrop-blur-2xl shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center w-fit hover:border-cyan-400 transition-colors duration-300"
        >
          <SparklesIcon className="text-cyan-400 mr-2.5 h-4 w-4 md:h-5 md:w-5 animate-pulse" />
          <h1 className="text-[12px] md:text-[14px] font-mono tracking-wider uppercase text-gray-100 font-extrabold flex items-center gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-base md:text-lg">
              𝑵𝒂𝒆𝒆𝒎
            </span> 
            <span className="text-gray-400">// Electrical Engineer & Architect</span>
          </h1>
        </motion.div>

        {/* 🔹 Main Headline: "Building powerful digital systems with 𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎" */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 text-4xl sm:text-6xl lg:text-[72px] font-black text-white max-w-[850px] w-auto h-auto leading-[1.08] tracking-tight"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_25px_rgba(112,66,248,0.6)]">
              powerful digital systems
            </span>{" "}
            with{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 tracking-normal drop-shadow-[0_0_35px_rgba(6,182,212,0.8)] text-[44px] sm:text-[68px] lg:text-[80px] inline-block py-1">
              𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎.
            </span>
          </span>
        </motion.div>

        {/* 🔹 Biography with Colorful Al-Kabir Institute Highlight */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-[15px] sm:text-base md:text-[17px] text-gray-300 my-2 max-w-[700px] leading-relaxed font-light bg-[#030014]/60 backdrop-blur-md p-5 rounded-2xl border border-purple-500/20 shadow-2xl"
        >
          I am <strong className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-black text-xl mr-1">𝑵𝒂𝒆𝒆𝒎</strong>, 
          pursuing a Diploma in <strong className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-400 font-bold">Electrical Engineering</strong> at{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-500 to-cyan-400 font-extrabold drop-shadow-[0_0_15px_rgba(244,114,182,0.7)] text-base md:text-lg border-b border-pink-500/40 pb-0.5 inline-block">
            Al-Kabir Institute of Management and Technology
          </span>{" "}
          in Jamshedpur. I seamlessly blend core hardware electrical logic with advanced software automation. My expertise spans across engineering scalable{" "}
          <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">Telegram C2 networks</strong>, 
          backend architectures, and executing precision{" "}
          <strong className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-bold">Python automation via Termux</strong>.
        </motion.p>

        {/* 🔹 Technical Feature Badges */}
        <motion.div 
          variants={slideInFromLeft(0.9)}
          className="flex flex-wrap gap-2.5 my-1"
        >
          {[
            { name: "Python 3 Automation", color: "from-cyan-400 to-blue-500" },
            { name: "Termux Linux OS", color: "from-green-400 to-emerald-500" },
            { name: "Telegram C2 Networks", color: "from-purple-400 to-pink-500" },
            { name: "Electrical Logic", color: "from-amber-400 to-orange-500" },
            { name: "System Architecture", color: "from-pink-400 to-cyan-400" }
          ].map((tag, idx) => (
            <span 
              key={idx}
              className="text-[11px] md:text-[12px] font-mono px-3.5 py-1.5 rounded-full bg-[#030014]/90 backdrop-blur-xl border border-white/10 text-gray-200 shadow-md hover:border-cyan-400 transition-all cursor-default flex items-center gap-1.5"
            >
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${tag.color} font-black`}>⚡</span>
              <span>{tag.name}</span>
            </span>
          ))}
        </motion.div>

        {/* 🔹 Action Buttons (Primary and Secondary CTA) */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row flex-wrap items-center gap-4 mt-3"
        >
          <Link
            href="#projects"
            className="py-3 px-8 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-center text-white font-extrabold tracking-widest uppercase text-xs md:text-sm cursor-pointer rounded-xl shadow-[0_0_25px_rgba(112,66,248,0.6)] hover:shadow-[0_0_40px_rgba(6,182,212,0.9)] hover:scale-105 transition-all duration-300 border border-white/20"
          >
            Explore Systems
          </Link>
          
          <Link
            href="https://github.com/nansari7287-sys"
            target="_blank"
            rel="noreferrer noopener"
            className="py-3 px-7 bg-[#030014]/80 backdrop-blur-xl border border-white/15 hover:border-cyan-400 text-center text-gray-200 font-mono text-xs md:text-sm cursor-pointer rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 group hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]"
          >
            <span className="text-purple-400 group-hover:text-cyan-400 transition-colors text-base font-black">&lt;/&gt;</span>
            <span className="tracking-widest uppercase font-bold">Developer Core</span>
          </Link>
        </motion.div>
      </div>

      {/* 
        =======================================================================
        🚀 RIGHT COLUMN: VIP CYBERPUNK IDENTITY CARD (NEW PHOTO LINK)
        =======================================================================
      */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center relative lg:w-[38%] mt-6 lg:mt-0 z-[45]"
      >
        {/* Glow flare background */}
        <div className="absolute w-[220px] h-[220px] md:w-[380px] md:h-[380px] bg-gradient-to-tr from-cyan-500/30 via-purple-600/30 to-pink-500/30 rounded-full blur-[90px] md:blur-[120px] pointer-events-none z-0"></div>
        
        {/* 🔹 VIP Cyberpunk Profile Container */}
        <div className="relative flex flex-col items-center p-3.5 rounded-[28px] border border-cyan-500/40 bg-[#030014]/75 backdrop-blur-2xl shadow-[0_0_45px_rgba(112,66,248,0.3)] group hover:border-cyan-400 transition-all duration-500 z-10 w-full max-w-[310px] md:max-w-[370px]">
          
          {/* Status Badges */}
          <div className="absolute -top-3 left-4 bg-cyan-950/95 border border-cyan-400/60 px-3.5 py-1 rounded-full text-[10px] font-mono tracking-widest text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.7)] z-20 font-bold uppercase">
            SYS_ARCHITECT
          </div>
          <div className="absolute -top-3 right-4 bg-pink-950/95 border border-pink-400/60 px-3.5 py-1 rounded-full text-[10px] font-mono tracking-widest text-pink-300 shadow-[0_0_15px_rgba(244,114,182,0.7)] z-20 font-bold uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse"></span>
            ACTIVE
          </div>

          {/* 🔹 Profile Image (Updated to the new requested link) */}
          <div className="w-full aspect-[4/5] rounded-[20px] overflow-hidden border border-white/10 relative bg-[#030014]">
            <img
              src="https://kommodo.ai/i/4SJhKFC4A4aQ9It44oRr"
              alt="𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎 Identity"
              className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-700 ease-in-out"
              draggable={false}
            />
            {/* Blending overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/20 to-transparent opacity-90"></div>
            <div className="absolute inset-0 border-[2px] border-transparent group-hover:border-cyan-500/40 rounded-[20px] transition-colors duration-500"></div>
          </div>

          {/* 🔹 Stylish Moniker Banner (𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎) */}
          <div className="w-full mt-4 mb-2 flex flex-col items-center justify-center relative z-20">
            <h2 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 drop-shadow-[0_0_15px_rgba(112,66,248,0.9)] tracking-wide text-center py-1">
              𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎
            </h2>
            
            {/* Sub-tag stylish name */}
            <div className="text-[12px] font-mono text-cyan-400/90 tracking-widest uppercase mt-0.5">
              [ 𝑵𝒂𝒆𝒆𝒎 // CORE ]
            </div>
            
            {/* Futuristic Underline Accent */}
            <div className="flex items-center gap-2.5 mt-2.5">
              <div className="h-[2px] w-10 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(244,114,182,1)] animate-pulse"></div>
              <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-cyan-400"></div>
            </div>
          </div>

        </div>
      </motion.div>
      
    </motion.div>
  );
};

export default HeroContent;
