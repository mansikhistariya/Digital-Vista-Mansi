import { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import FadeUp from "@/portfolio/components/FadeUp";
import SectionHeader from "@/portfolio/components/SectionHeader";
import { testimonials } from "@/portfolio/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const current = useMemo(() => testimonials[index], [index]);

  const next = useCallback(
    () => setIndex((currentIndex) => (currentIndex + 1) % testimonials.length),
    []
  );
  const prev = useCallback(
    () => setIndex((currentIndex) => (currentIndex - 1 + testimonials.length) % testimonials.length),
    []
  );
  const goTo = useCallback((nextIndex) => setIndex(nextIndex), []);

  return (
    <section id="testimonials" className="section-padding border-t border-border bg-bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp>
          <SectionHeader variant="label" label="Testimonials" title="Trusted by leaders" />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="relative mx-auto mt-10 max-w-3xl">
            <Quote className="absolute -top-4 -left-2 h-10 w-10 text-accent-blue/30" aria-hidden />
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="glass-card px-10 py-8 text-center"
              >
                <p className="text-xl leading-relaxed font-medium text-text-primary lg:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <p className="font-heading font-semibold text-text-primary">{current.author}</p>
                  <p className="text-sm text-text-secondary">
                    {current.role} · {current.company}
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-secondary transition hover:border-accent-blue/40 hover:text-text-primary"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, testimonialIndex) => (
                  <button
                    key={testimonialIndex}
                    type="button"
                    aria-label={`Go to testimonial ${testimonialIndex + 1}`}
                    onClick={() => goTo(testimonialIndex)}
                    className={`h-1.5 rounded-full transition-all ${
                      testimonialIndex === index ? "w-8 bg-accent-blue" : "w-1.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text-secondary transition hover:border-accent-blue/40 hover:text-text-primary"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
