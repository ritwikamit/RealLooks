import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles, Scissors, Award, Info, Star, ShoppingBag, HelpCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

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
    { id: 'testimonials', label: 'Reviews', icon: Star },
    { id: 'store', label: 'Store', icon: ShoppingBag },
    { id: 'about', label: 'About', icon: Info },
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
      {/* Floating Limelight Navbar (Clandestine Aesthetic) */}
      <header className="fixed top-2 sm:top-4 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <div 
          className={`pointer-events-auto w-full max-w-7xl rounded-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 ${
            isScrolled
              ? 'bg-[#000000]/95 backdrop-blur-xl border border-[#262626] shadow-[0_12px_45px_rgba(0,0,0,0.85)]'
              : 'bg-[#0a0a0a]/90 backdrop-blur-lg border border-[#1f1f1f] shadow-[0_8px_30px_rgba(0,0,0,0.6)]'
          }`}
        >
          {/* Brand Logo */}
          <button
            onClick={() => handleItemClick('home')}
            className="flex items-center gap-2 cursor-pointer focus:outline-none transition-transform hover:scale-105 select-none flex-shrink-0"
            aria-label="Real Looks Unisex Salon Home"
          >
            <BrandLogo variant="header" />
          </button>

          {/* Clandestine Center Nav (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#121212] rounded-full p-1 border border-[#242424]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-250 flex items-center gap-1.5 cursor-pointer select-none ${
                    isActive
                      ? 'bg-[#8D43F4] text-white shadow-[0_0_16px_rgba(141,67,244,0.45)]'
                      : 'text-[#aaaaaa] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#8D43F4]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action CTAs: My Bookings & Schedule Appointment */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Status Indicator */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141414] border border-[#262626] text-[11px] font-medium text-[#aaaaaa]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>9 AM - 9 PM</span>
            </div>

            {/* Saved Bookings Indicator */}
            {bookingCount > 0 && (
              <button
                onClick={onOpenBookings}
                className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#333333] text-xs font-semibold text-white hover:bg-[#242424] cursor-pointer transition-colors"
                title="View your saved salon bookings"
              >
                <Calendar className="w-3.5 h-3.5 text-[#8D43F4]" />
                <span>Requests</span>
                <span className="ml-1 bg-[#8D43F4] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {bookingCount}
                </span>
              </button>
            )}

            {/* Primary Schedule Button */}
            <button
              onClick={onBookClick}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#8D43F4] text-white font-semibold text-xs sm:text-sm tracking-wide shadow-[0_0_20px_rgba(141,67,244,0.4)] hover:bg-[#7b2fe0] hover:shadow-[0_0_26px_rgba(141,67,244,0.6)] active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK NOW</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-[#1a1a1a] border border-[#2e2e2e] text-[#fafafa] hover:bg-[#262626] cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/80 backdrop-blur-md flex flex-col justify-start pt-24 px-6">
          <div className="bg-[#0e0e0e] border border-[#242424] rounded-2xl p-5 shadow-2xl space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#8D43F4] text-white shadow-md'
                      : 'text-[#e1e1e1] hover:bg-[#1a1a1a] hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#8D43F4]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="pt-3 border-t border-[#242424] space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookings();
                }}
                className="w-full text-left px-4 py-2.5 rounded-xl bg-[#1a1a1a] text-white flex items-center justify-between text-xs font-semibold"
              >
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#8D43F4]" />
                  My Requests
                </span>
                <span className="badge badge-sm bg-[#8D43F4] text-white border-0">{bookingCount}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 rounded-xl bg-[#8D43F4] text-white font-bold text-center text-sm tracking-wide shadow-lg hover:bg-[#7b2fe0]"
              >
                SCHEDULE APPOINTMENT
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
