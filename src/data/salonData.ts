import { ServiceItem, Stylist, ReviewItem, GalleryItem, StoreProduct, FAQItem, TimeSlot } from '../types';

export const SALON_INFO = {
  name: 'Real Looks Unisex Salon',
  tagline: 'Look Good • Feel Good • Be You',
  heroHeadline: 'YOUR LOOK. YOUR SIGNATURE.',
  heroSubtitle: 'Modern grooming and beauty experiences tailored for men and women in Aurangabad, Bihar.',
  address: 'Q957+RR4, near Vayuputra Fitness Club, Dani Bigha, Aurangabad, Bihar 824101, India',
  shortAddress: 'Dani Bigha, near Vayuputra Fitness Club, Aurangabad, Bihar',
  phone: '+91 98765 43210',
  phoneClean: '+919876543210',
  whatsapp: '919876543210',
  email: 'reallookssalon.aurangabad@gmail.com',
  instagram: 'https://www.instagram.com/reallookssalon_aurangabad/',
  facebook: 'https://www.facebook.com/people/Real-looks-salon/61593344644843/',
  mapsUrl: 'https://maps.google.com/?q=Q957%2BRR4,+near+Vayuputra+Fitness+Club,+Dani+Bigha,+Aurangabad,+Bihar+824101,+India',
  hours: 'Mon – Sun: 9:00 AM – 9:00 PM',
  established: 'Aurangabad, Bihar',
  rating: 4.9,
  reviewCount: 850,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'hairdressing',
    name: 'Precision Hairdressing & Styling',
    category: 'hair',
    categoryName: 'Hair Artistry',
    description: 'Bespoke precision haircuts, thermal blowout styling, texture framing, and organic serum shine.',
    durationMinutes: 45,
    price: 450,
    targetGender: 'Unisex',
    isPopular: true,
    image: '/images/clandestine/service-images/hairdressing.webp',
    includes: ['Consultation', 'Scalp Wash', 'Precision Cut', 'Blowout Finish']
  },
  {
    id: 'facial',
    name: 'Deep Radiance Facial Therapy',
    category: 'facial',
    categoryName: 'Skin & Facial Glow',
    description: 'Ultrasonic pore detoxification, organic botanical peel, micro-circulation massage, and hydrating collagen mask.',
    durationMinutes: 60,
    price: 1299,
    targetGender: 'Unisex',
    isPopular: true,
    image: '/images/clandestine/service-images/facial.webp',
    includes: ['Pore Cleanse', 'Botanical Exfoliation', 'Lymphatic Massage', 'Collagen Veil']
  },
  {
    id: 'brow-shaping',
    name: 'Architectural Brow Sculpting & Tint',
    category: 'grooming',
    categoryName: 'Face & Brows',
    description: 'Facial-mapping eyebrow architecture, threading, herbal tinting, and soothing tea tree balm.',
    durationMinutes: 25,
    price: 250,
    targetGender: 'Unisex',
    isPopular: false,
    image: '/images/clandestine/service-images/brow-shaping.webp',
    includes: ['Golden Ratio Mapping', 'Precision Threading', 'Natural Tint', 'Calming Mist']
  },
  {
    id: 'laser-hair-removal',
    name: 'Nanoplastia & Hair Botox Treatment',
    category: 'spa',
    categoryName: 'Hair Restoration',
    description: 'Deep protein infusion that eliminates frizz, strengthens internal keratin bonds, and delivers mirror gloss for 6 months.',
    durationMinutes: 120,
    price: 2499,
    targetGender: 'Unisex',
    isPopular: true,
    image: '/images/clandestine/service-images/laser-hair-removal.webp',
    includes: ['Clarifying Cleanse', 'Nanoplastia Infusion', 'Thermal Seal', 'Gloss Lock']
  },
  {
    id: 'makeup',
    name: 'Haute Editorial & Bridal Makeup',
    category: 'bridal',
    categoryName: 'Bridal & Occasions',
    description: 'High-definition airbrush artistry, waterproof long-wear base, customized lashes, and luminous contouring.',
    durationMinutes: 90,
    price: 3499,
    targetGender: 'Women',
    isPopular: true,
    image: '/images/clandestine/service-images/makeup.webp',
    includes: ['HD Skin Prep', 'Airbrush Base', 'Smudgeproof Eye Art', 'Lash Application']
  },
  {
    id: 'manicure',
    name: 'Royal Spa Manicure & Pedicure',
    category: 'spa',
    categoryName: 'Nail & Hand Care',
    description: 'Dead sea salt soak, botanical exfoliation, cuticle therapy, acupressure massage, and gel enamel polish.',
    durationMinutes: 50,
    price: 799,
    targetGender: 'Unisex',
    isPopular: false,
    image: '/images/clandestine/service-images/manicure.webp',
    includes: ['Mineral Soak', 'Exfoliating Scrub', 'Hand Massage', 'Gel Finish']
  },
  {
    id: 'beard-sculpt',
    name: 'Royal Beard Sculpt & Hot Towel Shave',
    category: 'grooming',
    categoryName: 'Men Grooming',
    description: 'Razor sharp contouring, warm eucalyptus steam towel, antiseptic alum rub, and sandalwood butter finish.',
    durationMinutes: 30,
    price: 250,
    targetGender: 'Men',
    isPopular: true,
    image: '/images/clandestine/service-images/hairdressing.webp',
    includes: ['Pre-Shave Oil', 'Hot Towel Wrap', 'Straight-Razor Lineup', 'Beard Butter']
  }
];

