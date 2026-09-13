'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
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
      className="group relative overflow-hidden rounded-3xl bg-slate-950 aspect-[4/5] cursor-pointer apple-card-shadow transition-all duration-700 hover:shadow-2xl"
    >
      {/* Background Image with Hover Scale */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${destination.image})` }}
      />

      {/* Cinematic Gradient Overlays for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/20 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Top Tag */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
        <span className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase bg-black/40 backdrop-blur-md text-white/90 border border-white/10">
          {destination.country}
        </span>
        <span className="text-[11px] font-medium text-white/70 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md">
          {destination.duration}
        </span>
      </div>

      {/* Bottom Editorial Content */}
      <div className="absolute bottom-0 inset-x-0 p-6 z-10 flex flex-col justify-end">
        <div className="space-y-1.5 transition-transform duration-500 group-hover:-translate-y-1">
          <p className="text-xs font-medium uppercase tracking-widest text-white/60">
            {destination.region}
          </p>
          <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight leading-snug">
            {destination.name}
          </h3>
          <p className="text-xs text-slate-300 font-light line-clamp-2 leading-relaxed pt-1">
            {destination.tagline || destination.description}
          </p>
        </div>

        {/* Minimal Price & Action Row */}
        <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between">
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-white/50">
              From
            </span>
            <span className="text-sm font-medium text-white">
              ${destination.startingPrice.toLocaleString()}
            </span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onBook(destination);
            }}
            className="inline-flex items-center gap-1 text-xs font-medium px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-slate-950 backdrop-blur-md transition-all duration-300 active:scale-95"
          >
            <span>Experience</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
