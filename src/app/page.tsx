import { HeroSection } from "@/components/sections/home/HeroSection";
import { TrustStrip } from "@/components/sections/home/TrustStrip";
import { ServicesGrid } from "@/components/sections/home/ServicesGrid";
import { BridalSpotlight } from "@/components/sections/home/BridalSpotlight";
import { BeforeAfterSection } from "@/components/sections/home/BeforeAfterSection";
import { WhySection } from "@/components/sections/home/WhySection";
import { GalleryTeaser } from "@/components/sections/home/GalleryTeaser";
import { FounderSection } from "@/components/sections/home/FounderSection";
import { TestimonialsSection } from "@/components/sections/home/TestimonialsSection";
import { StrandsTeaser } from "@/components/sections/home/StrandsTeaser";
import { CTABand } from "@/components/sections/home/CTABand";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <ServicesGrid />
      <BridalSpotlight />
      <BeforeAfterSection />
      <WhySection />
      <GalleryTeaser />
      <FounderSection />
      <TestimonialsSection />
      <StrandsTeaser />
      <CTABand />
    </>
  );
}
