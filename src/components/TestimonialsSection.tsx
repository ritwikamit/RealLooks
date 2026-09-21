import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareQuote, CheckCircle, Sparkles } from 'lucide-react';
import { REVIEWS } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#242424] text-[#8D43F4] text-xs font-semibold uppercase tracking-widest mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#8D43F4]" />
          <span>Testimonials</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fafafa] tracking-tight">
          What Our Clients Say
        </h2>

        <p className="mt-4 text-base text-[#aaaaaa] leading-relaxed">
          Hear from our delighted clients about their bespoke hair transformations, bridal elegance, and skin rituals.
        </p>
      </div>

      {/* Testimonials Grid (Clandestine Style 3-card layout) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((rev, idx) => {
          const authorName = rev.author || rev.name || 'Verified Client';
          const serviceName = rev.serviceTaken || rev.service || 'Salon Service';

          return (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="rounded-2xl p-6 bg-[#0d0d0d] border border-[#1f1f1f] hover:border-[#8D43F4]/50 shadow-xl hover:shadow-[0_10px_35px_rgba(141,67,244,0.12)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon & Star Rating */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(rev.rating) ? 'fill-current text-amber-400' : 'text-[#333]'}`} 
                      />
                    ))}
                    <span className="text-xs font-bold text-[#fafafa] ml-1.5">{rev.rating}.0</span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-[#181818] border border-[#2a2a2a] flex items-center justify-center text-[#8D43F4]">
                    <MessageSquareQuote className="w-4 h-4" />
                  </div>
                </div>

                {/* Review Comment */}
                <p className="text-sm text-[#cccccc] italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Footer with Clandestine Testimonial Avatar */}
              <div className="mt-6 pt-4 border-t border-[#1a1a1a] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-[#2a2a2a]">
                    {rev.avatar ? (
                      <img 
                        src={rev.avatar} 
                        alt={authorName} 
                        className="w-full h-full object-cover" 
                      />
                    ) : (
                      <div className="w-full h-full bg-[#8D43F4] text-white flex items-center justify-center font-bold text-sm">
                        {authorName.charAt(0)}
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#fafafa] flex items-center gap-1">
                      <span>{authorName}</span>
                      {rev.verified && (
                        <span title="Verified Client" className="inline-flex items-center">
                          <CheckCircle className="w-3.5 h-3.5 text-[#8D43F4]" />
                        </span>
                      )}
                    </h4>
                    <p className="text-[11px] text-[#8D43F4] font-medium mt-0.5">
                      {serviceName}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] text-[#777777] font-medium">
                  {rev.date}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
};
