import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Phone, CheckCircle2, MapPin } from 'lucide-react';
import { SERVICES, STYLISTS, TIME_SLOTS, SALON_INFO, buildWhatsAppUrl } from '../data/salonData';
import { BookingRequest, ServiceItem, Stylist } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

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
      const found = STYLISTS.find((st) => st.id === initialStylistId);
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

    setSubmitted(booking);
    onBookingSuccess?.(booking);

    window.open(buildWhatsAppUrl(buildBookingMessage(booking)), '_blank', 'noopener,noreferrer');
  };

  if (submitted) {
    return (
      <div className="glass-mint rounded-2xl p-6 sm:p-8 text-center space-y-5">
        <div className="w-12 h-12 rounded-2xl bg-[#00105B] border border-[#D4AF37]/80 flex items-center justify-center mx-auto shadow-sm">
          <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />
        </div>
        <div>
          <span className="inline-block px-3 py-0.5 rounded-md bg-white/80 text-[#00105B] text-xs font-bold">
            Ref: {submitted.id}
          </span>
          <h3 className="text-2xl font-extrabold text-[#00105B] mt-2">
            Request Ready on WhatsApp
          </h3>
          <p className="text-sm text-[#00105B]/75 mt-1">
            {submitted.serviceName} • {submitted.date} at {submitted.time}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href={buildWhatsAppUrl(buildBookingMessage(submitted))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-[#00105B] hover:bg-[#6061B6] text-[#FCF9EC] font-bold text-xs uppercase rounded-xl glass-btn gold-border-btn px-5"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#D4AF37]" />
            <span>Open WhatsApp</span>
          </a>
          <a
            href={SALON_INFO.telHref}
            className="btn bg-[#FCF9EC] hover:bg-[#C9B5E0] text-[#00105B] font-bold text-xs uppercase rounded-xl glass-btn gold-border-btn px-5"
          >
            <Phone className="w-4 h-4 text-[#6061B6]" />
            <span>Call Salon</span>
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(null)}
            className="btn glass-surface text-[#00105B] font-bold text-xs uppercase rounded-xl glass-btn px-5"
          >
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="form-control w-full">
          <span className="label-text text-xs font-bold uppercase tracking-wider text-[#00105B]/75 mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#6061B6]" />
            <span>Choose Service</span>
          </span>
          <select
            value={selectedService.id}
            onChange={(e) => {
              const found = SERVICES.find((s) => s.id === e.target.value);
              if (found) setSelectedService(found);
            }}
            className="select select-bordered w-full bg-white/85 border border-[#00105B]/15 rounded-xl text-sm font-semibold text-[#00105B]"
          >
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} — ₹{s.price} ({s.durationMinutes} min)
              </option>
            ))}
          </select>
        </label>

        <label className="form-control w-full">
          <span className="label-text text-xs font-bold uppercase tracking-wider text-[#00105B]/75 mb-1.5 flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#6061B6]" />
            <span>Preferred Stylist</span>
          </span>
          <select
            value={selectedStylist.id}
            onChange={(e) => {
              const found = STYLISTS.find((st) => st.id === e.target.value);
              if (found) setSelectedStylist(found);
            }}
            className="select select-bordered w-full bg-white/85 border border-[#00105B]/15 rounded-xl text-sm font-semibold text-[#00105B]"
          >
            {STYLISTS.map((st) => (
              <option key={st.id} value={st.id}>
                {st.name} ({st.role})
              </option>
            ))}
          </select>
        </label>
      </div>

      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#00105B]/75 mb-2 block">
          Pick a Date
        </span>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
          {availableDates.map((d) => {
            const active = selectedDate === d.dateStr;
            return (
              <button
                key={d.dateStr}
                type="button"
                onClick={() => setSelectedDate(d.dateStr)}
                className={`p-2 rounded-xl text-center cursor-pointer transition-all ${
                  active
                    ? 'bg-[#00105B] text-[#FCF9EC] gold-border-btn'
                    : 'bg-white/80 text-[#00105B] border border-[#00105B]/10 hover:bg-[#C9B5E0]/45'
                }`}
              >
                <span className="block text-[10px] font-semibold uppercase">
                  {d.isToday ? 'Today' : d.dayName}
                </span>
                <span className="block text-sm font-extrabold">{d.dayNum}</span>
                <span className="block text-[10px] opacity-75">{d.monthName}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#00105B]/75 mb-2 flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-[#6061B6]" />
          <span>Pick a Time</span>
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {TIME_SLOTS.map((slot) => {
            const active = selectedTime === slot.time;
            return (
              <button
                key={slot.time}
                type="button"
                onClick={() => setSelectedTime(slot.time)}
                className={`py-2 px-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                  active
                    ? 'bg-[#6061B6] text-[#FCF9EC] shadow-xs'
                    : 'bg-white/80 text-[#00105B] border border-[#00105B]/10 hover:bg-[#C9B5E0]/45'
                }`}
              >
                {slot.time}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="form-control w-full">
          <span className="label-text text-xs font-bold uppercase tracking-wider text-[#00105B]/75 mb-1.5 block">
            Your Name *
          </span>
          <input
            type="text"
            required
            placeholder="e.g. Aman Kumar"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="input input-bordered w-full bg-white/85 border border-[#00105B]/15 rounded-xl text-sm font-medium text-[#00105B]"
          />
        </label>

        <label className="form-control w-full">
          <span className="label-text text-xs font-bold uppercase tracking-wider text-[#00105B]/75 mb-1.5 block">
            Your Mobile Number *
          </span>
          <input
            type="tel"
            required
            placeholder="10-digit mobile number"
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            className="input input-bordered w-full bg-white/85 border border-[#00105B]/15 rounded-xl text-sm font-medium text-[#00105B]"
          />
        </label>
      </div>

      <label className="form-control w-full block">
        <span className="label-text text-xs font-bold uppercase tracking-wider text-[#00105B]/75 mb-1.5 block">
          Any Note or Style Request (Optional)
        </span>
        <input
          type="text"
          placeholder="e.g. Low taper fade, or bridal trial query"
          value={customerNotes}
          onChange={(e) => setCustomerNotes(e.target.value)}
          className="input input-bordered w-full bg-white/85 border border-[#00105B]/15 rounded-xl text-sm font-medium text-[#00105B]"
        />
      </label>

      {formError && (
        <p className="text-xs font-bold text-[#00105B] bg-[#C9B5E0]/60 rounded-xl px-3 py-2">
          {formError}
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-[#00105B]/10">
        <div className="text-xs font-semibold text-[#00105B]/70 flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#6061B6]" />
          <span>{SALON_INFO.shortAddress}</span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            href={SALON_INFO.telHref}
            className="btn bg-[#FCF9EC] hover:bg-[#C9B5E0] text-[#00105B] font-bold text-xs uppercase rounded-xl glass-btn gold-border-btn px-4"
          >
            <Phone className="w-3.5 h-3.5 text-[#6061B6]" />
            <span>Call</span>
          </a>
          <button
            type="submit"
            className="btn flex-1 sm:flex-initial bg-[#00105B] hover:bg-[#6061B6] text-[#FCF9EC] font-bold text-xs uppercase tracking-wider rounded-xl glass-btn gold-border-btn px-6"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#D4AF37]" />
            <span>Send on WhatsApp</span>
          </button>
        </div>
      </div>
    </form>
  );
};
