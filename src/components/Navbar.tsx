import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, UserCheck, Sparkles, Scissors, Award, Info, Star, ShoppingBag, HelpCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export type PageView = 'home' | 'about' | 'gallery' | 'contact';

interface NavbarProps {
  onOpenBookings: () => void;
  onBookClick: () => void;
  activeSection?: string;
  onScrollToSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBookings,
  onBookClick,
  activeSection = 'home',
  onScrollToSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingCount, setBookingCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check saved bookings count from localStorage
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

  const navItems = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'services', label: 'Services', icon: Scissors },
    { id: 'masters', label: 'Masters', icon: Award },
    { id: 'about', label: 'About', icon: Info },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'store', label: 'Store', icon: ShoppingBag },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
  ];

  const handleItemClick = (targetId: string) => {
    setMobileMenuOpen(false);
    if (onScrollToSection) {
      onScrollToSection(targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Island Limelight Navbar (Clandestine Style) */}
      <header className="fixed top-2 sm:top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <div 
          className={`pointer-events-auto w-full max-w-7xl rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2 sm:py-2.5 ${
            isScrolled
              ? 'bg-[#1D250F]/95 backdrop-blur-xl border border-[#D6A838]/50 shadow-[0_10px_35px_rgba(0,0,0,0.35)]'
              : 'bg-[#222A13]/90 backdrop-blur-lg border border-[#D6A838]/35 shadow-[0_8px_30px_rgba(47,59,26,0.2)]'
          }`}
        >
          {/* 1. Official Brand Logo (Background Removed, Perfectly Aligned) */}
          <button
            onClick={() => handleItemClick('home')}
            className="flex items-center gap-2 cursor-pointer focus:outline-none transition-transform hover:scale-105 select-none flex-shrink-0"
            aria-label="Real Looks Unisex Salon Home"
          >
            <BrandLogo variant="header" />
          </button>

          {/* 2. Clandestine Limelight Center Nav (Desktop) */}
          <nav className="hidden xl:flex items-center gap-1 bg-black/20 rounded-full p-1 border border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer select-none ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D6A838] to-[#C29324] text-[#1F1703] shadow-sm'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className={`w-3 h-3 ${isActive ? 'text-[#1F1703]' : 'text-[#D6A838]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* 3. Action Buttons (Right) */}
          <div className="flex items-center gap-2.5">
            {/* My Requests Button with DaisyUI Indicator Badge */}
            <div className="indicator hidden sm:inline-flex">
              {bookingCount > 0 && (
                <span className="indicator-item badge badge-primary badge-xs bg-[#12B5AF] text-white font-bold border-none shadow-xs">
                  {bookingCount}
                </span>
              )}
              <button
                id="navbar-my-bookings-button"
                onClick={onOpenBookings}
                className="btn btn-sm btn-ghost bg-white/10 hover:bg-white/20 text-[#FAF8F5] border border-white/20 rounded-full text-xs font-bold gap-1.5 px-3.5 transition-all cursor-pointer shadow-xs"
              >
                <UserCheck className="w-3.5 h-3.5 text-[#E5C460]" />
                <span className="hidden md:inline">My Requests</span>
              </button>
            </div>

            {/* Clandestine Glossy Gold CTA Button */}
            <button
              id="navbar-book-now-button"
              onClick={onBookClick}
              className="btn btn-sm bg-gradient-to-r from-[#D6A838] via-[#E2C76B] to-[#C29324] hover:from-[#C29324] hover:to-[#8E680E] text-[#1F1703] font-extrabold text-xs tracking-wider uppercase rounded-full border-none shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 px-5 flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#1F1703]" />
              <span>BOOK NOW</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-full bg-white/10 text-white border border-white/20 cursor-pointer hover:bg-white/20"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-down Glass Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-4 top-20 z-50 rounded-3xl bg-[#1D250F]/98 backdrop-blur-2xl border border-[#D6A838]/40 shadow-2xl p-5 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 transition-colors ${
                  isActive ? 'bg-[#35431C] text-[#FFF2A8]' : 'text-white/85 hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4 text-[#D6A838]" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookings();
              }}
              className="flex-1 py-2.5 rounded-xl bg-white/10 text-[#FFF2A8] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4" />
              <span>My Requests ({bookingCount})</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#D6A838] to-[#C29324] text-[#1F1703] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Slot</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
