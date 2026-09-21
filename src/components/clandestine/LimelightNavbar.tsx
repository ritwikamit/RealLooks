import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Calendar, UserCheck } from 'lucide-react';
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

  // Active section index & hover index
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const isScrollingToRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  const navItemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', targetHash: 'home' },
    { id: 'home', label: 'Services', targetHash: 'services' },
    { id: 'home', label: 'Schedule', targetHash: 'scheduler-section' },
    { id: 'home', label: 'Stylists', targetHash: 'masters' },
    { id: 'home', label: 'Gallery', targetHash: 'gallery' },
    { id: 'home', label: 'Boutique', targetHash: 'store' },
    { id: 'home', label: 'Contact', targetHash: 'contact' },
  ];

  // Map subpages when navigated to standalone view
  useEffect(() => {
    if (activePage === 'about') {
      setActiveIndex(3);
      activeIndexRef.current = 3;
    } else if (activePage === 'gallery') {
      setActiveIndex(4);
      activeIndexRef.current = 4;
    } else if (activePage === 'contact') {
      setActiveIndex(6);
      activeIndexRef.current = 6;
    }
  }, [activePage]);

  // High-performance zero-reflow scroll tracking on home page
  useEffect(() => {
    let rafId: number;

    // Cache section positions to prevent synchronous layout recalculations (getBoundingClientRect) during scroll
    let cachedTargets: { hash: string; index: number; top: number }[] = [];

    const updateCachedPositions = () => {
      if (activePage !== 'home') return;
      const sectionTargets = [
        { hash: 'home', index: 0 },
        { hash: 'services', index: 1 },
        { hash: 'scheduler-section', index: 2 },
        { hash: 'masters', index: 3 },
        { hash: 'gallery', index: 4 },
        { hash: 'store', index: 5 },
        { hash: 'contact', index: 6 },
      ];

      cachedTargets = sectionTargets.map((item) => {
        const el = document.getElementById(item.hash);
        let top = 0;
        if (el) {
          let curr: HTMLElement | null = el;
          while (curr) {
            top += curr.offsetTop;
            curr = curr.offsetParent as HTMLElement | null;
          }
        }
        return { ...item, top };
      });
    };

    updateCachedPositions();
    window.addEventListener('resize', updateCachedPositions, { passive: true });

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // 1. Update isScrolled status with zero layout thrashing
        const scrolled = scrollY > 20;
        setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

        // 2. Active section tracking only on home page
        if (activePage !== 'home' || isScrollingToRef.current) return;

        // Near top
        if (scrollY < 160) {
          if (activeIndexRef.current !== 0) {
            activeIndexRef.current = 0;
            setActiveIndex(0);
          }
          return;
        }

        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Near bottom -> Contact
        if (windowHeight + scrollY >= documentHeight - 120) {
          if (activeIndexRef.current !== 6) {
            activeIndexRef.current = 6;
            setActiveIndex(6);
          }
          return;
        }

        // Fast numerical check against precomputed offsets
        const triggerLine = 160;
        let detectedIndex = 0;

        for (let i = cachedTargets.length - 1; i >= 0; i--) {
          const item = cachedTargets[i];
          if (scrollY >= item.top - triggerLine) {
            detectedIndex = item.index;
            break;
          }
        }

        if (activeIndexRef.current !== detectedIndex) {
          activeIndexRef.current = detectedIndex;
          setActiveIndex(detectedIndex);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateCachedPositions);
      cancelAnimationFrame(rafId);
    };
  }, [activePage]);

  // Which index should the spotlight highlight: hoveredIndex takes immediate priority, else activeIndex
  const displayIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  // Reposition spotlight smoothly whenever displayIndex or window size changes
  useEffect(() => {
    const updateSpotlightPosition = () => {
      const activeEl = navItemRefs.current[displayIndex];
      const limelight = limelightRef.current;
      if (activeEl && limelight) {
        const elLeft = activeEl.offsetLeft;
        const elWidth = activeEl.offsetWidth;
        const beamWidth = Math.max(46, Math.min(elWidth * 0.78, 70));
        const targetX = elLeft + (elWidth - beamWidth) / 2;
        limelight.style.width = `${beamWidth}px`;
        limelight.style.transform = `translateX(${targetX}px)`;
        limelight.style.opacity = '1';
      }
    };

    updateSpotlightPosition();
    window.addEventListener('resize', updateSpotlightPosition, { passive: true });
    return () => window.removeEventListener('resize', updateSpotlightPosition);
  }, [displayIndex]);

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
    setHoveredIndex(null);
    setMobileMenuOpen(false);

    // Temporarily disable scroll tracking while smooth scrolling
    isScrollingToRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = window.setTimeout(() => {
      isScrollingToRef.current = false;
    }, 850);

    if (activePage !== 'home') {
      onNavigate('home');
    }

    if (item.targetHash) {
      setTimeout(() => {
        const el = document.getElementById(item.targetHash!);
        if (el) {
          const headerEl = document.querySelector('header');
          const headerHeight = headerEl ? headerEl.offsetHeight + 16 : 80;
          const elPosition = el.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elPosition - headerHeight;
          window.scrollTo({
            top: offsetPosition > 0 ? offsetPosition : 0,
            behavior: 'smooth',
          });
        }
      }, 60);
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-250 border-b ${
        isScrolled
          ? 'bg-[#FAF9F6]/96 backdrop-blur-2xl border-[#D6A838]/35 shadow-[0_8px_30px_rgba(0,0,0,0.07)] py-2 sm:py-2.5'
          : 'bg-[#FAF9F6]/90 backdrop-blur-xl border-[#D6A838]/20 shadow-[0_4px_20px_rgba(0,0,0,0.04)] py-2.5 sm:py-3'
      }`}
      style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden' }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* 1. Left: Official Brand Logo directly in header (High contrast on light luxury glass) */}
        <button
          onClick={() => handleItemClick(0, navItems[0])}
          className="flex items-center cursor-pointer focus:outline-none transition-transform hover:scale-[1.03] flex-shrink-0"
          aria-label="Real Looks Home"
        >
          <img
            src="/images/logo.png"
            alt="Real Looks Unisex Salon"
            className="h-11 sm:h-12 md:h-14 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(214,168,56,0.25)] select-none"
            loading="eager"
          />
        </button>

        {/* 2. Center: Open Navigation with JUST the Limelight Nav Light (No cylinders, no pill boxes) */}
        <nav
          className="hidden md:flex items-center relative h-12 px-2"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Spotlight Floating Nav Light with ultra-responsive smooth spring ease */}
          <div
            ref={limelightRef}
            className="pointer-events-none absolute top-0 left-0 h-[3.5px] rounded-full bg-gradient-to-r from-[#F5D77F] via-[#D6A838] to-[#C29324] z-10"
            style={{
              boxShadow: '0 3px 18px 2px rgba(214,168,56,0.75), 0 0 10px #F5D77F',
              transition: 'transform 0.22s cubic-bezier(0.16, 1, 0.3, 1), width 0.22s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease',
              opacity: 0,
              transform: 'translate3d(0,0,0)',
            }}
          >
            {/* Spotlight Downward Light Cone Beam */}
            <div
              className="absolute left-[-20%] top-[3.5px] w-[140%] h-[50px] pointer-events-none opacity-40"
              style={{
                clipPath: 'polygon(15% 100%, 30% 0%, 70% 0%, 85% 100%)',
                background: 'linear-gradient(to bottom, rgba(214,168,56,0.5), rgba(214,168,56,0.12) 55%, transparent)',
                filter: 'drop-shadow(0 0 8px rgba(214,168,56,0.5))',
              }}
            />
          </div>

          {/* Clean Open Navigation Links — pure typography illuminated by the nav light, NO cylinder or box */}
          <div className="flex items-center gap-1 sm:gap-2 lg:gap-3">
            {navItems.map((item, idx) => {
              const isSelected = displayIndex === idx;
              return (
                <button
                  key={item.label}
                  ref={(el) => (navItemRefs.current[idx] = el)}
                  onClick={() => handleItemClick(idx, item)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  className={`relative px-3 sm:px-3.5 lg:px-4 py-2 text-[11px] lg:text-xs font-bold tracking-wider uppercase transition-colors duration-150 cursor-pointer select-none ${
                    isSelected
                      ? 'text-[#8E680E] font-black drop-shadow-[0_0_8px_rgba(214,168,56,0.4)] scale-[1.03]'
                      : 'text-[#2F3B1A]/80 hover:text-[#182416] active:scale-95'
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
              className="btn btn-sm btn-ghost bg-black/5 hover:bg-black/10 text-[#2F3B1A] border border-[#D6A838]/30 rounded-xl text-xs font-bold gap-2 px-3.5 transition-all cursor-pointer shadow-2xs active:scale-95"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#8E680E]" />
              <span>My Requests</span>
            </button>
          </div>

          {/* Clandestine Chronicle "BOOK NOW" Button */}
          <button
            onClick={onBookClick}
            className="relative group overflow-hidden px-5 py-2 rounded-xl bg-gradient-to-r from-[#D6A838] via-[#E2C76B] to-[#C29324] hover:from-[#C29324] hover:to-[#8E680E] text-[#1F1703] font-extrabold text-xs tracking-wider uppercase border border-white/80 shadow-md hover:shadow-lg transition-all hover:scale-[1.03] active:scale-95 flex items-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#1F1703]" />
            <span>BOOK NOW</span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </button>
        </div>

        {/* 4. Mobile Menu Controls */}
        <div className="flex md:hidden items-center gap-2">
          <div className="indicator">
            {bookingCount > 0 && (
              <span className="indicator-item badge badge-xs bg-[#12B5AF] text-white font-bold border-none">
                {bookingCount}
              </span>
            )}
            <button
              onClick={onOpenBookings}
              className="p-2 rounded-xl bg-black/5 text-[#2F3B1A] border border-[#D6A838]/30 cursor-pointer"
              aria-label="My Bookings"
            >
              <UserCheck className="w-4 h-4 text-[#8E680E]" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-black/5 text-[#2F3B1A] border border-[#D6A838]/30 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 rounded-2xl bg-[#FAF9F6]/98 backdrop-blur-2xl border border-[#D6A838]/40 p-4 space-y-2 shadow-2xl">
          {navItems.map((item, idx) => (
            <button
              key={item.label}
              onClick={() => handleItemClick(idx, item)}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors ${
                activeIndex === idx
                  ? 'bg-[#D6A838]/20 text-[#8E680E] font-black'
                  : 'text-[#2F3B1A]/85 hover:bg-black/5'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-black/10">
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
