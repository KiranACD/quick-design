import React from "react";
import { cn } from "./lib/utils";

/**
 * Common props for all layout components
 */
interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
}

/**
 * Section Component - Semantic wrapper for content sections
 * Provides consistent vertical spacing
 */
export function Section({ children, className, id, style }: ComponentProps) {
  return (
    <section
      className={cn("py-2 sm:py-4", className)}
      id={id}
      style={style}
    >
      {children}
    </section>
  );
}

/**
 * Container component - Centers content with max width and padding
 * Provides responsive horizontal spacing
 */
export function Container({ children, className, id, style }: ComponentProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-full p-4 sm:p-6",
        className,
      )}
      id={id}
      style={style}
    >
      {children}
    </div>
  );
}
