import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/portfolio/hooks/useTheme.jsx";
import { cn } from "@/utils/cn";

export function ThemeToggle({ className }) {
  const { theme, toggle } = useTheme();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/[0.04] text-text-secondary backdrop-blur-md transition-colors hover:border-white/20 hover:text-text-primary",
        className
      )}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

