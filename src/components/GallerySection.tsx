import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalImage, setActiveModalImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'hair', label: 'Hair Cuts & Color' },
    { id: 'grooming', label: 'Beard Sculpting' },
    { id: 'facial', label: 'Facial & Glow' },
    { id: 'bridal', label: 'Bridal Makeover' },
    { id: 'interior', label: 'Studio Interior' },
  ];

  const filtered = GALLERY_ITEMS.filter(item => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full lucid-glass text-[#0D8F8B] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#D6A838]" />
          <span>Real Looks Showcase</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#192018] tracking-tight">
          Craft & Transformations
        </h2>
        <p className="mt-3 text-base text-[#677565]">
          Explore real salon results across haircuts, beard sculpting, facial radiance, and bridal styling.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'glossy-olive-btn text-white shadow-xs'
                  : 'lucid-glass text-[#3D483B] hover:bg-white/90'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(item => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveModalImage(item)}
            className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer shadow-sm border border-white/80 hover:border-[#D6A838] transition-all hover:scale-[1.01]"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

            <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Eye className="w-4 h-4 text-[#FFF2A8]" />
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#5CE0DC] block mb-1">
                {item.categoryLabel}
              </span>
              <h3 className="text-base font-serif font-bold text-white">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-xs text-white/85 mt-1 line-clamp-1 font-normal">
                  {item.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {activeModalImage && (
          <div 
            onClick={() => setActiveModalImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full lucid-glass rounded-3xl overflow-hidden border border-white/80 shadow-2xl"
            >
              <button
                onClick={() => setActiveModalImage(null)}
                className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activeModalImage.imageUrl}
                  alt={activeModalImage.title}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="p-6 bg-white/80 backdrop-blur-md">
                <span className="text-xs font-bold uppercase tracking-wider text-[#12B5AF]">
                  {activeModalImage.categoryLabel}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#192018] mt-0.5">
                  {activeModalImage.title}
                </h3>
                {activeModalImage.description && (
                  <p className="text-xs text-[#677565] mt-1 font-normal">
                    {activeModalImage.description}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
