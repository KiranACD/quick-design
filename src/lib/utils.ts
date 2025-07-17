import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines clsx and tailwind-merge for conditional className merging with Tailwind CSS conflict resolution.
 *
 * @param inputs - Class values (strings, conditionals, objects)
 * @returns Merged className string
 *
 * @example
 * cn("px-4", "py-2", isActive && "bg-blue-500")
 * cn("p-4", "p-6") // Returns "p-6" (conflict resolved)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
