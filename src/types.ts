export type ServiceCategory =
  | 'hair'
  | 'grooming'
  | 'facial'
  | 'spa'
  | 'bridal';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategory;
  categoryName: string;
  description: string;
  durationMinutes: number;
  price: number;
  targetGender: 'Unisex' | 'Men' | 'Women';
  isPopular?: boolean;
  image?: string;
  includes?: string[];
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experienceYears: number;
  availableDays: number[];
  avatar: string;
  bio?: string;
  specialties?: string[];
}

export interface BookingRequest {
  id: string;
  serviceId: string;
  serviceName: string;
  servicePrice: number;
  serviceDuration: number;
  stylistId: string;
  stylistName: string;
  date: string;
  time: string;
  customerName: string;
  phone: string;
  email?: string;
  notes?: string;
  status: 'REQUESTED' | 'CONFIRMED' | 'CANCELLED';
  createdAt: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
}

export interface ReelItem {
  id: string;
  title: string;
  category: 'feature' | 'hair' | 'grooming';
  categoryLabel: string;
  videoUrl: string;
  description: string;
  featuredOnHome?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'hair' | 'grooming' | 'facial' | 'bridal' | 'interior';
  categoryLabel: string;
  imageUrl: string;
  description?: string;
}

export interface StoreProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  description: string;
  volume: string;
  image: string;
  tag?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
