import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Calendar, Scissors, MapPin, Clock, Phone } from 'lucide-react';
import { HERO_REEL_URL, SALON_INFO } from '../data/salonData';

interface HeroSectionProps {
  onStartBooking: () => void;
  onExploreCuts: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartBooking,
  onExploreCuts,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="w-full px-4 sm:px-6 lg:px-8 pt-4 pb-8">
      <div
        ref={containerRef}
        className="relative max-w-7xl mx-auto min-h-[78vh] sm:min-h-[84vh] rounded-3xl overflow-hidden flex items-center justify-center px-5 sm:px-10 py-16 shadow-[0_20px_50px_rgba(20,20,19,0.14)]"
      >
        {/* Background Auto-playing Reel (boxed with side spacing matching footer) */}
        <video
          ref={videoRef}
          src={HERO_REEL_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Slightly darker fade for crisp text contrast while keeping video visible */}
        <div
          className="absolute inset-0 z-0 bg-gradient-to-b from-[#141413]/60 via-[#141413]/52 to-[#141413]/75"
          aria-hidden="true"
        />

        {/* Open Hero Contents Directly Over Video (No Inner Box) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center gap-5"
        >
          <img
            src="/images/logo.png"
            alt="Real Looks Unisex Salon"
            className="h-20 sm:h-24 w-auto object-contain select-none drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
          />

          <span className="inline-block px-3.5 py-1 rounded-lg bg-white/15 backdrop-blur-md border border-white/25 text-[#FFEEB3] text-[11px] font-bold uppercase tracking-[0.2em]">
            Dani Bigha • Aurangabad
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold text-white tracking-tight leading-[1.04] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            {SALON_INFO.heroHeadline}
          </h1>

          <p className="text-sm sm:text-lg text-white/90 max-w-lg leading-relaxed font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            {SALON_INFO.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto pt-2">
            <button
              type="button"
              onClick={onStartBooking}
              className="btn bg-[#F47321] hover:bg-[#e06314] text-white border-0 font-bold text-sm px-7 py-3.5 h-auto rounded-xl glass-btn"
            >
              <Calendar className="w-4 h-4" strokeWidth={2.2} />
              <span>Book a Chair</span>
            </button>

            <button
              type="button"
              onClick={onExploreCuts}
              className="btn bg-white/18 hover:bg-white/28 backdrop-blur-md text-white border border-white/30 font-bold text-sm px-6 py-3.5 h-auto rounded-xl glass-btn"
            >
              <Scissors className="w-4 h-4" strokeWidth={2.2} />
              <span>See Our Cuts</span>
            </button>

            <a
              href={SALON_INFO.telHref}
              className="btn bg-[#FFEEB3]/90 hover:bg-[#FFEEB3] text-[#141413] border-0 font-bold text-sm px-5 py-3.5 h-auto rounded-xl glass-btn"
            >
              <Phone className="w-4 h-4" strokeWidth={2.2} />
              <span>Call Salon</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-3 text-xs font-semibold text-white/85">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FFEEB3]" />
              <span>Near Vayuputra Fitness Club</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B4D7CD]" />
              <span>{SALON_INFO.hours}</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
