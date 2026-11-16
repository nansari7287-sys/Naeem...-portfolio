"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaGraduationCap, FaCode } from "react-icons/fa";
import { PERSONAL_INFO } from "@/constants";

const highlights = ["Android app projects", "Website design", "Telegram bots", "UI / UX"];
const profilePhoto = "https://i.postimg.cc/Zn7m3T8F/project-2.jpg";

export const HeroContent = () => {
  const [photoClicks, setPhotoClicks] = useState(0);
  const photoRevealed = photoClicks > 0;

  const handlePhotoTap = () => {
    setPhotoClicks((count) => (count >= 2 ? 0 : count + 1));
  };

  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[90vh] w-full max-w-[1440px] items-center px-5 pb-16 pt-28 sm:px-8 lg:px-14"
    >
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-cyan-500/15 blur-[110px] neon-float" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-[120px] neon-float" />

      <div className="relative z-10 grid w-full items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 34, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
          className="relative py-4 sm:py-8 lg:pr-8"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-200/20 bg-cyan-300/[0.06] px-4 py-2.5 font-mono text-[10px] tracking-[0.22em] text-cyan-100 sm:text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]" />
            PERSONAL PORTFOLIO
          </div>

          <p className="mb-3 font-mono text-sm tracking-[0.2em] text-purple-200">HELLO, I&apos;M</p>
          <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.06em] text-white sm:text-7xl lg:text-[5.6rem]">
            <span className="Welcome-text">{PERSONAL_INFO.name}</span>
            <span className="mt-4 block max-w-2xl text-2xl font-medium leading-tight tracking-[-0.04em] text-slate-200 sm:text-4xl">Engineering mind. <span className="Welcome-text font-semibold">Creative builds.</span></span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
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
                className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-xs font-medium text-slate-200 transition duration-300 hover:border-cyan-200/40 hover:bg-cyan-300/[0.06] hover:text-cyan-100 sm:text-sm"
              >
                {item}
              </motion.span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#projects" className="button-primary inline-flex items-center gap-3 rounded-xl border border-cyan-200/60 px-6 py-3.5 text-sm font-bold text-cyan-50">
              Explore my projects <FaArrowRight />
            </Link>
            <Link href="https://github.com/nansari7287-sys" target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-3 rounded-xl border border-violet-300/45 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-violet-100 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-100 hover:shadow-[0_0_25px_rgba(34,211,238,0.22)]">
              <FaGithub /> GitHub
            </Link>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 34, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto flex w-full max-w-[390px] flex-col gap-6"
        >
          <div className="pointer-events-none absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-cyan-400/10 via-violet-500/[0.08] to-fuchsia-500/10 blur-3xl" />

          <div className="neon-frame relative rounded-[1.8rem] border border-white/10 bg-[#0a1020]/90 p-3 backdrop-blur-2xl">
            <div className="mb-4 flex items-center justify-between px-2 pt-2">
              <span className="font-mono text-xs tracking-[0.2em] text-cyan-100">IDENTITY / 01</span>
              <span className="flex items-center gap-2 rounded-full border border-fuchsia-300/40 bg-fuchsia-300/10 px-3 py-1 font-mono text-[10px] text-fuchsia-100 shadow-[0_0_16px_rgba(240,171,252,0.18)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-fuchsia-300" /> ACTIVE
              </span>
            </div>

            <button
              type="button"
              onClick={handlePhotoTap}
              aria-label={photoRevealed ? "Tap to lock profile photo" : "Tap to reveal profile photo"}
              className="group relative block w-full overflow-hidden rounded-[1.5rem] border border-cyan-200/35 bg-black text-left shadow-[0_0_28px_rgba(34,211,238,0.2)] focus-visible:outline-cyan-200"
            >
              <div className="relative aspect-[4/5] w-full">
                <img
                  src={profilePhoto}
                  alt="Naeem profile"
                  loading="eager"
                  referrerPolicy="no-referrer"
                  draggable={false}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04] group-hover:brightness-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
                <div className={`absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#030014]/80 px-4 text-center backdrop-blur-md transition-all duration-500 ${photoRevealed ? "pointer-events-none -translate-y-8 opacity-0" : "translate-y-0 opacity-100"}`}>
                  <span className="font-mono text-[10px] tracking-[0.28em] text-cyan-200">IDENTITY LOCKED</span>
                  <h2 className="Welcome-text mt-4 text-3xl font-black tracking-wider sm:text-4xl">𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎</h2>
                  <span className="mt-5 rounded-full border border-cyan-300/50 bg-cyan-950/70 px-4 py-2 font-mono text-[10px] tracking-[0.18em] text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.3)] animate-pulse">[ TAP TO REVEAL ]</span>
                </div>
                <div className={`absolute bottom-0 left-0 z-20 w-full bg-gradient-to-t from-black via-black/75 to-transparent p-5 text-center transition-all duration-500 ${photoRevealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                  <h2 className="Welcome-text text-2xl font-black tracking-wider sm:text-3xl">𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎</h2>
                  <p className="mt-2 font-mono text-xs tracking-[0.3em] text-cyan-100">𝑵𝒂𝒆𝒆𝒎</p>
                  <span className="mt-2 block text-[9px] tracking-[0.18em] text-fuchsia-200">TAP AGAIN TO LOCK</span>
                </div>
              </div>
            </button>
            <p className="px-2 pb-1 pt-3 text-center font-mono text-[9px] tracking-[0.16em] text-cyan-100/70">NEON IDENTITY INTERFACE • INTERACTIVE PHOTO</p>
          </div>

          <div className="neon-frame relative rounded-[1.8rem] border border-white/10 bg-[#0a1020]/90 p-6 backdrop-blur-2xl sm:p-7">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.22em] text-fuchsia-100">PROFILE / 02</span>
              <span className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-[9px] font-mono text-emerald-100 shadow-[0_0_14px_rgba(52,211,153,0.18)]">LEARNING & BUILDING</span>
            </div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/45 bg-cyan-300/10 text-2xl text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.25)]">
              <FaGraduationCap />
            </div>
            <h2 className="text-2xl font-black text-white">Education</h2>
            <p className="mt-3 text-base font-semibold leading-7 text-cyan-100">{PERSONAL_INFO.branch}</p>
            <p className="mt-1 text-sm leading-6 text-violet-100">{PERSONAL_INFO.institute}</p>
            <div className="my-5 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-fuchsia-300/70 shadow-[0_0_14px_rgba(103,232,249,0.55)]" />
            <div className="flex items-center gap-3 text-sm text-slate-200">
              <FaCode className="text-fuchsia-200 drop-shadow-[0_0_8px_rgba(240,171,252,0.8)]" />
              Independent projects & continuous learning
            </div>
            <p className="mt-4 font-mono text-[10px] leading-6 tracking-[0.2em] text-cyan-100/80">BUILD • LEARN • IMPROVE</p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};

export default HeroContent;
