# 🏔️ Wanderly — Bespoke Luxury Travel & Curated Expeditions

> **Wanderly** is a high-end, editorial travel agency web application built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS**. Inspired by Apple's minimalist design language and premier luxury hospitality brands, Wanderly offers a seamless, immersive experience for discerning explorers seeking tailor-made private journeys.

---

## ✨ Key Highlights & Features

### 🏛️ 1. Complete Multi-Page Architecture
- **Home (`/`)**:
  - Full-screen cinematic hero with curated imagery and refined typography.
  - Social proof counter (*12+ Years of Excellence, 48+ Countries, 15,000+ Patrons*).
  - Featured destination sanctuary cards with interactive region filtering.
  - Turnkey expedition packages with direct reservation integration.
  - Core brand pillars (*Unprecedented Access, 24/7 Ground Concierge, Virtuoso VIP Privileges*).
  - Verified patron testimonials and luxury consultation CTA.
- **Destinations (`/destinations`)**:
  - Live multi-factor filtering: search query, geographic region pills, travel styles, and dynamic price range slider.
  - Interactive destination preview modal with curated highlights, amenities, and instant booking triggers.
- **Packages (`/packages`)**:
  - Curated multi-day itineraries with duration selector and real-time investment calculation.
  - Day-by-day interactive timeline modal detailing every day's private experiences, transfers, and accommodations.
- **About (`/about`)**:
  - Editorial brand origin story, expedition architect bios, and verified accreditation seals (*Virtuoso Member, Traveller Made, ATOL Protected*).
  - 100% Carbon-Neutral commitment and conservation pledge.
- **Contact (`/contact`)**:
  - Bespoke consultation inquiry form with client-side validation.
  - Interactive flagship atelier selector (**London**, **New York**, **Tokyo**, **Zurich**) with simulated radar coordinates.
  - Expandable FAQ accordion.

### 💎 2. Premium Design System & UI/UX
- **Custom Mountain Brand Mark & Favicon**: Minimalist continuous line-art mountain silhouette, responsive across dark and light surfaces.
- **Sticky Glassmorphic Navigation**: Adapts between transparent overlay (hero) and frosted glass (`backdrop-blur-xl`) upon scroll, with mobile drawer menu.
- **Interactive Reservation Drawer**: Instant party size calculator, departure calendar, investment calculation, and reference number generation.
- **Universal Toast Notifications**: Instant, elegant feedback for newsletter signups and inquiries.
- **Responsive Across All Devices**: Fluid typography and grid layouts optimized for mobile, tablet, and ultra-wide screens.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router & Turbopack) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Typography** | `Plus Jakarta Sans` (Body) & `Playfair Display` (Serif Editorial) |

---

## 📂 Project Structure

```bash
wanderly-travel/
├── public/
│   ├── favicon.svg            # Custom SVG mountain logo favicon
│   └── icon.svg
├── src/
│   ├── app/
│   │   ├── about/             # Editorial About & Leadership page
│   │   ├── contact/           # Ateliers & Bespoke consultation form
│   │   ├── destinations/      # Filterable destination sanctuary catalog
│   │   ├── packages/          # Turnkey expedition itineraries
│   │   ├── globals.css        # Tailored design tokens & utility classes
│   │   ├── layout.tsx         # Global RootLayout, font loader, metadata
│   │   └── page.tsx           # Luxury Homepage
│   ├── components/
│   │   ├── AppShell.tsx       # Global layout provider & modal orchestration
│   │   ├── BookingModal.tsx   # Interactive booking drawer & cost calculator
│   │   ├── DestinationCard.tsx# Destination catalog card component
│   │   ├── DestinationModal.tsx# Deep-dive destination modal
│   │   ├── Footer.tsx         # Luxury editorial footer & dispatch signup
│   │   ├── ItineraryModal.tsx # Day-by-day expedition timeline modal
│   │   ├── Navbar.tsx         # Dynamic sticky glassmorphic navigation
│   │   ├── PackageCard.tsx    # Turnkey expedition package card
│   │   ├── Toast.tsx          # Custom toast notification system
│   │   └── WanderlyLogoMark.tsx# Scalable mountain SVG logo component
│   ├── data/
│   │   ├── destinations.ts    # Sanctuary destination dataset
│   │   ├── packages.ts        # Expedition packages dataset
│   │   └── testimonials.ts    # Patron editorial quotes
│   └── types/
│       └── index.ts           # Shared TypeScript interfaces
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.18+ or later
- **npm**, **yarn**, or **pnpm**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmedaalam/wanderly-travel-website.git
   cd wanderly-travel-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Production Build

To test and build the production bundle:

```bash
npm run build
npm run start
```

---

## 🌐 Deployment

This application is ready for zero-configuration deployment on [Vercel](https://vercel.com):

1. Push your changes to GitHub:
   ```bash
   git add .
   git commit -m "Update Wanderly travel website"
   git push origin main
   ```
2. Import the repository into your [Vercel Dashboard](https://vercel.com/new).
3. Vercel automatically detects Next.js and deploys your site with global edge caching and instant SSL.

---

## 📄 License

This project is licensed under the MIT License.
