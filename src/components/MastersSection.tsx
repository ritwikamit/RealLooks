import React from 'react';
import { motion } from 'motion/react';
import { Award, Star, Calendar, Sparkles, Scissors, Heart, ShieldCheck } from 'lucide-react';
import { STYLISTS } from '../data/salonData';
import { Stylist } from '../types';

interface MastersSectionProps {
  onSelectMaster: (stylistId: string) => void;
}

export const MastersSection: React.FC<MastersSectionProps> = ({ onSelectMaster }) => {
  // Filter out the generic "any" entry for the showcase
  const masterStylists = STYLISTS.filter(s => s.id !== 'any');

  return (
    <section id="masters" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4C5B2E]/10 border border-[#4C5B2E]/25 text-[#2F3B1A] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <Award className="w-3.5 h-3.5 text-[#D6A838]" />
          <span>Master Artistry</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#192018] tracking-tight">
          Meet Our Masters
        </h2>

        <p className="mt-3 text-base text-[#677565]">
          Certified senior stylists, beard sculptors, and skin aestheticians dedicated to crafting your signature confidence.
        </p>
      </div>

      {/* Masters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {masterStylists.map((master, idx) => (
          <motion.div
            key={master.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="group relative rounded-3xl overflow-hidden bg-white/80 backdrop-blur-md border border-[#4C5B2E]/20 hover:border-[#D6A838]/60 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Image Frame */}
            <div className="relative aspect-[4/4.5] overflow-hidden bg-[#2F3B1A]">
              <img
                src={master.avatar}
                alt={master.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#192018]/90 via-[#192018]/30 to-transparent" />

              {/* Experience Badge */}
              <div className="absolute top-4 left-4">
                <div className="badge badge-lg bg-white/95 backdrop-blur-md border border-[#D6A838]/40 text-[#2F3B1A] font-bold text-xs py-3 px-3 shadow-md gap-1">
                  <Sparkles className="w-3 h-3 text-[#D6A838]" />
                  <span>{master.experienceYears}+ Years Exp.</span>
                </div>
              </div>

              {/* Rating Pill */}
              <div className="absolute top-4 right-4">
                <div className="badge badge-lg bg-gradient-to-r from-[#FFF4BD] to-[#F5D77F] border border-[#D6A838]/50 text-[#634705] font-bold text-xs py-3 px-3 shadow-md gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#D6A838] text-[#D6A838]" />
                  <span>{master.rating || 4.9}</span>
                </div>
              </div>

              {/* Name and Role Overlay */}
              <div className="absolute bottom-4 inset-x-5 text-white">
                <h3 className="text-xl sm:text-2xl font-serif-title font-bold text-[#FAF8F5]">
                  {master.name}
                </h3>
                <p className="text-xs text-[#FFF2A8] font-semibold mt-0.5 tracking-wide">
                  {master.role}
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="p-2.5 rounded-xl bg-[#4C5B2E]/06 border border-[#4C5B2E]/15">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#4C5B2E] flex items-center gap-1.5 mb-1">
                    <Scissors className="w-3 h-3 text-[#D6A838]" />
                    <span>Specialty</span>
                  </p>
                  <p className="text-xs font-semibold text-[#192018]">
                    {master.specialty}
                  </p>
                </div>

                <p className="text-xs text-[#677565] leading-relaxed">
                  {master.bio}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectMaster(master.id)}
                  className="w-full py-3 rounded-xl bg-[#2F3B1A] hover:bg-[#4C5B2E] text-[#FFF4BD] font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md active:scale-95"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#D6A838]" />
                  <span>Book with {master.name.split(' ')[0]}</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
