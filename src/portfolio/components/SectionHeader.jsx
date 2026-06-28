import { cn } from "@/utils/cn";

export default function SectionHeader({
  label,
  title,
  description,
  variant = "dot",
  className,
  titleClassName,
  descriptionClassName,
}) {
  return (
    <div className={className}>
      {variant === "dot" ? (
        <div className="mb-3 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-sm bg-accent-blue" aria-hidden />
          <span className="text-xs font-semibold tracking-[0.2em] text-text-secondary uppercase">
            {label}
          </span>
        </div>
      ) : (
        <p className="mb-2 text-sm font-medium tracking-widest text-accent-cyan uppercase">{label}</p>
      )}

      {title && (
        <h2
          className={cn(
            "font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl",
            variant === "label" && "font-semibold",
            titleClassName
          )}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={cn(
            "mt-3 max-w-2xl text-lg leading-relaxed text-text-secondary",
            descriptionClassName
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
