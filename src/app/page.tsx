"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Compass,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Award,
  Clock,
  CheckCircle2,
  Star,
  Quote,
} from "lucide-react";
import DestinationCard from "@/components/DestinationCard";
import PackageCard from "@/components/PackageCard";
import DestinationModal from "@/components/DestinationModal";
import ItineraryModal from "@/components/ItineraryModal";
import { useBooking } from "@/components/AppShell";
import { destinations } from "@/data/destinations";
import { packages } from "@/data/packages";
import { testimonials, trustStats, trustBadges } from "@/data/testimonials";
import { Destination, Package } from "@/types";

export default function HomePage() {
  const { openBookingModal } = useBooking();
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const featuredDestinations = destinations.slice(0, 4);
  const popularPackages = packages.slice(0, 3);

  const categories = ["All", "Europe", "Asia", "Africa", "Americas"];

  const filteredDestinations =
    selectedCategory === "All"
      ? featuredDestinations
      : destinations.filter((d) => d.region === selectedCategory).slice(0, 4);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-end justify-center pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Background Image with Cinematic Gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2400&auto=format&fit=crop')`,
          }}
        />
        {/* Subtle Dark & Soft Golden Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#fafaf9]" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center">
          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white tracking-tight leading-[1.08] max-w-5xl">
            Explore the world with{" "}
            <span className="italic font-normal">Wanderly</span>.
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-stone-200 font-light max-w-2xl leading-relaxed">
            Private aviation, clifftop sanctuaries, Michelin gastronomy, and
            rare insider access curated without compromise.
          </p>

          {/* Quick Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/destinations"
              className="px-8 py-4 bg-white text-stone-950 hover:bg-stone-100 rounded-full text-xs uppercase tracking-widest font-semibold transition-all shadow-lg active:scale-95 flex items-center gap-2"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              onClick={() => openBookingModal()}
              className="px-8 py-4 rounded-full border border-white/40 hover:border-white text-white text-xs uppercase tracking-widest font-semibold backdrop-blur-md transition-colors active:scale-95"
            >
              Plan Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* 2. TRUST STATS & ACCREDITATION BANNER */}
      <section className="relative z-10 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustStats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-1">
              <span className="text-3xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
                {stat.value}
              </span>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-700">
                {stat.label}
              </h4>
              <p className="text-[11px] text-stone-500 hidden sm:block">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. FEATURED DESTINATIONS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-600">
              Curated Geography
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 tracking-tight mt-1">
              Featured Sanctuaries
            </h2>
            <p className="text-sm text-stone-500 mt-2 max-w-xl">
              From sun-soaked Italian cliffs to tranquil Japanese bamboo
              forests, explore the globe’s most extraordinary private hideaways.
            </p>
          </div>

          {/* Region Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 shrink-0 ${
                  selectedCategory === cat
                    ? "bg-stone-900 text-white shadow-sm"
                    : "bg-stone-100 hover:bg-stone-200 text-stone-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              onSelect={(d) => setSelectedDestination(d)}
              onBook={(d) =>
                openBookingModal({
                  id: d.id,
                  title: `${d.name} Private Journey`,
                  country: d.country,
                  price: d.startingPrice,
                  duration: d.duration,
                  image: d.image,
                })
              }
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 4. SIGNATURE TRAVEL PACKAGES */}
      <section className="py-24 bg-stone-100/70 border-y border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-600">
              Turnkey Excellence
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-stone-900 tracking-tight">
              Popular Expedition Packages
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Carefully engineered day-by-day itineraries combining ultra-luxury
              boutique stays, private yacht or bush charters, and
              round-the-clock personal concierge service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onBookNow={(p) =>
                  openBookingModal({
                    id: p.id,
                    title: p.title,
                    country: p.country,
                    price: p.price,
                    duration: p.duration,
                    image: p.image,
                  })
                }
                onViewItinerary={(p) => setSelectedPackage(p)}
              />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full shadow-lg transition-all active:scale-95"
            >
              <span>Explore All Travel Packages</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. THE WANDERLY DIFFERENCE (Brand Pillars) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-600">
              The Wanderly Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 tracking-tight leading-tight">
              Travel designed like fine craftsmanship.
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              We reject generic tourist corridors. Our expedition architects
              coordinate directly with sovereign cultural guardians, private
              pilots, and historic villa owners to unlock doors that remain
              firmly closed to others.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">
                    Unprecedented Access
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    After-hours private museum tours, secluded temple
                    ceremonies, and private island landings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">
                    24/7 Ground Concierge
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Your personal liaison handles reservations, luggage
                    transport, and last-minute whim alterations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-stone-900">
                    Virtuoso VIP Privileges
                  </h4>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Complimentary suite upgrades, daily gourmet breakfasts,
                    hotel credits, and flexible early check-ins.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div
              className="h-80 sm:h-96 rounded-3xl bg-cover bg-center shadow-lg transition-transform hover:scale-[1.02] duration-500"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop')`,
              }}
            />
            <div
              className="h-80 sm:h-96 rounded-3xl bg-cover bg-center shadow-lg mt-8 transition-transform hover:scale-[1.02] duration-500"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1510414842594-a61752afb394?q=80&w=1000&auto=format&fit=crop')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
              Verified Patron Stories
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light tracking-tight">
              Words From Our Travelers
            </h2>
            <p className="text-sm text-stone-400">
              Hear how Wanderly created unforgettable memories for visionary
              leaders, collectors, and adventurous families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-stone-800/60 backdrop-blur-md p-8 rounded-3xl border border-stone-700/80 flex flex-col justify-between hover:border-amber-500/40 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-stone-600" />
                  </div>
                  <p className="text-sm text-stone-200 leading-relaxed italic">
                    “{t.comment}”
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-700/60 flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full bg-cover bg-center shrink-0 border border-stone-600"
                    style={{ backgroundImage: `url(${t.avatar})` }}
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {t.name}
                    </h4>
                    <p className="text-xs text-amber-400/90">{t.destination}</p>
                    <p className="text-[10px] text-stone-400">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LUXURY CTA SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="relative rounded-3xl overflow-hidden bg-stone-950 text-white p-8 sm:p-16 lg:p-20 shadow-2xl">
          {/* Background image subtle texture */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
              Start Your Journey
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-tight">
              Ready to design your next extraordinary escape?
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-light leading-relaxed">
              Connect with our senior expedition designers today. Whether you
              have an exact vision or wish to be inspired by our private
              portfolio, we are ready.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={() => openBookingModal()}
                className="w-full sm:w-auto px-8 py-4 bg-white text-stone-950 hover:bg-stone-100 rounded-full text-xs uppercase tracking-widest font-semibold transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Request Itinerary Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/30 hover:border-white text-white text-xs uppercase tracking-widest font-semibold transition-colors text-center"
              >
                Contact Concierge
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Destination Quick-View Modal */}
      <DestinationModal
        destination={selectedDestination}
        isOpen={!!selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onBookNow={(d) => {
          setSelectedDestination(null);
          openBookingModal({
            id: d.id,
            title: `${d.name} Private Journey`,
            country: d.country,
            price: d.startingPrice,
            duration: d.duration,
            image: d.image,
          });
        }}
      />

      {/* Itinerary Modal */}
      <ItineraryModal
        pkg={selectedPackage}
        isOpen={!!selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onBookNow={(p) => {
          setSelectedPackage(null);
          openBookingModal({
            id: p.id,
            title: p.title,
            country: p.country,
            price: p.price,
            duration: p.duration,
            image: p.image,
          });
        }}
      />
    </div>
  );
}
