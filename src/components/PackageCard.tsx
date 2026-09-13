'use client';

import React from 'react';
import { Clock, Users, ArrowUpRight, Check } from 'lucide-react';
import { Package } from '@/types';

interface PackageCardProps {
  pkg: Package;
  onBookNow: (pkg: Package) => void;
  onViewItinerary?: (pkg: Package) => void;
}

export default function PackageCard({ pkg, onBookNow, onViewItinerary }: PackageCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-slate-200/70 apple-card-shadow transition-all duration-700 hover:shadow-2xl flex flex-col transform hover:-translate-y-1">
      {/* Image Banner */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ backgroundImage: `url(${pkg.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-black/20" />

        {/* Top Tag */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase bg-black/40 backdrop-blur-md text-white border border-white/15">
            {pkg.badge || pkg.region}
          </span>
          <span className="text-[11px] font-medium text-white/80 px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md">
            ★ {pkg.rating}
          </span>
        </div>

        {/* Duration & Capacity Overlay */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 z-10">
          <span className="flex items-center gap-1.5 text-xs font-light px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/10">
            <Clock className="w-3 h-3 text-white/70" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1.5 text-xs font-light px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white border border-white/10">
            <Users className="w-3 h-3 text-white/70" />
            {pkg.groupSize}
          </span>
        </div>
      </div>

      {/* Package Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div>
          <span className="text-[11px] uppercase tracking-widest font-medium text-indigo-600">
            {pkg.destination} • {pkg.country}
          </span>
          <h3 className="text-xl font-light text-slate-900 tracking-tight mt-1 group-hover:text-indigo-600 transition-colors">
            {pkg.title}
          </h3>
          <p className="text-xs text-slate-500 font-light mt-2 leading-relaxed line-clamp-2">
            {pkg.overview}
          </p>

          {/* Highlights List */}
          <div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
            {pkg.inclusions.slice(0, 2).map((inc, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-light">
                <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span className="truncate">{inc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <div className="shrink-0">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-medium text-slate-900">
                ${pkg.price.toLocaleString()}
              </span>
              {pkg.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ${pkg.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <span className="block text-[10px] uppercase tracking-wider text-slate-400 font-light">
              Per person / tier
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {onViewItinerary && (
              <button
                type="button"
                onClick={() => onViewItinerary(pkg)}
                className="px-3.5 py-1.5 rounded-full border border-slate-200 text-slate-700 text-xs font-medium hover:bg-slate-100 transition-colors"
              >
                Itinerary
              </button>
            )}
            <button
              type="button"
              onClick={() => onBookNow(pkg)}
              className="px-4 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs uppercase tracking-wider font-medium transition-all shadow-xs active:scale-95 flex items-center gap-1.5"
            >
              <span>Book</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
