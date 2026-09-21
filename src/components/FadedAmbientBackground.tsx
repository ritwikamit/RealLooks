import React from 'react';

export const FadedAmbientBackground: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="pointer-events-none fixed inset-0 overflow-hidden -z-10 select-none contain-strict"
      style={{ contain: 'strict' }}
    >
      {/* 1. Base Luxury Artisan Canvas Texture */}
      <div className="absolute inset-0 bg-[#FAF9F6] luxury-artisan-canvas" />

      {/* Procedural Micro-Silk Luxury Canvas Weave (Ultra-lightweight static SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.032] mix-blend-multiply pointer-events-none">
        <filter id="luxury-canvas-weave">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.18   0 0 0 0 0.20   0 0 0 0 0.16   0 0 0 1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#luxury-canvas-weave)" />
      </svg>

      {/* Static Optimized Luxury Ambient Glows (Zero CPU/GPU animation overhead during scroll) */}
      {/* Top Left: Warm Gold & Deep Olive */}
      <div 
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full opacity-60 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(214,168,56,0.08) 0%, rgba(76,91,46,0.05) 50%, transparent 70%)',
          transform: 'translate3d(0,0,0)',
        }}
      />

      {/* Mid Right: Soft Tiffany Cyan & Champagne Gold */}
      <div 
        className="absolute top-1/3 -right-36 w-[620px] h-[620px] rounded-full opacity-60 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(18,181,175,0.07) 0%, rgba(214,168,56,0.06) 50%, transparent 70%)',
          transform: 'translate3d(0,0,0)',
        }}
      />

      {/* Bottom Left: Metallic Gold & Olive Soft Aura */}
      <div 
        className="absolute top-2/3 -left-32 w-[580px] h-[580px] rounded-full opacity-55 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(214,168,56,0.07) 0%, rgba(47,59,26,0.05) 50%, transparent 70%)',
          transform: 'translate3d(0,0,0)',
        }}
      />

      {/* Bottom Right: Tiffany Teal & Gold Sheen */}
      <div 
        className="absolute -bottom-36 right-0 w-[650px] h-[650px] rounded-full opacity-50 blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(18,181,175,0.06) 0%, rgba(214,168,56,0.05) 50%, transparent 70%)',
          transform: 'translate3d(0,0,0)',
        }}
      />
    </div>
  );
};
