import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, ArrowUp } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { SALON_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121812] text-[#F6F8F5] pt-16 pb-24 lg:pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient subtle glow: Tiffany blue + Forest Olive + Gold */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#12B5AF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D6A838]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <BrandLogo variant="header" light />
            <p className="text-xs text-white/70 leading-relaxed max-w-xs font-normal">
              {SALON_INFO.tagline}. Modern grooming, couture hair styling, hair botox & bridal experiences in Aurangabad, Bihar.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href={SALON_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-2xl bg-white/10 hover:bg-[#E1306C] text-white flex items-center justify-center transition-colors border border-white/10"
                title="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-2xl bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-colors border border-white/10"
                title="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFF2A8] mb-4">
              Explore Services
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-medium">
              <li><a href="#services" className="hover:text-[#FFF2A8] transition-colors">Executive Haircuts (Men & Women)</a></li>
              <li><a href="#services" className="hover:text-[#FFF2A8] transition-colors">Royal Beard Sculpt & Shave</a></li>
              <li><a href="#services" className="hover:text-[#FFF2A8] transition-colors">24K Gold Radiance Facial</a></li>
              <li><a href="#services" className="hover:text-[#FFF2A8] transition-colors">Nanoplastia & Hair Botox</a></li>
              <li><a href="#services" className="hover:text-[#FFF2A8] transition-colors">Signature Bridal & Groom Makeovers</a></li>
            </ul>
          </div>

          {/* Hours & Availability */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFF2A8] mb-4">
              Studio Timings
            </h4>
            <div className="space-y-3 text-xs text-white/75 font-normal">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D6A838] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Monday – Sunday</p>
                  <p className="text-white/70">9:00 AM – 9:00 PM</p>
                  <span className="text-[10px] text-[#5CE0DC] font-semibold block mt-0.5">Online appointment requests accepted 24/7</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FFF2A8] mb-4">
              Aurangabad Studio
            </h4>
            <div className="space-y-3 text-xs text-white/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D6A838] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed font-normal">
                  Q957+RR4, near Vayuputra Fitness Club, Dani Bigha, Aurangabad, Bihar 824101
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D6A838] flex-shrink-0" />
                <a href={`tel:${SALON_INFO.phoneClean}`} className="hover:text-[#FFF2A8] text-white font-bold">
                  {SALON_INFO.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Local SEO Bar & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <div>
            <p>© {new Date().getFullYear()} Real Looks Unisex Salon. All rights reserved.</p>
            <p className="text-[10px] text-white/40 mt-0.5 font-normal">
              Premier unisex salon in Dani Bigha, Aurangabad, Bihar • Near Vayuputra Fitness Club
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-colors cursor-pointer border border-white/10"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
