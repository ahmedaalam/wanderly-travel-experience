'use client';

import React, { useState } from 'react';
import { X, MapPin, Star, Calendar, Clock, Check, ArrowUpRight } from 'lucide-react';
import { Destination } from '@/types';

interface DestinationModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: (destination: Destination) => void;
}

export default function DestinationModal({
  destination,
  isOpen,
  onClose,
  onBookNow,
}: DestinationModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!isOpen || !destination) return null;

  const images = destination.gallery && destination.gallery.length > 0
    ? destination.gallery
    : [destination.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-white bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-md transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Gallery / Hero */}
        <div className="relative h-72 sm:h-96 w-full bg-stone-950 shrink-0">
          <div
            className="w-full h-full bg-cover bg-center transition-all duration-500"
            style={{ backgroundImage: `url(${images[activeImageIdx] || destination.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Destination Header Title */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-md uppercase tracking-wider">
                {destination.region}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/80 backdrop-blur-md uppercase tracking-wider">
                {destination.type}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
              {destination.name}
            </h2>
            <div className="flex items-center gap-4 text-xs sm:text-sm text-stone-200 mt-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {destination.country}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                {destination.rating} ({destination.reviewCount} verified travelers)
              </span>
            </div>
          </div>

          {/* Thumbnail strip */}
          {images.length > 1 && (
            <div className="absolute top-4 left-4 z-20 flex gap-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-12 h-12 rounded-lg bg-cover bg-center border-2 transition-all ${
                    activeImageIdx === idx ? 'border-white scale-105 shadow-md' : 'border-white/40 opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Body (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Quick Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/60 dark:border-stone-700/60 text-xs">
            <div>
              <span className="text-stone-500 block mb-0.5">Recommended Duration</span>
              <span className="font-semibold text-stone-900 dark:text-white flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                {destination.duration}
              </span>
            </div>
            <div>
              <span className="text-stone-500 block mb-0.5">Prime Travel Window</span>
              <span className="font-semibold text-stone-900 dark:text-white flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                {destination.bestSeason}
              </span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-stone-500 block mb-0.5">Starting Rate</span>
              <span className="font-serif font-bold text-stone-900 dark:text-white text-sm">
                ${destination.startingPrice.toLocaleString()} / guest
              </span>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900 dark:text-stone-100">
              The Experience
            </h4>
            <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              {destination.description}
            </p>
          </div>

          {/* Highlights & Inclusions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900 dark:text-stone-100 mb-3">
                Key Curated Highlights
              </h4>
              <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-300">
                {destination.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900 dark:text-stone-100 mb-3">
                Wanderly Signature Inclusions
              </h4>
              <ul className="space-y-2 text-xs text-stone-600 dark:text-stone-300">
                {destination.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-stone-200 dark:border-stone-800 bg-stone-50/80 dark:bg-stone-900/90 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-xs text-stone-500">Bespoke Expeditions from</span>
            <div className="font-serif font-bold text-xl text-stone-900 dark:text-white">
              ${destination.startingPrice.toLocaleString()}{' '}
              <span className="text-xs font-sans font-normal text-stone-500">/ person</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-5 py-3 rounded-full border border-stone-300 dark:border-stone-700 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookNow(destination);
              }}
              className="flex-1 sm:flex-none px-7 py-3 rounded-full bg-stone-900 hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200 text-white text-xs uppercase tracking-wider font-semibold shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Book Expedition</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
