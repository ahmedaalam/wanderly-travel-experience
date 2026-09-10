"use client";

import React, { useState, useMemo } from "react";
import {
  Sparkles,
  Clock,
  ShieldCheck,
  Check,
  ArrowUpRight,
  Search,
} from "lucide-react";
import PackageCard from "@/components/PackageCard";
import ItineraryModal from "@/components/ItineraryModal";
import { useBooking } from "@/components/AppShell";
import { packages } from "@/data/packages";
import { Package, Region } from "@/types";

export default function PackagesPage() {
  const { openBookingModal } = useBooking();
  const [selectedRegion, setSelectedRegion] = useState<Region>("All");
  const [selectedDuration, setSelectedDuration] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  const regions: Region[] = ["All", "Europe", "Asia", "Africa", "Nordic"];
  const durations = ["All", "7 Days", "8 Days", "9 Days"];

  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      if (selectedRegion !== "All" && pkg.region !== selectedRegion)
        return false;
      if (
        selectedDuration !== "All" &&
        !pkg.duration.includes(selectedDuration)
      )
        return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = pkg.title.toLowerCase().includes(q);
        const matchDest = pkg.destination.toLowerCase().includes(q);
        const matchCountry = pkg.country.toLowerCase().includes(q);
        if (!matchTitle && !matchDest && !matchCountry) return false;
      }
      return true;
    });
  }, [selectedRegion, selectedDuration, searchQuery]);

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-stone-900">
          Curated Turnkey Expeditions
        </span>

        <h1 className="text-4xl sm:text-6xl font-serif font-light text-stone-900 tracking-tight">
          Signature Travel Packages
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          Completely organized multi-day private voyages. Every package includes
          five-star luxury sanctuaries, private aviation or executive chauffeur
          transfers, daily private guide services, and full financial bond
          security.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white rounded-3xl p-6 shadow-xl border border-stone-200/80 mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search expedition by country..."
            className="w-full pl-11 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-full text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900"
          />
        </div>

        {/* Region selector */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none">
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider shrink-0 hidden sm:inline">
            Region:
          </span>
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors shrink-0 ${
                selectedRegion === reg
                  ? "bg-stone-900 text-white shadow-xs"
                  : "bg-stone-100 hover:bg-stone-200 text-stone-700"
              }`}
            >
              {reg}
            </button>
          ))}
        </div>

        {/* Duration selector */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider shrink-0">
            Duration:
          </span>
          <select
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(e.target.value)}
            className="bg-stone-50 border border-stone-200 rounded-full px-3 py-1.5 text-xs text-stone-800 font-medium focus:outline-none cursor-pointer"
          >
            {durations.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Package Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPackages.map((pkg) => (
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

      {/* Trust reassurance banner */}
      <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-white border border-stone-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-serif font-light text-stone-900">
            Desire a Completely Custom Expedition?
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl leading-relaxed">
            Our private journey designers can customize any existing package or
            architect a completely blank-canvas voyage suited to your exact
            schedule and preferences.
          </p>
        </div>
        <button
          onClick={() =>
            openBookingModal({
              id: "custom-private-charter",
              title: "Tailor-Made Private Charter",
              country: "Worldwide Sanctuary",
              price: 5000,
              duration: "Custom Duration",
              image:
                "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1200&auto=format&fit=crop",
            })
          }
          className="px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white rounded-full text-xs uppercase tracking-widest font-semibold transition-all shadow-md active:scale-95 shrink-0 flex items-center gap-2"
        >
          <span>Design Bespoke Itinerary</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

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
