import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] bg-[#FCF9EC] flex flex-col items-center justify-center select-none"
          aria-label="Loading Real Looks Unisex Salon"
        >
          <div className="relative flex items-center justify-center w-52 h-52 sm:w-60 sm:h-60">
            {/* Golden circular loading animation */}
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 120 120"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            >
              <defs>
                <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF1A8" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#B6891B" />
                </linearGradient>
              </defs>
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#D4AF37"
                strokeOpacity="0.22"
                strokeWidth="2.5"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="url(#goldRing)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray="115 225"
              />
            </motion.svg>

            <motion.img
              src="/images/logo.webp"
              alt="Real Looks Unisex Salon"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-32 h-32 sm:w-36 sm:h-36 object-contain"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
