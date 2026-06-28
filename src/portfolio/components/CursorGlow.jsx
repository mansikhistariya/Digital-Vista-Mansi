import { useEffect } from "react";
import { motion, useSpring } from "framer-motion";
import { useFinePointer, usePrefersReducedMotion } from "@/portfolio/hooks/usePrefersReducedMotion";

function StaticAurora() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-1/4 top-0 h-[70%] w-[70%] rounded-full bg-accent-blue/20 blur-[120px]" />
      <div className="absolute right-0 top-1/4 h-[50%] w-[50%] rounded-full bg-accent-violet/15 blur-[100px]" />
      <div className="absolute bottom-0 left-1/3 h-[40%] w-[40%] rounded-full bg-accent-cyan/10 blur-[90px]" />
    </div>
  );
}

export default function CursorGlow() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const hasFinePointer = useFinePointer();
  const enableMotion = !prefersReducedMotion && hasFinePointer;

  const spring = { stiffness: 120, damping: 24, mass: 0.45 };
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);
  const x2 = useSpring(0, { ...spring, stiffness: 80, damping: 28 });
  const y2 = useSpring(0, { ...spring, stiffness: 80, damping: 28 });

  useEffect(() => {
    if (!enableMotion) return;

    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      x2.set(event.clientX + 38);
      y2.set(event.clientY + 30);
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [enableMotion, x, y, x2, y2]);

  if (!enableMotion) return <StaticAurora />;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <StaticAurora />

      <motion.div
        className="absolute z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 mix-blend-screen"
        style={{
          x,
          y,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(6,182,212,0.2) 35%, rgba(139,92,246,0.08) 55%, transparent 70%)",
        }}
      />

      <motion.div
        className="absolute z-[9] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 mix-blend-screen"
        style={{
          x: x2,
          y: y2,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(59,130,246,0.1) 45%, transparent 65%)",
        }}
      />

      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.4) 2px, rgba(255,255,255,0.4) 3px)",
        }}
        animate={{ opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
