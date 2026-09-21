import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Calendar, MessageSquare, Trash2, Scissors } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative max-w-lg w-full bg-[#0e0e0e] rounded-2xl border border-[#242424] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#141414] border-b border-[#222222] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#8D43F4] text-white flex items-center justify-center shadow-md">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#fafafa]">
                My Saved Appointments
              </h3>
              <p className="text-[11px] text-[#aaaaaa]">
                {bookings.length} active reservation request{bookings.length === 1 ? '' : 's'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#1c1c1c] text-[#888888] hover:text-white hover:bg-[#262626] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {bookings.length === 0 ? (
            <div className="text-center py-10 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#181818] border border-[#282828] flex items-center justify-center mx-auto text-[#888888]">
                <Calendar className="w-6 h-6 text-[#8D43F4]" />
              </div>
              <p className="text-sm font-semibold text-[#fafafa]">No active appointments</p>
              <p className="text-xs text-[#888888] max-w-xs mx-auto">
                Schedule your tailored salon session in under a minute with instant confirmation.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onNewBooking();
                }}
                className="mt-2 px-5 py-2.5 rounded-xl bg-[#8D43F4] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#7b2fe0] shadow-[0_0_15px_rgba(141,67,244,0.4)] cursor-pointer"
              >
                Book Appointment
              </button>
            </div>
          ) : (
            bookings.map((booking) => (
              <div
                key={booking.id}
                className="p-4 rounded-xl bg-[#141414] border border-[#242424] space-y-3"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#8D43F4] bg-[#8D43F4]/10 px-2 py-0.5 rounded border border-[#8D43F4]/20 block w-fit mb-1">
                      {booking.id}
                    </span>
                    <h4 className="text-sm font-bold text-[#fafafa] flex items-center gap-1.5">
                      <Scissors className="w-3.5 h-3.5 text-[#8D43F4]" />
                      <span>{booking.serviceName}</span>
                    </h4>
                  </div>
                  <button
                    onClick={() => removeBooking(booking.id)}
                    className="text-[#666666] hover:text-red-400 p-1 transition-colors cursor-pointer"
                    title="Remove from saved list"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-[#aaaaaa] pt-1">
                  <div>
                    <span className="text-[10px] text-[#666666] block">Stylist</span>
                    <span className="font-semibold text-[#fafafa]">{booking.stylistName}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#666666] block">Slot</span>
                    <span className="font-semibold text-[#fafafa]">{booking.date} at {booking.time}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#202020] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#8D43F4]">
                    ₹{booking.price}
                  </span>
                  <a
                    href={`https://wa.me/${SALON_INFO.whatsapp}?text=${encodeURIComponent(`Hello Real Looks Salon, I would like to check on my booking reference ${booking.id} for ${booking.serviceName}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        {bookings.length > 0 && (
          <div className="p-4 bg-[#141414] border-t border-[#222222] flex items-center justify-between">
            <button
              onClick={() => {
                onClose();
                onNewBooking();
              }}
              className="text-xs font-semibold text-[#8D43F4] hover:underline"
            >
              + Book Another Service
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#222222] hover:bg-[#2c2c2c] text-white text-xs font-semibold"
            >
              Close
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};
