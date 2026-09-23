import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { FadedAmbientBackground } from './components/FadedAmbientBackground';
import { InteractiveDotGridCanvas } from './components/InteractiveDotGridCanvas';
import { LimelightNavbar, PageView } from './components/clandestine/LimelightNavbar';
import { ClandestineHeroSection } from './components/clandestine/ClandestineHeroSection';
import { ClandestineEnhancedFooter } from './components/clandestine/ClandestineEnhancedFooter';
import { AppointmentScheduler } from './components/AppointmentScheduler';
import { ServicesSection } from './components/ServicesSection';
import { MastersSection } from './components/MastersSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { StoreSection } from './components/StoreSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { LocationContactSection } from './components/LocationContactSection';
import { MyBookingsModal } from './components/MyBookingsModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { BookingRequest } from './types';
import { ArrowLeft, Calendar, Sparkles } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedStylistId, setSelectedStylistId] = useState<string | null>(null);
  const [isBookingsModalOpen, setIsBookingsModalOpen] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis ultra-smooth momentum scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Smooth navigation handler
  const handleNavigate = (page: PageView) => {
    setActivePage(page);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: false, duration: 0.8 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Scroll to scheduler with smooth easing
  const handleStartBooking = () => {
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const el = document.getElementById('scheduler-section');
        if (el && lenisRef.current) {
          lenisRef.current.scrollTo(el, { offset: -70, duration: 1.1 });
        } else if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById('scheduler-section');
      if (el && lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -70, duration: 1.1 });
      } else if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // When user clicks "Book This" on a specific service card
  const handleSelectServiceFromCatalog = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const el = document.getElementById('scheduler-section');
        if (el && lenisRef.current) {
          lenisRef.current.scrollTo(el, { offset: -70, duration: 1.1 });
        } else if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById('scheduler-section');
      if (el && lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -70, duration: 1.1 });
      } else if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // When user clicks "Book With [Stylist]" in Masters section
  const handleSelectMaster = (stylistId: string) => {
    setSelectedStylistId(stylistId);
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const el = document.getElementById('scheduler-section');
        if (el && lenisRef.current) {
          lenisRef.current.scrollTo(el, { offset: -70, duration: 1.1 });
        } else if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById('scheduler-section');
      if (el && lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -70, duration: 1.1 });
      } else if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleExploreServices = () => {
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const el = document.getElementById('services');
        if (el && lenisRef.current) {
          lenisRef.current.scrollTo(el, { offset: -70, duration: 1.1 });
        } else if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById('services');
      if (el && lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -70, duration: 1.1 });
      } else if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBookingCompleted = (booking: BookingRequest) => {
    console.log('New booking created:', booking);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip relative flex flex-col font-sans selection:bg-[#4B9CD3]/25 selection:text-[#0D1D27] bg-[#FAF9F6] luxury-artisan-canvas text-[#192018]">
      
      {/* 1. Global Redesigned Luxury Artisan Canvas & Ambient Color Glows */}
      <FadedAmbientBackground />
      <InteractiveDotGridCanvas activePage={activePage} />

      {/* 2. Clandestine Limelight Floating Navbar */}
      <LimelightNavbar 
        onOpenBookings={() => setIsBookingsModalOpen(true)}
        onBookClick={handleStartBooking}
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1 w-full max-w-full overflow-x-clip">
        
        {/* =========================================================
            HOME PAGE: Concise, High-Converting Luxury Landing Page
           ========================================================= */}
        {activePage === 'home' && (
          <>
            {/* Clandestine Hero Section */}
            <ClandestineHeroSection 
              onStartBooking={handleStartBooking}
              onExploreServices={() => handleNavigate('services')}
            />

            {/* Post-Hero Container with Architectural Edge Overlay */}
            <div className="relative w-full max-w-full overflow-hidden overflow-x-clip">
              <div className="square-mapping-edge-overlay" aria-hidden="true" />
              
              {/* Subtle architectural gold margin guides on desktop */}
              <div className="hidden lg:block absolute inset-y-0 left-6 w-[1px] bg-gradient-to-b from-transparent via-[#D6A838]/20 to-transparent pointer-events-none z-0" aria-hidden="true" />
              <div className="hidden lg:block absolute inset-y-0 right-6 w-[1px] bg-gradient-to-b from-transparent via-[#D6A838]/20 to-transparent pointer-events-none z-0" aria-hidden="true" />

              {/* 1. Appealing Blue Gradient VIP Announcement Ribbon */}
              <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 mb-10">
                <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#0B192C] via-[#163859] to-[#0D5C75] border border-[#D6A838]/50 shadow-[0_16px_50px_rgba(11,25,44,0.22)] flex flex-col md:flex-row items-center justify-between gap-6 text-white relative overflow-hidden">
                  {/* Subtle decorative gold light glow */}
                  <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#D6A838]/15 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="space-y-2 text-center md:text-left relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D6A838]/20 border border-[#D6A838]/40 text-[#FFF2A8] text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-[#D6A838]" />
                      <span>Signature Unisex Artistry in Aurangabad</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-extrabold text-white tracking-tight">
                      Where High Couture Meets Clinical Care
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 max-w-xl font-normal leading-relaxed">
                      Discover formaldehyde-free nanoplastia, royal beard architecture, 24K gold purifying facials, and personalized bridal grooming tailored for men and women.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 relative z-10 w-full sm:w-auto justify-center">
                    <button
                      onClick={() => handleNavigate('services')}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs font-bold tracking-wider uppercase transition-all"
                    >
                      View All Services
                    </button>
                    <button
                      onClick={handleStartBooking}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#D6A838] to-[#C29324] hover:from-[#C29324] hover:to-[#8E680E] text-[#1F1703] text-xs font-extrabold tracking-wider uppercase shadow-lg transition-all"
                    >
                      Reserve Slot
                    </button>
                  </div>
                </div>
              </div>

              {/* 2. Direct Online Appointment Scheduler */}
              <div className="relative z-10" id="scheduler-section">
                <AppointmentScheduler 
                  initialServiceId={selectedServiceId}
                  initialStylistId={selectedStylistId}
                  onBookingSuccess={handleBookingCompleted}
                />
              </div>

              {/* 3. Curated Signature Services Spotlight with Blue Gradient Card */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center space-y-3 mb-10">
                  <span className="text-xs font-extrabold tracking-[0.22em] uppercase text-[#8E680E]">
                    Curated Highlights
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#141A13]">
                    Most Popular Signature Services
                  </h2>
                  <p className="text-sm text-[#556452] max-w-xl mx-auto">
                    A quick preview of our client favorites. Visit our complete catalog to browse all 20+ specialized unisex services.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Featured 1: Nanoplastia */}
                  <div className="rounded-3xl p-6 bg-gradient-to-br from-[#0B192C] via-[#14304D] to-[#0D4B5E] text-white border border-[#D6A838]/40 shadow-xl flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="px-3 py-1 rounded-full bg-[#D6A838]/20 text-[#FFF2A8] text-[10px] font-bold uppercase tracking-wider border border-[#D6A838]/30">
                          Hair Care
                        </span>
                        <span className="text-lg font-serif font-bold text-[#D6A838]">₹3,499+</span>
                      </div>
                      <h4 className="text-xl font-serif font-bold text-white">Nanoplastia & Hair Botox</h4>
                      <p className="text-xs text-white/75 leading-relaxed">
                        100% formaldehyde-free smoothing and cellular reconstruction with organic amino acids and keratin.
                      </p>
                    </div>
                    <button
                      onClick={() => handleSelectServiceFromCatalog('hair-botox')}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#D6A838] to-[#C29324] text-[#141A13] font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110"
                    >
                      Book Nanoplastia
                    </button>
                  </div>

                  {/* Featured 2: Royal Beard Architecture */}
                  <div className="rounded-3xl p-6 bg-white/90 backdrop-blur-xl border border-[#D6A838]/30 shadow-md flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="px-3 py-1 rounded-full bg-[#4C5B2E]/10 text-[#2F3B1A] text-[10px] font-bold uppercase tracking-wider border border-[#4C5B2E]/20">
                          Men Grooming
                        </span>
                        <span className="text-lg font-serif font-bold text-[#8E680E]">₹499</span>
                      </div>
                      <h4 className="text-xl font-serif font-bold text-[#141A13]">Royal Beard Sculpting</h4>
                      <p className="text-xs text-[#556452] leading-relaxed">
                        Hot towel infusion, precision razor lineup, organic argan oil conditioning, and soothing aftershave balm.
                      </p>
                    </div>
                    <button
                      onClick={() => handleSelectServiceFromCatalog('beard-sculpting')}
                      className="w-full py-2.5 rounded-xl bg-[#2F3B1A] text-white hover:bg-[#1E2611] font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
                    >
                      Book Beard Sculpting
                    </button>
                  </div>

                  {/* Featured 3: 24K Gold Glow Facial */}
                  <div className="rounded-3xl p-6 bg-white/90 backdrop-blur-xl border border-[#D6A838]/30 shadow-md flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="px-3 py-1 rounded-full bg-[#12B5AF]/10 text-[#0D8F8B] text-[10px] font-bold uppercase tracking-wider border border-[#12B5AF]/20">
                          Skin Care
                        </span>
                        <span className="text-lg font-serif font-bold text-[#8E680E]">₹2,199</span>
                      </div>
                      <h4 className="text-xl font-serif font-bold text-[#141A13]">24K Gold Radiance Facial</h4>
                      <p className="text-xs text-[#556452] leading-relaxed">
                        Vortex suction extraction, lymphatic massage, 24K gold foil mask, and antioxidant cellular booster.
                      </p>
                    </div>
                    <button
                      onClick={() => handleSelectServiceFromCatalog('facial-gold')}
                      className="w-full py-2.5 rounded-xl bg-[#2F3B1A] text-white hover:bg-[#1E2611] font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
                    >
                      Book 24K Facial
                    </button>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={() => handleNavigate('services')}
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#0B192C] via-[#163859] to-[#0D5C75] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all border border-[#D6A838]/40"
                  >
                    <span>View Complete 20+ Service Menu & Prices</span>
                    <Sparkles className="w-4 h-4 text-[#FFF2A8]" />
                  </button>
                </div>
              </div>

              {/* 4. Verified Client Reviews & Ratings */}
              <div className="relative z-10">
                <TestimonialsSection />
              </div>

              {/* 5. Location, Hours & Direct Map Directions */}
              <div className="relative z-10">
                <LocationContactSection />
              </div>

            </div>
          </>
        )}

        {/* =========================================================
            DEDICATED PAGE: SERVICES CATALOG
           ========================================================= */}
        {activePage === 'services' && (
          <div className="relative w-full max-w-full overflow-hidden overflow-x-clip py-8 sm:py-12">
            <div className="square-mapping-edge-overlay" aria-hidden="true" />
            
            {/* Blue Gradient Header Banner */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
              <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#0B192C] via-[#153452] to-[#0D5369] border border-[#D6A838]/50 shadow-2xl text-white">
                <div className="breadcrumbs text-xs font-semibold text-white/60 mb-3">
                  <ul>
                    <li>
                      <button onClick={() => handleNavigate('home')} className="hover:text-[#FFF2A8] flex items-center gap-1">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Home</span>
                      </button>
                    </li>
                    <li className="text-[#FFF2A8] font-bold">Services Directory</li>
                  </ul>
                </div>
                <span className="text-xs font-extrabold tracking-[0.24em] uppercase text-[#D6A838]">
                  Couture Menu & Pricing
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white mt-1 mb-2">
                  Unisex Salon Services
                </h1>
                <p className="text-xs sm:text-sm text-white/80 max-w-2xl font-normal">
                  Explore our comprehensive catalog of couture hairdressing, formaldehyde-free hair treatments, clinical facials, and wedding grooming designed for both men and women.
                </p>
              </div>
            </div>

            <div className="relative z-10">
              <ServicesSection onSelectService={handleSelectServiceFromCatalog} />
            </div>

            <div className="relative z-10 mt-12">
              <FAQSection />
            </div>
          </div>
        )}

        {/* =========================================================
            DEDICATED PAGE: MASTER ARTISANS & STYLISTS
           ========================================================= */}
        {activePage === 'masters' && (
          <div className="relative w-full max-w-full overflow-hidden overflow-x-clip py-8 sm:py-12">
            <div className="square-mapping-edge-overlay" aria-hidden="true" />

            {/* Blue Gradient Header Banner */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
              <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#0B192C] via-[#153452] to-[#0D5369] border border-[#D6A838]/50 shadow-2xl text-white">
                <div className="breadcrumbs text-xs font-semibold text-white/60 mb-3">
                  <ul>
                    <li>
                      <button onClick={() => handleNavigate('home')} className="hover:text-[#FFF2A8] flex items-center gap-1">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Home</span>
                      </button>
                    </li>
                    <li className="text-[#FFF2A8] font-bold">Artisans & Stylists</li>
                  </ul>
                </div>
                <span className="text-xs font-extrabold tracking-[0.24em] uppercase text-[#D6A838]">
                  Creative Maestros
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white mt-1 mb-2">
                  Meet Our Master Artisans
                </h1>
                <p className="text-xs sm:text-sm text-white/80 max-w-2xl font-normal">
                  Our certified stylists and dermatological skin experts bring national fashion-week training and sterile artistry to every client in Aurangabad.
                </p>
              </div>
            </div>

            <div className="relative z-10">
              <MastersSection onSelectMaster={handleSelectMaster} />
            </div>
          </div>
        )}

        {/* =========================================================
            DEDICATED PAGE: LOOKBOOK GALLERY
           ========================================================= */}
        {activePage === 'gallery' && (
          <div className="relative w-full max-w-full overflow-hidden overflow-x-clip py-8 sm:py-12">
            <div className="square-mapping-edge-overlay" aria-hidden="true" />

            {/* Blue Gradient Header Banner */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
              <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#0B192C] via-[#153452] to-[#0D5369] border border-[#D6A838]/50 shadow-2xl text-white">
                <div className="breadcrumbs text-xs font-semibold text-white/60 mb-3">
                  <ul>
                    <li>
                      <button onClick={() => handleNavigate('home')} className="hover:text-[#FFF2A8] flex items-center gap-1">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Home</span>
                      </button>
                    </li>
                    <li className="text-[#FFF2A8] font-bold">Lookbook Portfolio</li>
                  </ul>
                </div>
                <span className="text-xs font-extrabold tracking-[0.24em] uppercase text-[#D6A838]">
                  Visual Transformations
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white mt-1 mb-2">
                  Client Transformations Lookbook
                </h1>
                <p className="text-xs sm:text-sm text-white/80 max-w-2xl font-normal">
                  Browse authentic before-and-after transformations in hair restoration, balayage, beard sculpting, and bridal makeovers performed right here at Real Looks.
                </p>
              </div>
            </div>

            <div className="relative z-10">
              <GallerySection />
            </div>
          </div>
        )}

        {/* =========================================================
            DEDICATED PAGE: BOUTIQUE STORE
           ========================================================= */}
        {activePage === 'store' && (
          <div className="relative w-full max-w-full overflow-hidden overflow-x-clip py-8 sm:py-12">
            <div className="square-mapping-edge-overlay" aria-hidden="true" />

            {/* Blue Gradient Header Banner */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
              <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#0B192C] via-[#153452] to-[#0D5369] border border-[#D6A838]/50 shadow-2xl text-white">
                <div className="breadcrumbs text-xs font-semibold text-white/60 mb-3">
                  <ul>
                    <li>
                      <button onClick={() => handleNavigate('home')} className="hover:text-[#FFF2A8] flex items-center gap-1">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Home</span>
                      </button>
                    </li>
                    <li className="text-[#FFF2A8] font-bold">Artisan Boutique</li>
                  </ul>
                </div>
                <span className="text-xs font-extrabold tracking-[0.24em] uppercase text-[#D6A838]">
                  Professional Hair & Skin Formulas
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white mt-1 mb-2">
                  Curated Care Boutique
                </h1>
                <p className="text-xs sm:text-sm text-white/80 max-w-2xl font-normal">
                  Maintain your salon-fresh look at home with our hand-selected botanical serums, sulfate-free shampoos, and dermatologist-tested elixirs.
                </p>
              </div>
            </div>

            <div className="relative z-10">
              <StoreSection />
            </div>
          </div>
        )}

        {/* =========================================================
            DEDICATED PAGE: ABOUT & HYGIENE STANDARDS
           ========================================================= */}
        {activePage === 'about' && (
          <div className="relative w-full max-w-full overflow-hidden overflow-x-clip py-8 sm:py-12">
            <div className="square-mapping-edge-overlay" aria-hidden="true" />

            {/* Blue Gradient Header Banner */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
              <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#0B192C] via-[#153452] to-[#0D5369] border border-[#D6A838]/50 shadow-2xl text-white">
                <div className="breadcrumbs text-xs font-semibold text-white/60 mb-3">
                  <ul>
                    <li>
                      <button onClick={() => handleNavigate('home')} className="hover:text-[#FFF2A8] flex items-center gap-1">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Home</span>
                      </button>
                    </li>
                    <li className="text-[#FFF2A8] font-bold">About & Hygiene Standards</li>
                  </ul>
                </div>
                <span className="text-xs font-extrabold tracking-[0.24em] uppercase text-[#D6A838]">
                  Our Ethos & Standards
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white mt-1 mb-2">
                  Hospital-Grade Salon Hygiene
                </h1>
                <p className="text-xs sm:text-sm text-white/80 max-w-2xl font-normal">
                  Learn about our medical-grade autoclave sterilization, single-use disposable capes, and commitment to safe, non-toxic beauty.
                </p>
              </div>
            </div>

            <div className="relative z-10">
              <AboutSection />
            </div>
          </div>
        )}

        {/* =========================================================
            DEDICATED PAGE: LOCATION, HOURS & CONTACT
           ========================================================= */}
        {activePage === 'contact' && (
          <div className="relative w-full max-w-full overflow-hidden overflow-x-clip py-8 sm:py-12">
            <div className="square-mapping-edge-overlay" aria-hidden="true" />

            {/* Blue Gradient Header Banner */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
              <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#0B192C] via-[#153452] to-[#0D5369] border border-[#D6A838]/50 shadow-2xl text-white">
                <div className="breadcrumbs text-xs font-semibold text-white/60 mb-3">
                  <ul>
                    <li>
                      <button onClick={() => handleNavigate('home')} className="hover:text-[#FFF2A8] flex items-center gap-1">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Home</span>
                      </button>
                    </li>
                    <li className="text-[#FFF2A8] font-bold">Location & Contact</li>
                  </ul>
                </div>
                <span className="text-xs font-extrabold tracking-[0.24em] uppercase text-[#D6A838]">
                  Visit Real Looks
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-white mt-1 mb-2">
                  Studio Location & Direct Map
                </h1>
                <p className="text-xs sm:text-sm text-white/80 max-w-2xl font-normal">
                  Conveniently situated in Dani Bigha near Vayuputra Fitness Club in Aurangabad, Bihar. Open every day from 9:00 AM to 9:00 PM.
                </p>
              </div>
            </div>

            <div className="relative z-10">
              <LocationContactSection />
            </div>

            <div className="relative z-10 mt-12">
              <TestimonialsSection />
            </div>
          </div>
        )}

      </main>

      {/* Clandestine-Inspired Enhanced Footer */}
      <ClandestineEnhancedFooter 
        onNavigate={handleNavigate}
        onBookClick={handleStartBooking}
      />

      {/* Mobile Sticky Conversion Bar */}
      <MobileStickyBar 
        onBookClick={handleStartBooking}
      />

      {/* Saved Bookings Modal */}
      <MyBookingsModal 
        isOpen={isBookingsModalOpen}
        onClose={() => setIsBookingsModalOpen(false)}
        onNewBooking={handleStartBooking}
      />

    </div>
  );
}
