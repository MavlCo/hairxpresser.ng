"use client";

import { MapPin, Home, Users, Heart } from "lucide-react";

const items = [
  { icon: MapPin, text: "Tanke, Ilorin" },
  { icon: Home, text: "Home Service & Travel" },
  { icon: Users, text: "Walk-ins Welcome" },
  { icon: Heart, text: "Bridal Specialists" },
  { icon: MapPin, text: "Tanke, Ilorin" },
  { icon: Home, text: "Home Service & Travel" },
  { icon: Users, text: "Walk-ins Welcome" },
  { icon: Heart, text: "Bridal Specialists" },
];

export function TrustStrip() {
  return (
    <section
      className="bg-champagne/60 border-y border-gold/20 py-4 overflow-hidden"
      aria-label="Service highlights"
    >
      {/* Mobile: marquee */}
      <div className="flex md:hidden overflow-hidden w-full">
        <div className="flex gap-12 animate-marquee whitespace-nowrap shrink-0">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-espresso shrink-0"
            >
              <item.icon
                className="w-4 h-4 text-gold shrink-0"
                aria-hidden="true"
              />
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: static */}
      <div className="hidden md:flex max-w-[1400px] mx-auto px-5 lg:px-20 justify-between items-center">
        {items.slice(0, 4).map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 text-espresso"
          >
            <item.icon
              className="w-5 h-5 text-gold"
              aria-hidden="true"
            />
            <span className="text-sm font-medium tracking-wide">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
