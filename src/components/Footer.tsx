import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, MessageSquare, ArrowUpRight } from 'lucide-react';
import { SALON_INFO, buildWhatsAppUrl } from '../data/salonData';
import { PageView } from './Navbar';

interface FooterProps {
  onNavigate?: (page: PageView) => void;
  onBookClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onBookClick }) => {
  return (
    <footer className="relative w-full text-[#FFFDF7] border-t-2 border-[#141413] overflow-hidden pb-20 lg:pb-8">
      {/* Background image darkly faded */}
      <img
        src="/images/salon-hero-interior.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0"
        loading="lazy"
      />
      <div
        className="absolute inset-0 z-0 bg-[#141413]/85 backdrop-blur-[2px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/15">
          {/* Col 1: Logo + Tagline + Social Icons */}
          <div className="space-y-4">
            <img
              src="/images/logo.png"
              alt="Real Looks Unisex Salon"
              className="h-20 w-auto object-contain bg-[#FFFDF7] p-2 rounded-xl border-2 border-[#141413]"
              loading="lazy"
            />
            <p className="text-xs text-white/80 leading-relaxed max-w-xs">
              {SALON_INFO.tagline}. Clean haircuts, beard styling, facials, and bridal looks in Dani Bigha, Aurangabad.
            </p>

            {/* All Social Media Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={SALON_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="w-10 h-10 rounded-xl bg-[#FFEEB3] text-[#141413] border-2 border-[#141413] flex items-center justify-center hover:bg-[#F47321] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="w-10 h-10 rounded-xl bg-[#8EA8C3] text-[#141413] border-2 border-[#141413] flex items-center justify-center hover:bg-[#F47321] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={buildWhatsAppUrl('Hello Real Looks Salon, I would like to book an appointment.')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp"
                className="w-10 h-10 rounded-xl bg-[#B4D7CD] text-[#141413] border-2 border-[#141413] flex items-center justify-center hover:bg-[#F47321] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#FFEEB3] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-white/85">
              <li>
                <button type="button" onClick={() => onNavigate?.('home')} className="hover:text-[#FFEEB3] cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate?.('services')} className="hover:text-[#FFEEB3] cursor-pointer">
                  Services & Prices
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate?.('gallery')} className="hover:text-[#FFEEB3] cursor-pointer">
                  Cuts & Reels Lookbook
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate?.('masters')} className="hover:text-[#FFEEB3] cursor-pointer">
                  Our Team
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate?.('store')} className="hover:text-[#FFEEB3] cursor-pointer">
                  Care Shop
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate?.('about')} className="hover:text-[#FFEEB3] cursor-pointer">
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Location & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#FFEEB3] mb-4">
              Location & Hours
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-white/85">
              <MapPin className="w-4 h-4 text-[#F47321] flex-shrink-0 mt-0.5" />
              <div>
                <p className="leading-relaxed">{SALON_INFO.address}</p>
                <a
                  href={SALON_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#FFEEB3] font-bold mt-1.5 hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-white/85 pt-1">
              <Clock className="w-4 h-4 text-[#B4D7CD] flex-shrink-0" />
              <span>{SALON_INFO.hours}</span>
            </div>
          </div>

          {/* Col 4: Direct Call & WhatsApp (no phone number exposed) */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#FFEEB3] mb-4">
              Book or Call
            </h4>
            <p className="text-xs text-white/80 leading-relaxed">
              Need a quick slot today? Message us on WhatsApp or tap to call the front desk.
            </p>
            <div className="flex flex-col gap-2.5 pt-1">
              <button
                type="button"
                onClick={onBookClick}
                className="btn btn-sm bg-[#F47321] hover:bg-[#e06314] text-[#141413] font-extrabold text-xs uppercase rounded-xl brutal-btn w-full"
              >
                Book a Chair
              </button>
              <a
                href={SALON_INFO.telHref}
                className="btn btn-sm bg-[#FFEEB3] hover:bg-[#f7e094] text-[#141413] font-extrabold text-xs uppercase rounded-xl brutal-btn w-full"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Salon</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/65">
          <p>© {new Date().getFullYear()} Real Looks Unisex Salon, Aurangabad, Bihar.</p>
          <p>Men & Women • Open 7 Days</p>
        </div>
      </div>
    </footer>
  );
};
