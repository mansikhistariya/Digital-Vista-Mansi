import { useCallback } from "react";
import { cn } from "@/utils/cn";

export default function RippleButton({
  children,
  className,
  onClick,
  type = "button",
  disabled,
  as: Comp = "button",
  ...props
}) {
  const handleClick = useCallback(
    (event) => {
      if (disabled) return;

      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);

      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        background: rgba(255,255,255,0.35);
        width: ${size}px;
        height: ${size}px;
        left: ${event.clientX - rect.left - size / 2}px;
        top: ${event.clientY - rect.top - size / 2}px;
        pointer-events: none;
      `;

      button.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
      onClick?.(event);
    },
    [disabled, onClick]
  );

  return (
    <Comp
      type={Comp === "button" ? type : undefined}
      disabled={disabled}
      data-cursor="pointer"
      data-cursor-scale="1.6"
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden transition-all duration-300",
        "hover:shadow-glow active:scale-[0.98]",
        className
      )}
      {...props}
    >
      {children}
      <style>{`
        @keyframes ripple {
          to { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </Comp>
  );
}
