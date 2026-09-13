"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  RefreshCw,
} from "lucide-react";
import DestinationCard from "@/components/DestinationCard";
import DestinationModal from "@/components/DestinationModal";
import { useBooking } from "@/components/AppShell";
import { destinations } from "@/data/destinations";
import { Destination, Region, TripType } from "@/types";

function DestinationsContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const initialType = searchParams.get("type") || "All";

  const { openBookingModal } = useBooking();
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedRegion, setSelectedRegion] = useState<Region>("All");
  const [selectedType, setSelectedType] = useState<TripType | "All">(
    (initialType as TripType | "All") || "All",
  );
  const [priceRange, setPriceRange] = useState<number>(8000);
  const [sortBy, setSortBy] = useState<
    "featured" | "price-asc" | "price-desc" | "rating"
  >("featured");
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);

  const regions: Region[] = [
    "All",
    "Europe",
    "Asia",
    "Americas",
    "Africa",
    "Nordic",
  ];
  const types: (TripType | "All")[] = [
    "All",
    "Coastal & Island",
    "Cultural Heritage",
    "Alpine & Adventure",
    "Wildlife & Safari",
    "Luxury & Wellness",
  ];

  const filteredDestinations = useMemo(() => {
    return destinations
      .filter((d) => {
        if (selectedRegion !== "All" && d.region !== selectedRegion)
          return false;
        if (selectedType !== "All" && d.type !== selectedType) return false;
        if (d.startingPrice > priceRange) return false;
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = d.name.toLowerCase().includes(q);
          const matchCountry = d.country.toLowerCase().includes(q);
          const matchDesc = d.description.toLowerCase().includes(q);
          const matchRegion = d.region.toLowerCase().includes(q);
          if (!matchName && !matchCountry && !matchDesc && !matchRegion)
            return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.startingPrice - b.startingPrice;
        if (sortBy === "price-desc") return b.startingPrice - a.startingPrice;
        if (sortBy === "rating") return b.rating - a.rating;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [selectedRegion, selectedType, priceRange, searchQuery, sortBy]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedRegion("All");
    setSelectedType("All");
    setPriceRange(8000);
    setSortBy("featured");
  };

  return (
    <div className="pt-32 pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600">
          Global Sanctuary Portfolio
        </span>
        <h1 className="text-5xl sm:text-7xl font-light text-slate-900 tracking-tighter leading-tight">
          Destinations of distinction.
        </h1>
        <p className="text-base sm:text-lg text-slate-500 font-light leading-relaxed">
          Explore our private portfolio of extraordinary havens. Every location
          features secluded accommodations, rare insider access, and unhurried
          moments.
        </p>
      </div>

      {/* FILTER & SEARCH CONTROL CONSOLE */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/60 apple-card-shadow mb-16 space-y-6">
        {/* Row 1: Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by country, city, or sanctuary..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200/80 rounded-full text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-600 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-slate-400 hover:text-slate-600 absolute right-4 top-1/2 -translate-y-1/2 text-xs"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Sort:</span>
            </span>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(
                  e.target.value as
                    | "featured"
                    | "price-asc"
                    | "price-desc"
                    | "rating"
                )
              }
              className="bg-slate-50 border border-slate-200/80 rounded-full px-4 py-2.5 text-xs text-slate-800 font-medium focus:outline-none cursor-pointer"
            >
              <option value="featured">Wanderly Curated (Default)</option>
              <option value="price-asc">Rate: Low to High</option>
              <option value="price-desc">Rate: High to Low</option>
              <option value="rating">Highest Traveler Rating</option>
            </select>
          </div>
        </div>

        {/* Row 2: Region Pills */}
        <div className="space-y-2">
          <label className="text-[11px] font-medium uppercase tracking-widest text-slate-400">
            Region
          </label>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors shrink-0 ${
                  selectedRegion === region
                    ? "bg-slate-900 text-white shadow-xs"
                    : "bg-slate-100 hover:bg-slate-200/80 text-slate-600"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Row 3: Trip Type & Max Price Slider */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2 border-t border-slate-100">
          <div className="md:col-span-8 space-y-2">
            <label className="text-[11px] font-medium uppercase tracking-widest text-slate-400">
              Expedition Type
            </label>
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedType === type
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200/80 text-slate-600"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 space-y-2">
            <div className="flex justify-between items-center text-[11px] font-medium uppercase tracking-widest text-slate-400">
              <span>Max Starting Rate</span>
              <span className="text-slate-900 font-semibold">
                ${priceRange.toLocaleString()} USD
              </span>
            </div>
            <input
              type="range"
              min="2500"
              max="8000"
              step="250"
              value={priceRange}
              onChange={(e) => setPriceRange(parseInt(e.target.value, 10))}
              className="w-full accent-slate-900 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400">
              <span>$2,500</span>
              <span>$8,000+</span>
            </div>
          </div>
        </div>

        {/* Reset Active Filters Bar */}
        {(selectedRegion !== "All" ||
          selectedType !== "All" ||
          priceRange < 8000 ||
          searchQuery) && (
          <div className="pt-3 flex items-center justify-between border-t border-slate-100 text-xs text-slate-500">
            <span>
              Showing {filteredDestinations.length} matching sanctuaries
            </span>
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </div>

      {/* DESTINATIONS GRID */}
      {filteredDestinations.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-3xl border border-slate-200/60 p-8 space-y-4 apple-card-shadow">
          <MapPin className="w-10 h-10 text-slate-300 mx-auto" />
          <h3 className="text-2xl font-light text-slate-900">
            No sanctuaries matched your current criteria
          </h3>
          <p className="text-sm text-slate-500 font-light max-w-md mx-auto">
            Try adjusting your price threshold, keyword search, or travel style
            filter to view available destinations.
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-xs uppercase tracking-widest font-medium hover:bg-slate-800 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
      )}

      {/* Destination Modal */}
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
    </div>
  );
}

export default function DestinationsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center pt-24 text-slate-400 text-sm font-light">
          Loading Wanderly Destinations...
        </div>
      }
    >
      <DestinationsContent />
    </Suspense>
  );
}
