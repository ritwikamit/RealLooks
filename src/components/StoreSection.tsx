import React from 'react';
import { MessageSquare } from 'lucide-react';
import { STORE_PRODUCTS, buildWhatsAppUrl } from '../data/salonData';

export const StoreSection: React.FC = () => {
  return (
    <section id="store" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-block px-3 py-1 rounded-lg bg-[#B4D7CD]/65 text-[#141413] text-xs font-bold uppercase tracking-wider mb-3">
          Salon Shop
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">
          Take-Home Hair & Skin Care
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#141413]/70">
          Genuine salon products we use in the studio—reserve on WhatsApp for easy pickup.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {STORE_PRODUCTS.map((prod) => (
          <article
            key={prod.id}
            className="card glass-surface rounded-2xl overflow-hidden flex flex-col justify-between"
          >
            <figure className="relative h-52 overflow-hidden">
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {prod.tag && (
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-[#FFEEB3]/90 backdrop-blur-sm text-[#141413] text-[10px] font-bold uppercase">
                  {prod.tag}
                </span>
              )}
              <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-md bg-white/85 backdrop-blur-sm text-[#141413] text-[10px] font-bold">
                {prod.volume}
              </span>
            </figure>

            <div className="card-body p-5 flex-1 flex flex-col justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F47321]">
                  {prod.category}
                </span>
                <h3 className="text-base font-bold text-[#141413] mt-0.5">{prod.name}</h3>
                <p className="text-xs text-[#141413]/70 mt-1.5 leading-relaxed">{prod.description}</p>
              </div>

              <div className="pt-3 border-t border-[#141413]/10 flex items-center justify-between gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-extrabold text-[#141413]">₹{prod.price}</span>
                  {prod.oldPrice && (
                    <span className="text-xs text-[#141413]/45 line-through">₹{prod.oldPrice}</span>
                  )}
                </div>

                <a
                  href={buildWhatsAppUrl(
                    `Hello Real Looks Salon, I'd like to reserve "${prod.name}" (₹${prod.price}) for pickup.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-[#F47321] hover:bg-[#e06314] text-white border-0 font-bold text-xs rounded-xl glass-btn px-3.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Reserve</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
