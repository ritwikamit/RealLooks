import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const go = (page: PageView) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 pt-3"
      >
        <nav
          aria-label="Primary Navigation"
          className="navbar max-w-7xl mx-auto px-3 sm:px-5 py-2 rounded-2xl bg-[#FCF9EC]/92 backdrop-blur-xl border border-[#D4AF37]/75 shadow-[0_6px_28px_rgba(0,16,91,0.06)] min-h-0"
        >
          <div className="navbar-start">
            <button
              type="button"
              onClick={() => go('home')}
              className="flex items-center cursor-pointer group"
              aria-label="Real Looks Unisex Salon Home"
            >
              <img
                src="/images/logo.webp"
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
                        className="absolute inset-0 rounded-xl bg-white shadow-xs border border-[#D4AF37]/45 -z-0"
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
              className="btn btn-sm btn-square bg-white/90 hover:bg-[#C9B5E0]/50 text-[#00105B] border border-[#00105B]/10 rounded-xl glass-btn"
            >
              <Phone className="w-4 h-4 text-[#6061B6]" strokeWidth={2.1} />
            </a>

            <button
              type="button"
              onClick={onBookClick}
              className="btn btn-sm bg-[#FCF9EC] hover:bg-white text-[#00105B] font-bold text-xs tracking-wide rounded-xl glass-btn gold-border-btn px-4"
            >
              <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" strokeWidth={2} />
              <span>Book</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="btn btn-sm btn-square lg:hidden bg-white/85 text-[#00105B] border border-[#00105B]/10 rounded-xl"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Left Slide-In Drawer (outside transformed header so fixed positioning covers full viewport) */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-black/45 backdrop-blur-xs lg:hidden"
              aria-hidden="true"
            />

            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 left-0 z-50 w-72 max-w-[82vw] bg-[#FCF9EC]/98 backdrop-blur-2xl border-r border-[#D4AF37]/50 shadow-2xl flex flex-col justify-between p-5 lg:hidden"
              aria-label="Mobile Navigation"
            >
              <div>
                {/* Top Logo + Close */}
                <div className="flex items-center justify-between pb-5 border-b border-[#00105B]/10">
                  <img
                    src="/images/logo.webp"
                    alt="Real Looks Unisex Salon"
                    className="h-11 w-auto object-contain"
                  />
                  <button
                    type="button"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                    className="btn btn-sm btn-square bg-white/80 text-[#00105B] border border-[#00105B]/10 rounded-xl"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* List-wise Menu Items */}
                <ul className="flex flex-col gap-1.5 mt-5">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activePage === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => go(item.id)}
                          className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                            isActive
                              ? 'bg-[#00105B] text-[#FCF9EC] gold-border-btn'
                              : 'text-[#00105B]/85 hover:bg-[#C9B5E0]/35'
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-4 border-t border-[#00105B]/10 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onBookClick();
                  }}
                  className="btn bg-[#00105B] hover:bg-[#6061B6] text-[#FCF9EC] font-bold text-xs uppercase rounded-xl gold-border-btn w-full"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>Book Your Chair</span>
                </button>
                <a
                  href={SALON_INFO.telHref}
                  className="btn bg-white text-[#00105B] font-bold text-xs uppercase rounded-xl border border-[#D4AF37]/60 w-full"
                >
                  <Phone className="w-4 h-4 text-[#6061B6]" />
                  <span>Call Salon</span>
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
