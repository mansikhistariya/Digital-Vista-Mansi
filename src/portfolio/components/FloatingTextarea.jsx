import { cn } from "@/utils/cn";

export default function FloatingTextarea({ label, className, id, error, value, ...props }) {
  const inputId = id ?? String(label).toLowerCase().replace(/\s/g, "-");
  const hasValue = Boolean(value);

  return (
    <div className="relative">
      <textarea
        id={inputId}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        placeholder=" "
        className={cn(
          "peer min-h-[140px] w-full resize-y rounded-2xl border bg-white/[0.03] px-5 pt-7 pb-3 text-text-primary backdrop-blur-xl transition-all duration-300",
          "placeholder:text-transparent focus:bg-white/[0.06] focus:outline-none focus:ring-2",
          error
            ? "border-red-400/70 focus:border-red-400/70 focus:ring-red-400/30"
            : "border-border focus:border-accent-blue/50 focus:ring-accent-blue/30",
          className
        )}
        {...props}
      />
      <label
        htmlFor={inputId}
        className={cn(
          "pointer-events-none absolute left-5 text-text-secondary transition-all duration-300",
          "peer-focus:top-3 peer-focus:text-xs peer-focus:text-accent-blue",
          hasValue ? "top-3 text-xs" : "top-6 text-sm"
        )}
      >
        {label}
      </label>
      {error ? (
        <p id={`${inputId}-error`} className="mt-2 text-sm text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
