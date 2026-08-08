// ============================================================================
// 📁 constants/index.ts
// 👑 ULTIMATE ENTERPRISE DATA HUB & CONFIGURATION MATRIX (BUILD ERROR FIXED)
// ============================================================================
// AUTHOR: DrakoXNaeem (Naeem)
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

export const PERSONAL_INFO = {
  name: "Naeem",
  brand_name: "𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎",
  handle: "DrakoXNaeem",
  email: "nansari7287@gmail.com",
  role: "Electrical Engineer & Bot Architect",
  tagline: "Bridging core hardware electrical logic with advanced Python automation, Termux environments, and scalable Telegram C2 networks.",
  location: "Jamshedpur, Jharkhand, India",
  profile_photo: "/1000323657.jpg", 
};

// 🔹 1. CORE SKILLS
export const SKILL_DATA: ISkill[] = [
  { skill_name: "Python 3", image: "python.png", width: 80, height: 80 },
  { skill_name: "Termux Shell", image: "termux.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "React.js", image: "react.png", width: 80, height: 80 },
  { skill_name: "Next.js 14", image: "next.png", width: 80, height: 80 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
];

// 🔹 2. FRONTEND SKILLS
export const FRONTEND_SKILL: ISkill[] = [
  { skill_name: "HTML 5", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS 3", image: "css.png", width: 80, height: 80 },
  { skill_name: "React.js", image: "react.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "Framer Motion", image: "framer.png", width: 80, height: 80 },
];

// 🔹 3. BACKEND SKILLS
export const BACKEND_SKILL: ISkill[] = [
  { skill_name: "Node.js", image: "node.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "PostgreSQL", image: "postgresql.png", width: 70, height: 70 },
  { skill_name: "MySQL", image: "mysql.png", width: 70, height: 70 },
];

// 🔹 4. FULLSTACK SKILLS (Added to fix Vercel Build Error)
export const FULLSTACK_SKILL: ISkill[] = [
  { skill_name: "Docker", image: "docker.png", width: 70, height: 70 },
  { skill_name: "Figma", image: "figma.png", width: 50, height: 50 },
  { skill_name: "React Native", image: "reactnative.png", width: 70, height: 70 },
  { skill_name: "Tauri", image: "tauri.png", width: 70, height: 70 },
];

// 🔹 5. OTHER SKILLS
export const OTHER_SKILL: ISkill[] = [
  { skill_name: "Git", image: "gitwhite.png", width: 70, height: 70 },
  { skill_name: "Linux", image: "linux.png", width: 60, height: 60 },
  { skill_name: "Go", image: "go.png", width: 60, height: 60 },
];

export const PROJECTS = [
  {
    title: "DrakoXNaeem Elite Portfolio",
    description: "A highly optimized, Next.js 14 driven enterprise portfolio featuring 60FPS Framer Motion animations.",
    image: "/projects/project-1.png",
    link: "https://frexxy-portfolio-3dri.vercel.app/",
  },
  {
    title: "Naeem Enterprise Bot Network",
    description: "An advanced, asynchronous Telegram C2 network featuring multi-threading execution capabilities.",
    image: "/projects/project-2.png",
    link: "https://github.com/nansari7287-sys",
  },
  {
    title: "Termux Precision Automation",
    description: "Custom shell scripts allowing remote server deployment and process management directly from Termux.",
    image: "/projects/project-3.png",
    link: "https://github.com/nansari7287-sys",
  }
];

export const SOCIALS = [
  { name: "Telegram", icon: FaTelegramPlane, link: "https://t.me/frexxxy" },
  { name: "YouTube", icon: FaYoutube, link: "https://www.youtube.com/@KHOKHRACOMEDY" },
  { name: "Google Photos", icon: FaGoogle, link: "https://photos.google.com/" },
  { name: "Instagram", icon: RxInstagramLogo, link: "https://www.instagram.com/drakoxnaeem" },
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/share/1Dyr1kjXoM/" },
  { name: "GitHub", icon: RxGithubLogo, link: "https://github.com/nansari7287-sys" },
  { name: "Discord", icon: RxDiscordLogo, link: "https://discord.com/" },
];

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      { name: "Telegram Network", link: "https://t.me/frexxxy" },
      { name: "GitHub", link: "https://github.com/nansari7287-sys" },
      { name: "Discord", link: "https://discord.com/" },
    ],
  },
  {
    title: "Social Media",
    data: [
      { name: "YouTube", link: "https://www.youtube.com/@KHOKHRACOMEDY" },
      { name: "Instagram", link: "https://www.instagram.com/drakoxnaeem" },
      { name: "Google Photos", link: "https://photos.google.com/" },
    ],
  },
  {
    title: "About",
    data: [
      { name: "Al-Kabir Institute", link: "#" },
      { name: "Contact Me", link: "mailto:nansari7287@gmail.com" },
    ],
  },
];

export const NAV_LINKS = [
  { title: "About Me", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
];

export const LINKS = {
  sourceCode: "https://github.com/nansari7287-sys",
};
