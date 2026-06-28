export const caseStudies = [
  {
    id: "capability-ai",
    title: "AI-powered EHS intelligence at Capability.work",
    problem:
      "Enterprise EHS teams needed contextual AI assistance and automated report analysis without compromising data accuracy or user trust.",
    solution:
      "Built AI chatbot with Claude API + RAG, report summary generation, dynamic follow-up questions, and seamless human handoff with live agent rooms.",
    architecture: [
      "Claude API integration with vector database for domain-specific RAG",
      "Zustand for client state; TanStack Query for server state",
      "Modular component architecture with Shadcn UI primitives",
    ],
    optimization: [
      "Lazy-loaded AI modules below the fold",
      "Memoized list rendering for large report datasets",
      "Optimistic UI for chat message delivery",
    ],
    results: [
      { label: "AI features", value: "4+" },
      { label: "Platforms", value: "EHS" },
      { label: "Stack", value: "React + AI" },
    ],
  },
  {
    id: "kuber-grow",
    title: "High-volume fintech UI for Kuber Grow",
    problem:
      "Stock ordering workflows required real-time pricing calculations and reliable handling of large financial datasets on the frontend.",
    solution:
      "Developed bulk ordering interfaces, pricing engines with validation, and optimized rendering for high-volume data tables.",
    architecture: [
      "TanStack Query for cached financial data fetching",
      "TypeScript-strict pricing calculation modules",
      "Reusable table and form components",
    ],
    optimization: [
      "Virtualized rendering strategies for large datasets",
      "Debounced pricing recalculation",
      "Code-split route-level bundles",
    ],
    results: [
      { label: "Domain", value: "Fintech" },
      { label: "Data handling", value: "Real-time" },
      { label: "Integrity", value: "Validated" },
    ],
  },
];
