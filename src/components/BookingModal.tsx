"use client";

import React, { useState } from "react";
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Users,
  Calendar,
  Clock,
  Compass,
  User,
} from "lucide-react";
import { useToast } from "./Toast";

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

export default function BookingModal({
  isOpen,
  onClose,
  item,
}: BookingModalProps) {
  const { showToast } = useToast();
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState("2026-10-15");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [refNumber, setRefNumber] = useState("");

  if (!isOpen) return null;

  const basePrice = item ? item.price : 4500;
  const totalPrice = basePrice * guests;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      showToast(
        "Please complete all required fields",
        "Full name and email are required.",
        "error",
      );
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const randomRef = "WND-" + Math.floor(100000 + Math.random() * 900000);
      setRefNumber(randomRef);
      showToast(
        "Reservation Request Confirmed",
        `Reference ${randomRef}. Your dedicated Wanderly Concierge will contact you within 4 hours.`,
        "success",
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
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity"
        onClick={handleResetAndClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200/70 overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-light text-slate-900 tracking-tight">
                Bespoke Itinerary Reservation
              </h3>
              <p className="text-xs text-slate-500 font-light">
                Direct VIP Concierge Booking Desk
              </p>
            </div>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSuccess ? (
          /* Confirmation State */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-semibold text-indigo-600">
                Booking Request Registered
              </span>
              <h4 className="text-2xl font-light text-slate-900 tracking-tight">
                Your journey begins, {fullName.split(" ")[0]}
              </h4>
              <p className="text-sm text-slate-500 font-light max-w-md mx-auto leading-relaxed">
                Your reservation dossier has been assigned to a Senior Travel
                Specialist. Reference ID:{" "}
                <strong className="text-slate-900 font-mono">
                  {refNumber}
                </strong>
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl text-left border border-slate-200/70 text-xs space-y-2.5">
              <div className="flex justify-between">
                <span className="text-slate-500 font-light">
                  Selected Expedition:
                </span>
                <span className="font-medium text-slate-900">
                  {item?.title || "Custom Curated Journey"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-light">Travel Date:</span>
                <span className="font-medium text-slate-900">{date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-light">Party Size:</span>
                <span className="font-medium text-slate-900">
                  {guests} Travelers
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-slate-200 text-sm">
                <span className="font-medium text-slate-700">
                  Estimated Total:
                </span>
                <span className="font-medium text-slate-950">
                  ${totalPrice.toLocaleString()} USD
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleResetAndClose}
                className="w-full bg-slate-900 text-white py-3.5 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-slate-800 transition-colors active:scale-95"
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
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                {item.image && (
                  <div
                    className="w-16 h-16 rounded-xl bg-cover bg-center shrink-0 border border-slate-200"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                )}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] uppercase font-semibold tracking-widest text-indigo-600">
                    Selected Experience
                  </span>
                  <h4 className="text-sm font-medium text-slate-900 truncate">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-slate-500 font-light mt-0.5">
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
                <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Target Departure Date *</span>
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Travelers: {guests}</span>
                </label>
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-1.5">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                    className="w-full accent-slate-900 cursor-pointer"
                  />
                  <span className="text-xs font-medium text-slate-600 shrink-0 w-14 text-right">
                    {guests} {guests === 1 ? "Guest" : "Guests"}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs uppercase tracking-widest font-semibold text-slate-900 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-indigo-600" />
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
                  />
                </div>
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number / WhatsApp (for VIP updates)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
                />
              </div>

              <div>
                <textarea
                  rows={2}
                  placeholder="Special preferences (e.g., dietary, private jet transfer, anniversary celebration, villa view)..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors resize-none"
                />
              </div>
            </div>

            {/* Price Breakdown & Guarantee */}
            <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-500 font-light">
                  Estimated Voyage Investment
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-light text-slate-900 tracking-tight">
                    ${totalPrice.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-500 font-light">
                    USD total ({guests} guests)
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>
                    No immediate payment required. Concierge will confirm exact
                    custom inclusions.
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs uppercase tracking-widest font-medium shadow-sm transition-all active:scale-95 disabled:opacity-50 shrink-0"
              >
                {isSubmitting
                  ? "Securing Dossier..."
                  : "Confirm Reservation Request"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
