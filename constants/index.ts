// ============================================================================
// 📁 constants/index.ts
// Portfolio Configuration & Data Definitions
// ============================================================================
// AUTHOR: Naeem (DrakoXNaeem)
// ROLE: Electrical Engineer & Full-Stack Systems Architect
// ============================================================================

import { 
  FaServer, FaRobot, FaDatabase, FaTerminal, FaCloudUploadAlt,
  FaGoogle, FaFacebook, FaYoutube, FaTelegramPlane, FaMicrochip
} from "react-icons/fa";

import { RxDiscordLogo, RxGithubLogo, RxInstagramLogo } from "react-icons/rx";

export interface ISkill {
  skill_name: string;
  image: string;
  width: number;
  height: number;
}

export interface ISocial {
  name: string;
  icon: any;
  link: string;
}

export interface IProject {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface INavLink {
  title: string;
  link: string;
}

export interface IFooterColumn {
  title: string;
  data: {
    name: string;
    icon?: any;
    link: string;
  }[];
}

// ----------------------------------------------------------------------------
// Personal Identification & Branding
// ----------------------------------------------------------------------------
export const PERSONAL_INFO = {
  name: "Naeem Ansari",
  brand_name: "DrakoXNaeem",
  handle: "@DrakoXNaeem",
  email: "nansari7287@gmail.com",
  role: "Electrical Engineer & Bot Architect",
  tagline: "Bridging core hardware electrical logic with advanced Python automation, Termux environments, and scalable network architectures.",
  institute: "Al-Kabir Institute of Management and Technology",
  branch: "Diploma in Electrical Engineering",
  location: "Jharkhand, India",
  profile_photo: "", // Photo removed as requested
};

// ----------------------------------------------------------------------------
// Biography & Architecture Overview
// ----------------------------------------------------------------------------
export const ABOUT_DATA = {
  heading: "Bridging Electrical Hardware Logic with Software Automation",
  subheading: "Electrical Engineering Scholar & Automation Specialist",
  paragraphs: [
    "I am Naeem (known as DrakoXNaeem), an analytical systems architect pursuing Electrical Engineering at Al-Kabir Institute of Management and Technology.",
    "I combine core electrical engineering logic with advanced asynchronous Python automation, native Linux environments, and distributed networks to build resilient digital infrastructures.",
    "Whether executing deployment scripts natively via Termux or managing cloud environments, my focus remains strictly on performance, optimization, and security."
  ],
  stats: [
    { label: "Systems Engineered", value: "35+" },
    { label: "Active Bot Networks", value: "15+" },
    { label: "Automation Scripts", value: "50+" },
    { label: "Core Discipline", value: "Electrical Engg." },
  ]
};

// ----------------------------------------------------------------------------
// Technical Skills Database
// ----------------------------------------------------------------------------
export const SKILL_DATA: ISkill[] = [
  { skill_name: "Python 3", image: "python.png", width: 80, height: 80 },
  { skill_name: "Termux Shell", image: "termux.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Next.js 14", image: "next.png", width: 80, height: 80 },
];

export const FRONTEND_SKILL: ISkill[] = [
  { skill_name: "HTML 5", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS 3", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "Next.js 14", image: "next.png", width: 80, height: 80 },
  { skill_name: "Framer Motion", image: "framer.png", width: 80, height: 80 },
];

export const BACKEND_SKILL: ISkill[] = [
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70 },
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
  { skill_name: "Prisma", image: "prisma.png", width: 70, height: 70 },
];

export const FULLSTACK_SKILL: ISkill[] = [
  { skill_name: "Docker", image: "docker.png", width: 70, height: 70 },
  { skill_name: "React Native", image: "reactnative.png", width: 70, height: 70 },
  { skill_name: "Figma", image: "figma.png", width: 50, height: 50 },
  { skill_name: "Tauri", image: "tauri.png", width: 70, height: 70 },
];

export const OTHER_SKILL: ISkill[] = [
  { skill_name: "Git", image: "gitwhite.png", width: 70, height: 70 },
  { skill_name: "Go", image: "go.png", width: 60, height: 60 },
  { skill_name: "Linux Shell", image: "linux.png", width: 60, height: 60 },
];

// ----------------------------------------------------------------------------
// Engineered Projects Showcase
// ----------------------------------------------------------------------------
export const PROJECTS: IProject[] = [
  {
    title: "DrakoXNaeem Portfolio Architecture",
    description: "A high-performance Next.js 14 portfolio engineered with 60FPS Framer Motion animations, glassmorphism UI, and optimized routing.",
    image: "/projects/project-1.png",
    link: "https://frexxy-portfolio-3dri.vercel.app/",
  },
  {
    title: "Enterprise Bot Control Network",
    description: "An asynchronous command & control bot infrastructure engineered via Python and deployed for high-speed automated task management.",
    image: "/projects/project-2.png",
    link: "https://github.com/nansari7287-sys",
  },
  {
    title: "Termux Automation Engine",
    description: "A centralized terminal scripting suite allowing remote server deployment, OSINT data gathering, and mobile process execution.",
    image: "/projects/project-3.png",
    link: "https://github.com/nansari7287-sys",
  }
];

// ----------------------------------------------------------------------------
// Social Media & Endpoints
// ----------------------------------------------------------------------------
export const SOCIALS: ISocial[] = [
  { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/nansari7287-sys" },
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/share/1Dyr1kjXoM/" },
  { name: "Telegram", icon: FaTelegramPlane, link: "https://t.me/frexxxy" },
  { name: "YouTube", icon: FaYoutube, link: "https://www.youtube.com/@KHOKHRACOMEDY" },
  { name: "Instagram", icon: RxInstagramLogo, link: "https://www.instagram.com/drakoxnaeem" },
  { name: "Discord", icon: RxDiscordLogo, link: "https://discord.com/" },
];

// ----------------------------------------------------------------------------
// Footer Navigation Map
// ----------------------------------------------------------------------------
export const FOOTER_DATA: IFooterColumn[] = [
  {
    title: "Community & Network",
    data: [
      { name: "GitHub Repositories", icon: RxGithubLogo, link: "https://github.com/nansari7287-sys" },
      { name: "Telegram Channel", icon: FaTelegramPlane, link: "https://t.me/frexxxy" },
      { name: "Discord Server", icon: RxDiscordLogo, link: "https://discord.com/" },
    ],
  },
  {
    title: "Media",
    data: [
      { name: "YouTube Channel", icon: FaYoutube, link: "https://www.youtube.com/@KHOKHRACOMEDY" },
      { name: "Instagram Profile", icon: RxInstagramLogo, link: "https://www.instagram.com/drakoxnaeem" },
      { name: "Facebook Profile", icon: FaFacebook, link: "https://www.facebook.com/share/1Dyr1kjXoM/" },
    ],
  },
  {
    title: "Contact & Info",
    data: [
      { name: "Al-Kabir Institute", icon: null, link: "#" },
      { name: "Email Naeem", icon: null, link: "mailto:nansari7287@gmail.com" },
    ],
  },
];

// ----------------------------------------------------------------------------
// Global Navigation Routing
// ----------------------------------------------------------------------------
export const NAV_LINKS: INavLink[] = [
  { title: "About", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
];

export const LINKS = {
  sourceCode: "https://github.com/nansari7287-sys",
};
