import { cn } from "@/utils/cn";
import { useMagnetic } from "@/portfolio/hooks/useMagnetic";

export default function MagneticButton({
  as = "button",
  href,
  className,
  variant = "primary",
  children,
  ...props
}) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic(0.26);

  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm font-medium transition-all duration-300 ease-out";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-accent-blue to-accent-violet text-white shadow-glow hover:shadow-glow-lg hover:scale-[1.02]"
      : variant === "secondary"
        ? "border border-border bg-white/[0.04] text-text-primary backdrop-blur-md hover:border-white/20 hover:bg-white/[0.08]"
        : "text-text-secondary hover:text-text-primary";

  const Comp = as;

  return (
    <Comp
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      href={href}
      data-cursor="pointer"
      data-cursor-scale="1.5"
      className={cn(base, styles, className)}
      {...props}
    >
      {children}
    </Comp>
  );
}

