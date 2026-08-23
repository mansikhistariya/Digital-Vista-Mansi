import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Zap,
  FileCode2,
  Palette,
  Layout,
  Server,
  Cpu,
  Database,
  Network,
  ShieldCheck,
  Lock,
  Cloud,
  Terminal,
  Globe,
  GitBranch,
  GitCommit,
  Layers,
  Box,
  Component,
  PenTool,
  Send,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { skillCategories, stackMarquee } from "@/portfolio/data/skills";

// Dynamic Icon Registry Helper
const iconMap = {
  Code2,
  Zap,
  FileCode2,
  Palette,
  Layout,
  Server,
  Cpu,
  Database,
  Network,
  ShieldCheck,
  Lock,
  Cloud,
  Terminal,
  Globe,
  GitBranch,
  GitCommit,
  Layers,
  Box,
  Component,
  PenTool,
  Send,
  Wrench,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);

  const getCategoryIcon = (id) => {
    switch (id) {
      case "frontend":
        return Code2;
      case "backend":
        return Server;
      case "cloud":
        return Cloud;
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
      {/* Ambient Mesh Background Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono font-medium text-cyan-400 dark:text-cyan-300 mb-4">
            <Cpu className="h-3.5 w-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="section-heading font-heading text-slate-900 dark:text-slate-100">
            Skills & <span className="text-gradient-aurora">Architecture Stack.</span>
          </h2>
          <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Engineered with modern MERN Stack standards, performant libraries, and enterprise UI architecture.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-12">
          {skillCategories.map((cat) => {
            const Icon = getCategoryIcon(cat.id);
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${isActive
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-glow"
                    : "glass-pill text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/60 dark:hover:bg-white/10"
                  }`}
                data-cursor={cat.title}
              >
                <Icon className="h-4 w-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Modern Icon-based Skill Cards Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {activeCategory.items.map((skill, idx) => {
            const SkillIcon = iconMap[skill.icon] || Code2;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group glass-card glass-card-hover p-5 sm:p-6 rounded-3xl flex flex-col justify-between space-y-4"
              >
                {/* Header: Icon, Name & Level Badge */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 border border-violet-500/20 text-cyan-400 group-hover:border-cyan-400/50 group-hover:text-cyan-300 transition-colors shadow-sm">
                      <SkillIcon className="h-5 w-5" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-500/20">
                        {skill.badge}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        {skill.level}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>
                </div>

                {/* Sub-Skills & Feature Tags */}
                <div className="pt-3 border-t border-slate-200/60 dark:border-white/10">
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                      >
                        <CheckCircle2 className="h-3 w-3 text-cyan-500 dark:text-cyan-400 shrink-0" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Ecosystem Tech Badges Marquee Section */}
        <div className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-slate-200/60 dark:border-white/10">
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 tracking-widest uppercase">
              TECHNOLOGIES & ECOSYSTEM TOOLS
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 max-w-5xl mx-auto">
            {stackMarquee.map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.06, y: -2 }}
                className="glass-pill px-4 py-2 rounded-xl text-xs font-mono font-medium text-slate-800 dark:text-slate-200 border border-slate-300/70 dark:border-white/10 hover:border-violet-400/60 hover:text-violet-600 dark:hover:text-cyan-300 hover:bg-violet-500/10 transition-all cursor-default shadow-sm"
                data-cursor={tech.name}
              >
                <span>{tech.name}</span>
                <span className="ml-1.5 opacity-60 text-[10px]">({tech.category})</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
