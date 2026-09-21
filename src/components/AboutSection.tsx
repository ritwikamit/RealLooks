import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Award, ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      <div className="lucid-glass rounded-3xl border border-white/80 p-8 sm:p-12 lg:p-16 shadow-[0_16px_40px_0_rgba(76,91,46,0.08)] relative overflow-hidden">
        
        {/* Soft background ambient organic glow in card: Sky Blue + Olive + Gold */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-[#89CFF0]/25 to-[#12B5AF]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-gradient-to-tr from-[#D6A838]/20 to-[#86D6B9]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-white/80 group">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80"
                alt="Real Looks Salon Interior Ambiance"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#192018]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFF2A8] block">
                  Studio Atmosphere
                </span>
                <p className="text-sm font-serif font-bold mt-0.5 text-white">
                  Climate-Controlled Sanctuary in Dani Bigha
                </p>
              </div>
            </div>

            {/* Quick Stats Banner with Lucid Glass */}
            <div className="grid grid-cols-3 gap-2.5 text-center">
              <div className="p-3.5 rounded-2xl lucid-glass border border-white/80">
                <span className="text-xl font-serif font-extrabold text-[#2F3B1A] block">4.5★</span>
                <span className="text-[10px] text-[#677565] font-bold">Google Rating</span>
              </div>
              <div className="p-3.5 rounded-2xl lucid-glass border border-white/80">
                <span className="text-xl font-serif font-extrabold text-[#C29324] block">100%</span>
                <span className="text-[10px] text-[#677565] font-bold">Sterile Tools</span>
              </div>
              <div className="p-3.5 rounded-2xl lucid-glass border border-white/80">
                <span className="text-xl font-serif font-extrabold text-[#0D8F8B] block">Unisex</span>
                <span className="text-[10px] text-[#677565] font-bold">Men & Women</span>
              </div>
            </div>
          </div>

          {/* Right Editorial Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full lucid-glass text-[#0D8F8B] text-xs font-bold uppercase tracking-wider shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D6A838]" />
              <span>About Real Looks Unisex Salon</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-[#192018] leading-tight">
              Crafting Signature Looks in Aurangabad, Bihar
            </h2>

            <p className="text-sm sm:text-base text-[#3D483B] leading-relaxed font-normal">
              At <strong>Real Looks Unisex Salon</strong>, we believe grooming is more than a routine—it is a confidence ritual. Situated conveniently near Vayuputra Fitness Club in Dani Bigha, our studio blends modern hairdressing artistry, traditional beard craft, and medical-grade aesthetics for both men and women.
            </p>

            <p className="text-sm text-[#677565] leading-relaxed font-normal">
              Every client receives a dedicated consultation before scissor touches hair or product meets skin. Whether you desire an executive fade, dimensional balayage highlights, hair botox rehabilitation, or a luminous 24K gold facial, our certified specialists are dedicated to your comfort and satisfaction.
            </p>

            {/* Key Quality Pillars with Lucid Glass */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl lucid-glass border border-white/80">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#4C5B2E] to-[#52A296] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#192018]">Hospital-Grade Sterilization</h4>
                  <p className="text-[11px] text-[#677565] mt-0.5 leading-relaxed">UV-sterilized scissors, razors, single-use neck strips, and fresh sanitization between clients.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl lucid-glass border border-white/80">
                <div className="w-8 h-8 rounded-xl glossy-gold-btn text-[#4A3502] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#192018]">Certified Specialists</h4>
                  <p className="text-[11px] text-[#677565] mt-0.5 leading-relaxed">Trained stylists with deep expertise in diverse hair textures and sensitive skin profiles.</p>
                </div>
              </div>
            </div>

            {/* Address callout */}
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
