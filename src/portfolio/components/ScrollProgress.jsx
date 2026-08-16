import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const dotTop = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  return (
    <div
      className="pointer-events-none fixed top-0 right-6 z-50 hidden h-screen w-px bg-white/[0.06] lg:block"
      aria-hidden
    >
      <motion.div
        className="absolute top-0 right-0 h-full w-px origin-top bg-gradient-to-b from-accent-blue via-accent-cyan to-transparent shadow-glow"
        style={{ scaleY }}
      />
      <motion.div
        className="absolute right-[-3px] h-2 w-2 rounded-full bg-accent-blue shadow-glow"
        style={{ top: dotTop, translateY: "-50%" }}
      />
    </div>
  );
}
