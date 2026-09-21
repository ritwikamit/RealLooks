# REAL LOOKS SALON --- PRODUCT REQUIREMENTS DOCUMENT

**Phase:** Static website + online booking request experience\
**Future:** Real-time booking/CRM platform\
**Location:** Aurangabad, Bihar, India

## 1. Product goal

Create a premium, modern website for **Real Looks** that showcases salon
work, explains services, converts visitors into appointments, and makes
phone/WhatsApp/directions/social links immediately accessible.

The visual direction is **gradient olive green + minimal sky blue +
refined gold**, with cream/white space and elegant typography.

## 2. Public business research

The current local business result identifies **Real Looks** as a barber
shop at **Q957+RR4, near Vayuputra Fitness Club, Dani Bigha, Aurangabad,
Bihar 824101, India**. The result currently shows 4.5/5 from 2 reviews.
Because the review sample is small, do not make the rating a major
marketing claim without owner approval. citeturn0business0

Owner-supplied social profiles: - Instagram:
https://www.instagram.com/reallookssalon_aurangabad/ - Facebook:
https://www.facebook.com/people/Real-looks-salon/61593344644843/

The social pages were throttled during automated research, so follower
counts, service lists, offers, staff names, hours and other
social-specific facts are **not assumed**.

Owner-supplied Google Maps listing should be the primary directions
destination.

## 3. Target users

-   Local customers searching for grooming/salon services
-   Existing customers returning for appointments
-   Customers discovering Real Looks through Instagram/Facebook
-   Event/occasion customers
-   Customers comparing local salons

## 4. Pages

-   Home
-   Services
-   About
-   Gallery
-   Book Appointment
-   Contact

## 5. Home sections

1.  Navbar
2.  Hero
3.  Booking CTA
4.  Services
5.  About
6.  Featured work
7.  Why Real Looks
8.  Gallery
9.  Approved reviews/testimonials
10. Booking CTA
11. Location/contact
12. Footer

## 6. Hero

Suggested headline:

**YOUR LOOK. YOUR SIGNATURE.**

Supporting copy:

**Modern grooming and beauty experiences designed around you.**

CTAs: - BOOK AN APPOINTMENT - EXPLORE SERVICES - GET DIRECTIONS

Use real salon photography whenever available.

## 7. Services

The data model should support Hair, Grooming, Beauty and Special
Occasion categories. Possible examples include haircut, styling, colour,
treatments, beard, shave, facial, threading, waxing, manicure, pedicure
and event/bridal services.

**These are information-architecture examples, not verified Real Looks
services. Only owner-confirmed services may be published.**

Each service supports: - Name - Description - Duration - Price, if
approved - Bookable/not bookable - Category - Image

## 8. Online booking

Create `/book` with:

**Service → Staff (optional) → Date → Time → Customer details → Review →
Request**

Customer fields: - Full name - Mobile - Email optional - Notes optional

Show: - Service - Duration - Date - Time - Price if known - Location -
Booking reference

### Static-phase limitation

A static site cannot safely maintain shared real-time availability
across multiple customers.

Therefore Phase 1 should provide a polished **booking request system**
using configurable static availability and client-side validation, then
hand the request to WhatsApp/call.

Do not tell the customer a slot is permanently confirmed unless a real
backend or booking provider confirms it.

## 9. Booking success

Example:

**REQUEST RECEIVED**

Your appointment request has been created.

`RL-20260921-A8F4`

**Please contact Real Looks through WhatsApp/call to confirm
availability.**

Buttons: - WhatsApp - Call - Directions

## 10. Mobile conversion

Sticky bottom bar: **BOOK · WHATSAPP · CALL**

## 11. Gallery

Use real approved images: - Hair - Grooming - Beauty - Interior - Team -
Events

Do not use AI-generated people as representations of actual
customers/stylists.

## 12. Reviews

Never fabricate testimonials. Use owner-approved reviews or approved
public reviews.

## 13. SEO

Natural local terms: - Real Looks Salon Aurangabad - Real Looks
Aurangabad Bihar - salon in Dani Bigha - salon near Vayuputra Fitness
Club - hair salon Aurangabad Bihar - beauty salon Aurangabad

Implement unique titles, descriptions, canonical URLs, sitemap, robots
and appropriate `HairSalon`/`BeautySalon` structured data after facts
are verified.

## 14. Success criteria

-   Premium appearance
-   Excellent mobile UX
-   Fast image loading
-   Easy appointment flow
-   Working Maps/social links
-   No fabricated business facts
-   Static deployment
-   Clean path to future real-time booking

## 15. Future phase

-   Real-time availability
-   Staff calendars
-   Customer accounts
-   Reschedule/cancel
-   Payments/deposits
-   WhatsApp/SMS/email notifications
-   Admin dashboard
-   CRM
-   Offers/loyalty
