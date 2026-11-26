import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Instagram, Facebook, Navigation } from 'lucide-react';
import { SALON_INFO, buildWhatsAppUrl } from '../data/salonData';

export const LocationContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-block px-3 py-1 rounded-md bg-[#8EA8C3] border-2 border-[#141413] text-[#141413] text-xs font-extrabold uppercase tracking-wider mb-3">
          Visit Us
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">
          Find Us in Aurangabad
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#141413]/75">
          Right in Dani Bigha near Vayuputra Fitness Club, with easy parking outside.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-5 brutal-glass-cream rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6">
          <div className="space-y-5">
            <h3 className="text-xl font-extrabold text-[#141413]">
              {SALON_INFO.name}
            </h3>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#FFFDF7] border-2 border-[#141413] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-[#F47321]" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#141413]/65">Address</span>
                <p className="text-xs sm:text-sm font-bold text-[#141413] mt-0.5 leading-snug">
                  {SALON_INFO.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#FFFDF7] border-2 border-[#141413] flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-[#141413]" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#141413]/65">Hours</span>
                <p className="text-xs sm:text-sm font-bold text-[#141413] mt-0.5">
                  {SALON_INFO.hours}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-1">
              <a
                href={SALON_INFO.telHref}
                className="btn btn-sm bg-[#FFFDF7] hover:bg-[#B4D7CD] text-[#141413] font-extrabold text-xs rounded-xl brutal-btn px-4"
              >
                <Phone className="w-3.5 h-3.5 text-[#F47321]" />
                <span>Call Salon</span>
              </a>
              <a
                href={buildWhatsAppUrl('Hello Real Looks Salon, I would like to ask about an appointment.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm bg-[#F47321] hover:bg-[#e06314] text-[#141413] font-extrabold text-xs rounded-xl brutal-btn px-4"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={SALON_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm bg-[#B4D7CD] hover:bg-[#8EA8C3] text-[#141413] font-extrabold text-xs rounded-xl brutal-btn px-4"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          <div className="pt-4 border-t-2 border-[#141413]/15 flex items-center gap-2.5">
            <a
              href={SALON_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-lg bg-[#FFFDF7] border-2 border-[#141413] flex items-center justify-center hover:bg-[#F47321] transition-colors"
            >
              <Instagram className="w-4 h-4 text-[#141413]" />
            </a>
            <a
              href={SALON_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-lg bg-[#FFFDF7] border-2 border-[#141413] flex items-center justify-center hover:bg-[#F47321] transition-colors"
            >
              <Facebook className="w-4 h-4 text-[#141413]" />
            </a>
          </div>
        </div>

        {/* Map Embed */}
        <div className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-[#141413] shadow-[4px_4px_0px_#141413] min-h-[320px] bg-[#B4D7CD]">
          <iframe
            title="Real Looks Unisex Salon Location Map"
            src="https://www.google.com/maps?q=Q957%2BRR4,+near+Vayuputra+Fitness+Club,+Dani+Bigha,+Aurangabad,+Bihar+824101,+India&output=embed"
            className="w-full h-full min-h-[320px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};
