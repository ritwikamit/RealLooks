import React from 'react';
import { MessageSquare } from 'lucide-react';
import { STORE_PRODUCTS, buildWhatsAppUrl } from '../data/salonData';

export const StoreSection: React.FC = () => {
  return (
    <section id="store" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-block px-3 py-1 rounded-md bg-[#B4D7CD] border-2 border-[#141413] text-[#141413] text-xs font-extrabold uppercase tracking-wider mb-3">
          Salon Shop
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">
          Take-Home Hair & Skin Care
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#141413]/75">
          Genuine salon products we use in the studio—reserve on WhatsApp for easy pickup.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {STORE_PRODUCTS.map((prod) => (
          <article
            key={prod.id}
            className="card brutal-glass rounded-2xl overflow-hidden flex flex-col justify-between"
          >
            <figure className="relative h-52 overflow-hidden border-b-2 border-[#141413]">
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {prod.tag && (
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-[#FFEEB3] border border-[#141413] text-[#141413] text-[10px] font-extrabold uppercase">
                  {prod.tag}
                </span>
              )}
              <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-[#FFFDF7] border border-[#141413] text-[#141413] text-[10px] font-extrabold">
                {prod.volume}
              </span>
            </figure>

            <div className="card-body p-5 flex-1 flex flex-col justify-between gap-4">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#F47321]">
                  {prod.category}
                </span>
                <h3 className="text-base font-extrabold text-[#141413] mt-0.5">{prod.name}</h3>
                <p className="text-xs text-[#141413]/75 mt-1.5 leading-relaxed">{prod.description}</p>
              </div>

              <div className="pt-3 border-t-2 border-[#141413]/10 flex items-center justify-between gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-extrabold text-[#141413]">₹{prod.price}</span>
                  {prod.oldPrice && (
                    <span className="text-xs text-[#141413]/50 line-through">₹{prod.oldPrice}</span>
                  )}
                </div>

                <a
                  href={buildWhatsAppUrl(
                    `Hello Real Looks Salon, I'd like to reserve "${prod.name}" (₹${prod.price}) for pickup.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm bg-[#F47321] hover:bg-[#e06314] text-[#141413] font-extrabold text-xs rounded-xl brutal-btn px-3.5"
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
