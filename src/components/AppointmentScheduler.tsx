import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, MessageSquare, CheckCircle2, MapPin } from 'lucide-react';
import { SERVICES, STYLISTS, TIME_SLOTS, SALON_INFO, buildWhatsAppUrl } from '../data/salonData';
import { BookingRequest, ServiceItem, Stylist } from '../types';

interface AppointmentSchedulerProps {
  initialServiceId?: string | null;
  initialStylistId?: string | null;
  onBookingSuccess?: (booking: BookingRequest) => void;
}

export const AppointmentScheduler: React.FC<AppointmentSchedulerProps> = ({
  initialServiceId,
  initialStylistId,
  onBookingSuccess,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES[0]);
  const [selectedStylist, setSelectedStylist] = useState<Stylist>(STYLISTS[0]);

  const todayStr = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState<string>(todayStr);
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM');

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState<BookingRequest | null>(null);

  useEffect(() => {
    if (initialServiceId) {
      const found = SERVICES.find((s) => s.id === initialServiceId);
      if (found) setSelectedService(found);
    }
  }, [initialServiceId]);

  useEffect(() => {
    if (initialStylistId) {
      const found = STYLISTS.find((s) => s.id === initialStylistId);
      if (found) setSelectedStylist(found);
    }
  }, [initialStylistId]);

  const availableDates = Array.from({ length: 10 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      dateStr: d.toISOString().split('T')[0],
      dayName: d.toLocaleDateString('en-US', { weekday: 'short' }),
      dayNum: d.getDate(),
      monthName: d.toLocaleDateString('en-US', { month: 'short' }),
      isToday: i === 0,
    };
  });

  const buildBookingMessage = (booking: BookingRequest) =>
    `Hello Real Looks Unisex Salon! I'd like to book an appointment:\n\n` +
    `• Ref: ${booking.id}\n` +
    `• Service: ${booking.serviceName} (₹${booking.servicePrice})\n` +
    `• Stylist: ${booking.stylistName}\n` +
    `• Date: ${booking.date}\n` +
    `• Time: ${booking.time}\n` +
    `• Name: ${booking.customerName}\n` +
    `• Contact: ${booking.phone}` +
    (booking.notes ? `\n• Notes: ${booking.notes}` : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = customerPhone.replace(/[\s-]/g, '');
    if (!customerName.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }
    setFormError('');

    const booking: BookingRequest = {
      id: `RL-${Math.floor(100000 + Math.random() * 900000)}`,
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      servicePrice: selectedService.price,
      serviceDuration: selectedService.durationMinutes,
      stylistId: selectedStylist.id,
      stylistName: selectedStylist.name,
      date: selectedDate,
      time: selectedTime,
      customerName: customerName.trim(),
      phone: cleanPhone,
      notes: customerNotes.trim() || undefined,
      status: 'REQUESTED',
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('real_looks_bookings') || '[]');
      localStorage.setItem('real_looks_bookings', JSON.stringify([booking, ...existing]));
      window.dispatchEvent(new Event('bookingAdded'));
    } catch {
      // ignore storage quota errors
    }

    setSubmitted(booking);
    onBookingSuccess?.(booking);

    // Redirect enquiry form directly to WhatsApp on 9296142113
    window.open(buildWhatsAppUrl(buildBookingMessage(booking)), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="scheduler-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="inline-block px-3 py-1 rounded-md bg-[#F47321] border-2 border-[#141413] text-[#141413] text-xs font-extrabold uppercase tracking-wider mb-3">
          Quick Booking
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight">
          Book or Send an Enquiry
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#141413]/75">
          Pick your service and preferred time. Your request opens straight in WhatsApp so we can confirm your chair fast.
        </p>
      </div>

      {submitted ? (
        <div className="brutal-glass-mint rounded-3xl p-6 sm:p-10 text-center space-y-5">
          <div className="w-12 h-12 rounded-xl bg-[#FFEEB3] border-2 border-[#141413] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6 text-[#141413]" />
          </div>
          <div>
            <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#FFFDF7] border border-[#141413] text-xs font-extrabold">
              Ref: {submitted.id}
            </span>
            <h3 className="text-2xl font-extrabold text-[#141413] mt-2">
              Request Ready on WhatsApp
            </h3>
            <p className="text-sm text-[#141413]/80 mt-1">
              {submitted.serviceName} • {submitted.date} at {submitted.time}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href={buildWhatsAppUrl(buildBookingMessage(submitted))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#F47321] hover:bg-[#e06314] text-[#141413] font-extrabold text-xs uppercase rounded-xl brutal-btn px-5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Open WhatsApp</span>
            </a>
            <a
              href={SALON_INFO.telHref}
              className="btn bg-[#FFEEB3] hover:bg-[#f7e094] text-[#141413] font-extrabold text-xs uppercase rounded-xl brutal-btn px-5"
            >
              <Phone className="w-4 h-4" />
              <span>Call Salon</span>
            </a>
            <button
              type="button"
              onClick={() => setSubmitted(null)}
              className="btn bg-[#FFFDF7] text-[#141413] font-extrabold text-xs uppercase rounded-xl brutal-btn px-5"
            >
              Book Another
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="brutal-glass rounded-3xl p-5 sm:p-8 space-y-6"
        >
          {/* 1. Service & Stylist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="form-control w-full">
              <span className="label-text text-xs font-extrabold uppercase tracking-wider text-[#141413] mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#F47321]" />
                <span>Choose Service</span>
              </span>
              <select
                value={selectedService.id}
                onChange={(e) => {
                  const found = SERVICES.find((s) => s.id === e.target.value);
                  if (found) setSelectedService(found);
                }}
                className="select select-bordered w-full bg-[#FFFDF7] border-2 border-[#141413] rounded-xl text-sm font-bold text-[#141413]"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name} — ₹{s.price} ({s.durationMinutes} min)
                  </option>
                ))}
              </select>
            </label>

            <label className="form-control w-full">
              <span className="label-text text-xs font-extrabold uppercase tracking-wider text-[#141413] mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-[#F47321]" />
                <span>Preferred Stylist</span>
              </span>
              <select
                value={selectedStylist.id}
                onChange={(e) => {
                  const found = STYLISTS.find((st) => st.id === e.target.value);
                  if (found) setSelectedStylist(found);
                }}
                className="select select-bordered w-full bg-[#FFFDF7] border-2 border-[#141413] rounded-xl text-sm font-bold text-[#141413]"
              >
                {STYLISTS.map((st) => (
                  <option key={st.id} value={st.id}>
                    {st.name} ({st.role})
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* 2. Date Picker */}
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#141413] mb-2 block">
              Pick a Date
            </span>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {availableDates.map((d) => {
                const active = selectedDate === d.dateStr;
                return (
                  <button
                    key={d.dateStr}
                    type="button"
                    onClick={() => setSelectedDate(d.dateStr)}
                    className={`p-2 rounded-xl border-2 border-[#141413] text-center cursor-pointer transition-all ${
                      active
                        ? 'bg-[#F47321] text-[#141413] shadow-[2px_2px_0px_#141413]'
                        : 'bg-[#FFFDF7] text-[#141413] hover:bg-[#FFEEB3]'
                    }`}
                  >
                    <span className="block text-[10px] font-bold uppercase">
                      {d.isToday ? 'Today' : d.dayName}
                    </span>
                    <span className="block text-sm font-extrabold">{d.dayNum}</span>
                    <span className="block text-[10px] font-semibold opacity-75">{d.monthName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Time Picker */}
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#141413] mb-2 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F47321]" />
              <span>Pick a Time</span>
            </span>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {TIME_SLOTS.map((slot) => {
                const active = selectedTime === slot.time;
                return (
                  <button
                    key={slot.time}
                    type="button"
                    onClick={() => setSelectedTime(slot.time)}
                    className={`py-2 px-2.5 rounded-lg border-2 border-[#141413] text-xs font-extrabold cursor-pointer transition-all ${
                      active
                        ? 'bg-[#B4D7CD] text-[#141413] shadow-[2px_2px_0px_#141413]'
                        : 'bg-[#FFFDF7] text-[#141413] hover:bg-[#FFEEB3]'
                    }`}
                  >
                    {slot.time}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4. Your Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="form-control w-full">
              <span className="label-text text-xs font-extrabold uppercase tracking-wider text-[#141413] mb-1.5 block">
                Your Name *
              </span>
              <input
                type="text"
                required
                placeholder="e.g. Aman Kumar"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="input input-bordered w-full bg-[#FFFDF7] border-2 border-[#141413] rounded-xl text-sm font-medium text-[#141413]"
              />
            </label>

            <label className="form-control w-full">
              <span className="label-text text-xs font-extrabold uppercase tracking-wider text-[#141413] mb-1.5 block">
                Your Mobile Number *
              </span>
              <input
                type="tel"
                required
                placeholder="10-digit mobile number"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="input input-bordered w-full bg-[#FFFDF7] border-2 border-[#141413] rounded-xl text-sm font-medium text-[#141413]"
              />
            </label>
          </div>

          <label className="form-control w-full block">
            <span className="label-text text-xs font-extrabold uppercase tracking-wider text-[#141413] mb-1.5 block">
              Any Note or Style Request (Optional)
            </span>
            <input
              type="text"
              placeholder="e.g. Low taper fade, or bridal trial query"
              value={customerNotes}
              onChange={(e) => setCustomerNotes(e.target.value)}
              className="input input-bordered w-full bg-[#FFFDF7] border-2 border-[#141413] rounded-xl text-sm font-medium text-[#141413]"
            />
          </label>

          {formError && (
            <p className="text-xs font-extrabold text-[#F47321] bg-[#FFEEB3] border-2 border-[#141413] rounded-lg px-3 py-2">
              {formError}
            </p>
          )}

          {/* Submit Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t-2 border-[#141413]/15">
            <div className="text-xs font-bold text-[#141413]/75 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#F47321]" />
              <span>{SALON_INFO.shortAddress}</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={SALON_INFO.telHref}
                className="btn bg-[#FFEEB3] hover:bg-[#f7e094] text-[#141413] font-extrabold text-xs uppercase rounded-xl brutal-btn px-4"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>
              <button
                type="submit"
                className="btn flex-1 sm:flex-initial bg-[#F47321] hover:bg-[#e06314] text-[#141413] font-extrabold text-xs uppercase tracking-wider rounded-xl brutal-btn px-6"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send on WhatsApp</span>
              </button>
            </div>
          </div>
        </form>
      )}
    </section>
  );
};
