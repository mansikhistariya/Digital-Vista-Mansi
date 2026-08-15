import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/portfolio/data/site";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050508] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 via-violet-600 to-cyan-400 p-[1px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#070710]">
              <span className="font-heading text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                MK
              </span>
            </div>
          </div>
          <div>
            <p className="font-heading text-xs font-bold text-slate-200">
              {siteConfig.name}
            </p>
            <p className="text-[11px] text-slate-500 font-mono">
              Designed & Built with React, Next.js & Three.js
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-400 font-mono">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-white transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center h-8 w-8 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-violet-600 hover:text-white transition-all shadow-glow"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
