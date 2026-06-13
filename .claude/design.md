# Stitch AI Design Brief — Hairxpresser.NG Premium Animated Website

**Prepared for:** Senior UI/UX Designer (Stitch AI)
**Project:** A premium, 2D advanced-animated, conversion-focused website for a professional hair styling and bridal salon.
**Deliverable:** A fully responsive (desktop + mobile), multi-page website with a distinctive, non-templated layout, refined motion design, and a cohesive luxury identity rooted in the brand's logo.

---

## 1. The Business (Context You Must Design Around)

**Hairxpresser.NG** is a professional, mobile-friendly hair salon based at **University Road, Tanke, Ilorin, Kwara State, Nigeria** — in the heart of the University of Ilorin corridor. It is owned and operated by **Dorcas Ade Akanbi**.

The salon serves a young, style-conscious, event-driven clientele (students, young professionals, brides) and offers premium, high-margin services. It is **not** a generic walk-in barbershop — it is a styling specialist with a bridal lean. The website must feel **elegant, aspirational, feminine, and confident** — the digital equivalent of a high-end beauty studio, not a cheap booking page.

**Core services to feature prominently:**
1. Pro Salon Services (everyday & occasion styling)
2. Bridal Styling (the hero/flagship offering)
3. Frontals & Wigs (installation + styling)
4. Wig Revamping (restoration / refresh — a repeat-revenue service)
5. Training Academy (teaching aspiring stylists)
6. Strands by HX — the linked hair/wig sub-brand (@strands_by_hx.ng)

**Service delivery options to surface everywhere relevant:** Salon visits · Walk-ins · Home service · Travel/on-location (especially for bridal).

**Primary conversion action:** WhatsApp booking (`wa.me/message/XS2G4CUCHANYM1`). This is the single most important CTA on the entire site and must be persistent.

**Key contact data to embed:**
- Phone / WhatsApp: +234 813 779 0960
- Email: dorcasadeakanbi@gmail.com
- Instagram: @hairxpresser.ng · Sub-brand: @strands_by_hx.ng
- Address: University Road, Tanke, Ilorin, Kwara State, Nigeria

---

## 2. Brand Identity & Color System (Derived From the Logo)

The logo is a **golden mustard-yellow square** featuring a **black silhouette of a woman with long, dramatic windswept hair**, with the wordmark **"HairXpresser.NG"** in a black serif typeface. The motion in the hair and the gold-on-black contrast are the heart of the brand — the website must echo that sense of **flow, movement, and luxury**.

### Primary Palette (anchored to the logo)
| Token | Hex | Role |
|---|---|---|
| **Gold / Mustard** | `#E8B22A` (with a richer accent `#D4A017`) | Primary brand color — backgrounds, hero accents, buttons, highlights |
| **Onyx Black** | `#0E0E0E` | Primary text, the silhouette motif, footer, premium dark sections |
| **Soft Ivory / Cream** | `#FBF7EF` | Main light background — warm, never stark white |

### Supporting / Harmonizing Palette (colors that combine well with gold + black)
| Token | Hex | Role |
|---|---|---|
| **Deep Espresso Brown** | `#3A2A1A` | Warm secondary dark — adds richness, used in alternating sections |
| **Champagne / Blush Nude** | `#F3E4D0` | Feminine soft accent — bridal sections, card backgrounds, hover states |
| **Muted Rose Taupe** | `#C9A99A` | Gentle feminine accent for delicate dividers, icons, micro-details |
| **Warm Charcoal** | `#1C1C1C` | Off-black for layered dark surfaces (avoids flat pure black) |

**Rules:**
- Gold and black are the stars; champagne/blush and espresso are the supporting cast that adds femininity and warmth without fighting the logo.
- Use **gold as an accent of intent** (CTAs, active states, key highlights) — never flood every section with full-saturation yellow. Large gold fields should be reserved for the hero and select feature bands.
- Generous negative space. Luxury = breathing room. Never crowd.
- Subtle gold-foil / gradient-shimmer textures are encouraged on dark sections to evoke premium beauty branding.

---

## 3. Typography (Unique, Premium Font Pairing)

The pairing must feel editorial and fashion-forward — think beauty magazine, not corporate.

