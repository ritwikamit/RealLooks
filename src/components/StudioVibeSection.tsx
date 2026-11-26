import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { REEL_VIDEOS, buildWhatsAppUrl } from '../data/salonData';
import { ReelVideoCard } from './ReelVideoCard';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BlurReveal } from './BlurReveal';

interface StudioVibeSectionProps {
  onBookClick: () => void;
}

export const StudioVibeSection: React.FC<StudioVibeSectionProps> = ({ onBookClick }) => {
  const studioReel = REEL_VIDEOS.find((r) => r.id === 'reel-feature');
  if (!studioReel) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="glass-cream rounded-3xl p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 max-w-sm mx-auto w-full">
            <ReelVideoCard reel={studioReel} />
          </div>

          <div className="lg:col-span-7 space-y-5">
            <BlurReveal>
              <p className="font-script text-3xl sm:text-4xl text-[#6061B6]">
                A quiet pause from the rush
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00105B] tracking-tight leading-tight mt-2">
                Step Inside Real Looks, Dani Bigha
              </h2>

              <p className="text-sm sm:text-base text-[#00105B]/80 leading-relaxed mt-3">
                Walking into a salon shouldn’t feel loud or hurried. We built a calm, air-conditioned space in Aurangabad where you can sit down, take a breath, and talk openly about what you want—whether it’s a quick trim before an interview or getting ready for your wedding day.
              </p>

              <p className="text-sm text-[#00105B]/75 leading-relaxed mt-2">
                When you leave our chair, we want you to feel lighter, sharper, and completely comfortable in your own skin.
              </p>
            </BlurReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl glass-surface flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#6061B6] flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#00105B]">Sterilized</p>
                  <p className="text-[11px] text-[#00105B]/65">Fresh every guest</p>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl glass-surface flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#00105B] flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#00105B]">9 AM – 9 PM</p>
                  <p className="text-[11px] text-[#00105B]/65">Open 7 days</p>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl glass-surface flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#6061B6] flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#00105B]">Dani Bigha</p>
                  <p className="text-[11px] text-[#00105B]/65">Easy parking</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onBookClick}
                className="btn bg-[#00105B] hover:bg-[#6061B6] text-[#FCF9EC] font-bold text-xs uppercase tracking-wider rounded-xl glass-btn gold-border-btn px-6"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                <span>Book a Chair</span>
              </button>

              <a
                href={buildWhatsAppUrl('Hello Real Looks Salon, I would like to book an appointment.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#C9B5E0]/75 hover:bg-[#C9B5E0] text-[#00105B] border border-[#00105B]/10 font-bold text-xs uppercase tracking-wider rounded-xl glass-btn px-5"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#128C7E]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