export const STYLISTS: Stylist[] = [
  {
    id: 'sharon-katz',
    name: 'Sharon Katz',
    role: 'Creative Hair Director',
    specialty: 'Nanoplastia & Precision Bob Cuts',
    experienceYears: 11,
    avatar: '/images/clandestine/masters/sharon-katz.webp',
    specialties: ['Nanoplastia & Botox', 'Precision Bob Cuts', 'Balayage Color'],
    bio: 'Renowned for fluid, effortless hair sculpting and transformative organic keratin infusions with over a decade of mastery.',
    rating: 5.0,
    isAvailable: true
  },
  {
    id: 'mark-franklin',
    name: 'Mark Franklin',
    role: 'Master Barber & Stylist',
    specialty: 'Royal Beard Sculpting & Fade Artistry',
    experienceYears: 9,
    avatar: '/images/clandestine/masters/mark-franklin.webp',
    specialties: ['Royal Beard Sculpting', 'Fade Artistry', 'Scalp Therapy'],
    bio: 'Artisan barber specializing in razor-sharp lines, classic executive fades, and invigorating hot-towel scalp rituals.',
    rating: 4.9,
    isAvailable: true
  },
  {
    id: 'maria-garcia',
    name: 'Maria Garcia',
    role: 'Senior Esthetician & Skin Specialist',
    specialty: '24K Gold Facials & Bridal Glow',
    experienceYears: 8,
    avatar: '/images/clandestine/masters/maria-garcia.webp',
    specialties: ['24K Gold Facials', 'Detox Hydration', 'Bridal Skin Glow'],
    bio: 'Certified dermacare specialist dedicated to non-invasive cellular glow, ultrasonic deep cleansing, and anti-aging remedies.',
    rating: 5.0,
    isAvailable: true
  },
  {
    id: 'aviva-mar',
    name: 'Aviva Mar',
    role: 'Color & Texture Specialist',
    specialty: 'Dimensional Color & Silk Smooth Treatments',
    experienceYears: 7,
    avatar: '/images/clandestine/masters/aviva-mar.webp',
    specialties: ['Dimensional Color', 'Curated Tones', 'Silk Smooth Treatments'],
    bio: 'Passionate colorist bringing vibrant shine, customized undertone matching, and damage-free lightening techniques.',
    rating: 4.9,
    isAvailable: true
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Hannah Miller',
    role: 'Verified Client',
    avatar: '/images/clandestine/testimonials/hannah-miller.webp',
    serviceTaken: 'Hair Botox & Cut',
    rating: 5,
    comment: 'The nanoplastia and styling was transformative! My hair has never felt so silky and glossy. Real Looks is on a completely different level of luxury.',
    date: '2 days ago',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Naomi Bright',
    role: 'Regular Patron',
    avatar: '/images/clandestine/testimonials/naomi-bright.webp',
    serviceTaken: 'Radiance Facial & Brow',
    rating: 5,
    comment: 'The 24K facial therapy cleared my congested skin instantly. Maria was incredibly gentle, and the ambiance is so peaceful and refined.',
    date: '1 week ago',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Talia Lewin',
    role: 'Bridal Client',
    avatar: '/images/clandestine/testimonials/talia-lewin.webp',
    serviceTaken: 'Bridal Makeover',
    rating: 5,
    comment: 'Booked my pre-wedding glow and makeup here. The team listened to every detail and created an ethereal look that lasted all evening!',
    date: '2 weeks ago',
    verified: true
  }
];

