// ============================================================================
// 📁 constants/index.ts
// 👑 ULTIMATE ENTERPRISE DATA HUB & ZERO-ERROR CONFIGURATION MATRIX
// ============================================================================
// AUTHOR: 𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎 (𝑵𝒂𝒆𝒆𝒎)
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
// 🧑‍💻 PERSONAL IDENTIFICATION & BRANDING CORE
// ----------------------------------------------------------------------------
export const PERSONAL_INFO = {
  name: "𝑵𝒂𝒆𝒆𝒎",
  brand_name: "𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎",
  handle: "𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎",
  email: "nansari7287@gmail.com",
  role: "Electrical Engineer & Bot Architect",
  tagline: "Bridging core hardware electrical engineering logic with advanced Python automation, Termux environments, and scalable Telegram C2 networks.",
  institute: "Al-Kabir Institute of Management and Technology",
  branch: "Diploma in Electrical Engineering",
  location: "Jamshedpur, Jharkhand, India", 
  profile_photo: "/profile.jpg", 
};

// ----------------------------------------------------------------------------
// 📖 BIOGRAPHY & ARCHITECTURE OVERVIEW
// ----------------------------------------------------------------------------
export const ABOUT_DATA = {
  heading: "Bridging Electrical Hardware Logic with Cloud Software Automation",
  subheading: "Electrical Engineering Scholar & Automation Expert",
  paragraphs: [
    "I am 𝑵𝒂𝒆𝒆𝒎 (globally identified as 𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎), an analytical systems architect pursuing Electrical Engineering at Al-Kabir Institute of Management and Technology.",
    "I fuse core electrical engineering logic with advanced asynchronous Python automation, native Linux environments, and Telegram C2 networks to build resilient digital infrastructures.",
    "Whether executing precision deployment scripts natively via Termux or managing cloud environments, my focus remains strictly on zero-latency performance and unbreakable security."
  ],
  stats: [
    { label: "Systems Engineered", value: "35+" },
    { label: "Bot Networks Active", value: "15+" },
    { label: "Termux Scripts", value: "50+" },
    { label: "Core Discipline", value: "Electrical Engg." },
  ]
};

// ----------------------------------------------------------------------------
// 🚀 TECHNICAL ARSENAL: SKILL DATABASES
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
// 🏆 ENGINEERED PROJECTS SHOWCASE (ORIGINAL PHOTOS RESTORED)
// ----------------------------------------------------------------------------
export const PROJECTS: IProject[] = [
  {
    title: "𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎 Elite Space Architecture",
    description: "A high-performance Next.js 14 portfolio engineered with 60FPS Framer Motion animations, glassmorphism telemetry, and zero-latency routing.",
    image: "/projects/project-1.png",
    link: "https://frexxy-portfolio-3dri.vercel.app/",
  },
  {
    title: "𝑵𝒂𝒆𝒆𝒎 Enterprise Bot C2 Network",
    description: "An asynchronous command & control bot infrastructure engineered via Python and deployed for high-speed automated task management.",
    image: "/projects/project-2.png",
    link: "https://github.com/nansari7287-sys",
  },
  {
    title: "𝑵𝒂𝒆𝒆𝒎 Termux Automation Engine",
    description: "A centralized terminal scripting suite allowing remote server deployment, live OSINT telemetry, and mobile process execution.",
    image: "/projects/project-3.png",
    link: "https://github.com/nansari7287-sys",
  }
];

// ----------------------------------------------------------------------------
// 🔗 SOCIAL MEDIA & ENDPOINTS
// ----------------------------------------------------------------------------
export const SOCIALS: ISocial[] = [
  { name: "Telegram", icon: FaTelegramPlane, link: "https://t.me/frexxxy" },
  { name: "YouTube", icon: FaYoutube, link: "https://www.youtube.com/@KHOKHRACOMEDY" },
  { name: "Google Photos", icon: FaGoogle, link: "https://photos.google.com/" },
  { name: "Instagram", icon: RxInstagramLogo, link: "https://www.instagram.com/drakoxnaeem" },
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/share/1Dyr1kjXoM/" },
  { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/nansari7287-sys" },
  { name: "Discord", icon: RxDiscordLogo, link: "https://discord.com/" },
];

// ----------------------------------------------------------------------------
// 📜 FOOTER NAVIGATION MAP 
// ----------------------------------------------------------------------------
export const FOOTER_DATA: IFooterColumn[] = [
  {
    title: "Community Hub",
    data: [
      { name: "Telegram Network", icon: FaTelegramPlane, link: "https://t.me/frexxxy" },
      { name: "GitHub Repositories", icon: RxGithubLogo, link: "https://github.com/nansari7287-sys" },
      { name: "Discord Server", icon: RxDiscordLogo, link: "https://discord.com/" },
    ],
  },
  {
    title: "Media & Socials",
    data: [
      { name: "YouTube Channel", icon: FaYoutube, link: "https://www.youtube.com/@KHOKHRACOMEDY" },
      { name: "Instagram Portfolio", icon: RxInstagramLogo, link: "https://www.instagram.com/drakoxnaeem" },
      { name: "Facebook Profile", icon: FaFacebook, link: "https://www.facebook.com/share/1Dyr1kjXoM/" },
    ],
  },
  {
    title: "Systems Info",
    data: [
      { name: "Al-Kabir Institute", icon: null, link: "#" },
      { name: "Google Photos Library", icon: FaGoogle, link: "https://photos.google.com/" },
      { name: "Contact 𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎", icon: null, link: "mailto:nansari7287@gmail.com" },
    ],
  },
];

// ----------------------------------------------------------------------------
// 🧭 GLOBAL NAVIGATION ROUTING
// ----------------------------------------------------------------------------
export const NAV_LINKS: INavLink[] = [
  { title: "About 𝑵𝒂𝒆𝒆𝒎", link: "#about-me" },
  { title: "Technical Arsenal", link: "#skills" },
  { title: "Engineered Systems", link: "#projects" },
];

export const LINKS = {
  sourceCode: "https://github.com/nansari7287-sys",
};
