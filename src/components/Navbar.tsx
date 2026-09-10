'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import WanderlyLogoMark from './WanderlyLogoMark';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Packages', href: '/packages' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-stone-200/60 shadow-sm py-3'
          : 'bg-gradient-to-b from-black/40 via-black/15 to-transparent backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-transform duration-200 hover:scale-[1.01]"
          >
            <WanderlyLogoMark
              size={36}
              variant={isScrolled ? 'dark' : 'light'}
              className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 drop-shadow-sm"
            />
            <div className="flex flex-col">
              <span
                className={`text-xl font-semibold tracking-tight font-serif transition-colors ${
                  isScrolled ? 'text-stone-900' : 'text-white drop-shadow-sm'
                }`}
              >
                WANDERLY
              </span>
              <span
                className={`text-[9px] uppercase tracking-widest font-medium transition-colors ${
                  isScrolled ? 'text-stone-500' : 'text-white/80'
                }`}
              >
                Private Journeys
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-stone-900/5 dark:bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-black/5 dark:border-white/10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? isScrolled
                        ? 'bg-stone-900 text-white shadow-sm'
                        : 'bg-white text-stone-950 shadow-md font-semibold'
                      : isScrolled
                      ? 'text-stone-600 hover:text-stone-950 hover:bg-stone-200/50'
                      : 'text-white/90 hover:text-white hover:bg-white/15'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={`flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full transition-colors ${
                isScrolled
                  ? 'text-stone-600 hover:text-stone-900'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>VIP Concierge</span>
            </Link>

            <button
              onClick={() => {
                if (onOpenBooking) {
                  onOpenBooking();
                } else {
                  window.location.href = '/packages';
                }
              }}
              className={`flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 ${
                isScrolled
                  ? 'bg-stone-900 text-white hover:bg-stone-800'
                  : 'bg-white text-stone-950 hover:bg-stone-100'
              }`}
            >
              <span>Plan a Trip</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? 'text-stone-900 hover:bg-stone-100'
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-stone-900/95 backdrop-blur-2xl border-b border-stone-800 px-6 py-6 shadow-2xl transition-all duration-300">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-white text-stone-950 font-semibold'
                      : 'text-stone-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-stone-800 flex flex-col gap-3">
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 text-stone-300 py-2.5 text-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>+1 (800) 926-3375 • 24/7 VIP Line</span>
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBooking) {
                    onOpenBooking();
                  } else {
                    window.location.href = '/packages';
                  }
                }}
                className="w-full flex items-center justify-center gap-2 bg-white text-stone-950 font-medium py-3 rounded-xl shadow hover:bg-stone-100 active:scale-95 text-sm uppercase tracking-wider"
              >
                <span>Request Itinerary Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
