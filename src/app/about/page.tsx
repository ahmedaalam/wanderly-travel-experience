"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  Award,
  Globe2,
  ShieldCheck,
  Leaf,
  Users,
  CheckCircle2,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";
import { trustStats, trustBadges } from "@/data/testimonials";
import { useBooking } from "@/components/AppShell";

export default function AboutPage() {
  const { openBookingModal } = useBooking();

  const team = [
    {
      name: "Julian Montgomery",
      title: "Founder & Head of Expeditions",
      bio: "Former documentary explorer with 20+ years navigating remote archipelagos and high-altitude sanctuaries.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Dr. Camille Laurent",
      title: "Director of Cultural Heritage",
      bio: "Doctorate in Mediterranean Archaeology from Oxford; orchestrates private palace access and artifact previews.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Kenji Takahashi",
      title: "Asia-Pacific Lead Concierge",
      bio: "Lifelong Kyoto resident with familial lineages connected to historic Zen temples and master artisans.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Elena Rostova",
      title: "Head of Private Aviation & Marine",
      bio: "Coordinates superyacht charters, private heli-skiing permits, and bespoke air transfers across 6 continents.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* 1. Header & Brand Philosophy */}
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5 text-stone-900" />
          <span>Our Brand Ethos</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-light text-stone-900 tracking-tight">
          Crafting Timeless Expeditions
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          Founded on the principle that true luxury is not merely opulent
          finishes, but genuine intimacy with the world’s most magnificent
          cultures, landscapes, and people.
        </p>
      </div>

      {/* 2. Editorial Story: Image + Text */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <div className="lg:col-span-6 relative">
          <div
            className="w-full h-[450px] sm:h-[550px] rounded-3xl bg-cover bg-center shadow-2xl relative overflow-hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1400&auto=format&fit=crop')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white p-4 bg-stone-900/60 backdrop-blur-md rounded-2xl border border-white/20">
              <p className="text-xs italic font-serif leading-relaxed">
                “We do not sell hotel bookings. We curate memories that stay
                etched into the soul for lifetimes.”
              </p>
              <span className="block text-[10px] uppercase tracking-widest text-amber-300 mt-2">
                — Wanderly Founding Charter, 2014
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-600">
            Our Origin Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 tracking-tight leading-tight">
            Born from a rejection of the ordinary.
          </h2>
          <p className="text-sm text-stone-600 leading-relaxed">
            Wanderly was founded in 2014 by a close collective of travel
            writers, private pilots, and cultural preservationists who grew
            weary of commercialized tourism. They envisioned a private travel
            house modeled after bespoke tailor ateliers: small-batch, intensely
            personalized, and unyielding in quality.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            Over the past twelve years, we have built intimate relationships
            with sovereign families, private reserve wardens, and three-star
            Michelin chefs across 48 nations. When you travel with Wanderly, you
            do not stand in lines; you enter via private garden gates.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-200">
            <div className="space-y-1">
              <span className="text-2xl font-serif font-bold text-stone-900">
                100%
              </span>
              <p className="text-xs text-stone-500 font-medium">
                Bespoke itineraries, zero templates
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-serif font-bold text-stone-900">
                4 Hours
              </span>
              <p className="text-xs text-stone-500 font-medium">
                Average VIP concierge response time
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Trust Elements & Metrics */}
      <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-14 mb-24 shadow-2xl">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-400">
            Global Standing
          </span>
          <h3 className="text-2xl sm:text-4xl font-serif font-light tracking-tight">
            Trust Built on Twelve Years of Discretion
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-stone-800">
          {trustStats.map((stat, i) => (
            <div key={i} className="text-center space-y-1">
              <div className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                {stat.label}
              </div>
              <div className="text-[11px] text-stone-400">{stat.detail}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 text-center">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="space-y-1">
              <h5 className="text-sm font-semibold text-white">{badge.name}</h5>
              <p className="text-xs text-stone-400">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Leadership & Specialist Team */}
      <div className="mb-24 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-600">
            The Specialists
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 tracking-tight">
            Meet the Expedition Architects
          </h2>
          <p className="text-sm text-stone-600">
            Passionate cultural guardians and logistics masters dedicated to
            perfecting every detail of your voyage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-lg transition-all p-5 flex flex-col"
            >
              <div
                className="w-full aspect-square rounded-2xl bg-cover bg-center mb-4"
                style={{ backgroundImage: `url(${member.image})` }}
              />
              <h4 className="text-base font-serif font-bold text-stone-900">
                {member.name}
              </h4>
              <span className="text-xs font-medium text-amber-600 mb-2">
                {member.title}
              </span>
              <p className="text-xs text-stone-500 leading-relaxed flex-1">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Sustainability Commitment */}
      <div className="bg-stone-100 rounded-3xl p-8 sm:p-12 mb-20 border border-stone-200/60 flex flex-col md:flex-row items-center gap-8">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
          <Leaf className="w-8 h-8" />
        </div>
        <div className="flex-1 space-y-1">
          <h4 className="text-xl font-serif font-semibold text-stone-900">
            Our Certified Carbon-Neutral & Conservation Pledge
          </h4>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            100% of flight emissions across all Wanderly voyages are
            independently calculated and certified through verified global
            carbon capture and reforestation reserves. Moreover, 5% of all
            expedition revenues are directly allocated to indigenous community
            educational foundations.
          </p>
        </div>
        <button
          onClick={() => openBookingModal()}
          className="px-6 py-3 bg-stone-900 text-white rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-stone-800 transition-colors shrink-0"
        >
          Plan a Mindful Voyage
        </button>
      </div>

      {/* 6. Bottom CTA */}
      <div className="text-center max-w-xl mx-auto space-y-6 pt-4">
        <h3 className="text-2xl sm:text-3xl font-serif font-light text-stone-900">
          Begin your conversation with Wanderly
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
          Reach out to our senior concierge desk to discuss ideas, receive
          private destination dossiers, or request a custom itinerary proposal.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-widest font-semibold px-8 py-4 rounded-full shadow-lg transition-all active:scale-95"
        >
          <span>Connect With Our Team</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
