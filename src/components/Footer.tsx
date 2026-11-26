import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { SALON_INFO, buildWhatsAppUrl } from '../data/salonData';
import { PageView } from './Navbar';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onNavigate?: (page: PageView) => void;
  onBookClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onBookClick }) => {
  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 pt-8 pb-24 lg:pb-10">
      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden text-[#FCF9EC] shadow-[0_24px_60px_rgba(0,16,91,0.18)]">
        <img
          src="/images/salon-hero-interior.webp"
          alt=""
          aria-hidden="true"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="lazy"
        />
        <div
          className="absolute inset-0 z-0 bg-gradient-to-br from-[#00105B]/90 via-[#00105B]/85 to-[#6061B6]/78 backdrop-blur-[2px]"
          aria-hidden="true"
        />

        <div className="relative z-10 px-6 sm:px-12 pt-16 sm:pt-20 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/15">
            <div className="lg:col-span-4 space-y-5">
              <div className="inline-block bg-[#FCF9EC] p-3.5 rounded-2xl shadow-lg border border-[#D4AF37]/60">
                <img
                  src="/images/logo.webp"
                  alt="Real Looks Unisex Salon"
                  className="h-24 sm:h-28 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-sm">
                {SALON_INFO.tagline}. Clean haircuts, beard styling, facials, and bridal looks in Dani Bigha, Aurangabad.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <a
                  href={SALON_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="w-10 h-10 rounded-xl bg-white/12 backdrop-blur-md text-white border border-white/25 flex items-center justify-center hover:bg-[#6061B6] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={SALON_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="w-10 h-10 rounded-xl bg-white/12 backdrop-blur-md text-white border border-white/25 flex items-center justify-center hover:bg-[#6061B6] transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={buildWhatsAppUrl('Hello Real Looks Salon, I would like to book an appointment.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                  className="w-10 h-10 rounded-xl bg-white/12 backdrop-blur-md text-white border border-white/25 flex items-center justify-center hover:bg-[#25D366] transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
                <a
                  href={SALON_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Location on Google Maps"
                  title="Location"
                  className="w-10 h-10 rounded-xl bg-white/12 backdrop-blur-md text-white border border-white/25 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#00105B] transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                </a>
                <a
                  href={SALON_INFO.telHref}
                  aria-label="Call Salon"
                  title="Call Salon"
                  className="w-10 h-10 rounded-xl bg-white/12 backdrop-blur-md text-white border border-white/25 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#00105B] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9B5E0] mb-4">
                Explore
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-white/85">
                <li>
                  <button type="button" onClick={() => onNavigate?.('home')} className="hover:text-[#C9B5E0] cursor-pointer">
                    Home
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => onNavigate?.('services')} className="hover:text-[#C9B5E0] cursor-pointer">
                    Services & Prices
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => onNavigate?.('gallery')} className="hover:text-[#C9B5E0] cursor-pointer">
                    Cuts & Reels
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => onNavigate?.('masters')} className="hover:text-[#C9B5E0] cursor-pointer">
                    Our Team
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => onNavigate?.('store')} className="hover:text-[#C9B5E0] cursor-pointer">
                    Care Shop
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => onNavigate?.('about')} className="hover:text-[#C9B5E0] cursor-pointer">
                    About Us
                  </button>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9B5E0] mb-4">
                Location & Hours
              </h4>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/85">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="leading-relaxed">{SALON_INFO.address}</p>
                  <a
                    href={SALON_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#C9B5E0] font-semibold mt-2 hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/85 pt-1">
                <Clock className="w-4 h-4 text-[#C9B5E0] flex-shrink-0" />
                <span>{SALON_INFO.hours}</span>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9B5E0] mb-4">
                Book or Call
              </h4>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Ready for a fresh cut or a calm hour to yourself? Message us on WhatsApp or call the front desk.
              </p>
              <div className="flex flex-col gap-3 pt-1">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="btn bg-[#6061B6] hover:bg-[#5051a3] text-[#FCF9EC] font-bold text-xs uppercase rounded-xl glass-btn gold-border-btn w-full"
                >
                  Book Your Chair
                </button>
                <a
                  href={SALON_INFO.telHref}
                  className="btn bg-[#FCF9EC] hover:bg-[#C9B5E0] text-[#00105B] font-bold text-xs uppercase rounded-xl glass-btn gold-border-btn w-full"
                >
                  <Phone className="w-3.5 h-3.5 text-[#6061B6]" />
                  <span>Call Salon</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
            <p>© {new Date().getFullYear()} Real Looks Unisex Salon, Aurangabad, Bihar.</p>

            {/* Designed & Developed by AccustomLabs (redirects to 7766833773 WhatsApp) */}
            <a
              href={`https://wa.me/917766833773?text=${encodeURIComponent('Hello AccustomLabs, I saw the Real Looks website and would like to enquire.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 leading-none hover:opacity-95 transition-opacity"
              aria-label="Enquire with AccustomLabs on WhatsApp"
            >
              <span className="text-white/80">Designed and developed by</span>
              <img
                src="/images/agencyLogo.webp"
                alt="AccustomLabs"
                className="h-6 sm:h-7 w-auto object-contain align-middle"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
