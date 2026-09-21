import React, { useState } from 'react';
import { FadedAmbientBackground } from './components/FadedAmbientBackground';
import { Navbar, PageView } from './components/Navbar';
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
import { ArrowLeft, Calendar, Sparkles } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [isBookingsModalOpen, setIsBookingsModalOpen] = useState(false);

  // Smooth navigation handler
  const handleNavigate = (page: PageView) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to scheduler with smooth easing
  const handleStartBooking = (preselectedCategory?: string) => {
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
    <div className="min-h-screen relative flex flex-col font-sans selection:bg-[#7F8F45]/25 selection:text-[#2F3B1A] bg-[#FAF9F5] rough-paper-canvas text-[#192018]">
      
      {/* 1. Global Rough White Paper Canvas Texture & Faded Ambient Color Glows */}
      <FadedAmbientBackground />

      {/* 2. Header with Brand Theme Gradient & Aligned Logo (Top banner removed) */}
      <Navbar 
        onOpenBookings={() => setIsBookingsModalOpen(true)}
        onBookClick={handleStartBooking}
        activePage={activePage}
        onNavigate={handleNavigate}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        
        {/* =========================================================
            HOME PAGE: Hero (No square lines) + Scheduler + Services
           ========================================================= */}
        {activePage === 'home' && (
          <>
            {/* Hero Section: Pure rough white paper canvas without square grid lines */}
            <HeroOrganicFlow 
              onStartBooking={handleStartBooking}
              onExploreServices={handleExploreServices}
            />

            {/* Post-Hero Container with Visible Side-Edge Fading Square Grid Lines */}
            <div className="relative w-full overflow-hidden">
              
              {/* Clearly visible square lines fading in from the side edges */}
              <div className="square-grid-overlay hidden sm:block" aria-hidden="true" />
              
              {/* Subtle architectural margin guides on PC */}
              <div className="hidden lg:block absolute inset-y-0 left-6 w-[1.5px] bg-gradient-to-b from-transparent via-[#3A7D73]/25 to-transparent pointer-events-none z-0" aria-hidden="true" />
              <div className="hidden lg:block absolute inset-y-0 right-6 w-[1.5px] bg-gradient-to-b from-transparent via-[#3A7D73]/25 to-transparent pointer-events-none z-0" aria-hidden="true" />

              {/* Online Appointment Scheduler */}
              <div className="relative z-10">
                <AppointmentScheduler 
                  initialServiceId={selectedServiceId}
                  onBookingSuccess={handleBookingCompleted}
                />
              </div>

              {/* Unisex Services Catalog */}
              <div className="relative z-10">
                <ServicesSection 
                  onSelectService={handleSelectServiceFromCatalog}
                />
              </div>

              {/* Explore Studio & Portfolio Banner on Home */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="lucid-glass rounded-3xl p-8 sm:p-10 border border-white/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-2 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4C5B2E]/10 text-[#2F3B1A] text-xs font-bold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5 text-[#D6A838]" />
                      <span>Discover More About Real Looks</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#192018]">
                      Hygiene Protocols, Certified Stylists & Lookbook
                    </h3>
                    <p className="text-sm text-[#677565] max-w-xl">
                      Read about our hospital-grade sterilization standards in Dani Bigha or explore real client hair & beard transformations.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => handleNavigate('about')}
                      className="btn btn-outline border-[#4C5B2E]/40 text-[#2F3B1A] hover:bg-[#4C5B2E] hover:text-white rounded-xl text-xs font-bold tracking-wider uppercase px-5 cursor-pointer shadow-2xs"
                    >
                      About & Hygiene
                    </button>
                    <button
                      onClick={() => handleNavigate('gallery')}
                      className="btn btn-outline border-[#12B5AF]/40 text-[#0D8F8B] hover:bg-[#12B5AF] hover:text-white rounded-xl text-xs font-bold tracking-wider uppercase px-5 cursor-pointer shadow-2xs"
                    >
                      Lookbook Gallery
                    </button>
                  </div>
                </div>
              </div>

              {/* Verified Local Client Reviews */}
              <div className="relative z-10">
                <TestimonialsSection />
              </div>

              {/* Location, Opening Hours & Google Maps */}
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
            {/* Visible square lines fading in from side edges */}
            <div className="square-grid-overlay hidden sm:block" aria-hidden="true" />
            <div className="hidden lg:block absolute inset-y-0 left-6 w-[1.5px] bg-gradient-to-b from-transparent via-[#3A7D73]/25 to-transparent pointer-events-none z-0" aria-hidden="true" />
            <div className="hidden lg:block absolute inset-y-0 right-6 w-[1.5px] bg-gradient-to-b from-transparent via-[#3A7D73]/25 to-transparent pointer-events-none z-0" aria-hidden="true" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              {/* DaisyUI Breadcrumbs */}
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

            {/* Quick Booking CTA on Subpage */}
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
            {/* Visible square lines fading in from side edges */}
            <div className="square-grid-overlay hidden sm:block" aria-hidden="true" />
            <div className="hidden lg:block absolute inset-y-0 left-6 w-[1.5px] bg-gradient-to-b from-transparent via-[#3A7D73]/25 to-transparent pointer-events-none z-0" aria-hidden="true" />
            <div className="hidden lg:block absolute inset-y-0 right-6 w-[1.5px] bg-gradient-to-b from-transparent via-[#3A7D73]/25 to-transparent pointer-events-none z-0" aria-hidden="true" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              {/* DaisyUI Breadcrumbs */}
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

            {/* Quick Booking CTA on Subpage */}
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
            {/* Visible square lines fading in from side edges */}
            <div className="square-grid-overlay hidden sm:block" aria-hidden="true" />
            <div className="hidden lg:block absolute inset-y-0 left-6 w-[1.5px] bg-gradient-to-b from-transparent via-[#3A7D73]/25 to-transparent pointer-events-none z-0" aria-hidden="true" />
            <div className="hidden lg:block absolute inset-y-0 right-6 w-[1.5px] bg-gradient-to-b from-transparent via-[#3A7D73]/25 to-transparent pointer-events-none z-0" aria-hidden="true" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              {/* DaisyUI Breadcrumbs */}
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

      {/* Footer with Transparent Logo & Social Links */}
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
