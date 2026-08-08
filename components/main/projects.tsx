// ============================================================================
// 📁 components/main/projects.tsx
// 👑 VIP ENTERPRISE PROJECTS SHOWCASE ARCHITECTURE
// ============================================================================
// AUTHOR: 𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎 (𝑵𝒂𝒆𝒆𝒎)
// ROLE: Electrical Engineer & Full-Stack Systems Architect
// ============================================================================
// DESCRIPTION:
// This component renders the core engineered systems showcase. It utilizes
// responsive grid mechanics, ambient purple/cyan neon backdrops, and dynamically
// feeds project records directly from the centralized constants directory.
// ============================================================================

"use client";

import React from "react";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";
import { FaCodeBranch, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-4 md:px-10 relative z-30 overflow-hidden max-w-[1600px] mx-auto"
    >
      {/* 🌌 Deep Ambient Glow strictly behind the projects grid */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[500px] bg-gradient-to-tr from-cyan-500/20 via-purple-600/25 to-pink-500/20 rounded-full blur-[120px] md:blur-[160px] pointer-events-none z-0" />

      {/* 
        =======================================================================
        🌟 SECTION HEADER & BADGES
        =======================================================================
      */}
      <div className="flex flex-col items-center justify-center text-center z-10 mb-16">
        
        {/* 🔹 Top Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-5 py-2 px-6 border border-cyan-500/40 rounded-full bg-[#030014]/80 backdrop-blur-xl shadow-[0_0_25px_rgba(6,182,212,0.3)] flex items-center gap-2.5"
        >
          <FaRocket className="text-cyan-400 h-3.5 w-3.5 animate-bounce" />
          <span className="text-[12px] md:text-[13px] font-mono tracking-[0.2em] text-cyan-300 uppercase font-extrabold">
            Engineered Deployments // C2 & Automation
          </span>
        </motion.div>

        {/* 🔹 Main Section Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 tracking-tight leading-tight drop-shadow-[0_0_35px_rgba(112,66,248,0.5)]"
        >
          Featured Systems by <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]">𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎</span>
        </motion.h1>

        {/* 🔹 Subtitle Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 font-mono text-sm md:text-base max-w-[750px] mt-4 leading-relaxed"
        >
          Scalable command and control networks, hardware logic relays, and precision Python automation engines built for high concurrency.
        </motion.p>
      </div>

      {/* 
        =======================================================================
        🚀 PROJECTS SHOWCASE GRID
        =======================================================================
      */}
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-2 sm:px-6 z-10">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="h-full"
          >
            <ProjectCard
              src={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>

      {/* 🔹 Bottom Terminal Prompt Accent */}
      <div className="mt-16 flex items-center gap-2 text-gray-500 font-mono text-xs md:text-sm z-10 bg-[#030014]/60 px-5 py-2 rounded-full border border-white/5 shadow-inner">
        <FaCodeBranch className="text-purple-400" />
        <span>REPOSITORY_STATUS:</span>
        <span className="text-green-400 font-bold">ALL_SYSTEMS_LIVE</span>
      </div>
    </section>
  );
};

export default Projects;
