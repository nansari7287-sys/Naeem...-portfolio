"use client";

import Link from "next/link";
import { FaGithub, FaHeart } from "react-icons/fa";
import { FOOTER_DATA, PERSONAL_INFO } from "@/constants";

export const Footer = () => (
  <footer className="relative mt-16 overflow-hidden border-t border-white/10 bg-[#070b16]/95 px-5 pb-8 pt-14 backdrop-blur-2xl sm:px-8">
    <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
    <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
      <div>
        <Link href="#home" className="text-2xl font-black text-transparent bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-400 bg-clip-text">𝑵𝒂𝒆𝒆𝒎.</Link>
        <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">{PERSONAL_INFO.tagline}</p>
        <Link href="https://github.com/nansari7287-sys" target="_blank" rel="noreferrer noopener" className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-200 transition hover:text-fuchsia-200">
          <FaGithub /> Explore my GitHub
        </Link>
      </div>
      {FOOTER_DATA.map((column) => (
        <div key={column.title}>
          <h3 className="mb-4 font-mono text-xs tracking-[0.2em] text-fuchsia-200">{column.title.toUpperCase()}</h3>
          <div className="flex flex-col gap-3">
            {column.data.map(({ name, link, icon: Icon }) => (
              <Link key={name} href={link} target={link.startsWith("http") ? "_blank" : undefined} rel={link.startsWith("http") ? "noreferrer noopener" : undefined} className="flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-200">
                {Icon ? <Icon className="text-cyan-300" /> : null}{name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
    <div className="mx-auto mt-10 flex max-w-[1400px] flex-col items-center justify-between gap-3 border-t border-white/[0.08] pt-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
      <span>© {new Date().getFullYear()} Naeem. All rights reserved.</span>
      <span className="inline-flex items-center gap-1.5">Made with <FaHeart className="text-fuchsia-300" /> and curiosity.</span>
    </div>
  </footer>
);

export default Footer;
