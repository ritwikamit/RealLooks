# REAL LOOKS SALON --- UI/UX DESIGN DOCUMENT

## 1. Creative direction

**Elegant · Natural · Modern · Premium · Warm**

Avoid generic pink salon templates, neon colors and excessive decorative
elements.

Use the requested: - Gradient olive green - Minimal sky blue - Refined
gold - Cream/white space

## 2. Color system

``` css
:root {
  --olive: #66733A;
  --olive-deep: #3F4A25;
  --olive-light: #7F8F45;

  --sky: #8FD3E8;
  --sky-light: #CBEAF2;

  --gold: #C9A227;
  --gold-light: #E2C76B;

  --cream: #FAF8F1;
  --white: #FFFFFF;
  --charcoal: #20231B;
  --muted: #6E7167;
}
```

Suggested olive gradient:

``` css
linear-gradient(135deg, #3F4A25 0%, #7F8F45 100%)
```

Color balance: - Olive/dark: 55% - Cream/white: 30% - Gold: 10% - Sky
blue: 5%

Sky blue is an accent, not the main color.

## 3. Typography

Display: - Playfair Display - Cormorant Garamond - DM Serif Display

Body: - Inter - Manrope - Geist

## 4. Logo direction

The current request says "design a logo for the gym," but this project
is **Real Looks Salon**, so the generated concept is for **Real Looks
Salon**.

Concept: - RL monogram - Elegant female profile - Olive green
hair/form - Gold detailing - Small sky-blue botanical accent - Minimal
serif wordmark

Suggested lockup:

``` text
[RL MONOGRAM]

REAL LOOKS
──── SALON ────
BE A MORE BEAUTIFUL YOU
```

The generated image is a concept and should be owner-approved before
production use.

## 5. Navigation

Desktop:

``` text
REAL LOOKS | Home | Services | About | Gallery | Book | Contact | BOOK NOW
```

Mobile: - Logo - Menu - Prominent Book button

## 6. Hero

Eyebrow: `REAL LOOKS · AURANGABAD`

Headline: **YOUR LOOK. YOUR SIGNATURE.**

Supporting copy: **Modern grooming and beauty experiences designed
around you.**

Buttons: - BOOK AN APPOINTMENT - EXPLORE SERVICES - GET DIRECTIONS

Use real salon photography.

## 7. Services

Heading: **SERVICES DESIGNED FOR YOU**

Cards contain: - Image - Category - Service name - Description -
Duration - Price if approved - Book button

Do not publish unverified services.

## 8. Booking UX

Dedicated `/book` route.

Progress:

``` text
01 SERVICE → 02 DATE → 03 TIME → 04 DETAILS → 05 CONFIRM
```

Service cards should show duration and price only when available.

Calendar: - Past dates disabled - Clear available/unavailable states

Time: - Pill buttons - Olive selected state

Details: - Name - Phone - Email optional - Notes optional

Review: - Service - Date - Time - Duration - Price - Customer

Confirmation:

``` text
✓
REQUEST RECEIVED

Reference: RL-20260921-A8F4

Please contact Real Looks to confirm availability.
```

## 9. Gallery

Editorial grid with: - Featured image - Smaller supporting images -
Lightbox - Optional category filter

Categories: `ALL | HAIR | GROOMING | BEAUTY | INTERIOR`

Only create categories that match actual supplied media.

## 10. About

Large editorial image + short story.

Keep paragraphs short and premium.

## 11. Instagram

Heading: **FOLLOW THE LOOKS**

Link: `@reallookssalon_aurangabad`

Avoid a live social feed embed in the first version for performance.

## 12. Location

Heading: **COME SEE US**

Address: **Q957+RR4, near Vayuputra Fitness Club, Dani Bigha,
Aurangabad, Bihar 824101, India**

Actions: - Get Directions - Call - WhatsApp

## 13. Mobile

Sticky: `BOOK | WHATSAPP | CALL`

During booking, ensure the bar never covers form controls.

## 14. Motion

Use subtle: - Fade - 12--20px reveal - Image reveal - Button hover -
Booking step transitions

Respect `prefers-reduced-motion`.

## 15. Accessibility

-   Strong contrast
-   Keyboard navigation
-   Screen-reader labels
-   Visible focus
-   Accessible calendar
-   Reduced motion
-   44px+ touch targets
-   Clear validation

## 16. Quality bar

Priority: 1. Real photography 2. Logo 3. Typography 4. Whitespace 5.
Booking UX 6. Mobile 7. Subtle motion 8. Performance
