'use client';

import React from 'react';
import { MapPin, Star, ArrowUpRight, Clock } from 'lucide-react';
import { Destination } from '@/types';

interface DestinationCardProps {
  destination: Destination;
  onSelect: (destination: Destination) => void;
  onBook: (destination: Destination) => void;
}

export default function DestinationCard({ destination, onSelect, onBook }: DestinationCardProps) {
  return (
    <div
      onClick={() => onSelect(destination)}
      className="group relative bg-white dark:bg-stone-900 rounded-3xl overflow-hidden border border-stone-200/80 dark:border-stone-800 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
    >
      {/* Image Container with Hover Scale */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100 dark:bg-stone-800">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${destination.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase bg-white/80 dark:bg-stone-950/80 backdrop-blur-md text-stone-900 dark:text-white shadow-xs">
            {destination.region}
          </span>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-stone-900/80 backdrop-blur-md text-amber-400">
            <Star className="w-3 h-3 fill-amber-400" />
            <span>{destination.rating}</span>
          </div>
        </div>

        {/* Bottom image overlay stats */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-1.5 text-xs text-stone-200 font-medium">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{destination.country}</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-white tracking-tight mt-0.5 group-hover:text-amber-200 transition-colors">
            {destination.name}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-2 leading-relaxed">
          {destination.tagline || destination.description}
        </p>

        {/* Inclusions / Highlights snippet */}
        <div className="flex items-center gap-2 text-[11px] text-stone-500 dark:text-stone-400 mt-3 pt-3 border-t border-stone-100 dark:border-stone-800">
          <Clock className="w-3 h-3 text-stone-400" />
          <span>{destination.duration} Expedition</span>
          <span className="text-stone-300 dark:text-stone-700">•</span>
          <span>{destination.bestSeason}</span>
        </div>

        {/* Bottom Actions */}
        <div className="mt-4 pt-3 flex items-center justify-between">
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-stone-400 font-medium">
              Starting from
            </span>
            <span className="text-base font-serif font-bold text-stone-900 dark:text-white">
              ${destination.startingPrice.toLocaleString()}
            </span>
            <span className="text-[11px] text-stone-400 font-normal"> / person</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onBook(destination);
              }}
              className="px-4 py-2 rounded-full bg-stone-900 hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200 text-white text-[11px] uppercase tracking-wider font-semibold transition-all shadow-xs hover:shadow-md active:scale-95 flex items-center gap-1"
            >
              <span>Book</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
