import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Calendar, MessageSquare, PhoneCall, Trash2, Scissors } from 'lucide-react';
import { BookingRequest } from '../types';
import { SALON_INFO } from '../data/salonData';

interface MyBookingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNewBooking: () => void;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  isOpen,
  onClose,
  onNewBooking,
}) => {
  const [bookings, setBookings] = useState<BookingRequest[]>([]);

  useEffect(() => {
    if (isOpen) {
      try {
        const stored = localStorage.getItem('real_looks_bookings');
        if (stored) {
          setBookings(JSON.parse(stored));
        }
      } catch (e) {
        console.error('Error loading bookings', e);
      }
    }
  }, [isOpen]);

  const removeBooking = (id: string) => {
    const updated = bookings.filter(b => b.id !== id);
    setBookings(updated);
    try {
      localStorage.setItem('real_looks_bookings', JSON.stringify(updated));
    } catch (e) {
      console.error('Error updating bookings', e);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative max-w-lg w-full lucid-glass rounded-3xl border border-white/80 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-white/70 border-b border-black/5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#4C5B2E] to-[#52A296] text-white flex items-center justify-center shadow-2xs">
              <Calendar className="w-4 h-4 text-[#FFF2A8]" />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-[#192018]">
                My Appointment Requests
              </h3>
              <p className="text-[11px] text-[#677565]">
                Saved locally on this device
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-[#677565] hover:text-[#192018] hover:bg-white/80 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {bookings.length === 0 ? (
            <div className="text-center py-10 space-y-3">
              <div className="w-12 h-12 rounded-2xl lucid-glass text-[#0D8F8B] flex items-center justify-center mx-auto border border-white/80">
                <Scissors className="w-6 h-6 text-[#D6A838]" />
              </div>
              <h4 className="text-sm font-bold text-[#192018]">
                No Appointments Scheduled Yet
              </h4>
              <p className="text-xs text-[#677565] max-w-xs mx-auto">
                Choose a service and reserve your spot in under a minute with our online scheduler.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onNewBooking();
                }}
                className="px-5 py-2.5 rounded-2xl glossy-gold-btn text-[#4A3502] font-extrabold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-xs border border-white/80"
              >
                Schedule First Appointment
              </button>
            </div>
          ) : (
            bookings.map((b) => (
              <div
                key={b.id}
                className="p-4 rounded-2xl lucid-glass-card shadow-2xs space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md glossy-gold-badge text-[#4A3502] tracking-wider">
                      {b.id}
                    </span>
                    <h4 className="text-sm font-bold text-[#192018] mt-1.5">
                      {b.serviceName}
                    </h4>
                  </div>
                  <button
                    onClick={() => removeBooking(b.id)}
                    className="text-gray-400 hover:text-red-500 p-1 cursor-pointer transition-colors"
                    title="Remove from history"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-[#3D483B] bg-white/60 p-3 rounded-xl border border-black/5">
                  <div>
                    <span className="text-[10px] text-[#677565] block font-semibold">Date & Time</span>
                    <strong>{b.date} • {b.time}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#677565] block font-semibold">Stylist / Specialist</span>
                    <strong>{b.stylistName}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#677565] block font-semibold">Client</span>
                    <strong>{b.customerName}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#677565] block font-semibold">Price</span>
                    <strong className="text-[#2F3B1A]">₹{b.servicePrice}</strong>
                  </div>
                </div>

                {/* Quick actions for each booking */}
                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={`https://wa.me/${SALON_INFO.whatsapp}?text=${encodeURIComponent(`Hello Real Looks, Checking on my booking ${b.id} for ${b.serviceName} on ${b.date} at ${b.time}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#15803D] font-bold text-xs flex items-center justify-center gap-1.5 border border-[#25D366]/30 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${SALON_INFO.phoneClean}`}
                    className="py-2 px-3 rounded-xl lucid-glass text-[#192018] font-bold text-xs flex items-center justify-center gap-1.5 border border-white/80 transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#D6A838]" />
                    <span>Call Salon</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white/70 border-t border-black/5 flex items-center justify-between">
          <span className="text-xs text-[#677565] font-medium">
            {bookings.length} request(s) on file
          </span>
          <button
            onClick={() => {
              onClose();
              onNewBooking();
            }}
            className="px-4 py-2 rounded-xl glossy-gold-btn text-[#4A3502] font-bold text-xs uppercase tracking-wider cursor-pointer border border-white/80"
          >
            + Book Another Service
          </button>
        </div>
      </motion.div>
    </div>
  );
};
