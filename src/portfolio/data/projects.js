export const projects = [
  {
    id: "capability-work",
    title: "Capability.work",
    description:
      "Enterprise EHS platform with compliance tracking, incident reporting, permit workflows, and training management for distributed safety teams.",
    category: "SaaS",
    clientType: "Enterprise",
    role: "Full-Stack Developer",
    gradient: "from-accent-blue/40 via-accent-violet/30 to-accent-cyan/20",
    image: "/projects/capability-work.png",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "Node.js"],
    live: "https://capability.work/",
    impact: "Streamlined EHS compliance workflows for enterprise teams",
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot & Report Intelligence",
    description:
      "AI-powered EHS chatbot with Claude API integration, RAG-based contextual assistance, automated report summaries, and seamless human support handoff.",
    category: "AI",
    clientType: "Enterprise",
    role: "Frontend & API Integration",
    gradient: "from-accent-cyan/30 via-accent-blue/25 to-accent-violet/20",
    tech: ["React.js", "Next.js", "Claude API", "RAG", "Zustand", "REST APIs"],
    impact: "Reduced support response time with AI-powered contextual assistance",
  },
  {
    id: "kuber-grow",
    title: "Kuber Grow",
    description:
      "Pre-IPO unlisted shares trading platform with bulk ordering workflows, real-time pricing calculations, and high-volume financial data management.",
    category: "Fintech",
    clientType: "Startup",
    role: "Frontend Developer",
    gradient: "from-accent-violet/35 via-accent-blue/25 to-accent-cyan/15",
    image: "/projects/kuber-grow.png",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "TanStack Query", "REST APIs"],
    live: "https://kuber-grow.com/",
    impact: "Enabled real-time bulk trading for financial data processing",
  },
  {
    id: "formis-tech",
    title: "Formis Tech",
    description:
      "Sports performance and medical management platform with injury tracking, scheduling, surveys, and analytics dashboards for elite athletic teams.",
    category: "SaaS",
    clientType: "Enterprise",
    role: "Frontend Developer",
    gradient: "from-accent-blue/30 via-accent-cyan/25 to-accent-violet/20",
    image: "/projects/formis-tech.png",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    live: "https://formis.tech/",
    liveApp: "https://app.formis.tech/",
    impact: "Digitized performance management for professional athletic teams",
  },
];

export const projectFilters = ["All", "SaaS", "AI", "Fintech"];
