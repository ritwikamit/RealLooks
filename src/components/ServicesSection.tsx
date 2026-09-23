import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Sparkles, Check, ChevronRight, Scissors } from 'lucide-react';
import { SERVICES } from '../data/salonData';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'hair', label: 'Hair Cuts & Styling' },
    { id: 'grooming', label: "Beard & Men's Grooming" },
    { id: 'facial', label: 'Skin & Facial Glow' },
    { id: 'spa', label: 'Hair Spa & Botox' },
    { id: 'bridal', label: 'Bridal & Occasion' },
  ];

  const filtered = SERVICES.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full lucid-glass text-[#0D8F8B] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <Scissors className="w-3.5 h-3.5 text-[#D6A838]" />
          <span>Services Designed For You</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#192018] tracking-tight">
          Couture Hair, Grooming & Beauty
        </h2>
        <p className="mt-3 text-base text-[#677565] max-w-2xl mx-auto">
          Every treatment is custom-tailored with dermatologically tested products, precision craft, and calming scalp rituals.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'glossy-olive-btn text-white shadow-xs'
                  : 'lucid-glass text-[#3D483B] hover:bg-white/90'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services Cards Grid with Lucid Glassmorphic styling */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(service => (
          <motion.div
            key={service.id}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="group lucid-glass-card rounded-3xl overflow-hidden flex flex-col justify-between hover:scale-[1.01]"
          >
            {/* Service Image Header */}
            <div className="relative h-48 overflow-hidden rounded-t-3xl">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              
              {/* Badges */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider backdrop-blur-md ${
                  service.targetGender === 'Men'
                    ? 'bg-[#89CFF0]/85 text-[#14486D] border border-white/60'
                    : service.targetGender === 'Women'
                    ? 'bg-[#F5D77F]/90 text-[#594002] border border-white/60'
                    : 'bg-white/90 text-[#2F3B1A] border border-white/60'
                }`}>
                  {service.targetGender}
                </span>
                {service.isPopular && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md glossy-gold-badge text-[#4A3502] flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-[#C29324]" /> Popular
                  </span>
                )}
              </div>

              {/* Price & Duration Overlaid with Glassmorphism */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between text-white">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-white/80 font-bold block">Starting at</span>
                  <span className="text-2xl font-serif font-extrabold text-[#FFF2A8] drop-shadow-sm">
                    ₹{service.price}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 shadow-2xs">
                  <Clock className="w-3 h-3 text-[#FFF2A8]" />
                  <span>{service.durationMinutes} min</span>
                </div>
              </div>
            </div>

            {/* Service Content Details */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-serif font-bold text-[#192018] group-hover:text-[#0D8F8B] transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs text-[#677565] mt-2 leading-relaxed">
                  {service.description}
                </p>

                {/* Inclusions List */}
                {service.includes && service.includes.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-black/5 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#52A296] block">
                      Includes:
                    </span>
                    {service.includes.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#3D483B]">
                        <Check className="w-3.5 h-3.5 text-[#D6A838] flex-shrink-0" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="text-xs text-[#677565]">
                  Category: <strong className="text-[#2F3B1A]">{service.categoryName}</strong>
                </span>
                <button
                  onClick={() => onSelectService(service.id)}
                  className="px-4 py-2 rounded-xl glossy-gold-btn text-[#4A3502] font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/80 shadow-2xs"
                >
                  <span>Book This</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#4A3502]" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
