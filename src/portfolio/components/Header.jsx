import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Menu, X, Send, Sun, Moon } from "lucide-react";
import { useTheme } from "@/portfolio/hooks/useTheme";
import CommandPalette from "./CommandPalette";
import { siteConfig } from "@/portfolio/data/site";

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const { theme, toggle: toggleTheme } = useTheme();

  const isLight = theme === "light";

  const navItems = [
    { id: "hero", label: "Home", href: "#hero" },
    { id: "about", label: "About", href: "#about" },
    { id: "services", label: "Services", href: "#services" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9000] w-full transition-all duration-300 border-b ${
          scrolled
            ? isLight
              ? "bg-white/90 backdrop-blur-md border-slate-200 shadow-sm py-3 px-4 sm:px-8"
              : "bg-[#050508]/90 backdrop-blur-md border-white/10 shadow-lg py-3 px-4 sm:px-8"
            : isLight
              ? "bg-white/70 backdrop-blur-sm border-slate-200/60 py-4 px-4 sm:px-8"
              : "bg-[#050508]/50 backdrop-blur-sm border-white/5 py-4 px-4 sm:px-8"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          {/* Logo / Personal Brand Badge */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="group flex items-center gap-2.5 text-sm font-semibold tracking-wide"
            data-cursor="Home"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 via-violet-600 to-cyan-400 p-[1px] shadow-glow">
              <div className={`flex h-full w-full items-center justify-center rounded-full ${isLight ? "bg-white" : "bg-[#070710]"}`}>
                <span className="font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 text-xs">
                  MK
                </span>
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className={`font-heading text-xs font-bold transition-colors ${isLight ? "text-slate-900 group-hover:text-blue-600" : "text-slate-100 group-hover:text-cyan-400"}`}>
                {siteConfig.brand}
              </span>
              <span className={`text-[10px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`hidden md:flex items-center gap-1 rounded-full p-1 border ${isLight ? "bg-slate-100/90 border-slate-200" : "bg-white/[0.04] border-white/10"}`}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors rounded-full ${
                    isActive
                      ? isLight
                        ? "text-slate-900 font-bold"
                        : "text-white font-semibold"
                      : isLight
                        ? "text-slate-600 hover:text-slate-900"
                        : "text-slate-400 hover:text-slate-200"
                  }`}
                  data-cursor={item.label}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 rounded-full shadow-sm ${
                        isLight
                          ? "bg-white border border-slate-200 shadow-sm"
                          : "bg-gradient-to-r from-blue-600/60 via-violet-600/60 to-cyan-500/60 shadow-glow"
                      }`}
                      transition={{ type: "spring", damping: 25, stiffness: 350 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Quick Action Button & Command Palette & Theme Toggle */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
                isLight
                  ? "border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200"
                  : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
              aria-label="Toggle Theme"
              data-cursor={isLight ? "Dark Mode" : "Light Mode"}
            >
              {isLight ? (
                <Moon className="h-4 w-4 text-violet-600" />
              ) : (
                <Sun className="h-4 w-4 text-amber-300" />
              )}
            </button>

            {/* Command Palette Trigger */}
            <button
              onClick={() => setIsCmdOpen(true)}
              aria-label="Open Command Palette"
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all ${
                isLight
                  ? "border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200"
                  : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:border-violet-500/40 hover:text-white"
              }`}
              data-cursor="Cmd+K"
            >
              <Command className={`h-3.5 w-3.5 ${isLight ? "text-violet-600" : "text-cyan-400"}`} />
              <span className="hidden sm:inline text-[11px]">Search</span>
              <kbd className={`hidden sm:inline-block rounded px-1 py-0.2 font-mono text-[9px] ${isLight ? "bg-slate-200 text-slate-700" : "bg-white/10 text-slate-300"}`}>
                ⌘K
              </kbd>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden lg:flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-3.5 py-1.5 text-xs font-semibold text-white shadow-glow transition-transform hover:scale-105 active:scale-95"
              data-cursor="Hire"
            >
              <Send className="h-3.5 w-3.5 text-cyan-200" />
              <span>Get in Touch</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileOpen((prev) => !prev)}
              className={`flex md:hidden h-9 w-9 items-center justify-center rounded-full ${
                isLight ? "bg-slate-100 text-slate-800 hover:bg-slate-200" : "bg-white/10 text-white hover:bg-white/20"
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className={`absolute top-16 left-4 right-4 z-[8999] rounded-2xl border p-4 backdrop-blur-xl shadow-2xl md:hidden ${
                isLight ? "bg-white/95 border-slate-200" : "bg-[#0b0b14]/95 border-white/15"
              }`}
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? isLight
                          ? "bg-violet-50 text-violet-700 font-semibold border border-violet-200"
                          : "bg-violet-600/30 text-white font-semibold border border-violet-500/30"
                        : isLight
                          ? "text-slate-700 hover:bg-slate-100"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-glow" />
                    )}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Command Palette Modal */}
      <CommandPalette isOpen={isCmdOpen} setIsOpen={setIsCmdOpen} />
    </>
  );
}

