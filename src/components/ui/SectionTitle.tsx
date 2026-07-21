import clsx from "clsx";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        "mb-16 flex flex-col gap-5",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <h2
        className={clsx(
          "font-title font-semibold leading-tight tracking-wide",
          "text-4xl md:text-5xl lg:text-6xl",
          "text-[var(--color-text)]"
        )}
      >
        {title}
      </h2>

      <span
        className="h-[2px] w-20 rounded-full bg-[var(--bg-gradient-gold)] shadow-[var(--shadow-glow)]"
        aria-hidden="true"
      />

      {subtitle && (
        <p
          className={clsx(
            "max-w-3xl text-lg leading-8",
            "text-[var(--color-text-muted)]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}