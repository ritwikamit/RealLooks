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
  specialty?: string;
  specialties?: string[];
  experienceYears: number;
  availableDays?: number[];
  avatar: string;
  bio?: string;
  rating?: number;
  isAvailable?: boolean;
}

export interface BookingRequest {
  id: string;
  serviceId: string;
  serviceName: string;
  servicePrice: number;
  price?: number;
  serviceDuration: number;
  stylistId: string;
  stylistName: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm AM/PM
  customerName: string;
  phone: string;
  email?: string;
  notes?: string;
  status: 'REQUESTED' | 'CONFIRMED' | 'CANCELLED';
  createdAt: string;
}

export interface ReviewItem {
  id: string;
  author?: string;
  name?: string;
  role?: string;
  rating: number;
  date: string;
  service?: string;
  serviceTaken?: string;
  comment: string;
  verified: boolean;
  avatar?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categoryLabel?: string;
  imageUrl: string;
  caption?: string;
  description?: string;
}

export interface StoreProduct {
  id: string;
  name: string;
  tagline?: string;
  category: string;
  price: number;
  oldPrice?: number;
  originalPrice?: number;
  volume: string;
  image: string;
  rating?: number;
  badge?: string;
  description: string;
  inStock?: boolean;
  isOrganic?: boolean;
}

export interface FAQItem {
  id?: string;
  question: string;
  answer: string;
  category?: string;
}

export interface TimeSlot {
  time: string;
  period: 'Morning' | 'Afternoon' | 'Evening';
  isAvailable: boolean;
}
