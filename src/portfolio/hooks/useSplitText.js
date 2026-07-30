import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { usePrefersReducedMotion } from "@/portfolio/hooks/usePrefersReducedMotion";

export function useSplitText(ref, options = {}) {
  const splitRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const {
    types = "lines,words,chars",
    animate = true,
    charStagger = 0.02,
    wordStagger = 0.08,
    delay = 0,
    duration = 1,
    y = 40,
    blur = 6,
    ease = "power4.out",
    onComplete,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el || !animate) return;

    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1 });
      onComplete?.();
      return;
    }

    const split = new SplitType(el, { types });
    splitRef.current = split;

    const chars = split.chars ?? [];

    if (!chars.length && !(split.words ?? []).length) return () => split.revert();

    if (chars.length) {
      gsap.set(chars, { opacity: 0, y, filter: `blur(${blur}px)` });
      gsap.to(chars, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration,
        delay,
        stagger: charStagger,
        ease,
        onComplete,
      });
    } else if ((split.words ?? []).length) {
      const words = split.words;
      gsap.set(words, { opacity: 0, y, filter: `blur(${blur}px)` });
      gsap.to(words, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration,
        delay,
        stagger: wordStagger,
        ease,
        onComplete,
      });
    }

    return () => {
      split.revert();
      splitRef.current = null;
    };
  }, [
    ref,
    prefersReducedMotion,
    types,
    animate,
    charStagger,
    wordStagger,
    delay,
    duration,
    y,
    blur,
    ease,
    onComplete,
  ]);

  return splitRef;
}
