"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaGraduationCap, FaCode } from "react-icons/fa";
import { PERSONAL_INFO } from "@/constants";

const highlights = ["Android app projects", "Website design", "Telegram bots", "UI / UX"];

export const HeroContent = () => {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[90vh] w-full max-w-[1440px] items-center px-5 pb-16 pt-28 sm:px-8 lg:px-14"
    >
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-cyan-500/15 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-[120px]" />

      <div className="relative z-10 grid w-full items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-cyan-400/20 bg-[#05051a]/65 p-6 shadow-[0_0_55px_rgba(34,211,238,0.09)] backdrop-blur-xl sm:p-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 font-mono text-[11px] tracking-[0.18em] text-cyan-200 sm:text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
            PERSONAL PORTFOLIO
          </div>

          <p className="mb-3 font-mono text-sm tracking-[0.2em] text-purple-200">HELLO, I&apos;M</p>
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-7xl">
            <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(34,211,238,0.25)]">
              {PERSONAL_INFO.name}
            </span>
            <span className="block pt-2 text-3xl text-white sm:text-5xl">I love building digital things.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I&apos;m an Electrical Engineering diploma student exploring Android app development,
            website design and Telegram bot projects. I learn by experimenting, building and improving.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span key={item} className="rounded-full border border-fuchsia-400/25 bg-fuchsia-400/[0.07] px-3 py-2 text-xs text-fuchsia-100 shadow-[0_0_16px_rgba(217,70,239,0.08)] sm:text-sm">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#projects" className="inline-flex items-center gap-3 rounded-xl border border-cyan-200/50 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_0_25px_rgba(6,182,212,0.28)] transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(6,182,212,0.5)]">
              Explore my projects <FaArrowRight />
            </Link>
            <Link href="https://github.com/nansari7287-sys" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-3 rounded-xl border border-violet-300/30 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-violet-100 transition hover:border-cyan-300 hover:text-cyan-200">
              <FaGithub /> GitHub
            </Link>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-cyan-400/60 via-violet-500/40 to-fuchsia-500/60 opacity-70 blur-lg" />
          <div className="relative rounded-[2rem] border border-cyan-200/30 bg-[#07071d]/90 p-7 shadow-[0_0_50px_rgba(139,92,246,0.18)] backdrop-blur-2xl sm:p-9">
            <div className="mb-7 flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.2em] text-cyan-200">PROFILE / 01</span>
              <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-[10px] font-mono text-emerald-200">LEARNING & BUILDING</span>
            </div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-3xl text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.18)]">
              <FaGraduationCap />
            </div>
            <h2 className="text-2xl font-bold text-white">Education</h2>
            <p className="mt-3 leading-7 text-slate-300">{PERSONAL_INFO.branch}</p>
            <p className="mt-1 text-sm leading-6 text-cyan-200">{PERSONAL_INFO.institute}</p>
            <div className="my-7 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <FaCode className="text-fuchsia-300" />
              Independent projects & continuous learning
            </div>
            <p className="mt-5 font-mono text-[11px] leading-6 text-slate-500">
              BUILD • LEARN • IMPROVE
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default HeroContent;
