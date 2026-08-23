import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  ArrowUpRight,
  X,
  CheckCircle,
  AlertCircle,
  UserCheck,
  TrendingUp,
} from "lucide-react";
import { useTheme } from "@/portfolio/hooks/useTheme";
import { projects, projectFilters } from "@/portfolio/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const { theme } = useTheme();

  const isLight = theme === "light";

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative section-padding px-4 sm:px-6 lg:px-8 bg-noise">
      {/* Background Radial Lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-violet-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono font-medium text-cyan-500 dark:text-cyan-300 mb-4">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>FEATURED PORTFOLIO WORK</span>
          </div>
          <h2 className="section-heading font-heading text-slate-900 dark:text-slate-100">
            SaaS Applications & <span className="text-gradient-aurora">Web Products.</span>
          </h2>
          <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Each project details the problem solved, my engineering role, the stack used, and measurable results.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-glow"
                  : isLight
                  ? "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                  : "glass-pill text-slate-400 hover:text-slate-200"
              }`}
              data-cursor={filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-violet-500/40 transition-all duration-300 hover:shadow-2xl"
            >
              <div>
                {/* Header Category Pill & Live Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-[11px] font-mono text-violet-600 dark:text-violet-300">
                    {project.category} · {project.clientType}
                  </span>
                  {project.live && (
                    <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live Production
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Measurable Impact Badge */}
                <div className="mt-4 flex items-start gap-2 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-700 dark:text-emerald-300 font-medium">
                  <TrendingUp className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{project.impact}</span>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5 text-xs font-mono text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-mono font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                  data-cursor="Details"
                >
                  <FolderGit2 className="h-3.5 w-3.5" />
                  <span>View Case Study</span>
                </button>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 px-4 py-2 text-xs font-semibold text-white transition-all shadow-sm"
                    data-cursor="Open"
                  >
                    <span>Visit Live Site</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Study Modal Drawer */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-black/70 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className={`relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl z-10 border shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto ${
                  isLight ? "bg-white border-slate-200 text-slate-900" : "bg-[#0b0b14]/95 border-white/20 text-slate-100"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-500/20 text-xs font-mono">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close case study details"
                    className={`rounded-full p-1.5 transition-colors ${isLight ? "bg-slate-100 hover:bg-slate-200 text-slate-700" : "bg-white/10 hover:bg-white/20 text-white"}`}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Problem Statement */}
                <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-700 dark:text-amber-400 uppercase mb-1">
                    <AlertCircle className="h-4 w-4" />
                    <span>The Problem</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>

                {/* Specific Role & Decisions */}
                <div className="mb-6 p-4 rounded-2xl bg-violet-500/10 border border-violet-500/20">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-violet-700 dark:text-violet-300 uppercase mb-1">
                    <UserCheck className="h-4 w-4" />
                    <span>My Role & Architectural Decisions</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                    {selectedProject.role}
                  </p>
                </div>

                {/* Measurable Impact */}
                <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase mb-1">
                    <CheckCircle className="h-4 w-4" />
                    <span>Measurable Outcome</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-semibold">
                    {selectedProject.impact}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 tracking-wider mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-xl text-xs font-mono ${
                          isLight ? "bg-slate-100 text-slate-800 border border-slate-200" : "bg-white/5 text-slate-200 border border-white/10"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className={`flex items-center justify-end gap-3 pt-4 border-t ${isLight ? "border-slate-200" : "border-white/10"}`}>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className={`px-5 py-2.5 rounded-full text-xs font-medium ${isLight ? "text-slate-600 hover:text-slate-900" : "text-slate-400 hover:text-white"}`}
                  >
                    Close
                  </button>
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-semibold shadow-glow"
                    >
                      <span>Launch Live Application</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

