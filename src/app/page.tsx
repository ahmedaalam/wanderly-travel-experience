"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Compass,
  Plane,
  ShieldCheck,
  Quote,
  Star,
  Crown,
  Play,
} from "lucide-react";
import DestinationCard from "@/components/DestinationCard";
import DestinationModal from "@/components/DestinationModal";
import ItineraryModal from "@/components/ItineraryModal";
import { useBooking } from "@/components/AppShell";
import { destinations } from "@/data/destinations";
import { testimonials } from "@/data/testimonials";
import { Destination, Package } from "@/types";

export default function HomePage() {
  const { openBookingModal } = useBooking();
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Europe", "Asia", "Africa", "Americas"];

  const filteredDestinations =
    selectedCategory === "All"
      ? destinations.slice(0, 4)
      : destinations.filter((d) => d.region === selectedCategory).slice(0, 4);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#fbfbfd]">
      {/* ========================================================
          1. HERO SECTION (Apple Cinematic Minimalism)
          ======================================================== */}
      <section className="relative min-h-[94vh] lg:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Cinematic Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-100"
          style={{
            backgroundImage: `url('/hero-bg.jpg')`,
          }}
        />

        {/* Soft Dark Vignette & Atmospheric Gradient for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/45" />

        {/* Hero Content with Smooth Framer Motion Entry */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center pt-20 pb-16"
        >
          {/* Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-white tracking-tight leading-[1.1] max-w-4xl">
            Discover Journeys
            <br className="hidden sm:inline" />
            {" "}Beyond Destinations
          </h1>

          {/* Subtext matching reference image */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-100/90 font-light max-w-2xl leading-relaxed">
            More than just a trip — it&apos;s a collection of once-in-a-lifetime experiences, crafted for curious souls.
          </p>

          {/* Pill Action Buttons matching reference image */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">
            <Link
              href="/destinations"
              className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-medium tracking-wide transition-all shadow-lg shadow-indigo-950/30 active:scale-95 flex items-center gap-2"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={() => openBookingModal()}
              className="px-6 py-3.5 rounded-full text-white/95 hover:text-white text-sm font-light tracking-wide transition-all flex items-center gap-2.5 active:scale-95 group"
            >
              <span>Watch Our Story</span>
              <span className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center transition-transform group-hover:scale-110 bg-white/5 backdrop-blur-xs">
                <Play className="w-3 h-3 fill-white translate-x-0.5" />
              </span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* ========================================================
          2. DESTINATIONS SECTION (Editorial Grid Layout)
          ======================================================== */}
      <section className="py-28 sm:py-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600">
              Curated Geography
            </span>
            <h2 className="text-4xl sm:text-5xl font-light text-slate-900 tracking-tight">
              Featured Sanctuaries.
            </h2>
            <p className="text-base text-slate-500 font-light max-w-xl">
              From sun-soaked Italian cliffs to serene Japanese bamboo groves,
              explore our private portfolio of unforgettable escapes.
            </p>
          </div>

          {/* Apple-style Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-slate-100/80 border border-slate-200/60 overflow-x-auto scrollbar-none self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wider transition-all duration-200 shrink-0 ${
                  selectedCategory === cat
                    ? "bg-white text-slate-950 shadow-xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Destination Grid */}
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

        {/* Editorial Link */}
        <div className="mt-16 text-center">
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-slate-900 hover:text-indigo-600 transition-colors py-2 group"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* ========================================================
          3. EXPERIENCE SECTION (Storytelling Alternating Layout)
          ======================================================== */}
      <section className="py-28 sm:py-36 border-t border-slate-200/60 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28 sm:space-y-36">
          {/* Section Introduction */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600">
              The Wanderly Philosophy
            </span>
            <h2 className="text-4xl sm:text-6xl font-light text-slate-900 tracking-tight leading-tight">
              Travel is not booked.
              <br />
              <span className="font-normal text-slate-700">
                It is experienced through storytelling.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-500 font-light leading-relaxed max-w-2xl mx-auto pt-2">
              We reject the noise of standard tourism. Every expedition is an
              architectural composition of rare access, silent sanctuaries, and
              unhurried moments.
            </p>
          </div>

          {/* Story Chapter 01: Unprecedented Access */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Chapter 01
              </span>
              <h3 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight leading-snug">
                Where sovereign doors unlock.
              </h3>
              <p className="text-base text-slate-600 font-light leading-relaxed">
                After-hours private museum tours, secluded temple ceremonies
                guided by sovereign guardians, and private island landings
                remain firmly closed to typical travelers. With Wanderly, you
                step across thresholds undisturbed.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                <span className="px-3.5 py-1 rounded-full bg-slate-100">
                  Private Curators
                </span>
                <span className="px-3.5 py-1 rounded-full bg-slate-100">
                  Zero Queues
                </span>
                <span className="px-3.5 py-1 rounded-full bg-slate-100">
                  Closed-Door Entry
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                className="aspect-[16/10] rounded-3xl bg-cover bg-center overflow-hidden apple-card-shadow transition-transform duration-700 hover:scale-[1.01]"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop')`,
                }}
              />
            </div>
          </motion.div>

          {/* Story Chapter 02: Sanctuaries of Absolute Calm */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div
                className="aspect-[16/10] rounded-3xl bg-cover bg-center overflow-hidden apple-card-shadow transition-transform duration-700 hover:scale-[1.01]"
                style={{
                  backgroundImage: `url('/chapter-02.jpg')`,
                }}
              />
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Chapter 02
              </span>
              <h3 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight leading-snug">
                Architecture in harmony with the wild.
              </h3>
              <p className="text-base text-slate-600 font-light leading-relaxed">
                We select hideaways that harmonize with untouched landscapes:
                cliffside villas suspended above Mediterranean surf, historic
                cedar ryokans tucked into mist-veiled forests, and private
                luxury safari lodges overlooking ancient migrations.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                <span className="px-3.5 py-1 rounded-full bg-slate-100">
                  Private Infinity Pools
                </span>
                <span className="px-3.5 py-1 rounded-full bg-slate-100">
                  Dedicated Estate Staff
                </span>
                <span className="px-3.5 py-1 rounded-full bg-slate-100">
                  Panoramic Privacy
                </span>
              </div>
            </div>
          </motion.div>

          {/* Story Chapter 03: Dedicated Expedition Architects */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          >
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Chapter 03
              </span>
              <h3 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight leading-snug">
                Every detail choreographed in silence.
              </h3>
              <p className="text-base text-slate-600 font-light leading-relaxed">
                Your personal senior expedition architect plans every detail
                ahead of time, while an on-the-ground concierge handles
                reservations, private aviation tarmac access, and spontaneous
                itinerary adjustments with zero friction.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                <span className="px-3.5 py-1 rounded-full bg-slate-100">
                  24/7 Ground Liaison
                </span>
                <span className="px-3.5 py-1 rounded-full bg-slate-100">
                  Private Aviation
                </span>
                <span className="px-3.5 py-1 rounded-full bg-slate-100">
                  Virtuoso Privileges
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                className="aspect-[16/10] rounded-3xl bg-cover bg-center overflow-hidden apple-card-shadow transition-transform duration-700 hover:scale-[1.01]"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop')`,
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          4. HIGHLIGHTS SECTION (Minimal Feature Blocks, No Heavy Cards)
          ======================================================== */}
      <section className="py-28 sm:py-36 bg-slate-50/70 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600">
              The Wanderly Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-slate-900 tracking-tight">
              Craftsmanship at every altitude.
            </h2>
            <p className="text-base text-slate-500 font-light">
              Purity of execution, uncompromising discretion, and meticulous
              attention to the unexpressed wish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Feature 1 */}
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Crown className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 tracking-tight">
                Sovereign Heritage Access
              </h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                Direct partnerships with cultural curators, historic estates,
                and private sanctuary owners.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Plane className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 tracking-tight">
                Curated Private Aviation
              </h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                Point-to-point charters connecting secluded bush airstrips and
                private alpine runways.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Compass className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 tracking-tight">
                24/7 Ground Liaison
              </h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                Invisible, anticipatory service ensuring total peace of mind
                throughout each passage.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-medium text-slate-900 tracking-tight">
                100% Carbon Neutral
              </h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                Certified ecological preservation backing every chartered
                nautical mile and villa stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. GALLERY SECTION (Full-Width Immersive Visuals)
          ======================================================== */}
      <section className="py-28 sm:py-36 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600">
                Visual Journeys
              </span>
              <h2 className="text-4xl sm:text-5xl font-light text-slate-900 tracking-tight">
                Moments suspended in time.
              </h2>
            </div>
            <p className="text-base text-slate-500 font-light max-w-md">
              A cinematic glimpse into private yacht passages, misty morning zen
              sanctuaries, and Serengeti horizons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 group relative aspect-[16/10] overflow-hidden rounded-3xl apple-card-shadow cursor-pointer">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1400&auto=format&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-xs uppercase tracking-widest text-white/70">
                  Amalfi Coast, Italy
                </span>
                <h3 className="text-xl font-light text-white mt-1">
                  Cliffside sunset over Mediterranean waters
                </h3>
              </div>
            </div>

            <div className="md:col-span-5 group relative aspect-[16/10] md:aspect-auto overflow-hidden rounded-3xl apple-card-shadow cursor-pointer">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-xs uppercase tracking-widest text-white/70">
                  Kyoto, Japan
                </span>
                <h3 className="text-xl font-light text-white mt-1">
                  Autumn dawn through ancient bamboo pathways
                </h3>
              </div>
            </div>

            <div className="md:col-span-5 group relative aspect-[16/10] md:aspect-auto overflow-hidden rounded-3xl apple-card-shadow cursor-pointer">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-xs uppercase tracking-widest text-white/70">
                  Serengeti, Tanzania
                </span>
                <h3 className="text-xl font-light text-white mt-1">
                  Private balloon flight over the golden savanna
                </h3>
              </div>
            </div>

            <div className="md:col-span-7 group relative aspect-[16/10] overflow-hidden rounded-3xl apple-card-shadow cursor-pointer">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=1400&auto=format&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-xs uppercase tracking-widest text-white/70">
                  Swiss Alps, Zermatt
                </span>
                <h3 className="text-xl font-light text-white mt-1">
                  Solitary chalet mornings beneath the Matterhorn
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. PATRON STORIES (Editorial Testimonials)
          ======================================================== */}
      <section className="py-28 sm:py-36 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="text-xs uppercase tracking-widest font-semibold text-indigo-400">
              Patron Chronicles
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight">
              Words From Our Travelers.
            </h2>
            <p className="text-base text-slate-400 font-light">
              Reflections on journeys designed without compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="p-8 rounded-3xl bg-slate-800/50 backdrop-blur-md border border-slate-700/60 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-indigo-400">
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-indigo-400" />
                      ))}
                    </div>
                    <Quote className="w-5 h-5 text-slate-600" />
                  </div>
                  <p className="text-base text-slate-300 font-light leading-relaxed italic">
                    “{t.comment}”
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-slate-700/60 flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-cover bg-center shrink-0 border border-slate-600"
                    style={{ backgroundImage: `url(${t.avatar})` }}
                  />
                  <div>
                    <h4 className="text-sm font-medium text-white">{t.name}</h4>
                    <p className="text-xs text-indigo-400/90">
                      {t.destination}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. CTA SECTION (Apple Centered Typography Focus)
          ======================================================== */}
      <section className="py-28 sm:py-36 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <div className="space-y-6 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600">
            Start Your Journey
          </span>
          <h2 className="text-4xl sm:text-6xl font-light text-slate-900 tracking-tight leading-tight">
            Your next chapter begins with a conversation.
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
            Whether you possess a definitive blueprint or wish to be inspired by
            our private portfolio, our senior expedition architects are ready to
            curate your journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={() => openBookingModal()}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs uppercase tracking-widest font-medium transition-all shadow-sm active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-950 text-xs uppercase tracking-widest font-medium transition-colors text-center"
            >
              Contact VIP Concierge
            </Link>
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
