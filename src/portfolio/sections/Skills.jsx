import { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Cpu, Wrench, Database, Sparkles, CheckCircle } from "lucide-react";
import { skillCategories, stackMarquee } from "@/portfolio/data/skills";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const getCategoryIcon = (id) => {
    switch (id) {
      case "MERN Stack ":
        return Code2;
      case "styling":
        return Sparkles;
      case "state":
        return Database;
      case "tools":
        return Wrench;
      default:
        return Cpu;
    }
  };

  const activeCategory =
    skillCategories.find((cat) => cat.id === activeTab) || skillCategories[0];

  return (
    <section id="skills" className="relative section-padding px-4 sm:px-6 lg:px-8 bg-noise">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono font-medium text-cyan-300 mb-4">
            <Cpu className="h-3.5 w-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="section-heading font-heading text-slate-100">
            Skills & <span className="text-gradient-aurora">Architecture Stack.</span>
          </h2>
          <p className="mt-4 max-w-xl text-slate-400 text-sm sm:text-base">
            Engineered with modern MERN Stack  standards, performant libraries, and enterprise UI architecture.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {skillCategories.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${isActive
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-glow"
                    : "glass-pill text-slate-400 hover:text-slate-200 hover:bg-white/10"
                  }`}
                data-cursor={cat.title}
              >
                <Icon className="h-4 w-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skill Meters Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {activeCategory.items.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-violet-500/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="h-4 w-4 text-cyan-400" />
                  <span className="font-semibold text-slate-200 text-sm sm:text-base">
                    {skill.name}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-violet-400">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 shadow-glow"
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Marquee Stack Wall */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-slate-400 tracking-widest uppercase">
              TECHNOLOGIES & ECOSYSTEM TOOLS
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-3 max-w-5xl mx-auto">
            {stackMarquee.map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.08, y: -2 }}
                className="glass-pill px-4 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 border border-white/10 hover:border-violet-400/50 hover:text-white hover:bg-violet-500/10 transition-all cursor-default"
                data-cursor={tech}
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
