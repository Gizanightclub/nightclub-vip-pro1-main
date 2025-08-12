import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to concatenate class names conditionally
export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(' ');
}
export function cnClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
