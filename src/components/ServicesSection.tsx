import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, ChevronDown, ChevronUp, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/salonData';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hairdressing' },
    { id: 'facial', label: 'Facial & Glow' },
    { id: 'spa', label: 'Botox & Treatments' },
    { id: 'bridal', label: 'Bridal & Makeup' },
    { id: 'grooming', label: 'Grooming & Shave' },
  ];

  const filtered = SERVICES.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const displayedServices = showAll ? filtered : filtered.slice(0, 5);

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header (Clandestine Style) */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#242424] text-[#8D43F4] text-xs font-semibold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#8D43F4]" />
          <span>Services</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fafafa] tracking-tight">
          Indulge in Our Exquisite Range of Services
        </h2>

        <p className="mt-4 text-base text-[#aaaaaa] max-w-2xl mx-auto leading-relaxed">
          From tailored hair design and nanoplastia restorative therapies to rejuvenating 24K facials, crafted for ultimate elevation.
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
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#8D43F4] text-white shadow-[0_0_15px_rgba(141,67,244,0.4)]'
                  : 'bg-[#121212] hover:bg-[#1c1c1c] text-[#aaaaaa] hover:text-white border border-[#242424]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clandestine-Style Interactive Service Rows */}
      <div className="space-y-3">
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
                transition={{ duration: 0.25, delay: idx * 0.04 }}
                onMouseEnter={() => setHoveredServiceId(service.id)}
                onMouseLeave={() => setHoveredServiceId(null)}
                className={`group relative rounded-xl p-4 sm:p-5 transition-all duration-300 border cursor-pointer ${
                  isHovered
                    ? 'bg-[#141414] border-[#8D43F4]/60 shadow-[0_4px_30px_rgba(141,67,244,0.18)] translate-x-1 sm:translate-x-2'
                    : 'bg-[#0d0d0d] border-[#1c1c1c] hover:border-[#282828]'
                }`}
                onClick={() => onSelectService(service.id)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  {/* Left: Thumbnail & Service Info */}
                  <div className="flex items-start sm:items-center gap-4 flex-1">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 bg-[#141414] border border-[#262626]">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-[#fafafa] group-hover:text-white transition-colors">
                          {service.name}
                        </h3>
                        {service.isPopular && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-[#8D43F4]/20 text-[#c89fff] border border-[#8D43F4]/40">
                            Popular
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-[#888888] line-clamp-1 max-w-xl">
                        {service.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-[#777777] pt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#8D43F4]" />
                          {service.durationMinutes} mins
                        </span>
                        <span>•</span>
                        <span className="capitalize">{service.targetGender}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Pricing & Book CTA */}
                  <div className="flex items-center justify-between sm:justify-end gap-5 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#1c1c1c]">
                    <div className="text-left sm:text-right">
                      <span className="text-xs text-[#777777] block uppercase tracking-wider">Starts at</span>
                      <span className="text-lg sm:text-xl font-bold text-[#fafafa]">
                        ₹{service.price}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectService(service.id);
                      }}
                      className="px-4 py-2 rounded-lg bg-[#8D43F4] text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_14px_rgba(141,67,244,0.35)] hover:bg-[#7b2fe0] hover:shadow-[0_0_20px_rgba(141,67,244,0.55)] cursor-pointer flex items-center gap-1.5"
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

      {/* Show More / Show Less Toggle Button */}
      {filtered.length > 5 && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2.5 rounded-full bg-[#121212] hover:bg-[#1a1a1a] border border-[#262626] text-[#e1e1e1] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>{showAll ? 'Show Fewer Services' : `View All Services (${filtered.length})`}</span>
            {showAll ? <ChevronUp className="w-4 h-4 text-[#8D43F4]" /> : <ChevronDown className="w-4 h-4 text-[#8D43F4]" />}
          </button>
        </div>
      )}
    </section>
  );
};
