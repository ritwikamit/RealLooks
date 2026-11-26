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
        className="relative max-w-7xl mx-auto min-h-[80vh] sm:min-h-[85vh] rounded-3xl overflow-hidden flex items-center justify-center px-5 sm:px-12 py-16 shadow-[0_24px_60px_rgba(0,16,91,0.16)]"
      >
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
          className="absolute inset-0 z-0 bg-gradient-to-b from-[#00105B]/65 via-[#00105B]/50 to-[#00105B]/80"
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center gap-4 sm:gap-5"
        >
          <p className="font-script text-3xl sm:text-4xl text-[#C9B5E0] drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
            Look Good, Feel Like Yourself
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-[#FCF9EC] tracking-tight leading-[1.03] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            {SALON_INFO.heroHeadline}
          </h1>

          <p className="text-sm sm:text-lg text-[#FCF9EC]/90 max-w-xl leading-relaxed font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            {SALON_INFO.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto pt-3">
            <button
              type="button"
              onClick={onStartBooking}
              className="btn bg-[#6061B6] hover:bg-[#5051a3] text-[#FCF9EC] font-bold text-sm px-7 py-3.5 h-auto rounded-xl glass-btn gold-border-btn"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.2} />
              <span>Book Your Chair</span>
            </button>

            <button
              type="button"
              onClick={onExploreCuts}
              className="btn bg-white/15 hover:bg-white/25 backdrop-blur-md text-[#FCF9EC] border border-[#C9B5E0]/50 font-bold text-sm px-6 py-3.5 h-auto rounded-xl glass-btn"
            >
              <Scissors className="w-4 h-4 text-[#C9B5E0]" strokeWidth={2.2} />
              <span>Watch Our Cuts</span>
            </button>

            <a
              href={SALON_INFO.telHref}
              className="btn bg-[#FCF9EC]/95 hover:bg-[#FCF9EC] text-[#00105B] font-bold text-sm px-5 py-3.5 h-auto rounded-xl glass-btn gold-border-btn"
            >
              <Phone className="w-4 h-4 text-[#6061B6]" strokeWidth={2.2} />
              <span>Call Salon</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4 text-xs font-semibold text-[#FCF9EC]/85">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Dani Bigha, near Vayuputra Fitness Club</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C9B5E0]" />
              <span>{SALON_INFO.hours}</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
