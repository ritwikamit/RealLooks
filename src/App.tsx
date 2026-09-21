import React, { useState } from 'react';
import { FadedAmbientBackground } from './components/FadedAmbientBackground';
import { Navbar } from './components/Navbar';
import { HeroOrganicFlow } from './components/HeroOrganicFlow';
import { AppointmentScheduler } from './components/AppointmentScheduler';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationContactSection } from './components/LocationContactSection';
import { MyBookingsModal } from './components/MyBookingsModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { Footer } from './components/Footer';
import { BookingRequest } from './types';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [isBookingsModalOpen, setIsBookingsModalOpen] = useState(false);

  // Scroll to scheduler with smooth easing
  const handleStartBooking = (preselectedCategory?: string) => {
    const el = document.getElementById('scheduler-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When user clicks "Book This" on a specific service card
  const handleSelectServiceFromCatalog = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    const el = document.getElementById('scheduler-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingCompleted = (booking: BookingRequest) => {
    console.log('New booking created:', booking);
  };

  return (
    <div className="min-h-screen relative flex flex-col font-sans selection:bg-[#7F8F45]/20 selection:text-[#3F4A25] bg-[#F8F9F5]">
      
      {/* 1. Global Paper Canvas Texture & Ambient Color Glows */}
      <FadedAmbientBackground />

      {/* 2. Top Navigation Bar */}
      <Navbar 
        onOpenBookings={() => setIsBookingsModalOpen(true)}
        onBookClick={handleStartBooking}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 3. Hero Section (EXCLUDED from square grid lines - pure paper textured canvas) */}
        <HeroOrganicFlow 
          onStartBooking={handleStartBooking}
          onExploreServices={handleExploreServices}
        />

        {/* 4. Post-Hero Sections Container with Square Lines Fading in from Side Edges */}
        <div className="relative w-full overflow-hidden">
          
          {/* Square grid lines fading in from the side edges of the screen for all sections except hero */}
          <div className="square-grid-overlay hidden sm:block" aria-hidden="true" />
          
          {/* Subtle vertical architectural guides on desktop margins */}
          <div className="hidden lg:block absolute inset-y-0 left-6 w-[1px] bg-gradient-to-b from-transparent via-[#52A296]/18 to-transparent pointer-events-none z-0" aria-hidden="true" />
          <div className="hidden lg:block absolute inset-y-0 right-6 w-[1px] bg-gradient-to-b from-transparent via-[#52A296]/18 to-transparent pointer-events-none z-0" aria-hidden="true" />
          <div className="hidden xl:block absolute inset-y-0 left-20 w-[1px] bg-gradient-to-b from-transparent via-[#D6A838]/15 to-transparent pointer-events-none z-0" aria-hidden="true" />
          <div className="hidden xl:block absolute inset-y-0 right-20 w-[1px] bg-gradient-to-b from-transparent via-[#D6A838]/15 to-transparent pointer-events-none z-0" aria-hidden="true" />

          {/* Appointment Scheduler (Clean & Intuitive) */}
          <div className="relative z-10">
            <AppointmentScheduler 
              initialServiceId={selectedServiceId}
              onBookingSuccess={handleBookingCompleted}
            />
          </div>

          {/* Full Services Catalog with Unisex Categories */}
          <div className="relative z-10">
            <ServicesSection 
              onSelectService={handleSelectServiceFromCatalog}
            />
          </div>

          {/* About Real Looks & Hygiene Standards */}
          <div className="relative z-10">
            <AboutSection />
          </div>

          {/* Gallery Portfolio with Lightbox Zoom */}
          <div className="relative z-10">
            <GallerySection />
          </div>

          {/* Verified Local Client Testimonials */}
          <div className="relative z-10">
            <TestimonialsSection />
          </div>

          {/* Location, Opening Hours & Google Maps Directions */}
          <div className="relative z-10">
            <LocationContactSection />
          </div>

        </div>

      </main>

      {/* 10. Footer with Local SEO & Social Links */}
      <Footer />

      {/* 11. Mobile Sticky Conversion Bar (BOOK • WHATSAPP • CALL) */}
      <MobileStickyBar 
        onBookClick={handleStartBooking}
      />

      {/* 12. Saved Bookings Modal */}
      <MyBookingsModal 
        isOpen={isBookingsModalOpen}
        onClose={() => setIsBookingsModalOpen(false)}
        onNewBooking={handleStartBooking}
      />

    </div>
  );
}
