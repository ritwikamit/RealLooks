import React, { useState, useEffect } from 'react';
import { FadedAmbientBackground } from './components/FadedAmbientBackground';
import { Navbar } from './components/Navbar';
import { HeroOrganicFlow } from './components/HeroOrganicFlow';
import { ServicesSection } from './components/ServicesSection';
import { MastersSection } from './components/MastersSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { StoreSection } from './components/StoreSection';
import { FAQSection } from './components/FAQSection';
import { AppointmentScheduler } from './components/AppointmentScheduler';
import { LocationContactSection } from './components/LocationContactSection';
import { MyBookingsModal } from './components/MyBookingsModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Footer } from './components/Footer';
import { BookingRequest } from './types';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [isBookingsModalOpen, setIsBookingsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll for the Clandestine limelight navbar
  useEffect(() => {
    const sectionIds = ['home', 'services', 'masters', 'about', 'reviews', 'store', 'faq', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to target section
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Start booking directly
  const handleStartBooking = () => {
    handleScrollToSection('scheduler-section');
  };

  // When user selects a service from the catalog
  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    handleScrollToSection('scheduler-section');
  };

  // When user clicks "Book with Master"
  const handleSelectMaster = (stylistId: string) => {
    handleScrollToSection('scheduler-section');
  };

  const handleBookingCompleted = (booking: BookingRequest) => {
    console.log('New booking created:', booking);
  };

  return (
    <div className="min-h-screen relative flex flex-col font-sans selection:bg-[#7F8F45]/25 selection:text-[#2F3B1A] bg-[#FAF9F5] rough-paper-canvas text-[#192018]">
      
      {/* 1. Global Rough White Paper Canvas Texture & Faded Ambient Color Glows */}
      <FadedAmbientBackground />

      {/* 2. Clandestine Floating Island Limelight Navbar */}
      <Navbar 
        onOpenBookings={() => setIsBookingsModalOpen(true)}
        onBookClick={handleStartBooking}
        activeSection={activeSection}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Continuous Luxury Landing Page */}
      <main className="flex-1 pt-16 sm:pt-20">
        
        {/* =========================================================
            SECTION 1: CLANDESTINE HERO (No square lines, pure canvas)
           ========================================================= */}
        <HeroOrganicFlow 
          onStartBooking={handleStartBooking}
          onExploreServices={() => handleScrollToSection('services')}
        />

        {/* =========================================================
            POST-HERO SECTIONS (Wrapped with visible side grid lines)
           ========================================================= */}
        <div className="relative w-full overflow-hidden">
          
          {/* Visible square lines fading in from side edges outside hero */}
          <div className="square-grid-overlay hidden sm:block" aria-hidden="true" />
          
          {/* Subtle architectural vertical guides */}
          <div className="hidden lg:block absolute inset-y-0 left-6 w-[1.5px] bg-gradient-to-b from-transparent via-[#3A7D73]/25 to-transparent pointer-events-none z-0" aria-hidden="true" />
          <div className="hidden lg:block absolute inset-y-0 right-6 w-[1.5px] bg-gradient-to-b from-transparent via-[#3A7D73]/25 to-transparent pointer-events-none z-0" aria-hidden="true" />
          <div className="hidden xl:block absolute inset-y-0 left-20 w-[1px] bg-gradient-to-b from-transparent via-[#D6A838]/20 to-transparent pointer-events-none z-0" aria-hidden="true" />
          <div className="hidden xl:block absolute inset-y-0 right-20 w-[1px] bg-gradient-to-b from-transparent via-[#D6A838]/20 to-transparent pointer-events-none z-0" aria-hidden="true" />

          {/* SECTION 2: SERVICES SHOWCASE (Clandestine sequential hover table) */}
          <div className="relative z-10">
            <ServicesSection 
              onSelectService={handleSelectService}
            />
          </div>

          {/* SECTION 3: MASTERS / SPECIALISTS (Clandestine meet our masters) */}
          <div className="relative z-10">
            <MastersSection 
              onSelectMaster={handleSelectMaster}
            />
          </div>

          {/* SECTION 4: ABOUT US (Clandestine diced mosaic image grid) */}
          <div className="relative z-10">
            <AboutSection />
          </div>

          {/* SECTION 5: TESTIMONIALS (Clandestine verified review cards) */}
          <div className="relative z-10">
            <TestimonialsSection />
          </div>

          {/* SECTION 6: SALON BOUTIQUE STORE (Clandestine store section) */}
          <div className="relative z-10">
            <StoreSection />
          </div>

          {/* SECTION 7: FAQ (Clandestine unfolding accordion) */}
          <div className="relative z-10">
            <FAQSection />
          </div>

          {/* SECTION 8: APPOINTMENT SCHEDULER WIZARD */}
          <div className="relative z-10">
            <AppointmentScheduler 
              initialServiceId={selectedServiceId}
              onBookingSuccess={handleBookingCompleted}
            />
          </div>

          {/* SECTION 9: STUDIO LOCATION, MAP & HOURS */}
          <div className="relative z-10">
            <LocationContactSection />
          </div>

        </div>

      </main>

      {/* Clandestine Enhanced Footer */}
      <Footer />

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
