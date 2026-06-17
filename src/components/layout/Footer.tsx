import Link from "next/link";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import Image from "next/image";
import { BRAND, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const serviceLinks = [
    { label: "Bridals", href: "/bridal" },
    { label: "Wigs", href: "/services#wigs" },
    { label: "Wig Maintenance & Revamp", href: "/services#wig-maintenance-revamp" },
    { label: "Wig Construction & Reconstruction", href: "/services#wig-construction" },
    { label: "Lace Repair & Ventilation", href: "/services#lace-services" },
    { label: "Wig Styling & Installation", href: "/services#wig-styling-installation" },
    { label: "Hairstyling", href: "/services#hairstyling" },
    { label: "One-on-One Training", href: "/services#training" },
    { label: "Strands by HX", href: "/strands" },
  ];

  return (
    <footer className="bg-charcoal text-ivory/80" aria-label="Site footer">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-20 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-ivory/10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
              aria-label="Hairxpresser.NG — Home"
            >
              <Image
                src="/logos/logo.png"
                alt="Hairxpresser.NG logo"
                width={32}
                height={32}
                className="object-contain invert"
                aria-hidden="true"
              />
              <span className="font-display font-bold text-lg text-ivory">
                HairXpresser<span className="text-gold">.NG</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-ivory/60 mb-4">
              Premium hair styling & bridal salon in Ilorin, Kwara State.
              Transforming looks, building confidence.
            </p>
            <p className="text-xs text-ivory/40 uppercase tracking-widest">
              Serving Ilorin, Kwara State & Beyond
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-ivory text-sm uppercase tracking-[0.1em] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/60 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-ivory text-sm uppercase tracking-[0.1em] mb-5">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/60 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-ivory text-sm uppercase tracking-[0.1em] mb-5">
              Get In Touch
            </h3>
            <address className="not-italic space-y-4">
              <a
                href={`https://maps.google.com/?q=University+Road+Tanke+Ilorin+Kwara`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-ivory/60 hover:text-gold transition-colors group"
              >
                <MapPin
                  className="w-4 h-4 text-gold mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span>University Road, Tanke,<br />Ilorin, Kwara State</span>
              </a>
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-3 text-sm text-ivory/60 hover:text-gold transition-colors"
              >
                <Phone
                  className="w-4 h-4 text-gold shrink-0"
                  aria-hidden="true"
                />
                {BRAND.phone}
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-3 text-sm text-ivory/60 hover:text-gold transition-colors"
              >
                <Mail
                  className="w-4 h-4 text-gold shrink-0"
                  aria-hidden="true"
                />
                {BRAND.email}
              </a>
              <a
                href={BRAND.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-ivory/60 hover:text-gold transition-colors"
              >
                <Instagram
                  className="w-4 h-4 text-gold shrink-0"
                  aria-hidden="true"
                />
                {BRAND.instagram}
              </a>
              <a
                href={BRAND.strandsInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-ivory/60 hover:text-gold transition-colors"
              >
                <Instagram
                  className="w-4 h-4 text-gold shrink-0"
                  aria-hidden="true"
                />
                {BRAND.strandsInstagram}
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/40">
            © 2025 Hairxpresser.NG. All rights reserved.
          </p>
          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gold hover:underline"
          >
            Book via WhatsApp →
          </a>
        </div>
      </div>
    </footer>
  );
}
