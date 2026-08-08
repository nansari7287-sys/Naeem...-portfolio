// ============================================================================
// 📁 constants/index.ts
// 👑 ULTIMATE ENTERPRISE DATA HUB & CONFIGURATION MATRIX
// ============================================================================
// AUTHOR: DrakoXNaeem (Naeem)
// ROLE: Electrical Engineer & Full-Stack Systems Architect
// LOCATION: Jamshedpur, Jharkhand, India
// INSTITUTION: Al-Kabir Institute of Management and Technology
// ============================================================================
// DESCRIPTION:
// This file serves as the centralized nervous system for the entire application.
// It exports all static assets, dynamic routing links, social mapping arrays,
// comprehensive skill databases, and detailed project repositories. 
// Strict TypeScript interfaces are enforced to guarantee 0% compilation errors.
// ============================================================================

import { 
  FaServer, 
  FaRobot, 
  FaDatabase, 
  FaCode, 
  FaTerminal, 
  FaCloudUploadAlt,
  FaGoogle,
  FaFacebook,
  FaYoutube,
  FaTelegramPlane,
  FaMicrochip
} from "react-icons/fa";

import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
} from "react-icons/rx";

// ============================================================================
// 🧱 TYPE DEFINITIONS & INTERFACES (Strict Typing for Zero Errors)
// ============================================================================

/**
 * Interface defining the structure of social media endpoint objects.
 */
export interface ISocial {
  name: string;
  icon: React.ElementType;
  link: string;
}

/**
 * Interface defining the structure of individual technical skills.
 */
export interface ISkill {
  skill_name: string;
  image: string;
  width: number;
  height: number;
}

/**
 * Interface defining the architecture of portfolio projects.
 */
export interface IProject {
  title: string;
  description: string;
  image: string;
  link: string;
  stack?: string[];
}

/**
 * Interface for primary navigation routing.
 */
export interface INavLink {
  title: string;
  link: string;
}

/**
 * Interface for multi-level footer data rendering.
 */
export interface IFooterSection {
  title: string;
  data: {
    name: string;
    icon?: React.ElementType | null;
    link: string;
  }[];
}

// ============================================================================
// 🧑‍💻 PERSONAL IDENTIFICATION & BRANDING CORE
// ============================================================================

export const PERSONAL_INFO = {
  name: "Naeem",
  brand_name: "𝑫𝒓𝒂𝒌𝒐𝑿𝑵𝒂𝒆𝒆𝒎",
  handle: "DrakoXNaeem",
  email: "nansari7287@gmail.com",
  role: "Electrical Engineer & Bot Architect",
  tagline: "Bridging core hardware electrical logic with advanced Python automation, Termux environments, and highly scalable Telegram C2 networks.",
  institute: "Al-Kabir Institute of Management and Technology",
  branch: "Diploma in Electrical Engineering",
  location: "Jamshedpur, Jharkhand, India",
  profile_photo: "/1000323657.jpg", // Verified VIP Profile Asset mapping
};

// ============================================================================
// 📖 DETAILED BIOGRAPHY & ABOUT SECTION MATRIX
// ============================================================================

export const ABOUT_DATA = {
  heading: "Bridging Electrical Hardware Logic with Cloud Software Automation",
  subheading: "Electrical Engineering Scholar & Automation Expert",
  paragraphs: [
    "I am Naeem (known globally as DrakoXNaeem), an analytical systems architect deeply immersed in Electrical Engineering at Al-Kabir Institute of Management and Technology.",
    "I refuse to be limited by conventional hardware alone. By combining my core electrical logic knowledge with advanced asynchronous Python automation, native Linux environments, and Telegram C2 networks, I build digital infrastructures that are fiercely intelligent and highly scalable.",
    "Whether I am engineering custom multi-threaded bot architectures, executing precision deployment scripts natively via Termux, or managing robust cloud environments, my focus remains strictly on zero-latency performance and unbreakable security."
  ],
  stats: [
    { label: "Systems Engineered", value: "35+" },
    { label: "Bot Networks Active", value: "15+" },
    { label: "API Requests Managed", value: "1M+" },
    { label: "Core Focus", value: "Python & Hardware Logic" },
  ]
};

