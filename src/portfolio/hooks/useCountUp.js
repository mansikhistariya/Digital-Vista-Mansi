import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/portfolio/hooks/usePrefersReducedMotion";

export function useCountUp(end, { duration = 2, decimals: decimalsProp, suffix = "" } = {}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  const strEnd = String(end);
  const numericEnd = parseFloat(strEnd.replace(/[^0-9.]/g, ""));
  const decimals =
    decimalsProp ??
    (strEnd.includes(".") ? (strEnd.split(".")[1]?.replace(/[^0-9]/g, "").length ?? 1) : 0);
  const hasPlus = strEnd.includes("+");

  useEffect(() => {
    if (!inView || Number.isNaN(numericEnd)) return;

    if (prefersReducedMotion) {
      requestAnimationFrame(() => setValue(numericEnd));
      return;
    }

    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = numericEnd * eased;
      setValue(decimals > 0 ? Number(current.toFixed(decimals)) : Math.round(current));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, numericEnd, duration, decimals, prefersReducedMotion]);

  const formatted =
    decimals > 0 ? Number(value).toFixed(decimals) : String(Math.round(value));
  const display = hasPlus ? `${formatted}+` : `${formatted}${suffix}`;

  return { ref, display, inView };
}
