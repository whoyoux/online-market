import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export async function getBase64(imageUrl: string): Promise<string> {
  console.log("[UTILS] Generating base64 from image source...")
  try {
      const response = await fetch(imageUrl);
      const buffer = await response.arrayBuffer();
      const base64String = Buffer.from(buffer).toString('base64');
      return `data:image/jpeg;base64,${base64String}`;
  } catch (error) {
      console.error('Błąd podczas generowania base64:', error);
      return '';
  }
}