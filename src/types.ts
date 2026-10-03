export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  priceNote?: string;
  category: string;
  benefits: string[];
  indications: string[];
  image?: string;
}

export interface BusinessInfo {
  name: string;
  shortName: string;
  legalName?: string;
  segment: string;
  tagline: string;
  description: string;
  city: string;
  fullAddress: string;
  addressShort: string;
  cep: string;
  mapsUrl: string;
  phone: string;
  whatsappLink: string;
  whatsappNumber: string;
  instagramUrl: string;
  instagramHandle: string;
  hours: string;
  bookingPolicy: string;
}

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  comment: string;
  procedureTag: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  category: string;
}

export interface BookingSlot {
  time: string;
  period: 'morning' | 'afternoon' | 'evening';
  available: boolean;
}

export interface BookingState {
  serviceId: string;
  date: string;
  time: string;
  fullName: string;
  phone: string;
  notes: string;
}
