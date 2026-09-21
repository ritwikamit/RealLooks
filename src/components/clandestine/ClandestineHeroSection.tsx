import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronRight, Sparkles, Scissors, Clock, Star, ShieldCheck, MapPin, Award } from 'lucide-react';
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
      className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-10"
      style={{
        background: `
          radial-gradient(ellipse 95% 70% at 50% -12%, rgba(143, 211, 232, 0.65), transparent 75%),
          radial-gradient(circle at 10% 28%, rgba(75, 156, 211, 0.38), transparent 52%),
          radial-gradient(circle at 90% 32%, rgba(18, 181, 175, 0.32), transparent 50%),
          radial-gradient(circle at 50% 85%, rgba(137, 207, 240, 0.28), transparent 60%),
          linear-gradient(180deg, #E6F5FB 0%, #DCF0F9 38%, #D4ECF7 68%, #FAF9F5 100%)
        `,
      }}
    >
      <style>{`
        @keyframes float-left {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-12px, -10px); }
        }
        @keyframes float-right {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(12px, -12px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-8px, 10px); }
        }
        .anim-float-left {
          animation: float-left 6s ease-in-out infinite;
        }
        .anim-float-right {
          animation: float-right 8s ease-in-out infinite;
        }
        .anim-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .clandestine-mouse {
          width: 20px;
          height: 32px;
          border: 2px solid #2B78AE;
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

      {/* 1. Luminous Ambient Sky & Carolina Blue Aura Blobs (z-0 behind watermark) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[660px] h-[660px] bg-gradient-to-br from-[#4B9CD3]/28 via-[#12B5AF]/22 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-10 -right-32 w-[680px] h-[680px] bg-gradient-to-bl from-[#89CFF0]/35 via-[#8FD3E8]/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/4 w-[520px] h-[300px] bg-gradient-to-t from-[#12B5AF]/18 to-transparent rounded-full blur-2xl" />
      </div>

      {/* 2. Grand Prominent Real Looks Logo Watermark in Hero Centre (z-0 above background, below z-10 foreground) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0 select-none">
        <img
          src="/images/logo.png"
          alt="Real Looks Logo"
          aria-hidden="true"
          className="w-[880px] sm:w-[1060px] lg:w-[1240px] max-w-[95vw] h-auto object-contain pointer-events-none transition-all duration-700 select-none"
          style={{
            opacity: 0.38,
            filter: 'drop-shadow(0 0 50px rgba(75, 156, 211, 0.4)) drop-shadow(0 0 90px rgba(214, 168, 56, 0.25))',
          }}
          loading="eager"
        />
      </div>

      {/* 3. Hero Main Content Container Aligned with Central Logo Watermark (relative z-10) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* =========================================================
              LEFT COLUMN: Editorial Brand Motto, TextSwap, CTAs
             ========================================================= */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Elegant Eyebrow Badge (No dot) */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FFF4BD] to-[#F5D77F] border border-[#D6A838]/60 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8E680E]" />
              <span className="text-[11px] font-extrabold tracking-[0.22em] uppercase text-[#533C05]">
                UNISEX COUTURE SALON & WELLNESS
              </span>
            </motion.div>

            {/* Clandestine Morphing Headline Aligned with Logo Watermark */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif-title font-extrabold text-[#0D1D27] tracking-tight leading-[1.1]">
                LOOK GOOD.{' '}
                <br className="hidden sm:inline" />
                FEEL GOOD.{' '}
                <br />
                <span className="inline-block relative overflow-hidden align-bottom">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingWords[wordIndex]}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -40, opacity: 0 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className="inline-block bg-gradient-to-r from-[#2B78AE] via-[#0D8F8B] to-[#C29324] bg-clip-text text-transparent font-black"
                    >
                      BE {rotatingWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#2A3E4D] max-w-xl font-normal leading-relaxed">
                {SALON_INFO.heroSubtitle} Discover couture hairdressing, organic botox therapies, beard sculpting, and radiant bridal artistry curated for men and women.
              </p>
            </div>

            {/* Location & Hours Strip (Pasted cleanly with NO dots anywhere) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 text-xs font-medium"
            >
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#4B9CD3]/30 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#2B78AE] flex-shrink-0" />
                <span className="font-semibold text-[#0E2230]">Dani Bigha, Aurangabad, Bihar</span>
              </div>

              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#D6A838]/30 shadow-xs">
                <Clock className="w-3.5 h-3.5 text-[#8E680E] flex-shrink-0" />
                <span className="font-semibold text-[#5A4105]">Open Daily 9:00 AM – 9:00 PM</span>
              </div>
            </motion.div>

            {/* Value Props Row (DaisyUI Badges & Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-xl">
              <div className="p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#4B9CD3]/20 flex items-center gap-2 shadow-2xs">
                <div className="w-7 h-7 rounded-xl bg-[#4B9CD3]/15 flex items-center justify-center text-[#2B78AE]">
                  <Scissors className="w-3.5 h-3.5" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[11px] font-bold text-[#0E1A24]">Unisex Salon</p>
                  <p className="text-[9px] text-[#556977]">Men & Women</p>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#D6A838]/25 flex items-center gap-2 shadow-2xs">
                <div className="w-7 h-7 rounded-xl bg-[#D6A838]/20 flex items-center justify-center text-[#8E680E]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C29324]" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[11px] font-bold text-[#0E1A24]">Organic Care</p>
                  <p className="text-[9px] text-[#556977]">Botox & Keratin</p>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#12B5AF]/25 flex items-center gap-2 shadow-2xs">
                <div className="w-7 h-7 rounded-xl bg-[#12B5AF]/15 flex items-center justify-center text-[#0D8F8B]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[11px] font-bold text-[#0E1A24]">UV Sterilized</p>
                  <p className="text-[9px] text-[#556977]">Hospital-Grade</p>
                </div>
              </div>

              <div className="p-2.5 rounded-2xl bg-white/90 backdrop-blur-md border border-[#4B9CD3]/25 flex items-center gap-2 shadow-2xs">
                <div className="w-7 h-7 rounded-xl bg-[#4B9CD3]/15 flex items-center justify-center text-[#2B78AE]">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[11px] font-bold text-[#0E1A24]">Instant Slot</p>
                  <p className="text-[9px] text-[#556977]">Direct Reserve</p>
                </div>
              </div>
            </div>

            {/* Clandestine Button Section with Shimmer */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto pt-2">
              <button
                onClick={onStartBooking}
                className="relative group overflow-hidden w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#D6A838] via-[#E2C76B] to-[#C29324] hover:from-[#C29324] hover:to-[#8E680E] text-[#1F1703] font-bold text-xs tracking-wider uppercase border border-white/50 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#1F1703]" />
                <span>Book Appointment</span>
                <ChevronRight className="w-4 h-4 text-[#1F1703] group-hover:translate-x-1 transition-transform" />
                {/* Light shimmer sweep */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </button>

              <button
                onClick={onExploreServices}
                className="btn btn-outline w-full sm:w-auto px-7 py-3.5 rounded-2xl border-[#2B78AE]/40 text-[#193F5E] hover:bg-[#2B78AE] hover:text-white hover:border-[#2B78AE] font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <span>Explore Services</span>
              </button>

              <a
                href={SALON_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost w-full sm:w-auto px-5 py-3.5 rounded-2xl text-[#0D8F8B] hover:bg-[#12B5AF]/10 font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#0D8F8B]" />
                <span>Directions</span>
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="rating rating-xs">
                {[1, 2, 3, 4, 5].map((i) => (
                  <input
                    key={i}
                    type="radio"
                    name="clandestine-rating"
                    className="mask mask-star-2 bg-[#D6A838]"
                    defaultChecked={i === 5}
                    readOnly
                  />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#2A3E4D]">
                <strong className="text-[#0E1A24]">4.9 / 5.0</strong> from 850+ local clients in Aurangabad
              </span>
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN: Lady Model Portrait + Floating Testimonial Pills
             ========================================================= */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Blue & Gold Glow Aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#4B9CD3]/40 via-[#12B5AF]/25 to-[#D6A838]/30 rounded-3xl blur-xl opacity-75" />

              {/* Main Portrait Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D6A838]/35 bg-white/70 backdrop-blur-md">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src="/images/hero-lady.jpg"
                    alt="Real Looks Salon - Hair Styling Excellence"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#192018]/70 via-transparent to-black/10" />

                  {/* Top-Left Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="badge badge-lg bg-white/95 backdrop-blur-md border border-[#D6A838]/40 text-[#2F3B1A] font-bold text-xs py-3 px-3.5 shadow-lg flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C29324]" />
                      <span>Signature Blowout & Waves</span>
                    </div>
                  </div>

                  {/* Bottom Image Overlay Card */}
                  <div className="absolute bottom-4 inset-x-4">
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4C5B2E] to-[#2F3B1A] text-[#FFF4BD] flex items-center justify-center font-bold shadow-sm">
                          <Scissors className="w-5 h-5 text-[#E5C460]" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#192018]">Luxury Hair Care</p>
                          <p className="text-[10px] text-[#4C5B2E] font-medium">
                            Botox, Keratin & Gloss
                          </p>
                        </div>
                      </div>
                      <span className="badge badge-sm bg-[#52A296] text-white border-none font-bold text-[10px]">
                        Unisex
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Testimonial Pill 1: Top Right (Float Right anim) */}
              <div className="hidden sm:block absolute -top-5 -right-8 z-20 anim-float-right">
                <div className="px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D6A838]/40 shadow-xl flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#4C5B2E] text-[#FFF2A8] flex items-center justify-center font-bold text-xs">
                    P
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1 text-[11px] font-bold text-[#192018]">
                      <span>Priya S.</span>
                      <span className="text-[#C29324]">★ 5.0</span>
                    </div>
                    <p className="text-[9px] text-[#677565]">Incredible Balayage</p>
                  </div>
                </div>
              </div>

              {/* Floating Testimonial Pill 2: Bottom Left (Float Left anim) */}
              <div className="hidden sm:block absolute -bottom-5 -left-8 z-20 anim-float-left">
                <div className="px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-[#4C5B2E]/30 shadow-xl flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#D6A838] text-[#1F1703] flex items-center justify-center font-bold text-xs">
                    A
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1 text-[11px] font-bold text-[#192018]">
                      <span>Aarav M.</span>
                      <span className="text-[#C29324]">★ 5.0</span>
                    </div>
                    <p className="text-[9px] text-[#677565]">Master Beard Sculpt</p>
                  </div>
                </div>
              </div>

              {/* Floating Testimonial Pill 3: Mid Left (Float Slow anim) */}
              <div className="hidden lg:block absolute top-1/2 -left-12 z-20 anim-float-slow">
                <div className="px-3 py-1.5 rounded-2xl bg-[#253014]/90 backdrop-blur-md border border-[#D6A838]/40 text-[#FFF2A8] shadow-xl flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#D6A838]" />
                  <span className="text-[10px] font-bold">100% Organic Products</span>
                </div>
              </div>

            </div>
          </div>

        </div>
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
