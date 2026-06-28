import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/portfolio/components/ThemeToggle";
import PrimaryButton from "@/portfolio/components/PrimaryButton";
import { BrandLogo } from "@/portfolio/components/icons";
import { useActiveSection } from "@/portfolio/hooks/useActiveSection";
import { usePrefersReducedMotion } from "@/portfolio/hooks/usePrefersReducedMotion";
import { siteConfig } from "@/portfolio/data/site";
import { cn } from "@/utils/cn";

const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Writing", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

function Logo({ onClick }) {
  return (
    <a href="#hero" className="flex items-center gap-2.5" onClick={onClick}>
      <BrandLogo size={32} className="h-8 w-8 shrink-0" />
      <span className="font-heading text-lg font-bold tracking-tight text-text-primary">
        {siteConfig.brand}
      </span>
    </a>
  );
}

function NavLink({ item, active, variant = "desktop", onClick }) {
  const isActive = active === item.href;

  return (
    <a
      href={item.href}
      aria-current={isActive ? "true" : undefined}
      onClick={onClick}
      className={cn(
        "font-medium transition-colors",
        variant === "desktop" && [
          "text-sm",
          isActive
            ? "font-semibold text-text-primary"
            : "text-text-secondary hover:text-text-primary",
        ],
        variant === "mobile" && [
          "border-b border-border py-5 text-lg",
          isActive
            ? "text-text-primary"
            : "text-text-secondary hover:text-text-primary",
        ]
      )}
    >
      {item.label}
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const navHrefs = useMemo(() => nav.map((item) => item.href), []);
  const activeHref = useActiveSection(navHrefs);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);
  const openMobileMenu = useCallback(() => setMobileOpen(true), []);

  const slideTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "tween", duration: 0.3, ease: [0.32, 0.72, 0, 1] };

  return (
    <>
      <header
        className={[
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-border bg-bg-primary/90 backdrop-blur-xl"
            : "bg-bg-primary/60 backdrop-blur-md",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-4 md:flex lg:gap-7" aria-label="Main">
            {nav.map((item) => (
              <NavLink key={item.href} item={item} active={activeHref} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <PrimaryButton
              as="a"
              href="#contact"
              className="hidden px-5 py-2.5 shadow-[0_0_24px_rgba(59,130,246,0.35)] hover:shadow-[0_0_32px_rgba(139,92,246,0.4)] md:inline-flex"
            >
              Hire me
            </PrimaryButton>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/[0.04] text-text-primary transition-colors hover:border-white/20 md:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={openMobileMenu}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-bg-primary md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={prefersReducedMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={prefersReducedMotion ? undefined : { x: "100%" }}
            transition={slideTransition}
          >
            <div className="flex items-center justify-between gap-4 px-6 py-4">
              <Logo onClick={closeMobileMenu} />
              <div className="flex items-center gap-3">
                <ThemeToggle />
                <PrimaryButton
                  as="a"
                  href="#contact"
                  className="px-4 py-2 text-xs shadow-[0_0_24px_rgba(59,130,246,0.35)]"
                  onClick={closeMobileMenu}
                >
                  Hire me
                </PrimaryButton>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/[0.04] text-text-primary transition-colors hover:border-white/20"
                  aria-label="Close menu"
                  onClick={closeMobileMenu}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <nav className="flex flex-1 flex-col px-6 pt-10" aria-label="Mobile">
              {nav.map((item) => (
                <NavLink
                  key={item.href}
                  item={item}
                  active={activeHref}
                  variant="mobile"
                  onClick={closeMobileMenu}
                />
              ))}
            </nav>

            <div className="px-6 pb-10 pt-4">
              <PrimaryButton
                as="a"
                href="#contact"
                className="w-full justify-center px-6 py-4 text-base shadow-[0_0_32px_rgba(59,130,246,0.4)]"
                onClick={closeMobileMenu}
              >
                Hire me
              </PrimaryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
