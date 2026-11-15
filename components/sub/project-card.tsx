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
  <Link href={link} target="_blank" rel="noreferrer noopener" className="group flex h-full flex-col overflow-hidden rounded-2xl border border-violet-400/20 bg-[#07071d]/80 shadow-[0_0_25px_rgba(124,58,237,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/50 hover:shadow-[0_0_34px_rgba(34,211,238,0.14)]">
    <div className="relative h-52 overflow-hidden border-b border-white/5 bg-gradient-to-br from-cyan-950/60 via-violet-950/60 to-fuchsia-950/50">
      <Image src={src} alt={title} width={1000} height={650} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07071d]/80 to-transparent" />
      <span className="absolute right-4 top-4 rounded-full border border-cyan-200/30 bg-[#05051a]/80 px-3 py-1.5 font-mono text-[10px] text-cyan-100 backdrop-blur">{status}</span>
    </div>
    <div className="flex flex-1 flex-col p-6">
      <h3 className="text-xl font-bold text-white transition group-hover:text-cyan-200">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{description}</p>
      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-mono">
        <span className="tracking-[0.16em] text-violet-200">VIEW PROJECT</span>
        <FaArrowUpRightFromSquare className="text-cyan-300 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
    </div>
  </Link>
);

export default ProjectCard;