- **Display / Headings:** **"Playfair Display"** (high-contrast serif) — for hero headlines, page titles, and section headers. It echoes the elegant serif of the logo wordmark and carries luxury. Use it large, with tight leading, for impact.
- **Alternative display option for extra distinction:** **"Cormorant Garamond"** for oversized editorial pull-quotes and service names (delicate, high-fashion feel).
- **Body / UI text:** **"Inter"** or **"Manrope"** (clean, modern sans-serif) — for paragraphs, navigation, buttons, captions, and forms. Keeps the site readable and contemporary against the ornate serifs.
- **Accent / Script (used sparingly):** **"Tangerine"** or **"Pinyon Script"** for a single signature flourish (e.g., the owner's signature, the word "Bridal," or a tagline) — adds a couture, handcrafted touch. Use only once or twice per page, never for body copy.

**Type rules:** Strong hierarchy, dramatic size jumps between display and body, letter-spacing on small uppercase labels, and ample line-height in body for an airy, premium read.

---

## 4. Motion & Animation Direction (2D Advanced Animated)

Motion is central to this brief — but it must be **elegant and purposeful**, never gimmicky. The recurring metaphor is **flowing hair / windswept movement**, drawn straight from the logo.

- **Hero:** A subtle 2D parallax with the flowing-hair silhouette motif animating gently (hair strands drifting / a slow ripple), layered gold gradient that shifts on scroll, and a headline that reveals with a soft mask/clip animation.
- **Scroll-reveal:** Sections fade-and-rise into view with smooth easing (ease-out, ~400–600ms). Staggered reveals for cards and gallery items.
- **Micro-interactions:** Buttons lift + gold-glow on hover; service cards tilt slightly and reveal a "Book Now" overlay; nav links underline with an animated gold sweep.
- **Image treatments:** Before/After wig-revamp sliders with a draggable handle; gallery images with a soft zoom-on-hover and elegant lightbox.
- **Signature flourish:** A thin gold line that "draws" itself across section dividers as the user scrolls (animated stroke), echoing strands of hair.
- **Persistent floating WhatsApp button** with a gentle pulse animation (bottom-right), always visible.
- **Page transitions:** Smooth fade/slide between pages for an app-like, premium feel.

**Performance rule:** Animations must be lightweight and respect `prefers-reduced-motion`. Mobile gets simplified, tasteful versions — no janky heavy effects.

---

## 5. Layout Philosophy (Make It Unique — Not a Template)

Avoid the generic "centered hero + 3-column features + footer" template. Instead:

- Use an **asymmetric, editorial grid** — offset images, overlapping cards, broken-grid sections where text and imagery interlock like a fashion spread.
- Alternate between **full-bleed gold/dark dramatic bands** and **airy ivory editorial sections** to create rhythm.
- Diagonal / curved section dividers and the flowing-strand gold line motif to tie sections together organically (echoing hair movement) rather than flat horizontal blocks.
- A **sticky, transparent-to-solid navigation** that gains an ivory/gold background as the user scrolls past the hero.
- Generous whitespace, oversized editorial type, and intentional overlap of imagery and text for a couture-magazine feel.

---

## 6. Pages & Detailed Specifications

### 6.1 Home (Landing)
The flagship page. Must sell the brand in seconds.

- **Sticky Navigation:** Logo (left), nav links (Home · Services · Bridal · Gallery · Academy · Strands by HX · About · Contact), and a prominent gold **"Book on WhatsApp"** button (right). Transparent over hero, solidifies on scroll.
- **Hero Section:** Full-viewport. Gold gradient background with the animated flowing-hair silhouette motif. Oversized Playfair headline (e.g., *"Hair, Styled to Express You."*), a one-line subhead naming the core promise (bridal, wigs, revamp, training — Ilorin), and dual CTAs: primary **"Book on WhatsApp"** (gold), secondary **"View Our Work"** (outline). Animated scroll-cue at bottom.
- **Trust strip:** A slim band with quick credibility cues — "📍 Tanke, Ilorin" · "Home Service & Travel" · "Walk-ins Welcome" · "Bridal Specialists" — with small animated icons.
- **Signature Services (editorial grid):** Asymmetric layout showcasing the 5 core services as elegant cards with imagery, name (Cormorant), short description, and a hover "Book Now" overlay. Bridal card visually elevated/largest.
- **Bridal Spotlight:** A full-bleed dark/espresso section with champagne accents — large editorial imagery, a script "Bridal" flourish, persuasive copy positioning bridal as the flagship, and a CTA "Book Your Bridal Trial."
- **Before & After (Wig Revamping):** Interactive draggable before/after sliders demonstrating transformation — a strong proof-of-skill section.
- **Why Hairxpresser (Differentiators):** Flexible delivery (salon/walk-in/home/travel), professional finish, training-backed expertise — presented with animated icons in an offset grid.
- **Gallery teaser:** A masonry preview of recent work with a "See Full Gallery" CTA.
- **Mini About / Founder:** A warm intro to Dorcas Ade Akanbi with a portrait, a signature-script flourish, and a personal line of craft/philosophy.
- **Testimonials:** Elegant carousel of client quotes (animated transitions), star ratings in gold.
- **Strands by HX teaser:** A band introducing the hair/wig sub-brand with a link out to its Instagram.
- **Final CTA band:** Bold gold section — "Ready for your transformation?" with the WhatsApp CTA.
- **Footer:** Dark, refined. Logo, full contact details, social links (IG + sub-brand), service-area note (Ilorin + travel), quick links, and an embedded mini map of the Tanke location. Floating WhatsApp button persists.

### 6.2 Services
- Hero banner with page title (Playfair) over a gold/dark gradient.
- Each service as a rich, full-width alternating block (image left/text right, then flipped): **Pro Salon Styling, Bridal, Frontals & Wigs, Wig Revamping, Training** — each with a description, what's included, ideal-for note, and an inline "Book on WhatsApp" CTA.
- A "How Booking Works" 3-step animated timeline (Message → Confirm → Get Styled).
- Service-delivery explainer (Salon / Walk-in / Home / Travel) with icons.
- Closing CTA band.

### 6.3 Bridal (Dedicated Premium Page)
The most luxurious page on the site — this is the flagship, high-value service.
- Cinematic dark hero with champagne/gold accents and a script "Bridal" headline.
- Editorial bridal lookbook gallery (animated, lightbox-enabled).
- "The Bridal Experience" — a step-by-step journey (consultation → trial → wedding-day styling → on-location travel option), presented as an elegant animated vertical timeline.
- Packages section (e.g., Trial, Bridal Day, Bridal Party) — premium pricing cards with gold borders.
- Testimonials from brides.
- Strong "Reserve Your Date" WhatsApp CTA.

### 6.4 Gallery / Portfolio
- Filterable masonry grid (filters: All · Bridal · Frontals · Wigs · Revamp · Styling).
- Hover zoom + elegant lightbox with swipe navigation.
- Dedicated Before/After section for wig revamps with draggable sliders.
- Instagram-feed integration teaser pulling the brand's aesthetic, with a "Follow @hairxpresser.ng" CTA.

### 6.5 Academy / Training
- Aspirational hero positioning the training as a path to a career/skill.
- What you'll learn (curriculum highlights as animated cards).
- Who it's for, format/duration, and outcomes.
- Student/graduate testimonials.
- "Enroll / Enquire on WhatsApp" CTA.

### 6.6 Strands by HX (Sub-Brand)
- A visually distinct but cohesive section/page introducing the hair/wig sub-brand.
- Product/look showcase grid.
- Clear link to @strands_by_hx.ng and a WhatsApp enquiry CTA.

### 6.7 About
- Founder story: Dorcas Ade Akanbi — her craft, philosophy, and the brand's roots in Ilorin's university community.
- Signature-script flourish and a warm portrait-led layout.
- Brand values (professionalism, transformation, accessibility via home service/travel).
- Mini timeline or milestones if applicable.
- CTA to book or follow.

### 6.8 Contact
- Clean, elegant contact page with: WhatsApp (primary, large gold button), phone, email, and Instagram handles.
- Embedded Google Map of University Road, Tanke, Ilorin.
- A simple enquiry form (Name, Service interest dropdown, Preferred date, Message) styled in champagne/ivory with gold focus states — submissions routed to WhatsApp/email.
- Service-area note: salon, walk-ins, home service, and travel availability.
- Business hours block.

---

## 7. Reusable Components (Design System)

- **Buttons:** Primary (solid gold, black text, lift + glow on hover); Secondary (black outline, fills on hover); Ghost (text + animated underline). Rounded-but-refined corners (not pill, not sharp).
- **Service Card:** Image, serif name, short description, hover overlay CTA, subtle tilt on hover.
- **Before/After Slider:** Draggable handle with a gold divider line.
- **Testimonial Card:** Quote, name, gold stars, soft champagne background.
- **Section Divider:** Animated "drawing" gold strand line.
- **Floating WhatsApp Button:** Persistent, pulsing, bottom-right.
- **Nav Bar:** Transparent→solid on scroll, animated link underlines.
- **Footer:** Dark, multi-column, map + contact + social.
- **Lightbox / Gallery Modal:** Elegant, swipeable, dark backdrop.
- **Forms:** Ivory fields, gold focus rings, clear validation.

---

## 8. UX Principles & Rules (Non-Negotiables)

- **Conversion-first:** WhatsApp CTA must be reachable from any scroll position on every page (sticky nav button + floating button).
- **Mobile-first reality:** The audience is overwhelmingly mobile (Nigerian, Instagram-driven). Mobile layout must be flawless, fast, thumb-friendly, with the WhatsApp button always within reach.
- **Performance:** Optimize all imagery (WebP), lazy-load galleries, keep animation lightweight, respect `prefers-reduced-motion`.
- **Accessibility:** WCAG AA contrast (test gold-on-black and black-on-gold carefully), keyboard navigation, alt text, focus states, legible minimum font sizes.
- **Consistency:** One spacing scale, one type scale, one component library applied site-wide.
- **Local trust:** Make the Ilorin/Tanke location, real phone number, and real reviews visible — local credibility converts.
- **Visual restraint:** Premium = curated. Don't over-animate, don't over-color. Let gold, black, and whitespace do the heavy lifting.

---

## 9. Tone & Final Intent

The finished site should feel like a **luxury beauty studio's flagship** — editorial, feminine, confident, and unmistakably premium — while remaining warm, approachable, and frictionless to book. Every scroll should reinforce one message: *Hairxpresser.NG transforms hair beautifully, and booking is one tap away.*

Deliver a layout that is **distinctive and memorable** — asymmetric, editorial, and motion-rich — so it stands apart from every other salon website in the market.
