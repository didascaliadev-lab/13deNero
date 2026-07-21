import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loading?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  loading = false,
  disabled,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={clsx(
        // Base
        "relative inline-flex items-center justify-center gap-2 overflow-hidden",
        "font-body font-semibold tracking-wide",
        "transition-all duration-300",
        "rounded-[var(--radius-md)]",
        "focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 focus:ring-offset-[var(--color-bg)]",
        "disabled:opacity-50 disabled:pointer-events-none",

        // Tamaños
        {
          "px-5 py-3 text-sm": size === "sm",
          "px-7 py-3.5 text-base": size === "md",
          "px-9 py-4 text-lg": size === "lg",
        },

        // Variantes
        {
          "bg-[var(--color-terracotta)] text-[var(--color-text)] shadow-[var(--shadow-card)] hover:-translate-y-1 hover:bg-[var(--color-terracotta-hover)] hover:shadow-[var(--shadow-glow)]":
            variant === "primary",

          "bg-[var(--color-agave)] text-[var(--color-text)] shadow-[var(--shadow-card)] hover:-translate-y-1 hover:bg-[var(--color-agave-light)]":
            variant === "secondary",

          "border border-[var(--color-gold)] text-[var(--color-gold)] bg-transparent hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)]":
            variant === "outline",

          "bg-transparent text-[var(--color-text)] hover:bg-white/5":
            variant === "ghost",
        },

        className
      )}
      {...props}
    >
      {!loading && leftIcon && (
        <span className="flex items-center">{leftIcon}</span>
      )}

      <span>{children}</span>

      {loading ? (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-[var(--color-gold)]"
          aria-hidden="true"
        />
      ) : (
        rightIcon && (
          <span className="flex items-center">{rightIcon}</span>
        )
      )}
    </button>
  );
}