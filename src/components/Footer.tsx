import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { SALON_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-[#fafafa] pt-16 pb-24 lg:pb-12 border-t border-[#1a1a1a] relative overflow-hidden">
      {/* Ambient subtle violet glow */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full pointer-events-none blur-[140px] opacity-15"
        style={{ background: 'radial-gradient(circle, #8D43F4 0%, transparent 80%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#1a1a1a]">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <BrandLogo variant="header" light />
            <p className="text-xs text-[#aaaaaa] leading-relaxed max-w-xs font-normal">
              {SALON_INFO.tagline}. Bespoke grooming, couture hair styling, hair botox, and aesthetic experiences in Aurangabad, Bihar.
            </p>
            <div className="flex gap-2.5 pt-2">
              <a
                href={SALON_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#121212] hover:bg-[#8D43F4] text-[#aaaaaa] hover:text-white flex items-center justify-center transition-all border border-[#242424] hover:border-transparent cursor-pointer"
                title="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#121212] hover:bg-[#8D43F4] text-[#aaaaaa] hover:text-white flex items-center justify-center transition-all border border-[#242424] hover:border-transparent cursor-pointer"
                title="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8D43F4] mb-4">
              Explore Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#888888] font-medium">
              <li><a href="#services" className="hover:text-white transition-colors">Precision Hairdressing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Deep Radiance Facial Therapy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Nanoplastia & Hair Botox</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Architectural Brow Sculpting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Haute Editorial & Bridal Makeup</a></li>
            </ul>
          </div>

          {/* Hours & Availability */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8D43F4] mb-4">
              Studio Timings
            </h4>
            <div className="space-y-3 text-xs text-[#888888] font-normal">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#8D43F4] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#fafafa]">Monday – Sunday</p>
                  <p className="text-[#888888]">9:00 AM – 9:00 PM</p>
                  <span className="text-[10px] text-[#8D43F4] font-medium block mt-1">Online appointment requests accepted 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8D43F4] mb-4">
              Aurangabad Studio
            </h4>
            <div className="space-y-3 text-xs text-[#888888]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8D43F4] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed font-normal">
                  Q957+RR4, near Vayuputra Fitness Club, Dani Bigha, Aurangabad, Bihar 824101
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8D43F4] flex-shrink-0" />
                <a href={`tel:${SALON_INFO.phoneClean}`} className="hover:text-[#8D43F4] text-[#fafafa] font-bold transition-colors">
                  {SALON_INFO.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#666666]">
          <p>© {new Date().getFullYear()} Real Looks Unisex Salon. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#masters" className="hover:text-white transition-colors">Masters</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#8D43F4] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
