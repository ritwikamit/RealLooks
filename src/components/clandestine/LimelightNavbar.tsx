import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Calendar, UserCheck, ChevronDown, Sparkles, MapPin, Camera, Star, Info, Scissors, Clock } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';

export type PageView = 'home' | 'about' | 'gallery' | 'contact';

interface NavItem {
  id: PageView;
  label: string;
  icon?: React.ReactNode;
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
    { id: 'home', label: 'Home' },
    { id: 'home', label: 'Services', targetHash: 'services' },
    { id: 'home', label: 'Schedule', targetHash: 'scheduler-section' },
    { id: 'about', label: 'About' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  // Map activePage to nav index
  useEffect(() => {
    if (activePage === 'about') setActiveIndex(3);
    else if (activePage === 'gallery') setActiveIndex(4);
    else if (activePage === 'contact') setActiveIndex(5);
    else setActiveIndex(0);
  }, [activePage]);

  // Update spotlight position
  useEffect(() => {
    const activeEl = navItemRefs.current[activeIndex];
    const limelight = limelightRef.current;
    if (activeEl && limelight) {
      const elRect = activeEl.offsetLeft;
      const elWidth = activeEl.offsetWidth;
      const limelightWidth = 44;
      const left = elRect + elWidth / 2 - limelightWidth / 2;
      limelight.style.left = `${left}px`;
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
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-8 py-3 transition-all duration-300">
      {/* Floating Pill Container inspired by Clandestine Template */}
      <div
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-3xl transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between border ${
          isScrolled
            ? 'bg-[#1E2611]/92 backdrop-blur-xl border-[#D6A838]/50 shadow-[0_12px_32px_rgba(0,0,0,0.35)]'
            : 'bg-[#253014]/85 backdrop-blur-lg border-[#D6A838]/30 shadow-[0_8px_24px_rgba(0,0,0,0.25)]'
        }`}
      >
        {/* 1. Left: Brand Logo (Transparent, aligned, perfectly sized) */}
        <button
          onClick={() => handleItemClick(0, navItems[0])}
          className="flex items-center gap-2 cursor-pointer focus:outline-none transition-transform hover:scale-[1.02] flex-shrink-0"
          aria-label="Real Looks Home"
        >
          <BrandLogo variant="header" />
        </button>

        {/* 2. Center: Clandestine Spotlight / Limelight Navigation Bar */}
        <nav className="hidden lg:flex items-center relative h-11 px-2">
          {/* Spotlight / Limelight Floating Indicator */}
          <div
            ref={limelightRef}
            className="pointer-events-none absolute top-0 h-[4px] w-[44px] rounded-full bg-[#D6A838] transition-all duration-300 ease-out z-10"
            style={{
              boxShadow: '0 4px 18px 2px #D6A838',
              opacity: 0,
            }}
          >
            {/* Spotlight Light Cone Beam */}
            <div
              className="absolute left-[-40%] top-[4px] w-[180%] h-[48px] pointer-events-none opacity-40"
              style={{
                clipPath: 'polygon(15% 100%, 30% 0%, 70% 0%, 85% 100%)',
                background: 'linear-gradient(to bottom, #D6A838, transparent)',
              }}
            />
          </div>

          {/* Navigation Links with Hover/Active Spotlight */}
          <div className="flex items-center gap-1">
            {navItems.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={item.label}
                  ref={(el) => (navItemRefs.current[idx] = el)}
                  onClick={() => handleItemClick(idx, item)}
                  className={`relative px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-xl transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'text-[#FFF2A8] font-extrabold'
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

          {/* Clandestine Refined Chronicle "BOOK NOW" Button */}
          <button
            onClick={onBookClick}
            className="relative group overflow-hidden px-5 py-2 rounded-xl bg-gradient-to-r from-[#D6A838] via-[#E2C76B] to-[#C29324] hover:from-[#C29324] hover:to-[#8E680E] text-[#1F1703] font-extrabold text-xs tracking-wider uppercase border border-white/40 shadow-md hover:shadow-lg transition-all hover:scale-[1.03] active:scale-95 flex items-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#1F1703]" />
            <span>BOOK NOW</span>
            {/* Shimmer line */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </button>
        </div>

        {/* 4. Mobile Menu Toggle */}
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
