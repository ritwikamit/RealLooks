<div align="center">

# ✂️ Real Looks Unisex Salon
### *Look Good • Feel Good • Be You*

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![daisyUI](https://img.shields.io/badge/daisyUI-5.7-5A0EF8?logo=daisyui&logoColor=white)](https://daisyui.com/)
[![Lenis Scroll](https://img.shields.io/badge/Lenis-1.3-black?logo=scroll&logoColor=white)](https://lenis.darkroom.engineering/)
[![Motion](https://img.shields.io/badge/Motion-12.2-FF0055?logo=framer&logoColor=white)](https://motion.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

<br />

**A premier luxury digital experience crafted for Real Looks Unisex Salon, situated in Dani Bigha, Aurangabad, Bihar.**  
Engineered with the *Clandestine Chronicle* luxury design language, Lenis momentum smooth scrolling, interactive dot-grid canvas physics, lucid frosted glassmorphism, responsive golden borders, and an end-to-end 5-step appointment scheduler wizard.

[Explore Repository](https://github.com/ritwikamit/RealLooks) • [Book Appointment](#-5-step-appointment-scheduler-wizard) • [Tech Stack](#-technology-stack) • [Setup Guide](#-getting-started)

---

</div>

## 🌟 Overview & Experience Highlights

Real Looks Unisex Salon is Aurangabad's premier destination for couture hairdressing, formaldehyde-free nanoplastia & hair botox, beard sculpting, 24K gold skin rituals, and bespoke bridal artistry. The web application is engineered to mirror the salon's physical ambiance—luxurious, clinical, sterile, and deeply personalized.

### 🔑 Key Modules & Features

1. **✨ Clandestine Hero Showcase**
   - **Wide-Angle Salon Ambiance**: High-definition interior visual with gentle lighting transitions.
   - **Official Brand Logo with Glow**: High-contrast brand emblem rendered with dual white & gold ambient drop-shadow radiance.
   - **Dynamic Rotating Headline**: Seamless word-swap transition cycling through *BE SIGNATURE*, *CONFIDENCE*, *RADIANCE*, *ELEGANCE*, *LUXURY*, and *BEAUTY*.
   - **Golden Bordered Lucid Card**: Frosted glassmorphic center card framed in solid 2px luxury gold (`#D6A838`) with ambient gold aura shadows.
   - **Responsive Value Props**: 4 value pillars (*Unisex Salon*, *Organic Care*, *UV Sterilized*, *Instant Slot*) outlined with matching 2px gold borders and responsive typography.

2. **💡 Limelight Floating Navbar**
   - **Luxury Dark Navy Gradient**: Seamless blend from `#0B192C` via `#142A44` to `#0D4C5C` with `backdrop-filter: blur(20px)`.
   - **Spring Spotlight Nav Beam**: Floating golden limelight indicator with a downward light cone beam tracking the active section.
   - **High-Performance Scroll Tracking**: Zero-reflow numerical position caching for instantaneous active link detection.
   - **Mobile Drawer Menu**: Fully responsive navigation drawer with DaisyUI indicators for active client bookings.

3. **📅 5-Step Appointment Scheduler Wizard**
   - **Step 1: Service Catalog & Filtering** — Filter across Hair Cuts, Beard Grooming, Facial & Skin, Hair Spa & Botox, and Bridal & Occasion.
   - **Step 2: Specialist Stylist Selection** — Choose senior stylists, master colorists, skin specialists, or automatic best-available allocation.
   - **Step 3: Interactive Date & Time Picker** — 14-day horizontal date picker carousel with automatic past-date blocking and period filter tabs (*Morning*, *Afternoon*, *Evening*).
   - **Step 4: Client Verification** — Real-time validation for client name, phone number, email, and special preferences.
   - **Step 5: Confirmation & Instant Integrations** — Detailed booking summary with instant WhatsApp direct-booking dispatch and iCalendar (.ics) export.

4. **✨ Interactive Dot Grid Canvas & Ambient Glows**
   - **Architectural Edge Mapping**: Subtle 44px lateral grid lines with 2px intersection dots framing post-hero content.
   - **Pointer-Tracking Spotlight**: Dynamic HTML5 pointer coordinate tracker that illuminates the grid with a radiant golden spotlight and beacon rings.
   - **Zero-Overhead Ambient Glows**: Pre-rendered multi-spectrum atmospheric glow blobs (*Deep Olive*, *Tiffany Teal*, *Champagne Gold*) running with GPU acceleration.

5. **📱 Edge-to-Edge Responsive Layout on All Gadgets**
   - **No Horizontal Overflow**: Standardized `width: 100%`, `max-width: 100%`, and `overflow-x: clip` rules across `html`, `body`, `#root`, and main section containers.
   - **Full Viewport Coverage**: Configured with `viewport-fit=cover` and dynamic typography scaling ensuring pristine rendering across small smartphones (iPhone SE, Galaxy S-series), tablets (iPads, Surface), foldables, and ultra-wide desktop monitors.
   - **Mobile Sticky Booking Bar**: Fixed bottom quick-action conversion dock with instant one-tap Book, WhatsApp, and Phone Call triggers.

6. **📜 Transparent Golden Scrollbar Architecture**
   - **100% Transparent Track Line**: Scrollbar track (`::-webkit-scrollbar-track` and `scrollbar-color`) is completely transparent with zero borders or lines, allowing the full website background to extend seamlessly edge-to-edge.
   - **Solid Golden Scrolling Cylinder**: Floating metallic gold thumb (`#F5D77F` to `#C29324`) with subtle gold drop-shadows and hover brilliance.

---

## 🎨 Design System & Aesthetic Tokens

The visual language follows the custom **Clandestine Chronicle** aesthetic system:

| Token / Category | Value & Implementation | Application |
| :--- | :--- | :--- |
| **Paper Canvas** | `#FAF9F6` | Warm ivory paper background providing editorial tactile warmth. |
| **Primary Metallic Gold** | `#D6A838` | Primary luxury accent for borders, badges, CTA gradients, and icons. |
| **Bright Gold Highlight** | `#FFF2A8` / `#FFF4BD` | Specular highlights, active typography glows, and inner card rims. |
| **Rich & Deep Gold** | `#C29324` / `#8E680E` | Button gradients, ratings, and drop-shadow depth accents. |
| **Deep Forest Olive** | `#2F3B1A` / `#4C5B2E` | Natural botanical grounding reflecting organic, non-toxic salon treatments. |
| **Tiffany Teal & Cyan** | `#12B5AF` / `#0D8F8B` | Clinical hygiene, hospital-grade UV sterilization, and active state badges. |
| **Deep Luxury Navy** | `#0B192C` → `#0D4C5C` | Limelight navbar, VIP announcement ribbons, and subpage header banners. |
| **Lucid Frosted Glass** | `rgba(255, 255, 255, 0.50)` – `0.65` | `backdrop-blur-xl` and `backdrop-blur-2xl` glassmorphic cards. |
| **Typography Neutrals** | `#141A13` (Heading) / `#3D483B` (Body) | High-contrast, WCAG-compliant legibility across all viewport conditions. |

### Font Hierarchy
- **Serif Display Titles**: *Playfair Display* & *Cormorant Garamond* (Editorial, couture elegance)
- **Primary Interface Body**: *Plus Jakarta Sans* (Clean, modern, geometric legibility)

---

## 🛠️ Technology Stack

### Core Technologies
- **[React 19](https://react.dev/)** (`v19.0.1`): Latest React architecture with concurrent rendering and high-performance state handling.
- **[TypeScript](https://www.typescriptlang.org/)** (`v7.0.2`): End-to-end type safety across salon models, scheduler state, and navigation interfaces.
- **[Vite 8](https://vitejs.dev/)** (`v8.3.0`): Next-generation build tool with instant HMR and lightning-fast Rollup bundling.

### Styling & UI Components
- **[Tailwind CSS v4](https://tailwindcss.com/)** (`v4.3.3`): Utility-first CSS engine integrated seamlessly via `@tailwindcss/vite`.
- **[daisyUI 5](https://daisyui.com/)** (`v5.7.42`): Semantic component library providing buttons, badges, star ratings, indicators, and modals.
- **[Lucide React](https://lucide.dev/)** (`v0.546.0`): Curated, modern feather icon set for beauty, navigation, and contact actions.

### Motion & Inertia Engine
- **[Lenis](https://lenis.darkroom.engineering/)** (`v1.3.26`): Smooth momentum-based inertia scrolling with optimized wheel and touch multipliers.
- **[Motion (Framer Motion)](https://motion.dev/)** (`v12.23.24`): Fluid layout animations, entrance transitions, and AnimatePresence keyword rotations.

### Backend & Integrations
- **[Express.js](https://expressjs.com/)** (`v4.21.2`): Lightweight server layer for production serving and API support.
- **[@google/genai](https://www.npmjs.com/package/@google/genai)** (`v2.4.0`): Google GenAI integration SDK for intelligent beauty consulting workflows.

---

## 📁 Project Directory Structure

```
RealLooks/
├── public/
│   ├── images/
│   │   ├── logo.png                    # Official brand emblem (White & Gold glow)
│   │   ├── accustomlabs.png            # AC Custom Labs developer insignia (trimmed)
│   │   └── salon-hero-interior.jpg     # Wide-angle salon interior background
│   └── favicon.ico                     # Salon browser icon
├── src/
│   ├── components/
│   │   ├── clandestine/
│   │   │   ├── ClandestineHeroSection.tsx    # Hero section with golden borders & lucid blur
│   │   │   ├── LimelightNavbar.tsx           # Floating navbar with spotlight tracking
│   │   │   └── ClandestineEnhancedFooter.tsx # Footer with developer credit & watermark
│   │   ├── AboutSection.tsx            # Salon ethos, sterile hygiene standards & stats
│   │   ├── AppointmentScheduler.tsx    # 5-step booking wizard with calendar & WhatsApp
│   │   ├── BrandLogo.tsx               # Versatile logo component
│   │   ├── FadedAmbientBackground.tsx  # Fixed paper canvas & ambient gradient glows
│   │   ├── FAQSection.tsx              # Frequently asked questions with smooth accordions
│   │   ├── GallerySection.tsx          # Client transformation lookbook with modal view
│   │   ├── InteractiveDotGridCanvas.tsx# Pointer-tracking intersection spotlight & beacon
│   │   ├── LocationContactSection.tsx  # Studio address, opening hours & Google Maps
│   │   ├── MastersSection.tsx          # Master stylists, certifications, and ratings
│   │   ├── MobileStickyBar.tsx         # Fixed mobile conversion dock (Book/WhatsApp/Call)
│   │   ├── MyBookingsModal.tsx         # Client saved appointment manager (localStorage)
│   │   ├── ServicesSection.tsx         # Comprehensive unisex menu with category tabs
│   │   ├── StoreSection.tsx            # Curated professional hair & skin care boutique
│   │   └── TestimonialsSection.tsx     # Verified Google reviews and star ratings
│   ├── data/
│   │   └── salonData.ts                # Structured service catalog, stylists, and reviews
│   ├── types.ts                        # TypeScript interfaces (Bookings, Services, Stylists)
│   ├── App.tsx                         # Main root application layout & view switcher
│   ├── index.css                       # Design tokens, golden scrollbar, and canvas styling
│   └── main.tsx                        # React application bootstrap
├── index.html                          # HTML5 shell, viewport-fit=cover, and SEO JSON-LD
├── package.json                        # Dependencies, scripts, and package metadata
├── tsconfig.json                       # TypeScript compiler configuration
└── vite.config.ts                      # Vite build configuration with Tailwind plugin
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or higher (`v20.x` LTS recommended)
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ritwikamit/RealLooks.git
   cd RealLooks
   ```

2. **Install project dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Available Scripts

| Script | Command | Purpose |
| :--- | :--- | :--- |
| **Development** | `npm run dev` | Launches Vite local dev server at `http://localhost:3000` with HMR |
| **Production Build** | `npm run build` | Compiles and optimizes assets into the `dist/` directory |
| **Preview Build** | `npm run preview` | Runs a local static preview server of the production build |
| **Type Check** | `npm run lint` | Executes TypeScript type checking via `tsc --noEmit` |

---

## 📱 Responsive & Mobile Design Standards

The application has been audited and verified for responsive layout precision:

- **Strict Overflow Guarding**: Root elements (`html`, `body`, `#root`, and `<main>`) enforce `overflow-x: clip` and `width: 100%`, preventing unwanted lateral pan/zoom gaps.
- **Lucid Glass Blur**: Utilizes `-webkit-backdrop-filter` and fallback solid alphas for smooth rendering on Safari / iOS devices.
- **Touch-Optimized Hit Targets**: All buttons, calendar dates, category chips, and menu items adhere to the minimum 44×44px interactive target sizing guidelines.
- **Safe Area Insets**: Integrated `safe-bottom` margins on `MobileStickyBar` ensuring full visibility over iOS home indicator bars.

---

## 📍 Salon Location & Details

- **Studio Name**: Real Looks Unisex Salon  
- **Location**: Q957+RR4, Near Vayuputra Fitness Club, Dani Bigha, Aurangabad, Bihar 824101  
- **Operational Hours**: Open Daily: 9:00 AM – 9:00 PM  
- **Direct Appointments**: [Book Online](http://localhost:3000/#scheduler-section) or connect via WhatsApp  

---

## 👨‍💻 Designed & Developed By

- **Agency / Studio**: [AC Custom Labs](https://accustomlabs.com)
- **Repository**: [https://github.com/ritwikamit/RealLooks](https://github.com/ritwikamit/RealLooks)

---

## 📄 License

This project is licensed under the **MIT License**.
