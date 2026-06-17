import type { Metadata } from "next";
import { AboutPageClient } from "@/components/sections/about/AboutPageClient";

export const metadata: Metadata = {
  title: "About — Hairxpresser.NG | Dorcas Ade-Akanbi",
  description:
    "Learn the story behind Hairxpresser.NG and its founder Dorcas Ade-Akanbi — a passionate hair stylist and educator based in Ilorin, Nigeria.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
