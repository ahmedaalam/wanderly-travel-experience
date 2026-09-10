'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, ShieldCheck, Award, Globe, Leaf } from 'lucide-react';
import WanderlyLogoMark from './WanderlyLogoMark';
import { useToast } from './Toast';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address', undefined, 'error');
      return;
    }
    setSubscribed(true);
    showToast(
      'Welcome to Wanderly Private Dispatch',
      'You will receive exclusive quarterly destination dossiers and private voyage invitations.',
      'success'
    );
    setEmail('');
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-20 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
          <div className="lg:col-span-6 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <WanderlyLogoMark
                size={40}
                variant="light"
                className="shrink-0 transition-transform duration-500 group-hover:rotate-3"
              />
              <div>
                <span className="text-2xl font-serif font-bold text-white tracking-wider">
                  WANDERLY
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-stone-400">
                  Private Expeditions & Luxury Travel
                </span>
              </div>
            </Link>

            <p className="text-stone-400 text-sm leading-relaxed max-w-md">
              We design transformative journeys for discerning travelers. Every itinerary is hand-crafted with rare insider access, private aviation, and five-star sanctuary accommodations.
            </p>

            {/* Luxury Accreditation Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="flex items-center gap-2 text-stone-400">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs">Virtuoso Member</span>
              </div>
              <div className="flex items-center gap-2 text-stone-400">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs">Traveller Made</span>
              </div>
              <div className="flex items-center gap-2 text-stone-400">
                <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs">100% Carbon Offset</span>
              </div>
              <div className="flex items-center gap-2 text-stone-400">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs">ATOL Bonded</span>
              </div>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-stone-900/80 p-8 rounded-3xl border border-stone-800">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Mail className="w-4 h-4" />
                <span>The Private Dispatch</span>
              </div>
              <h3 className="text-xl font-serif text-white font-medium mb-2">
                Curated travel insights, privately delivered.
              </h3>
              <p className="text-xs text-stone-400 mb-6">
                Receive secret villa openings, seasonal migration itineraries, and invitations to private charters. Zero spam.
              </p>

              {subscribed ? (
                <div className="p-3 bg-stone-800/80 rounded-xl border border-emerald-500/30 text-emerald-400 text-xs text-center font-medium">
                  Thank you for subscribing. Your invitation has been dispatched.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your private email..."
                    className="flex-1 bg-stone-950 border border-stone-700 rounded-full px-5 py-3 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-white transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-white text-stone-950 px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-stone-200 transition-colors flex items-center justify-center gap-2 shrink-0 active:scale-95"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 text-sm">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Destinations
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/destinations" className="text-stone-400 hover:text-white transition-colors">
                  Amalfi Coast & Capri
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-stone-400 hover:text-white transition-colors">
                  Kyoto & Nara
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-stone-400 hover:text-white transition-colors">
                  Zermatt & St. Moritz
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-stone-400 hover:text-white transition-colors">
                  Serengeti Wilderness
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-stone-400 hover:text-white transition-colors">
                  Icelandic Auroras
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Expeditions
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/packages" className="text-stone-400 hover:text-white transition-colors">
                  Signature Packages
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-stone-400 hover:text-white transition-colors">
                  Private Yacht Charters
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-stone-400 hover:text-white transition-colors">
                  Alpine Ski & Chalets
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-stone-400 hover:text-white transition-colors">
                  Luxury Wellness Retreats
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-stone-400 hover:text-white transition-colors">
                  Bespoke Itinerary Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              The Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-stone-400 hover:text-white transition-colors">
                  Our Philosophy & Story
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-400 hover:text-white transition-colors">
                  Sustainability & B Corp
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-400 hover:text-white transition-colors">
                  Concierge Leadership
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-400 hover:text-white transition-colors">
                  Press & Accolades
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-400 hover:text-white transition-colors">
                  VIP Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-4">
              Direct Inquiries
            </h4>
            <ul className="space-y-2.5 text-stone-400">
              <li>London: +44 20 7946 0912</li>
              <li>New York: +1 (212) 555-0199</li>
              <li>Zurich: +41 44 668 1120</li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-white font-medium hover:underline"
                >
                  <span>Request Custom Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Wanderly Luxury Expeditions Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-400 cursor-pointer">Privacy Charter</span>
            <span className="hover:text-stone-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-stone-400 cursor-pointer">Cookie Settings</span>
            <span className="hover:text-stone-400 cursor-pointer">Security Protocol</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
