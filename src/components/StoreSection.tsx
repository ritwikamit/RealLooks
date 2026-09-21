import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react';
import { STORE_PRODUCTS, SALON_INFO } from '../data/salonData';

export const StoreSection: React.FC = () => {
  const handleInquireProduct = (productName: string, price: number) => {
    const text = encodeURIComponent(
      `Hello Real Looks Unisex Salon, I would like to reserve "${productName}" (₹${price}) from your salon boutique. Is it currently available for pickup at your Dani Bigha studio?`
    );
    window.open(`https://wa.me/${SALON_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="store" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full lucid-glass text-[#0D8F8B] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <ShoppingBag className="w-3.5 h-3.5 text-[#D6A838]" />
          <span>Curated Hair & Skin Boutique</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#192018] tracking-tight">
          Professional Salon-Grade Rituals
        </h2>

        <p className="mt-3 text-base text-[#677565] max-w-2xl mx-auto leading-relaxed">
          Maintain your salon-finished silkiness, hair botox shine, and skin radiance at home with authentic professional formulations available in-salon.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {STORE_PRODUCTS.map((prod, idx) => (
          <motion.div
            key={prod.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="group rounded-3xl overflow-hidden lucid-glass-card border border-white/80 hover:border-[#D6A838]/50 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF9F5]">
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              {/* Tag / Category Badge */}
              <div className="absolute top-3.5 left-3.5">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#2F3B1A] border border-[#D6A838]/40 shadow-xs backdrop-blur-md flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-[#D6A838]" />
                  <span>{prod.tag || prod.category}</span>
                </span>
              </div>

              {/* Volume Tag */}
              <div className="absolute top-3.5 right-3.5">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/65 text-white/90 border border-white/20 backdrop-blur-md">
                  {prod.volume}
                </span>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-1.5">
                <span className="text-[10px] text-[#0D8F8B] font-bold tracking-wider uppercase">
                  {prod.category}
                </span>

                <h3 className="text-base font-serif font-bold text-[#192018] group-hover:text-[#0D8F8B] transition-colors leading-snug">
                  {prod.name}
                </h3>

                <p className="text-xs text-[#677565] line-clamp-2 leading-relaxed pt-1">
                  {prod.description}
                </p>
              </div>

              {/* Pricing & Inquire Button */}
              <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#888888] font-bold uppercase tracking-wider block">Salon Price</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-serif font-bold text-[#192018]">
                      ₹{prod.price}
                    </span>
                    {prod.oldPrice && (
                      <span className="text-xs text-[#888888] line-through">
                        ₹{prod.oldPrice}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => handleInquireProduct(prod.name, prod.price)}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D6A838] to-[#C29324] hover:from-[#C29324] hover:to-[#8E680E] text-[#1F1703] text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Reserve</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Authenticity Guarantee Footer */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl lucid-glass border border-white/90 shadow-2xs text-xs font-semibold text-[#3D483B]">
          <ShieldCheck className="w-4 h-4 text-[#12B5AF]" />
          <span>100% Genuine Certified Professional Formulations • Safe In-Salon Pickup in Dani Bigha</span>
        </div>
      </div>

    </section>
  );
};
