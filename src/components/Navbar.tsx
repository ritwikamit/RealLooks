import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, UserCheck, ChevronDown, Sparkles, MapPin, Camera, Star, Info } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export type PageView = 'home' | 'about' | 'gallery' | 'contact';

interface NavbarProps {
  onOpenBookings: () => void;
  onBookClick: () => void;
  activePage?: PageView;
  onNavigate?: (page: PageView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBookings,
  onBookClick,
  activePage = 'home',
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingCount, setBookingCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  const handleNavClick = (page: PageView, hash?: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page);
    }
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 shadow-xl bg-gradient-to-r from-[#1B230F] via-[#2F3C18] to-[#404F23] border-b border-[#D6A838]/50'
          : 'py-3.5 sm:py-4 shadow-md bg-gradient-to-r from-[#212A13] via-[#35431C] to-[#465627] border-b border-[#D6A838]/35'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* 1. Official Transparent Logo (Correctly aligned & background-free) */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 cursor-pointer focus:outline-none transition-transform hover:scale-[1.02]"
          aria-label="Real Looks Unisex Salon Home"
        >
          <BrandLogo variant="header" />
        </button>

        {/* 2. Main Desktop Navigation (Streamlined) */}
        <nav className="hidden lg:flex items-center gap-7">
          {/* Home */}
          <button
            onClick={() => handleNavClick('home')}
            className={`text-xs font-bold tracking-wider uppercase transition-colors relative py-1 cursor-pointer ${
              activePage === 'home'
                ? 'text-[#FFF2A8] font-extrabold'
                : 'text-white/85 hover:text-[#FFF2A8]'
            }`}
          >
            Home
            {activePage === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D6A838] rounded-full" />
            )}
          </button>

          {/* Services */}
          <button
            onClick={() => handleNavClick('home', 'services')}
            className="text-xs font-bold text-white/85 hover:text-[#FFF2A8] tracking-wider uppercase transition-colors py-1 cursor-pointer"
          >
            Services
          </button>

          {/* Scheduler */}
          <button
            onClick={() => handleNavClick('home', 'scheduler-section')}
            className="text-xs font-bold text-white/85 hover:text-[#FFF2A8] tracking-wider uppercase transition-colors py-1 cursor-pointer"
          >
            Schedule
          </button>

          {/* Explore More Pages Dropdown (DaisyUI Dropdown) */}
          <div className="dropdown dropdown-hover dropdown-bottom">
            <div
              tabIndex={0}
              role="button"
              className={`text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 py-1 cursor-pointer transition-colors ${
                activePage !== 'home' ? 'text-[#FFF2A8]' : 'text-white/85 hover:text-[#FFF2A8]'
              }`}
            >
              <span>Explore Pages</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#D6A838]" />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow-2xl bg-[#212A13] border border-[#D6A838]/40 rounded-2xl w-56 text-[#F8F9F5] z-50 mt-2 backdrop-blur-md"
            >
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className={`flex items-center gap-2.5 py-2.5 text-xs font-bold rounded-xl hover:bg-[#35431C] ${
                    activePage === 'about' ? 'bg-[#35431C] text-[#FFF2A8]' : 'text-white/90'
                  }`}
                >
                  <Info className="w-4 h-4 text-[#D6A838]" />
                  <span>About & Hygiene</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('gallery')}
                  className={`flex items-center gap-2.5 py-2.5 text-xs font-bold rounded-xl hover:bg-[#35431C] ${
                    activePage === 'gallery' ? 'bg-[#35431C] text-[#FFF2A8]' : 'text-white/90'
                  }`}
                >
                  <Camera className="w-4 h-4 text-[#89CFF0]" />
                  <span>Lookbook Gallery</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`flex items-center gap-2.5 py-2.5 text-xs font-bold rounded-xl hover:bg-[#35431C] ${
                    activePage === 'contact' ? 'bg-[#35431C] text-[#FFF2A8]' : 'text-white/90'
                  }`}
                >
                  <MapPin className="w-4 h-4 text-[#86D6B9]" />
                  <span>Reviews & Location</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* 3. Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* My Requests Button with DaisyUI Indicator Badge */}
          <div className="indicator">
            {bookingCount > 0 && (
              <span className="indicator-item badge badge-primary badge-xs bg-[#12B5AF] text-white font-bold border-none shadow-xs">
                {bookingCount}
              </span>
            )}
            <button
              id="navbar-my-bookings-button"
              onClick={onOpenBookings}
              className="btn btn-sm btn-ghost bg-white/10 hover:bg-white/20 text-[#FAF8F5] border border-white/20 rounded-xl text-xs font-bold gap-2 px-3.5 transition-all cursor-pointer shadow-xs"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#E5C460]" />
              <span>My Requests</span>
            </button>
          </div>

          {/* Glossy Gold Primary CTA Button */}
          <button
            id="navbar-book-now-button"
            onClick={onBookClick}
            className="btn btn-sm bg-gradient-to-r from-[#D6A838] via-[#E2C76B] to-[#C29324] hover:from-[#C29324] hover:to-[#8E680E] text-[#1F1703] font-extrabold text-xs tracking-wider uppercase rounded-xl border-none shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-95 px-5 flex items-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#1F1703]" />
            <span>BOOK NOW</span>
          </button>
        </div>

        {/* 4. Mobile Menu Controls */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile My Requests Button */}
          <div className="indicator">
            {bookingCount > 0 && (
              <span className="indicator-item badge badge-xs bg-[#12B5AF] text-white font-bold border-none">
                {bookingCount}
              </span>
            )}
            <button
              onClick={onOpenBookings}
              className="p-2 rounded-xl bg-white/10 text-[#FAF8F5] border border-white/20 cursor-pointer"
              aria-label="My Requests"
            >
              <UserCheck className="w-4 h-4 text-[#E5C460]" />
            </button>
          </div>

          {/* Hamburger Menu Toggle */}
          <button
            id="mobile-menu-toggle-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/10 text-white border border-white/20 cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* 5. Mobile Slide-down Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#D6A838]/30 bg-[#212A13]/95 backdrop-blur-xl px-4 py-6 space-y-3 shadow-2xl">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider ${
              activePage === 'home' ? 'bg-[#35431C] text-[#FFF2A8]' : 'text-white/90 hover:bg-white/10'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('home', 'services')}
            className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white/90 hover:bg-white/10"
          >
            Services Catalog
          </button>

          <button
            onClick={() => handleNavClick('home', 'scheduler-section')}
            className="w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white/90 hover:bg-white/10"
          >
            Online Scheduler
          </button>

          <div className="border-t border-white/15 pt-2 space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#D6A838] px-4 block">
              Dedicated Pages
            </span>
            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2.5 ${
                activePage === 'about' ? 'bg-[#35431C] text-[#FFF2A8]' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              <Info className="w-4 h-4 text-[#D6A838]" />
              <span>About Real Looks & Hygiene</span>
            </button>

            <button
              onClick={() => handleNavClick('gallery')}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2.5 ${
                activePage === 'gallery' ? 'bg-[#35431C] text-[#FFF2A8]' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              <Camera className="w-4 h-4 text-[#89CFF0]" />
              <span>Work Portfolio Gallery</span>
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2.5 ${
                activePage === 'contact' ? 'bg-[#35431C] text-[#FFF2A8]' : 'text-white/90 hover:bg-white/10'
              }`}
            >
              <MapPin className="w-4 h-4 text-[#86D6B9]" />
              <span>Location, Hours & Reviews</span>
            </button>
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D6A838] to-[#C29324] text-[#1F1703] font-bold text-xs tracking-wider uppercase shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
