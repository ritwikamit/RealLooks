import React, { useState } from 'react';
import { Navbar, PageView } from './components/Navbar';
import { LoadingScreen } from './components/LoadingScreen';
import { HeroSection } from './components/HeroSection';
import { ReelVideoCard } from './components/ReelVideoCard';
import { ServicesSection } from './components/ServicesSection';
import { AppointmentScheduler } from './components/AppointmentScheduler';
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
import { MyBookingsModal } from './components/MyBookingsModal';
import { REEL_VIDEOS } from './data/salonData';

export default function App() {
  const [activePage, setActivePage] = useState<PageView>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [selectedStylistId, setSelectedStylistId] = useState<string | null>(null);
  const [isBookingsModalOpen, setIsBookingsModalOpen] = useState(false);

  const featuredReels = REEL_VIDEOS.filter((r) => r.featuredOnHome);

  const handleNavigate = (page: PageView) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToScheduler = () => {
    const jump = () => {
      const el = document.getElementById('scheduler-section');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(jump, 120);
    } else {
      jump();
    }
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    scrollToScheduler();
  };

  const handleSelectMaster = (stylistId: string) => {
    setSelectedStylistId(stylistId);
    scrollToScheduler();
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#FFFDF7] text-[#141413]">
      <LoadingScreen />

      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onBookClick={scrollToScheduler}
        onOpenBookings={() => setIsBookingsModalOpen(true)}
      />

      <main className="flex-1 w-full">
        {activePage === 'home' && (
          <>
            <HeroSection
              onStartBooking={scrollToScheduler}
              onExploreCuts={() => handleNavigate('gallery')}
            />

            {/* Featured Studio & Haircut Reels on Landing Page */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <span className="inline-block px-3 py-1 rounded-md bg-[#FFEEB3] border-2 border-[#141413] text-[#141413] text-xs font-extrabold uppercase tracking-wider mb-2">
                    In Motion
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">
                    Fresh From the Chair
                  </h2>
                  <p className="mt-1.5 text-sm text-[#141413]/75 max-w-xl">
                    Real cuts and studio moments. Videos play silently on loop—tap the speaker icon anytime for sound.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleNavigate('gallery')}
                  className="btn btn-sm bg-[#8EA8C3] hover:bg-[#7b98b6] text-[#141413] font-extrabold text-xs uppercase rounded-xl brutal-btn px-4 self-start sm:self-auto"
                >
                  Watch All Reels
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {featuredReels.map((reel) => (
                  <ReelVideoCard key={reel.id} reel={reel} />
                ))}
              </div>
            </section>

            {/* Quick WhatsApp Booking / Enquiry Form */}
            <div className="bg-[#FFEEB3]/35 border-y-2 border-[#141413]">
              <AppointmentScheduler
                initialServiceId={selectedServiceId}
                initialStylistId={selectedStylistId}
              />
            </div>

            <ServicesSection onSelectService={handleSelectService} />
            <AboutSection />
            <TestimonialsSection />
            <LocationContactSection />
          </>
        )}

        {activePage === 'services' && (
          <>
            <ServicesSection onSelectService={handleSelectService} />
            <FAQSection />
          </>
        )}

        {activePage === 'gallery' && <GallerySection />}
        {activePage === 'masters' && <MastersSection onSelectMaster={handleSelectMaster} />}
        {activePage === 'store' && <StoreSection />}
        {activePage === 'about' && <AboutSection />}
        {activePage === 'contact' && (
          <>
            <LocationContactSection />
            <TestimonialsSection />
          </>
        )}
      </main>

      <Footer onNavigate={handleNavigate} onBookClick={scrollToScheduler} />
      <MobileStickyBar onBookClick={scrollToScheduler} />
      <ScrollProgressButton />

      <MyBookingsModal
        isOpen={isBookingsModalOpen}
        onClose={() => setIsBookingsModalOpen(false)}
        onNewBooking={scrollToScheduler}
      />
    </div>
  );
}
