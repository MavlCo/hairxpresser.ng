import type { Metadata } from "next";
import { ServiceBlock } from "@/components/sections/services/ServiceBlock";
import { BookingSteps } from "@/components/sections/services/BookingSteps";
import { CTABand } from "@/components/sections/home/CTABand";
import { SERVICES } from "@/lib/constants";
import { ServicesPageHero } from "@/components/sections/services/ServicesPageHero";
import { DeliveryModes } from "@/components/sections/services/DeliveryModes";

export const metadata: Metadata = {
  title: "Services — Hairxpresser.NG",
  description:
    "Explore Hairxpresser.NG's full range of services: Pro Salon, Bridal Styling, Frontals & Wigs, Wig Revamping, and Training Academy in Ilorin, Nigeria.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesPageHero />
      {SERVICES.map((service, i) => (
        <ServiceBlock
          key={service.id}
          id={service.id}
          name={service.name}
          description={service.description}
          image={service.image}
          idealFor={service.idealFor}
          includes={service.includes}
          reverse={i % 2 !== 0}
        />
      ))}
      <BookingSteps />
      <DeliveryModes />
      <CTABand />
    </>
  );
}
