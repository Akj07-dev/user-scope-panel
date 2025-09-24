import { clsx, type ClassValue } from "clsx";

// Simple class name utility function (replaces tailwind-merge functionality)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
