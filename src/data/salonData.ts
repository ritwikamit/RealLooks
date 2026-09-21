import { ServiceItem, Stylist, ReviewItem, GalleryItem } from '../types';

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
  rating: 4.5,
  reviewCount: 48,
};

export const SERVICES: ServiceItem[] = [
  // Hair Services
  {
    id: 'hair-cut-style-men',
    name: "Executive Haircut & Style (Men)",
    category: 'hair',
    categoryName: 'Hair Styling & Cuts',
    description: 'Precision cut suited to facial profile, relaxing hair wash, blow dry styling & texture hold.',
    durationMinutes: 35,
    price: 250,
    targetGender: 'Men',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80',
    includes: ['Consultation', 'Custom Cut', 'Scalp Refresh', 'Styling Pomade / Wax']
  },
  {
    id: 'hair-cut-style-women',
    name: "Designer Haircut & Blow Dry (Women)",
    category: 'hair',
    categoryName: 'Hair Styling & Cuts',
    description: 'Layering, feathering, or precision bobs customized with thermal blowout and serum polish.',
    durationMinutes: 45,
    price: 450,
    targetGender: 'Women',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
    includes: ['Wash & Condition', 'Layering / Cut', 'Blowout Styling', 'Heat Protectant Serum']
  },
  {
    id: 'hair-keratin-botox',
    name: 'Advanced Hair Botox & Keratin Treatment',
    category: 'spa',
    categoryName: 'Hair Spa & Treatments',
    description: 'Deep protein infusion that eliminates frizz, restores glossy shine, and repairs split ends.',
    durationMinutes: 120,
    price: 2499,
    targetGender: 'Unisex',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    includes: ['Clarifying Wash', 'Nanoplastia/Botox Formula', 'Thermal Infusion', 'Shine Seal']
  },
  {
    id: 'hair-spa-intense',
    name: 'Moroccan Argan Hair Spa',
    category: 'spa',
    categoryName: 'Hair Spa & Treatments',
    description: 'Intense hydration therapy for damaged, dry hair with restorative scalp massage and ozone steam.',
    durationMinutes: 50,
    price: 899,
    targetGender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=600&q=80',
    includes: ['Argan Nourish Masque', '15-min Acupressure Scalp Massage', 'Steam Treatment', 'Rinse & Blowout']
  },
  {
    id: 'beard-sculpt-shave',
    name: 'Royal Beard Sculpt & Hot Towel Shave',
    category: 'grooming',
    categoryName: 'Beard & Grooming',
    description: 'Sharp razor detailing, warm herbal steam towel, soothing aftershave balm, and beard conditioning oil.',
    durationMinutes: 30,
    price: 200,
    targetGender: 'Men',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80',
    includes: ['Pre-shave Oil', 'Hot Towel Wrap', 'Straight-edge Razor Lineup', 'Beard Butter Application']
  },
  {
    id: 'beard-color-spa',
    name: 'Beard Color & Conditioning Spa',
    category: 'grooming',
    categoryName: 'Beard & Grooming',
    description: 'Ammonia-free natural grey coverage for beard with softening organic oils and skin barrier care.',
    durationMinutes: 30,
    price: 350,
    targetGender: 'Men',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    includes: ['Color Matching', 'Grey Coverage', 'Nourishing Wash', 'Beard Conditioning']
  },
  {
    id: 'facial-gold-glow',
    name: '24K Golden Radiance Facial',
    category: 'facial',
    categoryName: 'Skin & Facial Glow',
    description: 'Luxurious micro-dermabrasion, 24k gold leaf infusion, lymphatic drainage massage, and brightening peel-off mask.',
    durationMinutes: 60,
    price: 1299,
    targetGender: 'Unisex',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80',
    includes: ['Deep Pore Cleanse', 'Exfoliating Scrub', 'Gold Serum Infusion', 'Peel-Off Gold Mask']
  },
  {
    id: 'facial-hydra-derma',
    name: 'Hydra-Deep Pore Detox Facial',
    category: 'facial',
    categoryName: 'Skin & Facial Glow',
    description: 'Vortex suction blackhead extraction, vitamin C mist, ice-globe soothing therapy, and SPF shield.',
    durationMinutes: 50,
    price: 999,
    targetGender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1512290900672-1f55b6c0032e?auto=format&fit=crop&w=600&q=80',
    includes: ['Steam & Ultrasonic Extraction', 'Hydrating Hyaluronic Tonic', 'Ice Globe Massage', 'Moisture Lock']
  },
  {
    id: 'bridal-makeover',
    name: 'Signature Bridal / Groom Makeover',
    category: 'bridal',
    categoryName: 'Bridal & Occasion',
    description: 'Complete ceremony makeover including HD makeup, draping, hairstyle design, skin priming, and touch-up kit.',
    durationMinutes: 150,
    price: 4999,
    targetGender: 'Unisex',
    isPopular: true,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
    includes: ['HD Makeup / Grooming', 'Hair Styling & Adornment', 'Draping / Styling', 'Fixing Spray & Kit']
  },
  {
    id: 'hair-color-balayage',
    name: 'Custom Hair Highlights & Balayage',
    category: 'hair',
    categoryName: 'Hair Styling & Cuts',
    description: 'Hand-painted dimensional balayage, toner application, and gloss treatment for natural sun-kissed reflection.',
    durationMinutes: 90,
    price: 1899,
    targetGender: 'Unisex',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80',
    includes: ['Shade Consultation', 'Lightening & Balayage', 'Toning Gloss', 'Deep Moisture Mask']
  }
];

