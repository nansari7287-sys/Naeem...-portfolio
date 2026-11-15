"use client";

import { motion } from "framer-motion";
import { FaMobileAlt, FaLaptopCode, FaTelegramPlane, FaPalette, FaGithub, FaWandMagicSparkles } from "react-icons/fa";

const skills = [
  { title: "Android App Projects", detail: "Building and experimenting with Android applications and app features.", icon: FaMobileAlt },
  { title: "Website Design", detail: "Creating responsive layouts, visual sections and neon-inspired interfaces.", icon: FaLaptopCode },
  { title: "Telegram Bots", detail: "Creating bot projects and experimenting with automated bot interactions.", icon: FaTelegramPlane },
  { title: "UI / UX Design", detail: "Planning clean screens, navigation and user-friendly app experiences.", icon: FaPalette },
  { title: "GitHub Workflows", detail: "Working with repositories, branches, project files and version updates.", icon: FaGithub },
  { title: "AI-assisted Building", detail: "Using AI tools to learn, prototype ideas and work through code changes.", icon: FaWandMagicSparkles },
];

export const Skills = () => (
  <section id="skills" className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-5 py-24 sm:px-8 lg:px-14">
    <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-[120px]" />
    <div className="relative z-10 mx-auto mb-14 max-w-2xl text-center">
      <span className="font-mono text-xs tracking-[0.25em] text-cyan-300">WHAT I WORK ON</span>
      <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
        Skills & <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">Interests</span>
      </h2>
      <p className="mt-5 leading-7 text-slate-400">A snapshot of the areas I explore through personal projects and hands-on learning.</p>
    </div>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {skills.map(({ title, detail, icon: Icon }, index) => (
        <motion.article
          key={title}
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className="group rounded-2xl border border-violet-400/20 bg-[#07071d]/75 p-6 shadow-[0_0_24px_rgba(124,58,237,0.07)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
        >
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-xl text-cyan-200 transition group-hover:border-fuchsia-300/50 group-hover:text-fuchsia-200">
            <Icon />
          </div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">{detail}</p>
        </motion.article>
      ))}
    </div>
  </section>
);
