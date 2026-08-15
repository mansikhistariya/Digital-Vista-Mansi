import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  Award,
  Trophy,
  Terminal,
  CheckCircle2,
  TrendingUp,
  Layers,
} from "lucide-react";
import { siteConfig } from "@/portfolio/data/site";

export default function About() {
  const { story, highlights, stats, education, certifications } =
    siteConfig.about;

  return (
    <section id="about" className="relative section-padding px-4 sm:px-6 lg:px-8 bg-noise">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3.5 py-1 text-xs font-mono font-medium text-violet-600 dark:text-violet-300 mb-4">
            <User className="h-3.5 w-3.5" />
            <span>BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="section-heading font-heading text-slate-900 dark:text-slate-100">
            Engineering Precision, <br />
            <span className="text-gradient-aurora">Pixel Perfection.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Narrative Story (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 glass-card p-6 sm:p-8 rounded-3xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400">
                  <Terminal className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-slate-800 dark:text-slate-200">
                  Engineering Story
                </h3>
              </div>
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                {story}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/10 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Architecture</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Component Driven</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500 dark:text-violet-400 border border-violet-500/20">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Performance</p>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Lighthouse 95+</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Impact Stats Counters (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 glass-card p-6 sm:p-8 rounded-3xl grid grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center items-start p-4 rounded-2xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 hover:border-violet-500/30 transition-colors"
              >
                <span className="text-3xl sm:text-4xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-violet-500 to-pink-500">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs text-slate-600 dark:text-slate-400 font-mono">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Card 3: Key Engineering Highlights (Span 12) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-12 glass-card p-6 sm:p-8 rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-500 dark:text-violet-400">
                <Trophy className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-slate-800 dark:text-slate-200">
                Core Achievements & Strengths
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 hover:border-cyan-500/30 transition-colors"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Education (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-6 glass-card p-6 sm:p-8 rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400">
                <GraduationCap className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-slate-800 dark:text-slate-200">
                Education
              </h3>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {education.degree}
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300">{education.school}</p>
              <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200/60 dark:border-white/10">
                <span>{education.period}</span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                  {education.grade}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Certifications (Span 6) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-6 glass-card p-6 sm:p-8 rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400">
                <Award className="h-4.5 w-4.5" />
              </div>
              <h3 className="text-sm font-mono uppercase tracking-wider font-semibold text-slate-800 dark:text-slate-200">
                Certifications & Training
              </h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-100/60 dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5"
                >
                  <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-glow" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
