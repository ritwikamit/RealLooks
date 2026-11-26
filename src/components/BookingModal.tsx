import React, { useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { AppointmentScheduler } from './AppointmentScheduler';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string | null;
  initialStylistId?: string | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialStylistId,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-[#00105B]/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Book an Appointment"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-surface rounded-3xl shadow-2xl"
          >
            <div className="sticky top-0 z-20 px-5 sm:px-7 py-4 bg-[#FCF9EC]/90 backdrop-blur-xl border-b border-[#00105B]/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#00105B] border border-[#D4AF37]/80 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-extrabold text-[#00105B]">
                    Book or Send an Enquiry
                  </h2>
                  <p className="text-xs text-[#00105B]/70">
                    Opens directly in WhatsApp so we can confirm fast
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close booking dialog"
                className="btn btn-sm btn-square bg-[#C9B5E0]/50 hover:bg-[#C9B5E0] text-[#00105B] border-0 rounded-xl"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 sm:p-6">
              <AppointmentScheduler
                initialServiceId={initialServiceId}
                initialStylistId={initialStylistId}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
