import type { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-[1440px]",
  full: "max-w-full",
};

export default function Container({
  children,
  size = "xl",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-5 sm:px-6 lg:px-8 xl:px-10",
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}