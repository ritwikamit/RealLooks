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

  const filteredReels = REEL_VIDEOS.filter((reel) => {
    if (filter === 'photos') return false;
    if (filter === 'all' || filter === 'reels') return true;
    return reel.category === filter;
  });

  const showPhotos = filter === 'all' || filter === 'photos';

  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-block px-3 py-1 rounded-md bg-[#8EA8C3] border-2 border-[#141413] text-[#141413] text-xs font-extrabold uppercase tracking-wider mb-3">
          Lookbook & Reels
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">
          Real Cuts, Zero Filter
        </h2>
        <p className="mt-2.5 text-sm sm:text-base text-[#141413]/75">
          Watch our actual haircuts and styling clips. Videos play automatically as you scroll—tap the speaker icon to unmute.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-extrabold border-2 border-[#141413] transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-[#F47321] text-[#141413] shadow-[3px_3px_0px_#141413]'
                  : 'bg-[#FFFDF7] text-[#141413] hover:bg-[#FFEEB3]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Video Reels Grid */}
      {filteredReels.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
          {filteredReels.map((reel) => (
            <ReelVideoCard key={reel.id} reel={reel} />
          ))}
        </div>
      )}

      {/* Studio & Transformation Photos */}
      {showPhotos && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GALLERY_ITEMS.map((item) => (
            <article
              key={item.id}
              className="relative rounded-2xl overflow-hidden border-2 border-[#141413] shadow-[4px_4px_0px_#141413] h-72 group"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141413]/85 via-[#141413]/20 to-transparent" />
              <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                <span className="inline-block px-2 py-0.5 rounded-md bg-[#B4D7CD] border border-[#141413] text-[#141413] text-[10px] font-extrabold uppercase mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="text-sm font-extrabold">{item.title}</h3>
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
