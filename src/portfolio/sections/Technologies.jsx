import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Code2, Database, Cloud, Wrench } from "lucide-react";
import { techStack, stackMarquee } from "@/portfolio/data/skills";

const categories = [
  { id: "frontend", label: "Frontend", icon: Layers, color: "text-blue-400" },
  { id: "backend", label: "Backend", icon: Database, color: "text-emerald-400" },
  { id: "cloud", label: "Cloud & DevOps", icon: Cloud, color: "text-amber-400" },
  { id: "tools", label: "Tools", icon: Wrench, color: "text-pink-400" },
  { id: "stateManagement", label: "State & Forms", icon: Code2, color: "text-violet-400" },
];

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const activeTechs = techStack[activeCategory] || [];

  return (
    <section id="technologies" className="relative section-padding px-4 sm:px-6 lg:px-8 bg-noise">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-mono font-medium text-violet-300 mb-4">
            <Cpu className="h-3.5 w-3.5" />
            <span>TECHNOLOGY STACK</span>
          </div>
          <h2 className="section-heading font-heading text-slate-100">
            Full-Stack{" "}
            <span className="text-gradient-aurora">Technical Arsenal.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400 text-sm sm:text-base">
            From React frontends to Node.js backends and AWS cloud deployment — the complete
            technology stack I use to build, scale, and maintain modern web applications.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-glow"
                    : "glass-pill text-slate-400 hover:text-slate-200 hover:bg-white/10"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Technologies Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {activeTechs.map((tech, idx) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              whileHover={{ scale: 1.06, y: -3 }}
              className="glass-card p-5 rounded-2xl text-center hover:border-violet-500/40 transition-all cursor-default"
            >
              <span className="text-sm font-semibold text-slate-200">{tech}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Full Marquee Wall */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-slate-400 tracking-widest uppercase">
              COMPLETE ECOSYSTEM
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 max-w-5xl mx-auto">
            {stackMarquee.map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.08, y: -2 }}
                className="glass-pill px-4 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 border border-white/10 hover:border-violet-400/50 hover:text-white hover:bg-violet-500/10 transition-all cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
