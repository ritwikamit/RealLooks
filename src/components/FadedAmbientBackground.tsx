import React from 'react';
import { motion } from 'motion/react';

export const FadedAmbientBackground: React.FC = () => {
  return (
    <div 
      aria-hidden="true" 
      className="pointer-events-none fixed inset-0 overflow-hidden -z-10 select-none bg-[#000000]"
    >
      {/* Clandestine Ambient Dark Glows */}
      
      {/* Top Right: Electric Violet Ambient Glow */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 20, 0],
          scale: [1, 1.06, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 right-10 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#8D43F4]/15 via-[#8D43F4]/05 to-transparent blur-[140px]"
      />

      {/* Mid Left: Deep Botanical Olive/Emerald Glow */}
      <motion.div
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 25, -20, 0],
          scale: [1, 0.96, 1.05, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/3 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#4C5B2E]/10 via-[#12B5AF]/05 to-transparent blur-[130px]"
      />

      {/* Bottom Center: Warm Luxury Gold Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 0.94, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-10 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-t from-[#8D43F4]/10 via-transparent to-transparent blur-[120px]"
      />
    </div>
  );
};
