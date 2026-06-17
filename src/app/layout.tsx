import type { Metadata } from "next";
import "./globals.css";
import { playfair, inter, pinyon } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: "Hairxpresser.NG — Premium Hair Styling & Bridals | Ilorin",
  description:
    "Hairxpresser.NG is a premium hair styling and bridal salon in Ilorin, Kwara State. Specializing in Pro Salon Services, Bridals Styling, Wig Installation, Wig Revamping, and Training Academy. Book on WhatsApp today.",
  keywords: [
    "hair salon Ilorin",
    "bridal hair Nigeria",
    "wig installation Kwara",
    "hair stylist Ilorin",
    "Hairxpresser NG",
    "Dorcas Ade-Akanbi",
    "Tanke Ilorin salon",
    "bridal styling Nigeria",
    "wig revamping Ilorin",
    "hair training academy Nigeria",
  ],
  openGraph: {
    title: "Hairxpresser.NG — Premium Hair Styling & Bridals",
    description:
      "Premium hair styling, bridal services & training in Ilorin, Nigeria. Walk-ins welcome. Home service available.",
    url: "https://hairxpresser.ng",
    siteName: "Hairxpresser.NG",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hairxpresser.NG — Premium Hair Styling & Bridals",
    description:
      "Premium hair styling, bridal services & training in Ilorin, Nigeria.",
  },
  icons: {
    icon: "/logos/logo.png",
    apple: "/logos/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${pinyon.variable}`}
    >
      <body className="bg-surface text-onyx antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
