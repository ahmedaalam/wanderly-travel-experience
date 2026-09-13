'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import WanderlyLogoMark from './WanderlyLogoMark';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Packages', href: '/packages' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const handlePlanTrip = () => {
    setMobileMenuOpen(false);
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      router.push('/packages');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/70 shadow-xs'
          : 'py-5 bg-gradient-to-b from-black/50 via-black/20 to-transparent backdrop-blur-[2px]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-transform duration-300 hover:opacity-90"
          >
            <WanderlyLogoMark
              size={32}
              variant={isScrolled ? 'dark' : 'light'}
              className="shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span
                className={`text-base font-semibold tracking-tight transition-colors duration-300 ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}
              >
                WANDERLY
              </span>
              <span
                className={`text-[9px] uppercase tracking-widest font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-slate-400' : 'text-white/70'
                }`}
              >
                Travel Experience
              </span>
            </div>
          </Link>

          {/* Center Apple-style Nav Pill */}
          <nav className="hidden md:flex items-center gap-1">
            <div
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'bg-slate-100/80 border border-slate-200/60'
                  : 'bg-white/10 backdrop-blur-md border border-white/15'
              }`}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? isScrolled
                          ? 'bg-white text-slate-950 shadow-xs'
                          : 'bg-white text-slate-950 shadow-xs font-semibold'
                        : isScrolled
                        ? 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
                        : 'text-white/80 hover:text-white hover:bg-white/15'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handlePlanTrip}
              className={`inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-full transition-all duration-300 active:scale-95 ${
                isScrolled
                  ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-xs'
                  : 'bg-white text-slate-900 hover:bg-white/90 shadow-sm'
              }`}
            >
              <span>Start Journey</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-75" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? 'text-slate-900 hover:bg-slate-100'
                  : 'text-white hover:bg-white/15'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Glass Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 px-6 py-6 shadow-xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-900 text-white font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={handlePlanTrip}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-medium py-3 rounded-full shadow hover:bg-slate-800 text-xs uppercase tracking-wider"
              >
                <span>Start Your Journey</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
