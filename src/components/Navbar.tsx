import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone, MapPin, MessageSquare, Clock, UserCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onOpenBookings: () => void;
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookings, onBookClick }) => {
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

  // Check saved bookings count
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

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Scheduler', href: '#scheduler-section' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner with Local Salon Info & Glass Border */}
      <div className="bg-gradient-to-r from-[#2F3B1A] via-[#3A7D73] to-[#2B78AE] text-[#F8F9F5] text-[11px] py-2 px-4 border-b border-white/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#F5D77F]" />
              <span className="hidden sm:inline">Dani Bigha, Aurangabad, Bihar</span>
              <span className="sm:hidden">Aurangabad, Bihar</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-[#FFF2A8] font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>9:00 AM – 9:00 PM Daily</span>
            </span>
          </div>

          <div className="flex items-center gap-3 font-medium">
            <a
              href={`tel:${SALON_INFO.phoneClean}`}
              className="flex items-center gap-1 text-white/90 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#F5D77F]" />
              <span>{SALON_INFO.phone}</span>
            </a>
            <span className="text-white/40">|</span>
            <a
              href={`https://wa.me/${SALON_INFO.whatsapp}?text=${encodeURIComponent("Hello Real Looks Salon, I would like to book an appointment.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#86D6B9] hover:text-white transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-[#5CE0DC]" />
              <span className="hidden sm:inline">WhatsApp Booking</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar with Lucid Glassmorphism */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'lucid-glass py-2.5 shadow-md'
            : 'bg-[#F8F9F5]/70 backdrop-blur-md py-3.5 border-b border-white/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo (Original as provided) */}
          <a href="#home" className="flex-shrink-0 cursor-pointer">
            <BrandLogo variant="header" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-bold text-[#3D483B] hover:text-[#0D8F8B] tracking-wider transition-colors uppercase relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#12B5AF] transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* My Bookings Button with Lucid Glass */}
            <button
              id="navbar-my-bookings-button"
              onClick={onOpenBookings}
              className="px-3.5 py-2 rounded-xl text-xs font-bold text-[#2F3B1A] lucid-glass hover:bg-white/80 transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#C29324]" />
              <span>My Requests</span>
              {bookingCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-[#12B5AF] text-white text-[10px] flex items-center justify-center font-bold shadow-2xs">
                  {bookingCount}
                </span>
              )}
            </button>

            {/* Book Now Glossy Gold Primary Button */}
            <button
              id="navbar-book-now-button"
              onClick={onBookClick}
              className="px-5 py-2 rounded-xl glossy-gold-btn text-[#4A3502] text-xs font-extrabold shadow-sm hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer border border-white/90"
            >
              <Calendar className="w-3.5 h-3.5 text-[#4A3502]" />
              <span>BOOK NOW</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBookings}
              className="p-2 rounded-xl lucid-glass text-[#2F3B1A] relative cursor-pointer"
              aria-label="My Bookings"
            >
              <UserCheck className="w-4 h-4 text-[#C29324]" />
              {bookingCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#12B5AF] text-white text-[9px] flex items-center justify-center font-bold">
                  {bookingCount}
                </span>
              )}
            </button>

            <button
              id="mobile-menu-toggle-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl lucid-glass text-[#2F3B1A] cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden lucid-glass border-b border-white/60 px-5 py-4 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-bold text-[#3D483B] hover:text-[#0D8F8B] py-1 border-b border-black/5"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-2.5 rounded-xl glossy-gold-btn text-[#4A3502] text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#4A3502]" />
                <span>BOOK APPOINTMENT</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${SALON_INFO.phoneClean}`}
                  className="py-2 px-3 rounded-lg lucid-glass text-xs font-bold text-[#2F3B1A] flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C29324]" />
                  <span>Call Salon</span>
                </a>
                <a
                  href={`https://wa.me/${SALON_INFO.whatsapp}?text=${encodeURIComponent("Hello Real Looks Salon, I would like to book an appointment.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-xs font-bold text-[#15803D] flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