export const STORE_PRODUCTS: StoreProduct[] = [
  {
    id: 'prod-shampoo',
    name: 'Restorative Botanical Shampoo',
    category: 'Hair Care',
    description: 'Sulfate-free keratin replenishing wash infused with organic argan and green tea antioxidants.',
    volume: '250 ml',
    price: 1200,
    oldPrice: 1450,
    image: '/images/clandestine/products/shampoo.webp',
    inStock: true,
    isOrganic: true
  },
  {
    id: 'prod-serum',
    name: 'Nourishing Moroccan Hair Serum',
    category: 'Hair Care',
    description: 'Ultra-lightweight cold-pressed argan elixir providing 48-hour thermal protection and brilliant gloss.',
    volume: '100 ml',
    price: 1450,
    oldPrice: 1750,
    image: '/images/clandestine/products/serum.webp',
    inStock: true,
    isOrganic: true
  },
  {
    id: 'prod-lotion',
    name: 'Botanical Velvet Body Lotion',
    category: 'Body Care',
    description: 'Deep hydration formula enriched with shea butter, aloe vera, and delicate neroli essence.',
    volume: '300 ml',
    price: 950,
    image: '/images/clandestine/products/lotion.webp',
    inStock: true,
    isOrganic: true
  },
  {
    id: 'prod-candle',
    name: 'Aromatherapy Studio Candle',
    category: 'Wellness',
    description: 'Hand-poured pure soy wax candle infused with lavender, sandalwood, and amber for relaxing evenings.',
    volume: '200 g',
    price: 750,
    image: '/images/clandestine/products/candle.webp',
    inStock: true,
    isOrganic: true
  },
  {
    id: 'prod-cream',
    name: 'Hydrating Face Infusion Cream',
    category: 'Skin Care',
    description: 'Intense peptide barrier restoration cream designed to lock in moisture and revitalize dull skin.',
    volume: '50 ml',
    price: 1650,
    oldPrice: 1950,
    image: '/images/clandestine/products/cream.webp',
    inStock: true,
    isOrganic: true
  },
  {
    id: 'prod-oil',
    name: 'Essential Radiance Treatment Oil',
    category: 'Face & Hair',
    description: 'Multi-purpose 24K gold infused botanical dry oil that deeply nourishes skin, beard, and hair ends.',
    volume: '60 ml',
    price: 1150,
    image: '/images/clandestine/products/oil.webp',
    inStock: true,
    isOrganic: true
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I schedule an appointment with a specific master?',
    answer: 'You can click "Book Appointment" on any master card in the Meet Our Masters section, or use our 5-step booking wizard where you can choose your preferred stylist, date, and time slot.'
  },
  {
    id: 'faq-2',
    question: 'What hygiene standards do you maintain at Real Looks?',
    answer: 'We operate under strict hospital-grade cleanliness standards. All metal instruments undergo 3-step ultrasonic cleaning followed by medical autoclave and UV sterilization. Towels and capes are strictly single-use or sanitized at 90°C.'
  },
  {
    id: 'faq-3',
    question: 'What is the difference between Hair Botox and Keratin?',
    answer: 'Keratin treatments focus on maximum straightening and bond reformation, while Hair Botox is a deep restorative conditioning treatment with hyaluronic acid and collagen that eliminates frizz and repairs damaged fibers without formaldehyde.'
  },
  {
    id: 'faq-4',
    question: 'Are walk-ins accepted or is prior reservation required?',
    answer: 'We always welcome walk-ins! However, to minimize waiting times and guarantee your preferred master stylist during peak evening and weekend hours, we recommend booking online or via WhatsApp.'
  },
  {
    id: 'faq-5',
    question: 'How far in advance should bridal services be booked?',
    answer: 'For wedding packages and pre-bridal skin/hair regimens, we recommend reserving your slots 3 to 6 weeks in advance to schedule trial consultations and customized skin prep routines.'
  },
  {
    id: 'faq-6',
    question: 'Can I purchase your boutique aftercare products in-salon?',
    answer: 'Yes! All curated botanical formulas shown in our Salon Boutique section are available directly at our front desk or via WhatsApp reservation for in-salon pickup.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Editorial Balayage',
    category: 'Hair',
    imageUrl: '/images/clandestine/service-images/hairdressing.webp',
    caption: 'Seamless dimensional honey tones'
  },
  {
    id: 'g-2',
    title: 'Hydra Facial Glow',
    category: 'Skin',
    imageUrl: '/images/clandestine/service-images/facial.webp',
    caption: 'Deep pore radiance therapy'
  },
  {
    id: 'g-3',
    title: 'Royal Beard Sculpt',
    category: 'Grooming',
    imageUrl: '/images/clandestine/service-images/brow-shaping.webp',
    caption: 'Crisp razor contouring'
  },
  {
    id: 'g-4',
    title: 'Nanoplastia Gloss',
    category: 'Hair',
    imageUrl: '/images/clandestine/service-images/laser-hair-removal.webp',
    caption: 'Mirror shine keratin infusion'
  }
];

export const PROMO_DATA = {
  activeOffer: '🌟 Spring Renewal: Flat 20% OFF on Hair Botox & 24K Gold Facial packages this week!',
  code: 'LUXE20'
};

export const TIME_SLOTS: TimeSlot[] = [
  { time: '09:00 AM', period: 'Morning', isAvailable: true },
  { time: '09:45 AM', period: 'Morning', isAvailable: true },
  { time: '10:30 AM', period: 'Morning', isAvailable: true },
  { time: '11:15 AM', period: 'Morning', isAvailable: true },
  { time: '12:00 PM', period: 'Afternoon', isAvailable: true },
  { time: '01:00 PM', period: 'Afternoon', isAvailable: true },
  { time: '02:00 PM', period: 'Afternoon', isAvailable: true },
  { time: '03:00 PM', period: 'Afternoon', isAvailable: true },
  { time: '04:00 PM', period: 'Afternoon', isAvailable: true },
  { time: '05:00 PM', period: 'Evening', isAvailable: true },
  { time: '06:00 PM', period: 'Evening', isAvailable: true },
  { time: '07:00 PM', period: 'Evening', isAvailable: true },
  { time: '08:00 PM', period: 'Evening', isAvailable: true },
];

