"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
  status?: string;
}

export const ProjectCard = ({ src, title, description, link, status = "Personal project" }: Props) => (
  <Link href={link} target="_blank" rel="noreferrer noopener" className="neon-frame group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0a1020]/90 backdrop-blur-xl transition duration-500 hover:-translate-y-1">
    <div className="pointer-events-none absolute inset-x-8 top-0 z-20 h-px bg-gradient-to-r from-transparent via-cyan-100/70 to-violet-200/50 opacity-70" />
    <div className="relative h-52 overflow-hidden border-b border-white/[0.08] bg-[#080d1b]">
      <Image src={src} alt={title} width={1000} height={650} className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:saturate-125" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07071d]/90 via-transparent to-cyan-300/5" />
      <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-[#070b17]/90 px-3 py-1.5 font-mono text-[10px] tracking-wide text-cyan-100 backdrop-blur">{status}</span>
    </div>
    <div className="flex flex-1 flex-col p-6">
      <h3 className="text-xl font-bold text-white transition duration-300 group-hover:text-cyan-100">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{description}</p>
      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-mono">
        <span className="tracking-[0.16em] text-cyan-100 transition group-hover:text-fuchsia-200">VIEW PROJECT</span>
        <FaArrowUpRightFromSquare className="text-cyan-200 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-fuchsia-200 group-hover:drop-shadow-[0_0_8px_rgba(240,171,252,0.8)]" />
      </div>
    </div>
  </Link>
);

export default ProjectCard;
