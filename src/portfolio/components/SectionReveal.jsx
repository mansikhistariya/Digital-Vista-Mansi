import { useRef } from "react";
import { useGsapReveal } from "@/portfolio/hooks/useGsapReveal";
import { cn } from "@/utils/cn";

export default function SectionReveal({ children, className, options = {} }) {
  const ref = useRef(null);
  useGsapReveal(ref, options);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
