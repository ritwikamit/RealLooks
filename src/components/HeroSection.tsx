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
        className="relative max-w-7xl mx-auto min-h-[80vh] sm:min-h-[85vh] rounded-3xl overflow-hidden flex items-center justify-center px-5 sm:px-12 py-16 shadow-[0_24px_60px_rgba(0,0,0,0.14)]"
      >
        {/* Clearly visible hero video with neutral light-dark fade (no blue tint) */}
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
          className="absolute inset-0 z-0 bg-gradient-to-b from-black/38 via-black/26 to-black/58"
          aria-hidden="true"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center gap-4 sm:gap-5"
        >
          <p className="font-script text-3xl sm:text-4xl text-[#FFF1A8] drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
            Look Good, Feel Like Yourself
          </p>

          {/* Animated Golden Headline */}
          <h1 className="flex flex-col items-center gap-1 tracking-tight leading-[1.02]">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#FCF9EC] tracking-[0.06em] uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]"
            >
              YOUR LOOK.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{
                opacity: 1,
                scale: 1,
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                opacity: { duration: 0.6, delay: 0.22 },
                scale: { duration: 0.6, delay: 0.22 },
                backgroundPosition: { duration: 5, repeat: Infinity, ease: 'linear' },
              }}
              className="text-5xl sm:text-7xl lg:text-[5.25rem] font-extrabold uppercase bg-gradient-to-r from-[#FFF1A8] via-[#D4AF37] to-[#FFE27A] bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
            >
              YOUR STORY.
            </motion.span>
          </h1>

          <p className="text-sm sm:text-lg text-[#FCF9EC]/92 max-w-xl leading-relaxed font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
            {SALON_INFO.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto pt-3">
            <button
              type="button"
              onClick={onStartBooking}
              className="btn bg-[#00105B] hover:bg-[#6061B6] text-[#FCF9EC] font-bold text-sm px-7 py-3.5 h-auto rounded-xl glass-btn gold-border-btn"
            >
              <Calendar className="w-4 h-4 text-[#D4AF37]" strokeWidth={2.2} />
              <span>Book Your Chair</span>
            </button>

            <button
              type="button"
              onClick={onExploreCuts}
              className="btn bg-white/15 hover:bg-white/25 backdrop-blur-md text-[#FCF9EC] border border-[#FFF1A8]/55 font-bold text-sm px-6 py-3.5 h-auto rounded-xl glass-btn"
            >
              <Scissors className="w-4 h-4 text-[#FFF1A8]" strokeWidth={2.2} />
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

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4 text-xs font-semibold text-[#FCF9EC]/90">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Dani Bigha, near Vayuputra Fitness Club</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#FFF1A8]" />
              <span>{SALON_INFO.hours}</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
