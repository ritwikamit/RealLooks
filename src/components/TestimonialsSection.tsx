import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  return (
    <motion.section
      id="reviews"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20"
    >
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="font-script text-3xl sm:text-4xl text-[#6061B6] mb-1">
          Kind words from our chairs
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00105B] tracking-tight">
          Trusted Across Aurangabad
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#00105B]/70">
          Real stories from people who trust us with their everyday cuts, skin care, and wedding mornings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {REVIEWS.map((rev) => (
          <article
            key={rev.id}
            className="p-5 rounded-2xl glass-surface flex flex-col justify-between gap-4"
          >
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#C9B5E0]/55 text-[#00105B] text-xs font-bold mb-3">
                {rev.rating.toFixed(1)} / 5.0
              </div>
              <p className="text-xs sm:text-sm text-[#00105B]/80 leading-relaxed">
                “{rev.comment}”
              </p>
            </div>

            <div className="pt-3 border-t border-[#00105B]/10 flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold text-[#00105B] flex items-center gap-1">
                  <span>{rev.name}</span>
                  {rev.verified && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#6061B6]" />
                  )}
                </h3>
                <p className="text-[11px] font-semibold text-[#00105B]/60 mt-0.5">
                  {rev.service}
                </p>
              </div>
              <span className="text-[10px] font-semibold text-[#00105B]/50">
                {rev.date}
              </span>
            </div>
          </article>
        ))}
      </div>
    </motion.section>
  );
};
