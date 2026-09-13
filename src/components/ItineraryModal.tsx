'use client';

import React from 'react';
import { X, Clock, Users, Check, ArrowUpRight } from 'lucide-react';
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
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200/70 overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]">
        {/* Header Image */}
        <div className="relative h-64 w-full bg-slate-950 shrink-0">
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
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-600/90 text-white uppercase tracking-widest">
              {pkg.badge || pkg.region}
            </span>
            <h2 className="text-xl sm:text-2xl font-light tracking-tight mt-2">
              {pkg.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-2 font-light">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                {pkg.duration}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-indigo-400" />
                {pkg.groupSize}
              </span>
              <span>${pkg.price.toLocaleString()} / guest</span>
            </div>
          </div>
        </div>

        {/* Itinerary Timeline */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-slate-900">
              Expedition Overview
            </h4>
            <p className="text-sm text-slate-600 font-light leading-relaxed">
              {pkg.overview}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-slate-900 mb-4">
              Day-by-Day Private Itinerary
            </h4>
            <div className="space-y-4 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
              {pkg.itinerary.map((day) => (
                <div key={day.day} className="relative flex items-start gap-4 pl-1">
                  <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-medium shrink-0 z-10 shadow">
                    {day.day}
                  </div>
                  <div className="flex-1 bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
                    <h5 className="text-sm font-medium text-slate-900">{day.title}</h5>
                    <p className="text-xs text-slate-500 font-light mt-1.5 leading-relaxed">
                      {day.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-slate-900 mb-3">
              Included In This Expedition
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-light">
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
        <div className="p-6 border-t border-slate-200/70 bg-slate-50/80 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-xs text-slate-400 font-light">Total Investment per traveler</span>
            <div className="text-xl font-light text-slate-900 tracking-tight">
              ${pkg.price.toLocaleString()} USD
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-3 rounded-full border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookNow(pkg);
              }}
              className="flex-1 sm:flex-none px-7 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs uppercase tracking-widest font-medium shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
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
