import React, { useState } from 'react';
import { REEL_VIDEOS, GALLERY_ITEMS } from '../data/salonData';
import { ReelVideoCard } from './ReelVideoCard';

const FILTER_TABS = [
  { id: 'all', label: 'All Cuts & Looks' },
  { id: 'reels', label: 'Video Cuts' },
  { id: 'hair', label: 'Hair' },
  { id: 'grooming', label: 'Beard & Fade' },
  { id: 'photos', label: 'Studio Photos' },
];

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  // Exclude Studio Vibe (reel-feature) from Gallery as it has its own landing section
  const haircutReels = REEL_VIDEOS.filter((reel) => reel.id !== 'reel-feature');

  const filteredReels = haircutReels.filter((reel) => {
    if (filter === 'photos') return false;
    if (filter === 'all' || filter === 'reels') return true;
    return reel.category === filter;
  });

  const showPhotos = filter === 'all' || filter === 'photos';

  return (
    <section id="gallery" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="font-script text-2xl sm:text-3xl text-[#F47321] mb-1">
          Real people, real confidence
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">
          Real Cuts, Zero Filter
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-[#141413]/70">
          Watch our actual haircuts and styling clips. Videos play automatically as you scroll—tap the speaker icon to unmute.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${filter === tab.id
                  ? 'bg-[#F47321] text-white shadow-sm'
                  : 'glass-surface text-[#141413]/80 hover:bg-[#FFEEB3]/60'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {filteredReels.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredReels.map((reel) => (
            <ReelVideoCard key={reel.id} reel={reel} />
          ))}
        </div>
      )}

      {showPhotos && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <article
              key={item.id}
              className="relative rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(20,20,19,0.08)] h-72 group"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141413]/80 via-[#141413]/20 to-transparent" />
              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#B4D7CD]/90 text-[#141413] text-[10px] font-bold uppercase mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="text-sm font-bold">{item.title}</h3>
                {item.description && (
                  <p className="text-xs text-white/80 mt-0.5 line-clamp-1">
                    {item.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};
