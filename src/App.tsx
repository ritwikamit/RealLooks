import React, { useState, useEffect } from 'react';
import { FadedAmbientBackground } from './components/FadedAmbientBackground';
import { Navbar } from './components/Navbar';
import { HeroOrganicFlow } from './components/HeroOrganicFlow';
import { ServicesSection } from './components/ServicesSection';
import { MastersSection } from './components/MastersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { StoreSection } from './components/StoreSection';
import { AboutSection } from './components/AboutSection';
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
    const sectionIds = ['home', 'services', 'masters', 'testimonials', 'store', 'about', 'faq', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 250;
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
    <div className="min-h-screen relative flex flex-col font-sans bg-[#000000] text-[#fafafa] selection:bg-[#8D43F4]/30 selection:text-white">
      
      {/* 1. Ambient Dark Violet Glow Canvas */}
      <FadedAmbientBackground />

      {/* 2. Clandestine Floating Island Limelight Navbar */}
      <Navbar 
        onOpenBookings={() => setIsBookingsModalOpen(true)}
        onBookClick={handleStartBooking}
        activeSection={activeSection}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Continuous Clandestine Template Landing Page */}
      <main className="flex-1">
        
        {/* SECTION 1: HERO (Deep Black #000000) */}
        <div id="home" className="bg-[#000000]">
          <HeroOrganicFlow 
            onStartBooking={handleStartBooking}
            onExploreServices={() => handleScrollToSection('services')}
          />
        </div>

        <div className="h-[1px] bg-[#1a1a1a]" />

        {/* SECTION 2: SERVICES (Secondary Dark #0a0a0a) */}
        <div id="services" className="bg-[#0a0a0a]">
          <ServicesSection 
            onSelectService={handleSelectService}
          />
        </div>

        <div className="h-[1px] bg-[#1a1a1a]" />

        {/* SECTION 3: MASTERS (Deep Black #000000) */}
        <div id="masters" className="bg-[#000000]">
          <MastersSection 
            onSelectMaster={handleSelectMaster}
          />
        </div>

        <div className="h-[1px] bg-[#1a1a1a]" />

        {/* SECTION 4: TESTIMONIALS (Secondary Dark #0a0a0a) */}
        <div id="testimonials" className="bg-[#0a0a0a]">
          <TestimonialsSection />
        </div>

        <div className="h-[1px] bg-[#1a1a1a]" />

        {/* SECTION 5: SALON BOUTIQUE STORE (Deep Black #000000) */}
        <div id="store" className="bg-[#000000]">
          <StoreSection />
        </div>

        <div className="h-[1px] bg-[#1a1a1a]" />

        {/* SECTION 6: ABOUT US (Secondary Dark #0a0a0a) */}
        <div id="about" className="bg-[#0a0a0a]">
          <AboutSection />
        </div>

        <div className="h-[1px] bg-[#1a1a1a]" />

        {/* SECTION 7: FAQ (Deep Black #000000) */}
        <div id="faq" className="bg-[#000000]">
          <FAQSection />
        </div>

        <div className="h-[1px] bg-[#1a1a1a]" />

        {/* SECTION 8: APPOINTMENT SCHEDULER (Secondary Dark #0a0a0a) */}
        <div id="scheduler-section" className="bg-[#0a0a0a]">
          <AppointmentScheduler 
            initialServiceId={selectedServiceId}
            onBookingSuccess={handleBookingCompleted}
          />
        </div>

        <div className="h-[1px] bg-[#1a1a1a]" />

        {/* SECTION 9: STUDIO LOCATION & MAP (Deep Black #000000) */}
        <div id="contact" className="bg-[#000000]">
          <LocationContactSection />
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
