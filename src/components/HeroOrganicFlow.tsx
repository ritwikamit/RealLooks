import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Sparkles, Scissors, ArrowDown, ShieldCheck, ChevronRight, Star, Award, CheckCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { SALON_INFO } from '../data/salonData';

interface HeroOrganicFlowProps {
  onStartBooking: (preselectedCategory?: string) => void;
  onExploreServices: () => void;
}

const ROTATING_PHRASES = [
  'YOUR SIGNATURE.',
  'ELEGANCE & PRECISION.',
  'BOTANICAL LUXURY.',
  'UNISEX ARTISTRY.',
];

export const HeroOrganicFlow: React.FC<HeroOrganicFlowProps> = ({
  onStartBooking,
  onExploreServices,
}) => {
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  // Rotating text timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhraseIdx((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Soft flowing wave canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let step = 0;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const waves = [
      { colorA: 'rgba(82, 162, 150, 0.12)', colorB: 'rgba(134, 214, 185, 0.08)', length: 0.003, speed: 0.008, amplitude: 34, offsetY: 0.65 },
      { colorA: 'rgba(18, 181, 175, 0.10)', colorB: 'rgba(75, 156, 211, 0.08)', length: 0.0024, speed: 0.006, amplitude: 30, offsetY: 0.72 },
      { colorA: 'rgba(214, 168, 56, 0.10)', colorB: 'rgba(137, 207, 240, 0.08)', length: 0.0032, speed: 0.009, amplitude: 26, offsetY: 0.80 },
    ];

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);
      step += 1;

      waves.forEach((w, index) => {
        ctx.beginPath();
        const baseOffsetY = height * w.offsetY + Math.sin(step * 0.01 + index) * 8;
        ctx.moveTo(0, height);
        ctx.lineTo(0, baseOffsetY);

        for (let x = 0; x <= width; x += 14) {
          const harmonic1 = Math.sin(x * w.length + step * w.speed);
          const harmonic2 = Math.cos(x * w.length * 1.3 - step * w.speed * 0.6);
          const y = baseOffsetY + (harmonic1 * 0.65 + harmonic2 * 0.35) * w.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, baseOffsetY - w.amplitude, width, height);
        grad.addColorStop(0, w.colorA);
        grad.addColorStop(1, w.colorB);
        ctx.fillStyle = grad;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else onStartBooking();
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden pt-6 sm:pt-10 pb-12 px-4 sm:px-6 lg:px-8 bg-transparent"
      id="home"
    >
      {/* Background Glow Auras */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-20 w-[560px] h-[560px] bg-gradient-to-tr from-[#4C5B2E]/14 via-[#52A296]/12 to-[#86D6B9]/08 rounded-full blur-3xl" />
        <div className="absolute top-12 -right-20 w-[600px] h-[600px] bg-gradient-to-bl from-[#12B5AF]/14 via-[#4B9CD3]/12 to-[#89CFF0]/14 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-[500px] h-[320px] bg-gradient-to-t from-[#D6A838]/12 via-[#F5D77F]/06 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Interactive Soft Waves */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60"
      />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (7 cols): Editorial Typography & Rotating Text */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Transparent Brand Logo with Zero Checkerboard */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[360px]"
            >
              <BrandLogo variant="full" className="items-center lg:items-start" />
            </motion.div>

            {/* Location & Status Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
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
                <span className="text-xs">Open Today 9 AM – 9 PM</span>
              </div>
            </motion.div>

            {/* Headline with Text Swap / Rotate (Clandestine Style) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="space-y-2.5 w-full"
            >
              <div className="text-3xl sm:text-5xl lg:text-6xl font-serif-title font-extrabold text-[#192018] tracking-tight leading-[1.12]">
                <span>YOUR LOOK. </span>
                <div className="h-[1.2em] overflow-hidden inline-block align-bottom">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentPhraseIdx}
                      initial={{ y: 35, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -35, opacity: 0 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className="inline-block bg-gradient-to-r from-[#C29324] via-[#D6A838] to-[#4C5B2E] bg-clip-text text-transparent"
                    >
                      {ROTATING_PHRASES[currentPhraseIdx]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-[#3D483B] max-w-xl font-normal leading-relaxed">
                {SALON_INFO.heroSubtitle} Discover couture haircuts, restorative hair botox, beard sculpting, and radiant bridal glow designed around you.
              </p>
            </motion.div>

            {/* Quick Quality Features */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-xl"
            >
              <div className="p-2.5 rounded-xl bg-white/85 backdrop-blur-sm border border-[#4C5B2E]/15 flex items-center gap-2 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#4C5B2E]/10 flex items-center justify-center text-[#4C5B2E]">
                  <Scissors className="w-3.5 h-3.5" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[11px] font-bold text-[#192018]">Unisex Salon</p>
                  <p className="text-[9px] text-[#677565]">Men & Women</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/85 backdrop-blur-sm border border-[#D6A838]/20 flex items-center gap-2 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#D6A838]/15 flex items-center justify-center text-[#8E680E]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C29324]" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[11px] font-bold text-[#192018]">Organic Care</p>
                  <p className="text-[9px] text-[#677565]">Botox & Keratin</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/85 backdrop-blur-sm border border-[#12B5AF]/20 flex items-center gap-2 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#12B5AF]/15 flex items-center justify-center text-[#0D8F8B]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[11px] font-bold text-[#192018]">UV Sterilized</p>
                  <p className="text-[9px] text-[#677565]">100% Sterile</p>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/85 backdrop-blur-sm border border-[#4B9CD3]/20 flex items-center gap-2 shadow-2xs">
                <div className="w-7 h-7 rounded-lg bg-[#4B9CD3]/15 flex items-center justify-center text-[#2B78AE]">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div className="text-left leading-tight">
                  <p className="text-[11px] font-bold text-[#192018]">Master Stylists</p>
                  <p className="text-[9px] text-[#677565]">Certified Staff</p>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 w-full sm:w-auto pt-2"
            >
              <button
                id="hero-book-now-button"
                onClick={() => scrollToSection('scheduler-section')}
                className="btn btn-primary w-full sm:w-auto px-7 py-3 rounded-2xl bg-gradient-to-r from-[#D6A838] via-[#E2C76B] to-[#C29324] hover:from-[#C29324] hover:to-[#8E680E] text-[#1F1703] font-bold text-xs tracking-wider uppercase border-none shadow-md hover:shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#1F1703]" />
                <span>Book Appointment</span>
                <ChevronRight className="w-4 h-4 text-[#1F1703]" />
              </button>

              <button
                id="hero-explore-services-button"
                onClick={onExploreServices}
                className="btn btn-outline w-full sm:w-auto px-6 py-3 rounded-2xl border-[#4C5B2E]/40 text-[#2F3B1A] hover:bg-[#4C5B2E] hover:text-white hover:border-[#4C5B2E] font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
              >
                <span>Explore Services</span>
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-3 pt-2"
            >
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
                <strong className="text-[#192018]">4.9 / 5.0</strong> from 850+ verified local clients in Aurangabad
              </span>
            </motion.div>

          </div>

          {/* Right Column (5 cols): Lady with Hair Portrait & Clandestine Floating Cards */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              {/* Outer Radiant Glow Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D6A838]/25 via-[#52A296]/20 to-[#86D6B9]/25 rounded-3xl blur-xl opacity-70" />

              {/* Main Portrait Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D6A838]/35 bg-white/80 backdrop-blur-md">
                
                {/* Lady Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src="/images/hero-lady.jpg"
                    alt="Real Looks Salon - Hair Styling Excellence"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#192018]/75 via-transparent to-black/10" />

                  {/* Top-Left Floating Tag */}
                  <div className="absolute top-4 left-4">
                    <div className="badge badge-lg bg-white/95 backdrop-blur-md border border-[#D6A838]/40 text-[#2F3B1A] font-bold text-xs py-3 px-3.5 shadow-lg flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#C29324]" />
                      <span>Signature Blowout & Waves</span>
                    </div>
                  </div>

                  {/* Bottom Clandestine Floating Review Card */}
                  <div className="absolute bottom-4 inset-x-4">
                    <div className="bg-white/92 backdrop-blur-md rounded-2xl p-3.5 border border-white/60 shadow-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4C5B2E] to-[#2F3B1A] text-[#FFF4BD] flex items-center justify-center font-bold shadow-sm">
                          <Award className="w-5 h-5 text-[#E5C460]" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#192018]">Luxury Hair Care</p>
                          <p className="text-[10px] text-[#4C5B2E] font-medium flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-[#52A296]" />
                            <span>Botox, Keratin & Gloss</span>
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

              {/* Floating Review Pill (Clandestine Style) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-3 sm:-left-6 z-20"
              >
                <div className="badge badge-lg bg-gradient-to-r from-[#2F3B1A] to-[#4C5B2E] text-[#FFF4BD] border border-[#D6A838]/50 py-3.5 px-4 shadow-xl flex items-center gap-2 font-bold text-xs">
                  <Star className="w-3.5 h-3.5 fill-[#D6A838] text-[#D6A838]" />
                  <span>Real Results. Real Looks.</span>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Downward Scroll Indicator (Clandestine Style) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.8 }}
        className="relative z-10 text-center pt-4 pb-1 flex flex-col items-center justify-center"
      >
        <button
          onClick={() => scrollToSection('scheduler-section')}
          className="group inline-flex flex-col items-center gap-1 text-xs text-[#677565] hover:text-[#2F3B1A] transition-colors cursor-pointer"
          aria-label="Scroll to Appointment Scheduler"
        >
          <span className="font-bold tracking-[0.2em] uppercase text-[10px] text-[#4C5B2E] group-hover:text-[#12B5AF] transition-colors">
            Explore Services & Book
          </span>
          <div className="w-8 h-8 rounded-full bg-white/80 border border-[#D6A838]/40 flex items-center justify-center shadow-xs group-hover:border-[#D6A838] group-hover:bg-white transition-all animate-bounce">
            <ArrowDown className="w-3.5 h-3.5 text-[#C29324]" />
          </div>
        </button>
        <div className="w-48 h-[1.5px] bg-gradient-to-r from-transparent via-[#D6A838]/50 to-transparent mt-2" />
      </motion.div>
    </section>
  );
};
