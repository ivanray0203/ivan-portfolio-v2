export const profile = {
  name: "Ivan Ray F. Antonio",
  shortName: "Ivan Ray",
  role: "Full Stack Web Developer",
  email: "ivanray0621@gmail.com",
  phone: "+63-935-955-3049",
  location: "Philippines",
  github: "https://github.com/ivanray0203",
  githubHandle: "ivanray0203",
  photo: "/images/profile.png",
  summary:
    "I am a passionate web developer specializing in Laravel, Vue.js, React, and Next.js. I enjoy building scalable web applications and learning modern technologies.",
  graphicDesign:
    "I also have experience in graphic design, which I bring into my web development work, creating visuals, banners and UI assets for the sites I build using AI tools like ChatGPT and Nano Banana.",
};

export type Job = {
  company: string;
  title: string;
  start: string;
  end: string;
  description: string;
  tech: string[];
};

export const experience: Job[] = [
  {
    company: "Netinkvoice",
    title: "Web Developer",
    start: "Oct 2022",
    end: "Oct 2026",
    description:
      "Developed and maintained web applications with a modern Vue.js, React.js, and Laravel stack. Leveraged AI-powered tools like Claude Code and Cursor to accelerate development workflows, write cleaner code, and tackle complex problems more efficiently.",
    tech: ["Vue.js", "Inertia", "Laravel", "React.js"],
  },
  {
    company: "Core Enabler",
    title: "Web Developer",
    start: "Jan 2020",
    end: "Oct 2022",
    description:
      "Built and maintained full-stack web applications and developed a native PHP payroll system.",
    tech: ["Vue.js", "Inertia", "Laravel", "Native PHP Payroll System", "React Native (Expo)"],
  },
  {
    company: "Devcodic Inc",
    title: "Web Developer",
    start: "Oct 2019",
    end: "Dec 2019",
    description: "Developed and maintained web applications using Laravel and Vue.js.",
    tech: ["Laravel", "Vue.js"],
  },
];

export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: "Backend",
    items: ["PHP", "Laravel", "Node.js", "MySQL", "Firebase", "REST API"],
  },
  {
    label: "Frontend",
    items: [
      "HTML",
      "JavaScript",
      "Vue.js",
      "Nuxt.js",
      "Inertia.js",
      "React.js",
      "Next.js",
      "TailwindCSS",
      "Ant Design",
    ],
  },
  {
    label: "Mobile",
    items: ["React Native Expo", "Flutter"],
  },
  {
    label: "AI & Graphic Design",
    items: ["ChatGPT", "Nano Banana", "Graphic Design for Web"],
  },
  {
    label: "Tools & Workflow",
    items: ["Git", "Postman", "Jira", "VS Code", "Slack", "Ubuntu", "Claude Code", "Cursor"],
  },
];

export type Project = {
  name: string;
  kind: string;
  description: string;
  tech: string[];
  image: string;
  url?: string;
  /** Portrait phone screenshots. When present, cards show phone mockups instead of `image`. */
  gallery?: { src: string; label: string }[];
};

const arf = (file: string, label: string) => ({ src: `/images/arf/${file}.webp`, label });

export const displayUrl = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export const projects: Project[] = [
  {
    name: "ARF Mobile",
    kind: "Healthcare mobile app",
    description:
      "A healthcare mobile app for care homes. Staff manage clients' vitals, medications, appointments, incidents, personal funds and e-signatures, with a home summary dashboard, monthly reports and overdue-service notifications.",
    tech: ["Flutter", "Express.js"],
    image: "/images/arf/summary.webp",
    gallery: [
      arf("summary", "Home summary"),
      arf("app-library", "Client app library"),
      arf("vitals", "Vitals"),
      arf("reports", "Monthly reports"),
      arf("client-overview", "Client overview"),
      arf("pi-money", "P&I money"),
      arf("appointments", "Appointments"),
      arf("medications", "Medications"),
      arf("clients", "My clients"),
      arf("signatures", "Signatures"),
      arf("profile", "Profile"),
      arf("notifications", "Notifications"),
      arf("menu", "Menu"),
      arf("incidents", "Incidents"),
      arf("staff", "Staff"),
      arf("home-tools", "Home tools"),
      arf("care", "Care tools"),
      arf("choose-home", "Choose a home"),
    ],
  },
  {
    name: "Faxedge",
    kind: "Web application",
    description:
      "A modern web application built with Laravel and Vue.js for streamlined document and fax management.",
    tech: ["Laravel", "Vue.js", "MySQL", "TailwindCSS", "Ant Design"],
    image: "/images/faxedge.jpg",
    url: "https://faxedge.com/",
  },
  {
    name: "Purple Roof",
    kind: "Real estate platform",
    description:
      "A global real estate platform for searching and advertising residential and commercial properties, with mortgage support, real estate jobs and learning programmes for industry professionals.",
    tech: ["Next.js", "React"],
    image: "/images/purple-roof.jpg",
    url: "https://purpleroof.com/",
  },
  {
    name: "Creative Abilities Therapy Services",
    kind: "Healthcare website",
    description:
      "Website and client portal for a children's therapy provider and approved FSCD service provider, with online intake, services and programs, careers and a client login.",
    tech: ["Laravel", "Inertia.js", "React"],
    image: "/images/creative-abilities.jpg",
    url: "https://creativeabilitiestherapyservices.ca/",
  },
  {
    name: "POET DMS",
    kind: "Document management",
    description:
      "Document Management System designed for efficient organization, storage, and retrieval of documents.",
    tech: ["Node.js", "Next.js", "Chakra UI"],
    image: "/images/poet-dms.svg",
  },
  {
    name: "Banana Plant Disease Detector",
    kind: "Mobile app",
    description:
      "Mobile app using OpenAI for detecting disease on banana plantations. Built with React Native Expo and OpenAI to help farmers identify plant health issues.",
    tech: ["React Native Expo", "OpenAI"],
    image: "/images/banana-detector.svg",
  },
];

export type DesignWork = {
  title: string;
  kind: string;
  src: string;
  width: number;
  height: number;
};

const design = (file: string, title: string, kind: string, width: number, height: number): DesignWork => ({
  title,
  kind,
  src: `/images/design/${file}.webp`,
  width,
  height,
});

export const designWorks: DesignWork[] = [
  design("kayahag-festival", "Kayahag Festival", "Event poster", 1023, 1537),
  design("kabahagi-center", "Kabahagi Center", "Public service poster", 1086, 1448),
  design("veterans-park", "Veteran's Park", "Landmark poster", 1254, 1254),
  design("milkshake", "Milkshake Flavors", "Product banner", 1774, 887),
  design("carmen-municipal-hall", "Carmen Municipal Hall", "Public service poster", 1086, 1448),
  design("balutan-sa-carmen", "Balutan sa Carmen", "Food poster", 1023, 1537),
  design("gaisano-grand-carmen", "Gaisano Grand Mall Carmen", "Landmark poster", 1086, 1448),
];

export const education = {
  school: "Davao del Norte State College",
  degree: "Bachelor of Science in Information Technology",
  years: "2015 – 2019",
};

export const certifications = [
  { name: "Leaflet Training", year: "2018" },
  { name: "Laravel Training", year: "2018" },
  { name: "Quasar Training", year: "2018" },
  { name: "Computer Hardware Servicing NC II", year: "TESDA" },
];
