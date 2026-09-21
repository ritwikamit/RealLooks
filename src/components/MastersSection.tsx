import React from 'react';
import { motion } from 'motion/react';
import { Award, Star, Calendar, Scissors, ArrowRight, Sparkles } from 'lucide-react';
import { STYLISTS } from '../data/salonData';

interface MastersSectionProps {
  onSelectMaster: (stylistId: string) => void;
}

export const MastersSection: React.FC<MastersSectionProps> = ({ onSelectMaster }) => {
  const masterStylists = STYLISTS.filter(s => s.id !== 'any');

  return (
    <section id="masters" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#242424] text-[#8D43F4] text-xs font-semibold uppercase tracking-widest mb-4">
          <Award className="w-3.5 h-3.5 text-[#8D43F4]" />
          <span>Masters</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fafafa] tracking-tight">
          Meet Our Masters
        </h2>

        <p className="mt-4 text-base text-[#aaaaaa] max-w-2xl mx-auto leading-relaxed">
          Our team of exceptional professionals dedicated to creating your signature look with precision and botanical care.
        </p>
      </div>

      {/* Masters Grid (Clandestine Style 4-column layout) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {masterStylists.map((master, idx) => (
          <motion.div
            key={master.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative rounded-2xl overflow-hidden bg-[#0d0d0d] border border-[#1f1f1f] hover:border-[#8D43F4]/60 shadow-xl hover:shadow-[0_10px_35px_rgba(141,67,244,0.15)] transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Image Frame */}
            <div className="relative aspect-[3/3.8] overflow-hidden bg-[#141414]">
              <img
                src={master.avatar}
                alt={master.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-90" />

              {/* Rating Pill */}
              <div className="absolute top-3.5 right-3.5">
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-amber-400 text-xs font-bold">
                  <Star className="w-3 h-3 fill-current text-amber-400" />
                  <span>{master.rating || 5.0}</span>
                </div>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div>
                  <h3 className="text-lg font-bold text-[#fafafa] group-hover:text-white transition-colors">
                    {master.name}
                  </h3>
                  <p className="text-xs text-[#8D43F4] font-medium tracking-wide">
                    {master.role}
                  </p>
                </div>

                <p className="text-xs text-[#888888] line-clamp-3 leading-relaxed">
                  {master.bio}
                </p>

                {/* Specialties Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {master.specialties?.slice(0, 2).map((spec, i) => (
                    <span 
                      key={i}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-[#161616] text-[#aaaaaa] border border-[#262626]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action CTA Button */}
              <button
                onClick={() => onSelectMaster(master.id)}
                className="w-full py-2.5 rounded-xl bg-[#161616] hover:bg-[#8D43F4] text-[#e1e1e1] hover:text-white border border-[#282828] hover:border-transparent text-xs font-semibold uppercase tracking-wider transition-all duration-250 flex items-center justify-center gap-2 cursor-pointer group-hover:shadow-[0_0_15px_rgba(141,67,244,0.3)]"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
