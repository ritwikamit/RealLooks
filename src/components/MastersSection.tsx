import React from 'react';
import { motion } from 'motion/react';
import { Award, Star, Calendar, Scissors, Sparkles, CheckCircle2 } from 'lucide-react';
import { STYLISTS } from '../data/salonData';

interface MastersSectionProps {
  onSelectMaster: (stylistId: string) => void;
}

export const MastersSection: React.FC<MastersSectionProps> = ({ onSelectMaster }) => {
  const masterStylists = STYLISTS.filter(s => s.id !== 'any');

  return (
    <section id="masters" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full lucid-glass text-[#0D8F8B] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <Award className="w-3.5 h-3.5 text-[#D6A838]" />
          <span>Artisans of Beauty</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#192018] tracking-tight">
          Meet Our Master Stylists & Colorists
        </h2>

        <p className="mt-3 text-base text-[#677565] max-w-2xl mx-auto leading-relaxed">
          Certified specialists dedicated to creating your signature look with hospital-grade sterilization protocols and organic formulations.
        </p>
      </div>

      {/* Masters Grid (4-column luxury layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {masterStylists.map((master, idx) => (
          <motion.div
            key={master.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="group relative rounded-3xl overflow-hidden lucid-glass-card border border-white/80 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Image Frame */}
            <div className="relative aspect-[3/3.8] overflow-hidden bg-[#FAF9F5]">
              <img
                src={master.avatar}
                alt={master.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              {/* Rating Pill */}
              <div className="absolute top-3.5 right-3.5">
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#D6A838]/30 text-[#8E680E] text-xs font-bold shadow-xs">
                  <Star className="w-3 h-3 fill-current text-[#D6A838]" />
                  <span>{master.rating || 5.0}</span>
                </div>
              </div>

              {/* Experience Badge */}
              <div className="absolute bottom-3 left-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white/95 backdrop-blur-md border border-white/20">
                  {master.experienceYears}+ Years Exp
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#192018] group-hover:text-[#0D8F8B] transition-colors">
                    {master.name}
                  </h3>
                  <p className="text-xs text-[#2B78AE] font-bold tracking-wide">
                    {master.role}
                  </p>
                </div>

                <p className="text-xs text-[#677565] line-clamp-2 leading-relaxed">
                  {master.bio}
                </p>

                {/* Specialties Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {master.specialties?.slice(0, 2).map((spec, i) => (
                    <span 
                      key={i}
                      className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#12B5AF]/10 text-[#0D8F8B] border border-[#12B5AF]/20"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action CTA Button */}
              <button
                onClick={() => onSelectMaster(master.id)}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#D6A838] to-[#C29324] hover:from-[#C29324] hover:to-[#8E680E] text-[#1F1703] text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book With {master.name.split(' ')[0]}</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
