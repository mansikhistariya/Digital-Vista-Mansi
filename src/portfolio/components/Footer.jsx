import { ArrowUp } from "lucide-react";
import { useTheme } from "@/portfolio/hooks/useTheme";
import { siteConfig } from "@/portfolio/data/site";

export default function Footer() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`relative border-t py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
        isLight
          ? "border-slate-200 bg-slate-100/80 text-slate-800"
          : "border-white/10 bg-[#050508] text-slate-200"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 via-violet-600 to-cyan-400 p-[1px]">
            <div className={`flex h-full w-full items-center justify-center rounded-full ${isLight ? "bg-white" : "bg-[#070710]"}`}>
              <span className="font-heading text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                MK
              </span>
            </div>
          </div>
          <div>
            <p className={`font-heading text-xs font-bold ${isLight ? "text-slate-900" : "text-slate-200"}`}>
              {siteConfig.name}
            </p>
            <p className={`text-[11px] font-mono ${isLight ? "text-slate-600" : "text-slate-400"}`}>
              Built with React, Next.js & Three.js
            </p>
          </div>
        </div>

        <div className={`flex items-center gap-6 text-xs font-mono ${isLight ? "text-slate-600" : "text-slate-400"}`}>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-500 transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-500 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-blue-500 transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className={`flex items-center justify-center h-8 w-8 rounded-full border transition-all shadow-sm ${
              isLight
                ? "bg-white border-slate-300 text-slate-700 hover:bg-violet-600 hover:text-white"
                : "bg-white/5 border-white/10 text-slate-300 hover:bg-violet-600 hover:text-white"
            }`}
            aria-label="Scroll to top of page"
            data-cursor="Top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

