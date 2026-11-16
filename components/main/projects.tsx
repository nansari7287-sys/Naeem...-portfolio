"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import { ProjectCard } from "@/components/sub/project-card";

export const Projects = () => (
  <section id="projects" className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-5 py-24 sm:px-8 lg:px-14">
    <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
    <div className="relative z-10 mb-14 text-center">
      <span className="font-mono text-xs tracking-[0.25em] text-fuchsia-300">SELECTED WORK</span>
      <h2 className="mt-4 text-4xl font-black text-white sm:text-5xl">
        Projects by <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">Naeem</span>
      </h2>
      <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
        A few personal projects that show what I am learning, building and improving.
      </p>
    </div>
    <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((project, index) => (
        <motion.div key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="h-full">
          <ProjectCard src={project.image} title={project.title} description={project.description} link={project.link} status={project.status} />
        </motion.div>
      ))}
    </div>
  </section>
);
