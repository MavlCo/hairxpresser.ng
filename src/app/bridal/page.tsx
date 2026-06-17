import type { Metadata } from "next";
import { BridalHero } from "@/components/sections/bridal/BridalHero";
import { BridalTimeline } from "@/components/sections/bridal/BridalTimeline";
import { BridalPackages } from "@/components/sections/bridal/BridalPackages";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { CTABand } from "@/components/sections/home/CTABand";
import { BridalGallery } from "@/components/sections/bridal/BridalGallery";

export const metadata: Metadata = {
  title: "Bridals Hair Styling — Hairxpresser.NG",
  description:
    "Flawless bridals hair styling in Ilorin, Nigeria. From bridals trials to wedding day styling and travel. Book your date with Hairxpresser.NG today.",
};

export default function BridalPage() {
  return (
    <>
      <BridalHero />
      <BridalGallery />
      <BridalTimeline />
      <BridalPackages />
      <TestimonialsSection />
      <CTABand />
    </>
  );
}
