import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [hoverState, setHoverState] = useState("default");
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for trailing outer ring
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable custom cursor on touch devices or reduced motion
    if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add("has-custom-cursor");

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, input, textarea, [data-cursor]");
      if (target) {
        const cursorAttr = target.getAttribute("data-cursor");
        if (cursorAttr) {
          setHoverState("text");
          setHoverText(cursorAttr);
        } else {
          setHoverState("pointer");
          setHoverText("");
        }
      } else {
        setHoverState("default");
        setHoverText("");
      }
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isPointer = hoverState === "pointer";
  const isText = hoverState === "text";

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-cyan-400 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isPointer ? 12 : isText ? 0 : 8,
          height: isPointer ? 12 : isText ? 0 : 8,
          opacity: isText ? 0 : 1,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
      />

      {/* Outer Ring / Label Aura */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center border border-violet-400/50 bg-violet-500/10 backdrop-blur-[2px] transition-colors duration-200"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isPointer ? 48 : isText ? 72 : 36,
          height: isPointer ? 48 : isText ? 72 : 36,
          scale: isPointer ? 1.15 : isText ? 1.25 : 1,
          borderColor: isPointer
            ? "rgba(56, 189, 248, 0.8)"
            : isText
            ? "rgba(168, 85, 247, 0.8)"
            : "rgba(139, 92, 246, 0.3)",
        }}
        transition={{ type: "spring", damping: 24, stiffness: 300 }}
      >
        {isText && hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-mono tracking-wider font-semibold uppercase text-violet-200 text-center px-1"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
