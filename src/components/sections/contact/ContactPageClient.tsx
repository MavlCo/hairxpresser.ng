"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Mail,
  Instagram,
  MapPin,
  Clock,
} from "lucide-react";
import { BRAND, BUSINESS_HOURS } from "@/lib/constants";
import { buildWhatsAppMessage } from "@/lib/utils";

const SERVICES_OPTIONS = [
  "Pro Salon",
  "Bridal Styling",
  "Frontals & Wigs",
  "Wig Revamping",
  "Training Academy",
  "Strands by HX",
  "Other",
];

type FormState = {
  name: string;
  service: string;
  date: string;
  message: string;
};

export function ContactPageClient() {
  const shouldReduceMotion = useReducedMotion();
  const [form, setForm] = useState<FormState>({
    name: "",
    service: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello Hairxpresser.NG! My name is ${form.name}. I'm interested in: ${form.service}. Preferred date: ${form.date || "Flexible"}. ${form.message}`;
    window.open(buildWhatsAppMessage(msg), "_blank", "noopener,noreferrer");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-20 bg-gradient-to-br from-espresso via-charcoal to-onyx"
        aria-label="Contact page hero"
      >
        <div className="max-w-[1400px] mx-auto px-5 lg:px-20 text-center">
          <motion.p
            className="font-flourish text-gold text-3xl mb-3"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Let&apos;s connect
          </motion.p>
          <motion.h1
            className="font-display font-bold text-ivory mb-4"
            style={{ fontSize: "clamp(36px, 6vw, 64px)" }}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-ivory/60 text-lg max-w-xl mx-auto"
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Ready to book? Have questions? We&apos;d love to hear from you. The
            fastest way to reach us is always WhatsApp.
          </motion.p>
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-20 bg-surface" aria-label="Contact details and form">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Contact details */}
            <div>
              {/* Primary CTA */}
              <motion.div
                className="mb-12"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display font-semibold text-onyx text-2xl mb-6">
                  Book Your Appointment
                </h2>
                <motion.a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book on WhatsApp — fastest response"
                  className="flex items-center gap-4 bg-gold text-onyx p-6 w-full hover:bg-gold-dark transition-colors group"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="w-14 h-14 bg-onyx/10 rounded-full flex items-center justify-center shrink-0">
                    <MessageCircle className="w-7 h-7" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Book on WhatsApp</p>
                    <p className="text-onyx/70 text-sm">
                      Fastest response · Available 8am–8pm
                    </p>
                  </div>
                  <span className="ml-auto text-2xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </motion.a>
              </motion.div>

              {/* Contact details */}
              <motion.div
                className="space-y-6 mb-12"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="font-display font-semibold text-onyx text-xl mb-4">
                  Contact Details
                </h3>
                <a
                  href={`tel:${BRAND.phone}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-onyx/40 uppercase tracking-wide">
                      Phone & WhatsApp
                    </p>
                    <p className="text-onyx font-medium group-hover:text-gold transition-colors">
                      {BRAND.phone}
                    </p>
                  </div>
                </a>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-onyx/40 uppercase tracking-wide">Email</p>
                    <p className="text-onyx font-medium group-hover:text-gold transition-colors">
                      {BRAND.email}
                    </p>
                  </div>
                </a>
                <a
                  href={BRAND.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-onyx/40 uppercase tracking-wide">Instagram</p>
                    <p className="text-onyx font-medium group-hover:text-gold transition-colors">
                      {BRAND.instagram}
                    </p>
                  </div>
                </a>
                <a
                  href={BRAND.strandsInstagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-onyx/40 uppercase tracking-wide">
                      Strands by HX
                    </p>
                    <p className="text-onyx font-medium group-hover:text-gold transition-colors">
                      {BRAND.strandsInstagram}
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-onyx/40 uppercase tracking-wide">Location</p>
                    <p className="text-onyx font-medium">
                      University Road, Tanke,<br />
                      Ilorin, Kwara State, Nigeria
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Business hours */}
              <motion.div
                className="bg-champagne/40 p-6"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-gold" aria-hidden="true" />
                  <h3 className="font-display font-semibold text-onyx text-lg">
                    Business Hours
                  </h3>
                </div>
                <ul className="space-y-2">
                  {BUSINESS_HOURS.map((h, i) => (
                    <li
                      key={i}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-onyx/60">{h.day}</span>
                      <span className="font-medium text-onyx">{h.hours}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-onyx/40 mt-3">
                  Walk-ins welcome during business hours
                </p>
              </motion.div>
            </div>

            {/* Right: Enquiry form */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display font-semibold text-onyx text-2xl mb-6">
                Send an Enquiry
              </h2>
              <p className="text-onyx/60 text-sm mb-8">
                Fill in your details below. Submitting will open WhatsApp with
                your message pre-filled for the fastest response.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-[0.1em] text-onyx/50 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Amara Johnson"
                    className="w-full border border-champagne bg-white px-4 py-3 text-onyx placeholder-onyx/30 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-semibold uppercase tracking-[0.1em] text-onyx/50 mb-2"
                  >
                    Service Interested In *
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-champagne bg-white px-4 py-3 text-onyx focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-date"
                    className="block text-xs font-semibold uppercase tracking-[0.1em] text-onyx/50 mb-2"
                  >
                    Preferred Date
                  </label>
                  <input
                    id="contact-date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    className="w-full border border-champagne bg-white px-4 py-3 text-onyx focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-[0.1em] text-onyx/50 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us more about what you're looking for…"
                    className="w-full border border-champagne bg-white px-4 py-3 text-onyx placeholder-onyx/30 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gold text-onyx font-semibold py-5 flex items-center justify-center gap-3 hover:bg-gold-dark transition-colors duration-300"
                  whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  aria-label="Send enquiry via WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  Send via WhatsApp
                </motion.button>

                <p className="text-xs text-onyx/40 text-center">
                  Clicking submit opens WhatsApp with your message pre-filled.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="h-96" aria-label="Salon location map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0!2d4.5833!3d8.4900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10364d4c!2sUniversity+Road%2C+Tanke%2C+Ilorin%2C+Kwara+State!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hairxpresser.NG salon location — University Road, Tanke, Ilorin"
        />
      </section>
    </>
  );
}
