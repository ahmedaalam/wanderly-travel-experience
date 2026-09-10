import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Eleanor Vance-Sterling',
    role: 'Managing Partner, Art Advisory',
    location: 'London & Geneva',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    comment:
      'Wanderly orchestrated our family expedition to Kyoto with a level of cultural nuance and seamless grace I have rarely witnessed. The private tea ceremony with the Zen Abbot remains one of the most transcendent experiences of our lives.',
    destination: 'Kyoto Imperial Journey',
    date: 'Autumn Expedition',
  },
  {
    id: 'test-2',
    name: 'Julian & Marcus Thorne',
    role: 'Tech Founders & Angel Investors',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    comment:
      'From the moment our Riva yacht pulled up to Positano to our private helicopter transfer into Zermatt, Wanderly made travel feel effortlessly magical again. No queues, no friction, just pure beauty and impeccable discretion.',
    destination: 'Amalfi Coast & Swiss Alps',
    date: 'Summer Grand Tour',
  },
  {
    id: 'test-3',
    name: 'Dr. Soraya Al-Hassan',
    role: 'Architectural Director',
    location: 'Dubai & Milan',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    rating: 5,
    comment:
      'The Serengeti safari exceeded all our wildest expectations. Sleeping in private Singita tented villas under a sky of diamonds, listening to lion calls, while having our every preference anticipated—truly world-class stewardship.',
    destination: 'Serengeti & Ngorongoro',
    date: 'Winter Wildlife Odyssey',
  },
];

export const trustStats = [
  { value: '12+', label: 'Years of Excellence', detail: 'Curating bespoke high-end journeys worldwide' },
  { value: '48+', label: 'Countries Covered', detail: 'On-ground private concierge networks' },
  { value: '15,000+', label: 'Discerning Travelers', detail: 'Satisfied couples, families, and private groups' },
  { value: '99.4%', label: 'Client Satisfaction', detail: 'Five-star verified review average' },
];

export const trustBadges = [
  { name: 'Virtuoso Member', desc: 'Top 1% Global Luxury Travel Network' },
  { name: 'Traveller Made', desc: 'Designer of Bespoke Experiences' },
  { name: 'Certified B Corp', desc: '100% Carbon-Neutral Travel Commitment' },
  { name: 'ATOL Protected', desc: 'Complete Financial Peace of Mind' },
];
