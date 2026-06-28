import { useEffect, useState } from "react";

function getMediaQueryState(query) {
  if (typeof window === "undefined") return false;
  return window.matchMedia(query).matches;
}

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    getMediaQueryState("(prefers-reduced-motion: reduce)")
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (event) => setPrefersReducedMotion(event.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return prefersReducedMotion;
}

export function useFinePointer() {
  const [hasFinePointer, setHasFinePointer] = useState(() =>
    getMediaQueryState("(hover: hover) and (pointer: fine)")
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onChange = (event) => setHasFinePointer(event.matches);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return hasFinePointer;
}
