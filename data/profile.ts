export const bio = {
  name: "Aman Roniwal",
  role: "Full Stack Developer",
  location: "India · Open to Remote",
  summary:
    "I’m a Full Stack Web Developer focused on building scalable real-time systems and backend-heavy products. I work on low-latency collaboration features, real-time sync, and secure session-based architectures using WebRTC, Stream SDK, and modern backend tooling. I enjoy designing systems that are reliable in production and simple for teams to work with.",
  interests: [
    "Real-time collaboration & presence systems",
    "Backend architecture & scalability",
    "Observability & production reliability",
  ],
  resume: "/Aman_Roniwal_Full_Stack_Web_Developer.pdf",
  email: "amanroniwal10@gmail.com",
  socials: [
    { label: "roniwalAMAN", href: "https://github.com/roniwalAMAN" },
    { label: "Aman Roniwal", href: "https://www.linkedin.com/in/aman-roniwal-73b22528a/" },
  ],
};

export const projects = [
  {
    title: "CodeSync – Real-time Collaboration Platform",
    type: "Personal Project",
    description:
      "Built a secure full-stack real-time collaboration platform with video calls, screen sharing, and recording. Designed low-latency real-time systems using WebRTC and Stream SDK, with scalable session management and real-time state sync. Integrated secure authentication and delivered a responsive, production-ready UI focused on performance and reliability.",
    highlights: [
      "Real-time video calls, screen sharing, and recording",
      "Low-latency collaboration using WebRTC",
      "Secure authentication and session handling",
      "Scalable real-time synchronization",
      "Production-focused reliability and performance",
    ],
    tech: ["WebRTC", "Stream SDK"],
    links: {
      github: "https://github.com/roniwalAMAN/MyCodeSync",
      live: "https://my-code-sync.vercel.app/",
    },
  },
  {
    title: "Interview Roadmap",
    type: "Personal Project",
    description:
      "AI-powered full-stack web application that analyzes resumes and job descriptions to detect skill gaps, generate interview questions, and create ATS-optimized resumes using Gemini AI.",
    highlights: [
      "Analyzes resume vs job description to identify skill gaps",
      "Generates targeted interview questions using Gemini AI",
      "Creates ATS-optimized resume drafts",
      "Secure authentication with JWT and token blacklisting",
      "Automated PDF generation pipeline using Puppeteer",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "JWT",
      "Token Blacklisting",
      "Gemini API",
      "Puppeteer",
    ],
    links: {
      github: "https://github.com/roniwalAMAN/Interview-Roadmap",
      live: "",
    },
  },
  {
    title: "AI Component Generator (GenUI)",
    type: "Personal Project",
    description:
      "AI-powered frontend web app that converts natural language prompts into ready-to-use UI component code using Gemini AI. It includes Monaco Editor based code editing, live preview, theme toggle, and copy/download actions for fast prototyping.",
    highlights: [
      "Converts natural language prompts into UI component code",
      "Gemini AI integration for fast component generation",
      "Monaco Editor based code editing with live preview",
      "Theme toggle for better development workflow",
      "Copy and download actions for rapid prototyping",
    ],
    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Gemini API (@google/genai)",
      "Monaco Editor",
      "React Router",
      "React Select",
      "React Toastify",
    ],
    links: {
      github: "https://github.com/roniwalAMAN/Ai-com-gen",
      live: "https://ai-com-gen-henna.vercel.app",
    },
  },
];

export const experiences = [
  {
    company: "Realtime Labs",
    role: "Full Stack Developer",
    period: "2023 — Present",
    achievements: [
      "Led WebRTC rollout for multi-user sessions; cut join time by 30% via TURN fallback and adaptive bitrate.",
      "Shipped event-driven billing & notifications on Node.js + PostgreSQL + Redis streams with idempotent workers.",
      "Built observability suite (OpenTelemetry + Grafana) driving 25% faster incident response.",
    ],
  },
  {
    company: "ProductOS",
    role: "Software Engineer",
    period: "2021 — 2023",
    achievements: [
      "Migrated Next.js monolith to app router with edge rendering; improved Core Web Vitals to 95+.",
      "Implemented OAuth + SSO + fine-grained RBAC with audit logging and rate limits.",
      "Redesigned design system with accessibility-first components and motion guidelines.",
    ],
  },
];

export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Redux Toolkit",
    "Vite",
    "Tailwind CSS",
    "Monaco Editor",
    "React Router",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "WebSockets",
    "WebRTC",
    "JWT",
    "Token Blacklisting",
    "Puppeteer",
  ],
  databases: ["PostgreSQL", "MySQL", "MongoDB"],
  aiAndApis: ["Gemini API", "Stream SDK"],
};

export const stats = [
  { label: "Years of Experience", value: "3+" },
  { label: "Projects Completed", value: "3+" },
];

