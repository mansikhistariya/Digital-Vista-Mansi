import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useLoader } from "@/portfolio/context/LoaderContext";
import { usePrefersReducedMotion } from "@/portfolio/hooks/usePrefersReducedMotion";
import { siteConfig } from "@/portfolio/data/site";
import { BrandLogo } from "./Icons";

export default function Loader() {
  const { isLoaded, setLoaded } = useLoader();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [progress, setProgress] = useState(0);
  const overlayRef = useRef(null);
  const maskRef = useRef(null);
  const logoRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    if (isLoaded) return;

    if (prefersReducedMotion) {
      setLoaded();
      return;
    }

    // High performance fast loader: complete immediately on DOM idle
    const timer = setTimeout(() => {
      setLoaded();
    }, 250);

    return () => clearTimeout(timer);
  }, [isLoaded, setLoaded, prefersReducedMotion]);

  if (isLoaded) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050508]"
      aria-hidden={isLoaded}
      style={{ pointerEvents: isLoaded ? "none" : "auto" }}
    >
      <div
        ref={maskRef}
        className="pointer-events-none absolute h-40 w-40 rounded-full bg-violet-600/20"
        style={{ transform: "scale(0)" }}
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        <div ref={logoRef} className="flex flex-col items-center gap-4 opacity-0">
          <BrandLogo size={56} className="h-14 w-14" />
          <span className="font-heading text-sm font-semibold tracking-[0.35em] text-slate-300 uppercase">
            {siteConfig.brand}
          </span>
        </div>

        <div className="font-heading text-6xl font-bold tracking-tighter text-slate-100">
          {progress}
          <span className="text-3xl text-violet-400">%</span>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_55%)]"
        aria-hidden
      />
    </div>
  );
}
