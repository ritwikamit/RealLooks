import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { ReelItem } from '../types';

interface ReelVideoCardProps {
  reel: ReelItem;
  className?: string;
}

export const ReelVideoCard: React.FC<ReelVideoCardProps> = ({ reel, className = '' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.45 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const next = !isMuted;
    video.muted = next;
    setIsMuted(next);
  };

  return (
    <article
      ref={containerRef}
      className={`relative rounded-2xl overflow-hidden border border-[#C9B5E0]/45 shadow-[0_14px_34px_rgba(0,16,91,0.12)] bg-[#00105B] aspect-[9/13] sm:aspect-[9/15] group ${className}`}
    >
      <video
        ref={videoRef}
        src={reel.videoUrl}
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#00105B]/90 via-[#00105B]/45 to-transparent pointer-events-none" />

      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? `Unmute ${reel.title}` : `Mute ${reel.title}`}
        title={isMuted ? 'Unmute video' : 'Mute video'}
        className="absolute top-3 right-3 z-10 w-10 h-10 sm:w-8 sm:h-8 rounded-xl bg-[#FCF9EC]/85 backdrop-blur-md border border-[#D4AF37]/60 text-[#00105B] flex items-center justify-center cursor-pointer hover:bg-[#C9B5E0] transition-colors shadow-sm"
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4" strokeWidth={2} />
        ) : (
          <Volume2 className="w-4 h-4 text-[#6061B6]" strokeWidth={2} />
        )}
      </button>

      <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
        <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#C9B5E0]/90 backdrop-blur-sm text-[#00105B] text-[10px] font-bold uppercase tracking-wider mb-1.5">
          {reel.categoryLabel}
        </span>
        <h3 className="text-sm sm:text-base font-bold text-[#FCF9EC] leading-snug">
          {reel.title}
        </h3>
        <p className="text-xs text-[#FCF9EC]/80 mt-0.5 line-clamp-2 leading-relaxed">
          {reel.description}
        </p>
      </div>
    </article>
  );
};
