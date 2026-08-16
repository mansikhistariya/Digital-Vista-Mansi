import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  FileText,
  Terminal,
  Globe,
  Clock,
  ChevronDown,
} from "lucide-react";
import { useTheme } from "@/portfolio/hooks/useTheme";
import { siteConfig } from "@/portfolio/data/site";
import ThreeBackground from "@/portfolio/components/ThreeBackground";

export default function Hero() {
  const [time, setTime] = useState("");
  const { theme } = useTheme();
  const isLight = theme === "light";

  // Real-time IST Clock (UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setTime(new Date().toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-noise transition-colors duration-300"
    >
      {/* 3D WebGL Background Canvas */}
      <ThreeBackground />

      {/* Aurora Ambient Mesh Glows */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[600px] blur-[130px] rounded-full pointer-events-none animate-pulse-slow z-0 ${isLight ? "bg-gradient-to-tr from-blue-300/30 via-violet-300/35 to-cyan-200/30" : "bg-gradient-to-tr from-blue-600/20 via-violet-600/25 to-cyan-400/20"
        }`} />
      <div className={`absolute bottom-10 right-10 w-[350px] h-[350px] blur-[120px] rounded-full pointer-events-none z-0 ${isLight ? "bg-emerald-300/20" : "bg-emerald-500/10"
        }`} />

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center text-center">
        {/* Availability & Location Live Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-xs sm:text-sm font-medium backdrop-blur-xl shadow-sm mb-8 transition-colors ${isLight
              ? "border-slate-200 bg-white/80 text-slate-800 shadow-slate-200/50"
              : "border-white/10 bg-white/[0.04] text-slate-200 shadow-glow"
            }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className={isLight ? "text-slate-800 font-medium" : "text-slate-200"}>
            Available for Global Remote Roles
          </span>
          <span className={isLight ? "text-slate-300" : "text-white/20"}>|</span>
          <div className={`flex items-center gap-1 font-mono text-[11px] sm:text-xs ${isLight ? "text-slate-600" : "text-slate-400"
            }`}>
            <Globe className={`h-3.5 w-3.5 ${isLight ? "text-blue-600" : "text-cyan-400"}`} />
            <span>India</span>
            <Clock className={`h-3 w-3 ml-1 ${isLight ? "text-violet-600" : "text-violet-400"}`} />
            <span>{time || "UTC+5:30"}</span>
          </div>
        </motion.div>

        {/* Main Title & Staggered Kinetic Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 max-w-4xl"
        >
          <h2 className={`text-xs sm:text-sm font-mono tracking-widest uppercase font-semibold ${isLight ? "text-blue-600" : "text-cyan-400"
            }`}>
            {siteConfig.name} — MERN Stack  Software Engineer
          </h2>

          <h1 className="hero-heading font-heading tracking-tight">
            <span className={isLight ? "text-slate-900" : "text-slate-100"}>Crafting </span>
            <span className="text-gradient-aurora font-extrabold">
              Interfaces
            </span>{" "}
            <br className="hidden sm:inline" />
            <span className={isLight ? "text-slate-900 font-semibold" : "text-slate-100 font-semibold"}>that Feel </span>
            <span className={`italic font-serif font-normal ${isLight ? "text-violet-700" : "text-violet-300"
              }`}>
              Inevitable.
            </span>
          </h1>
        </motion.div>

        {/* Description Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`mt-6 max-w-2xl text-base sm:text-lg font-normal leading-relaxed ${isLight ? "text-slate-700" : "text-slate-300"
            }`}
        >
          {siteConfig.hero.intro}
        </motion.p>

        {/* Floating Code Snippet Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className={`mt-8 hidden md:flex items-center gap-4 px-5 py-3 rounded-2xl border shadow-xl backdrop-blur-xl transition-colors ${isLight
              ? "bg-white/90 border-slate-200/90 text-slate-800 shadow-slate-200/80"
              : "bg-white/[0.04] border-white/10 text-slate-300 shadow-2xl"
            }`}
          data-cursor="Code"
        >
          <div className={`flex items-center gap-2 text-xs font-mono ${isLight ? "text-slate-800" : "text-slate-300"
            }`}>
            <Terminal className={`h-4 w-4 ${isLight ? "text-blue-600" : "text-cyan-400"}`} />
            <span className={isLight ? "text-purple-700 font-semibold" : "text-violet-400"}>const</span> engineer ={" "}
            <span className={isLight ? "text-emerald-700 font-semibold" : "text-emerald-400"}>{"{"}</span> stack: [
            <span className={isLight ? "text-amber-700" : "text-amber-300"}>"React"</span>,{" "}
            <span className={isLight ? "text-amber-700" : "text-amber-300"}>"Next.js"</span>,{" "}
            <span className={isLight ? "text-amber-700" : "text-amber-300"}>"TypeScript"</span>], design:{" "}
            <span className={isLight ? "text-cyan-700 font-semibold" : "text-cyan-300"}>"Awwwards-Grade"</span>{" "}
            <span className={isLight ? "text-emerald-700 font-semibold" : "text-emerald-400"}>{"}"}</span>;
          </div>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 active:scale-95"
            data-cursor="Projects"
          >
            <span>Explore Featured Work</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-medium backdrop-blur-xl transition-all duration-300 ${isLight
                ? "border-slate-300/80 bg-white/90 text-slate-800 hover:bg-slate-100 shadow-sm"
                : "border-white/15 bg-white/[0.05] text-slate-200 hover:bg-white/10 hover:border-violet-500/40 hover:text-white"
              }`}
            data-cursor="Contact"
          >
            <Sparkles className={`h-4 w-4 ${isLight ? "text-violet-600" : "text-violet-400"}`} />
            <span>Get in Touch</span>
          </a>

          {/* Resume CTA */}
          <a
            href={siteConfig.hero.ctas.resume.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-3.5 text-sm font-medium transition-colors ${isLight
                ? "border-slate-300/80 bg-white/60 text-slate-700 hover:text-slate-900 hover:bg-white"
                : "border-white/10 bg-transparent text-slate-400 hover:text-slate-200 hover:border-white/20"
              }`}
            data-cursor="Resume"
          >
            <FileText className={`h-4 w-4 ${isLight ? "text-blue-600" : "text-cyan-400"}`} />
            <span>Resume</span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className={`mt-16 flex flex-col items-center gap-2 text-xs font-mono ${isLight ? "text-slate-600 font-semibold" : "text-slate-500"
            }`}
        >
          <span>SCROLL TO DISCOVER</span>
          <ChevronDown className={`h-4 w-4 animate-bounce ${isLight ? "text-violet-600" : "text-violet-400"}`} />
        </motion.div>
      </div>
    </section>
  );
}
