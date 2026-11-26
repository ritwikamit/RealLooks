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
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
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
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full min-h-[88vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-14"
    >
      {/* Background Auto-playing Reel (no Instagram UI, muted, darkly faded) */}
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
      <div
        className="absolute inset-0 z-0 bg-[#141413]/58 backdrop-blur-[1px]"
        aria-hidden="true"
      />

      {/* Foreground Glassmorphic + Brutalist Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl w-full rounded-3xl p-6 sm:p-10 bg-[#FFFDF7]/82 backdrop-blur-xl border-2 border-[#141413] shadow-[6px_6px_0px_#141413] text-center flex flex-col items-center gap-5"
      >
        <img
          src="/images/logo.png"
          alt="Real Looks Unisex Salon"
          className="h-20 sm:h-24 w-auto object-contain select-none"
        />

        <div className="inline-block px-3 py-1 rounded-md bg-[#FFEEB3] border-2 border-[#141413] text-[#141413] text-[11px] font-extrabold uppercase tracking-wider">
          Aurangabad’s Unisex Salon
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#141413] tracking-tight leading-[1.08]">
          {SALON_INFO.heroHeadline}
        </h1>

        <p className="text-sm sm:text-base text-[#141413]/80 max-w-xl leading-relaxed font-medium">
          {SALON_INFO.heroSubtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto pt-1">
          <button
            type="button"
            onClick={onStartBooking}
            className="btn bg-[#F47321] hover:bg-[#e06314] text-[#141413] font-extrabold text-sm px-6 py-3 h-auto rounded-xl brutal-btn"
          >
            <Calendar className="w-4 h-4" strokeWidth={2.3} />
            <span>Book a Chair</span>
          </button>

          <button
            type="button"
            onClick={onExploreCuts}
            className="btn bg-[#B4D7CD] hover:bg-[#9ec9bd] text-[#141413] font-extrabold text-sm px-6 py-3 h-auto rounded-xl brutal-btn"
          >
            <Scissors className="w-4 h-4" strokeWidth={2.3} />
            <span>See Our Cuts</span>
          </button>

          <a
            href={SALON_INFO.telHref}
            className="btn bg-[#FFEEB3] hover:bg-[#f7e094] text-[#141413] font-extrabold text-sm px-5 py-3 h-auto rounded-xl brutal-btn"
          >
            <Phone className="w-4 h-4" strokeWidth={2.3} />
            <span>Call Salon</span>
          </a>
        </div>

        {/* Clean Info Strip (no cylinders with dots) */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 pt-3 border-t-2 border-[#141413]/15 w-full text-xs font-bold text-[#141413]/80">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#F47321]" />
            <span>Dani Bigha, Aurangabad</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#F47321]" />
            <span>{SALON_INFO.hours}</span>
          </span>
        </div>
      </motion.div>
    </section>
  );
};
