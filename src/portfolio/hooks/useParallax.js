import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useFinePointer, usePrefersReducedMotion } from "@/portfolio/hooks/usePrefersReducedMotion";

export function useParallax(ref, intensity = 0.04) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const hasFinePointer = useFinePointer();
  const quickX = useRef(null);
  const quickY = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion || !hasFinePointer) return;

    quickX.current = gsap.quickTo(el, "x", { duration: 0.8, ease: "power3.out" });
    quickY.current = gsap.quickTo(el, "y", { duration: 0.8, ease: "power3.out" });

    const onMove = (event) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (event.clientX - centerX) * intensity;
      const y = (event.clientY - centerY) * intensity;
      quickX.current?.(x);
      quickY.current?.(y);
    };

    const onLeave = () => {
      quickX.current?.(0);
      quickY.current?.(0);
    };

    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      gsap.set(el, { x: 0, y: 0 });
    };
  }, [ref, intensity, prefersReducedMotion, hasFinePointer]);
}

export function useMouseParallaxLayer(ref, { x = 20, y = 20 } = {}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const hasFinePointer = useFinePointer();

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion || !hasFinePointer) return;

    const onMove = (event) => {
      const nx = (event.clientX / window.innerWidth - 0.5) * 2;
      const ny = (event.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(el, { x: nx * x, y: ny * y, duration: 1.2, ease: "power2.out" });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [ref, x, y, prefersReducedMotion, hasFinePointer]);
}
