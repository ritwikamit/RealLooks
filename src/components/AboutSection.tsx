import React from 'react';
import { ShieldCheck, Award, HeartHandshake, MapPin } from 'lucide-react';
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
            <p className="font-script text-2xl sm:text-3xl text-[#F47321]">
              Why people keep coming back
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141413] leading-tight">
              Built Around Listening, Care & Honest Craft
            </h2>

            <p className="text-sm sm:text-base text-[#141413]/80 leading-relaxed">
              At <strong>Real Looks Unisex Salon</strong>, we believe a great haircut or facial changes how you carry your whole day. Right near Vayuputra Fitness Club in Dani Bigha, Aurangabad, we bring together modern hairdressing, traditional beard craft, and gentle skin care for men and women.
            </p>

            <p className="text-sm text-[#141413]/75 leading-relaxed">
              We never guess or rush. Before a scissor touches your hair, we talk about your daily routine, how much time you like spending on styling, and what naturally suits your face—so your look still feels great weeks after you leave.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-4 rounded-xl glass-surface space-y-1.5">
                <HeartHandshake className="w-5 h-5 text-[#F47321]" />
                <h3 className="text-xs font-bold text-[#141413]">We Listen First</h3>
                <p className="text-[11px] text-[#141413]/70 leading-relaxed">
                  Every visit starts with a real conversation about your hair and comfort.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-surface space-y-1.5">
                <ShieldCheck className="w-5 h-5 text-[#141413]" />
                <h3 className="text-xs font-bold text-[#141413]">Sanitized Tools</h3>
                <p className="text-[11px] text-[#141413]/70 leading-relaxed">
                  UV-cleaned scissors, fresh blades, and single-use neck wraps every time.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-surface space-y-1.5">
                <Award className="w-5 h-5 text-[#F47321]" />
                <h3 className="text-xs font-bold text-[#141413]">Genuine Products</h3>
                <p className="text-[11px] text-[#141413]/70 leading-relaxed">
                  Formaldehyde-free hair care and skin-safe formulas you can trust.
                </p>
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
