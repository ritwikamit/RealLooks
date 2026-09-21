import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Instagram, Facebook, Navigation } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const LocationContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full lucid-glass text-[#0D8F8B] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <MapPin className="w-3.5 h-3.5 text-[#D6A838]" />
          <span>Come See Us</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#192018] tracking-tight">
          Visit Our Studio in Aurangabad
        </h2>
        <p className="mt-3 text-base text-[#677565]">
          Located conveniently in Dani Bigha with accessible parking and climate-controlled comfort.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Contact Info Card with Lucid Glass */}
        <div className="lg:col-span-5 lucid-glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-[#192018]">
              Real Looks Unisex Salon
            </h3>

            {/* Address */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#4C5B2E]/10 text-[#4C5B2E] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#4C5B2E]/20">
                <MapPin className="w-5 h-5 text-[#4C5B2E]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#52A296]">Address</span>
                <p className="text-sm font-semibold text-[#192018] mt-0.5 leading-snug">
                  {SALON_INFO.address}
                </p>
                <p className="text-xs text-[#677565] mt-1 font-normal">
                  Landmark: Near Vayuputra Fitness Club, Dani Bigha
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#D6A838]/15 text-[#8E680E] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#D6A838]/30">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8E680E]">Opening Hours</span>
                <p className="text-sm font-semibold text-[#192018] mt-0.5">
                  Monday – Sunday: 9:00 AM – 9:00 PM
                </p>
                <span className="inline-block text-[11px] text-[#0D8F8B] font-bold bg-[#86D6B9]/20 px-2 py-0.5 rounded-md mt-1 border border-[#86D6B9]/40">
                  Open 7 Days a Week
                </span>
              </div>
            </div>

            {/* Direct Connect */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#89CFF0]/20 text-[#14486D] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#89CFF0]/40">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#14486D]">Direct Booking & Inquiry</span>
                <div className="flex flex-wrap gap-2 mt-1.5">
                  <a
                    href={`tel:${SALON_INFO.phoneClean}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl lucid-glass hover:bg-white text-[#2F3B1A] font-bold text-xs border border-white/80 shadow-2xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#D6A838]" />
                    <span>{SALON_INFO.phone}</span>
                  </a>
                  <a
                    href={`https://wa.me/${SALON_INFO.whatsapp}?text=${encodeURIComponent("Hello Real Looks Salon, I would like to inquire about appointments.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#15803D] font-bold text-xs border border-[#25D366]/30 shadow-2xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-3 border-t border-black/5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#677565] block mb-2">
                Follow The Looks
              </span>
              <div className="flex gap-2">
                <a
                  href={SALON_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl lucid-glass hover:bg-white text-xs font-bold text-[#192018] border border-white/80"
                >
                  <Instagram className="w-4 h-4 text-[#E1306C]" />
                  <span>@reallookssalon_aurangabad</span>
                </a>
                <a
                  href={SALON_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 p-2 rounded-xl lucid-glass hover:bg-white text-[#1877F2] border border-white/80"
                  title="Facebook Page"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Directions Button with Glossy Gold */}
          <a
            href={SALON_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-2xl glossy-gold-btn text-[#4A3502] font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all border border-white/80"
          >
            <Navigation className="w-4 h-4 text-[#4A3502]" />
            <span>Open in Google Maps Navigation</span>
          </a>
        </div>

        {/* Interactive Map Visual Card with Lucid Glass */}
        <div className="lg:col-span-7 lucid-glass-card rounded-3xl p-4 sm:p-6 flex flex-col">
          <div className="relative flex-1 min-h-[340px] rounded-2xl overflow-hidden border border-white/80">
            {/* Embedded Google Map */}
            <iframe
              title="Real Looks Unisex Salon Location Aurangabad"
              src="https://maps.google.com/maps?q=Q957%2BRR4,+near+Vayuputra+Fitness+Club,+Dani+Bigha,+Aurangabad,+Bihar+824101,+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlaid Location Badge with Lucid Glass */}
            <div className="absolute top-4 left-4 right-4 sm:right-auto lucid-glass p-3.5 rounded-2xl border border-white/90 shadow-md flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#4C5B2E] to-[#52A296] text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                <MapPin className="w-5 h-5 text-[#FFF2A8]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-[#192018] truncate">
                  Real Looks Unisex Salon
                </p>
                <p className="text-[11px] text-[#677565] truncate font-medium">
                  Dani Bigha, Aurangabad, Bihar
                </p>
              </div>
              <a
                href={SALON_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto px-3 py-1.5 rounded-xl glossy-gold-btn text-[#4A3502] text-[10px] font-bold uppercase tracking-wider whitespace-nowrap shadow-2xs border border-white/80"
              >
                Directions
              </a>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#677565] px-2 font-medium">
            <span>Coordinates: <strong>24.7538° N, 84.3742° E</strong></span>
            <span>Aurangabad, Bihar 824101</span>
          </div>
        </div>

      </div>
    </section>
  );
};
