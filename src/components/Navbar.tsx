import React, { useState } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SALON_INFO } from '../data/salonData';

export type PageView = 'home' | 'services' | 'masters' | 'gallery' | 'store' | 'about' | 'contact';

interface NavbarProps {
  activePage: PageView;
  onNavigate: (page: PageView) => void;
  onBookClick: () => void;
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
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const go = (page: PageView) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-3"
    >
      <nav
        aria-label="Primary Navigation"
        className="navbar max-w-7xl mx-auto px-3 sm:px-5 py-2 rounded-2xl glass-surface min-h-0"
      >
        <div className="navbar-start">
          <button
            type="button"
            onClick={() => go('home')}
            className="flex items-center cursor-pointer group"
            aria-label="Real Looks Unisex Salon Home"
          >
            <img
              src="/images/logo.png"
              alt="Real Looks Unisex Salon"
              className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-1 relative">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <li key={item.id} className="relative">
                  <button
                    type="button"
                    onClick={() => go(item.id)}
                    className={`relative z-10 px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                      isActive
                        ? 'text-[#00105B]'
                        : 'text-[#00105B]/70 hover:text-[#00105B]'
                    }`}
                  >
                    {item.label}
                  </button>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-xl bg-[#C9B5E0]/55 border border-[#D4AF37]/50 -z-0"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <a
            href={SALON_INFO.telHref}
            aria-label="Call Salon"
            title="Call Salon"
            className="btn btn-sm btn-square bg-[#C9B5E0]/50 hover:bg-[#C9B5E0]/85 text-[#00105B] border border-[#00105B]/10 rounded-xl glass-btn"
          >
            <Phone className="w-4 h-4" strokeWidth={2.1} />
          </a>

          <button
            type="button"
            onClick={onBookClick}
            className="btn btn-sm bg-[#00105B] hover:bg-[#6061B6] text-[#FCF9EC] font-bold text-xs tracking-wide rounded-xl glass-btn gold-border-btn px-4"
          >
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2} />
            <span>Book</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="btn btn-sm btn-square lg:hidden bg-[#C9B5E0]/55 text-[#00105B] border-0 rounded-xl"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden max-w-7xl mx-auto mt-2 p-3 rounded-2xl glass-surface"
          >
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
                          ? 'bg-[#00105B] text-[#FCF9EC] gold-border-btn'
                          : 'bg-white/60 text-[#00105B] hover:bg-[#C9B5E0]/45'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
