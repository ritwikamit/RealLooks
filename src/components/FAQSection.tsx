import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircleQuestion } from 'lucide-react';
import { FAQS } from '../data/salonData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12B5AF]/15 border border-[#12B5AF]/30 text-[#0D8F8B] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <HelpCircle className="w-3.5 h-3.5 text-[#0D8F8B]" />
          <span>Helpful Guidance</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-[#192018] tracking-tight">
          Frequently Asked Questions
        </h2>

        <p className="mt-3 text-base text-[#677565]">
          Clear answers about our appointment booking, organic botanical formulas, hygiene protocols, and services.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="rounded-2xl overflow-hidden bg-white/85 backdrop-blur-md border border-[#4C5B2E]/15 shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-serif-title text-base sm:text-lg font-bold text-[#192018] flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#4C5B2E]/10 text-[#4C5B2E] text-xs flex items-center justify-center font-sans font-bold flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span>{faq.question}</span>
                </span>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? 'bg-[#D6A838] text-[#1F1703] rotate-180 shadow-xs'
                      : 'bg-[#4C5B2E]/10 text-[#4C5B2E]'
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
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 text-sm text-[#485346] leading-relaxed border-t border-black/05">
                      <p>{faq.answer}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="badge badge-sm bg-[#4C5B2E]/10 text-[#2F3B1A] font-bold text-[10px] border-none">
                          {faq.category}
                        </span>
                      </div>
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
