import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { SALON_INFO, buildWhatsAppUrl } from '../data/salonData';
import { WhatsAppIcon } from './WhatsAppIcon';

interface MobileStickyBarProps {
  onBookClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden glass-surface rounded-none border-x-0 border-b-0 px-3 py-2">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <button
          type="button"
          onClick={onBookClick}
          className="btn btn-sm flex-1 bg-[#F47321] hover:bg-[#e06314] text-white border-0 font-bold text-xs uppercase rounded-xl glass-btn"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book</span>
        </button>

        <a
          href={buildWhatsAppUrl('Hello Real Looks Salon, I would like to book an appointment.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm bg-[#B4D7CD] hover:bg-[#9ec9bd] text-[#141413] border-0 font-bold text-xs uppercase rounded-xl glass-btn px-3.5"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 text-[#128C7E]" />
          <span>WhatsApp</span>
        </a>

        <a
          href={SALON_INFO.telHref}
          className="btn btn-sm bg-[#FFEEB3] hover:bg-[#f7e094] text-[#141413] border-0 font-bold text-xs uppercase rounded-xl glass-btn px-3.5"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call</span>
        </a>
      </div>
    </div>
  );
};
