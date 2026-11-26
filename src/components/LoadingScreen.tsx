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
    }, 1000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.38, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] bg-[#FCF9EC] flex flex-col items-center justify-center select-none"
          aria-label="Loading Real Looks Unisex Salon"
        >
          <div className="relative flex items-center justify-center w-52 h-52 sm:w-60 sm:h-60">
            <motion.svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 120 120"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.35, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#C9B5E0"
                strokeWidth="2.5"
              />
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#6061B6"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray="110 230"
              />
            </motion.svg>

            <motion.img
              src="/images/logo.png"
              alt="Real Looks Unisex Salon"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-32 h-32 sm:w-36 sm:h-36 object-contain"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
