import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data/salonData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-block px-3 py-1 rounded-md bg-[#FFEEB3] border-2 border-[#141413] text-[#141413] text-xs font-extrabold uppercase tracking-wider mb-3">
          Client Words
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">
          Trusted in Aurangabad
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#141413]/75">
          Real feedback from people who visit us for cuts, skin care, and weddings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {REVIEWS.map((rev) => (
          <article
            key={rev.id}
            className="p-5 rounded-2xl brutal-glass flex flex-col justify-between gap-4"
          >
            <div>
              <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#B4D7CD] border border-[#141413] text-[#141413] text-xs font-extrabold mb-3">
                {rev.rating.toFixed(1)} / 5.0
              </div>
              <p className="text-xs sm:text-sm text-[#141413]/85 leading-relaxed font-medium">
                “{rev.comment}”
              </p>
            </div>

            <div className="pt-3 border-t-2 border-[#141413]/10 flex items-center justify-between">
              <div>
                <h3 className="text-xs font-extrabold text-[#141413] flex items-center gap-1">
                  <span>{rev.name}</span>
                  {rev.verified && (
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F47321]" />
                  )}
                </h3>
                <p className="text-[11px] font-bold text-[#141413]/65 mt-0.5">
                  {rev.service}
                </p>
              </div>
              <span className="text-[10px] font-bold text-[#141413]/55">
                {rev.date}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
