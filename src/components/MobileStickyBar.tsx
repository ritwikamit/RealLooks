import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { SALON_INFO, buildWhatsAppUrl } from '../data/salonData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface MobileStickyBarProps {
  onBookClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#FCF9EC]/95 backdrop-blur-xl border-t border-[#D4AF37]/45 shadow-[0_-6px_24px_rgba(0,16,91,0.08)] px-3 pt-2 safe-bottom">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <button
          type="button"
          onClick={onBookClick}
          className="btn btn-sm h-10 w-full bg-[#00105B] hover:bg-[#6061B6] text-[#FCF9EC] font-bold text-xs rounded-xl glass-btn gold-border-btn px-2"
        >
          <Calendar className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0" />
          <span>Book</span>
        </button>

        <a
          href={buildWhatsAppUrl('Hello Real Looks Salon, I would like to book an appointment.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm h-10 w-full bg-[#C9B5E0]/80 hover:bg-[#C9B5E0] text-[#00105B] border border-[#00105B]/10 font-bold text-xs rounded-xl glass-btn px-2"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-[#128C7E] flex-shrink-0" />
          <span>WhatsApp</span>
        </a>

        <a
          href={SALON_INFO.telHref}
          className="btn btn-sm h-10 w-full bg-white hover:bg-[#C9B5E0]/35 text-[#00105B] font-bold text-xs rounded-xl glass-btn gold-border-btn px-2"
        >
          <Phone className="w-3.5 h-3.5 text-[#6061B6] flex-shrink-0" />
          <span>Call</span>
        </a>
      </div>
    </div>
  );
};
