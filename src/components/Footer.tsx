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
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-16 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section: Brand + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800/80">
          <div className="lg:col-span-6 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <WanderlyLogoMark
                size={36}
                variant="light"
                className="shrink-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <span className="text-xl font-medium text-white tracking-tight">
                  WANDERLY
                </span>
                <span className="block text-[9px] uppercase tracking-widest text-slate-500">
                  Curated Travel Experiences
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md font-light">
              We design transformative journeys for discerning travelers. Every itinerary is handcrafted with rare insider access, private aviation, and five-star sanctuary accommodations.
            </p>

            {/* Accreditation Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-light">
                <Award className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Virtuoso Member</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-light">
                <Globe className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>Traveller Made</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-light">
                <Leaf className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% Carbon Offset</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-light">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>ATOL Protected</span>
              </div>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-800">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-medium uppercase tracking-wider mb-2">
                <Mail className="w-3.5 h-3.5" />
                <span>The Private Dispatch</span>
              </div>
              <h3 className="text-lg text-white font-normal mb-2">
                Curated travel insights, quietly delivered.
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-light">
                Receive confidential sanctuary openings, migration itineraries, and private charter dossiers. Zero clutter.
              </p>

              {subscribed ? (
                <div className="p-3 bg-slate-800/80 rounded-full border border-emerald-500/30 text-emerald-400 text-xs text-center font-medium">
                  Thank you for subscribing. Your invitation has been dispatched.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-full px-5 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-white text-slate-950 px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 shrink-0 active:scale-95"
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 text-xs font-light">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-medium mb-4">
              Destinations
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/destinations" className="text-slate-400 hover:text-white transition-colors">
                  Amalfi Coast & Capri
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-slate-400 hover:text-white transition-colors">
                  Kyoto & Arashiyama
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-slate-400 hover:text-white transition-colors">
                  Zermatt & St. Moritz
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-slate-400 hover:text-white transition-colors">
                  Serengeti Wilderness
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-slate-400 hover:text-white transition-colors">
                  Icelandic Auroras
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-medium mb-4">
              Expeditions
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/packages" className="text-slate-400 hover:text-white transition-colors">
                  Signature Packages
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-slate-400 hover:text-white transition-colors">
                  Private Yacht Charters
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-slate-400 hover:text-white transition-colors">
                  Alpine Chalets
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-slate-400 hover:text-white transition-colors">
                  Wellness Sanctuaries
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-slate-400 hover:text-white transition-colors">
                  Custom Itineraries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-medium mb-4">
              The Company
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  Philosophy & Craft
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  Ecological Integrity
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  Expedition Architects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  Patron Stories
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Careers & Fellowships
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white font-medium mb-4">
              Direct Liaison
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>London: +44 20 7946 0912</li>
              <li>New York: +1 (212) 555-0199</li>
              <li>Zurich: +41 44 668 1120</li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-white font-medium hover:text-indigo-300 transition-colors"
                >
                  <span>Request Custom Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-light">
          <p>© {new Date().getFullYear()} Wanderly Travel Experience. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Charter</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Security Protocol</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
