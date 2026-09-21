import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, ArrowUp, Sparkles, MessageSquare, Heart } from 'lucide-react';
import { BrandLogo } from '../BrandLogo';
import { SALON_INFO } from '../../data/salonData';
import { PageView } from './LimelightNavbar';

interface ClandestineEnhancedFooterProps {
  onNavigate?: (page: PageView) => void;
  onBookClick?: () => void;
}

export const ClandestineEnhancedFooter: React.FC<ClandestineEnhancedFooterProps> = ({
  onNavigate,
  onBookClick,
}) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 20) % 360);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#171D0E] text-[#F8F9F5] pt-16 pb-12 border-t border-[#D6A838]/30 overflow-hidden select-none">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#12B5AF]/08 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D6A838]/08 rounded-full blur-3xl pointer-events-none" />

      {/* Clandestine Giant Watermark Typography Background */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 text-center font-serif font-black uppercase text-white/[0.035] tracking-widest whitespace-nowrap text-[12vw] leading-none z-0"
        aria-hidden="true"
      >
        REAL LOOKS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand, Tagline, Rotating Accent */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo variant="header" light />
              {/* Rotating Botanical Accent inspired by Clandestine Snowflake */}
              <div
                className="w-6 h-6 text-[#D6A838] transition-transform duration-1000 ease-in-out"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-xs font-normal">
              {SALON_INFO.tagline}. Premier unisex haircutting, nanoplastia, hair botox, skin treatments, and bridal artistry in Dani Bigha, Aurangabad, Bihar.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={SALON_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#E1306C] text-white flex items-center justify-center transition-all border border-white/10 hover:scale-105"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all border border-white/10 hover:scale-105"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${SALON_INFO.whatsapp}?text=${encodeURIComponent('Hello Real Looks Salon, I would like to book an appointment.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-all border border-white/10 hover:scale-105"
                title="WhatsApp Direct"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFF2A8] mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-medium">
              <li>
                <button
                  onClick={() => onNavigate?.('home')}
                  className="hover:text-[#FFF2A8] transition-colors cursor-pointer text-left"
                >
                  Home & Online Booking
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('about')}
                  className="hover:text-[#FFF2A8] transition-colors cursor-pointer text-left"
                >
                  About Studio & Hygiene Protocol
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('gallery')}
                  className="hover:text-[#FFF2A8] transition-colors cursor-pointer text-left"
                >
                  Lookbook & Transformation Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate?.('contact')}
                  className="hover:text-[#FFF2A8] transition-colors cursor-pointer text-left"
                >
                  Client Reviews & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Signature Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFF2A8] mb-4">
              Signature Services
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-medium">
              <li>Executive Unisex Haircuts & Styling</li>
              <li>Royal Beard Sculpting & Razor Lineup</li>
              <li>Nanoplastia & Organic Hair Botox</li>
              <li>24K Gold Glow & Deep Purifying Facials</li>
              <li>Pre-Bridal & Royal Groom Packages</li>
            </ul>
          </div>

          {/* Col 4: Studio Location & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFF2A8] mb-4">
              Studio & Hours
            </h4>
            <div className="flex items-start gap-2 text-xs text-white/80">
              <MapPin className="w-4 h-4 text-[#D6A838] flex-shrink-0 mt-0.5" />
              <span>{SALON_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/80">
              <Clock className="w-4 h-4 text-[#86D6B9] flex-shrink-0" />
              <span>Open Daily: 9:00 AM – 9:00 PM</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/80">
              <Phone className="w-4 h-4 text-[#89CFF0] flex-shrink-0" />
              <a href={`tel:${SALON_INFO.phoneClean}`} className="hover:text-white">
                {SALON_INFO.phone}
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#D6A838] to-[#C29324] hover:from-[#C29324] hover:to-[#8E680E] text-[#1F1703] font-bold text-xs tracking-wider uppercase shadow-md transition-all cursor-pointer"
              >
                Instant Reservation
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Real Looks Unisex Salon. All rights reserved.</span>
            <span>•</span>
            <span className="text-[#D6A838]">Aurangabad, Bihar</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#FFF2A8] hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
