export const caseStudies = [
  {
    id: "capability-ai",
    title: "AI-powered EHS Intelligence Platform",
    client: "Capability.work",
    industry: "Enterprise Safety & Compliance",
    problem:
      "Enterprise EHS teams needed contextual AI assistance and automated report analysis without compromising data accuracy or user trust. Manual compliance workflows were time-consuming and error-prone.",
    solution:
      "Built an AI chatbot with Claude API + RAG, automated report summary generation, dynamic follow-up questions, and seamless human handoff with live agent rooms — all integrated into the existing EHS platform.",
    architecture: [
      "Claude API integration with vector database for domain-specific RAG",
      "Zustand for client state; TanStack Query for server state",
      "Modular component architecture with Shadcn UI primitives",
      "REST API integration with Express.js backend",
    ],
    optimization: [
      "Lazy-loaded AI modules below the fold",
      "Memoized list rendering for large report datasets",
      "Optimistic UI for chat message delivery",
      "Code-split route-level bundles for faster initial load",
    ],
    results: [
      { label: "AI Features Built", value: "4+" },
      { label: "Platform Domain", value: "EHS" },
      { label: "Tech Stack", value: "React + Node.js + AI" },
    ],
    techStack: ["React.js", "Next.js", "Claude API", "Zustand", "Node.js"],
  },
  {
    id: "kuber-grow",
    title: "High-Volume Fintech Trading Platform",
    client: "Kuber Grow",
    industry: "Financial Technology",
    problem:
      "Stock ordering workflows required real-time pricing calculations and reliable handling of large financial datasets. The UI needed to handle thousands of data rows without performance degradation.",
    solution:
      "Developed bulk ordering interfaces with real-time pricing engines, TypeScript-strict calculation modules, and optimized rendering strategies for high-volume data tables and transaction workflows.",
    architecture: [
      "TanStack Query for cached financial data fetching",
      "TypeScript-strict pricing calculation modules",
      "Reusable table and form component library",
      "REST API integration with real-time data updates",
    ],
    optimization: [
      "Virtualized rendering for large financial datasets",
      "Debounced pricing recalculation on user input",
      "Code-split route-level bundles",
      "Optimistic UI updates for transaction workflows",
    ],
    results: [
      { label: "Industry", value: "Fintech" },
      { label: "Data Processing", value: "Real-time" },
      { label: "Data Integrity", value: "Validated" },
    ],
    techStack: ["React.js", "TypeScript", "TanStack Query", "REST APIs"],
  },
];
