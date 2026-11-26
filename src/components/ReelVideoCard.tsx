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
      className={`relative rounded-2xl overflow-hidden border border-white/40 shadow-[0_12px_32px_rgba(20,20,19,0.1)] bg-[#141413] aspect-[9/15] group ${className}`}
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

      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#141413]/85 via-[#141413]/40 to-transparent pointer-events-none" />

      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? `Unmute ${reel.title}` : `Mute ${reel.title}`}
        title={isMuted ? 'Unmute video' : 'Mute video'}
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-xl bg-white/80 backdrop-blur-md border border-white/60 text-[#141413] flex items-center justify-center cursor-pointer hover:bg-[#FFEEB3] transition-colors shadow-sm"
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4" strokeWidth={2} />
        ) : (
          <Volume2 className="w-4 h-4 text-[#F47321]" strokeWidth={2} />
        )}
      </button>

      <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
        <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#FFEEB3]/90 backdrop-blur-sm text-[#141413] text-[10px] font-bold uppercase tracking-wider mb-1.5">
          {reel.categoryLabel}
        </span>
        <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
          {reel.title}
        </h3>
        <p className="text-xs text-white/80 mt-0.5 line-clamp-2 leading-relaxed">
          {reel.description}
        </p>
      </div>
    </article>
  );
};
