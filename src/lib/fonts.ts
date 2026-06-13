import { Playfair_Display, Inter, Pinyon_Script } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const pinyon = Pinyon_Script({
  subsets: ["latin"],
  variable: "--font-pinyon",
  display: "swap",
  weight: "400",
});
