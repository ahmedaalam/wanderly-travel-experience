'use client';

import React from 'react';
import { Clock, Users, Star, ArrowUpRight, Check } from 'lucide-react';
import { Package } from '@/types';

interface PackageCardProps {
  pkg: Package;
  onBookNow: (pkg: Package) => void;
  onViewItinerary?: (pkg: Package) => void;
}

export default function PackageCard({ pkg, onBookNow, onViewItinerary }: PackageCardProps) {
  return (
    <div className="group bg-white dark:bg-stone-900 rounded-3xl overflow-hidden border border-stone-200/80 dark:border-stone-800 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col transform hover:-translate-y-1.5">
      {/* Image Banner */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${pkg.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-amber-500/90 text-stone-950 backdrop-blur-md shadow-xs">
            {pkg.badge || pkg.region}
          </span>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-stone-900/80 backdrop-blur-md text-amber-400">
            <Star className="w-3 h-3 fill-amber-400" />
            <span>{pkg.rating}</span>
          </div>
        </div>

        {/* Duration pill overlay */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-white/80 dark:bg-stone-950/80 backdrop-blur-md text-stone-900 dark:text-white">
            <Clock className="w-3 h-3 text-amber-600" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-white/80 dark:bg-stone-950/80 backdrop-blur-md text-stone-900 dark:text-white">
            <Users className="w-3 h-3 text-amber-600" />
            {pkg.groupSize}
          </span>
        </div>
      </div>

      {/* Package Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <span className="text-[11px] uppercase tracking-wider font-semibold text-amber-600 dark:text-amber-400">
            {pkg.destination} • {pkg.country}
          </span>
          <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-white tracking-tight mt-1 group-hover:text-amber-600 transition-colors">
            {pkg.title}
          </h3>
          <p className="text-xs text-stone-600 dark:text-stone-300 mt-2 leading-relaxed line-clamp-2">
            {pkg.overview}
          </p>

          {/* Highlights List */}
          <div className="mt-4 space-y-1.5 border-t border-stone-100 dark:border-stone-800 pt-3">
            {pkg.inclusions.slice(0, 2).map((inc, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px] text-stone-600 dark:text-stone-400">
                <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                <span className="truncate">{inc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between gap-3">
          <div className="shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-serif font-bold text-stone-900 dark:text-white">
                ${pkg.price.toLocaleString()}
              </span>
              {pkg.originalPrice && (
                <span className="text-xs text-stone-400 line-through">
                  ${pkg.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <span className="block text-[10px] uppercase tracking-wider text-stone-400 font-medium whitespace-nowrap">
              Per person / tier
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {onViewItinerary && (
              <button
                type="button"
                onClick={() => onViewItinerary(pkg)}
                className="px-3 py-2 rounded-full border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-xs font-semibold hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors whitespace-nowrap shrink-0"
              >
                Itinerary
              </button>
            )}
            <button
              type="button"
              onClick={() => onBookNow(pkg)}
              className="px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200 text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Book Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
