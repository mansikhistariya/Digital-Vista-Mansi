import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotion } from "@/portfolio/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export function useGsapReveal(ref, options = {}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animated = useRef(false);

  const {
    y = 48,
    scale = 0.95,
    blur = 8,
    duration = 1,
    delay = 0,
    stagger = 0.08,
    childSelector = "[data-reveal-child]",
    once = true,
    start = "top 85%",
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el || animated.current) return;

    if (prefersReducedMotion) {
      gsap.set(el, { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" });
      const children = el.querySelectorAll(childSelector);
      gsap.set(children.length ? children : el, { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" });
      animated.current = true;
      return;
    }

    const targets = el.querySelectorAll(childSelector);
    const animateTargets = targets.length ? targets : [el];

    gsap.set(animateTargets, {
      opacity: 0,
      y,
      scale,
      filter: `blur(${blur}px)`,
    });

    const tween = gsap.to(animateTargets, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration,
      delay,
      stagger,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start,
        once,
        toggleActions: "play none none none",
      },
    });

    animated.current = true;

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [ref, prefersReducedMotion, y, scale, blur, duration, delay, stagger, childSelector, once, start]);
}

export function useGsapStagger(ref, options = {}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const { selector = "[data-stagger]", y = 32, duration = 0.8, stagger = 0.1, start = "top 80%" } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll(selector);
    if (!items.length) return;

    if (prefersReducedMotion) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(items, { opacity: 0, y });

    const tween = gsap.to(items, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start,
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [ref, prefersReducedMotion, selector, y, duration, stagger, start]);
}
