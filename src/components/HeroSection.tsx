import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Scissors, MapPin, Clock, Phone } from 'lucide-react';
import { HERO_REEL_URL, SALON_INFO } from '../data/salonData';

interface HeroSectionProps {
  onStartBooking: () => void;
  onExploreCuts: () => void;
}

const ROTATING_WORDS = ['STORY.', 'SIGNATURE.', 'CONFIDENCE.', 'STYLE.', 'GLOW.'];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartBooking,
  onExploreCuts,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
    <section id="home" className="w-full px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-6 sm:pb-8">
      <div
        ref={containerRef}
        className="relative max-w-7xl mx-auto min-h-[78dvh] sm:min-h-[84vh] rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center px-4 sm:px-12 py-10 sm:py-14 shadow-[0_24px_60px_rgba(0,0,0,0.14)]"
      >
        {/* Clearly visible hero video with neutral light-dark fade */}
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
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center gap-3.5 sm:gap-4"
        >
          {/* Big Logo in Hero */}
          <img
            src="/images/logo.webp"
            alt="Real Looks Unisex Salon"
            fetchPriority="high"
            className="h-24 sm:h-32 w-auto object-contain select-none drop-shadow-[0_8px_28px_rgba(0,0,0,0.45)]"
          />

          {/* Theme Blue Cursive Tagline */}
          <p className="font-script text-2xl sm:text-3xl text-[#6061B6] bg-[#FCF9EC]/90 backdrop-blur-md px-4 py-1 rounded-xl border border-[#D4AF37]/40 shadow-sm">
            Look Good, Feel Like Yourself
          </p>

          {/* Luxury Serif Headline with Rotating Animated Gold Word every 2s */}
          <h1 className="font-luxury flex flex-col items-center tracking-wide leading-[1.02]">
            <span className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FCF9EC] uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]">
              YOUR LOOK.
            </span>

            <span className="inline-flex items-baseline justify-center gap-2 sm:gap-3 flex-wrap mt-1">
              <span className="text-4xl sm:text-6xl lg:text-[4.75rem] font-bold uppercase text-[#FCF9EC] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
                YOUR
              </span>
              <span className="relative inline-block min-w-[6ch] text-left">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING_WORDS[wordIndex]}
                    initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: 'blur(0px)',
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    exit={{ opacity: 0, y: -14, filter: 'blur(8px)' }}
                    transition={{
                      opacity: { duration: 0.35 },
                      y: { duration: 0.35 },
                      filter: { duration: 0.35 },
                      backgroundPosition: { duration: 4, repeat: Infinity, ease: 'linear' },
                    }}
                    className="inline-block text-4xl sm:text-6xl lg:text-[4.75rem] font-bold uppercase bg-gradient-to-r from-[#FFF1A8] via-[#D4AF37] to-[#FFE27A] bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
                  >
                    {ROTATING_WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#FCF9EC]/92 max-w-xl leading-relaxed font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
            {SALON_INFO.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto pt-2">
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

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs font-semibold text-[#FCF9EC]/90">
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
