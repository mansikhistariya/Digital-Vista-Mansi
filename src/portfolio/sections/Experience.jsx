import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from "lucide-react";
import { experiences } from "@/portfolio/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding px-4 sm:px-6 lg:px-8 bg-noise">
      {/* Background Ambient Light */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-mono font-medium text-violet-300 mb-4">
            <Briefcase className="h-3.5 w-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="section-heading font-heading text-slate-900 dark:text-slate-100">
            Professional <span className="text-gradient-aurora">Experience.</span>
          </h2>
          <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Proven track record delivering scalable client applications and enterprise SaaS UIs.
          </p>
        </div>

        {/* Timeline Line & Node Cards */}
        <div className="relative space-y-10 sm:space-y-12">
          {/* Vertical Timeline Gradient Line */}
          <div className="absolute left-3 sm:left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-violet-500 via-cyan-500 to-slate-700/20" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-9 sm:pl-12 group"
            >
              {/* Timeline Glowing Node Dot */}
              <div className="absolute left-3 sm:left-4 -translate-x-1/2 top-7 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 dark:bg-[#050508] border-2 border-violet-500 group-hover:border-cyan-400 transition-colors shadow-glow z-10">
                <div className="h-2 w-2 rounded-full bg-cyan-400" />
              </div>

              {/* Glass Card Container */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl group-hover:border-violet-500/40 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-slate-100">
                      {exp.role}
                    </h3>
                    <h4 className="text-base font-medium text-violet-600 dark:text-violet-400 mt-0.5">
                      {exp.company}
                    </h4>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600 dark:text-slate-400">
                    <span className="flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-white/5 px-3 py-1 border border-slate-200 dark:border-white/10">
                      <Calendar className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-white/5 px-3 py-1 border border-slate-200 dark:border-white/10">
                      <MapPin className="h-3.5 w-3.5 text-violet-600 dark:text-violet-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-3 mt-6 pt-4 border-t border-slate-200/60 dark:border-white/10">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-3">
                      <ChevronRight className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {ach}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
