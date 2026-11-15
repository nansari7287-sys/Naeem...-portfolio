import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";

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
  status?: string;
}

export interface INavLink {
  title: string;
  link: string;
}

export interface IFooterColumn {
  title: string;
  data: { name: string; icon?: any; link: string }[];
}

export const PERSONAL_INFO = {
  name: "𝑵𝒂𝒆𝒆𝒎",
  brand_name: "𝑵𝒂𝒆𝒆𝒎",
  handle: "Naeem",
  email: "nansari7287@gmail.com",
  role: "Electrical Engineering Student & Independent App Builder",
  tagline:
    "Learning, building and experimenting with mobile apps, websites and useful digital tools.",
  institute: "Al-Kabir Institute of Management and Technology",
  branch: "Diploma in Electrical Engineering",
  location: "India",
  profile_photo: "",
};

export const ABOUT_DATA = {
  heading: "An engineering student who loves building digital things",
  subheading: "Curious mind. Practical projects. Always learning.",
  paragraphs: [
    "I'm Naeem, a Diploma student in Electrical Engineering at Al-Kabir Institute of Management and Technology.",
    "Alongside my studies, I explore app development, website design and Telegram bot projects. I use modern tools and AI assistance to learn, prototype ideas and turn them into working projects.",
    "I enjoy experimenting with user interfaces, voice-driven features and digital products. I'm still learning, improving my skills and documenting what I build."
  ],
  stats: [],
};

const skill = (skill_name: string): ISkill => ({
  skill_name,
  image: "",
  width: 64,
  height: 64,
});

export const SKILL_DATA: ISkill[] = [
  skill("Android App Projects"),
  skill("Website Design"),
  skill("Telegram Bot Development"),
  skill("UI / UX Design"),
  skill("GitHub Workflows"),
  skill("AI-assisted Development"),
];

export const FRONTEND_SKILL: ISkill[] = [];
export const BACKEND_SKILL: ISkill[] = [];
export const FULLSTACK_SKILL: ISkill[] = [];
export const OTHER_SKILL: ISkill[] = [];

export const PROJECTS: IProject[] = [
  {
    title: "Naeem Music",
    description:
      "A personal Android music app project with song search, playback, background audio and Google sign-in features.",
    image: "/projects/project-1.png",
    link: "https://github.com/nansari7287-sys/NaeemMusic",
    status: "Personal app project",
  },
  {
    title: "Jarvis — Personal Assistant",
    description:
      "A voice-assistant project exploring spoken commands and phone actions such as opening apps. The AI conversation features are still being worked on.",
    image: "/projects/project-2.png",
    link: "https://github.com/nansari7287-sys/Jarvis",
    status: "Prototype / in progress",
  },
  {
    title: "Naeem Portfolio",
    description:
      "This neon-inspired portfolio website, created to present my education, interests and personal projects.",
    image: "/projects/project-3.png",
    link: "https://drakoxnaeem.vercel.app/",
    status: "Live website",
  },
];

export const SOCIALS: ISocial[] = [
  { name: "GitHub", icon: FaGithub, link: "https://github.com/nansari7287-sys" },
  { name: "Telegram", icon: FaTelegramPlane, link: "https://t.me/frexxxy" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/drakoxnaeem" },
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/share/1Dyr1kjXoM/" },
  { name: "YouTube", icon: FaYoutube, link: "https://www.youtube.com/@KHOKHRACOMEDY" },
  { name: "Email", icon: FaEnvelope, link: "mailto:nansari7287@gmail.com" },
];

export const FOOTER_DATA: IFooterColumn[] = [
  {
    title: "Explore",
    data: [
      { name: "About me", link: "#about-me" },
      { name: "Skills & interests", link: "#skills" },
      { name: "Projects", link: "#projects" },
    ],
  },
  {
    title: "Connect",
    data: [
      { name: "GitHub", icon: FaGithub, link: "https://github.com/nansari7287-sys" },
      { name: "Telegram", icon: FaTelegramPlane, link: "https://t.me/frexxxy" },
      { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/drakoxnaeem" },
    ],
  },
];

export const NAV_LINKS: INavLink[] = [
  { title: "About", link: "#about-me" },
  { title: "Skills", link: "#skills" },
  { title: "Projects", link: "#projects" },
];

export const LINKS = {
  sourceCode: "https://github.com/nansari7287-sys",
};
