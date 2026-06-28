import { cn } from "@/utils/cn";

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-white/[0.04] px-3 py-1 text-xs font-medium text-text-secondary backdrop-blur-sm",
        className
      )}
    >
      {children}
    </span>
  );
}

