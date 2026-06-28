import { cn } from "@/utils/cn";

const primaryClasses =
  "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-sm font-semibold text-white shadow-[0_0_28px_rgba(59,130,246,0.35)] transition hover:shadow-[0_0_36px_rgba(139,92,246,0.4)]";

export default function PrimaryButton({
  as: Component = "button",
  href,
  className,
  children,
  type = "button",
  ...props
}) {
  return (
    <Component
      href={href}
      type={Component === "button" ? type : undefined}
      className={cn(primaryClasses, className)}
      {...props}
    >
      {children}
    </Component>
  );
}
