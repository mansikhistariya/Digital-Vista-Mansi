import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useFinePointer, usePrefersReducedMotion } from "@/portfolio/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

let lenisInstance = null;

export function getLenis() {
  return lenisInstance;
}

export function useLenis() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const hasFinePointer = useFinePointer();

  useEffect(() => {
    const isMobile = window.innerWidth < 768 || !hasFinePointer;
    if (prefersReducedMotion || isMobile) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisInstance = lenis;
    document.documentElement.classList.add("lenis");

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const rafId = requestAnimationFrame(raf);

    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
      document.documentElement.classList.remove("lenis");
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [prefersReducedMotion, hasFinePointer]);
}

export function scrollToSection(target, { offset = -80 } = {}) {
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (!el) return;

  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(el, { offset, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
