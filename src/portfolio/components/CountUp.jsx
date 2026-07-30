import { useCountUp } from "@/portfolio/hooks/useCountUp";

export default function CountUp({ value, label, className = "" }) {
  const { ref, display } = useCountUp(value);

  return (
    <div ref={ref} className={className} data-reveal-child>
      <p className="font-heading text-4xl font-bold tracking-tight text-text-primary lg:text-5xl">{display}</p>
      <p className="mt-2 text-sm text-text-secondary">{label}</p>
    </div>
  );
}
