import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle, MessageSquareQuote } from 'lucide-react';
import { REVIEWS } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D6A838]/15 border border-[#D6A838]/30 text-[#634705] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <Star className="w-3.5 h-3.5 fill-[#D6A838] text-[#D6A838]" />
          <span>Local Client Experiences</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#192018] tracking-tight">
          Loved in Aurangabad, Bihar
        </h2>

        <p className="mt-3 text-base text-[#677565]">
          Verified reviews from clients who trust Real Looks for precision styling, hair botox, and special celebrations.
        </p>
      </div>

      {/* Testimonials Grid (Clandestine Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {REVIEWS.map((rev, idx) => (
          <motion.div
            key={rev.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="rounded-3xl p-6 bg-white/85 backdrop-blur-md border border-[#4C5B2E]/15 hover:border-[#D6A838]/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Quote Icon & Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-[#D6A838]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3.5 h-3.5 ${i < Math.floor(rev.rating) ? 'fill-[#D6A838] text-[#D6A838]' : 'text-black/15'}`} 
                    />
                  ))}
                  <span className="text-xs font-bold text-[#192018] ml-1">{rev.rating}.0</span>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#4C5B2E]/10 flex items-center justify-center text-[#4C5B2E]">
                  <MessageSquareQuote className="w-4 h-4" />
                </div>
              </div>

              {/* Comment */}
              <p className="text-xs sm:text-sm text-[#3D483B] italic leading-relaxed">
                "{rev.comment}"
              </p>
            </div>

            {/* Author Footer */}
            <div className="mt-6 pt-4 border-t border-black/06 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4C5B2E] to-[#2F3B1A] text-[#FFF4BD] flex items-center justify-center font-bold text-xs shadow-2xs">
                  {rev.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-xs font-bold text-[#192018] flex items-center gap-1">
                    <span>{rev.name}</span>
                    {rev.verified && (
                      <span title="Verified Client" className="inline-flex items-center">
                        <CheckCircle className="w-3 h-3 text-[#12B5AF]" />
                      </span>
                    )}
                  </h4>
                  <p className="text-[10px] text-[#52A296] font-semibold mt-0.5">
                    {rev.service}
                  </p>
                </div>
              </div>

              <span className="text-[10px] text-[#677565] font-medium">
                {rev.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
