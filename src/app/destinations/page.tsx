"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Filter,
  SlidersHorizontal,
  MapPin,
  Sparkles,
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
        // Region filter
        if (selectedRegion !== "All" && d.region !== selectedRegion)
          return false;
        // Trip type filter
        if (selectedType !== "All" && d.type !== selectedType) return false;
        // Max price filter
        if (d.startingPrice > priceRange) return false;
        // Search query
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
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <span className="text-xs uppercase tracking-widest font-semibold text-stone-900">
          Global Sanctuary Portfolio
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif font-light text-stone-900 tracking-tight">
          Destinations of Distinction
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          Explore our carefully surveyed collection of extraordinary havens.
          Every location features handpicked private accommodations, elite
          on-ground guides, and bespoke itineraries.
        </p>
      </div>

      {/* FILTER & SEARCH CONTROL CONSOLE */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-stone-200/80 mb-12 space-y-6">
        {/* Row 1: Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by country, city, or landmark..."
              className="w-full pl-11 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-full text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-stone-400 hover:text-stone-600 absolute right-4 top-1/2 -translate-y-1/2 text-xs"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs font-medium text-stone-500 flex items-center gap-1.5">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Sort:</span>
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-stone-50 border border-stone-200 rounded-full px-4 py-2.5 text-xs text-stone-800 font-medium focus:outline-none cursor-pointer"
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
          <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
            Region
          </label>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors shrink-0 ${
                  selectedRegion === region
                    ? "bg-stone-900 text-white shadow-sm"
                    : "bg-stone-100 hover:bg-stone-200 text-stone-600"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Row 3: Trip Type & Max Price Slider */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2 border-t border-stone-100">
          <div className="md:col-span-8 space-y-2">
            <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
              Expedition Type
            </label>
            <div className="flex flex-wrap gap-2">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedType === type
                      ? "bg-amber-600 text-white shadow-xs"
                      : "bg-stone-100 hover:bg-stone-200 text-stone-700"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 space-y-2">
            <div className="flex justify-between items-center text-[11px] font-semibold uppercase tracking-wider text-stone-500">
              <span>Max Starting Rate</span>
              <span className="text-stone-900 font-bold">
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
              className="w-full accent-stone-900 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-stone-400">
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
          <div className="pt-2 flex items-center justify-between border-t border-stone-100 text-xs text-stone-500">
            <span>
              Showing {filteredDestinations.length} matching destinations
            </span>
            <button
              onClick={resetFilters}
              className="flex items-center gap-1 text-amber-600 hover:text-amber-700 font-semibold"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </div>

      {/* DESTINATIONS GRID */}
      {filteredDestinations.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-stone-200 p-8 space-y-4">
          <MapPin className="w-12 h-12 text-stone-300 mx-auto" />
          <h3 className="text-xl font-serif font-medium text-stone-900">
            No sanctuaries matched your current filters
          </h3>
          <p className="text-sm text-stone-500 max-w-md mx-auto">
            Try resetting your price range, clearing your keyword search, or
            adjusting your travel style filters.
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-2.5 bg-stone-900 text-white rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-stone-800"
          >
            Reset All Filters
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
        <div className="min-h-screen flex items-center justify-center pt-24 text-stone-500 text-sm">
          Loading Wanderly Destinations...
        </div>
      }
    >
      <DestinationsContent />
    </Suspense>
  );
}
