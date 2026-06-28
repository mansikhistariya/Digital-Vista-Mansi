import { cn } from "@/utils/cn";

export default function Textarea({ label, className, id, rows = 5, ...props }) {
  const inputId = id ?? String(label).toLowerCase().replace(/\s/g, "-");
  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="text-sm font-medium text-text-secondary">
        {label}
      </label>
      <textarea
        id={inputId}
        rows={rows}
        className={cn(
          "w-full resize-none rounded-2xl border border-border bg-white/[0.03] px-5 py-4 text-text-primary backdrop-blur-xl transition-all duration-300 placeholder:text-text-secondary/60 focus:border-accent-blue/50 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-accent-blue/30",
          className
        )}
        {...props}
      />
    </div>
  );
}

