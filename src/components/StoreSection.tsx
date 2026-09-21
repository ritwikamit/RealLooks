import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Star, Sparkles, MessageSquare, Check } from 'lucide-react';
import { STORE_PRODUCTS, SALON_INFO } from '../data/salonData';

export const StoreSection: React.FC = () => {
  const handleInquireProduct = (productName: string) => {
    const text = encodeURIComponent(`Hello Real Looks Salon, I would like to reserve the product: "${productName}" from your salon boutique.`);
    window.open(`https://wa.me/${SALON_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="store" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D6A838]/15 border border-[#D6A838]/30 text-[#634705] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <ShoppingBag className="w-3.5 h-3.5 text-[#C29324]" />
          <span>Salon Boutique</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#192018] tracking-tight">
          Professional Care at Home
        </h2>

        <p className="mt-3 text-base text-[#677565]">
          Maintain your salon-finished shine, hair botox repair, and skin luminosity between visits with our authentic salon formulas.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STORE_PRODUCTS.map((prod, idx) => (
          <motion.div
            key={prod.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group rounded-3xl overflow-hidden bg-white/85 backdrop-blur-md border border-[#4C5B2E]/15 hover:border-[#D6A838]/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-[#F2F0E8]">
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Badge */}
              {prod.badge && (
                <div className="absolute top-3 left-3">
                  <span className="badge badge-sm bg-[#4C5B2E] text-[#FFF4BD] font-bold text-[10px] border-none shadow-xs py-2 px-2.5">
                    {prod.badge}
                  </span>
                </div>
              )}

              {/* Volume Tag */}
              <div className="absolute top-3 right-3">
                <span className="badge badge-sm bg-white/90 backdrop-blur-sm text-[#2F3B1A] font-semibold text-[10px] border-none shadow-xs">
                  {prod.volume}
                </span>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 text-[#D6A838] mb-1.5">
                  <Star className="w-3.5 h-3.5 fill-[#D6A838] text-[#D6A838]" />
                  <span className="text-xs font-bold text-[#192018]">{prod.rating}</span>
                  <span className="text-[10px] text-[#677565] ml-1">Verified Salon Product</span>
                </div>

                <h3 className="text-base font-serif font-bold text-[#192018] group-hover:text-[#4C5B2E] transition-colors line-clamp-1">
                  {prod.name}
                </h3>

                <p className="text-[11px] text-[#52A296] font-semibold mt-0.5">
                  {prod.tagline}
                </p>

                <p className="text-xs text-[#677565] mt-2 line-clamp-2 leading-relaxed">
                  {prod.description}
                </p>
              </div>

              {/* Pricing & CTA */}
              <div className="pt-3 border-t border-black/06 flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-extrabold text-[#192018]">
                      ₹{prod.price}
                    </span>
                    {prod.originalPrice && (
                      <span className="text-xs text-[#677565] line-through">
                        ₹{prod.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-[9px] text-[#12B5AF] font-bold block uppercase tracking-wider">
                    In Salon Stock
                  </span>
                </div>

                <button
                  onClick={() => handleInquireProduct(prod.name)}
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#D6A838] to-[#C29324] hover:from-[#C29324] hover:to-[#8E680E] text-[#1F1703] font-bold text-[11px] tracking-wider uppercase transition-all shadow-xs hover:shadow-md flex items-center gap-1.5 cursor-pointer active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Reserve</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
