// ============================================================================
// 📁 components/sub/hero-content.tsx
// 👑 VIP ENTERPRISE HERO COMPONENT (NEXT.JS TSX - ZERO BUILD ERROR)
// ============================================================================
// AUTHOR: 𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎 (𝑵𝒂𝒆𝒆𝒎)
// ROLE: Electrical Engineer & Full-Stack Systems Architect
// ============================================================================

"use client";

import React, { useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const HeroContent = () => {
  // 🔹 3-Click Interaction State
  const [clickCount, setClickCount] = useState(0);

  const handleCardInteraction = () => {
    setClickCount((prev) => {
      const next = prev + 1;
      if (next >= 3) {
        return 0; // 3rd click locks the card back
      }
      return next; // 1 = Open, 2 = Remains Open
    });
  };

  const isRevealed = clickCount > 0;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 mt-4 md:mt-14 pt-8 w-full z-[50] gap-12 lg:gap-8 max-w-[1600px] mx-auto relative"
    >
      
      {/* 
        =======================================================================
        🌟 LEFT COLUMN: TEXT, BIO & VIBRANT BADGES
        =======================================================================
      */}
      <div className="h-full w-full flex flex-col gap-6 justify-center m-auto text-start lg:w-[58%] relative z-[60]">
        
        {/* 🌌 BALANCED DARK GLASS SHIELD */}
        <div className="bg-[#030014]/45 backdrop-blur-md p-5 sm:p-8 rounded-3xl border border-purple-500/30 shadow-[0_0_35px_rgba(0,0,0,0.7)] relative z-20">
          
          {/* 🔹 Top Welcome Badge */}
          <motion.div
            variants={slideInFromTop}
            className="py-2 px-4 border border-cyan-500/60 rounded-xl bg-[#030014]/80 shadow-[0_0_20px_rgba(6,182,212,0.5)] flex items-center w-fit mb-5"
          >
            <SparklesIcon className="text-cyan-400 mr-2.5 h-4 w-4 md:h-5 md:w-5 animate-pulse" />
            <h1 className="text-[13px] md:text-[15px] font-mono tracking-wider uppercase text-gray-100 font-extrabold flex items-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-base md:text-lg">
                𝑵𝒂𝒆𝒆𝒎
              </span> 
              <span className="text-gray-300">// Electrical Engineer & Architect</span>
            </h1>
          </motion.div>

          {/* 🔹 Main Headline */}
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-2 text-4xl sm:text-6xl lg:text-[72px] font-black text-white max-w-[850px] w-auto h-auto leading-[1.1] tracking-tight"
          >
            <span className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow-[0_0_25px_rgba(112,66,248,0.9)]">
                powerful digital systems
              </span>{" "}
              with{" "}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 tracking-normal drop-shadow-[0_0_30px_rgba(6,182,212,1)] text-[46px] sm:text-[70px] lg:text-[84px] inline-block py-1">
                𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎.
              </span>
            </span>
          </motion.div>

          {/* 🔹 Biography with Colorful Al-Kabir Highlight */}
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-[15px] sm:text-base md:text-[17px] text-gray-200 mt-4 mb-6 max-w-[700px] leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
          >
            I am <strong className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-black text-xl mr-1">𝑵𝒂𝒆𝒆𝒎</strong>, 
            pursuing a Diploma in <strong className="text-pink-400 font-bold">Electrical Engineering</strong> at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-500 to-cyan-400 font-extrabold drop-shadow-[0_0_15px_rgba(244,114,182,0.9)] text-base md:text-lg border-b border-pink-500/60 pb-0.5 inline-block">
              Al-Kabir Institute of Management and Technology
            </span>{" "}
            in Jamshedpur. I seamlessly blend core hardware electrical logic with advanced software automation. My focus remains strictly on zero-latency performance and unbreakable security across scalable{" "}
            <strong className="text-purple-400 font-bold">Telegram C2 networks</strong>, 
            backend architectures, and precision{" "}
            <strong className="text-cyan-400 font-bold">Python automation via Termux</strong>.
          </motion.p>

          {/* 🔹 Technical Feature Badges (Updated to Electrical Engg.) */}
          <motion.div 
            variants={slideInFromLeft(0.9)}
            className="flex flex-wrap gap-2.5 my-2"
          >
            {[
              { name: "Python 3 Automation", color: "from-cyan-400 to-blue-500" },
              { name: "Termux Linux OS", color: "from-green-400 to-emerald-500" },
              { name: "Telegram C2 Networks", color: "from-purple-400 to-pink-500" },
              { name: "Electrical Engg.", color: "from-amber-400 to-orange-500" },
              { name: "System Architecture", color: "from-pink-400 to-cyan-400" },
              { name: "High Performance & Security", color: "from-emerald-400 via-cyan-400 to-blue-500" }
            ].map((tag, idx) => (
              <span 
                key={idx}
                className="text-[11px] md:text-[12px] font-bold font-mono px-4 py-2 rounded-full bg-[#030014]/90 border border-white/20 text-gray-100 shadow-[0_0_10px_rgba(0,0,0,0.6)] hover:border-cyan-400 transition-all cursor-default flex items-center gap-1.5"
              >
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${tag.color} font-black text-sm`}>⚡</span>
                <span>{tag.name}</span>
              </span>
            ))}
          </motion.div>

          {/* 🔹 Action Buttons */}
          <motion.div
            variants={slideInFromLeft(1)}
            className="flex flex-row flex-wrap items-center gap-4 mt-7"
          >
            <Link
              href="#projects"
              className="py-3.5 px-8 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 text-center text-white font-extrabold tracking-widest uppercase text-xs md:text-sm cursor-pointer rounded-xl shadow-[0_0_25px_rgba(112,66,248,0.8)] hover:shadow-[0_0_40px_rgba(6,182,212,1)] hover:scale-105 transition-all duration-300 border border-white/30"
            >
              Explore Systems
            </Link>
            
            <Link
              href="https://github.com/nansari7287-sys"
              target="_blank"
              rel="noreferrer noopener"
              className="py-3.5 px-8 bg-[#030014]/90 border border-white/20 hover:border-cyan-400 text-center text-gray-100 font-mono text-xs md:text-sm cursor-pointer rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 group hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
            >
              <span className="text-purple-400 group-hover:text-cyan-400 transition-colors text-lg font-black">&lt;/&gt;</span>
              <span className="tracking-widest uppercase font-bold">Developer Core</span>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* 
        =======================================================================
        🚀 RIGHT COLUMN: VIP INTERACTIVE IDENTITY CARD (3-CLICK CYCLE)
        =======================================================================
      */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center relative lg:w-[38%] mt-8 lg:mt-0 z-[45]"
      >
        {/* Ambient Glow */}
        <div className="absolute w-[260px] h-[260px] md:w-[420px] md:h-[420px] bg-gradient-to-tr from-cyan-500/40 via-purple-600/40 to-pink-500/40 rounded-full blur-[100px] md:blur-[130px] pointer-events-none z-0"></div>
        
        {/* 🔹 Interactive Profile Card Container */}
        <div 
          onClick={handleCardInteraction}
          className="relative flex flex-col p-2.5 rounded-[30px] border border-cyan-500/50 bg-[#030014]/80 backdrop-blur-3xl shadow-[0_0_50px_rgba(112,66,248,0.5)] group hover:border-cyan-400 transition-all duration-500 z-10 w-full max-w-[320px] md:max-w-[380px] cursor-pointer select-none active:scale-[0.98]"
        >
          
          {/* Status Badges */}
          <div className="absolute -top-4 left-5 bg-cyan-950 border border-cyan-400/80 px-4 py-1.5 rounded-full text-[11px] font-mono tracking-widest text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.8)] z-30 font-bold uppercase flex items-center gap-1.5">
            <span>SYS_ARCHITECT</span>
            {isRevealed && (
              <span className="text-[9px] bg-cyan-500/20 px-1.5 py-0.5 rounded text-cyan-300">
                {clickCount}/3
              </span>
            )}
          </div>
          
          <div className="absolute -top-4 right-5 bg-pink-950 border border-pink-400/80 px-4 py-1.5 rounded-full text-[11px] font-mono tracking-widest text-pink-300 shadow-[0_0_20px_rgba(244,114,182,0.8)] z-30 font-bold uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
            ACTIVE
          </div>

          {/* 🔹 Image Container with Fail-Proof Fallback */}
          <div className="w-full aspect-[4/5] rounded-[22px] overflow-hidden border border-white/20 relative bg-black">
            
            {/* Image Tag with Direct Local & Remote Fail-Safe */}
            <img
              src="/Naeem.jpg"
              alt="𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎 Official Identity"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes("phototourl.com")) {
                  target.src = "https://cdn.phototourl.com/member/2026-08-08-da5558d4-d1d6-42fd-8af1-321c87b31578.jpg";
                }
              }}
              className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-110"
              draggable={false}
            />
            
            {/* 
              =================================================================
              🔥 3-CLICK CONTROLLED COVER OVERLAY
              =================================================================
            */}
            
            {/* STATE 1: INITIAL COVER (Visible when clickCount === 0) */}
            <div className={`absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
              isRevealed ? "opacity-0 pointer-events-none -translate-y-10" : "opacity-100 pointer-events-auto translate-y-0"
            } z-20 px-4 text-center`}>
              <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-400 drop-shadow-[0_0_25px_rgba(112,66,248,1)] tracking-wider">
                𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎
              </h2>
              <div className="text-cyan-400 font-mono text-[10px] md:text-xs mt-3 tracking-widest border border-cyan-400/50 px-3.5 py-1.5 rounded-full bg-cyan-950/40 shadow-[0_0_15px_rgba(6,182,212,0.6)] animate-pulse">
                [ 1 CLICK TO REVEAL ]
              </div>
            </div>

            {/* STATE 2: REVEALED BOTTOM NAMEPLATE (Visible when clickCount === 1 or 2) */}
            <div className={`absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black via-black/85 to-transparent transition-all duration-500 ease-out z-30 flex flex-col items-center justify-center ${
              isRevealed ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
            }`}>
              
              {/* Colorful Glowing 𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎 */}
              <h2 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow-[0_0_20px_rgba(244,114,182,0.9)] tracking-wider">
                𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎
              </h2>
              
              {/* Colorful Stylish 𝑵𝒂𝒆𝒆𝒎 with glowing divider */}
              <div className="flex items-center gap-2.5 mt-1.5">
                <div className="h-[2px] w-10 bg-gradient-to-r from-transparent via-cyan-400 to-purple-500"></div>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-300 text-sm font-bold tracking-widest drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                  𝑵𝒂𝒆𝒆𝒎
                </div>
                <div className="h-[2px] w-10 bg-gradient-to-l from-transparent via-cyan-400 to-purple-500"></div>
              </div>

              {/* Helper badge */}
              <span className="text-[10px] font-mono text-gray-400 mt-2 tracking-widest uppercase">
                [ Click 3 times to lock ]
              </span>
            </div>

            {/* Inner Border Glow */}
            <div className="absolute inset-0 border-[2px] border-transparent group-hover:border-cyan-500/60 rounded-[22px] transition-colors duration-500 z-40 pointer-events-none"></div>
          </div>
        </div>
      </motion.div>
      
    </motion.div>
  );
};

export default HeroContent;
