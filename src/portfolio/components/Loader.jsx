import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { BrandLogo } from "@/portfolio/components/Icons";
import { useLoader } from "@/portfolio/context/LoaderContext";
import { usePrefersReducedMotion } from "@/portfolio/hooks/usePrefersReducedMotion";
import { siteConfig } from "@/portfolio/data/site";

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

    if (prefersReducedMotion) return;

    const counter = { value: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        setLoaded();
      },
    });

    tl.to(counter, {
      value: 100,
      duration: 2.2,
      ease: "power2.inOut",
      onUpdate: () => setProgress(Math.round(counter.value)),
    });

    tl.fromTo(
      logoRef.current,
      { scale: 0.6, opacity: 0, filter: "blur(12px)" },
      { scale: 1, opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power4.out" },
      0.3
    );

    tl.fromTo(
      maskRef.current,
      { scale: 0 },
      { scale: 3, duration: 1.4, ease: "power4.inOut" },
      1.6
    );

    tl.to(
      overlayRef.current,
      { opacity: 0, duration: 0.6, ease: "power2.inOut", pointerEvents: "none" },
      2.4
    );

    return () => tl.kill();
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
