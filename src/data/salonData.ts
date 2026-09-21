import { ServiceItem, Stylist, ReviewItem, GalleryItem, StoreProduct, FAQItem } from '../types';

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
    role: 'Fast-Track Booking',
    specialty: 'Any available senior staff',
    experienceYears: 6,
    availableDays: [0, 1, 2, 3, 4, 5, 6],
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    bio: 'Optimal choice for swift appointments. Handled by our experienced on-duty senior master.',
    specialties: ['Precision Cuts', 'Express Styling', 'Scalp Care']
  },
  {
    id: 'stylist-rahul',
    name: 'Rahul Kumar',
    role: 'Senior Hair & Texture Director',
    specialty: 'Precision cuts, Fades, Keratin & Hair Botox',
    experienceYears: 8,
    availableDays: [1, 2, 3, 4, 5, 6],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    rating: 5.0,
    bio: 'Trained at leading academies, specializing in high-definition fades, bespoke hair texturizing, and formaldehyde-free Botox therapy.',
    specialties: ['Hair Botox', 'Nanoplastia', 'Custom Fades', 'Balayage']
  },
  {
    id: 'stylist-priya',
    name: 'Priya Sharma',
    role: 'Lead Aesthetics & Bridal Artist',
    specialty: 'Facials, HD Bridal Makeup & Women Hair Designs',
    experienceYears: 7,
    availableDays: [0, 1, 2, 4, 5, 6],
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    bio: 'Celebrated for breathtaking bridal transformations, airbrush techniques, and restorative organic facials that deliver lit-from-within glow.',
    specialties: ['HD Bridal', 'Hydra Facial', 'Draping', 'Blowouts']
  },
  {
    id: 'stylist-amit',
    name: 'Amit Verma',
    role: 'Master Barber & Beard Artisan',
    specialty: 'Classic straight razor shaves, Beard sculpting & Men spa',
    experienceYears: 6,
    availableDays: [0, 2, 3, 4, 5, 6],
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    rating: 5.0,
    bio: 'Craftsman of precision beard lines, hot towel straight-razor shaving rituals, and men scalp revitalization treatments.',
    specialties: ['Beard Sculpting', 'Straight Razor', 'Charcoal Detox', 'Head Massage']
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

export const STORE_PRODUCTS: StoreProduct[] = [
  {
    id: 'prod-olaplex-7',
    name: 'Olaplex No. 7 Bonding Oil',
    category: 'Hair Care & Repair',
    price: 2800,
    oldPrice: 3200,
    description: 'Highly-concentrated, weightless reparative styling oil. Dramatically increases shine, softness, and color vibrancy while minimizing flyaways and heat damage up to 450°F.',
    volume: '30 ml',
    image: 'https://images.unsplash.com/photo-1608248597359-0a8a660a9270?auto=format&fit=crop&w=600&q=80',
    tag: 'Bestseller'
  },
  {
    id: 'prod-kerastase-elixir',
    name: "Kérastase Elixir Ultime L'Original Oil",
    category: 'Luxury Hair Elixir',
    price: 3450,
    oldPrice: 3900,
    description: 'Iconic multi-use hair oil infused with sacred Marula and Camellia oils. Delivers 96-hour frizz control, mirror-like shine, and sensual floral fragrance.',
    volume: '100 ml',
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80',
    tag: 'Salon Exclusive'
  },
  {
    id: 'prod-loreal-mask',
    name: "L'Oréal Professionnel Absolut Repair Mask",
    category: 'Deep Conditioning',
    price: 950,
    oldPrice: 1100,
    description: 'Enriched with Gold Quinoa + Protein. Instantly resurfaces damaged, sensitized hair leaving it 77% less damaged and 7x shinier with zero weighing down.',
    volume: '250 ml',
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=600&q=80',
    tag: 'Instant Repair'
  },
  {
    id: 'prod-moroccanoil',
    name: 'Moroccanoil Treatment Original',
    category: 'Argan Infusion',
    price: 3600,
    oldPrice: 4100,
    description: 'The global pioneer in oil-infused hair care. Non-greasy antioxidant argan formula conditions, styles, and finishes hair with unmatched silky softness.',
    volume: '100 ml',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80',
    tag: 'Classic Luxury'
  },
  {
    id: 'prod-dermalogica-micro',
    name: 'Dermalogica Daily Microfoliant',
    category: 'Skin Luminosity',
    price: 4200,
    oldPrice: 4600,
    description: 'Rice-based enzyme powder that micro-exfoliates dulling debris and instantly leaves skin noticeably smoother, brighter, and receptive to hydration.',
    volume: '74 g',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    tag: 'Dermatologist Loved'
  },
  {
    id: 'prod-schwarzkopf-dust',
    name: 'Schwarzkopf Osis+ Dust It Mattifying Powder',
    category: "Men's Styling & Texture",
    price: 850,
    oldPrice: 950,
    description: 'Lightweight styling powder that creates incredible root lift, matte texture, and rough separation with 24-hour invisible control.',
    volume: '10 g',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    tag: 'Matte Finish'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'Do I need to book an appointment in advance or can I walk in?',
    answer: 'While we warmly accept walk-in clients based on stylist availability, we strongly recommend reserving your slot online or via WhatsApp. Booking in advance guarantees direct priority access, zero waiting time, and your preferred master stylist.'
  },
  {
    question: 'What hospital-grade hygiene and sterilization standards do you follow?',
    answer: 'Client health is our utmost priority. Every metal shear, razor, clipper blade, and comb undergoes multi-stage ultrasonic cleansing followed by medical-grade UV and autoclave sterilization. Single-use disposable capes, neck wraps, and sanitized towels are provided for every single guest.'
  },
  {
    question: 'Which professional product brands do you use in treatments?',
    answer: 'We exclusively work with genuine, internationally certified salon brands including L’Oréal Professionnel, Kérastase, Olaplex, Moroccanoil, and Schwarzkopf Professional. Our hair botox and nanoplastia formulations are 100% formaldehyde-free and dermatologically certified.'
  },
  {
    question: 'Can I choose a specific senior stylist or barber?',
    answer: 'Yes! Our appointment booking portal allows you to select Rahul Kumar (Hair & Texture Director), Priya Sharma (Bridal & Aesthetics), Amit Verma (Master Barber), or the first available specialist depending on your schedule and requirements.'
  },
  {
    question: 'Do you offer customized bridal and groom consultation sessions?',
    answer: 'Yes, we provide full customized pre-wedding trials, hair texture diagnostics, skin priming regimens, and dress draping rehearsals. We recommend connecting with our lead bridal artist 2-4 weeks prior to your ceremony date.'
  },
  {
    question: 'Where is Real Looks located and what are your opening hours?',
    answer: 'We are situated in Dani Bigha, near Vayuputra Fitness Club, Aurangabad, Bihar (824101). We are open 7 days a week, Monday through Sunday, from 9:00 AM to 9:00 PM, with ample parking right outside.'
  }
];

