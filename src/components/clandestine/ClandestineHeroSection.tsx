import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronRight, Sparkles, Scissors, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { SALON_INFO } from '../../data/salonData';

interface ClandestineHeroSectionProps {
  onStartBooking: () => void;
  onExploreServices: () => void;
}

export const ClandestineHeroSection: React.FC<ClandestineHeroSectionProps> = ({
  onStartBooking,
  onExploreServices,
}) => {
  // Rotating words for Clandestine TextSwap
  const rotatingWords = [
    'SIGNATURE',
    'CONFIDENCE',
    'RADIANCE',
    'ELEGANCE',
    'LUXURY',
    'BEAUTY',
  ];

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [rotatingWords.length]);

  return (
    <section 
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-10"
      style={{
        backgroundColor: '#FAF9F6',
        transform: 'translate3d(0,0,0)',
      }}
    >
      <style>{`
        .clandestine-mouse {
          width: 20px;
          height: 32px;
          border: 2px solid #8E680E;
          border-radius: 12px;
          position: relative;
          display: inline-block;
          opacity: 0.85;
        }
        .clandestine-mouse::before {
          content: "";
          width: 3.5px;
          height: 6px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #D6A838;
          border-radius: 50%;
          animation: clandestineWheel 2s infinite;
        }
        @keyframes clandestineWheel {
          0% { opacity: 1; top: 6px; }
          100% { opacity: 0; top: 18px; }
        }
      `}</style>

      {/* 1. Fully Visible Wide-Angled Luxury Salon Interior Background (Not Faded) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <img
          src="/images/salon-hero-interior.jpg"
          alt="Real Looks Unisex Salon Interior"
          className="w-full h-full object-cover object-[center_35%] opacity-100 filter saturate-[1.06] contrast-[1.04]"
          loading="eager"
        />

        {/* Gentle top shade for Limelight Navbar clarity */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#FAF9F6]/85 via-[#FAF9F6]/35 to-transparent" />

        {/* Clean bottom transition into next section */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#FAF9F6] via-[#FAF9F6]/60 to-transparent" />
      </div>

      {/* 2. Hero Centered Main Content Container (relative z-10) */}
      <div className="relative z-10 max-w-4xl mx-auto w-full my-auto py-6 sm:py-10 flex flex-col items-center text-center">
        
        {/* Luxury Lucid Blur Glassmorphic Center Card */}
        <div className="relative w-full bg-white/50 sm:bg-white/40 backdrop-blur-2xl border border-white/80 shadow-[0_24px_64px_rgba(11,25,44,0.12),0_0_32px_rgba(214,168,56,0.22)] rounded-3xl p-5 sm:p-10 flex flex-col items-center text-center space-y-6 overflow-hidden">
          {/* Subtle gold luxury inner top accent */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFF4BD] to-transparent" />

          {/* Prominent Official Logo in Hero Section with Subtle Ambient Radiance */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-flex flex-col items-center cursor-pointer group"
            onClick={onStartBooking}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#D6A838]/20 via-[#12B5AF]/15 to-[#4C5B2E]/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />
            <img
              src="/images/logo.png"
              alt="Real Looks Unisex Salon"
              className="relative h-24 sm:h-28 md:h-32 w-auto object-contain filter drop-shadow-[0_4px_22px_rgba(214,168,56,0.32)] select-none transition-transform duration-300 group-hover:scale-[1.02]"
              loading="eager"
            />
          </motion.div>

          {/* Elegant Lucid Blur Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-xl border border-[#D6A838]/60 shadow-[0_2px_12px_rgba(214,168,56,0.15)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#8E680E]" />
            <span className="text-[11px] font-extrabold tracking-[0.22em] uppercase text-[#533C05]">
              UNISEX COUTURE SALON & WELLNESS
            </span>
          </motion.div>

          {/* Headline with TextSwap */}
          <div className="space-y-3 max-w-3xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-title font-extrabold text-[#141A13] tracking-tight leading-[1.12]">
              LOOK GOOD.{' '}
              <span className="inline-block sm:inline">FEEL GOOD.</span>{' '}
              <br />
              <span className="inline-block relative overflow-hidden align-bottom">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ y: 35, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -35, opacity: 0 }}
                    transition={{ duration: 0.42, ease: 'easeOut' }}
                    className="inline-block bg-gradient-to-r from-[#1E3A1E] via-[#8E680E] to-[#D6A838] bg-clip-text text-transparent font-black"
                  >
                    BE {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#3D483B] max-w-2xl mx-auto font-normal leading-relaxed pt-1">
              {SALON_INFO.heroSubtitle} Discover couture hairdressing, formaldehyde-free hair botox, beard sculpting, and radiant bridal artistry curated for men and women in Aurangabad.
            </p>
          </div>

          {/* Location & Hours Strip (Lucid Blur) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-medium pt-1"
          >
            <div className="flex items-center gap-2 bg-white/50 hover:bg-white/65 backdrop-blur-xl px-3.5 sm:px-4 py-2 rounded-full border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.04)] text-[#141A13] transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#8E680E] flex-shrink-0" />
              <span className="font-semibold text-[11px] sm:text-xs">Dani Bigha, Aurangabad, Bihar</span>
            </div>

            <div className="flex items-center gap-2 bg-white/50 hover:bg-white/65 backdrop-blur-xl px-3.5 sm:px-4 py-2 rounded-full border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.04)] text-[#5A4105] transition-colors">
              <Clock className="w-3.5 h-3.5 text-[#8E680E] flex-shrink-0" />
              <span className="font-semibold text-[11px] sm:text-xs">Open Daily 9:00 AM – 9:00 PM</span>
            </div>
          </motion.div>

          {/* Value Props Row (Lucid Blur Cards) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 w-full max-w-2xl pt-1">
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/45 hover:bg-white/60 backdrop-blur-xl border border-white/75 flex items-center justify-center gap-2 sm:gap-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all hover:scale-[1.02]">
              <div className="w-8 h-8 rounded-xl bg-[#4C5B2E]/12 flex items-center justify-center text-[#2F3B1A] flex-shrink-0">
                <Scissors className="w-4 h-4" />
              </div>
              <div className="text-left leading-tight">
                <p className="text-[11px] font-bold text-[#141A13]">Unisex Salon</p>
                <p className="text-[9px] text-[#677565]">Men & Women</p>
              </div>
            </div>

            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/45 hover:bg-white/60 backdrop-blur-xl border border-white/75 flex items-center justify-center gap-2 sm:gap-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all hover:scale-[1.02]">
              <div className="w-8 h-8 rounded-xl bg-[#D6A838]/20 flex items-center justify-center text-[#8E680E] flex-shrink-0">
                <Sparkles className="w-4 h-4 text-[#C29324]" />
              </div>
              <div className="text-left leading-tight">
                <p className="text-[11px] font-bold text-[#141A13]">Organic Care</p>
                <p className="text-[9px] text-[#677565]">Botox & Keratin</p>
              </div>
            </div>

            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/45 hover:bg-white/60 backdrop-blur-xl border border-white/75 flex items-center justify-center gap-2 sm:gap-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all hover:scale-[1.02]">
              <div className="w-8 h-8 rounded-xl bg-[#12B5AF]/15 flex items-center justify-center text-[#0D8F8B] flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left leading-tight">
                <p className="text-[11px] font-bold text-[#141A13]">UV Sterilized</p>
                <p className="text-[9px] text-[#677565]">Hospital-Grade</p>
              </div>
            </div>

            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/45 hover:bg-white/60 backdrop-blur-xl border border-white/75 flex items-center justify-center gap-2 sm:gap-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all hover:scale-[1.02]">
              <div className="w-8 h-8 rounded-xl bg-[#4C5B2E]/12 flex items-center justify-center text-[#2F3B1A] flex-shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-left leading-tight">
                <p className="text-[11px] font-bold text-[#141A13]">Instant Slot</p>
                <p className="text-[9px] text-[#677565]">Direct Reserve</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto pt-2">
            <button
              onClick={onStartBooking}
              className="relative group overflow-hidden w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#D6A838] via-[#E2C76B] to-[#C29324] hover:from-[#C29324] hover:to-[#8E680E] text-[#1F1703] font-bold text-xs tracking-wider uppercase border border-white/70 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#1F1703]" />
              <span>Book Appointment</span>
              <ChevronRight className="w-4 h-4 text-[#1F1703] group-hover:translate-x-1 transition-transform" />
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            </button>

            <button
              onClick={onExploreServices}
              className="btn btn-outline w-full sm:w-auto px-7 py-3.5 rounded-2xl border-[#2F3B1A]/40 text-[#2F3B1A] hover:bg-[#2F3B1A] hover:text-white hover:border-[#2F3B1A] font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Explore Services</span>
            </button>

            <a
              href={SALON_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost w-full sm:w-auto px-5 py-3.5 rounded-2xl text-[#8E680E] hover:bg-[#D6A838]/10 font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#8E680E]" />
              <span>Directions</span>
            </a>
          </div>

          {/* Social Proof Rating */}
          <div className="flex items-center justify-center gap-3 pt-1">
            <div className="rating rating-xs">
              {[1, 2, 3, 4, 5].map((i) => (
                <input
                  key={i}
                  type="radio"
                  name="hero-rating"
                  className="mask mask-star-2 bg-[#D6A838]"
                  defaultChecked={i === 5}
                  readOnly
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-[#3D483B]">
              <strong className="text-[#141A13]">4.9 / 5.0</strong> from 850+ local clients in Aurangabad
            </span>
          </div>
        </div>

        {/* Professional 4-Pillar Salon Trust Counter Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          <div className="bg-[#FAF9F6]/92 backdrop-blur-md border border-[#D6A838]/60 rounded-2xl p-3.5 sm:p-4 text-center shadow-xs">
            <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#141A13]">10,000+</div>
            <div className="text-[11px] font-bold text-[#8E680E] uppercase tracking-wider mt-0.5">Satisfied Clients</div>
            <div className="text-[10px] text-[#677565]">Aurangabad & Surrounding</div>
          </div>

          <div className="bg-[#FAF9F6]/92 backdrop-blur-md border border-[#D6A838]/60 rounded-2xl p-3.5 sm:p-4 text-center shadow-xs">
            <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#5A4105]">12+</div>
            <div className="text-[11px] font-bold text-[#8E680E] uppercase tracking-wider mt-0.5">Master Artisans</div>
            <div className="text-[10px] text-[#677565]">Certified Stylists & Colorists</div>
          </div>

          <div className="bg-[#FAF9F6]/92 backdrop-blur-md border border-[#D6A838]/60 rounded-2xl p-3.5 sm:p-4 text-center shadow-xs">
            <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#141A13]">100%</div>
            <div className="text-[11px] font-bold text-[#0D8F8B] uppercase tracking-wider mt-0.5">UV & Autoclaved</div>
            <div className="text-[10px] text-[#677565]">Hospital-Grade Hygiene</div>
          </div>

          <div className="bg-[#FAF9F6]/92 backdrop-blur-md border border-[#D6A838]/60 rounded-2xl p-3.5 sm:p-4 text-center shadow-xs">
            <div className="text-2xl sm:text-3xl font-serif font-extrabold text-[#5A4105]">4.9★</div>
            <div className="text-[11px] font-bold text-[#8E680E] uppercase tracking-wider mt-0.5">Google Rating</div>
            <div className="text-[10px] text-[#677565]">850+ Verified Reviews</div>
          </div>
        </motion.div>

      </div>

      {/* Clandestine Minimalist Mouse Scroll Indicator */}
      <div className="relative z-10 text-center pt-2 flex flex-col items-center justify-center">
        <button
          onClick={onStartBooking}
          className="group inline-flex flex-col items-center gap-1.5 text-xs text-[#677565] hover:text-[#2F3B1A] transition-colors cursor-pointer"
          aria-label="Scroll to Appointment Scheduler"
        >
          <div className="clandestine-mouse" />
          <span className="font-bold tracking-[0.24em] uppercase text-[9px] text-[#4C5B2E] mt-1">
            Scroll to Schedule
          </span>
        </button>
      </div>
    </section>
  );
};
