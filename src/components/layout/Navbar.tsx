"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { NAV_LINKS, BRAND } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navTextColor =
    isHome && !scrolled ? "text-ivory" : "text-onyx";
  const logoColor =
    isHome && !scrolled ? "text-gold" : "text-gold";
  const bgClasses = scrolled
    ? "bg-ivory/95 backdrop-blur-[20px] shadow-[0_2px_20px_rgba(14,14,14,0.08)]"
    : isHome
    ? "bg-transparent"
    : "bg-ivory/95 backdrop-blur-[20px]";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${bgClasses}`}
    >
      <nav
        className="max-w-[1400px] mx-auto px-5 lg:px-20 h-20 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
          aria-label="Hairxpresser.NG — Home"
        >
          <Image
            src="/logos/logo.png"
            alt="Hairxpresser.NG logo"
            width={36}
            height={36}
            className={`object-contain ${isHome && !scrolled ? "invert" : ""}`}
            aria-hidden="true"
          />
          <span className={`font-display font-bold text-xl tracking-tight ${logoColor}`}>
            HairXpresser<span className="text-gold">.NG</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-gold ${
                  pathname === link.href
                    ? "text-gold"
                    : navTextColor
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={BRAND.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book on WhatsApp"
          className="hidden lg:inline-flex items-center gap-2 bg-gold text-onyx text-sm font-semibold px-6 py-3 hover:bg-gold-dark transition-colors duration-300"
        >
          Book on WhatsApp
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 ${navTextColor}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-ivory border-t border-champagne"
          >
            <nav className="px-5 py-6 flex flex-col gap-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block py-3 text-base font-medium border-b border-champagne/50 transition-colors hover:text-gold ${
                      pathname === link.href ? "text-gold" : "text-onyx"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <a
                  href={BRAND.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gold text-onyx font-semibold py-4"
                  onClick={() => setMenuOpen(false)}
                >
                  Book on WhatsApp
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
