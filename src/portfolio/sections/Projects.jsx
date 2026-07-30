import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  Layers,
  Sparkles,
  ArrowUpRight,
  X,
  CheckCircle,
} from "lucide-react";
import { GithubIcon } from "@/portfolio/components/Icons";
import { projects, projectFilters } from "@/portfolio/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

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
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono font-medium text-cyan-300 mb-4">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>FEATURED PORTFOLIO WORK</span>
          </div>
          <h2 className="section-heading font-heading text-slate-100">
            Enterprise SaaS & <span className="text-gradient-aurora">AI Products.</span>
          </h2>
          <p className="mt-4 max-w-xl text-slate-400 text-sm sm:text-base">
            High-impact web applications built with pixel-perfect UI craftsmanship and robust architecture.
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
                {/* Header Category Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-cyan-400">
                    {project.category}
                  </span>
                  {project.live && (
                    <span className="flex items-center gap-1 text-xs font-mono text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Production
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-xs font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-mono font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                  data-cursor="Details"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>View Case Study</span>
                </button>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-violet-600/80 px-4 py-2 text-xs font-semibold text-white transition-all shadow-glow"
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
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-2xl glass-panel p-6 sm:p-8 rounded-3xl z-10 border border-white/20 shadow-2xl overflow-hidden"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 text-xs font-mono">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="rounded-full p-1.5 bg-white/10 hover:bg-white/20 text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                    Key Features & Architecture
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                      <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Pixel-Perfect Component Architecture</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                      <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0" />
                      <span>REST API Integration & Caching</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                      <CheckCircle className="h-4 w-4 text-violet-400 shrink-0" />
                      <span>Lighthouse 95+ Performance</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300 bg-white/5 p-3 rounded-xl border border-white/5">
                      <CheckCircle className="h-4 w-4 text-pink-400 shrink-0" />
                      <span>Responsive Across All Viewports</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2.5 rounded-full text-xs font-medium text-slate-400 hover:text-white"
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
                      <span>Launch Application</span>
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
