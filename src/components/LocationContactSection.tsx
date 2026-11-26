import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Instagram, Facebook, Navigation } from 'lucide-react';
import { SALON_INFO, buildWhatsAppUrl } from '../data/salonData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const LocationContactSection: React.FC = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
    >
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="font-script text-3xl sm:text-4xl text-[#6061B6] mb-1">
          Come say hello
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00105B] tracking-tight">
          Find Us in Aurangabad
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#00105B]/70">
          Right in Dani Bigha near Vayuputra Fitness Club, with easy parking outside.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-5 glass-cream rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6">
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-[#00105B]">
              {SALON_INFO.name}
            </h3>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FCF9EC] flex items-center justify-center flex-shrink-0 shadow-xs">
                <MapPin className="w-4 h-4 text-[#6061B6]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#00105B]/60">Address</span>
                <p className="text-xs sm:text-sm font-semibold text-[#00105B] mt-0.5 leading-snug">
                  {SALON_INFO.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FCF9EC] flex items-center justify-center flex-shrink-0 shadow-xs">
                <Clock className="w-4 h-4 text-[#00105B]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#00105B]/60">Hours</span>
                <p className="text-xs sm:text-sm font-semibold text-[#00105B] mt-0.5">
                  {SALON_INFO.hours}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-1">
              <a
                href={SALON_INFO.telHref}
                className="btn btn-sm bg-[#FCF9EC] hover:bg-[#C9B5E0] text-[#00105B] font-bold text-xs rounded-xl glass-btn gold-border-btn px-4"
              >
                <Phone className="w-3.5 h-3.5 text-[#6061B6]" />
                <span>Call Salon</span>
              </a>
              <a
                href={buildWhatsAppUrl('Hello Real Looks Salon, I would like to ask about an appointment.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm bg-[#00105B] hover:bg-[#6061B6] text-[#FCF9EC] font-bold text-xs rounded-xl glass-btn gold-border-btn px-4"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>WhatsApp</span>
              </a>
              <a
                href={SALON_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm bg-[#C9B5E0]/75 hover:bg-[#C9B5E0] text-[#00105B] border-0 font-bold text-xs rounded-xl glass-btn px-4"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-[#00105B]/10 flex items-center gap-2.5">
            <a
              href={SALON_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-xl bg-[#FCF9EC] flex items-center justify-center text-[#00105B] hover:bg-[#6061B6] hover:text-white transition-colors shadow-xs"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={SALON_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-xl bg-[#FCF9EC] flex items-center justify-center text-[#00105B] hover:bg-[#6061B6] hover:text-white transition-colors shadow-xs"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-[0_14px_40px_rgba(0,16,91,0.1)] min-h-[320px] bg-[#C9B5E0]/35">
          <iframe
            title="Real Looks Unisex Salon Location Map"
            src="https://www.google.com/maps?q=Q957%2BRR4,+near+Vayuputra+Fitness+Club,+Dani+Bigha,+Aurangabad,+Bihar+824101,+India&output=embed"
            className="w-full h-full min-h-[320px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </motion.section>
  );
};
