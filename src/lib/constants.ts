export const BRAND = {
  name: "Hairxpresser.NG",
  owner: "Dorcas Ade-Akanbi",
  tagline: "Premium Hair Styling & Bridals Salon",
  location: "University Road, Tanke, Ilorin, Kwara State, Nigeria",
  phone: "+234 813 779 0960",
  email: "dorcasadeakanbi@gmail.com",
  instagram: "@hairxpresser.ng",
  instagramUrl: "https://www.instagram.com/hairxpresser.ng",
  strandsInstagram: "@strands_by_hx.ng",
  strandsInstagramUrl: "https://www.instagram.com/strands_by_hx.ng",
  whatsappLink: "https://wa.me/message/XS2G4CUCHANYM1",
  whatsappNumber: "https://wa.me/2348137790960",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Bridals", href: "/bridal" },
  { label: "Gallery", href: "/gallery" },
  { label: "Academy", href: "/academy" },
  { label: "Strands", href: "/strands" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    id: "wigs",
    name: "Wigs",
    description:
      "Premium quality wigs sourced and curated for every style, texture, and occasion. Find your perfect unit.",
    image: "/images/wig-auburn-bob-bangs.jpeg",
    idealFor: ["Protective styling", "Hair loss solutions", "Style versatility"],
    includes: [
      "Lace front wigs",
      "Full lace wigs",
      "Glueless wigs",
      "Custom units",
    ],
  },
  {
    id: "wig-maintenance-revamp",
    name: "Wig Maintenance & Revamp",
    description:
      "Breathe new life into your old wigs. Full restoration, deep conditioning, restyling, and repair services.",
    image: "/images/wig-auburn-textured-bob.jpeg",
    idealFor: ["Old or tangled wigs", "Color refresh", "Repair & restore"],
    includes: [
      "Deep conditioning",
      "Restyling",
      "Color correction",
      "Knot repair",
    ],
  },
  {
    id: "wig-construction",
    name: "Wig Construction & Reconstruction",
    description:
      "Custom wigs built from scratch or reconstructed to your exact specifications — glueless, bulk, and everything in between.",
    image: "/images/wig-brown-wavy-wip.jpeg",
    idealFor: ["Custom fit", "Bulk orders", "Glueless lovers"],
    includes: [
      "Glueless wig construction",
      "Bulk wig construction",
      "Wig reconstruction",
      "Custom cap sizing",
    ],
  },
  {
    id: "lace-services",
    name: "Lace Repair & Ventilation",
    description:
      "Expert lace repair and hand-ventilation for closures and frontals — restoring and perfecting every unit.",
    image: "/images/wig-black-curly-lacefront.jpeg",
    idealFor: ["Damaged lace", "Thinning hairlines", "Custom ventilation"],
    includes: [
      "Lace repair",
      "Closure ventilation",
      "Frontal ventilation",
      "Hairline reconstruction",
    ],
  },
  {
    id: "wig-styling-installation",
    name: "Wig Styling & Installation",
    description:
      "Flawless wig styling and seamless installation for a natural, undetectable finish every single time.",
    image: "/images/client-curly-lacefront.jpeg",
    idealFor: ["Everyday wear", "Special occasions", "Protective styling"],
    includes: [
      "Wig installation",
      "Wig styling",
      "Bleaching knots",
      "Baby hair styling",
    ],
  },
  {
    id: "hairstyling",
    name: "Hairstyling",
    description:
      "Expert hairstyling for every occasion — from sleek everyday looks to intricate updos and protective styles.",
    image: "/images/client-high-bun-back.jpeg",
    idealFor: ["Special occasions", "Everyday styling", "Protective styles"],
    includes: [
      "Wash & blow-dry",
      "Braiding & weaves",
      "Natural hair care",
      "Updos & finishing",
    ],
  },
  {
    id: "training",
    name: "One-on-One Hands-On Training",
    description:
      "Personalised, intensive training sessions with Dorcas Ade-Akanbi herself — master the craft at your own pace.",
    image: "/images/wig-brown-wavy-wip.jpeg",
    idealFor: ["Aspiring stylists", "Career changers", "Existing stylists"],
    includes: [
      "Hands-on practical sessions",
      "Wig construction training",
      "Lace & ventilation techniques",
      "Business mentorship",
    ],
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Amara O.",
    service: "Wig Revamping",
    text: "Dorcas Ade-Akanbi transformed my wig completely! The revamp was beyond my expectations. She's incredibly talented and professional.",
    stars: 5,
  },
  {
    id: 2,
    name: "Fatima B.",
    service: "Bridals Styling",
    text: "My bridal hair was absolutely stunning. She traveled to our venue and stayed until everything was perfect. I couldn't have asked for more.",
    stars: 5,
  },
  {
    id: 3,
    name: "Chioma E.",
    service: "Training Academy",
    text: "I attended her training academy and I'm now a professional stylist myself. Best investment I've ever made in my career.",
    stars: 5,
  },
] as const;

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: "/images/client-lace-front-smile.jpeg",
    alt: "Client smiling after lace front wig installation at Hairxpresser.NG",
    category: "Wig Installation",
  },
  {
    id: 2,
    src: "/images/client-updo-back.jpeg",
    alt: "Elegant updo bun styling at Hairxpresser.NG salon",
    category: "Styling",
  },
  {
    id: 3,
    src: "/images/client-sleek-bun-logo.jpeg",
    alt: "Sleek bun hairstyle at Hairxpresser.NG",
    category: "Styling",
  },
  {
    id: 4,
    src: "/images/client-high-bun-back.jpeg",
    alt: "High bun with baby hairs styled at Hairxpresser.NG",
    category: "Styling",
  },
  {
    id: 5,
    src: "/images/client-before-natural-afro.jpeg",
    alt: "Natural afro hair before transformation",
    category: "Styling",
  },
  {
    id: 6,
    src: "/images/wig-auburn-bob-bangs.jpeg",
    alt: "Auburn bob wig with bangs from Strands by HX",
    category: "Wigs",
  },
  {
    id: 7,
    src: "/images/wig-black-curly-lacefront.jpeg",
    alt: "Black curly lace front wig unit",
    category: "Wig Installation",
  },
  {
    id: 8,
    src: "/images/client-afro-curly-wig.jpeg",
    alt: "Client wearing voluminous afro curly wig",
    category: "Wigs",
  },
  {
    id: 9,
    src: "/images/client-curly-lacefront.jpeg",
    alt: "Client wearing curly lace front wig installation",
    category: "Wig Installation",
  },
  {
    id: 10,
    src: "/images/client-after-box-braids.jpeg",
    alt: "Box braids styling transformation at Hairxpresser.NG",
    category: "Styling",
  },
  {
    id: 11,
    src: "/images/wig-auburn-textured-bob.jpeg",
    alt: "Auburn textured bob wig styling",
    category: "Revamp",
  },
  {
    id: 12,
    src: "/images/wig-black-kinky-curls.jpeg",
    alt: "Black kinky curls wig unit from Strands by HX",
    category: "Wigs",
  },
] as const;

export const BUSINESS_HOURS = [
  { day: "Monday – Saturday", hours: "8:00 AM – 8:00 PM" },
  { day: "Sunday", hours: "By Appointment Only" },
] as const;
