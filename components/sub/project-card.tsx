// ============================================================================
// 📁 components/sub/project-card.tsx
// 👑 VIP ENTERPRISE PROJECT CARD (COLORFUL NEON TITLES FIXED)
// ============================================================================
// AUTHOR: 𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎 (𝑵𝒂𝒆𝒆𝒎)
// ROLE: Electrical Engineer & Full-Stack Systems Architect
// ============================================================================

"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

export const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-[#030014]/60 backdrop-blur-xl shadow-[0_0_25px_rgba(112,66,248,0.2)] hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.4)] transition-all duration-500 flex flex-col h-full group hover:-translate-y-2"
    >
      {/* 🔹 Image Container */}
      <div className="relative w-full h-[220px] overflow-hidden bg-black/40">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80"></div>
        
        {/* Top Floating Badge */}
        <div className="absolute top-3 right-3 p-2.5 rounded-full bg-[#030014]/80 border border-white/10 text-cyan-400 group-hover:border-cyan-400 group-hover:text-pink-400 transition-colors duration-300">
          <FaExternalLinkAlt className="text-xs" />
        </div>
      </div>

      {/* 🔹 Content Body */}
      <div className="relative p-6 flex flex-col justify-between flex-grow">
        <div>
          {/* 🔥 COLORFUL NEON GRADIENT TITLE */}
          <h2 className="text-2xl md:text-[25px] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 drop-shadow-[0_0_15px_rgba(112,66,248,0.8)] tracking-wide group-hover:from-pink-400 group-hover:to-cyan-300 transition-all duration-500 leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="mt-3 text-gray-300 text-sm md:text-[15px] leading-relaxed font-light">
            {description}
          </p>
        </div>

        {/* Bottom Status Accent */}
        <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
          <span className="text-cyan-400/80 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
            LIVE ARCHITECTURE
          </span>
          <span className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300 font-bold">
            VIEW SYSTEM &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
