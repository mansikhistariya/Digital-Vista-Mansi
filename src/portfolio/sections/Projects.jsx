import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import FadeUp from "@/portfolio/components/FadeUp";
import SectionHeader from "@/portfolio/components/SectionHeader";
import { projectFilters, projects } from "@/portfolio/data/projects";
import { cn } from "@/utils/cn";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((project) => project.category === filter)),
    [filter]
  );

  const handleFilterChange = useCallback((nextFilter) => {
    setFilter(nextFilter);
  }, []);

  return (
    <section id="projects" className="border-t border-border bg-bg-secondary/30 py-10 lg:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <SectionHeader
            label="Projects"
            title="Featured projects"
            description="Selected product work across SaaS, AI, and fintech."
            titleClassName="text-2xl sm:text-3xl lg:text-4xl"
            descriptionClassName="mt-2 text-sm sm:text-base"
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {projectFilters.map((projectFilter) => (
              <button
                key={projectFilter}
                type="button"
                onClick={() => handleFilterChange(projectFilter)}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs transition-all duration-300",
                  filter === projectFilter
                    ? "border-accent-blue/50 bg-accent-blue/10 text-text-primary shadow-glow"
                    : "border-border text-text-secondary hover:border-white/20 hover:text-text-primary"
                )}
              >
                {projectFilter}
              </button>
            ))}
          </div>
        </FadeUp>

        <motion.div layout className="mt-6 grid gap-4 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="group glass-card flex overflow-hidden rounded-xl"
              >
                <div className="relative w-28 shrink-0 overflow-hidden border-r border-border sm:w-32">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className={cn(
                        "flex h-full min-h-[7.5rem] items-center justify-center bg-gradient-to-br",
                        project.gradient
                      )}
                    >
                      <span className="font-heading text-lg font-bold text-white/25">AI</span>
                    </div>
                  )}
                </div>

                <div className="flex min-w-0 flex-1 flex-col p-3 sm:p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-[10px] font-medium tracking-wider text-accent-cyan uppercase">
                        {project.category}
                      </p>
                      <h3 className="mt-0.5 truncate font-heading text-sm font-semibold text-text-primary sm:text-base">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-text-secondary">
                    {project.description}
                  </p>

                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-border bg-white/[0.03] px-1.5 py-0.5 text-[10px] text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-wrap gap-3 pt-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-0.5 text-xs font-medium text-accent-blue hover:underline"
                      >
                        Live <ArrowUpRight size={12} />
                      </a>
                    )}
                    {project.liveApp && (
                      <a
                        href={project.liveApp}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-0.5 text-xs font-medium text-accent-blue hover:underline"
                      >
                        App <ArrowUpRight size={12} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-0.5 text-xs text-text-secondary hover:text-text-primary"
                      >
                        <Code2 size={12} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
