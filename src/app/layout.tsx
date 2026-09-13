import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AppShell from '@/components/AppShell';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Wanderly | Discover Journeys Beyond Destinations',
  description:
    'Wanderly crafts tailor-made expeditions for discerning travelers. Private aviation, clifftop sanctuaries, Michelin gastronomy, and rare insider access curated without compromise.',
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
    title: 'Wanderly | Travel Beyond Destinations',
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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#fbfbfd] text-slate-900 min-h-screen flex flex-col selection:bg-slate-900 selection:text-white">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
