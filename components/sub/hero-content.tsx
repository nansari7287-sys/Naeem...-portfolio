// ============================================================================
// 📁 components/sub/hero-content.tsx
// 👑 VIP ENTERPRISE HERO COMPONENT (FULL PRODUCTION VERSION)
// ============================================================================

"use client";

import React, { useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const HeroContent = () => {
  // 🔹 State controlling the 3-click reveal / lock cycle
  const [clickCount, setClickCount] = useState<number>(0);

  const handleCardInteraction = () => {
    setClickCount((prev) => {
      const nextCount = prev + 1;
      if (nextCount >= 3) return 0;
      return nextCount;
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
        🌟 LEFT COLUMN: TYPOGRAPHY, BIO & VIBRANT TAGS
        =======================================================================
      */}
      <div className="h-full w-full flex flex-col gap-6 justify-center m-auto text-start lg:w-[58%] relative z-[60]">
        
        <div className="bg-[#030014]/45 backdrop-blur-md p-5 sm:p-8 rounded-3xl border border-purple-500/30 shadow-[0_0_35px_rgba(0,0,0,0.7)] relative z-20">
          
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

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-3 text-4xl sm:text-6xl lg:text-[72px] font-black text-white max-w-[850px] w-auto h-auto leading-[1.12] tracking-tight py-1"
          >
            <span className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow-[0_0_25px_rgba(112,66,248,0.9)]">
                powerful digital systems
              </span>{" "}
              with{" "}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 tracking-normal drop-shadow-[0_0_30px_rgba(6,182,212,1)] text-[48px] sm:text-[72px] lg:text-[86px] inline-block py-2">
                𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎.
              </span>
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-[15px] sm:text-base md:text-[17px] text-gray-200 mt-4 mb-6 max-w-[700px] leading-relaxed font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
          >
            I am <strong className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-black text-xl mr-1">𝑵𝒂𝒆𝒆𝒎</strong>, 
            pursuing a Diploma in <strong className="text-pink-400 font-bold">Electrical Engg.</strong> at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-pink-500 to-cyan-400 font-extrabold drop-shadow-[0_0_15px_rgba(244,114,182,0.9)] text-base md:text-lg border-b border-pink-500/60 pb-0.5 inline-block">
              Al-Kabir Institute of Management and Technology
            </span>. 
            I seamlessly blend core hardware electrical logic with advanced software automation. My expertise spans across engineering scalable{" "}
            <strong className="text-purple-400 font-bold">Telegram C2 networks</strong>, 
            backend architectures, and executing precision{" "}
            <strong className="text-cyan-400 font-bold">Python automation via Termux</strong>.
          </motion.p>

          <motion.div 
            variants={slideInFromLeft(0.9)}
            className="flex flex-wrap gap-2.5 my-2"
          >
            {[
              { name: "Python 3 Automation", color: "from-cyan-400 to-blue-500" },
              { name: "Termux Linux OS", color: "from-green-400 to-emerald-500" },
              { name: "Telegram C2 Networks", color: "from-purple-400 to-pink-500" },
              { name: "Electrical Engg.", color: "from-amber-400 to-orange-500" },
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
        🚀 RIGHT COLUMN: VIP INTERACTIVE IDENTITY CARD (STABLE IMAGE)
        =======================================================================
      */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center relative lg:w-[38%] mt-8 lg:mt-0 z-[45]"
      >
        <div className="absolute w-[260px] h-[260px] md:w-[420px] md:h-[420px] bg-gradient-to-tr from-cyan-500/40 via-purple-600/40 to-pink-500/40 rounded-full blur-[100px] md:blur-[130px] pointer-events-none z-0"></div>
        
        <div 
          onClick={handleCardInteraction}
          className="relative flex flex-col p-3 rounded-[32px] border border-cyan-500/50 bg-[#030014]/80 backdrop-blur-3xl shadow-[0_0_55px_rgba(112,66,248,0.5)] group hover:border-cyan-400 transition-all duration-500 z-10 w-full max-w-[320px] md:max-w-[380px] cursor-pointer select-none active:scale-[0.98]"
        >
          
          <div className="absolute -top-4 left-5 bg-cyan-950 border border-cyan-400/80 px-4 py-1.5 rounded-full text-[11px] font-mono tracking-widest text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.8)] z-30 font-bold uppercase flex items-center gap-1.5">
            <span>SYS_ARCHITECT</span>
            {isRevealed && (
              <span className="text-[9px] bg-cyan-500/20 px-1.5 py-0.5 rounded text-cyan-300">{clickCount}/3</span>
            )}
          </div>
          
          <div className="absolute -top-4 right-5 bg-pink-950 border border-pink-400/80 px-4 py-1.5 rounded-full text-[11px] font-mono tracking-widest text-pink-300 shadow-[0_0_20px_rgba(244,114,182,0.8)] z-30 font-bold uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-400 animate-pulse"></span>
            ACTIVE
          </div>

          {/* 🖼️ IMAGE CONTAINER - Fixed Dimensions = NO FLICKER */}
          <div className="w-full h-[400px] rounded-[24px] overflow-hidden border border-white/20 relative bg-black">
            
            <img
              src="https://kommodo.ai/i/7pkhnuZplvADbqb0Xiax" 
              alt="𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎 Official Identity"
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              loading="eager"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.src = "/profile.jpg"; // Backup local file
              }}
              draggable={false}
            />
            
            {/* Overlay */}
            <div className={`absolute inset-0 bg-black/80 flex flex-col items-center justify-center transition-all duration-500 ${isRevealed ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-pink-400">𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎</h2>
              <div className="text-cyan-400 font-mono text-xs mt-3 animate-pulse">[ CLICK TO REVEAL ]</div>
            </div>

            {/* Nameplate */}
            <div className={`absolute bottom-0 w-full p-5 bg-gradient-to-t from-black to-transparent ${isRevealed ? "opacity-100" : "opacity-0"}`}>
              <h2 className="text-2xl font-black text-white text-center">𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎</h2>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
