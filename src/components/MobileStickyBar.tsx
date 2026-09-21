import React from 'react';
import { Calendar, Phone, MessageSquare } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface MobileStickyBarProps {
  onBookClick: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#0a0a0a]/95 border-t border-[#1f1f1f] px-3 py-2.5 shadow-[0_-10px_35px_rgba(0,0,0,0.85)] backdrop-blur-xl safe-bottom">
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        
        {/* Book Now Main Button */}
        <button
          id="mobile-sticky-book-btn"
          onClick={onBookClick}
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#8D43F4] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_16px_rgba(141,67,244,0.4)] active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>BOOK NOW</span>
        </button>

        {/* WhatsApp Button */}
        <a
          id="mobile-sticky-whatsapp-btn"
          href={`https://wa.me/${SALON_INFO.whatsapp}?text=${encodeURIComponent("Hello Real Looks Salon, I would like to request an appointment.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-3.5 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs active:scale-95 transition-all cursor-pointer"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WHATSAPP</span>
        </a>

        {/* Call Button */}
        <a
          id="mobile-sticky-call-btn"
          href={`tel:${SALON_INFO.phoneClean}`}
          className="py-2.5 px-3.5 rounded-xl bg-[#161616] border border-[#282828] text-[#fafafa] font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer"
        >
          <Phone className="w-3.5 h-3.5 text-[#8D43F4]" />
          <span>CALL</span>
        </a>

      </div>
    </div>
  );
};
