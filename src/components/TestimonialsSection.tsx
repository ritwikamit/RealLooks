import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full lucid-glass text-[#8E680E] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <Star className="w-3.5 h-3.5 fill-[#D6A838] text-[#D6A838]" />
          <span>Local Client Experiences</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-[#192018] tracking-tight">
          Loved in Aurangabad, Bihar
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#677565]">
          Verified reviews from clients who trust Real Looks for their signature grooming and special occasions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="p-6 rounded-3xl lucid-glass-card flex flex-col justify-between"
          >
            <div>
              {/* Rating stars with glossy gold */}
              <div className="flex items-center gap-1 text-[#D6A838] mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < Math.floor(rev.rating) ? 'fill-[#D6A838] text-[#D6A838]' : 'text-black/15'}`} 
                  />
                ))}
                <span className="text-xs font-extrabold text-[#2F3B1A] ml-1.5">{rev.rating}.0</span>
              </div>

              <p className="text-xs sm:text-sm text-[#3D483B] italic leading-relaxed font-normal">
                "{rev.comment}"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-[#192018] flex items-center gap-1">
                  {rev.name}
                  {rev.verified && (
                    <span title="Verified Client" className="inline-flex items-center">
                      <CheckCircle className="w-3.5 h-3.5 text-[#12B5AF]" />
                    </span>
                  )}
                </h4>
                <p className="text-[10px] text-[#52A296] font-bold mt-0.5">
                  {rev.service}
                </p>
              </div>
              <span className="text-[10px] text-[#677565] font-medium">
                {rev.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
