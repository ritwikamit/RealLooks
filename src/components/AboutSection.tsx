import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Award, ShieldCheck, HeartHandshake, MapPin, CheckCircle2 } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Container with Lucid Glass & Brand Accents */}
      <div className="rounded-3xl border border-white/80 p-6 sm:p-10 lg:p-14 bg-white/80 backdrop-blur-md shadow-xl relative overflow-hidden">
        
        {/* Ambient Subtle Glows */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#89CFF0]/20 to-[#12B5AF]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#D6A838]/18 to-[#86D6B9]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* Left Column (5 cols): Clandestine Diced / Mosaic Image Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-3.5">
              
              {/* Image 1: Main Studio Atmosphere (tall) */}
              <div className="col-span-2 relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80"
                  alt="Real Looks Studio Interior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#192018]/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-[#FFF2A8] block">
                    Sanctuary Ambiance
                  </span>
                  <p className="text-xs font-serif font-bold text-white">
                    Dani Bigha, Aurangabad, Bihar
                  </p>
                </div>
              </div>

              {/* Image 2: Styling & Wash Station */}
              <div className="relative h-36 rounded-2xl overflow-hidden shadow-sm group">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=500&q=80"
                  alt="Salon Styling Chairs"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#192018]/70 to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white">
                  Wash & Rejuvenation
                </span>
              </div>

              {/* Image 3: Sterile Tools & Organic Products */}
              <div className="relative h-36 rounded-2xl overflow-hidden shadow-sm group">
                <img
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=500&q=80"
                  alt="Barber & Styling Craft"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#192018]/70 to-transparent" />
                <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white">
                  100% Sterile Tools
                </span>
              </div>

            </div>

            {/* Quick Stats Banner (DaisyUI Stats) */}
            <div className="grid grid-cols-3 gap-2.5 text-center pt-1">
              <div className="p-3 rounded-2xl bg-white/90 border border-[#4C5B2E]/15 shadow-2xs">
                <span className="text-xl font-serif font-extrabold text-[#2F3B1A] block">4.9★</span>
                <span className="text-[10px] text-[#677565] font-bold">Google Rating</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/90 border border-[#D6A838]/25 shadow-2xs">
                <span className="text-xl font-serif font-extrabold text-[#C29324] block">100%</span>
                <span className="text-[10px] text-[#677565] font-bold">UV Sterilized</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/90 border border-[#12B5AF]/25 shadow-2xs">
                <span className="text-xl font-serif font-extrabold text-[#0D8F8B] block">Unisex</span>
                <span className="text-[10px] text-[#677565] font-bold">Men & Women</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Editorial Salon Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4C5B2E]/10 border border-[#4C5B2E]/25 text-[#2F3B1A] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D6A838]" />
              <span>About Real Looks Unisex Salon</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#192018] leading-[1.15]">
              Crafting Signature Looks in Aurangabad, Bihar
            </h2>

            <p className="text-sm sm:text-base text-[#3D483B] leading-relaxed font-normal">
              At <strong>Real Looks Unisex Salon</strong>, grooming is not a rushed chore—it is an art of personal expression. Situated conveniently near Vayuputra Fitness Club in Dani Bigha, our studio merges contemporary hairdressing artistry, traditional beard craft, and dermatological skin aesthetics under one welcoming roof.
            </p>

            <p className="text-xs sm:text-sm text-[#677565] leading-relaxed font-normal">
              Every appointment starts with an individualized consultation before scissors touch hair. Whether you seek dimensional balayage highlights, hair botox rehabilitation, an executive fade, or a luminous 24K gold facial, our certified specialists are committed to your comfort, hygiene, and confidence.
            </p>

            {/* Quality Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/90 border border-[#4C5B2E]/15 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-[#4C5B2E] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-[#FFF4BD]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#192018]">Hospital-Grade Sterilization</h4>
                  <p className="text-[11px] text-[#677565] mt-0.5 leading-relaxed">
                    UV-sterilized tools, single-use neck strips, and fresh sanitization between every client.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white/90 border border-[#D6A838]/25 shadow-2xs">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#D6A838] to-[#C29324] text-[#1F1703] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Award className="w-4 h-4 text-[#1F1703]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#192018]">Certified Master Specialists</h4>
                  <p className="text-[11px] text-[#677565] mt-0.5 leading-relaxed">
                    Seasoned stylists trained in advanced hair chemistry, keratin science, and skin therapy.
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#677565]">
              <MapPin className="w-4 h-4 text-[#C29324] flex-shrink-0" />
              <span>{SALON_INFO.address}</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
