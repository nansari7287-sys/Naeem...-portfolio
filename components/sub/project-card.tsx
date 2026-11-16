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
  <Link href={link} target="_blank" rel="noreferrer noopener" className="neon-frame group relative flex h-full flex-col overflow-hidden rounded-2xl border border-cyan-300/35 bg-[#07071d]/85 shadow-[0_0_25px_rgba(34,211,238,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:scale-[1.015] hover:border-fuchsia-300/55 hover:shadow-[0_0_28px_rgba(34,211,238,0.2),0_0_55px_rgba(168,85,247,0.13)]">
    <div className="pointer-events-none absolute inset-x-8 top-0 z-20 h-px bg-gradient-to-r from-transparent via-cyan-200 to-fuchsia-300 opacity-70 shadow-[0_0_14px_rgba(103,232,249,0.8)]" />
    <div className="relative h-52 overflow-hidden border-b border-cyan-200/10 bg-gradient-to-br from-cyan-950/60 via-violet-950/60 to-fuchsia-950/50">
      <Image src={src} alt={title} width={1000} height={650} className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:saturate-125" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07071d]/90 via-transparent to-cyan-300/5" />
      <span className="absolute right-4 top-4 rounded-full border border-cyan-200/40 bg-[#05051a]/85 px-3 py-1.5 font-mono text-[10px] text-cyan-50 shadow-[0_0_18px_rgba(34,211,238,0.16)] backdrop-blur">{status}</span>
    </div>
    <div className="flex flex-1 flex-col p-6">
      <h3 className="text-xl font-bold text-white transition duration-300 group-hover:text-cyan-100">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">{description}</p>
      <div className="mt-6 flex items-center justify-between border-t border-cyan-200/15 pt-4 text-xs font-mono">
        <span className="tracking-[0.16em] text-cyan-100 transition group-hover:text-fuchsia-200">VIEW PROJECT</span>
        <FaArrowUpRightFromSquare className="text-cyan-200 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-fuchsia-200 group-hover:drop-shadow-[0_0_8px_rgba(240,171,252,0.8)]" />
      </div>
    </div>
  </Link>
);

export default ProjectCard;
