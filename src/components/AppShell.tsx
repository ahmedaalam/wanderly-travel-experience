'use client';

import React, { useState, createContext, useContext, ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BookingModal from './BookingModal';
import { ToastProvider } from './Toast';

interface BookingContextType {
  openBookingModal: (item?: {
    id: string;
    title: string;
    country: string;
    price: number;
    duration?: string;
    image?: string;
  }) => void;
  closeBookingModal: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within an AppShell');
  }
  return context;
}

export default function AppShell({ children }: { children: ReactNode }) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedBookingItem, setSelectedBookingItem] = useState<{
    id: string;
    title: string;
    country: string;
    price: number;
    duration?: string;
    image?: string;
  } | null>(null);

  const openBookingModal = (item?: {
    id: string;
    title: string;
    country: string;
    price: number;
    duration?: string;
    image?: string;
  }) => {
    if (item) {
      setSelectedBookingItem(item);
    } else {
      setSelectedBookingItem({
        id: 'bespoke-expedition',
        title: 'Custom Curated Expedition',
        country: 'Worldwide Sanctuary',
        price: 4500,
        duration: 'Custom Itinerary',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop',
      });
    }
    setBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setBookingModalOpen(false);
  };

  return (
    <ToastProvider>
      <BookingContext.Provider value={{ openBookingModal, closeBookingModal }}>
        <div className="min-h-screen flex flex-col bg-[#fbfbfd] text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
          <Navbar onOpenBooking={() => openBookingModal()} />
          <main className="flex-1 w-full">{children}</main>
          <Footer />

          {/* Universal Booking Modal */}
          <BookingModal
            isOpen={bookingModalOpen}
            onClose={closeBookingModal}
            item={selectedBookingItem}
          />
        </div>
      </BookingContext.Provider>
    </ToastProvider>
  );
}
