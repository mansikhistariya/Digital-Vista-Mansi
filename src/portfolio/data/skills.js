export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    items: [
      { name: "React.js (Hooks, Context, Memo)", level: 92 },
      { name: "Next.js (SSR, App Router)", level: 88 },
      { name: "TypeScript / JavaScript ES6+", level: 90 },
      { name: "HTML5 / CSS3", level: 94 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion / GSAP", level: 85 },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    items: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB / Mongoose", level: 78 },
      { name: "REST API Design", level: 85 },
      { name: "JWT & OAuth Authentication", level: 80 },
      { name: "Role-Based Access Control", level: 78 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    items: [
      { name: "AWS EC2", level: 75 },
      { name: "AWS S3", level: 78 },
      { name: "AWS IAM", level: 72 },
      { name: "Linux Server Management", level: 74 },
      { name: "Domain & SSL Configuration", level: 80 },
      { name: "CI/CD Pipelines", level: 70 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    items: [
      { name: "Git / GitHub Actions", level: 90 },
      { name: "Vercel / Vite", level: 88 },
      { name: "Figma", level: 85 },
      { name: "Postman", level: 82 },
      { name: "Zustand / TanStack Query", level: 88 },
      { name: "Shadcn UI / Radix UI", level: 86 },
    ],
  },
];

export const techStack = {
  frontend: [
    "React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
    "Tailwind CSS", "Framer Motion", "GSAP", "Shadcn UI", "Radix UI",
  ],
  backend: [
    "Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs",
    "JWT Authentication", "OAuth", "WebSocket",
  ],
  cloud: [
    "AWS EC2", "AWS S3", "AWS IAM", "AWS CloudFront",
    "Linux", "Nginx", "SSL/TLS", "CI/CD",
  ],
  tools: [
    "Git", "GitHub", "VS Code", "Figma", "Postman",
    "Vercel", "Vite", "Docker (Basic)",
  ],
  stateManagement: [
    "Zustand", "TanStack Query", "React Context",
    "React Hook Form", "Yup Validation",
  ],
};

export const stackMarquee = [
  "React.js", "Next.js", "TypeScript", "Node.js", "Express.js",
  "MongoDB", "AWS", "Tailwind CSS", "Framer Motion", "REST APIs",
  "JWT", "Zustand", "TanStack Query", "Git", "Vercel", "Figma",
  "Shadcn UI", "Vite", "Linux", "Docker",
];
