"use client";

import React, { useState, useMemo } from "react";
import {
  ArrowRight,
  Search,
  ShieldCheck,
  Plane,
  Award,
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
    <div className="pt-32 pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600">
          Curated Turnkey Expeditions
        </span>

        <h1 className="text-5xl sm:text-7xl font-light text-slate-900 tracking-tighter leading-tight">
          Signature travel packages.
        </h1>
        <p className="text-base sm:text-lg text-slate-500 font-light leading-relaxed">
          Completely orchestrated multi-day private voyages. Every package
          combines five-star sanctuaries, private aviation or executive
          chauffeur transit, dedicated guides, and full ATOL bond security.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-slate-200/60 apple-card-shadow mb-16 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search expedition by country..."
            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-full text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 transition-colors"
          />
        </div>

        {/* Region selector */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-widest shrink-0 hidden sm:inline">
            Region:
          </span>
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors shrink-0 ${
                selectedRegion === reg
                  ? "bg-slate-900 text-white shadow-xs"
                  : "bg-slate-100 hover:bg-slate-200/80 text-slate-600"
              }`}
            >
              {reg}
            </button>
          ))}
        </div>

        {/* Duration selector */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          <span className="text-xs font-medium text-slate-400 uppercase tracking-widest shrink-0">
            Duration:
          </span>
          <select
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(e.target.value)}
            className="bg-slate-50 border border-slate-200/80 rounded-full px-3 py-1.5 text-xs text-slate-800 font-medium focus:outline-none cursor-pointer"
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

      {/* Apple-style Reassurance Strip */}
      <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/60 apple-card-shadow flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-light text-slate-900 tracking-tight">
            Tailor any expedition to your specifications.
          </h3>
          <p className="text-sm text-slate-500 font-light max-w-xl">
            Every itinerary can be customized with private villa extensions,
            aviation charter adjustments, or personalized Michelin chef dining.
          </p>
          <div className="flex items-center gap-6 pt-3 text-xs text-slate-500 font-light">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              ATOL Bonded
            </span>
            <span className="flex items-center gap-1.5">
              <Plane className="w-4 h-4 text-indigo-600" />
              Private Aviation Ready
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-indigo-600" />
              Virtuoso VIP Privileges
            </span>
          </div>
        </div>

        <button
          onClick={() => openBookingModal()}
          className="px-8 py-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs uppercase tracking-widest font-medium transition-all shadow-sm active:scale-95 shrink-0 flex items-center gap-2"
        >
          <span>Design Custom Package</span>
          <ArrowRight className="w-4 h-4" />
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
