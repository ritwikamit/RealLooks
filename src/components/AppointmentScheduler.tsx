import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  PhoneCall, 
  MapPin, 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Scissors, 
  AlertCircle,
  Download,
  Share2
} from 'lucide-react';
import { SERVICES, STYLISTS, TIME_SLOTS, SALON_INFO } from '../data/salonData';
import { ServiceItem, Stylist, BookingRequest } from '../types';

interface AppointmentSchedulerProps {
  initialServiceId?: string | null;
  onBookingSuccess?: (booking: BookingRequest) => void;
}

export const AppointmentScheduler: React.FC<AppointmentSchedulerProps> = ({
  initialServiceId,
  onBookingSuccess,
}) => {
  // Wizard steps: 1: Service -> 2: Specialist -> 3: Date & Time -> 4: Client Info -> 5: Confirmation
  const [step, setStep] = useState<number>(1);

  // Form states
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedStylist, setSelectedStylist] = useState<Stylist>(STYLISTS[0]);
  
  // Date state: default tomorrow or today
  const today = new Date();
  const defaultDateStr = today.toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState<string>(defaultDateStr);
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM');
  const [timeFilter, setTimeFilter] = useState<'All' | 'Morning' | 'Afternoon' | 'Evening'>('All');

  // Customer details
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerNotes, setCustomerNotes] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  // Confirmation result
  const [confirmedBooking, setConfirmedBooking] = useState<BookingRequest | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Handle preselection when parent changes
  useEffect(() => {
    if (initialServiceId) {
      const found = SERVICES.find(s => s.id === initialServiceId);
      if (found) {
        setSelectedService(found);
        setStep(2);
      }
    } else if (!selectedService && SERVICES.length > 0) {
      setSelectedService(SERVICES[0]);
    }
  }, [initialServiceId]);

  // Generate date options for the next 14 days
  const availableDates = Array.from({ length: 14 }).map((_, i) => {
    const d = new Date();
    d.setDate(today.getDate() + i);
    const dateStr = d.toISOString().split('T')[0];
    const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
    const dayNum = d.getDate();
    const monthName = d.toLocaleDateString('en-US', { month: 'short' });
    return {
      dateStr,
      dayName,
      dayNum,
      monthName,
      isToday: i === 0,
      isWeekend: d.getDay() === 0 || d.getDay() === 6
    };
  });

  // Filtered services
  const filteredServices = SERVICES.filter(s => {
    if (selectedCategory === 'all') return true;
    return s.category === selectedCategory;
  });

  // Filtered time slots
  const filteredTimeSlots = TIME_SLOTS.filter(s => {
    if (timeFilter === 'All') return true;
    return s.period === timeFilter;
  });

  // Phone validation for Indian mobile numbers
  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s-]/g, '');
    const indianRegex = /^[6-9]\d{9}$/;
    if (!indianRegex.test(cleaned)) {
      setPhoneError('Please enter a valid 10-digit Indian mobile number');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const handlePhoneChange = (val: string) => {
    const clean = val.replace(/\D/g, '').slice(0, 10);
    setCustomerPhone(clean);
    if (clean.length === 10) {
      validatePhone(clean);
    } else {
      setPhoneError('');
    }
  };

  // Submit appointment request
  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) return;

    if (!customerName.trim()) {
      alert('Please enter your full name');
      return;
    }

    if (!validatePhone(customerPhone)) {
      return;
    }

    // Reference code: RL-YYYYMMDD-XXXX
    const dateClean = selectedDate.replace(/-/g, '');
    const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const bookingRef = `RL-${dateClean}-${randomSuffix}`;

    const newBooking: BookingRequest = {
      id: bookingRef,
      serviceId: selectedService.id,
      serviceName: selectedService.name,
      servicePrice: selectedService.price,
      serviceDuration: selectedService.durationMinutes,
      stylistId: selectedStylist.id,
      stylistName: selectedStylist.name,
      date: selectedDate,
      time: selectedTime,
      customerName: customerName.trim(),
      phone: customerPhone.trim(),
      email: customerEmail.trim() || undefined,
      notes: customerNotes.trim() || undefined,
      status: 'REQUESTED',
      createdAt: new Date().toISOString()
    };

    // Save to local storage for persistence
    try {
      const existing = localStorage.getItem('real_looks_bookings');
      const list = existing ? JSON.parse(existing) : [];
      list.unshift(newBooking);
      localStorage.setItem('real_looks_bookings', JSON.stringify(list));
    } catch (err) {
      console.warn('LocalStorage not available', err);
    }

    setConfirmedBooking(newBooking);
    setStep(5);
    if (onBookingSuccess) {
      onBookingSuccess(newBooking);
    }
  };

  // WhatsApp deep link
  const getWhatsAppLink = (booking: BookingRequest) => {
    const formattedDate = new Date(booking.date + 'T12:00:00').toLocaleDateString('en-IN', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    const msg = `Hello Real Looks Salon,\n\nI would like to request an appointment.\n\nName: ${booking.customerName}\nService: ${booking.serviceName} (₹${booking.servicePrice})\nStylist: ${booking.stylistName}\nDate: ${formattedDate}\nTime: ${booking.time}\nPhone: ${booking.phone}\nBooking Ref: ${booking.id}${booking.notes ? `\nNotes: ${booking.notes}` : ''}`;
    return `https://wa.me/${SALON_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  // Generate .ics calendar invite
  const downloadCalendarEvent = (booking: BookingRequest) => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Real Looks Unisex Salon//Appointment//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Real Looks Salon - ${booking.serviceName}`,
      `DESCRIPTION:Appointment request ${booking.id} for ${booking.serviceName} at Real Looks Unisex Salon Aurangabad.`,
      `LOCATION:${SALON_INFO.address}`,
      `STATUS:TENTATIVE`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Real_Looks_Appointment_${booking.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyBookingReference = () => {
    if (confirmedBooking) {
      navigator.clipboard.writeText(confirmedBooking.id);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const resetScheduler = () => {
    setStep(1);
    setConfirmedBooking(null);
    setCustomerName('');
    setCustomerPhone('');
    setCustomerEmail('');
    setCustomerNotes('');
  };

  return (
    <section 
      id="scheduler-section" 
      className="relative py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-20"
    >
      {/* Header of Scheduler Section */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full lucid-glass text-[#0D8F8B] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <CalendarIcon className="w-3.5 h-3.5 text-[#D6A838]" />
          <span>Direct Appointment Booking</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif-title font-bold text-[#192018] tracking-tight">
          Reserve Your Signature Experience
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#677565]">
          Select your customized service, specialist, and preferred time slot in under a minute.
        </p>
      </div>

      {/* Main Glassmorphic Scheduler Container */}
      <div className="lucid-glass rounded-3xl border border-white/80 shadow-[0_16px_40px_0_rgba(76,91,46,0.08)] overflow-hidden">
        
        {/* Step Progress Tracker */}
        <div className="bg-white/40 border-b border-white/60 px-4 sm:px-8 py-4.5 backdrop-blur-md">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {[
              { num: 1, label: 'Service' },
              { num: 2, label: 'Stylist' },
              { num: 3, label: 'Date & Time' },
              { num: 4, label: 'Details' },
              { num: 5, label: 'Confirm' },
            ].map((s, idx) => {
              const isActive = step === s.num;
              const isCompleted = step > s.num;
              return (
                <div key={s.num} className="flex items-center gap-2 flex-1 last:flex-none">
                  <div 
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      isCompleted 
                        ? 'bg-[#12B5AF] text-white shadow-xs' 
                        : isActive 
                        ? 'glossy-gold-btn text-[#4A3502] ring-4 ring-[#D6A838]/25 shadow-xs' 
                        : 'bg-white/60 text-[#677565] border border-white/80'
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4" /> : s.num}
                  </div>
                  <span className={`hidden md:inline text-xs font-bold ${isActive ? 'text-[#192018]' : 'text-[#677565]'}`}>
                    {s.label}
                  </span>
                  {idx < 4 && (
                    <div className={`hidden sm:block h-[1.5px] flex-1 mx-2 transition-all ${step > s.num ? 'bg-[#12B5AF]' : 'bg-black/10'}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Scheduler Step Body */}
        <div className="p-5 sm:p-8">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: SELECT SERVICE */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-serif-title font-bold text-[#192018]">
                    Step 1: Choose Your Service
                  </h3>
                  <p className="text-xs text-[#677565] mt-1">
                    Select the hair, grooming, skin or bridal service you would like to reserve.
                  </p>
                </div>

                {/* Category Pills with Lucid Glass */}
                <div className="flex flex-wrap gap-2 pb-2">
                  {[
                    { id: 'all', label: 'All Services' },
                    { id: 'hair', label: 'Hair Cuts & Styling' },
                    { id: 'grooming', label: 'Beard & Grooming' },
                    { id: 'facial', label: 'Facial & Skin' },
                    { id: 'spa', label: 'Hair Spa & Botox' },
                    { id: 'bridal', label: 'Bridal & Occasion' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        selectedCategory === cat.id
                          ? 'glossy-olive-btn text-white shadow-xs'
                          : 'lucid-glass text-[#3D483B] hover:bg-white/90'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Service Cards Grid with Glassmorphic styling */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 max-h-[440px] overflow-y-auto pr-1">
                  {filteredServices.map((service) => {
                    const isSelected = selectedService?.id === service.id;
                    return (
                      <div
                        key={service.id}
                        onClick={() => setSelectedService(service)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          isSelected
                            ? 'bg-white/90 border-[#D6A838] shadow-md ring-2 ring-[#D6A838]/30'
                            : 'lucid-glass-card hover:border-[#12B5AF]/40'
                        }`}
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider ${
                                  service.targetGender === 'Men' 
                                    ? 'bg-[#89CFF0]/25 text-[#2B78AE] border border-[#89CFF0]/40' 
                                    : service.targetGender === 'Women' 
                                    ? 'bg-[#F5D77F]/30 text-[#8E680E] border border-[#F5D77F]/50' 
                                    : 'bg-[#86D6B9]/25 text-[#3A7D73] border border-[#86D6B9]/40'
                                }`}>
                                  {service.targetGender}
                                </span>
                                {service.isPopular && (
                                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md glossy-gold-badge text-[#634705] flex items-center gap-1">
                                    <Sparkles className="w-2.5 h-2.5 text-[#C29324]" /> Popular
                                  </span>
                                )}
                              </div>
                              <h4 className="text-base font-bold text-[#192018] mt-2">
                                {service.name}
                              </h4>
                            </div>
                            <div className="text-right flex-shrink-0">
                              <span className="text-lg font-extrabold text-[#2F3B1A]">
                                ₹{service.price}
                              </span>
                              <p className="text-[11px] text-[#677565] font-medium flex items-center justify-end gap-1 mt-0.5">
                                <Clock className="w-3 h-3 text-[#D6A838]" />
                                {service.durationMinutes} min
                              </p>
                            </div>
                          </div>
                          <p className="text-xs text-[#677565] mt-2 line-clamp-2 leading-relaxed">
                            {service.description}
                          </p>
                        </div>

                        <div className="mt-3 pt-2.5 border-t border-black/5 flex items-center justify-between text-xs">
                          <span className="text-[11px] text-[#52A296] font-bold">
                            {service.categoryName}
                          </span>
                          <span className={`font-bold flex items-center gap-1 ${isSelected ? 'text-[#C29324]' : 'text-[#3D483B]'}`}>
                            {isSelected ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-[#C29324]" /> Selected
                              </>
                            ) : (
                              'Select Service'
                            )}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Continue Action */}
                <div className="flex justify-end pt-3 border-t border-white/60">
                  <button
                    disabled={!selectedService}
                    onClick={() => setStep(2)}
                    className="px-7 py-3 rounded-2xl glossy-gold-btn text-[#4A3502] font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-[1.02] active:scale-95 disabled:opacity-50 cursor-pointer shadow-sm"
                  >
                    <span>Continue to Stylist</span>
                    <ChevronRight className="w-4 h-4 text-[#4A3502]" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: SELECT SPECIALIST */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-serif-title font-bold text-[#192018]">
                    Step 2: Choose Specialist
                  </h3>
                  <p className="text-xs text-[#677565] mt-1">
                    Select a specialist or choose First Available for the most flexible appointment time.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {STYLISTS.map((stylist) => {
                    const isSelected = selectedStylist.id === stylist.id;
                    return (
                      <div
                        key={stylist.id}
                        onClick={() => setSelectedStylist(stylist)}
                        className={`p-4 rounded-2xl border flex items-center gap-3.5 transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white/95 border-[#D6A838] shadow-md ring-2 ring-[#D6A838]/30'
                            : 'lucid-glass-card hover:border-[#12B5AF]/40'
                        }`}
                      >
                        <img 
                          src={stylist.avatar} 
                          alt={stylist.name} 
                          className="w-14 h-14 rounded-full object-cover border-2 border-[#D6A838]/60 flex-shrink-0 shadow-2xs"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-bold text-[#192018] truncate">
                              {stylist.name}
                            </h4>
                            {isSelected && (
                              <span className="w-5 h-5 rounded-full bg-[#D6A838] text-white flex items-center justify-center text-xs shadow-xs">
                                <Check className="w-3 h-3" />
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-[#2F3B1A] font-semibold mt-0.5">
                            {stylist.role}
                          </p>
                          <p className="text-[11px] text-[#677565] mt-1 truncate">
                            {stylist.specialty}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Selected Service Quick Tag */}
                {selectedService && (
                  <div className="p-3.5 lucid-glass rounded-2xl border border-white/80 flex items-center justify-between text-xs">
                    <span className="text-[#677565]">Selected Service: <strong className="text-[#192018] font-bold">{selectedService.name}</strong></span>
                    <span className="font-extrabold text-[#2F3B1A]">₹{selectedService.price} ({selectedService.durationMinutes} min)</span>
                  </div>
                )}

                {/* Buttons */}
                <div className="flex items-center justify-between pt-3 border-t border-white/60">
                  <button
                    onClick={() => setStep(1)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-[#677565] hover:text-[#192018] flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back to Services
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="px-7 py-3 rounded-2xl glossy-gold-btn text-[#4A3502] font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-sm"
                  >
                    <span>Choose Date & Time</span>
                    <ChevronRight className="w-4 h-4 text-[#4A3502]" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: DATE & TIME */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-serif-title font-bold text-[#192018]">
                    Step 3: Select Date & Time
                  </h3>
                  <p className="text-xs text-[#677565] mt-1">
                    Salon hours: 9:00 AM – 9:00 PM daily. Past dates are automatically disabled.
                  </p>
                </div>

                {/* Horizontal Date Picker Carousel with Lucid Glass */}
                <div>
                  <label className="block text-xs font-bold text-[#192018] uppercase tracking-wider mb-2.5">
                    Available Dates (Next 14 Days)
                  </label>
                  <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none">
                    {availableDates.map((item) => {
                      const isSelected = selectedDate === item.dateStr;
                      return (
                        <button
                          key={item.dateStr}
                          onClick={() => setSelectedDate(item.dateStr)}
                          className={`flex-shrink-0 w-16 py-3.5 rounded-2xl border text-center transition-all cursor-pointer ${
                            isSelected
                              ? 'glossy-olive-btn text-white shadow-md'
                              : 'lucid-glass text-[#192018] hover:bg-white/90'
                          }`}
                        >
                          <span className={`text-[10px] uppercase font-bold block ${isSelected ? 'text-[#FFF2A8]' : 'text-[#677565]'}`}>
                            {item.dayName}
                          </span>
                          <span className="text-lg font-extrabold block my-0.5">
                            {item.dayNum}
                          </span>
                          <span className={`text-[10px] block ${isSelected ? 'text-white/90' : 'text-[#677565]'}`}>
                            {item.monthName}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Period Tabs */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <label className="text-xs font-bold text-[#192018] uppercase tracking-wider">
                      Available Time Slots
                    </label>
                    <div className="flex gap-1">
                      {(['All', 'Morning', 'Afternoon', 'Evening'] as const).map((period) => (
                        <button
                          key={period}
                          onClick={() => setTimeFilter(period)}
                          className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                            timeFilter === period
                              ? 'glossy-gold-badge text-[#4A3502]'
                              : 'lucid-glass-subtle text-[#677565] hover:bg-white/80'
                          }`}
                        >
                          {period}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slot Buttons */}
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {filteredTimeSlots.map((slot) => {
                      const isSelected = selectedTime === slot.time;
                      return (
                        <button
                          key={slot.time}
                          onClick={() => setSelectedTime(slot.time)}
                          className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            isSelected
                              ? 'glossy-gold-btn text-[#4A3502] shadow-xs'
                              : 'lucid-glass text-[#192018] hover:border-[#12B5AF]/40 hover:bg-white/90'
                          }`}
                        >
                          {slot.time}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Duration note */}
                <div className="p-3.5 lucid-glass rounded-2xl border border-[#89CFF0]/40 flex items-center gap-2 text-xs text-[#2B78AE]">
                  <Clock className="w-4 h-4 text-[#12B5AF] flex-shrink-0" />
                  <span>
                    Estimated appointment duration: <strong>{selectedService?.durationMinutes || 45} minutes</strong>. Please arrive 5 minutes early.
                  </span>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-3 border-t border-white/60">
                  <button
                    onClick={() => setStep(2)}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-[#677565] hover:text-[#192018] flex items-center gap-1 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="px-7 py-3 rounded-2xl glossy-gold-btn text-[#4A3502] font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-sm"
                  >
                    <span>Enter Client Details</span>
                    <ChevronRight className="w-4 h-4 text-[#4A3502]" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: CLIENT DETAILS */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-serif-title font-bold text-[#192018]">
                    Step 4: Your Contact Information
                  </h3>
                  <p className="text-xs text-[#677565] mt-1">
                    We will send appointment confirmation and request details to your phone.
                  </p>
                </div>

                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-[#192018] uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#52A296] absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="e.g. Rahul Singh"
                          className="w-full pl-10 pr-3 py-3 rounded-2xl border border-white/80 focus:border-[#12B5AF] focus:ring-2 focus:ring-[#12B5AF]/20 outline-none text-sm lucid-glass bg-white/70"
                        />
                      </div>
                    </div>

                    {/* Mobile Number with India +91 prefix */}
                    <div>
                      <label className="block text-xs font-bold text-[#192018] uppercase tracking-wider mb-1">
                        Mobile Number (WhatsApp) *
                      </label>
                      <div className="relative">
                        <div className="absolute left-3.5 top-3 text-xs font-bold text-[#2F3B1A] border-r border-black/10 pr-2.5 flex items-center gap-1">
                          <span>+91</span>
                        </div>
                        <input
                          type="tel"
                          required
                          value={customerPhone}
                          onChange={(e) => handlePhoneChange(e.target.value)}
                          placeholder="98765 43210"
                          maxLength={10}
                          className={`w-full pl-16 pr-3 py-3 rounded-2xl border outline-none text-sm lucid-glass bg-white/70 ${
                            phoneError 
                              ? 'border-red-400 focus:ring-red-400' 
                              : 'border-white/80 focus:border-[#12B5AF] focus:ring-2 focus:ring-[#12B5AF]/20'
                          }`}
                        />
                      </div>
                      {phoneError && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {phoneError}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email Optional */}
                  <div>
                    <label className="block text-xs font-bold text-[#192018] uppercase tracking-wider mb-1">
                      Email Address (Optional)
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#52A296] absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        placeholder="e.g. name@example.com"
                        className="w-full pl-10 pr-3 py-3 rounded-2xl border border-white/80 focus:border-[#12B5AF] focus:ring-2 focus:ring-[#12B5AF]/20 outline-none text-sm lucid-glass bg-white/70"
                      />
                    </div>
                  </div>

                  {/* Notes & Requests */}
                  <div>
                    <label className="block text-xs font-bold text-[#192018] uppercase tracking-wider mb-1">
                      Special Requests / Hair & Skin Notes (Optional)
                    </label>
                    <div className="relative">
                      <FileText className="w-4 h-4 text-[#52A296] absolute left-3.5 top-3.5" />
                      <textarea
                        value={customerNotes}
                        onChange={(e) => setCustomerNotes(e.target.value)}
                        rows={2}
                        placeholder="Any hair sensitivity, preferred style reference, or event timing..."
                        className="w-full pl-10 pr-3 py-2.5 rounded-2xl border border-white/80 focus:border-[#12B5AF] focus:ring-2 focus:ring-[#12B5AF]/20 outline-none text-sm lucid-glass bg-white/70"
                      />
                    </div>
                  </div>

                  {/* Summary Box with Lucid Glass & Gold Border */}
                  <div className="p-4 rounded-2xl lucid-glass border border-[#D6A838]/40 space-y-1.5 text-xs text-[#192018]">
                    <div className="flex justify-between">
                      <span className="text-[#677565]">Service:</span>
                      <span className="font-bold">{selectedService?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#677565]">Stylist:</span>
                      <span className="font-bold">{selectedStylist.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#677565]">Date & Time:</span>
                      <span className="font-bold">{selectedDate} at {selectedTime}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-black/5 font-extrabold text-[#2F3B1A]">
                      <span>Estimated Total:</span>
                      <span className="text-sm">₹{selectedService?.price}</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/60">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-4 py-2 rounded-xl text-xs font-bold text-[#677565] hover:text-[#192018] flex items-center gap-1 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" /> Back to Date
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-2xl glossy-gold-btn text-[#4A3502] font-extrabold text-sm uppercase tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer border border-white/80"
                    >
                      <span>Submit Appointment Request</span>
                      <CheckCircle2 className="w-4 h-4 text-[#4A3502]" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 5: CONFIRMATION / SUCCESS STATE */}
            {step === 5 && confirmedBooking && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-4 space-y-6 max-w-xl mx-auto"
              >
                {/* Success Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#12B5AF]/20 to-[#86D6B9]/30 border-2 border-[#12B5AF] flex items-center justify-center mx-auto text-[#0D8F8B] shadow-sm">
                  <Check className="w-8 h-8 text-[#0D8F8B]" />
                </div>

                <div>
                  <span className="text-xs font-extrabold text-[#12B5AF] tracking-widest uppercase">
                    Request Received
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif-title font-bold text-[#192018] mt-1">
                    Your Appointment Request Has Been Created
                  </h3>
                  <p className="text-xs text-[#677565] mt-1.5 max-w-md mx-auto">
                    Please contact Real Looks through WhatsApp or phone call to confirm slot availability.
                  </p>
                </div>

                {/* Booking Reference Card */}
                <div className="p-5 rounded-3xl lucid-glass border-2 border-dashed border-[#D6A838] text-center relative overflow-hidden shadow-sm">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#677565]">
                    Official Booking Reference
                  </span>
                  <div className="flex items-center justify-center gap-2 mt-1">
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-[#2F3B1A] tracking-wider">
                      {confirmedBooking.id}
                    </span>
                    <button
                      onClick={copyBookingReference}
                      className="p-2 rounded-xl lucid-glass hover:bg-white text-[#2F3B1A] text-xs cursor-pointer shadow-2xs"
                      title="Copy Reference"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                  {copiedLink && (
                    <span className="text-[10px] text-[#0D8F8B] font-bold block mt-1">
                      Reference copied to clipboard!
                    </span>
                  )}

                  {/* Summary Grid */}
                  <div className="grid grid-cols-2 gap-2.5 mt-4 pt-3 border-t border-black/5 text-xs text-left">
                    <div>
                      <span className="text-[#677565] text-[10px] uppercase block font-bold">Client</span>
                      <strong className="text-[#192018]">{confirmedBooking.customerName}</strong>
                    </div>
                    <div>
                      <span className="text-[#677565] text-[10px] uppercase block font-bold">Mobile</span>
                      <strong className="text-[#192018]">+91 {confirmedBooking.phone}</strong>
                    </div>
                    <div>
                      <span className="text-[#677565] text-[10px] uppercase block font-bold">Date & Time</span>
                      <strong className="text-[#192018]">{confirmedBooking.date} • {confirmedBooking.time}</strong>
                    </div>
                    <div>
                      <span className="text-[#677565] text-[10px] uppercase block font-bold">Service</span>
                      <strong className="text-[#2F3B1A]">{confirmedBooking.serviceName} (₹{confirmedBooking.servicePrice})</strong>
                    </div>
                  </div>
                </div>

                {/* Action Buttons: WhatsApp Hand-off (Primary) */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    id="whatsapp-confirm-button"
                    href={getWhatsAppLink(confirmedBooking)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirm via WhatsApp</span>
                  </a>

                  <a
                    id="call-salon-button"
                    href={`tel:${SALON_INFO.phoneClean}`}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-2xl lucid-glass hover:bg-white text-[#2F3B1A] font-bold text-sm shadow-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4 text-[#C29324]" />
                    <span>Call Salon</span>
                  </a>

                  <button
                    onClick={() => downloadCalendarEvent(confirmedBooking)}
                    className="w-full sm:w-auto px-5 py-3.5 rounded-2xl lucid-glass-subtle hover:bg-white text-[#677565] hover:text-[#192018] font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Save to Calendar</span>
                  </button>
                </div>

                {/* Reset button */}
                <div className="pt-2">
                  <button
                    onClick={resetScheduler}
                    className="text-xs text-[#0D8F8B] hover:text-[#12B5AF] font-bold underline cursor-pointer"
                  >
                    Schedule Another Appointment
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
