export const projects = [
  {
    id: "capability-work",
    title: "Capability.work",
    problem:
      "Enterprise EHS safety teams needed a digital workflow to replace manual paper logs, track compliance audits, and approve hazardous work permits without delays.",
    description:
      "Enterprise EHS safety management platform featuring automated permit approvals, incident log tracking, and real-time audit dashboards for safety managers.",
    category: "SaaS",
    clientType: "Enterprise",
    role: "Full-Stack Developer — Architected multi-step permit approval workflows, integrated TanStack Query for server state caching, and implemented role-based permissions.",
    gradient: "from-accent-blue/40 via-accent-violet/30 to-accent-cyan/20",
    image: "/projects/capability-work.png",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "Node.js"],
    live: "https://capability.work/",
    impact: "Cut permit review turnaround time across safety departments while maintaining 100% audit logging.",
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot & Report Intelligence",
    problem:
      "Safety managers spent hours manually reading through dense incident reports to extract recurring hazards and compliance recommendations.",
    description:
      "AI-powered EHS assistant leveraging Claude API and RAG to analyze safety reports, generate automated summaries, and suggest corrective actions in real time.",
    category: "AI",
    clientType: "Enterprise",
    role: "Frontend & API Integration — Implemented streaming chat UI, contextual RAG document search interface, and optimistic UI updates for chat responses.",
    gradient: "from-accent-cyan/30 via-accent-blue/25 to-accent-violet/20",
    tech: ["React.js", "Next.js", "Claude API", "RAG", "Zustand", "REST APIs"],
    impact: "Automated routine safety report analysis, reducing manual document review time from hours to seconds.",
  },
  {
    id: "kuber-grow",
    title: "Kuber Grow",
    problem:
      "Investors buying unlisted shares needed accurate real-time price calculations during high-volume bulk ordering without experiencing UI lag or stale data.",
    description:
      "Pre-IPO unlisted shares trading portal with instant pricing engines, bulk order processing workflows, and high-frequency market data tables.",
    category: "Fintech",
    clientType: "Startup",
    role: "Frontend Developer — Built custom debounced calculation hooks, optimized high-frequency data rendering, and enforced strict TypeScript typing for financial math.",
    gradient: "from-accent-violet/35 via-accent-blue/25 to-accent-cyan/15",
    image: "/projects/kuber-grow.png",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "TanStack Query", "REST APIs"],
    live: "https://kuber-grow.com/",
    impact: "Delivered sub-100ms real-time pricing recalculations across multi-item bulk stock order forms.",
  },
  {
    id: "formis-tech",
    title: "Formis Tech",
    problem:
      "Professional sports and medical staff required a unified dashboard to log athlete injuries, schedule training sessions, and track recovery metrics.",
    description:
      "Sports medicine and performance platform built for professional athletic clubs to monitor player availability, survey feedback, and rehab milestones.",
    category: "SaaS",
    clientType: "Enterprise",
    role: "Frontend Developer — Designed responsive analytics dashboards, medical survey forms, and modular calendar/scheduling components using React and Shadcn UI.",
    gradient: "from-accent-blue/30 via-accent-cyan/25 to-accent-violet/20",
    image: "/projects/formis-tech.png",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    live: "https://formis.tech/",
    liveApp: "https://app.formis.tech/",
    impact: "Digitized daily medical check-in workflows into an accessible dashboard for coaching and medical staff.",
  },
];

export const projectFilters = ["All", "SaaS", "AI", "Fintech"];
