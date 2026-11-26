import React from 'react';
import { Calendar, MapPin, ShieldCheck, Clock } from 'lucide-react';
import { REEL_VIDEOS, buildWhatsAppUrl } from '../data/salonData';
import { ReelVideoCard } from './ReelVideoCard';
import { WhatsAppIcon } from './WhatsAppIcon';

interface StudioVibeSectionProps {
  onBookClick: () => void;
}

export const StudioVibeSection: React.FC<StudioVibeSectionProps> = ({ onBookClick }) => {
  const studioReel = REEL_VIDEOS.find((r) => r.id === 'reel-feature');
  if (!studioReel) return null;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="glass-cream rounded-3xl p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Dedicated Studio Vibe Reel */}
          <div className="lg:col-span-5 max-w-sm mx-auto w-full">
            <ReelVideoCard reel={studioReel} />
          </div>

          {/* Right: Studio Story & Direct Actions */}
          <div className="lg:col-span-7 space-y-5">
            <p className="font-script text-2xl sm:text-3xl text-[#F47321]">
              A little pause from the rush
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight leading-tight">
              Step Inside Real Looks, Dani Bigha
            </h2>

            <p className="text-sm sm:text-base text-[#141413]/80 leading-relaxed">
              Walking into a salon shouldn’t feel loud or hurried. We built a calm, air-conditioned space in Aurangabad where you can sit down, take a breath, and talk openly about what you want—whether it’s a quick trim before an interview or getting ready for your wedding day.
            </p>

            <p className="text-sm text-[#141413]/75 leading-relaxed">
              When you leave our chair, we want you to feel lighter, sharper, and completely comfortable in your own skin.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl glass-surface flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#F47321] flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#141413]">Sterilized</p>
                  <p className="text-[11px] text-[#141413]/65">Fresh every guest</p>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl glass-surface flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#141413] flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#141413]">9 AM – 9 PM</p>
                  <p className="text-[11px] text-[#141413]/65">Open 7 days</p>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl glass-surface flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#F47321] flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#141413]">Dani Bigha</p>
                  <p className="text-[11px] text-[#141413]/65">Easy parking</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onBookClick}
                className="btn bg-[#F47321] hover:bg-[#e06314] text-white border-0 font-bold text-xs uppercase tracking-wider rounded-xl glass-btn px-6"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Chair</span>
              </button>

              <a
                href={buildWhatsAppUrl('Hello Real Looks Salon, I would like to book an appointment.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-[#B4D7CD]/85 hover:bg-[#B4D7CD] text-[#141413] border-0 font-bold text-xs uppercase tracking-wider rounded-xl glass-btn px-5"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#128C7E]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
