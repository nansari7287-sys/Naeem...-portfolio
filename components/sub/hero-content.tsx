// ============================================================================
// 📁 components/sub/hero-content.tsx
// 👑 VIP ENTERPRISE HERO CONTENT (STYLISH TYPOGRAPHY & LIVE CDN IMAGE FIXED)
// ============================================================================
// AUTHOR: 𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎 (𝑵𝒂𝒆𝒆𝒎)
// ROLE: Electrical Engineer & Full-Stack Systems Architect
// ============================================================================
// DESCRIPTION:
// - Live CDN Image Injection: Direct image linking via provided URL to bypass Next.js config errors.
// - Typography Enhanced: Implemented specific stylish unicode fonts (𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎 / 𝑵𝒂𝒆𝒆𝒎).
// - Layout: Perfect mobile stacking to keep the main text readable and strictly on top.
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
      // mt-20 on mobile pushes it to the top, md:mt-40 keeps desktop balanced
      className="flex flex-col lg:flex-row items-center justify-between px-5 md:px-12 lg:px-20 mt-20 md:mt-40 w-full z-[50] gap-12 lg:gap-8 max-w-[1600px] mx-auto relative"
    >
      
      {/* 
        =======================================================================
        🌟 LEFT COLUMN: TEXT, BIO, AND CALL TO ACTION
        =======================================================================
      */}
      <div className="h-full w-full flex flex-col gap-6 justify-center m-auto text-start lg:w-[55%] relative z-[60]">
        
        {/* 🔹 Top Welcome Badge with Stylish Name */}
        <motion.div
          variants={slideInFromTop}
          className="py-[10px] px-[16px] border border-cyan-500/50 opacity-100 rounded-xl bg-[#030014]/90 backdrop-blur-2xl shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center w-fit hover:border-cyan-400 transition-colors duration-300"
        >
          <SparklesIcon className="text-cyan-400 mr-[10px] h-5 w-5 animate-pulse" />
          <h1 className="text-[12px] md:text-[14px] font-mono tracking-[0.1em] uppercase text-gray-100 font-extrabold flex items-center gap-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-lg">
              𝑵𝒂𝒆𝒆𝒎
            </span> 
            <span className="text-gray-400">// Systems Architect</span>
          </h1>
        </motion.div>

        {/* 🔹 Main Headline Typography */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-3 mt-2 text-5xl sm:text-6xl lg:text-[75px] font-black text-white max-w-[800px] w-auto h-auto leading-[1.1]"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_20px_rgba(112,66,248,0.5)]">
              powerful digital systems
            </span>{" "}
            with{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 tracking-wider drop-shadow-[0_0_30px_rgba(6,182,212,0.6)] text-[55px] sm:text-[70px] lg:text-[85px] py-2">
              𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎
            </span>
          </span>
        </motion.div>

        {/* 🔹 Detailed Biography with Stylish Name */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-[17px] text-gray-300 my-4 max-w-[650px] leading-relaxed font-light bg-[#030014]/50 backdrop-blur-md p-5 rounded-2xl border border-white/5 shadow-xl md:bg-transparent md:border-none md:p-0 md:shadow-none"
        >
          I am <strong className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-black tracking-wide text-xl">𝑵𝒂𝒆𝒆𝒎</strong>, pursuing a Diploma in <strong className="text-pink-400 font-bold">Electrical Engineering</strong> at Al-Kabir Institute of Management and Technology in Jamshedpur. I seamlessly blend core hardware electrical logic with advanced software automation. My expertise spans across engineering scalable <strong className="text-purple-400 font-bold">Telegram C2 networks</strong>, backend architectures, and executing precision <strong className="text-cyan-400 font-bold">Python automation via Termux</strong>.
        </motion.p>

        {/* 🔹 Technical Badges */}
        <motion.div 
          variants={slideInFromLeft(0.9)}
          className="flex flex-wrap gap-3 my-2"
        >
          {[
            "Python 3 Automation", 
            "Termux Linux OS", 
            "Telegram C2 Networks", 
            "Electrical Logic", 
            "System Architecture"
          ].map((tag, idx) => (
            <span 
              key={idx}
              className="text-[12px] md:text-[13px] font-mono px-4 py-2 rounded-full bg-[#030014]/80 backdrop-blur-xl border border-purple-500/40 text-gray-200 shadow-lg hover:border-cyan-400 hover:text-cyan-300 hover:-translate-y-1 transition-all cursor-default"
            >
              <span className="text-pink-400 mr-2">⚡</span>
              {tag}
            </span>
          ))}
        </motion.div>

        {/* 🔹 Action Buttons */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row flex-wrap items-center gap-5 mt-6"
        >
          <Link
            href="#projects"
            className="py-3.5 px-8 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-center text-white font-extrabold tracking-widest uppercase text-sm cursor-pointer rounded-xl max-w-[250px] shadow-[0_0_30px_rgba(112,66,248,0.5)] hover:shadow-[0_0_45px_rgba(6,182,212,0.8)] hover:scale-105 transition-all duration-300 border border-white/20"
          >
            Explore Systems
          </Link>
          
          <Link
            href="https://github.com/nansari7287-sys"
            target="_blank"
            rel="noreferrer noopener"
            className="py-3.5 px-8 bg-[#030014]/60 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-cyan-400 text-center text-gray-200 font-mono text-sm cursor-pointer rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <span className="text-purple-400 group-hover:text-cyan-400 transition-colors text-lg font-black">&lt;/&gt;</span>
            <span className="tracking-widest uppercase font-bold">Developer Core</span>
          </Link>
        </motion.div>
      </div>

      {/* 
        =======================================================================
        🚀 RIGHT COLUMN: PROFILE IDENTITY CARD & AMBIENT GLOW
        =======================================================================
      */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center relative lg:w-[40%] mt-16 lg:mt-0 z-[45]"
      >
        {/* Glow effect strictly behind the card */}
        <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-cyan-500/30 via-purple-600/30 to-pink-500/30 rounded-full blur-[100px] md:blur-[120px] pointer-events-none z-0"></div>
        
        {/* 🔹 VIP Cyberpunk Profile Card */}
        <div className="relative flex flex-col items-center p-3 rounded-[30px] border border-cyan-500/30 bg-[#030014]/60 backdrop-blur-2xl shadow-[0_0_50px_rgba(112,66,248,0.25)] group hover:border-cyan-400/70 transition-all duration-500 z-10 w-full max-w-[320px] md:max-w-[380px]">
          
          {/* Decorative Corner Tags */}
          <div className="absolute -top-3 -left-3 md:left-4 bg-cyan-950/90 border border-cyan-400/50 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.6)] z-20 font-bold uppercase">
            SYS_ADMIN
          </div>
          <div className="absolute -top-3 -right-3 md:right-4 bg-pink-950/90 border border-pink-400/50 px-4 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-pink-300 shadow-[0_0_15px_rgba(244,114,182,0.6)] z-20 font-bold uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse"></span>
            ONLINE
          </div>

          {/* 🔹 External Profile Image via User Provided CDN Link */}
          <div className="w-full aspect-[4/5] rounded-[20px] overflow-hidden border border-white/10 relative bg-[#030014]">
            {/* Standard HTML img tag using the direct CDN link provided by Naeem */}
            <img
              src="https://cdn.phototourl.com/free/2026-08-08-db4671e3-2aca-4d3d-871e-cdf3ffd7e49d.jpg"
              alt="𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎 Official Identity"
              className="w-full h-full object-cover group-hover:scale-110 group-hover:brightness-110 transition-all duration-700 ease-in-out"
              draggable={false}
            />
            {/* Inner Dark Fade for blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/20 to-transparent opacity-95"></div>
            <div className="absolute inset-0 border-[2px] border-transparent group-hover:border-cyan-500/40 rounded-[20px] transition-colors duration-500"></div>
          </div>

          {/* 🔹 Moniker / Nameplate Banner with Stylish Font */}
          <div className="w-full mt-6 mb-4 flex flex-col items-center justify-center relative z-20">
            <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 drop-shadow-[0_0_15px_rgba(112,66,248,0.9)] tracking-wider text-center py-1">
              𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎
            </h2>
            
            {/* Futuristic Underline */}
            <div className="flex items-center gap-3 mt-2">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-cyan-500"></div>
              <div className="h-2 w-2 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(244,114,182,1)] animate-pulse"></div>
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-cyan-500"></div>
            </div>
          </div>

        </div>
      </motion.div>
      
    </motion.div>
  );
};

export default HeroContent;
