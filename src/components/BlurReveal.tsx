import React from 'react';
import { motion } from 'motion/react';

interface BlurRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const BlurReveal: React.FC<BlurRevealProps> = ({
  children,
  className = '',
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, filter: 'blur(10px)', y: 14 }}
    whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.55, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);
