// ============================================================================
// 📁 components/sub/hero-content.tsx
// 👑 VIP ENTERPRISE HERO CONTENT ARCHITECTURE
// ============================================================================
// AUTHOR: DrakoXNaeem (Naeem)
// ROLE: Electrical Engineer & Full-Stack Systems Architect
// LOCATION: Jamshedpur, Jharkhand, India
// INSTITUTION: Al-Kabir Institute of Management and Technology
// ============================================================================
// DESCRIPTION:
// This component acts as the primary landing hero section. It utilizes 
// Framer Motion for high-performance entry animations, rich typography with 
// neon gradient clipping, and a fully responsive glassmorphism layout.
// "Ansari" has been strictly omitted as per architectural guidelines.
// ============================================================================

"use client";

import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Importing motion variants for synchronized entry animations
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
      // Adjusted from strict flex-row to responsive column/row layout
      className="flex flex-col lg:flex-row items-center justify-center px-6 md:px-20 mt-32 md:mt-40 w-full z-[20] gap-12 lg:gap-0 max-w-[1600px] mx-auto"
    >
      {/* 
        =======================================================================
        🌟 LEFT COLUMN: TYPOGRAPHY, BIO, BADGES & CALL TO ACTION
        =======================================================================
      */}
      <div className="h-full w-full flex flex-col gap-6 justify-center m-auto text-start lg:w-3/5">
        
        {/* 🔹 Top Status / Welcome Badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[10px] px-[14px] border border-purple-500/40 opacity-90 rounded-xl bg-[#030014]/60 backdrop-blur-md shadow-[0_0_20px_rgba(112,66,248,0.25)] flex items-center w-fit"
        >
          <SparklesIcon className="text-cyan-400 mr-[10px] h-5 w-5 animate-pulse" />
          <h1 className="Welcome-text text-[13px] font-mono tracking-widest uppercase text-gray-200">
            Naeem // Electrical Engineer & Architect
          </h1>
        </motion.div>

        {/* 🔹 Main Headline Typography */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 mt-2 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white max-w-[750px] w-auto h-auto leading-[1.15]"
        >
          <span>
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
              powerful digital systems
            </span>{" "}
            with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 font-black tracking-wide">
              DrakoXNaeem
            </span>.
          </span>
        </motion.div>

        {/* 🔹 Detailed Biography & Technical Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-300 my-4 max-w-[650px] leading-relaxed font-light"
        >
          I am <strong className="text-cyan-300 font-semibold">Naeem</strong>, pursuing a Diploma in <strong className="text-pink-400 font-semibold">Electrical Engineering</strong> at <strong className="text-purple-300 font-semibold">Al-Kabir Institute of Management and Technology</strong> in Jamshedpur. I seamlessly blend core hardware electrical logic with advanced software automation. My expertise spans across engineering scalable <strong className="text-cyan-400">Telegram C2 networks</strong>, backend architectures, and executing precision <strong className="text-pink-400">Python automation via Termux</strong>.
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
              className="text-[12px] font-mono px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-200 shadow-sm hover:border-cyan-400 transition-colors cursor-default"
            >
              <span className="text-purple-400 mr-1.5">⚡</span>
              {tag}
            </span>
          ))}
        </motion.div>

        {/* 🔹 Action Buttons (Primary & Secondary CTA) */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row items-center gap-5 mt-4"
        >
          <Link
            href="#projects"
            className="py-3 px-8 bg-gradient-to-r from-purple-600 to-cyan-500 text-center text-white font-bold tracking-wider uppercase text-sm cursor-pointer rounded-xl max-w-[220px] shadow-[0_0_30px_rgba(112,66,248,0.5)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300 border border-white/10"
          >
            Explore Systems
          </Link>
          
          <Link
            href="https://github.com/nansari7287-sys"
            target="_blank"
            rel="noreferrer noopener"
            className="py-3 px-8 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400 text-center text-gray-200 font-mono text-sm cursor-pointer rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span className="text-purple-400 group-hover:text-cyan-400 transition-colors text-lg">&lt;/&gt;</span>
            <span>Developer Core</span>
          </Link>
        </motion.div>
      </div>

      {/* 
        =======================================================================
        🚀 RIGHT COLUMN: HERO GRAPHIC & AMBIENT BACKGROUND
        =======================================================================
      */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center relative lg:w-2/5 mt-10 lg:mt-0"
      >
        {/* Ambient Glow Behind Image */}
        <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-cyan-500/20 via-purple-600/20 to-pink-500/20 rounded-full blur-[80px] md:blur-[100px] pointer-events-none z-0"></div>
        
        {/* Main Hero Vector Graphic */}
        <Image
          src="/hero-bg.svg"
          alt="DrakoXNaeem Space Systems Background"
          height={650}
          width={650}
          draggable={false}
          className="select-none relative z-10 drop-shadow-[0_0_40px_rgba(112,66,248,0.4)] animate-pulse-slow object-contain"
        />
      </motion.div>
      
    </motion.div>
  );
};

export default HeroContent;
