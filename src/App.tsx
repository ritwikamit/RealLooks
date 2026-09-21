import React, { useState } from 'react';
import { FadedAmbientBackground } from './components/FadedAmbientBackground';
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

  // Smooth navigation handler
  const handleNavigate = (page: PageView) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to scheduler with smooth easing
  const handleStartBooking = () => {
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const el = document.getElementById('scheduler-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('scheduler-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When user clicks "Book This" on a specific service card
  const handleSelectServiceFromCatalog = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const el = document.getElementById('scheduler-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('scheduler-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When user clicks "Book With [Stylist]" in Masters section
  const handleSelectMaster = (stylistId: string) => {
    setSelectedStylistId(stylistId);
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const el = document.getElementById('scheduler-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('scheduler-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingCompleted = (booking: BookingRequest) => {
    console.log('New booking created:', booking);
  };

  return (
    <div className="min-h-screen relative flex flex-col font-sans selection:bg-[#4B9CD3]/25 selection:text-[#0D1D27] bg-[#FAF9F6] luxury-artisan-canvas text-[#192018]">
      
      {/* 1. Global Redesigned Luxury Artisan Canvas & Ambient Color Glows */}
      <FadedAmbientBackground />

      {/* 2. Clandestine Limelight Floating Navbar */}
      <LimelightNavbar 
        onOpenBookings={() => setIsBookingsModalOpen(true)}
        onBookClick={handleStartBooking}
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        
        {/* =========================================================
            HOME PAGE: Clandestine Hero + Complete Professional Salon Experience
           ========================================================= */}
        {activePage === 'home' && (
          <>
            {/* Clandestine Hero Section (Animated Blue Gradient + Salon Trust Stats) */}
            <ClandestineHeroSection 
              onStartBooking={handleStartBooking}
              onExploreServices={handleExploreServices}
            />

            {/* Post-Hero Container with Architectural Edge Overlay */}
            <div className="relative w-full overflow-hidden">
              
              {/* Soft ambient architectural hairline guides fading towards edges */}
              <div className="architectural-edge-overlay hidden sm:block" aria-hidden="true" />
              
              {/* Subtle architectural gold margin guides on desktop */}
              <div className="hidden lg:block absolute inset-y-0 left-6 w-[1px] bg-gradient-to-b from-transparent via-[#D6A838]/20 to-transparent pointer-events-none z-0" aria-hidden="true" />
              <div className="hidden lg:block absolute inset-y-0 right-6 w-[1px] bg-gradient-to-b from-transparent via-[#D6A838]/20 to-transparent pointer-events-none z-0" aria-hidden="true" />

              {/* 1. Unisex Services Catalog */}
              <div className="relative z-10">
                <ServicesSection 
                  onSelectService={handleSelectServiceFromCatalog}
                />
              </div>

              {/* 2. Online Appointment Scheduler */}
              <div className="relative z-10">
                <AppointmentScheduler 
                  initialServiceId={selectedServiceId}
                  initialStylistId={selectedStylistId}
                  onBookingSuccess={handleBookingCompleted}
                />
              </div>

              {/* 3. Master Stylists & Colorists */}
              <div className="relative z-10">
                <MastersSection 
                  onSelectMaster={handleSelectMaster}
                />
              </div>

              {/* 4. About & Hospital-Grade Hygiene Standards */}
              <div className="relative z-10">
                <AboutSection />
              </div>

              {/* 5. Lookbook Transformations Gallery */}
              <div className="relative z-10">
                <GallerySection />
              </div>

              {/* 6. Curated Hair & Skin Boutique Store */}
              <div className="relative z-10">
                <StoreSection />
              </div>

              {/* 7. Verified Local Client Reviews */}
              <div className="relative z-10">
                <TestimonialsSection />
              </div>

              {/* 8. Frequently Asked Questions Accordion */}
              <div className="relative z-10">
                <FAQSection />
              </div>

              {/* 9. Location, Opening Hours & Google Maps */}
              <div className="relative z-10">
                <LocationContactSection />
              </div>

            </div>
          </>
        )}

        {/* =========================================================
            DEDICATED PAGE: ABOUT & HYGIENE STANDARDS
           ========================================================= */}
        {activePage === 'about' && (
          <div className="relative w-full overflow-hidden py-8 sm:py-12">
            <div className="architectural-edge-overlay hidden sm:block" aria-hidden="true" />
            <div className="hidden lg:block absolute inset-y-0 left-6 w-[1px] bg-gradient-to-b from-transparent via-[#D6A838]/20 to-transparent pointer-events-none z-0" aria-hidden="true" />
            <div className="hidden lg:block absolute inset-y-0 right-6 w-[1px] bg-gradient-to-b from-transparent via-[#D6A838]/20 to-transparent pointer-events-none z-0" aria-hidden="true" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <div className="breadcrumbs text-xs font-semibold text-[#677565]">
                <ul>
                  <li>
                    <button onClick={() => handleNavigate('home')} className="hover:text-[#2F3B1A] flex items-center gap-1">
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Home</span>
                    </button>
                  </li>
                  <li className="text-[#2F3B1A] font-bold">About & Hygiene Standards</li>
                </ul>
              </div>
            </div>

            <div className="relative z-10">
              <AboutSection />
            </div>

            <div className="relative z-10 text-center py-10">
              <button
                onClick={handleStartBooking}
                className="btn btn-primary px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#D6A838] to-[#C29324] hover:from-[#C29324] hover:to-[#8E680E] text-[#1F1703] font-bold text-xs tracking-wider uppercase border-none shadow-lg cursor-pointer inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Ready for Your Transformation? Book Appointment</span>
              </button>
            </div>
          </div>
        )}

        {/* =========================================================
            DEDICATED PAGE: WORK PORTFOLIO GALLERY
           ========================================================= */}
        {activePage === 'gallery' && (
          <div className="relative w-full overflow-hidden py-8 sm:py-12">
            <div className="architectural-edge-overlay hidden sm:block" aria-hidden="true" />
            <div className="hidden lg:block absolute inset-y-0 left-6 w-[1px] bg-gradient-to-b from-transparent via-[#D6A838]/20 to-transparent pointer-events-none z-0" aria-hidden="true" />
            <div className="hidden lg:block absolute inset-y-0 right-6 w-[1px] bg-gradient-to-b from-transparent via-[#D6A838]/20 to-transparent pointer-events-none z-0" aria-hidden="true" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <div className="breadcrumbs text-xs font-semibold text-[#677565]">
                <ul>
                  <li>
                    <button onClick={() => handleNavigate('home')} className="hover:text-[#2F3B1A] flex items-center gap-1">
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Home</span>
                    </button>
                  </li>
                  <li className="text-[#2F3B1A] font-bold">Lookbook Portfolio Gallery</li>
                </ul>
              </div>
            </div>

            <div className="relative z-10">
              <GallerySection />
            </div>

            <div className="relative z-10 text-center py-10">
              <button
                onClick={handleStartBooking}
                className="btn btn-primary px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#D6A838] to-[#C29324] hover:from-[#C29324] hover:to-[#8E680E] text-[#1F1703] font-bold text-xs tracking-wider uppercase border-none shadow-lg cursor-pointer inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Like What You See? Book Your Slot</span>
              </button>
            </div>
          </div>
        )}

        {/* =========================================================
            DEDICATED PAGE: REVIEWS, LOCATION & CONTACT
           ========================================================= */}
        {activePage === 'contact' && (
          <div className="relative w-full overflow-hidden py-8 sm:py-12">
            <div className="architectural-edge-overlay hidden sm:block" aria-hidden="true" />
            <div className="hidden lg:block absolute inset-y-0 left-6 w-[1px] bg-gradient-to-b from-transparent via-[#D6A838]/20 to-transparent pointer-events-none z-0" aria-hidden="true" />
            <div className="hidden lg:block absolute inset-y-0 right-6 w-[1px] bg-gradient-to-b from-transparent via-[#D6A838]/20 to-transparent pointer-events-none z-0" aria-hidden="true" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <div className="breadcrumbs text-xs font-semibold text-[#677565]">
                <ul>
                  <li>
                    <button onClick={() => handleNavigate('home')} className="hover:text-[#2F3B1A] flex items-center gap-1">
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Home</span>
                    </button>
                  </li>
                  <li className="text-[#2F3B1A] font-bold">Reviews, Studio Location & Contact</li>
                </ul>
              </div>
            </div>

            <div className="relative z-10">
              <TestimonialsSection />
            </div>

            <div className="relative z-10">
              <LocationContactSection />
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
