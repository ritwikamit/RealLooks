import React, { useState, useEffect } from 'react';
import { X, Calendar, MessageSquare, Phone, Trash2, Scissors } from 'lucide-react';
import { BookingRequest } from '../types';
import { SALON_INFO, buildWhatsAppUrl } from '../data/salonData';

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
        setBookings(stored ? JSON.parse(stored) : []);
      } catch {
        setBookings([]);
      }
    }
  }, [isOpen]);

  const removeBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    try {
      localStorage.setItem('real_looks_bookings', JSON.stringify(updated));
      window.dispatchEvent(new Event('bookingAdded'));
    } catch {
      // ignore storage quota errors
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#141413]/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-lg w-full brutal-glass rounded-3xl overflow-hidden flex flex-col max-h-[85vh]"
      >
        <div className="px-6 py-4 bg-[#FFEEB3] border-b-2 border-[#141413] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#F47321] border-2 border-[#141413] flex items-center justify-center">
              <Calendar className="w-4 h-4 text-[#141413]" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-[#141413]">My Bookings</h3>
              <p className="text-[11px] font-semibold text-[#141413]/70">Saved on this device</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="btn btn-sm btn-square bg-[#FFFDF7] border-2 border-[#141413] text-[#141413] rounded-lg"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-5 overflow-y-auto space-y-3 flex-1">
          {bookings.length === 0 ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#B4D7CD] border-2 border-[#141413] flex items-center justify-center mx-auto">
                <Scissors className="w-5 h-5 text-[#141413]" />
              </div>
              <h4 className="text-sm font-extrabold text-[#141413]">No Bookings Yet</h4>
              <p className="text-xs text-[#141413]/75 max-w-xs mx-auto">
                Pick a service and time—your request opens directly in WhatsApp.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onNewBooking();
                }}
                className="btn btn-sm bg-[#F47321] hover:bg-[#e06314] text-[#141413] font-extrabold text-xs uppercase rounded-xl brutal-btn px-5"
              >
                Book a Chair
              </button>
            </div>
          ) : (
            bookings.map((b) => (
              <div
                key={b.id}
                className="p-4 rounded-2xl bg-[#FFFDF7] border-2 border-[#141413] space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="inline-block text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-[#FFEEB3] border border-[#141413]">
                      {b.id}
                    </span>
                    <h4 className="text-sm font-extrabold text-[#141413] mt-1">{b.serviceName}</h4>
                    <p className="text-xs text-[#141413]/70 mt-0.5">
                      {b.date} at {b.time} • {b.stylistName}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeBooking(b.id)}
                    aria-label="Remove booking"
                    className="p-1.5 rounded-lg hover:bg-[#FFEEB3] text-[#141413]/60 hover:text-[#141413] cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-[#141413]/15">
                  <a
                    href={buildWhatsAppUrl(
                      `Hello Real Looks Salon, following up on booking ${b.id} (${b.serviceName} on ${b.date} at ${b.time}).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-xs bg-[#B4D7CD] text-[#141413] font-extrabold border-2 border-[#141413] rounded-lg"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={SALON_INFO.telHref}
                    className="btn btn-xs bg-[#FFEEB3] text-[#141413] font-extrabold border-2 border-[#141413] rounded-lg"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Salon</span>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
