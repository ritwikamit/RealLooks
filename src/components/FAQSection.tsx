import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../data/salonData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-16">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full lucid-glass text-[#0D8F8B] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <HelpCircle className="w-3.5 h-3.5 text-[#D6A838]" />
          <span>Client Assistance</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#192018] tracking-tight">
          Frequently Asked Questions
        </h2>

        <p className="mt-3 text-base text-[#677565] leading-relaxed">
          Transparent information regarding appointments, walk-ins, organic treatments, sterilization, and pricing.
        </p>
      </div>

      {/* Accordion List (Luxury Glassmorphic Design) */}
      <div className="space-y-3.5">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className={`rounded-2xl overflow-hidden lucid-glass border transition-all duration-300 ${
                isOpen ? 'border-[#D6A838]/60 shadow-md bg-white/90' : 'border-white/80 hover:border-[#4B9CD3]/40 bg-white/70'
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-serif font-bold text-[#192018] flex items-center gap-3.5">
                  <span className={`w-7 h-7 rounded-full text-xs flex items-center justify-center font-bold flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-[#D6A838] text-[#1F1703]' : 'bg-[#4B9CD3]/10 text-[#2B78AE]'
                  }`}>
                    {idx + 1}
                  </span>
                  <span>{faq.question}</span>
                </span>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-[#D6A838]/20 text-[#8E680E] rotate-180' : 'bg-black/5 text-[#677565]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm text-[#3D483B] leading-relaxed border-t border-black/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
