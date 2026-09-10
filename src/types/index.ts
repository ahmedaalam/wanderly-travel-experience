export type Region = 'All' | 'Europe' | 'Asia' | 'Americas' | 'Africa' | 'Oceania' | 'Nordic';
export type TripType = 'All' | 'Luxury & Wellness' | 'Cultural Heritage' | 'Wildlife & Safari' | 'Coastal & Island' | 'Alpine & Adventure';

export interface Destination {
  id: string;
  name: string;
  country: string;
  region: Region;
  type: TripType;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  startingPrice: number;
  rating: number;
  reviewCount: number;
  duration: string;
  bestSeason: string;
  highlights: string[];
  inclusions: string[];
  featured?: boolean;
}

export interface Package {
  id: string;
  title: string;
  destination: string;
  country: string;
  region: Region;
  type: TripType;
  duration: string;
  groupSize: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  overview: string;
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  inclusions: string[];
  featured?: boolean;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
  destination: string;
  date: string;
}

export interface BookingRequest {
  destinationOrPackageId: string;
  title: string;
  fullName: string;
  email: string;
  phone: string;
  travelDate: string;
  guests: number;
  specialRequests?: string;
  totalEstimatedPrice: number;
}
