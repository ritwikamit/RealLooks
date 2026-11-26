import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Check, Scissors } from 'lucide-react';
import { SERVICES } from '../data/salonData';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'hair', label: 'Hair Cuts & Color' },
  { id: 'grooming', label: 'Beard & Grooming' },
  { id: 'facial', label: 'Skin & Facials' },
  { id: 'spa', label: 'Hair Spa & Botox' },
  { id: 'bridal', label: 'Bridal & Groom' },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered = SERVICES.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="font-script text-3xl sm:text-4xl text-[#6061B6] mb-1">
          Tailored to how you want to feel
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00105B] tracking-tight">
          What We Do Best
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-[#00105B]/70">
          Honest prices, clean tools, and unhurried care—whether it’s a 30-minute refresh or your big wedding day.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#00105B] text-[#FCF9EC] gold-border-btn'
                  : 'glass-surface text-[#00105B]/80 hover:bg-[#C9B5E0]/45'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((service) => (
          <motion.article
            key={service.id}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="card glass-surface rounded-2xl overflow-hidden flex flex-col justify-between"
          >
            <figure className="relative h-44 overflow-hidden">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00105B]/80 via-transparent to-transparent" />

              <div className="absolute top-3 left-3 flex items-center gap-1.5">
                <span className="px-2.5 py-0.5 rounded-md bg-[#FCF9EC]/90 backdrop-blur-sm text-[#00105B] text-[10px] font-bold uppercase">
                  {service.targetGender}
                </span>
                {service.isPopular && (
                  <span className="px-2.5 py-0.5 rounded-md bg-[#6061B6] border border-[#D4AF37]/70 text-[#FCF9EC] text-[10px] font-bold uppercase">
                    Popular
                  </span>
                )}
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-[#FCF9EC]">
                <span className="text-2xl font-extrabold text-[#FCF9EC]">
                  ₹{service.price}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold bg-[#00105B]/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                  <Clock className="w-3 h-3 text-[#C9B5E0]" />
                  {service.durationMinutes} min
                </span>
              </div>
            </figure>

            <div className="card-body p-5 flex-1 flex flex-col justify-between gap-4">
              <div>
                <h3 className="card-title text-lg font-bold text-[#00105B]">
                  {service.name}
                </h3>
                <p className="text-xs text-[#00105B]/70 mt-1.5 leading-relaxed">
                  {service.description}
                </p>

                {service.includes && (
                  <ul className="mt-3 space-y-1">
                    {service.includes.slice(0, 3).map((inc, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#00105B]/80 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#6061B6] flex-shrink-0" strokeWidth={2.3} />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                type="button"
                onClick={() => onSelectService(service.id)}
                className="btn w-full bg-[#C9B5E0]/55 hover:bg-[#00105B] hover:text-[#FCF9EC] text-[#00105B] font-bold text-xs uppercase tracking-wider rounded-xl glass-btn gold-border-btn"
              >
                <Scissors className="w-3.5 h-3.5" strokeWidth={2} />
                <span>Book This</span>
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
