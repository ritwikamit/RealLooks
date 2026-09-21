import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronRight, Star, ArrowDown, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeroOrganicFlowProps {
  onStartBooking: (preselectedCategory?: string) => void;
  onExploreServices: () => void;
}

const ROTATING_WORDS = [
  'Hairstyling',
  'Skin Radiance',
  'Hair Botox',
  'Beard Artistry',
  'Bridal Glow'
];

export const HeroOrganicFlow: React.FC<HeroOrganicFlowProps> = ({
  onStartBooking,
  onExploreServices,
}) => {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIdx((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="relative w-full min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#000000]"
    >
      {/* Clandestine Ambient Radial Glow */}
      <div 
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none blur-[140px] opacity-35"
        style={{ background: 'radial-gradient(circle, #8D43F4 0%, rgba(141,67,244,0.05) 70%, transparent 100%)' }}
      />
      <div 
        className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full pointer-events-none blur-[120px] opacity-20"
        style={{ background: 'radial-gradient(circle, #4C5B2E 0%, transparent 80%)' }}
      />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        {/* Left Column: Clandestine Dynamic Typography & Actions */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          {/* Top category label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#262626] text-xs font-semibold text-[#8D43F4] tracking-widest uppercase mb-6 w-fit shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#8D43F4]" />
            <span>Real Looks Salon • Aurangabad</span>
          </div>

          {/* Dynamic Headline with Clandestine Text Pill */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#fafafa] leading-[1.12]">
            Experience <br />
            <span className="inline-block my-1.5">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROTATING_WORDS[currentWordIdx]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="inline-block px-3.5 sm:px-4 py-1 sm:py-1.5 bg-[#8D43F4] text-white rounded-xl shadow-[0_0_25px_rgba(141,67,244,0.45)] whitespace-nowrap"
                >
                  {ROTATING_WORDS[currentWordIdx]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            at its finest.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-[#aaaaaa] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            Bespoke unisex grooming, transformative organic hair therapies, and personalized beauty rituals crafted by seasoned masters in Dani Bigha, Aurangabad.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onStartBooking()}
              className="px-7 py-3.5 rounded-xl bg-[#8D43F4] text-white font-semibold text-sm sm:text-base tracking-wide shadow-[0_0_24px_rgba(141,67,244,0.4)] hover:bg-[#7b2fe0] hover:shadow-[0_0_30px_rgba(141,67,244,0.6)] active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule an Appointment</span>
            </button>

            <button
              onClick={onExploreServices}
              className="px-6 py-3.5 rounded-xl bg-transparent border border-[#262626] text-[#e1e1e1] hover:text-white hover:bg-[#121212] hover:border-[#383838] font-medium text-sm sm:text-base transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Explore Our Services</span>
              <ChevronRight className="w-4 h-4 text-[#8D43F4]" />
            </button>
          </div>

          {/* Social Proof / Stats Strip */}
          <div className="mt-10 pt-6 border-t border-[#1a1a1a] flex items-center gap-6 text-xs text-[#888888]">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#fafafa] text-base">4.9★</span>
              <span>850+ Google Reviews</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#333333]" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#fafafa] text-base">100%</span>
              <span>Sterilized UV Care</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-[#333333]" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="font-bold text-[#fafafa] text-base">9AM-9PM</span>
              <span>Daily Service</span>
            </div>
          </div>
        </div>

        {/* Right Column: Clandestine Model Portrait with Floating Reviews */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          {/* Framed Editorial Image */}
          <div className="relative w-full max-w-lg aspect-[4/5] rounded-2xl overflow-hidden border border-[#222222] bg-[#0c0c0c] shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
            <img
              src="/images/clandestine/hero.webp"
              alt="Real Looks Salon Model"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
            {/* Dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Review 1 (Top Left / Right) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -top-4 -left-4 sm:top-6 sm:-left-8 bg-[#111111]/95 backdrop-blur-md border border-[#262626] rounded-xl px-4 py-2.5 shadow-2xl flex items-center gap-3 animate-float-left z-20"
          >
            <div className="w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 border border-[#333]">
              <img
                src="/images/clandestine/testimonials/hannah-miller.webp"
                alt="Hannah Miller"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-[#fafafa]">Hannah Miller</p>
              <div className="flex items-center gap-1 text-amber-400 text-xs mt-0.5">
                <span>5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Review 2 (Bottom Right) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -bottom-5 -right-3 sm:bottom-8 sm:-right-8 bg-[#111111]/95 backdrop-blur-md border border-[#262626] rounded-xl px-4 py-2.5 shadow-2xl flex items-center gap-3 animate-float-right z-20"
          >
            <div className="w-11 h-11 rounded-lg overflow-hidden flex-shrink-0 border border-[#333]">
              <img
                src="/images/clandestine/testimonials/naomi-bright.webp"
                alt="Naomi Bright"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-[#fafafa]">Naomi Bright</p>
              <div className="flex items-center gap-1 text-amber-400 text-xs mt-0.5">
                <span>5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Downward Scroll Indicator */}
      <div 
        onClick={onExploreServices}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#666666] hover:text-[#aaaaaa] cursor-pointer transition-colors select-none"
      >
        <span className="text-[10px] tracking-[0.2em] font-semibold uppercase">Scroll Down</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#8D43F4]" />
      </div>
    </section>
  );
};
