import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Cyclic colorful glass tint classes for glassmorphism cards */
const GLASS_TINTS = ["glass-tint-orange", "glass-tint-blue", "glass-tint-violet", "glass-tint-teal"] as const;

export function glassTint(index: number) {
  return GLASS_TINTS[index % GLASS_TINTS.length];
}
