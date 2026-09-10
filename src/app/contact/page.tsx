'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
} from 'lucide-react';
import { useToast } from '@/components/Toast';

export default function ContactPage() {
  const { showToast } = useToast();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('Amalfi Coast');
  const [budget, setBudget] = useState('$5,000 - $10,000 / guest');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Active office tab for simulated map
  const [activeOffice, setActiveOffice] = useState('london');

  // FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const offices = [
    {
      id: 'london',
      city: 'London Flagship',
      country: 'United Kingdom',
      address: '14 Berkeley Square, Mayfair, London W1J 6BL',
      phone: '+44 20 7946 0912',
      email: 'london@wanderlyexpeditions.com',
      hours: 'Mon - Fri: 08:30 - 19:00 GMT',
      coordinates: '51.5097° N, 0.1478° W',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'newyork',
      city: 'New York Concierge',
      country: 'United States',
      address: '767 Fifth Avenue, Manhattan, NY 10153',
      phone: '+1 (212) 555-0199',
      email: 'newyork@wanderlyexpeditions.com',
      hours: 'Mon - Fri: 09:00 - 20:00 EST',
      coordinates: '40.7638° N, 73.9729° W',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'tokyo',
      city: 'Tokyo Atelier',
      country: 'Japan',
      address: '6-10-1 Roppongi, Minato City, Tokyo 106-6108',
      phone: '+81 3 5555 0144',
      email: 'tokyo@wanderlyexpeditions.com',
      hours: 'Mon - Sat: 10:00 - 20:00 JST',
      coordinates: '35.6628° N, 139.7313° E',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 'zurich',
      city: 'Zurich Alpine Desk',
      country: 'Switzerland',
      address: 'Bahnhofstrasse 28, 8001 Zürich',
      phone: '+41 44 668 1120',
      email: 'zurich@wanderlyexpeditions.com',
      hours: 'Mon - Fri: 08:30 - 18:30 CET',
      coordinates: '47.3717° N, 8.5392° E',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop',
    },
  ];

  const faqs = [
    {
      q: 'How does Wanderly curate bespoke expeditions?',
      a: 'Every inquiry begins with an intimate consultation with a Senior Expedition Designer. We learn your travel rhythms, culinary tastes, and desires, then architect a seamless day-by-day itinerary with private charters, VIP entries, and handpicked boutique accommodations.',
    },
    {
      q: 'What is included in the Wanderly Concierge Service?',
      a: 'Our concierge service operates 24 hours a day, 7 days a week. Before departure, we coordinate dining reservations, private yachts, helicopter transfers, and packing logistics. On the ground, your dedicated concierge is reachable via private WhatsApp or phone to make immediate itinerary adjustments.',
    },
    {
      q: 'Are our payments and deposits financially protected?',
      a: 'Yes. Wanderly is an ATOL bonded travel operator and a registered Virtuoso luxury agency. Every client deposit is held in secure client trust escrow until all journey services are fulfilled.',
    },
    {
      q: 'Can Wanderly accommodate private aviation and yacht charters?',
      a: 'Absolutely. We maintain standing partnerships with certified charter operators worldwide, granting access to private jets, turboprops, helicopters, and luxury yachts ranging from 40-foot classic wooden speedboats to 180-foot megayachts.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      showToast('Missing details', 'Please provide your full name and email address.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast(
        'Inquiry Transmitted Successfully',
        'A dedicated Wanderly travel designer will review your dossier and contact you within 4 hours.',
        'success'
      );
    }, 1000);
  };

  const currentOffice = offices.find((o) => o.id === activeOffice) || offices[0];

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5 text-stone-900" />
          <span>Direct Concierge Access</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-serif font-light text-stone-900 tracking-tight">
          Initiate Your Journey
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
          Whether you seek advice on seasonal migrations, private villa rentals, or a complex multi-country expedition, our senior travel advisors are at your service.
        </p>
      </div>

      {/* 2. Main Grid: Form + Quick Contacts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-stone-200/80">
          {submitted ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-stone-900">
                Inquiry Received, {fullName.split(' ')[0]}
              </h3>
              <p className="text-sm text-stone-500 max-w-md mx-auto leading-relaxed">
                Thank you for entrusting your voyage with Wanderly. Your dossier has been assigned to our concierge team. We will be in touch shortly via {email}.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-stone-900 text-white rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-stone-800"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-serif font-medium text-stone-900">
                  Request a Private Consultation
                </h3>
                <p className="text-xs text-stone-500">
                  Please share your aspirational ideas. All requests are handled with absolute confidentiality.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Lady / Lord / Mr. / Ms..."
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                    Preferred Destination
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors cursor-pointer"
                  >
                    <option value="Amalfi Coast">Amalfi Coast & Capri</option>
                    <option value="Kyoto & Japan">Kyoto & Tokyo, Japan</option>
                    <option value="Swiss Alps">Zermatt & Swiss Alps</option>
                    <option value="Serengeti">Serengeti Safari, Tanzania</option>
                    <option value="Santorini">Santorini & Cyclades</option>
                    <option value="Bali">Bali & Nusa Islands</option>
                    <option value="Iceland">Iceland Aurora & Glaciers</option>
                    <option value="Patagonia">Patagonia Wilderness</option>
                    <option value="Open/Custom">Undecided / Open to Proposal</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Estimated Trip Investment
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors cursor-pointer"
                >
                  <option value="$3,500 - $5,000 / guest">$3,500 - $5,000 per guest</option>
                  <option value="$5,000 - $10,000 / guest">$5,000 - $10,000 per guest</option>
                  <option value="$10,000 - $20,000 / guest">$10,000 - $20,000 per guest</option>
                  <option value="$20,000+ Unlimited">$20,000+ / Private Aviation & Yacht</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                  Voyage Vision & Special Requests
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share dates, traveling companions, special milestones (anniversary, honeymoon), or architectural preferences..."
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1.5 text-xs text-stone-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Confidential & encrypted</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-full text-xs uppercase tracking-wider font-semibold shadow-lg transition-all active:scale-95 disabled:opacity-50 flex items-center gap-2"
                >
                  <span>{isSubmitting ? 'Transmitting...' : 'Dispatch Inquiry'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Direct Contacts & Fast Response Box */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-stone-900 text-white rounded-3xl p-8 space-y-6 shadow-xl">
            <h3 className="text-xl font-serif font-medium">VIP Concierge Desks</h3>
            <p className="text-xs text-stone-400 leading-relaxed">
              Prefer an immediate voice conversation? Our dispatchers are available 24/7 for urgent travel requests and bespoke itinerary bookings.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <div>
                  <span className="text-xs text-stone-400 block">Toll-Free Global Concierge</span>
                  <span className="text-sm font-semibold text-white">+1 (800) 926-3375</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <div>
                  <span className="text-xs text-stone-400 block">Confidential Inquiries</span>
                  <span className="text-sm font-semibold text-white">concierge@wanderlyexpeditions.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                <div>
                  <span className="text-xs text-stone-400 block">Response Protocol</span>
                  <span className="text-sm font-semibold text-white">Dedicated designer assignment under 4 hrs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick FAQ snippet box */}
          <div className="bg-stone-100 rounded-3xl p-8 border border-stone-200/80 space-y-3">
            <h4 className="text-sm font-serif font-bold text-stone-900">
              Personalized Private Meetings
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              We frequently conduct private consultations in person at our London, New York, or Zurich ateliers, or directly at your residence upon request.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Global Flagship Offices & Simulated Map Section */}
      <div className="mb-24 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-600">
            Global Presence
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 tracking-tight">
            Our Flagship Ateliers
          </h2>
          <p className="text-sm text-stone-600">
            Visit us in prime metropolitan centres worldwide for private journey design appointments.
          </p>
        </div>

        {/* Office Tab Selectors */}
        <div className="flex justify-center items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {offices.map((office) => (
            <button
              key={office.id}
              onClick={() => setActiveOffice(office.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all shrink-0 ${
                activeOffice === office.id
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-600'
              }`}
            >
              {office.city}
            </button>
          ))}
        </div>

        {/* Map & Office Showcase Card */}
        <div className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-12">
          {/* Simulated Interactive Map Display */}
          <div className="lg:col-span-7 relative h-80 sm:h-96 lg:h-auto min-h-[380px] bg-stone-950">
            <div
              className="w-full h-full bg-cover bg-center opacity-85 transition-all duration-700"
              style={{ backgroundImage: `url(${currentOffice.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

            {/* Visual Radar / Map Marker Island */}
            <div className="absolute top-6 left-6 p-4 rounded-2xl bg-stone-900/80 backdrop-blur-md border border-white/15 text-white text-xs space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold">{currentOffice.city} Active Desk</span>
              </div>
              <p className="text-[11px] text-stone-400 font-mono">{currentOffice.coordinates}</p>
            </div>

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 dark:bg-stone-900/90 backdrop-blur-md border border-white/30 text-stone-900 dark:text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-xs font-medium truncate">{currentOffice.address}</span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-600 shrink-0 ml-2">
                Verified Atelier
              </span>
            </div>
          </div>

          {/* Office Details */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-semibold text-amber-600">
                {currentOffice.country}
              </span>
              <h3 className="text-2xl font-serif font-bold text-stone-900">
                {currentOffice.city}
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed">
                Located in the heart of {currentOffice.city.split(' ')[0]}, our private salon welcomes discerning travelers by appointment for bespoke itinerary curation, private tasting previews, and travel documentation hand-offs.
              </p>

              <div className="space-y-3 pt-2 text-xs text-stone-700">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>{currentOffice.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>{currentOffice.phone}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>{currentOffice.email}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>{currentOffice.hours}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100">
              <a
                href={`tel:${currentOffice.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-white hover:bg-stone-800 text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <span>Call {currentOffice.city.split(' ')[0]} Desk Directly</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Frequently Asked Questions Accordion */}
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-600">
            Frequently Inquired
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-stone-900">
            Everything You Wish To Know
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-xs"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-stone-900 hover:bg-stone-50 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-stone-400 transition-transform duration-200 shrink-0 ml-4 ${
                    openFaq === idx ? 'rotate-180 text-stone-900' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
