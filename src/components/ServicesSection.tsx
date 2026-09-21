import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Sparkles, ChevronRight, Scissors, ChevronDown, ChevronUp, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/salonData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair Cuts & Styling' },
    { id: 'grooming', label: "Beard & Grooming" },
    { id: 'facial', label: 'Skin & Facials' },
    { id: 'spa', label: 'Botox & Hair Spa' },
    { id: 'bridal', label: 'Bridal & Occasion' },
  ];

  const filtered = SERVICES.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const displayedServices = showAll ? filtered : filtered.slice(0, 5);

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4C5B2E]/10 border border-[#4C5B2E]/25 text-[#2F3B1A] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <Scissors className="w-3.5 h-3.5 text-[#D6A838]" />
          <span>Services Designed For You</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#192018] tracking-tight">
          Couture Grooming & Hair Artistry
        </h2>

        <p className="mt-3 text-base text-[#677565] max-w-2xl mx-auto">
          Every service is customized with organic botanical formulations, scalp rituals, and precision styling for men and women.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#2F3B1A] text-[#FFF4BD] shadow-sm'
                  : 'bg-white/80 hover:bg-white text-[#3D483B] border border-[#4C5B2E]/15'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clandestine-Style Interactive Service Rows */}
      <div className="space-y-3.5">
        <AnimatePresence mode="popLayout">
          {displayedServices.map((service, idx) => {
            const isHovered = hoveredServiceId === service.id;
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                onMouseEnter={() => setHoveredServiceId(service.id)}
                onMouseLeave={() => setHoveredServiceId(null)}
                className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-300 border ${
                  isHovered
                    ? 'bg-white shadow-xl border-[#D6A838]/60 translate-x-1 sm:translate-x-2'
                    : 'bg-white/75 backdrop-blur-md border-[#4C5B2E]/15 hover:bg-white/95 shadow-sm'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  
                  {/* Left: Thumbnail & Service Info */}
                  <div className="flex items-start sm:items-center gap-4 flex-1">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-[#2F3B1A] border border-[#4C5B2E]/20 shadow-xs">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div className="space-y-1 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className={`font-serif-title text-base sm:text-xl font-bold transition-colors ${
                          isHovered ? 'text-[#C29324]' : 'text-[#192018]'
                        }`}>
                          {service.name}
                        </h3>

                        <span className={`badge badge-sm text-[10px] font-bold border-none ${
                          service.targetGender === 'Men'
                            ? 'bg-[#89CFF0]/25 text-[#14486D]'
                            : service.targetGender === 'Women'
                            ? 'bg-[#F5D77F]/30 text-[#634705]'
                            : 'bg-[#86D6B9]/25 text-[#0D8F8B]'
                        }`}>
                          {service.targetGender}
                        </span>

                        {service.isPopular && (
                          <span className="badge badge-sm bg-gradient-to-r from-[#FFF4BD] to-[#F5D77F] text-[#634705] font-bold text-[10px] border border-[#D6A838]/40">
                            ★ Popular
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-[#677565] max-w-2xl leading-relaxed">
                        {service.description}
                      </p>

                      {service.includes && (
                        <div className="hidden sm:flex flex-wrap items-center gap-2 pt-1">
                          {service.includes.map((inc, i) => (
                            <span key={i} className="text-[10px] text-[#4C5B2E] font-medium flex items-center gap-0.5">
                              <Check className="w-3 h-3 text-[#12B5AF]" /> {inc}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right: Duration, Price & Action CTA */}
                  <div className="flex items-center justify-between lg:justify-end gap-6 pt-3 lg:pt-0 border-t lg:border-t-0 border-black/05 flex-shrink-0">
                    <div className="text-left lg:text-right">
                      <div className="flex items-center lg:justify-end gap-1 text-xs text-[#677565] font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#52A296]" />
                        <span>{service.durationMinutes} mins</span>
                      </div>
                      <span className="text-xl sm:text-2xl font-serif font-extrabold text-[#192018] block mt-0.5">
                        ₹{service.price}
                      </span>
                    </div>

                    <button
                      onClick={() => onSelectService(service.id)}
                      className={`px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase transition-all flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95 ${
                        isHovered
                          ? 'bg-gradient-to-r from-[#D6A838] to-[#C29324] text-[#1F1703] shadow-md scale-105'
                          : 'bg-[#2F3B1A] text-[#FFF4BD] hover:bg-[#4C5B2E]'
                      }`}
                    >
                      <span>Book</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Show More / Show Less Toggle (Clandestine Style) */}
      {filtered.length > 5 && (
        <div className="text-center pt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 hover:bg-white text-[#2F3B1A] border border-[#4C5B2E]/30 font-bold text-xs tracking-wider uppercase transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-95"
          >
            <span>{showAll ? 'Show Less Services' : `Show All ${filtered.length} Services`}</span>
            {showAll ? <ChevronUp className="w-4 h-4 text-[#D6A838]" /> : <ChevronDown className="w-4 h-4 text-[#D6A838]" />}
          </button>
        </div>
      )}

    </section>
  );
};
