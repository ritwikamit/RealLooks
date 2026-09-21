import React from 'react';
import { Calendar, Phone, MessageSquare } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface MobileStickyBarProps {
  onBookClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden lucid-glass border-t border-white/80 px-3 py-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl safe-bottom">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* Book Now Main Button */}
        <button
          id="mobile-sticky-book-btn"
          onClick={onBookClick}
          className="flex-1 py-2.5 px-3 rounded-2xl glossy-gold-btn text-[#4A3502] font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all border border-white/80 cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5 text-[#4A3502]" />
          <span>BOOK NOW</span>
        </button>

        {/* WhatsApp Button */}
        <a
          id="mobile-sticky-whatsapp-btn"
          href={`https://wa.me/${SALON_INFO.whatsapp}?text=${encodeURIComponent("Hello Real Looks Salon, I would like to request an appointment.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-3.5 rounded-2xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs active:scale-95 transition-all cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WHATSAPP</span>
        </a>

        {/* Call Button */}
        <a
          id="mobile-sticky-call-btn"
          href={`tel:${SALON_INFO.phoneClean}`}
          className="py-2.5 px-3.5 rounded-2xl lucid-glass text-[#192018] font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs active:scale-95 transition-all border border-white/80 cursor-pointer"
        >
          <Phone className="w-3.5 h-3.5 text-[#D6A838]" />
          <span>CALL</span>
        </a>

      </div>
    </div>
  );
};
