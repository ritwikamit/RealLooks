# REAL LOOKS SALON --- BACKEND SCHEMA / FUTURE DATA MODEL

**Current phase:** No backend\
**Purpose:** Future real-time appointment platform

## 1. Architecture

### Phase 1

``` text
Next.js Static Website
 ├─ Static salon data
 ├─ Static services
 ├─ Static/demo availability
 ├─ Booking UI
 ├─ WhatsApp
 ├─ Phone
 └─ Google Maps
```

### Phase 2

``` text
Next.js
 ↓
Booking API
 ↓
Availability Engine
 ↓
PostgreSQL + Prisma
 ↓
Appointments / Customers / Staff / Services
```

## 2. Salon

``` text
Salon
- id
- name
- slug
- description
- phone
- whatsappNumber
- email
- instagramUrl
- facebookUrl
- mapsUrl
- logoUrl
- addressId
- timezone
- createdAt
- updatedAt
```

Timezone: `Asia/Kolkata`

## 3. Address

``` text
Address
- id
- line1
- locality
- city
- state
- postalCode
- country
- latitude
- longitude
```

Current public address:
`Q957+RR4, near Vayuputra Fitness Club, Dani Bigha, Aurangabad, Bihar 824101, India`

## 4. Customer

``` text
Customer
- id
- firstName
- lastName
- phone
- email
- notes
- createdAt
- updatedAt
```

## 5. Staff

``` text
Staff
- id
- firstName
- lastName
- displayName
- role
- bio
- imageUrl
- isActive
- createdAt
- updatedAt
```

Possible roles:
`STYLIST | BARBER | BEAUTICIAN | MAKEUP_ARTIST | MANAGER | ADMIN`

Do not publish staff data until verified.

## 6. Service Category

``` text
ServiceCategory
- id
- name
- slug
- description
- imageUrl
- sortOrder
- isActive
```

## 7. Service

``` text
Service
- id
- categoryId
- name
- slug
- description
- durationMinutes
- priceMinor
- currency
- bufferBeforeMinutes
- bufferAfterMinutes
- isBookable
- isActive
- sortOrder
- createdAt
- updatedAt
```

Store money as integer minor units where practical.

## 8. Staff-Service

``` text
StaffService
- staffId
- serviceId
- isActive
```

Composite unique key: `staffId + serviceId`

## 9. Working hours

``` text
WorkingHour
- id
- staffId
- dayOfWeek
- startTime
- endTime
- isActive
```

Actual Real Looks hours must be verified before insertion.

## 10. Breaks

``` text
StaffBreak
- id
- staffId
- date
- startTime
- endTime
- reason
```

## 11. Blocked dates

``` text
ScheduleBlock
- id
- staffId
- date
- startTime
- endTime
- reason
```

Null start/end can represent a full-day block.

## 12. Appointment

``` text
Appointment
- id
- customerId
- staffId
- serviceId
- startAt
- endAt
- status
- source
- customerNotes
- internalNotes
- createdAt
- updatedAt
```

Statuses: `PENDING | CONFIRMED | COMPLETED | CANCELLED | NO_SHOW`

Sources:
`WEBSITE | WHATSAPP | PHONE | INSTAGRAM | FACEBOOK | WALK_IN | ADMIN`

## 13. Booking

``` text
Booking
- id
- appointmentId
- reference
- confirmationMethod
- createdAt
```

Reference must be unique.

## 14. Availability engine

``` text
Working hours
 + Service duration
 + Buffers
 + Breaks
 + Holidays
 + Existing appointments
 = Available slots
```

The server is authoritative in Phase 2.

## 15. Double-booking prevention

Before confirmation: 1. Start transaction 2. Re-check slot 3. Check
overlapping appointment 4. Create appointment if free 5. Commit

Reject if occupied.

## 16. Cancellation

``` text
Cancellation
- id
- appointmentId
- cancelledBy
- reason
- createdAt
```

## 17. Payments --- optional

``` text
Payment
- id
- appointmentId
- customerId
- amountMinor
- currency
- provider
- providerPaymentId
- status
- paidAt
- createdAt
```

Statuses: `PENDING | SUCCESS | FAILED | REFUNDED`

## 18. Gallery

``` text
GalleryImage
- id
- title
- altText
- imageUrl
- category
- sortOrder
- isPublished
- createdAt
- updatedAt
```

## 19. Reviews

``` text
Review
- id
- customerId
- name
- rating
- comment
- source
- isApproved
- isFeatured
- createdAt
```

## 20. Offers

``` text
Offer
- id
- title
- description
- code
- discountType
- discountValue
- startsAt
- endsAt
- isPublished
```

## 21. Admin

``` text
User
- id
- email
- passwordHash
- role
- isActive
- createdAt
- updatedAt
```

Never store plaintext passwords.

## 22. Audit log

``` text
AuditLog
- id
- userId
- action
- entity
- entityId
- metadata
- createdAt
```

## 23. Future API

``` text
GET  /api/services
GET  /api/staff
GET  /api/availability
POST /api/bookings
GET  /api/bookings/:reference
POST /api/bookings/:reference/cancel

GET    /api/admin/appointments
PATCH  /api/admin/appointments/:id
POST   /api/admin/services
PATCH  /api/admin/services/:id
POST   /api/admin/staff
PATCH  /api/admin/staff/:id
POST   /api/admin/schedule
```

## 24. Migration strategy

Phase 1: `data/*.ts`

Phase 2: `Repository Interface → Prisma → PostgreSQL`

Example:

``` ts
interface BookingRepository {
  getAvailability(date: string, serviceId: string): Promise<Slot[]>;
  createBooking(input: CreateBookingInput): Promise<Booking>;
  getBooking(reference: string): Promise<Booking | null>;
}
```

## 25. Critical rule

Do **not** build PostgreSQL/auth/payment/admin infrastructure in the
first static build.

Build the booking UI and data contracts now so the future backend can
replace the static repository without rewriting the public interface.
