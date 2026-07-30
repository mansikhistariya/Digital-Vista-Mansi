import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/portfolio/hooks/usePrefersReducedMotion";

const shapes = [
  { className: "h-24 w-24 rounded-full border border-accent-blue/20", x: "10%", y: "20%" },
  { className: "h-16 w-16 rotate-45 border border-white/10", x: "75%", y: "15%" },
  { className: "h-32 w-32 rounded-full bg-accent-blue/5", x: "80%", y: "60%" },
  { className: "h-20 w-20 rounded-2xl border border-accent-cyan/15", x: "5%", y: "70%" },
];

export default function GeometricShapes() {
  const ref = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const container = ref.current;
    if (!container || prefersReducedMotion) return;

    const items = container.querySelectorAll("[data-shape]");
    items.forEach((item, i) => {
      gsap.to(item, {
        y: i % 2 === 0 ? -20 : 20,
        rotation: i % 2 === 0 ? 15 : -15,
        duration: 4 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, [prefersReducedMotion]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {shapes.map((shape, i) => (
        <div
          key={i}
          data-shape
          className={`absolute ${shape.className}`}
          style={{ left: shape.x, top: shape.y }}
        />
      ))}
    </div>
  );
}
