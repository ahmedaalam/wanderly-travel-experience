'use client';

import React from 'react';
import { X, Clock, Calendar, Users, Check, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Package } from '@/types';

interface ItineraryModalProps {
  pkg: Package | null;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: (pkg: Package) => void;
}

export default function ItineraryModal({ pkg, isOpen, onClose, onBookNow }: ItineraryModalProps) {
  if (!isOpen || !pkg) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="relative h-64 w-full bg-stone-950 shrink-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${pkg.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-white bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/90 text-stone-950 uppercase tracking-wider">
              {pkg.badge || pkg.region}
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold tracking-tight mt-2">
              {pkg.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-200 mt-2">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                {pkg.duration}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-amber-400" />
                {pkg.groupSize}
              </span>
              <span>${pkg.price.toLocaleString()} / guest</span>
            </div>
          </div>
        </div>

        {/* Itinerary Timeline */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900 dark:text-white">
              Expedition Overview
            </h4>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              {pkg.overview}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900 dark:text-white mb-4">
              Day-by-Day Private Itinerary
            </h4>
            <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-stone-200 dark:before:bg-stone-800">
              {pkg.itinerary.map((day) => (
                <div key={day.day} className="relative flex items-start gap-4 pl-1">
                  <div className="w-6 h-6 rounded-full bg-stone-900 dark:bg-white text-white dark:text-stone-950 flex items-center justify-center text-xs font-bold shrink-0 z-10 shadow">
                    {day.day}
                  </div>
                  <div className="flex-1 bg-stone-50 dark:bg-stone-800/60 p-4 rounded-2xl border border-stone-200/60 dark:border-stone-700/60">
                    <h5 className="text-sm font-semibold text-stone-900 dark:text-white">
                      {day.title}
                    </h5>
                    <p className="text-xs text-stone-600 dark:text-stone-300 mt-1.5 leading-relaxed">
                      {day.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900 dark:text-white mb-3">
              Included In This Expedition
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600 dark:text-stone-300">
              {pkg.inclusions.map((inc, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 border-t border-stone-200 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-900/90 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-xs text-stone-500">Total Investment per traveler</span>
            <div className="text-xl font-serif font-bold text-stone-900 dark:text-white">
              ${pkg.price.toLocaleString()} USD
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-3 rounded-full border border-stone-300 dark:border-stone-700 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookNow(pkg);
              }}
              className="flex-1 sm:flex-none px-7 py-3 rounded-full bg-stone-900 hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200 text-white text-xs uppercase tracking-wider font-semibold shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Book This Package</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
