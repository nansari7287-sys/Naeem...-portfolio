// ============================================================================
// 📁 components/sub/hero-content.tsx
// 👑 VIP ENTERPRISE HERO COMPONENT (TEXT SHIELD & INTERACTIVE PROFILE FIXED)
// ============================================================================
// AUTHOR: 𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎 (𝑵𝒂𝒆𝒆𝒎)
// ROLE: Electrical Engineer & Full-Stack Systems Architect
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
      // Upar shift karne ke liye mt-6 kar diya hai (absolute top feel)
      className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 mt-6 md:mt-16 pt-10 w-full z-[50] gap-12 lg:gap-8 max-w-[1600px] mx-auto relative"
    >
      
      {/* 
        =======================================================================
        🌟 LEFT COLUMN: TEXT, BIO & BUTTONS (WITH DARK READABILITY SHIELD)
        =======================================================================
      */}
      <div className="h-full w-full flex flex-col gap-6 justify-center m-auto text-start lg:w-[58%] relative z-[60]">
        
        {/* 🛡️ DARK GLASS SHIELD: Ye background brightness ko block karega taaki text 100% clear dikhe */}
        <div className="bg-[#030014]/60 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-purple-500/30 shadow-[0_0_40px_rgba(0,0,0,0.8)] relative z-20">
          
          {/* 🔹 Top Welcome Badge */}
          <motion.div
            variants={slideInFromTop}
            className="py-2 px-4 border border-cyan-500/60 rounded-xl bg-[#030014]/80 shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center w-fit mb-6"
          >
            <SparklesIcon className="text-cyan-400 mr-2.5 h-4 w-4 md:h-5 md:w-5 animate-pulse" />
            <h1 className="text-[13px] md:text-[15px] font-mono tracking-wider uppercase text-gray-100 font-extrabold flex items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-base md:text-lg">
                𝑵𝒂𝒆𝒆𝒎
              </span> 
              <span className="text-gray-300">// Electrical Engineer & Architect</span>
            </h1>
          </motion.div>

          {/* 🔹 Main Headline: High Contrast Drop Shadows */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-2 text-4xl sm:text-6xl lg:text-[72px] font-black text-white max-w-[850px] w-auto h-auto leading-[1.1] tracking-tight"
          >
            <span className="drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow-[0_0_20px_rgba(112,66,248,0.8)]">
                powerful digital systems
              </span>{" "}
              with{" "}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 tracking-normal drop-shadow-[0_0_25px_rgba(6,182,212,0.9)] text-[48px] sm:text-[72px] lg:text-[85px] inline-block py-2">
                𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎.
              </span>
            </span>
          </motion.div>

          {/* 🔹 Biography with Colorful Al-Kabir Highlight */}
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-[15px] sm:text-base md:text-[17px] text-gray-200 mt-4 mb-6 max-w-[700px] leading-relaxed font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
          >
            I am <strong className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-black text-xl mr-1">𝑵𝒂𝒆𝒆𝒎</strong>, 
            pursuing a Diploma in <strong className="text-pink-400 font-bold">Electrical Engineering</strong> at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-500 to-cyan-400 font-extrabold drop-shadow-[0_0_10px_rgba(244,114,182,0.8)] text-base md:text-lg border-b border-pink-500/60 pb-0.5 inline-block">
              Al-Kabir Institute of Management and Technology
            </span>{" "}
            in Jamshedpur. I seamlessly blend core hardware electrical logic with advanced software automation. My expertise spans across engineering scalable{" "}
            <strong className="text-purple-400 font-bold">Telegram C2 networks</strong>, 
            backend architectures, and executing precision{" "}
            <strong className="text-cyan-400 font-bold">Python automation via Termux</strong>.
          </motion.p>

          {/* 🔹 Technical Feature Badges */}
          <motion.div 
            variants={slideInFromLeft(0.9)}
            className="flex flex-wrap gap-3 my-2"
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
                className="text-[11px] md:text-[12px] font-bold font-mono px-4 py-2 rounded-full bg-[#030014]/90 border border-white/20 text-gray-100 shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:border-cyan-400 transition-all cursor-default flex items-center gap-1.5"
              >
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${tag.color} font-black text-sm`}>⚡</span>
                <span>{tag.name}</span>
              </span>
            ))}
          </motion.div>

          {/* 🔹 Action Buttons */}
          <motion.div
            variants={slideInFromLeft(1)}
            className="flex flex-row flex-wrap items-center gap-5 mt-8"
          >
            <Link
              href="#projects"
              className="py-3.5 px-8 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-center text-white font-extrabold tracking-widest uppercase text-sm cursor-pointer rounded-xl shadow-[0_0_25px_rgba(112,66,248,0.8)] hover:shadow-[0_0_40px_rgba(6,182,212,1)] hover:scale-105 transition-all duration-300 border border-white/30"
            >
              Explore Systems
            </Link>
            
            <Link
              href="https://github.com/nansari7287-sys"
              target="_blank"
              rel="noreferrer noopener"
              className="py-3.5 px-8 bg-[#030014]/90 border border-white/20 hover:border-cyan-400 text-center text-gray-100 font-mono text-sm cursor-pointer rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 group hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
            >
              <span className="text-purple-400 group-hover:text-cyan-400 transition-colors text-lg font-black">&lt;/&gt;</span>
              <span className="tracking-widest uppercase font-bold">Developer Core</span>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* 
        =======================================================================
        🚀 RIGHT COLUMN: VIP INTERACTIVE CYBERPUNK IDENTITY CARD
        =======================================================================
      */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center relative lg:w-[38%] mt-8 lg:mt-0 z-[45]"
      >
        {/* Deep ambient glow strictly behind the card */}
        <div className="absolute w-[250px] h-[250px] md:w-[420px] md:h-[420px] bg-gradient-to-tr from-cyan-500/40 via-purple-600/40 to-pink-500/40 rounded-full blur-[100px] md:blur-[130px] pointer-events-none z-0"></div>
        
        {/* 🔹 VIP Interactive Profile Card (Group wrapper for hover physics) */}
        <div className="relative flex flex-col p-2.5 rounded-[30px] border border-cyan-500/50 bg-[#030014]/80 backdrop-blur-3xl shadow-[0_0_50px_rgba(112,66,248,0.4)] group hover:border-cyan-400 transition-all duration-500 z-10 w-full max-w-[320px] md:max-w-[380px] cursor-pointer">
          
          {/* Status Badges */}
          <div className="absolute -top-4 left-5 bg-cyan-950 border border-cyan-400/80 px-4 py-1.5 rounded-full text-[11px] font-mono tracking-widest text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.8)] z-30 font-bold uppercase">
            SYS_ARCHITECT
          </div>
          <div className="absolute -top-4 right-5 bg-pink-950 border border-pink-400/80 px-4 py-1.5 rounded-full text-[11px] font-mono tracking-widest text-pink-300 shadow-[0_0_20px_rgba(244,114,182,0.8)] z-30 font-bold uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
            ACTIVE
          </div>

          {/* 🔹 Interactive Image Container */}
          <div className="w-full aspect-[4/5] rounded-[22px] overflow-hidden border border-white/20 relative bg-black">
            
            {/* The Image (GitHub URL - 100% Error Free) */}
            <img
              src="https://github.com/nansari7287-sys.png"
              alt="𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎 Identity"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-110"
              draggable={false}
            />
            
            {/* 
              =================================================================
              🔥 MAGIC HOVER EFFECTS START HERE
              =================================================================
            */}
            
            {/* STATE 1: INITIAL OVERLAY (Visible by default, disappears on hover) */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-10 z-20">
              <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 drop-shadow-[0_0_20px_rgba(112,66,248,1)] tracking-wider">
                𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎
              </h2>
              <p className="text-cyan-400 font-mono text-[10px] md:text-xs mt-3 tracking-widest animate-pulse border border-cyan-400/50 px-3 py-1 rounded-full">
                [ PRESS / HOVER TO REVEAL ]
              </p>
            </div>

            {/* STATE 2: REVEALED NAMEPLATE (Hidden by default, slides UP from bottom on hover) */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-30 flex flex-col items-center">
              <h2 className="text-2xl md:text-3xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] tracking-wider">
                𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-cyan-400"></div>
                <div className="text-pink-400 text-xs font-mono tracking-widest">𝑵𝒂𝒆𝒆𝒎</div>
                <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-cyan-400"></div>
              </div>
            </div>

            {/* Inner Border Glow Effect on Hover */}
            <div className="absolute inset-0 border-[2px] border-transparent group-hover:border-cyan-500/60 rounded-[22px] transition-colors duration-500 z-40 pointer-events-none"></div>
          </div>
        </div>
      </motion.div>
      
    </motion.div>
  );
};

export default HeroContent;
