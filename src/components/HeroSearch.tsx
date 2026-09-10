'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Calendar, Users, Sparkles, Search } from 'lucide-react';

export default function HeroSearch() {
  const router = useRouter();
  const [destination, setDestination] = useState('');
  const [travelDate, setTravelDate] = useState('Autumn 2026');
  const [guests, setGuests] = useState('2 Guests');
  const [tripType, setTripType] = useState('All Styles');

  const popularDestinations = [
    'Amalfi Coast, Italy',
    'Kyoto, Japan',
    'Zermatt, Switzerland',
    'Serengeti, Tanzania',
    'Santorini, Greece',
    'Bali, Indonesia',
    'Iceland, Nordic',
    'Patagonia, Chile',
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams();
    if (destination) query.set('search', destination);
    if (tripType && tripType !== 'All Styles') query.set('type', tripType);
    router.push(`/destinations?${query.toString()}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <form
        onSubmit={handleSearch}
        className="bg-white/90 dark:bg-stone-900/90 backdrop-blur-2xl rounded-3xl sm:rounded-full p-3 sm:p-2.5 shadow-2xl border border-white/50 dark:border-stone-800 flex flex-col lg:flex-row items-center gap-2"
      >
        {/* Destination Field */}
        <div className="w-full lg:flex-1 px-4 py-2 hover:bg-stone-100/70 dark:hover:bg-stone-800/60 rounded-2xl sm:rounded-full transition-colors relative group">
          <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-0.5 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-amber-600" />
            <span>Where to next?</span>
          </label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Search Amalfi, Kyoto, Alps..."
            className="w-full bg-transparent text-sm font-medium text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none"
            list="destinations-list"
          />
          <datalist id="destinations-list">
            {popularDestinations.map((d) => (
              <option key={d} value={d} />
            ))}
          </datalist>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-8 bg-stone-200 dark:bg-stone-800" />

        {/* Date / Season Field */}
        <div className="w-full lg:w-48 px-4 py-2 hover:bg-stone-100/70 dark:hover:bg-stone-800/60 rounded-2xl sm:rounded-full transition-colors">
          <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-0.5 flex items-center gap-1">
            <Calendar className="w-3 h-3 text-amber-600" />
            <span>When</span>
          </label>
          <select
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-stone-900 dark:text-white focus:outline-none cursor-pointer"
          >
            <option value="Autumn 2026">Autumn 2026</option>
            <option value="Winter 2026/27">Winter 2026/27</option>
            <option value="Spring 2027">Spring 2027</option>
            <option value="Summer 2027">Summer 2027</option>
            <option value="Flexible Dates">Flexible Dates</option>
          </select>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-8 bg-stone-200 dark:bg-stone-800" />

        {/* Travelers Field */}
        <div className="w-full lg:w-44 px-4 py-2 hover:bg-stone-100/70 dark:hover:bg-stone-800/60 rounded-2xl sm:rounded-full transition-colors">
          <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-0.5 flex items-center gap-1">
            <Users className="w-3 h-3 text-amber-600" />
            <span>Travelers</span>
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-stone-900 dark:text-white focus:outline-none cursor-pointer"
          >
            <option value="1 Solo">1 Solo Traveler</option>
            <option value="2 Guests">2 Guests (Couple)</option>
            <option value="3-5 Guests">Small Group (3-5)</option>
            <option value="6+ Private">Private Charter (6+)</option>
          </select>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-8 bg-stone-200 dark:bg-stone-800" />

        {/* Style Field */}
        <div className="w-full lg:w-44 px-4 py-2 hover:bg-stone-100/70 dark:hover:bg-stone-800/60 rounded-2xl sm:rounded-full transition-colors">
          <label className="block text-[10px] font-semibold uppercase tracking-wider text-stone-500 mb-0.5 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span>Expedition Style</span>
          </label>
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            className="w-full bg-transparent text-sm font-medium text-stone-900 dark:text-white focus:outline-none cursor-pointer"
          >
            <option value="All Styles">All Styles</option>
            <option value="Coastal & Island">Coastal & Island</option>
            <option value="Cultural Heritage">Cultural Heritage</option>
            <option value="Alpine & Adventure">Alpine & Ski</option>
            <option value="Wildlife & Safari">Safari Expedition</option>
            <option value="Luxury & Wellness">Wellness & Spa</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full lg:w-auto px-7 py-4 bg-stone-900 hover:bg-stone-800 text-white rounded-2xl sm:rounded-full font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 shrink-0 transition-all duration-200 shadow-lg active:scale-95 group"
        >
          <Search className="w-4 h-4 transition-transform group-hover:scale-110" />
          <span>Explore</span>
        </button>
      </form>
    </div>
  );
}