export const STYLISTS: Stylist[] = [
  {
    id: 'any',
    name: 'First Available Specialist',
    role: 'Recommended for quickest appointment',
    specialty: 'Any available senior staff',
    experienceYears: 6,
    availableDays: [0, 1, 2, 3, 4, 5, 6],
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'stylist-rahul',
    name: 'Rahul Kumar',
    role: 'Senior Hair & Texture Specialist',
    specialty: 'Precision cuts, Fades, Keratin & Hair Botox',
    experienceYears: 8,
    availableDays: [1, 2, 3, 4, 5, 6],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'stylist-priya',
    name: 'Priya Sharma',
    role: 'Aesthetics & Bridal Stylist',
    specialty: 'Facials, HD Bridal Makeup & Women Hair Designs',
    experienceYears: 7,
    availableDays: [0, 1, 2, 4, 5, 6],
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'stylist-amit',
    name: 'Amit Verma',
    role: 'Master Barber & Beard Artist',
    specialty: 'Classic straight razor shaves, Beard sculpting & Men spa',
    experienceYears: 5,
    availableDays: [0, 2, 3, 4, 5, 6],
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const TIME_SLOTS = [
  { time: '09:30 AM', period: 'Morning' },
  { time: '10:15 AM', period: 'Morning' },
  { time: '11:00 AM', period: 'Morning' },
  { time: '11:45 AM', period: 'Morning' },
  { time: '12:30 PM', period: 'Afternoon' },
  { time: '01:15 PM', period: 'Afternoon' },
  { time: '02:00 PM', period: 'Afternoon' },
  { time: '03:00 PM', period: 'Afternoon' },
  { time: '04:00 PM', period: 'Evening' },
  { time: '04:45 PM', period: 'Evening' },
  { time: '05:30 PM', period: 'Evening' },
  { time: '06:15 PM', period: 'Evening' },
  { time: '07:00 PM', period: 'Evening' },
  { time: '07:45 PM', period: 'Evening' },
  { time: '08:15 PM', period: 'Evening' }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Vikash Singh',
    rating: 5,
    date: '2 weeks ago',
    service: 'Beard Sculpt & Hair Cut',
    comment: 'The best salon in Aurangabad without doubt. Great hygiene, calm ambiance, and the stylist understood exactly what beard line suited my face.',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Ananya Roy',
    rating: 5,
    date: '1 month ago',
    service: 'Hair Botox & Layer Cut',
    comment: 'Got hair botox done here. My hair has never felt this smooth and silky. The staff is polite, professional and uses genuine salon brands.',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Manish Pandey',
    rating: 4.5,
    date: '3 weeks ago',
    service: 'Hydra Facial & Spa',
    comment: 'Near Vayuputra Fitness Club in Dani Bigha. Very convenient location with easy parking. The facial glow was noticeable immediately.',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Shweta Kumari',
    rating: 5,
    date: '2 months ago',
    service: 'Bridal Reception Styling',
    comment: 'Booked via their appointment request. They called back quickly and coordinated everything so smoothly. Extremely happy with the results!',
    verified: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Modern Textured Men Crop',
    category: 'grooming',
    categoryLabel: 'Men Grooming',
    imageUrl: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=800&q=80',
    description: 'Clean temple fade with natural matte finish styling.'
  },
  {
    id: 'gal-2',
    title: 'Radiant Sun-kissed Balayage',
    category: 'hair',
    categoryLabel: 'Hair Coloring',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    description: 'Seamless warm caramel highlights on natural dark hair.'
  },
  {
    id: 'gal-3',
    title: 'Clean Razor Beard Detailing',
    category: 'grooming',
    categoryLabel: 'Beard Sculpting',
    imageUrl: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80',
    description: 'Defined cheek lines with botanical beard oil hydration.'
  },
  {
    id: 'gal-4',
    title: '24K Golden Glow Facial Finish',
    category: 'facial',
    categoryLabel: 'Skin Care',
    imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    description: 'Deep hydration and pore-purified luminous skin.'
  },
  {
    id: 'gal-5',
    title: 'Real Looks Studio Interior',
    category: 'interior',
    categoryLabel: 'Salon Ambiance',
    imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80',
    description: 'Sterile, climate-controlled, comfortable unisex stations.'
  },
  {
    id: 'gal-6',
    title: 'Bridal Occasion Hair & Makeup',
    category: 'bridal',
    categoryLabel: 'Bridal Makeover',
    imageUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80',
    description: 'Long-wearing HD makeup with traditional yet contemporary flair.'
  }
];
