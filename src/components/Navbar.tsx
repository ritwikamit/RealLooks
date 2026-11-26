import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, BookmarkCheck } from 'lucide-react';

export type PageView = 'home' | 'services' | 'masters' | 'gallery' | 'store' | 'about' | 'contact';

interface NavbarProps {
  activePage: PageView;
  onNavigate: (page: PageView) => void;
  onBookClick: () => void;
  onOpenBookings: () => void;
}

const NAV_ITEMS: { id: PageView; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'gallery', label: 'Cuts & Reels' },
  { id: 'masters', label: 'Team' },
  { id: 'store', label: 'Shop' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Visit' },
];

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onBookClick,
  onOpenBookings,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookingCount, setBookingCount] = useState(0);

  useEffect(() => {
    const syncBookings = () => {
      try {
        const raw = localStorage.getItem('real_looks_bookings');
        setBookingCount(raw ? JSON.parse(raw).length : 0);
      } catch {
        setBookingCount(0);
      }
    };
    syncBookings();
    window.addEventListener('storage', syncBookings);
    window.addEventListener('bookingAdded', syncBookings);
    return () => {
      window.removeEventListener('storage', syncBookings);
      window.removeEventListener('bookingAdded', syncBookings);
    };
  }, []);

  const go = (page: PageView) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 pt-3">
      <nav
        aria-label="Primary Navigation"
        className="navbar max-w-7xl mx-auto px-3 sm:px-5 py-2 rounded-2xl glass-surface min-h-0"
      >
        <div className="navbar-start gap-2">
          <button
            type="button"
            onClick={() => go('home')}
            className="flex items-center gap-2.5 cursor-pointer group"
            aria-label="Real Looks Unisex Salon Home"
          >
            <img
              src="/images/logo.png"
              alt="Real Looks Unisex Salon"
              className="h-10 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="hidden sm:inline-block font-bold text-sm tracking-tight text-[#141413]">
              REAL LOOKS
            </span>
          </button>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => go(item.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#FFEEB3]/90 text-[#141413] shadow-xs'
                        : 'text-[#141413]/75 hover:text-[#141413] hover:bg-[#B4D7CD]/35'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <button
            type="button"
            onClick={onOpenBookings}
            className="btn btn-sm bg-[#B4D7CD]/65 hover:bg-[#B4D7CD] text-[#141413] border border-white/60 rounded-xl px-2.5"
            aria-label="My Bookings"
            title="My Saved Bookings"
          >
            <BookmarkCheck className="w-4 h-4" strokeWidth={2} />
            {bookingCount > 0 && (
              <span className="ml-1 text-[11px] font-bold">{bookingCount}</span>
            )}
          </button>

          <button
            type="button"
            onClick={onBookClick}
            className="btn btn-sm bg-[#F47321] hover:bg-[#e06314] text-white border-0 font-bold text-xs tracking-wide rounded-xl glass-btn px-4"
          >
            <Calendar className="w-3.5 h-3.5" strokeWidth={2} />
            <span>Book</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="btn btn-sm btn-square lg:hidden bg-[#FFEEB3]/80 text-[#141413] border border-white/60 rounded-xl"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 p-3 rounded-2xl glass-surface">
          <ul className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => go(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-colors ${
                      isActive
                        ? 'bg-[#F47321] text-white'
                        : 'bg-white/60 text-[#141413] hover:bg-[#FFEEB3]/70'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};
