import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [hoverState, setHoverState] = useState("default");
  const [hoverText, setHoverText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add("has-custom-cursor");

    const moveCursor = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, input, textarea, select, [role='button'], [data-cursor]");
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

    const render = () => {
      const ease = 0.22;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  const isPointer = hoverState === "pointer";
  const isText = hoverState === "text";

  return (
    <>
      {/* Inner Hardware-Accelerated Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-cyan-400 mix-blend-difference transition-all duration-150 ease-out ${
          isText ? "opacity-0 w-0 h-0" : isPointer ? "w-3 h-3 opacity-100" : "w-2 h-2 opacity-100"
        }`}
      />

      {/* Outer Hardware-Accelerated Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center border transition-all duration-200 ease-out backdrop-blur-[2px] ${
          isPointer
            ? "w-12 h-12 border-cyan-400/80 bg-cyan-500/10 scale-110"
            : isText
            ? "w-20 h-20 border-violet-400/80 bg-violet-500/15 scale-110"
            : "w-9 h-9 border-violet-400/40 bg-violet-500/10 scale-100"
        }`}
      >
        {isText && hoverText && (
          <span className="text-[10px] font-mono tracking-wider font-semibold uppercase text-violet-200 text-center px-1">
            {hoverText}
          </span>
        )}
      </div>
    </>
  );
}

