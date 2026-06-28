import { useEffect } from "react";
import Lenis from "lenis";
import { useFinePointer, usePrefersReducedMotion } from "@/portfolio/hooks/usePrefersReducedMotion";

export function useLenis() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const hasFinePointer = useFinePointer();

  useEffect(() => {
    if (prefersReducedMotion || !hasFinePointer) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let raf = 0;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [prefersReducedMotion, hasFinePointer]);
}
