import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, HeartHandshake, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { BlurReveal } from './BlurReveal';

export const AboutSection: React.FC = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
    >
      <div className="glass-cream rounded-3xl p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="/images/salon-hero-interior.webp"
                alt="Real Looks Unisex Salon Interior in Dani Bigha"
                className="w-full h-72 sm:h-80 object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="grid grid-cols-3 gap-2.5 text-center">
              <div className="p-3 rounded-xl glass-surface">
                <span className="text-lg font-extrabold text-[#00105B] block">4.5 / 5</span>
                <span className="text-[11px] font-semibold text-[#00105B]/65">Google Score</span>
              </div>
              <div className="p-3 rounded-xl bg-[#C9B5E0]/55 backdrop-blur-md">
                <span className="text-lg font-extrabold text-[#00105B] block">100%</span>
                <span className="text-[11px] font-semibold text-[#00105B]/65">Clean Tools</span>
              </div>
              <div className="p-3 rounded-xl bg-[#6061B6]/20 backdrop-blur-md">
                <span className="text-lg font-extrabold text-[#00105B] block">Unisex</span>
                <span className="text-[11px] font-semibold text-[#00105B]/65">Men & Women</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <BlurReveal>
              <p className="font-script text-3xl sm:text-4xl text-[#6061B6]">
                Why people keep coming back
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00105B] leading-tight mt-2">
                Built Around Listening, Care & Honest Craft
              </h2>

              <p className="text-sm sm:text-base text-[#00105B]/80 leading-relaxed mt-3">
                At <strong>Real Looks Unisex Salon</strong>, we believe a great haircut or facial changes how you carry your whole day. Right near Vayuputra Fitness Club in Dani Bigha, Aurangabad, we bring together modern hairdressing, traditional beard craft, and gentle skin care for men and women.
              </p>

              <p className="text-sm text-[#00105B]/75 leading-relaxed mt-2">
                We never guess or rush. Before a scissor touches your hair, we talk about your daily routine, how much time you like spending on styling, and what naturally suits your face—so your look still feels great weeks after you leave.
              </p>
            </BlurReveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-4 rounded-xl glass-surface space-y-1.5">
                <HeartHandshake className="w-5 h-5 text-[#6061B6]" />
                <h3 className="text-xs font-bold text-[#00105B]">We Listen First</h3>
                <p className="text-[11px] text-[#00105B]/70 leading-relaxed">
                  Every visit starts with a real conversation about your hair and comfort.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-surface space-y-1.5">
                <ShieldCheck className="w-5 h-5 text-[#00105B]" />
                <h3 className="text-xs font-bold text-[#00105B]">Sanitized Tools</h3>
                <p className="text-[11px] text-[#00105B]/70 leading-relaxed">
                  UV-cleaned scissors, fresh blades, and single-use neck wraps every time.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-surface space-y-1.5">
                <Award className="w-5 h-5 text-[#6061B6]" />
                <h3 className="text-xs font-bold text-[#00105B]">Genuine Products</h3>
                <p className="text-[11px] text-[#00105B]/70 leading-relaxed">
                  Formaldehyde-free hair care and skin-safe formulas you can trust.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#00105B]/75 pt-1">
              <MapPin className="w-4 h-4 text-[#6061B6] flex-shrink-0" />
              <span>{SALON_INFO.address}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
