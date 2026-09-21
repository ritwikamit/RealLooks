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
  availableDays: number[]; // 0=Sunday, 1=Monday, etc.
  avatar: string;
}

export interface BookingRequest {
  id: string;
  serviceId: string;
  serviceName: string;
  servicePrice: number;
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
  name: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'hair' | 'grooming' | 'facial' | 'bridal' | 'interior';
  categoryLabel: string;
  imageUrl: string;
  description?: string;
}
