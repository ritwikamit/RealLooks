import React, { useState } from 'react';
import { Navbar, PageView } from './components/Navbar';
import { LoadingScreen } from './components/LoadingScreen';
import { HeroSection } from './components/HeroSection';
import { StudioVibeSection } from './components/StudioVibeSection';
import { ReelVideoCard } from './components/ReelVideoCard';
import { ServicesSection } from './components/ServicesSection';
import { MastersSection } from './components/MastersSection';
import { GallerySection } from './components/GallerySection';
import { StoreSection } from './components/StoreSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ScrollProgressButton } from './components/ScrollProgressButton';
import { BookingModal } from './components/BookingModal';
import { REEL_VIDEOS } from './data/salonData';

export default function App() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedStylistId, setSelectedStylistId] = useState<string | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const featuredCutReels = REEL_VIDEOS.filter((r) => r.id !== 'reel-feature').slice(0, 3);

  const handleNavigate = (page: PageView) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openBooking = () => {
    setIsBookingOpen(true);
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleSelectMaster = (stylistId: string) => {
    setSelectedStylistId(stylistId);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#FFFDF7] text-[#141413]">
      <LoadingScreen />

      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onBookClick={openBooking}
      />

      <main className="flex-1 w-full">
        {activePage === 'home' && (
          <>
            <HeroSection
              onStartBooking={openBooking}
              onExploreCuts={() => handleNavigate('gallery')}
            />

            {/* Special Dedicated Section for Studio Vibe Reel */}
            <StudioVibeSection onBookClick={openBooking} />

            {/* 3 Featured Haircut Reels on Landing Page */}
            <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <p className="font-script text-2xl sm:text-3xl text-[#F47321] mb-1">
                    Confidence in every detail
                  </p>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">
                    Fresh From the Chair
                  </h2>
                  <p className="mt-1.5 text-sm text-[#141413]/70 max-w-xl">
                    Real cuts from our chairs—unedited and natural. Videos play silently on loop; tap the speaker icon anytime for sound.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleNavigate('gallery')}
                  className="btn btn-sm bg-[#8EA8C3]/75 hover:bg-[#8EA8C3] text-[#141413] border-0 font-bold text-xs uppercase rounded-xl glass-btn px-5 self-start sm:self-auto"
                >
                  Watch All 9 Cuts
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredCutReels.map((reel) => (
                  <ReelVideoCard key={reel.id} reel={reel} />
                ))}
              </div>
            </section>

            <ServicesSection onSelectService={handleSelectService} />
            <AboutSection />
            <TestimonialsSection />
            <LocationContactSection />
          </>
        )}

        {activePage === 'services' && (
          <div className="pt-6">
            <ServicesSection onSelectService={handleSelectService} />
            <FAQSection />
          </div>
        )}

        {activePage === 'gallery' && (
          <div className="pt-6">
            <GallerySection />
          </div>
        )}

        {activePage === 'masters' && (
          <div className="pt-6">
            <MastersSection onSelectMaster={handleSelectMaster} />
          </div>
        )}

        {activePage === 'store' && (
          <div className="pt-6">
            <StoreSection />
          </div>
        )}

        {activePage === 'about' && (
          <div className="pt-6">
            <AboutSection />
            <FAQSection />
          </div>
        )}

        {activePage === 'contact' && (
          <div className="pt-6">
            <LocationContactSection />
            <TestimonialsSection />
          </div>
        )}
      </main>

      <Footer onNavigate={handleNavigate} onBookClick={openBooking} />
      <MobileStickyBar onBookClick={openBooking} />
      <ScrollProgressButton />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={selectedServiceId}
        initialStylistId={selectedStylistId}
      />
    </div>
  );
}
