import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, HeartHandshake, CheckCircle2, Award } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const AboutSection: React.FC = () => {
  const aboutImages = [
    '/images/clandestine/about-us/1.webp',
    '/images/clandestine/about-us/2.webp',
    '/images/clandestine/about-us/3.webp',
    '/images/clandestine/about-us/4.webp',
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Container with Clandestine Dark Aesthetics */}
      <div className="rounded-3xl border border-[#1f1f1f] p-6 sm:p-10 lg:p-14 bg-[#0a0a0a] shadow-2xl relative overflow-hidden">
        
        {/* Ambient Subtle Violet Glow */}
        <div 
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, #8D43F4 0%, transparent 80%)' }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          
          {/* Left Column: Clandestine 4-Image Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {aboutImages.map((img, i) => (
                <div 
                  key={i} 
                  className="relative aspect-square rounded-2xl overflow-hidden bg-[#141414] border border-[#222222] group shadow-md"
                >
                  <img
                    src={img}
                    alt={`Real Looks Studio ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
                </div>
              ))}
            </div>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-3 gap-2.5 text-center pt-2">
              <div className="p-3 rounded-xl bg-[#121212] border border-[#222222]">
                <span className="text-xl font-bold text-[#fafafa] block">4.9★</span>
                <span className="text-[10px] text-[#888888] font-medium">Google Rating</span>
              </div>
              <div className="p-3 rounded-xl bg-[#121212] border border-[#222222]">
                <span className="text-xl font-bold text-[#8D43F4] block">100%</span>
                <span className="text-[10px] text-[#888888] font-medium">UV Sterilized</span>
              </div>
              <div className="p-3 rounded-xl bg-[#121212] border border-[#222222]">
                <span className="text-xl font-bold text-[#fafafa] block">Unisex</span>
                <span className="text-[10px] text-[#888888] font-medium">Men & Women</span>
              </div>
            </div>
          </div>

          {/* Right Column: Salon Narrative & Hygiene Standards */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#242424] text-[#8D43F4] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#8D43F4]" />
              <span>About Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fafafa] leading-[1.15] tracking-tight">
              A Sanctuary Where Artistry & Care Converge
            </h2>

            <p className="text-sm sm:text-base text-[#aaaaaa] leading-relaxed font-normal">
              At <strong>Real Looks Unisex Salon</strong>, grooming is an art of personal expression. Situated conveniently near Vayuputra Fitness Club in Dani Bigha, Aurangabad, our studio merges contemporary hairdressing artistry, traditional beard craft, and dermatological skin aesthetics under one refined roof.
            </p>

            {/* Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#121212] border border-[#202020]">
                <ShieldCheck className="w-5 h-5 text-[#8D43F4] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#fafafa]">Hospital-Grade Hygiene</h4>
                  <p className="text-[11px] text-[#888888] mt-0.5">3-stage ultrasonic and medical autoclave tool sterilization before every service.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#121212] border border-[#202020]">
                <HeartHandshake className="w-5 h-5 text-[#8D43F4] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#fafafa]">Personalized Consultation</h4>
                  <p className="text-[11px] text-[#888888] mt-0.5">Every haircut, facial, and treatment is customized to your face profile and hair health.</p>
                </div>
              </div>
            </div>

            {/* Highlight quote */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#141414] to-[#121212] border border-[#242424] flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#8D43F4] flex-shrink-0" />
              <p className="text-xs font-medium text-[#cccccc]">
                "Look Good • Feel Good • Be You" — Dedicated to bringing world-class luxury salon experiences to Bihar.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
