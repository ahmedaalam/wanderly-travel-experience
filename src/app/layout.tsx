import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import AppShell from '@/components/AppShell';

const sansFont = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const serifFont = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wanderly | Bespoke Luxury Expeditions & Curated Journeys',
  description:
    'Wanderly crafts tailor-made expeditions for discerning travelers. Private aviation, clifftop sanctuaries, Michelin gastronomy, and unprecedented insider access across the globe.',
  keywords: [
    'luxury travel',
    'bespoke expeditions',
    'private yacht charter',
    'amalfi coast luxury',
    'kyoto ryokan',
    'swiss alps chalets',
    'serengeti luxury safari',
  ],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Wanderly | Curated Journeys for the Discerning Traveler',
    description:
      'Immerse in transcendent travel experiences with Wanderly. Handcrafted private itineraries, 24/7 dedicated concierge, and five-star sanctuaries worldwide.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#fafaf9] text-stone-900 min-h-screen flex flex-col">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
