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
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#242424] text-[#8D43F4] text-xs font-semibold uppercase tracking-widest mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-[#8D43F4]" />
          <span>FAQ</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fafafa] tracking-tight">
          Frequently Asked Questions
        </h2>

        <p className="mt-4 text-base text-[#aaaaaa] leading-relaxed">
          Clear answers regarding appointments, botanical treatments, hygiene standards, and salon services.
        </p>
      </div>

      {/* Accordion List (Clandestine Dark Theme) */}
      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className={`rounded-xl overflow-hidden bg-[#0d0d0d] border transition-all duration-300 ${
                isOpen ? 'border-[#8D43F4]/60 shadow-[0_4px_25px_rgba(141,67,244,0.12)]' : 'border-[#1f1f1f] hover:border-[#2a2a2a]'
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg font-bold text-[#fafafa] flex items-center gap-3.5">
                  <span className="w-6 h-6 rounded-full bg-[#181818] border border-[#262626] text-[#8D43F4] text-xs flex items-center justify-center font-bold flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span>{faq.question}</span>
                </span>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen
                      ? 'bg-[#8D43F4] text-white rotate-180 shadow-[0_0_12px_rgba(141,67,244,0.5)]'
                      : 'bg-[#181818] text-[#888888]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 text-sm text-[#aaaaaa] leading-relaxed border-t border-[#181818]">
                      <p>{faq.answer}</p>
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
