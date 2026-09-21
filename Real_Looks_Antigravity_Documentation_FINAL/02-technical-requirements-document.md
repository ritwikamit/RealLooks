# REAL LOOKS SALON --- TECHNICAL REQUIREMENTS DOCUMENT

## 1. Recommended stack

-   Next.js 15+
-   React
-   TypeScript
-   Tailwind CSS
-   shadcn/ui
-   Lucide React
-   Motion/Framer Motion

Use static generation wherever possible.

## 2. Structure

``` text
real-looks/
├── app/
│   ├── page.tsx
│   ├── about/
│   ├── services/
│   ├── gallery/
│   ├── book/
│   └── contact/
├── components/
│   ├── layout/
│   ├── booking/
│   ├── services/
│   ├── gallery/
│   └── ui/
├── data/
│   ├── salon.ts
│   ├── services.ts
│   ├── staff.ts
│   └── availability.ts
├── types/
├── lib/
│   └── booking/
└── public/
    ├── brand/
    └── gallery/
```

## 3. Static business data

Keep business information in data files rather than UI components.

``` ts
export const salon = {
  name: "Real Looks",
  city: "Aurangabad",
  state: "Bihar",
  address: "Q957+RR4, near Vayuputra Fitness Club, Dani Bigha, Aurangabad, Bihar 824101, India",
  instagram: "https://www.instagram.com/reallookssalon_aurangabad/",
  facebook: "https://www.facebook.com/people/Real-looks-salon/61593344644843/",
  mapsUrl: "OWNER_SUPPLIED_GOOGLE_MAPS_URL"
};
```

Phone and hours must be owner-verified before insertion.

## 4. Types

``` ts
type Service = {
  id: string;
  name: string;
  category: string;
  description: string;
  durationMinutes: number;
  price?: number;
  isBookable: boolean;
};

type BookingRequest = {
  id: string;
  serviceId: string;
  staffId?: string;
  date: string;
  time: string;
  customerName: string;
  phone: string;
  email?: string;
  notes?: string;
  status: "REQUESTED";
};
```

## 5. Booking engine --- Phase 1

Create:

``` text
lib/booking/
├── availability.ts
├── validation.ts
├── booking-id.ts
└── whatsapp.ts
```

`getAvailableSlots(serviceId, staffId, date)` reads static/configurable
availability.

Past dates must be disabled.

Validate: - Service - Date - Time - Name - Indian mobile number

Use Zod.

## 6. Booking flow

``` text
Browser
 ↓
Select service
 ↓
Select staff/date/time
 ↓
Validate
 ↓
Generate request reference
 ↓
Confirmation
 ↓
WhatsApp / Call
```

The reference is a request identifier, not proof of server-side
reservation.

## 7. WhatsApp

Generate a WhatsApp deep link from the configured salon number.

Message:

``` text
Hello Real Looks,

I would like to request an appointment.

Name:
Service:
Date:
Time:
Phone:
Booking Ref:
```

Do not guess the salon's WhatsApp number.

## 8. Future booking architecture

``` text
Browser
  ↓
Booking API
  ↓
Availability Service
  ↓
PostgreSQL
  ↓
Transaction / overlap check
  ↓
Confirmed Appointment
```

The server must re-check availability before confirmation.

## 9. Double-booking protection

Future backend must check: - Staff working hours - Existing
appointments - Service duration - Before/after buffers - Breaks -
Holidays/blocked dates

Use a transaction/locking strategy and indexed appointment times.

## 10. SEO

Implement: - Metadata - Open Graph - Canonical - sitemap - robots -
JSON-LD

Use `HairSalon` or another appropriate Schema.org type only after the
actual business category/services are verified.

## 11. Performance

-   Next/Image
-   WebP/AVIF
-   Responsive image sizes
-   Lazy loading below fold
-   Minimal JS
-   No unnecessary Instagram/Facebook embeds
-   Prefer external Maps directions link over heavy iframe

## 12. Accessibility

-   Semantic HTML
-   Keyboard booking flow
-   Accessible calendar
-   Labels
-   Visible focus
-   Error messages
-   Reduced motion
-   44px+ touch targets

## 13. Security

Phase 1 has no sensitive backend.

Future: - Server validation - Rate limiting - CAPTCHA/spam protection -
Secure authentication - Authorization - Secure cookies - Audit logging -
Payment webhook verification

## 14. Analytics

Events: - view_service - start_booking - select_service - select_date -
select_time - booking_request - click_whatsapp - click_call -
click_directions - click_instagram - click_facebook

## 15. Deployment

Recommended: - GitHub - Vercel - Custom domain - Preview deployments

## 16. Phase 2

Add PostgreSQL + Prisma + API/server actions only after the static site
is approved.
