import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Calendar, UserCheck, Star } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';

export type PageView = 'home' | 'about' | 'gallery' | 'contact';

interface NavItem {
  id: PageView;
  label: string;
  targetHash?: string;
}

interface LimelightNavbarProps {
  onOpenBookings: () => void;
  onBookClick: () => void;
  activePage: PageView;
  onNavigate: (page: PageView) => void;
}

export const LimelightNavbar: React.FC<LimelightNavbarProps> = ({
  onOpenBookings,
  onBookClick,
  activePage,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingCount, setBookingCount] = useState(0);

  // Limelight spotlight state
  const [activeIndex, setActiveIndex] = useState(0);
  const navItemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', targetHash: 'home' },
    { id: 'home', label: 'Services', targetHash: 'services' },
    { id: 'home', label: 'Schedule', targetHash: 'scheduler-section' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  // Map subpage navigation to spotlight index
  useEffect(() => {
    if (activePage === 'about') setActiveIndex(3);
    else if (activePage === 'gallery') setActiveIndex(4);
    else if (activePage === 'contact') setActiveIndex(5);
  }, [activePage]);

  // Smooth scroll tracking on Home page
  useEffect(() => {
    if (activePage !== 'home') return;

    let ticking = false;

    const handleScrollTracking = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + 220;
          const schedulerEl = document.getElementById('scheduler-section');
          const servicesEl = document.getElementById('services');

          if (schedulerEl && servicesEl) {
            const schedulerTop = schedulerEl.offsetTop;
            const servicesTop = servicesEl.offsetTop;

            if (scrollPos >= schedulerTop - 120 && scrollPos < schedulerTop + schedulerEl.offsetHeight) {
              setActiveIndex(2); // Schedule
            } else if (scrollPos >= servicesTop - 120 && scrollPos < schedulerTop - 120) {
              setActiveIndex(1); // Services
            } else if (scrollPos < servicesTop - 120) {
              setActiveIndex(0); // Home
            }
          } else {
            setActiveIndex(0);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScrollTracking, { passive: true });
    handleScrollTracking();
    return () => window.removeEventListener('scroll', handleScrollTracking);
  }, [activePage]);

  // Update spotlight position with smooth interpolation
  useEffect(() => {
    const activeEl = navItemRefs.current[activeIndex];
    const limelight = limelightRef.current;
    if (activeEl && limelight) {
      const elLeft = activeEl.offsetLeft;
      const elWidth = activeEl.offsetWidth;
      const limelightWidth = 46;
      const targetX = elLeft + elWidth / 2 - limelightWidth / 2;
      limelight.style.transform = `translateX(${targetX}px)`;
      limelight.style.opacity = '1';
    }
  }, [activeIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch saved bookings count
  useEffect(() => {
    try {
      const stored = localStorage.getItem('real_looks_bookings');
      if (stored) {
        const parsed = JSON.parse(stored);
        setBookingCount(Array.isArray(parsed) ? parsed.length : 0);
      }
    } catch {
      setBookingCount(0);
    }
  }, []);

  const handleItemClick = (index: number, item: NavItem) => {
    setActiveIndex(index);
    setMobileMenuOpen(false);
    onNavigate(item.id);
    if (item.targetHash) {
      setTimeout(() => {
        const el = document.getElementById(item.targetHash!);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-8 py-3 transition-all duration-300">
      {/* Floating Pill Container */}
      <div
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-3xl transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
          isScrolled
            ? 'bg-[#1E2611]/94 backdrop-blur-xl border-[#D6A838]/50 shadow-[0_12px_32px_rgba(0,0,0,0.35)]'
            : 'bg-[#242F14]/88 backdrop-blur-lg border-[#D6A838]/30 shadow-[0_8px_24px_rgba(0,0,0,0.22)]'
        }`}
      >
        {/* 1. Left: Brand Logo (Transparent, clean, aligned) */}
        <button
          onClick={() => handleItemClick(0, navItems[0])}
          className="flex items-center gap-2 cursor-pointer focus:outline-none transition-transform hover:scale-[1.02] flex-shrink-0"
          aria-label="Real Looks Home"
        >
          <BrandLogo variant="header" />
        </button>

        {/* 2. Center: Smooth Limelight Spotlight Navigation Bar */}
        <nav className="hidden lg:flex items-center relative h-11 px-2">
          {/* Spotlight Floating Indicator with smooth hardware-accelerated transform */}
          <div
            ref={limelightRef}
            className="pointer-events-none absolute top-0 left-0 h-[4px] w-[46px] rounded-full bg-gradient-to-r from-[#FFF4BD] via-[#D6A838] to-[#C29324] z-10"
            style={{
              boxShadow: '0 4px 20px 3px rgba(214,168,56,0.85), 0 0 10px #FFF4BD',
              transition: 'transform 0.48s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease',
              opacity: 0,
            }}
          >
            {/* Spotlight Light Cone Beam */}
            <div
              className="absolute left-[-50%] top-[4px] w-[200%] h-[50px] pointer-events-none opacity-45"
              style={{
                clipPath: 'polygon(12% 100%, 32% 0%, 68% 0%, 88% 100%)',
                background: 'linear-gradient(to bottom, #D6A838, transparent)',
                filter: 'drop-shadow(0 0 8px rgba(214,168,56,0.5))',
              }}
            />
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={item.label}
                  ref={(el) => (navItemRefs.current[idx] = el)}
                  onClick={() => handleItemClick(idx, item)}
                  className={`relative px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-xl transition-all duration-300 cursor-pointer select-none ${
                    isActive
                      ? 'text-[#FFF2A8] font-extrabold drop-shadow-[0_0_8px_rgba(255,244,189,0.5)]'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>

        {/* 3. Right: Action Buttons (My Requests + BOOK NOW) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* My Requests with DaisyUI indicator */}
          <div className="indicator">
            {bookingCount > 0 && (
              <span className="indicator-item badge badge-xs bg-[#12B5AF] text-white font-bold border-none shadow-xs">
                {bookingCount}
              </span>
            )}
            <button
              onClick={onOpenBookings}
              className="btn btn-sm btn-ghost bg-white/10 hover:bg-white/20 text-[#FAF8F5] border border-white/20 rounded-xl text-xs font-bold gap-2 px-3.5 transition-all cursor-pointer shadow-xs"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#E5C460]" />
              <span>My Requests</span>
            </button>
          </div>

          {/* Clandestine Chronicle "BOOK NOW" Button */}
          <button
            onClick={onBookClick}
            className="relative group overflow-hidden px-5 py-2 rounded-xl bg-gradient-to-r from-[#D6A838] via-[#E2C76B] to-[#C29324] hover:from-[#C29324] hover:to-[#8E680E] text-[#1F1703] font-extrabold text-xs tracking-wider uppercase border border-white/40 shadow-md hover:shadow-lg transition-all hover:scale-[1.03] active:scale-95 flex items-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#1F1703]" />
            <span>BOOK NOW</span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </button>
        </div>

        {/* 4. Mobile Menu Controls */}
        <div className="flex lg:hidden items-center gap-2">
          <div className="indicator">
            {bookingCount > 0 && (
              <span className="indicator-item badge badge-xs bg-[#12B5AF] text-white font-bold border-none">
                {bookingCount}
              </span>
            )}
            <button
              onClick={onOpenBookings}
              className="p-2 rounded-xl bg-white/10 text-white border border-white/20 cursor-pointer"
              aria-label="My Bookings"
            >
              <UserCheck className="w-4 h-4 text-[#E5C460]" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/10 text-white border border-white/20 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 rounded-2xl bg-[#1E2611]/95 backdrop-blur-xl border border-[#D6A838]/40 p-4 space-y-2 shadow-2xl">
          {navItems.map((item, idx) => (
            <button
              key={item.label}
              onClick={() => handleItemClick(idx, item)}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors ${
                activeIndex === idx
                  ? 'bg-[#35431C] text-[#FFF2A8]'
                  : 'text-white/85 hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-white/15">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D6A838] to-[#C29324] text-[#1F1703] font-bold text-xs tracking-wider uppercase shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
