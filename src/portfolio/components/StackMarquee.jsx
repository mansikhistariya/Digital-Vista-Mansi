import { memo, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { stackMarquee } from "@/portfolio/data/skills";
import { usePrefersReducedMotion } from "@/portfolio/hooks/usePrefersReducedMotion";
import { cn } from "@/utils/cn";

const StackPill = memo(function StackPill({ label }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-80, 80], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-80, 80], [-8, 8]), { stiffness: 300, damping: 30 });

  const onMove = (event) => {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.08 }}
      className={cn(
        "glass-card cursor-default select-none px-6 py-4 text-sm font-medium text-text-primary",
        "transition-shadow duration-300 hover:border-accent-blue/30 hover:shadow-glow"
      )}
    >
      {label}
    </motion.div>
  );
});

function MarqueeRow({ items, reverse, animate }) {
  const doubled = [...items, ...items];

  return (
    <div className="flex overflow-hidden py-3">
      <motion.div
        className="flex shrink-0 gap-4"
        animate={animate ? { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] } : false}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, index) => (
          <StackPill key={`${item}-${index}`} label={item} />
        ))}
      </motion.div>
    </div>
  );
}

export default function StackMarquee() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "200px" });
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldAnimate = isInView && !prefersReducedMotion;

  const mid = Math.ceil(stackMarquee.length / 2);
  const row1 = stackMarquee.slice(0, mid);
  const row2 = stackMarquee.slice(mid);

  return (
    <div
      ref={containerRef}
      className="relative -mx-6 space-y-1 overflow-hidden py-5 lg:-mx-8"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg-primary to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg-primary to-transparent" />
      <MarqueeRow items={row1} animate={shouldAnimate} />
      <MarqueeRow items={row2} reverse animate={shouldAnimate} />
    </div>
  );
}
