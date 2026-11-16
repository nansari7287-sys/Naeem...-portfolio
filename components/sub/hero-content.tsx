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
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-cyan-500/15 blur-[110px] neon-float" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-[120px] neon-float" />

      <div className="relative z-10 grid w-full items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div
          initial={{ opacity: 0, y: 34, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2rem] border border-cyan-400/25 bg-[#05051a]/70 p-6 shadow-[0_0_55px_rgba(34,211,238,0.12)] backdrop-blur-xl sm:p-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 font-mono text-[11px] tracking-[0.18em] text-cyan-100 shadow-[0_0_22px_rgba(34,211,238,0.12)] sm:text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
            PERSONAL PORTFOLIO
          </div>

          <p className="mb-3 font-mono text-sm tracking-[0.2em] text-purple-200">HELLO, I&apos;M</p>
          <h1 className="neon-flicker text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-7xl">
            <span className="Welcome-text">
              {PERSONAL_INFO.name}
            </span>
            <span className="block pt-3 text-3xl text-white sm:text-5xl">I love building digital things.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I&apos;m an Electrical Engineering diploma student exploring Android app development,
            website design and Telegram bot projects. I learn by experimenting, building and improving.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {highlights.map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.45 + index * 0.1, duration: 0.35 }}
                className="rounded-full border border-fuchsia-400/30 bg-fuchsia-400/[0.08] px-3 py-2 text-xs text-fuchsia-100 shadow-[0_0_16px_rgba(217,70,239,0.1)] transition duration-300 hover:border-cyan-200/60 hover:bg-cyan-300/10 hover:shadow-[0_0_22px_rgba(34,211,238,0.2)] sm:text-sm"
              >
                {item}
              </motion.span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#projects" className="button-primary inline-flex items-center gap-3 rounded-xl border border-cyan-200/50 px-6 py-3.5 text-sm font-bold text-cyan-50">
              Explore my projects <FaArrowRight />
            </Link>
            <Link href="https://github.com/nansari7287-sys" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-3 rounded-xl border border-violet-300/35 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-violet-100 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-100 hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]">
              <FaGithub /> GitHub
            </Link>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 34, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md neon-float"
        >
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-cyan-400/70 via-violet-500/50 to-fuchsia-500/70 opacity-75 blur-xl neon-pulse" />
          <div className="relative rounded-[2rem] border border-cyan-200/35 bg-[#07071d]/90 p-7 shadow-[0_0_55px_rgba(139,92,246,0.2)] backdrop-blur-2xl sm:p-9">
            <div className="mb-7 flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.2em] text-cyan-100">PROFILE / 01</span>
              <span className="rounded-full border border-emerald-300/35 bg-emerald-300/10 px-3 py-1 text-[10px] font-mono text-emerald-100 shadow-[0_0_14px_rgba(52,211,153,0.12)]">LEARNING & BUILDING</span>
            </div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/40 bg-cyan-300/10 text-3xl text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.22)]">
              <FaGraduationCap />
            </div>
            <h2 className="text-2xl font-bold text-white">Education</h2>
            <p className="mt-3 leading-7 text-slate-300">{PERSONAL_INFO.branch}</p>
            <p className="mt-1 text-sm leading-6 text-cyan-100">{PERSONAL_INFO.institute}</p>
            <div className="my-7 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-fuchsia-300/50 shadow-[0_0_12px_rgba(103,232,249,0.4)]" />
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <FaCode className="text-fuchsia-200" />
              Independent projects & continuous learning
            </div>
            <p className="mt-5 font-mono text-[11px] leading-6 tracking-[0.2em] text-cyan-100/70">
              BUILD • LEARN • IMPROVE
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default HeroContent;