// ============================================================================
// 🚀 ARCHITECTURAL SERVICES & CAPABILITIES
// ============================================================================

export const SERVICES = [
  {
    id: 1,
    title: "Telegram C2 Networks",
    icon: FaRobot,
    description: "Developing scalable, asynchronous command and control bot infrastructures deployed on robust cloud hosting."
  },
  {
    id: 2,
    title: "Termux Automation Scripts",
    icon: FaTerminal,
    description: "Executing precision bash scripts and python package management directly via native mobile terminal environments."
  },
  {
    id: 3,
    title: "Hardware Logic Integration",
    icon: FaMicrochip,
    description: "Translating boolean mechanics and core circuit design principles into digital software control frameworks."
  },
  {
    id: 4,
    title: "Backend API Systems",
    icon: FaServer,
    description: "Structuring high-speed, secure REST API endpoints using Node.js, Express, and FastAPI."
  },
  {
    id: 5,
    title: "Database Security",
    icon: FaDatabase,
    description: "Configuring robust, persistent NoSQL databases using MongoDB for scalable data storage."
  },
  {
    id: 6,
    title: "Full-Stack Web Deployments",
    icon: FaCloudUploadAlt,
    description: "Deploying high-performance Next.js architectures with complex Framer Motion animations."
  }
];

// ============================================================================
// 🛠️ COMPREHENSIVE SKILL DATABASES (FRONTEND, BACKEND, CLOUD)
// ============================================================================

