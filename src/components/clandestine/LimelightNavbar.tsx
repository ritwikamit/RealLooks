import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Calendar, UserCheck } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';

export type PageView = 'home' | 'services' | 'masters' | 'gallery' | 'store' | 'about' | 'contact';

interface NavItem {
  id: PageView;
  label: string;
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

  const navItemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);
  const scrollProgressBarRef = useRef<HTMLDivElement | null>(null);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'masters', label: 'Artisans' },
    { id: 'gallery', label: 'Lookbook' },
    { id: 'store', label: 'Boutique' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  // Map active page to limelight position
  useEffect(() => {
    const pageIndexMap: Record<PageView, number> = {
      home: 0,
      services: 1,
      masters: 2,
      gallery: 3,
      store: 4,
      about: 5,
      contact: 6,
    };
    if (pageIndexMap[activePage] !== undefined) {
      setActiveIndex(pageIndexMap[activePage]);
      activeIndexRef.current = pageIndexMap[activePage];
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

        // 1. Update golden scroll progress line smoothly across all pages
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? Math.min(100, Math.max(0, (scrollY / maxScroll) * 100)) : 0;
        if (scrollProgressBarRef.current) {
          scrollProgressBarRef.current.style.width = `${progress}%`;
        }

        // 2. Update isScrolled status with zero layout thrashing
        const scrolled = scrollY > 20;
        setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

        // 3. Active section tracking only on home page
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
    onNavigate(item.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full max-w-full overflow-x-clip transition-all duration-300 border-b border-[#D6A838]/40 ${
        isScrolled
          ? 'py-2 sm:py-2.5 shadow-[0_16px_45px_rgba(11,25,44,0.5)]'
          : 'py-2.5 sm:py-3.5 shadow-[0_10px_30px_rgba(11,25,44,0.35)]'
      }`}
      style={{ 
        background: 'linear-gradient(135deg, rgba(11, 25, 44, 0.96) 0%, rgba(20, 42, 68, 0.95) 45%, rgba(13, 76, 92, 0.96) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        transform: 'translate3d(0,0,0)', 
        backfaceVisibility: 'hidden' 
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* 1. Left: Official Brand Logo with radiant white & gold ambient glow */}
        <button
          onClick={() => handleItemClick(0, navItems[0])}
          className="flex items-center cursor-pointer focus:outline-none transition-transform hover:scale-[1.03] flex-shrink-0"
          aria-label="Real Looks Home"
        >
          <img
            src="/images/logo.png"
            alt="Real Looks Unisex Salon"
            className="h-11 sm:h-12 md:h-14 w-auto object-contain filter drop-shadow-[0_0_12px_rgba(255,255,255,0.85)] drop-shadow-[0_0_24px_rgba(214,168,56,0.65)] select-none transition-transform duration-300"
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

          {/* Clean Open Navigation Links — pure typography illuminated by the nav light */}
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
                      ? 'text-[#FFF2A8] font-black drop-shadow-[0_0_12px_rgba(214,168,56,0.7)] scale-[1.03]'
                      : 'text-white/80 hover:text-[#FFF4BD] active:scale-95'
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
              className="btn btn-sm btn-ghost bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-xs font-bold gap-2 px-3.5 transition-all cursor-pointer shadow-2xs active:scale-95"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#D6A838]" />
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
              className="p-2 rounded-xl bg-white/10 text-white border border-[#D6A838]/40 cursor-pointer"
              aria-label="My Bookings"
            >
              <UserCheck className="w-4 h-4 text-[#D6A838]" />
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/10 text-white border border-[#D6A838]/40 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 rounded-2xl bg-[#0B192C]/98 backdrop-blur-2xl border border-[#D6A838]/40 p-4 space-y-2 shadow-2xl">
          {navItems.map((item, idx) => (
            <button
              key={item.label}
              onClick={() => handleItemClick(idx, item)}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors ${
                activeIndex === idx
                  ? 'bg-[#D6A838]/25 text-[#FFF2A8] font-black'
                  : 'text-white/85 hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-white/10">
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

      {/* Radiant Golden Scroll Progress Indicator Line (Theme Golden Color) */}
      <div 
        className="absolute bottom-0 inset-x-0 h-[2.5px] bg-[#D6A838]/20 pointer-events-none z-30 overflow-hidden" 
        aria-hidden="true"
      >
        <div 
          ref={scrollProgressBarRef}
          className="h-full bg-gradient-to-r from-[#D6A838] via-[#FFF2A8] to-[#D6A838] transition-all duration-75 ease-out shadow-[0_0_10px_rgba(214,168,56,0.95),0_0_3px_#FFF2A8]"
          style={{ width: '0%' }}
        />
      </div>
    </header>
  );
};
