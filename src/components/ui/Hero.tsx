import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import Container from "../ui/Container";
import Button from "../ui/Button";

interface HeroButton {
  label: string;
  onClick?: () => void;
  href?: string;
}

interface HeroProps {
  title: string;
  subtitle?: string;

  image: string;
  mobileImage?: string;
  imageAlt?: string;

  height?: "sm" | "md" | "lg" | "screen";
  align?: "left" | "center";

  overlay?: boolean;
  overlayStrength?: "light" | "medium" | "dark";

  mobileImagePosition?: CSSProperties["objectPosition"];
  desktopImagePosition?: CSSProperties["objectPosition"];

  children?: ReactNode;

  primaryButton?: HeroButton;
  secondaryButton?: HeroButton;

  className?: string;
}

const heightClasses = {
  sm: "min-h-[420px] md:min-h-[460px]",
  md: "min-h-[560px] md:min-h-[620px]",
  lg: "min-h-[650px] md:min-h-[700px] lg:min-h-[760px]",
  screen: "min-h-[100svh]",
};

const overlayClasses = {
  light: "bg-black/30",
  medium: "bg-black/50",
  dark: "bg-black/65",
};

function isInternalLink(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

interface HeroButtonLinkProps {
  button: HeroButton;
  variant?: "primary" | "outline";
}

function HeroButtonLink({
  button,
  variant = "primary",
}: HeroButtonLinkProps) {
const content = (
  <Button
    variant={variant === "outline" ? "outline" : "primary"}
    onClick={!button.href ? button.onClick : undefined}
    className="w-auto px-5 py-2.5 text-sm sm:px-7 sm:py-3 sm:text-base">
    {button.label}
  </Button>
);

  if (!button.href) {
    return content;
  }

  if (isInternalLink(button.href)) {
    return (
      <Link to={button.href} className="w-full sm:w-auto">
        {content}
      </Link>
    );
  }

  return (
    <a
      href={button.href}
      className="w-full sm:w-auto"
      target="_blank"
      rel="noreferrer"
    >
      {content}
    </a>
  );
}

export default function Hero({
  title,
  subtitle,
  image,
  mobileImage,
  imageAlt = "",
  height = "lg",
  align = "left",
  overlay = true,
  overlayStrength = "medium",
  mobileImagePosition = "center center",
  desktopImagePosition = "center center",
  primaryButton,
  secondaryButton,
  children,
  className,
}: HeroProps) {
  return (
    <section
      className={clsx(
        "relative isolate flex overflow-hidden",
        heightClasses[height],
        className
      )}
    >
      {/* Imagen móvil */}
      <img
        src={mobileImage ?? image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover md:hidden"
        style={{
          objectPosition: mobileImagePosition,
        }}
      />

      {/* Imagen tablet y escritorio */}
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
        style={{
          objectPosition: desktopImagePosition,
        }}
      />

      {/* Overlay general */}
      {overlay && (
        <div
          className={clsx(
            "absolute inset-0",
            overlayClasses[overlayStrength]
          )}
        />
      )}

      {/* Gradiente para mejorar la lectura */}
      <div
        className={clsx(
          "absolute inset-0",
          align === "left"
            ? "bg-gradient-to-r from-black/65 via-black/25 to-transparent"
            : "bg-gradient-to-b from-black/20 via-transparent to-black/45"
        )}
      />

     
      <Container
        size="2xl"
        className="relative z-10 flex min-h-[inherit] w-full items-center"
      >
        <div
          className={clsx(
            "w-full py-24 sm:py-28 md:py-32",
            align === "center"
              ? "mx-auto max-w-4xl text-center"
              : "max-w-3xl text-left"
          )}
        >
        <h1 className="mb-5 max-w-[12ch] font-title text-[clamp(3rem,11vw,4.5rem)] leading-[0.95] text-white sm:mb-6 md:max-w-none md:text-6xl lg:text-7xl">
  {title}
</h1>

       {subtitle && (
          <p
            className={clsx(
            "mb-8 max-w-2xl text-[1.05rem] font-body leading-7 text-gold sm:text-2xl sm:leading-8 md:mb-10",
            align === "center" && "mx-auto"
            )}
          > 
            {subtitle}
          </p>

          )}

          {(primaryButton || secondaryButton) && (
            <div
              className={clsx(
                "flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:gap-4",
                align === "center"
                  ? "items-center justify-center"
                  : "justify-start"
              )}
            >
              {primaryButton && (
                <HeroButtonLink button={primaryButton} />
              )}

              {secondaryButton && (
                <HeroButtonLink
                  button={secondaryButton}
                  variant="outline"
                />
              )}
            </div>
)}

          {children}
        </div>
      </Container>
    </section>
  );
}