export const SKILL_DATA: ISkill[] = [
  { skill_name: "Python 3", image: "python.png", width: 80, height: 80 },
  { skill_name: "Termux Shell", image: "termux.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "Next.js 14", image: "next.png", width: 80, height: 80 },
  { skill_name: "Tailwind CSS", image: "tailwind.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
];

export const FRONTEND_SKILL: ISkill[] = [
  { skill_name: "HTML 5", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS 3", image: "css.png", width: 80, height: 80 },
  { skill_name: "React.js", image: "react.png", width: 80, height: 80 },
  { skill_name: "TypeScript", image: "ts.png", width: 80, height: 80 },
  { skill_name: "Framer Motion", image: "framer.png", width: 80, height: 80 },
  { skill_name: "Next.js 14", image: "next.png", width: 80, height: 80 },
];

export const BACKEND_SKILL: ISkill[] = [
  { skill_name: "Node.js", image: "node-js.png", width: 80, height: 80 },
  { skill_name: "Express.js", image: "express.png", width: 80, height: 80 },
  { skill_name: "Python FastApi", image: "fastapi.png", width: 80, height: 80 },
  { skill_name: "MongoDB", image: "mongodb.png", width: 40, height: 40 },
  { skill_name: "Telegram API", image: "telegram.png", width: 80, height: 80 },
];

export const OTHER_SKILL: ISkill[] = [
  { skill_name: "Git Version Control", image: "gitwhite.png", width: 70, height: 70 },
  { skill_name: "Linux / Ubuntu", image: "linux.png", width: 60, height: 60 },
  { skill_name: "Docker Containers", image: "docker.png", width: 70, height: 70 },
];

// ============================================================================
// 🏆 ENGINEERED PROJECTS SHOWCASE
// ============================================================================

export const PROJECTS: IProject[] = [
  {
    title: "DrakoXNaeem Elite Portfolio Architecture",
    description: "A highly optimized, Next.js 14 driven enterprise portfolio featuring 60FPS Framer Motion animations, complex glassmorphism, and SEO-perfect metadata routing.",
    image: "/projects/project-1.png",
    link: "https://frexxy-portfolio-3dri.vercel.app/",
    stack: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"]
  },
  {
    title: "Naeem Enterprise Bot Network (C2)",
    description: "An advanced, asynchronous Telegram C2 network featuring multi-threading execution capabilities, seamless API telemetry, and automated SaaS scaling.",
    image: "/projects/project-2.png",
    link: "https://github.com/nansari7287-sys",
    stack: ["Python", "Telegram API", "MongoDB", "Termux"]
  },
  {
    title: "Termux Precision Automation Suite",
    description: "A centralized suite of custom shell scripts allowing remote server deployment, system testing, and process management directly from a native Termux mobile environment.",
    image: "/projects/project-3.png",
    link: "https://github.com/nansari7287-sys",
    stack: ["Bash", "Linux", "Python Scripting"]
  },
  {
    title: "Electrical Logic Synthesizer Engine",
    description: "Bridging the gap between physical hardware relays and cloud execution by translating boolean digital logic directly into software outputs.",
    image: "/projects/project-4.png", // Fallback asset if 4th is needed
    link: "https://github.com/nansari7287-sys",
    stack: ["Node.js", "C++", "Circuit Logic"]
  }
];

// ============================================================================
// 🔗 SOCIAL MEDIA & ENDPOINT MAPPINGS
// ============================================================================

export const SOCIALS: ISocial[] = [
  {
    name: "Telegram",
    icon: FaTelegramPlane,
    link: "https://t.me/frexxxy",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    link: "https://www.youtube.com/@KHOKHRACOMEDY",
  },
  {
    name: "Google Photos",
    icon: FaGoogle,
    link: "https://photos.google.com/",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/drakoxnaeem",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/share/1Dyr1kjXoM/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/nansari7287-sys",
  },
  {
    name: "Discord",
    icon: RxDiscordLogo,
    link: "https://discord.com/",
  },
];

// ============================================================================
// 📜 FOOTER NAVIGATION CATEGORIZATION
// ============================================================================

export const FOOTER_DATA: IFooterSection[] = [
  {
    title: "Community & Code",
    data: [
      {
        name: "GitHub Repositories",
        icon: RxGithubLogo,
        link: "https://github.com/nansari7287-sys",
      },
      {
        name: "Telegram Network",
        icon: FaTelegramPlane,
        link: "https://t.me/frexxxy",
      },
      {
        name: "Discord Server",
        icon: RxDiscordLogo,
        link: "https://discord.com/",
      },
    ],
  },
  {
    title: "Media & Socials",
    data: [
      {
        name: "YouTube Channel",
        icon: FaYoutube,
        link: "https://www.youtube.com/@KHOKHRACOMEDY",
      },
      {
        name: "Instagram Portfolio",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/drakoxnaeem",
      },
      {
        name: "Google Photos Library",
        icon: FaGoogle,
        link: "https://photos.google.com/",
      },
      {
        name: "Facebook Profile",
        icon: FaFacebook,
        link: "https://www.facebook.com/share/1Dyr1kjXoM/",
      },
    ],
  },
  {
    title: "Systems Info",
    data: [
      {
        name: "Al-Kabir Institute Info",
        icon: null,
        link: "#",
      },
      {
        name: "Hire / Contact Me",
        icon: null,
        link: "mailto:nansari7287@gmail.com",
      },
    ],
  },
];

// ============================================================================
// 🧭 GLOBAL NAVIGATION ROUTING
// ============================================================================

export const NAV_LINKS: INavLink[] = [
  {
    title: "About Me",
    link: "#about-me",
  },
  {
    title: "Technical Arsenal",
    link: "#skills",
  },
  {
    title: "Engineered Systems",
    link: "#projects",
  },
];

// ============================================================================
// 🚨 CRITICAL SYSTEM EXPORTS (DO NOT REMOVE TO PREVENT BUILD FAILURES)
// ============================================================================

export const LINKS = {
  sourceCode: "https://github.com/nansari7287-sys",
  livePreview: "https://frexxy-portfolio-3dri.vercel.app/",
};
