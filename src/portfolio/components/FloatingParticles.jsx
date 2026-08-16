import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/portfolio/hooks/usePrefersReducedMotion";

export default function FloatingParticles({ count = 24, className = "" }) {
  const containerRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion) return;

    const particles = Array.from({ length: count }, () => {
      const el = document.createElement("div");
      el.className = "absolute h-1 w-1 rounded-full bg-accent-blue/40";
      el.style.left = `${Math.random() * 100}%`;
      el.style.top = `${Math.random() * 100}%`;
      container.appendChild(el);
      return el;
    });

    particles.forEach((particle) => {
      gsap.to(particle, {
        y: `random(-30, 30)`,
        x: `random(-20, 20)`,
        opacity: "random(0.2, 0.8)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => particles.forEach((p) => p.remove());
  }, [count, prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    />
  );
}
