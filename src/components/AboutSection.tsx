import React from 'react';
import { ShieldCheck, Award, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="glass-cream rounded-3xl p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/salon-hero-interior.jpg"
                alt="Real Looks Unisex Salon Interior in Dani Bigha"
                className="w-full h-72 sm:h-80 object-cover"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-3 gap-2.5 text-center">
              <div className="p-3 rounded-xl glass-surface">
                <span className="text-lg font-extrabold text-[#141413] block">4.5 / 5</span>
                <span className="text-[11px] font-semibold text-[#141413]/65">Google Score</span>
              </div>
              <div className="p-3 rounded-xl bg-[#B4D7CD]/65 backdrop-blur-md">
                <span className="text-lg font-extrabold text-[#141413] block">100%</span>
                <span className="text-[11px] font-semibold text-[#141413]/65">Clean Tools</span>
              </div>
              <div className="p-3 rounded-xl bg-[#8EA8C3]/55 backdrop-blur-md">
                <span className="text-lg font-extrabold text-[#141413] block">Unisex</span>
                <span className="text-[11px] font-semibold text-[#141413]/65">Men & Women</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <span className="inline-block px-3 py-1 rounded-lg bg-white/70 text-[#141413] text-xs font-bold uppercase tracking-wider">
              About Our Studio
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141413] leading-tight">
              A Calm, Clean Salon Right in Dani Bigha
            </h2>

            <p className="text-sm sm:text-base text-[#141413]/80 leading-relaxed">
              At <strong>Real Looks Unisex Salon</strong>, good grooming shouldn’t feel rushed. Right near Vayuputra Fitness Club in Aurangabad, we pair modern haircuts and beard craft with gentle skin care for both men and women.
            </p>

            <p className="text-sm text-[#141413]/70 leading-relaxed">
              Every visit starts with a quick chat about what works for your hair and face shape—so you walk out feeling like yourself, just sharper.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              <div className="flex items-start gap-3 p-4 rounded-xl glass-surface">
                <div className="w-9 h-9 rounded-lg bg-[#B4D7CD]/75 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#141413]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#141413]">Sanitized Every Time</h3>
                  <p className="text-xs text-[#141413]/70 mt-0.5 leading-relaxed">
                    UV-cleaned scissors, fresh razors, and single-use neck wraps for every guest.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl glass-surface">
                <div className="w-9 h-9 rounded-lg bg-[#F47321] flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#141413]">Trained Stylists</h3>
                  <p className="text-xs text-[#141413]/70 mt-0.5 leading-relaxed">
                    Experienced hands for fades, layers, hair botox, facials, and bridal prep.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#141413]/75 pt-1">
              <MapPin className="w-4 h-4 text-[#F47321] flex-shrink-0" />
              <span>{SALON_INFO.address}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
