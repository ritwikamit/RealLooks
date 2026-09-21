import React from 'react';
import { MapPin, Phone, MessageSquare, Clock, Instagram, Facebook, Navigation, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const LocationContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#242424] text-[#8D43F4] text-xs font-semibold uppercase tracking-widest mb-4">
          <MapPin className="w-3.5 h-3.5 text-[#8D43F4]" />
          <span>Location</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fafafa] tracking-tight">
          Visit Our Studio in Aurangabad
        </h2>
        <p className="mt-4 text-base text-[#aaaaaa] leading-relaxed">
          Located conveniently in Dani Bigha with accessible parking and modern climate-controlled comfort.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Contact Info Card (Clandestine Dark Theme) */}
        <div className="lg:col-span-5 rounded-2xl bg-[#0d0d0d] border border-[#1f1f1f] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#fafafa]">
              Real Looks Unisex Salon
            </h3>

            {/* Address */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#161616] text-[#8D43F4] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#262626]">
                <MapPin className="w-5 h-5 text-[#8D43F4]" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8D43F4]">Address</span>
                <p className="text-sm font-semibold text-[#fafafa] mt-0.5 leading-snug">
                  {SALON_INFO.address}
                </p>
                <p className="text-xs text-[#888888] mt-1 font-normal">
                  Landmark: Near Vayuputra Fitness Club, Dani Bigha
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#161616] text-[#8D43F4] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#262626]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8D43F4]">Opening Hours</span>
                <p className="text-sm font-semibold text-[#fafafa] mt-0.5">
                  Monday – Sunday: 9:00 AM – 9:00 PM
                </p>
                <span className="inline-block text-[11px] text-emerald-400 font-medium bg-emerald-950/40 px-2 py-0.5 rounded-md mt-1 border border-emerald-800/40">
                  Open 7 Days a Week
                </span>
              </div>
            </div>

            {/* Direct Connect */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#161616] text-[#8D43F4] flex items-center justify-center flex-shrink-0 mt-0.5 border border-[#262626]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#8D43F4]">Direct Booking & Inquiry</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  <a
                    href={`tel:${SALON_INFO.phoneClean}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#141414] hover:bg-[#1f1f1f] text-[#fafafa] font-semibold text-xs border border-[#262626] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#8D43F4]" />
                    <span>{SALON_INFO.phone}</span>
                  </a>
                  <a
                    href={`https://wa.me/${SALON_INFO.whatsapp}?text=${encodeURIComponent("Hello Real Looks Salon, I would like to inquire about appointments.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#141414] hover:bg-[#1f1f1f] text-emerald-400 font-semibold text-xs border border-emerald-900/40 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-4 border-t border-[#1a1a1a]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#888888] block mb-2.5">
                Connect With Us
              </span>
              <div className="flex gap-2.5">
                <a
                  href={SALON_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#141414] hover:bg-[#1f1f1f] text-xs font-semibold text-[#fafafa] border border-[#262626] transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                  <span>Instagram</span>
                </a>
                <a
                  href={SALON_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#141414] hover:bg-[#1f1f1f] text-xs font-semibold text-[#fafafa] border border-[#262626] transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5 text-[#1877F2]" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <a
            href={SALON_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl bg-[#8D43F4] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-[0_0_16px_rgba(141,67,244,0.4)] hover:bg-[#7b2fe0] flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4" />
            <span>Open in Google Maps</span>
          </a>
        </div>

        {/* Embedded Map Container */}
        <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#1f1f1f] min-h-[420px] relative shadow-xl bg-[#0d0d0d]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.688849683935!2d84.3644!3d24.7505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ1JzAxLjgiTiA4NMKwMjEnNTEuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '420px', filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(120%)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Real Looks Unisex Salon Google Map"
          />
        </div>

      </div>
    </section>
  );
};
