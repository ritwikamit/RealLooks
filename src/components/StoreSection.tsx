import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Star, Sparkles, MessageSquare } from 'lucide-react';
import { STORE_PRODUCTS, SALON_INFO } from '../data/salonData';

export const StoreSection: React.FC = () => {
  const handleInquireProduct = (productName: string) => {
    const text = encodeURIComponent(`Hello Real Looks Salon, I would like to reserve the product: "${productName}" from your boutique.`);
    window.open(`https://wa.me/${SALON_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="store" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#242424] text-[#8D43F4] text-xs font-semibold uppercase tracking-widest mb-4">
          <ShoppingBag className="w-3.5 h-3.5 text-[#8D43F4]" />
          <span>Boutique</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fafafa] tracking-tight">
          Explore Our Curated Formulas
        </h2>

        <p className="mt-4 text-base text-[#aaaaaa] max-w-2xl mx-auto leading-relaxed">
          Maintain your salon-finished shine, hair botox repair, and skin luminosity with authentic professional treatments available in-salon.
        </p>
      </div>

      {/* Products Grid (Clandestine Style 6-product grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {STORE_PRODUCTS.map((prod, idx) => (
          <motion.div
            key={prod.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="group rounded-2xl overflow-hidden bg-[#0d0d0d] border border-[#1f1f1f] hover:border-[#8D43F4]/50 shadow-xl hover:shadow-[0_10px_35px_rgba(141,67,244,0.15)] transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-[#141414]">
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-80" />

              {/* Badges */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-[#8D43F4]/20 text-[#c89fff] border border-[#8D43F4]/40 backdrop-blur-md">
                  Botanical
                </span>
              </div>

              {/* Volume Tag */}
              <div className="absolute top-3 right-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/70 text-[#cccccc] border border-white/10 backdrop-blur-md">
                  {prod.volume}
                </span>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-1.5">
                <span className="text-[11px] text-[#8D43F4] font-medium tracking-wide uppercase">
                  {prod.category}
                </span>

                <h3 className="text-base font-bold text-[#fafafa] group-hover:text-white transition-colors">
                  {prod.name}
                </h3>

                <p className="text-xs text-[#888888] line-clamp-2 leading-relaxed pt-1">
                  {prod.description}
                </p>
              </div>

              {/* Pricing & Inquire Button */}
              <div className="pt-3 border-t border-[#1a1a1a] flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-[#fafafa]">
                      ₹{prod.price}
                    </span>
                    {prod.oldPrice && (
                      <span className="text-xs text-[#666666] line-through">
                        ₹{prod.oldPrice}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => handleInquireProduct(prod.name)}
                  className="px-3.5 py-2 rounded-xl bg-[#161616] hover:bg-[#8D43F4] text-[#e1e1e1] hover:text-white border border-[#282828] hover:border-transparent text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer"
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
