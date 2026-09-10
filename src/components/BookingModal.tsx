'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Users, Calendar, Sparkles, Clock, Compass } from 'lucide-react';
import { useToast } from './Toast';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  item?: {
    id: string;
    title: string;
    country: string;
    price: number;
    duration?: string;
    image?: string;
  } | null;
}

export default function BookingModal({ isOpen, onClose, item }: BookingModalProps) {
  const { showToast } = useToast();
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2026-10-15');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  if (!isOpen) return null;

  const basePrice = item ? item.price : 4500;
  const totalPrice = basePrice * guests;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      showToast('Please complete all required fields', 'Full name and email are required.', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const randomRef = 'WND-' + Math.floor(100000 + Math.random() * 900000);
      setRefNumber(randomRef);
      showToast(
        'Reservation Request Confirmed',
        `Reference ${randomRef}. Your dedicated Wanderly Concierge will contact you within 4 hours.`,
        'success'
      );
    }, 1000);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-md transition-opacity"
        onClick={handleResetAndClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-stone-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-800 overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-stone-100 dark:border-stone-800 bg-stone-50/70 dark:bg-stone-900/80">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-stone-900 text-white dark:bg-white dark:text-stone-900 flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-serif font-semibold text-stone-900 dark:text-white">
                Bespoke Itinerary Reservation
              </h3>
              <p className="text-xs text-stone-500">
                Direct VIP Concierge Booking Desk
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* Confirmation State */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-amber-600">
                Booking Request Registered
              </span>
              <h4 className="text-2xl font-serif text-stone-900 dark:text-white font-medium">
                Your journey begins, {fullName.split(' ')[0]}
              </h4>
              <p className="text-sm text-stone-500 max-w-md mx-auto leading-relaxed">
                Your reservation dossier has been assigned to a Senior Travel Specialist. Reference ID:{' '}
                <strong className="text-stone-900 dark:text-white font-mono">{refNumber}</strong>
              </p>
            </div>

            <div className="bg-stone-50 dark:bg-stone-800/60 p-5 rounded-2xl text-left border border-stone-200/60 dark:border-stone-700/60 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-stone-500">Selected Expedition:</span>
                <span className="font-semibold text-stone-900 dark:text-white">
                  {item?.title || 'Custom Curated Journey'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Travel Date:</span>
                <span className="font-semibold text-stone-900 dark:text-white">{date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Party Size:</span>
                <span className="font-semibold text-stone-900 dark:text-white">{guests} Travelers</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-stone-200 dark:border-stone-700 text-sm">
                <span className="font-medium text-stone-700 dark:text-stone-300">Estimated Total:</span>
                <span className="font-serif font-semibold text-stone-950 dark:text-white">
                  ${totalPrice.toLocaleString()} USD
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleResetAndClose}
                className="w-full bg-stone-900 dark:bg-white text-white dark:text-stone-950 py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold hover:opacity-95 transition-opacity"
              >
                Return to Exploration
              </button>
            </div>
          </div>
        ) : (
          /* Form State */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Selected Package Banner */}
            {item && (
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/60 dark:border-stone-700/60">
                {item.image && (
                  <div
                    className="w-16 h-16 rounded-xl bg-cover bg-center shrink-0 border border-stone-200 dark:border-stone-700"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                )}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-amber-600">
                    Selected Experience
                  </span>
                  <h4 className="text-sm font-semibold text-stone-900 dark:text-white truncate">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-stone-500 mt-0.5">
                    {item.duration && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {item.duration}
                      </span>
                    )}
                    <span>${item.price.toLocaleString()} / person</span>
                  </div>
                </div>
              </div>
            )}

            {/* Travel Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" />
                  <span>Target Departure Date *</span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-2.5 text-sm text-stone-900 dark:text-white focus:outline-none focus:border-stone-900 dark:focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 dark:text-stone-400 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-600" />
                  <span>Travelers: {guests}</span>
                </label>
                <div className="flex items-center gap-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-1.5">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                    className="w-full accent-stone-900 dark:accent-amber-500 cursor-pointer"
                  />
                  <span className="text-xs font-medium text-stone-600 dark:text-stone-300 shrink-0 w-12 text-right">
                    {guests} {guests === 1 ? 'Guest' : 'Guests'}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Traveler Information</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-2.5 text-sm text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:border-stone-900 dark:focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-2.5 text-sm text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:border-stone-900 dark:focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number / WhatsApp (for VIP updates)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-2.5 text-sm text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:border-stone-900 dark:focus:border-white transition-colors"
                />
              </div>

              <div>
                <textarea
                  rows={2}
                  placeholder="Special preferences (e.g., dietary, private jet transfer, anniversary celebration, villa view)..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl px-4 py-2.5 text-sm text-stone-900 dark:text-white placeholder-stone-400 focus:outline-none focus:border-stone-900 dark:focus:border-white transition-colors resize-none"
                />
              </div>
            </div>

            {/* Price Breakdown & Guarantee */}
            <div className="pt-2 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-stone-500">Estimated Voyage Investment</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-serif font-bold text-stone-900 dark:text-white">
                    ${totalPrice.toLocaleString()}
                  </span>
                  <span className="text-xs text-stone-500">USD total ({guests} guests)</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>No immediate payment required. Concierge will confirm exact custom inclusions.</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-stone-900 hover:bg-stone-800 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200 text-white rounded-full text-xs uppercase tracking-wider font-semibold shadow-lg transition-all active:scale-95 disabled:opacity-50 shrink-0"
              >
                {isSubmitting ? 'Securing Dossier...' : 'Confirm Reservation Request'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
