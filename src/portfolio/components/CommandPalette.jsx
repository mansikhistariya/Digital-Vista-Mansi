import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  User,
  Code2,
  Briefcase,
  FolderGit2,
  Mail,
  FileText,
  X,
  ExternalLink,
  Sparkles,
  Check,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "@/portfolio/hooks/useTheme";
import { GithubIcon, LinkedinIcon } from "@/portfolio/components/Icons";
import { siteConfig } from "@/portfolio/data/site";

export default function CommandPalette({ isOpen, setIsOpen }) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const { theme, toggle: toggleTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNavigate = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const commands = [
    {
      id: "nav-hero",
      title: "Home / Hero",
      category: "Navigation",
      icon: Sparkles,
      action: () => handleNavigate("#hero"),
    },
    {
      id: "nav-about",
      title: "About Mansi",
      category: "Navigation",
      icon: User,
      action: () => handleNavigate("#about"),
    },
    {
      id: "nav-skills",
      title: "Skills & Tech Stack",
      category: "Navigation",
      icon: Code2,
      action: () => handleNavigate("#skills"),
    },
    {
      id: "nav-experience",
      title: "Work Experience",
      category: "Navigation",
      icon: Briefcase,
      action: () => handleNavigate("#experience"),
    },
    {
      id: "nav-projects",
      title: "Featured Projects",
      category: "Navigation",
      icon: FolderGit2,
      action: () => handleNavigate("#projects"),
    },
    {
      id: "nav-contact",
      title: "Contact & Inquiries",
      category: "Navigation",
      icon: Mail,
      action: () => handleNavigate("#contact"),
    },
    {
      id: "action-toggle-theme",
      title: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
      category: "Appearance",
      icon: theme === "dark" ? Sun : Moon,
      action: () => {
        toggleTheme();
        setIsOpen(false);
      },
    },
    {
      id: "action-copy-email",
      title: `Copy Email (${siteConfig.email})`,
      category: "Quick Actions",
      icon: copied ? Check : Mail,
      action: handleCopyEmail,
    },
    {
      id: "action-resume",
      title: "Download Resume (PDF)",
      category: "Quick Actions",
      icon: FileText,
      action: () => window.open(siteConfig.hero.ctas.resume.href, "_blank"),
    },
    {
      id: "action-github",
      title: "View GitHub Profile",
      category: "Social Links",
      icon: GithubIcon,
      action: () => window.open(siteConfig.social.github, "_blank"),
    },
    {
      id: "action-linkedin",
      title: "Connect on LinkedIn",
      category: "Social Links",
      icon: LinkedinIcon,
      action: () => window.open(siteConfig.social.linkedin, "_blank"),
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Box */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command Palette Navigation"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c14]/90 shadow-2xl backdrop-blur-2xl"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3.5">
              <Search className="h-5 w-5 text-violet-400" />
              <input
                type="text"
                aria-label="Type a command or search section"
                placeholder="Type a command or search section..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-400 focus:outline-none"
              />
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close command palette"
                className="rounded-lg p-1 text-slate-400 hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Command List */}
            <div className="max-h-[360px] overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="py-8 text-center text-sm text-slate-400">
                  No matching commands found.
                </div>
              ) : (
                filteredCommands.map((cmd) => {
                  const Icon = cmd.icon;
                  return (
                    <button
                      key={cmd.id}
                      onClick={cmd.action}
                      className="group flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm transition-colors hover:bg-violet-500/15 hover:text-white"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-violet-400 transition-colors group-hover:bg-violet-500/20 group-hover:text-violet-300">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-slate-200 group-hover:text-white">
                            {cmd.title}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            {cmd.category}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="h-3.5 w-3.5 text-slate-500 opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                  );
                })
              )}
            </div>

            {/* Command Footer */}
            <div className="flex items-center justify-between border-t border-white/10 bg-white/[0.02] px-4 py-2.5 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-slate-300">
                  ESC
                </span>
                <span>to close</span>
              </div>
              <div className="flex items-center gap-1 text-slate-400">
                <Sparkles className="h-3 w-3 text-cyan-400" />
                <span>Raycast Navigation</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
