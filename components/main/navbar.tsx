"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { NAV_LINKS } from "@/constants";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[100] px-4 sm:px-6">
      <nav className="mx-auto mt-3 flex h-[66px] max-w-[1400px] items-center justify-between rounded-2xl border border-violet-300/20 bg-[#05051a]/75 px-4 shadow-[0_0_30px_rgba(124,58,237,0.12)] backdrop-blur-2xl sm:px-6">
        <Link href="#home" onClick={() => setOpen(false)} className="text-2xl font-black tracking-wide text-transparent bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-400 bg-clip-text drop-shadow-[0_0_14px_rgba(34,211,238,0.25)]">
          𝑵𝒂𝒆𝒆𝒎<span className="text-cyan-200">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <Link key={item.title} href={item.link} className="text-sm font-medium text-slate-300 transition hover:text-cyan-200">
              {item.title}
            </Link>
          ))}
          <Link href="https://github.com/nansari7287-sys" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:shadow-[0_0_18px_rgba(34,211,238,0.2)]">
            <FaGithub /> GitHub
          </Link>
        </div>

        <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-lg border border-cyan-300/20 bg-cyan-300/5 p-2 text-xl text-cyan-100 md:hidden">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 flex max-w-[1400px] flex-col gap-1 rounded-2xl border border-violet-300/20 bg-[#05051a]/95 p-3 shadow-[0_0_30px_rgba(124,58,237,0.18)] backdrop-blur-2xl md:hidden">
          {NAV_LINKS.map((item) => (
            <Link key={item.title} href={item.link} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm text-slate-200 transition hover:bg-cyan-300/10 hover:text-cyan-100">
              {item.title}
            </Link>
          ))}
          <Link href="https://github.com/nansari7287-sys" target="_blank" rel="noreferrer noopener" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm text-cyan-100 transition hover:bg-cyan-300/10">
            GitHub ↗
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
