import type { Metadata } from "next";
import { AcademyHero } from "@/components/sections/academy/AcademyHero";
import { CurriculumCards } from "@/components/sections/academy/CurriculumCards";
import { AcademyProfiles } from "@/components/sections/academy/AcademyProfiles";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { CTABand } from "@/components/sections/home/CTABand";

export const metadata: Metadata = {
  title: "Training Academy — Hairxpresser.NG",
  description:
    "Launch or level up your styling career with the Hairxpresser.NG Training Academy in Ilorin, Nigeria. Hands-on training, certification, and mentorship.",
};

export default function AcademyPage() {
  return (
    <>
      <AcademyHero />
      <CurriculumCards />
      <AcademyProfiles />
      <TestimonialsSection />
      <CTABand />
    </>
  );
}
