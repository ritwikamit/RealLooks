import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Instagram, Facebook, Navigation, QrCode, ArrowUpRight } from 'lucide-react';
import { SALON_INFO, buildWhatsAppUrl } from '../data/salonData';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BlurReveal } from './BlurReveal';

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
      <BlurReveal className="text-center max-w-2xl mx-auto mb-10">
        <p className="font-script text-3xl sm:text-4xl text-[#6061B6] mb-1">
          Come say hello
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00105B] tracking-tight">
          Find Us & Share Your Visit
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#00105B]/70">
          Right in Dani Bigha near Vayuputra Fitness Club, with easy parking outside.
        </p>
      </BlurReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Contact Info + Google Review QR */}
        <div className="lg:col-span-5 flex flex-col gap-5">
          <div className="glass-cream rounded-3xl p-6 sm:p-7 flex-1 flex flex-col justify-between gap-5">
            <div className="space-y-4">
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

            <div className="pt-3 border-t border-[#00105B]/10 flex items-center gap-2.5">
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

          {/* Google My Business Review QR Card */}
          <div className="glass-surface rounded-3xl p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4 border border-[#D4AF37]/45">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#FCF9EC] p-1.5 border border-[#D4AF37]/60 flex-shrink-0 shadow-xs">
              <img
                src="/images/google-review-qr.png"
                alt="Scan QR to review Real Looks Unisex Salon on Google"
                className="w-full h-full object-contain rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#6061B6]">
                <QrCode className="w-3.5 h-3.5" />
                <span>Google Profile</span>
              </span>
              <h4 className="text-sm sm:text-base font-bold text-[#00105B] leading-snug">
                Loved your visit? Scan to review us
              </h4>
              <p className="text-xs text-[#00105B]/70 leading-relaxed">
                Point your camera at the QR code to share your experience on Google.
              </p>
              <a
                href={SALON_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#00105B] hover:text-[#6061B6] pt-0.5"
              >
                <span>Open Google Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Redesigned Map Card */}
        <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-[0_16px_44px_rgba(0,16,91,0.1)] min-h-[280px] sm:min-h-[380px] bg-[#C9B5E0]/30 border border-white/80">
          <iframe
            title="Real Looks Unisex Salon Location Map"
            src="https://www.google.com/maps?q=Q957%2BRR4,+near+Vayuputra+Fitness+Club,+Dani+Bigha,+Aurangabad,+Bihar+824101,+India&output=embed"
            className="w-full h-full min-h-[280px] sm:min-h-[380px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm glass-surface rounded-2xl p-3.5 flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#6061B6]">
                Landmark
              </p>
              <p className="text-xs font-bold text-[#00105B]">
                Near Vayuputra Fitness Club, Dani Bigha
              </p>
            </div>
            <a
              href={SALON_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-xs bg-[#00105B] text-[#FCF9EC] rounded-lg gold-border-btn flex-shrink-0"
            >
              Go
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
