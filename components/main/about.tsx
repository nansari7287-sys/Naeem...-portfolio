"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaBolt, FaLightbulb } from "react-icons/fa";
import { ABOUT_DATA, PERSONAL_INFO } from "@/constants";

export const About = () => (
  <section id="about-me" className="relative mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 lg:px-14">
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="neon-frame rounded-3xl border border-cyan-300/35 bg-[#07071d]/75 p-7 shadow-[0_0_35px_rgba(34,211,238,0.07)] backdrop-blur-xl sm:p-9">
        <span className="font-mono text-xs tracking-[0.22em] text-cyan-300">ABOUT / EDUCATION</span>
        <div className="mt-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-2xl text-cyan-200">
          <FaGraduationCap />
        </div>
        <h3 className="mt-6 text-2xl font-bold text-white">Currently studying</h3>
        <p className="mt-4 text-lg font-semibold leading-7 text-cyan-100">{PERSONAL_INFO.branch}</p>
        <p className="mt-2 leading-7 text-slate-400">{PERSONAL_INFO.institute}</p>
        <div className="mt-7 h-px bg-gradient-to-r from-cyan-300/40 via-violet-300/20 to-transparent" />
        <p className="mt-6 flex items-center gap-3 text-sm text-slate-300">
          <FaBolt className="text-fuchsia-300" />
          Interested in technology and practical problem-solving
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="neon-frame rounded-3xl border border-violet-300/35 bg-[#07071d]/75 p-7 shadow-[0_0_35px_rgba(168,85,247,0.07)] backdrop-blur-xl sm:p-9">
        <span className="font-mono text-xs tracking-[0.22em] text-fuchsia-300">A LITTLE ABOUT ME</span>
        <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">{ABOUT_DATA.heading}</h2>
        <p className="mt-3 text-sm font-medium text-cyan-200">{ABOUT_DATA.subheading}</p>
        <div className="mt-6 space-y-4 text-sm leading-8 text-slate-300 sm:text-base">
          {ABOUT_DATA.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="neon-frame mt-7 flex items-start gap-3 rounded-2xl border border-fuchsia-300/30 bg-fuchsia-300/[0.06] p-4">
          <FaLightbulb className="mt-1 shrink-0 text-fuchsia-200" />
          <p className="text-sm leading-7 text-slate-300">I believe in learning by doing: start with an idea, build a first version, test it and keep improving.</p>
        </div>
      </motion.div>
    </div>
  </section>
);
