import { useEffect, useRef } from "react";
import { gsap } from "@/portfolio/lib/gsap";
import { usePrefersReducedMotion } from "@/portfolio/hooks/usePrefersReducedMotion";

export default function SkillRing({ level, label, size = 100 }) {
  const circleRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle || prefersReducedMotion) return;

    gsap.fromTo(
      circle,
      { strokeDashoffset: circumference },
      {
        strokeDashoffset: circumference - (level / 100) * circumference,
        duration: 1.8,
        ease: "power4.out",
        scrollTrigger: {
          trigger: circle,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, [level, circumference, prefersReducedMotion]);

  return (
    <div className="flex flex-col items-center gap-3" data-reveal-child>
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="4"
          />
          <circle
            ref={circleRef}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#skillGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={prefersReducedMotion ? circumference - (level / 100) * circumference : circumference}
          />
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-heading text-sm font-bold text-text-primary">
          {level}%
        </span>
      </div>
      <span className="text-center text-xs text-text-secondary">{label}</span>
    </div>
  );
}
