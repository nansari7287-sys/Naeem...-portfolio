// ============================================================================
// 📁 components/sub/hero-content.tsx
// 👑 VIP ENTERPRISE HERO CONTENT ARCHITECTURE (READABILITY & PROFILE FIXED)
// ============================================================================
// AUTHOR: DrakoXNaeem (Naeem)
// ROLE: Electrical Engineer & Full-Stack Systems Architect
// ============================================================================
// DESCRIPTION:
// This is the apex Hero Component. It has been strictly engineered to ensure
// perfect Z-index text readability on mobile devices (preventing visual overlaps).
// It also integrates a custom Cyberpunk-styled Profile Identity Card featuring 
// the verified user photo and official 'DrakoXNaeem' moniker.
// ============================================================================

"use client";

import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// 🔹 Importing Framer Motion animation variants for synchronized entry effects
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      // Layout heavily optimized for mobile stacking and desktop side-by-side rendering
      className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 lg:px-20 mt-28 md:mt-40 w-full z-[30] gap-16 lg:gap-8 max-w-[1600px] mx-auto relative"
    >
      
      {/* 
        =======================================================================
        🌟 LEFT COLUMN: TYPOGRAPHY, BIO, BADGES & CALL TO ACTION
        =======================================================================
        Added internal relative positioning and z-index to guarantee text 
        always renders ON TOP of any ambient background flares.
      */}
      <div className="h-full w-full flex flex-col gap-6 justify-center m-auto text-start lg:w-3/5 relative z-[40]">
        
        {/* 🔹 Top Status / Welcome Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[10px] px-[16px] border border-cyan-500/40 opacity-100 rounded-xl bg-[#030014]/80 backdrop-blur-xl shadow-[0_0_25px_rgba(6,182,212,0.2)] flex items-center w-fit"
        >
          <SparklesIcon className="text-cyan-400 mr-[10px] h-5 w-5 animate-pulse" />
          <h1 className="Welcome-text text-[13px] font-mono tracking-widest uppercase text-gray-100 font-bold">
            Naeem // Electrical Engineer & Architect
          </h1>
        </motion.div>

        {/* 🔹 Main Headline Typography */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-2 text-5xl sm:text-6xl lg:text-[75px] font-extrabold text-white max-w-[800px] w-auto h-auto leading-[1.1]"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_30px_rgba(112,66,248,0.5)]">
              powerful digital systems
            </span>{" "}
            with{" "}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 font-black tracking-wide drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              DrakoXNaeem.
            </span>
          </span>
        </motion.div>

        {/* 🔹 Detailed Biography & Technical Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-300 my-4 max-w-[650px] leading-relaxed font-light bg-[#030014]/40 backdrop-blur-sm p-4 md:p-0 rounded-2xl md:bg-transparent"
        >
          I am <strong className="text-cyan-300 font-bold">Naeem</strong>, pursuing a Diploma in <strong className="text-pink-400 font-bold">Electrical Engineering</strong> at Al-Kabir Institute of Management and Technology in Jamshedpur. I seamlessly blend core hardware electrical logic with advanced software automation. My expertise spans across engineering scalable <strong className="text-purple-400 font-bold">Telegram C2 networks</strong>, backend architectures, and executing precision <strong className="text-cyan-400 font-bold">Python automation via Termux</strong>.
        </motion.p>

        {/* 🔹 Technical Highlights / Tag Badges */}
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
              className="text-[12px] md:text-[13px] font-mono px-4 py-2 rounded-full bg-[#030014]/60 backdrop-blur-md border border-purple-500/30 text-gray-200 shadow-sm hover:border-cyan-400 hover:text-cyan-300 transition-colors cursor-default"
            >
              <span className="text-pink-400 mr-2">⚡</span>
              {tag}
            </span>
          ))}
        </motion.div>

        {/* 🔹 Action Buttons (Primary & Secondary CTA) */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row flex-wrap items-center gap-5 mt-4"
        >
          <Link
            href="#projects"
            className="py-3.5 px-8 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 text-center text-white font-bold tracking-widest uppercase text-sm cursor-pointer rounded-xl max-w-[250px] shadow-[0_0_30px_rgba(112,66,248,0.5)] hover:shadow-[0_0_45px_rgba(6,182,212,0.8)] hover:scale-105 transition-all duration-300 border border-white/20"
          >
            Explore Systems
          </Link>
          
          <Link
            href="https://github.com/nansari7287-sys"
            target="_blank"
            rel="noreferrer noopener"
            className="py-3.5 px-8 bg-[#030014]/60 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-cyan-400 text-center text-gray-200 font-mono text-sm cursor-pointer rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <span className="text-purple-400 group-hover:text-cyan-400 transition-colors text-lg font-black">&lt;/&gt;</span>
            <span className="tracking-widest uppercase">Developer Core</span>
          </Link>
        </motion.div>
      </div>

      {/* 
        =======================================================================
        🚀 RIGHT COLUMN: PROFILE IDENTITY CARD & AMBIENT GLOW
        =======================================================================
        Replaced the generic background with a custom-engineered profile card
        featuring the user's authentic image and DrakoXNaeem moniker.
      */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center relative lg:w-2/5 mt-10 lg:mt-0 z-[35]"
      >
        {/* Deep Ambient Glow strictly contained behind the profile card */}
        <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-gradient-to-tr from-cyan-500/20 via-purple-600/30 to-pink-500/20 rounded-full blur-[90px] md:blur-[120px] pointer-events-none z-0"></div>
        
        {/* 🔹 VIP Cyberpunk Profile Card Container */}
        <div className="relative flex flex-col items-center p-3 rounded-3xl border border-purple-500/30 bg-[#030014]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(112,66,248,0.2)] group hover:border-cyan-500/50 transition-colors duration-500 z-10 w-full max-w-[340px] md:max-w-[400px]">
          
          {/* Decorative Corner Tags */}
          <div className="absolute -top-3 left-6 bg-cyan-950/90 border border-cyan-400/50 px-4 py-1 rounded-full text-[10px] font-mono tracking-widest text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.5)] z-20">
            SYS_ADMIN
          </div>
          <div className="absolute -top-3 right-6 bg-pink-950/90 border border-pink-400/50 px-4 py-1 rounded-full text-[10px] font-mono tracking-widest text-pink-300 shadow-[0_0_10px_rgba(244,114,182,0.5)] z-20">
            ONLINE
          </div>

          {/* 🔹 Profile Image Frame */}
          <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/5 relative bg-[#030014]">
            <Image
              src="/1000323657.jpg" // Mapping directly to the requested visual asset
              alt="Naeem Official Identity"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              draggable={false}
            />
            {/* Inner Vignette / Fade Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-90"></div>
            <div className="absolute inset-0 border-[2px] border-transparent group-hover:border-cyan-500/30 rounded-2xl transition-colors duration-500"></div>
          </div>

          {/* 🔹 Moniker / Nameplate Banner */}
          <div className="w-full mt-5 mb-3 flex flex-col items-center justify-center relative z-20">
            <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 drop-shadow-[0_0_15px_rgba(112,66,248,0.9)] tracking-widest uppercase text-center">
              DrakoXNaeem
            </h2>
            
            {/* Futuristic Underline Divider */}
            <div className="flex items-center gap-2 mt-2">
              <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-cyan-500"></div>
              <div className="h-1.5 w-1.5 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(244,114,182,1)] animate-pulse"></div>
              <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-cyan-500"></div>
            </div>
          </div>

        </div>
      </motion.div>
      
    </motion.div>
  );
};

export default HeroContent;
