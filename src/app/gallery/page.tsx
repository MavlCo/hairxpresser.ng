import type { Metadata } from "next";
import { GalleryPageClient } from "@/components/sections/gallery/GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery — Hairxpresser.NG",
  description:
    "Explore our gallery of stunning hairstyles, bridal looks, wig installations, and transformations by Hairxpresser.NG in Ilorin, Nigeria.",
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
