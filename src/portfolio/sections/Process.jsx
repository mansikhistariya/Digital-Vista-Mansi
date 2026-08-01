import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Shield,
  Zap,
  RefreshCw,
  ArrowRight,
  GitBranch,
} from "lucide-react";
import { processSteps } from "@/portfolio/data/process";

const iconMap = {
  Search,
  PenTool,
  Code2,
  Shield,
  Zap,
  RefreshCw,
};

export default function Process() {
  return (
    <section id="process" className="relative section-padding px-4 sm:px-6 lg:px-8 bg-noise">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[400px] bg-emerald-600/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono font-medium text-cyan-300 mb-4">
            <GitBranch className="h-3.5 w-3.5" />
            <span>MY DEVELOPMENT PROCESS</span>
          </div>
          <h2 className="section-heading font-heading text-slate-100">
            How I Deliver{" "}
            <span className="text-gradient-aurora">Results.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400 text-sm sm:text-base">
            A proven, structured approach to building software — from discovery to deployment and
            ongoing maintenance. No surprises, just clear milestones.
          </p>
        </div>

        {/* Process Steps Timeline */}
        <div className="relative">
          {/* Vertical Line (desktop) */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-violet-500/30 to-transparent hidden lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {processSteps.map((step, idx) => {
              const Icon = iconMap[step.icon];
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-[calc(50%-2rem)] ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl">
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-500/20">
                          {Icon && <Icon className="h-5 w-5 text-violet-400" />}
                        </div>
                        <div>
                          <span className="text-xs font-mono text-cyan-400 font-bold">
                            STEP {step.step}
                          </span>
                          <h3 className="text-lg font-bold font-heading text-slate-100">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className={`text-sm text-slate-400 leading-relaxed mb-5 ${isEven ? "lg:text-right" : ""}`}>
                        {step.description}
                      </p>

                      {/* Deliverables */}
                      <div className={`flex flex-wrap gap-2 ${isEven ? "lg:justify-end" : ""}`}>
                        {step.deliverables.map((d, dIdx) => (
                          <span
                            key={dIdx}
                            className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 h-10 w-10 items-center justify-center rounded-full bg-[#050508] border-2 border-violet-500 shadow-glow z-10">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {step.step}
                    </span>
                  </div>

                  {/* Empty space for layout */}
                  <div className="hidden lg:block w-[calc(50%-2rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-8 py-4 text-sm font-semibold text-white shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
