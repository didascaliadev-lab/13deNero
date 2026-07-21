import type { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
}

export default function Card({
  title,
  description,
  image,
  imageAlt = "",
  footer,
  children,
  className,
}: CardProps) {
  return (
    <article
      className={clsx(
        "group flex h-full flex-col overflow-hidden",
        "rounded-[var(--radius-lg)]",
        "border border-[var(--color-border)]",
        "bg-[var(--color-surface)]",
        "shadow-[var(--shadow-card)]",
        "transition-all duration-500",
        "hover:-translate-y-2",
        "hover:border-[var(--color-gold)]",
        "hover:shadow-[0_20px_45px_rgba(0,0,0,.55)]",
        className
      )}
    >
      {image && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-7">
        {title && (
          <h3 className="font-title text-2xl font-semibold text-[var(--color-text)]">
            {title}
          </h3>
        )}

        {description && (
          <p className="flex-1 text-[var(--color-text-muted)] leading-7">
            {description}
          </p>
        )}

        {children}

        {footer && (
          <div className="mt-auto pt-2">
            {footer}
          </div>
        )}
      </div>
    </article>
  );
}