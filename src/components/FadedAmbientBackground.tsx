import React from 'react';
import { motion } from 'motion/react';

export const FadedAmbientBackground: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="pointer-events-none fixed inset-0 overflow-hidden -z-10 select-none"
    >
      {/* 1. Base Paper Canvas Texture */}
      <div className="absolute inset-0 bg-[#F8F9F5]" />

      {/* Procedural Micro-Grain Paper Texture Filter */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] mix-blend-multiply pointer-events-none">
        <filter id="paper-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.25   0 0 0 0 0.28   0 0 0 0 0.2   0 0 0 1 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#paper-grain)" />
      </svg>

      {/* Multi-layer Organic Gradient Ambient Blobs across website (Faded & Lucid) */}
      
      {/* Top Left: Olive + Seafoam + Mint */}
      <motion.div
        animate={{
          x: [0, 35, -25, 0],
          y: [0, -30, 25, 0],
          scale: [1, 1.08, 0.94, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-36 -left-32 w-[680px] h-[680px] rounded-[48%_52%_65%_35%/40%_45%_55%_60%] bg-gradient-to-br from-[#4C5B2E]/[0.07] via-[#52A296]/[0.08] to-[#86D6B9]/[0.06] blur-3xl"
      />

      {/* Mid Right: Tiffany Blue + Carolina Blue + Baby Blue */}
      <motion.div
        animate={{
          x: [0, -40, 25, 0],
          y: [0, 35, -30, 0],
          scale: [1, 0.95, 1.07, 1],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/4 -right-36 w-[640px] h-[640px] rounded-[52%_48%_38%_62%/58%_38%_62%_42%] bg-gradient-to-bl from-[#12B5AF]/[0.07] via-[#4B9CD3]/[0.08] to-[#89CFF0]/[0.09] blur-3xl"
      />

      {/* Mid Left: Glossy Gold & Mint shimmer */}
      <motion.div
        animate={{
          x: [0, 30, -35, 0],
          y: [0, -20, 35, 0],
          scale: [1, 1.06, 0.96, 1],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-2/3 -left-28 w-[580px] h-[580px] rounded-[60%_40%_50%_50%/48%_55%_45%_52%] bg-gradient-to-tr from-[#D6A838]/[0.06] via-[#F5D77F]/[0.05] to-[#86D6B9]/[0.04] blur-3xl"
      />

      {/* Bottom Right: Olive + Seafoam + Carolina Blue */}
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, -35, 25, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
        className="absolute -bottom-40 right-2 w-[700px] h-[700px] rounded-[42%_58%_58%_42%/48%_42%_58%_52%] bg-gradient-to-tl from-[#2F3B1A]/[0.06] via-[#52A296]/[0.06] to-[#4B9CD3]/[0.05] blur-3xl"
      />

      {/* Ambient floating glossy light specks */}
      <div className="absolute inset-0 opacity-[0.45]">
        {[
          { top: '15%', left: '16%', size: 'w-2 h-2', bg: 'bg-[#D6A838]', dur: 18 },
          { top: '28%', left: '84%', size: 'w-2.5 h-2.5', bg: 'bg-[#12B5AF]', dur: 22 },
          { top: '48%', left: '12%', size: 'w-2 h-2', bg: 'bg-[#86D6B9]', dur: 26 },
          { top: '68%', left: '88%', size: 'w-2 h-2', bg: 'bg-[#4B9CD3]', dur: 20 },
          { top: '88%', left: '46%', size: 'w-2.5 h-2.5', bg: 'bg-[#D6A838]', dur: 24 },
        ].map((dot, idx) => (
          <motion.div
            key={idx}
            animate={{
              y: [0, -22, 12, 0],
              x: [0, 14, -10, 0],
              opacity: [0.2, 0.65, 0.2],
            }}
            transition={{
              duration: dot.dur,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ top: dot.top, left: dot.left }}
            className={`absolute ${dot.size} ${dot.bg} rounded-full blur-[0.4px] shadow-[0_0_8px_currentColor]`}
          />
        ))}
      </div>
    </div>
  );
};
