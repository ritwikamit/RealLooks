import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronRight, Sparkles, Scissors, Clock, Star, ShieldCheck, MapPin } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';
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
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-10">
      <style>{`
        @keyframes float-left {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-14px, -10px); }
        }
        @keyframes float-right {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(14px, -12px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-8px, 12px); }
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
          border: 2px solid #3F4A25;
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

      {/* Hero Ambient Theme Aura (No square lines on hero) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-[#4C5B2E]/14 via-[#52A296]/12 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-10 -right-32 w-[620px] h-[620px] bg-gradient-to-bl from-[#D6A838]/12 via-[#12B5AF]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* =========================================================
              LEFT COLUMN: Brand, TextSwap Headline, Badges & CTAs
             ========================================================= */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Real Looks Official Transparent Logo */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-[290px] sm:max-w-[360px]"
            >
              <BrandLogo variant="full" className="items-center lg:items-start" />
            </motion.div>

            {/* Status & Location Pill (DaisyUI enhanced) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
            >
              <div className="badge badge-lg py-3 px-3.5 bg-white/90 backdrop-blur-md border border-[#4C5B2E]/25 text-[#2F3B1A] font-semibold gap-2 shadow-xs">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#12B5AF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4C5B2E]"></span>
                </span>
                <span className="text-xs">Dani Bigha, Aurangabad, Bihar</span>
              </div>

              <div className="badge badge-lg py-3 px-3.5 bg-gradient-to-r from-[#FFF4BD] to-[#F5D77F] border border-[#D6A838]/40 text-[#634705] font-bold gap-1.5 shadow-xs">
                <Star className="w-3.5 h-3.5 fill-[#D6A838] text-[#D6A838]" />
                <span className="text-xs">Open 9 AM – 9 PM Daily</span>
              </div>
            </motion.div>

            {/* Clandestine Morphing Headline with TextSwap */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-title font-extrabold text-[#192018] tracking-tight leading-[1.12]">
                YOUR LOOK.{' '}
                <br className="hidden sm:inline" />
                YOUR{' '}
                <span className="inline-block relative overflow-hidden align-bottom">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingWords[wordIndex]}
                      initial={{ y: 35, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -35, opacity: 0 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className="inline-block bg-gradient-to-r from-[#C29324] via-[#D6A838] to-[#4C5B2E] bg-clip-text text-transparent px-1.5 font-black"
                    >
                      {rotatingWords[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-[#3D483B] max-w-xl font-normal leading-relaxed">
                {SALON_INFO.heroSubtitle} Experience luxury hair styling, organic botox therapies, precision beard sculpting, and radiant bridal artistry for men and women.
              </p>
            </div>

            {/* Value Props Row (DaisyUI Badges) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-xl">
              <div className="p-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#4C5B2E]/15 flex items-center gap-2 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#4C5B2E]/10 flex items-center justify-center text-[#4C5B2E]">
                  <Scissors className="w-3.5 h-3.5" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[11px] font-bold text-[#192018]">Unisex Salon</p>
                  <p className="text-[9px] text-[#677565]">Men & Women</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#D6A838]/20 flex items-center gap-2 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#D6A838]/15 flex items-center justify-center text-[#8E680E]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C29324]" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[11px] font-bold text-[#192018]">Organic Care</p>
                  <p className="text-[9px] text-[#677565]">Botox & Keratin</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#12B5AF]/20 flex items-center gap-2 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#12B5AF]/15 flex items-center justify-center text-[#0D8F8B]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[11px] font-bold text-[#192018]">UV Sterilized</p>
                  <p className="text-[9px] text-[#677565]">Hospital-Grade</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#4B9CD3]/20 flex items-center gap-2 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#4B9CD3]/15 flex items-center justify-center text-[#2B78AE]">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[11px] font-bold text-[#192018]">Instant Slot</p>
                  <p className="text-[9px] text-[#677565]">Direct Reserve</p>
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
                className="btn btn-outline w-full sm:w-auto px-7 py-3.5 rounded-2xl border-[#4C5B2E]/40 text-[#2F3B1A] hover:bg-[#4C5B2E] hover:text-white hover:border-[#4C5B2E] font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
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
              <span className="text-xs font-semibold text-[#3D483B]">
                <strong className="text-[#192018]">4.9 / 5.0</strong> from 850+ local clients in Aurangabad
              </span>
            </div>

          </div>

          {/* =========================================================
              RIGHT COLUMN: Lady Model Portrait + Floating Testimonial Pills
             ========================================================= */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer Golden Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D6A838]/30 via-[#52A296]/20 to-[#86D6B9]/30 rounded-3xl blur-xl opacity-70" />

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
