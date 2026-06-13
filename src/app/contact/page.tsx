import type { Metadata } from "next";
import { ContactPageClient } from "@/components/sections/contact/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact — Hairxpresser.NG",
  description:
    "Get in touch with Hairxpresser.NG in Ilorin, Nigeria. Book via WhatsApp, call us, or visit our salon on University Road, Tanke, Ilorin.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
