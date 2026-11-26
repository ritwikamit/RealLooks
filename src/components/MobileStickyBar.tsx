import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { SALON_INFO, buildWhatsAppUrl } from '../data/salonData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface MobileStickyBarProps {
  onBookClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden glass-surface rounded-none border-x-0 border-b-0 px-3 pt-2 safe-bottom">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <button
          type="button"
          onClick={onBookClick}
          className="btn btn-sm flex-1 bg-[#00105B] hover:bg-[#6061B6] text-[#FCF9EC] font-bold text-xs uppercase rounded-xl glass-btn gold-border-btn"
        >
          <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Book</span>
        </button>

        <a
          href={buildWhatsAppUrl('Hello Real Looks Salon, I would like to book an appointment.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm bg-[#C9B5E0]/85 hover:bg-[#C9B5E0] text-[#00105B] border-0 font-bold text-xs uppercase rounded-xl glass-btn px-3.5"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-[#128C7E]" />
          <span>WhatsApp</span>
        </a>

        <a
          href={SALON_INFO.telHref}
          className="btn btn-sm bg-[#FCF9EC] hover:bg-[#C9B5E0]/50 text-[#00105B] font-bold text-xs uppercase rounded-xl glass-btn gold-border-btn px-3.5"
        >
          <Phone className="w-3.5 h-3.5 text-[#6061B6]" />
          <span>Call</span>
        </a>
      </div>
    </div>
  );
};
