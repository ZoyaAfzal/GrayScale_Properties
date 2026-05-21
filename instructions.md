# Lovable Prompt: GraySkull Properties Website

## Project Overview

Build a **professional, low-maintenance property development company website** for **GraySkull** — a UK-based firm that builds, develops, and manages residential and commercial properties across the Midlands, with 40 years of experience.

**Tech Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · React

---

## Brand & Design Direction

- **Company Name:** GraySkull
- **Tone:** Clean, authoritative, refined — think high-trust professional services. Not flashy. Not startup-y.
- **Color Palette:**
  - Primary: Deep slate/charcoal (`#1E2A38`)
  - Accent: Warm gold/amber (`#C9A84C`) — conveys prestige and 40 years of heritage
  - Background: Off-white / light stone (`#F8F6F2`)
  - Text: Dark charcoal (`#1A1A1A`)
- **Typography:**
  - Headings: `Playfair Display` (serif — conveys heritage and trust)
  - Body: `Lato` or `Source Sans 3` (clean, readable)
  - Import both from Google Fonts
- **Imagery:** Use placeholder images via `https://placehold.co` — **minimal images**, only where structurally necessary (hero, one section divider). No gallery wall of photos.
- **No social media links anywhere.**
- **Dynamic copyright year** — use `new Date().getFullYear()` in the footer so it always shows the correct year automatically.

---

## Pages & Routing

Create the following **Next.js App Router pages**:

```
app/
├── page.tsx              → Home
├── about/page.tsx        → About Us
├── projects/page.tsx     → Our Projects
├── contact/page.tsx      → Contact Us
└── layout.tsx            → Root layout with Navbar + Footer
```

---

## Global Layout (`layout.tsx`)

### Navbar
- Left: Company name **"GraySkull"** in `Playfair Display`, gold accent color, optionally with a small stylised house/building SVG icon inline
- Right: Navigation links → `Home` · `About Us` · `Our Projects` · `Contact Us`
- Sticky on scroll with a subtle box-shadow appearing on scroll
- Mobile: hamburger menu (collapsible)
- Active link should be underlined/highlighted in gold

### Footer
- Two-column layout:
  - **Left:** Company name, one-line tagline, address block:
    ```
    GraySkull Properties
    Midlands, United Kingdom
    info@grayskull.co.uk
    ```
  - **Right:** Quick navigation links (same as navbar)
- Bottom bar: `© {dynamic year} GraySkull Properties Limited · All Rights Reserved`
- **No social media icons or links**
- Background: charcoal (`#1E2A38`), text: white/light

---

## Page Specifications

---

### 1. Home Page (`/`)

#### Section 1 — Hero
- Full-width banner with a dark overlay on a placeholder image (`placehold.co/1600x700`)
- Large heading: **"Built on Trust. Delivered with Precision."**
- Sub-heading: *"Developing residential and commercial properties across the Midlands for over 40 years."*
- One CTA button: **"View Our Projects"** → links to `/projects` (gold background, dark text, hover reverses)

#### Section 2 — Welcome / Intro
- Two-column layout (text left, subtle styled box right)
- Heading: **"Welcome to GraySkull Properties"**
- Body copy:
  > GraySkull is a specialist property development and management company based in the Midlands. We build, develop, and manage high-quality residential and commercial properties, working in close partnership with both small and large developers to deliver exceptional results.
- Right column: a clean stat/highlight card with three items:
  - 🏗 **40+ Years** of Experience
  - 🏘 **Residential & Commercial** Specialists
  - 🤝 **Partnering** with Developers of All Sizes

#### Section 3 — What We Do (Services)
- Section heading: **"Our Areas of Expertise"**
- Three cards in a responsive grid (1 col mobile, 3 col desktop):
  1. **Property Development** — We build and develop residential and commercial properties across the Midlands to the highest standards.
  2. **Property Management** — End-to-end management of properties, ensuring long-term value and tenant satisfaction.
  3. **Developer Partnerships** — We work in close partnership with small and large developers, bringing experience and reliability to every project.
- Each card: icon (simple SVG or emoji), bold title, short description, subtle border + hover shadow

#### Section 4 — Why Choose Us
- Light background section (`#F0EDE8`)
- Left: heading **"Why GraySkull?"** + three bullet points:
  - ✓ 40 years of trusted experience in the Midlands
  - ✓ Specialists in both residential and commercial sectors
  - ✓ Strong partnerships with developers at every scale
- Right: a pull-quote styled block:
  > *"Our commitment is to deliver properties that stand the test of time — built with care, integrity, and precision."*

#### Section 5 — CTA Banner
- Full-width dark banner (charcoal background, gold accent text)
- Heading: **"Ready to Start Your Next Project?"**
- Button: **"Get in Touch"** → links to `/contact`

---

### 2. About Us Page (`/about`)

#### Section 1 — Page Header
- Simple page hero with charcoal background, white heading: **"About GraySkull"**
- Sub-line: *"Four decades of building quality, trust, and community across the Midlands."*

#### Section 2 — Our Story
- Single-column, comfortable reading width (max ~720px, centred)
- Heading: **"Who We Are"**
- Body:
  > GraySkull Properties has been at the heart of the Midlands property landscape for over 40 years. From our roots as a residential builder, we have grown into a full-service property development and management company, trusted by homeowners, investors, and developers alike.
  >
  > We specialise in residential and commercial properties and take pride in working in true partnership with developers whether they are an individual building their first home or a large-scale commercial developer.

#### Section 3 — Our Values (nested cards)
- Section heading: **"What Drives Us"**
- Three nested cards inside a single parent panel (light background card wrapping three inner value blocks):
  - **Integrity** — Honest, transparent dealings on every project.
  - **Quality** — We never compromise on the standard of our builds.
  - **Partnership** — Your goals are our goals. We succeed together.

#### Section 4 — Experience Timeline (nested section)
- Heading: **"40 Years of Milestones"**
- Vertical timeline component with 4–5 placeholder milestones:
  - `1985` — GraySkull founded in the Midlands
  - `1995` — Expanded into commercial property development
  - `2005` — Began large-scale developer partnerships
  - `2015` — Portfolio surpassed 500 completed properties
  - `2025` — Continuing to build the Midlands' future

---

### 3. Our Projects Page (`/projects`)

#### Section 1 — Page Header
- Same style as About page header
- Heading: **"Our Projects"**
- Sub-line: *"A selection of our residential and commercial developments across the Midlands."*

#### Section 2 — Filter Tabs (nested UI)
- Two tab buttons: **"Residential"** · **"Commercial"**
- Default: both shown. Clicking a tab filters the cards (use React `useState`)
- Active tab: gold underline

#### Section 3 — Project Cards Grid
- 3-column responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- **6 placeholder project cards** — 3 residential, 3 commercial:

  Each card contains:
  - Placeholder image: `placehold.co/600x400`
  - Tag badge: `Residential` or `Commercial` (colour-coded)
  - Project name (e.g. "Maple Grove Development", "Ironbridge Business Park")
  - Location (e.g. "Dudley, West Midlands")
  - Short one-line description
  - Status badge: `Completed` or `In Progress`

- No individual project detail pages needed — keep it static and low-maintenance.

---

### 4. Contact Us Page (`/contact`)

#### Section 1 — Page Header
- Heading: **"Contact Us"**
- Sub-line: *"We'd love to hear from you. Get in touch with our team."*

#### Section 2 — Two-column layout

**Left — Contact Details:**
- 📍 Address: GraySkull Properties, Midlands, United Kingdom
- 📞 Phone: 07700 000000 *(placeholder)*
- 📧 Email: info@grayskull.co.uk
- Brief note: *"We aim to respond to all enquiries within 2 business days."*

**Right — Contact Form:**
- Fields: Full Name, Email Address, Phone (optional), Message (textarea)
- Submit button: **"Send Enquiry"** (gold, full width on mobile)
- On submit: show a simple success message (no backend needed — just UI state)
- **No third-party form service required**

#### Section 3 — Embedded Map Placeholder (nested)
- A simple styled box (charcoal border, light background) with centred text: *"📍 Based in the Midlands, UK"* — **no actual Google Maps embed** (keeps it zero-maintenance)

---

## Component Architecture

Create the following reusable components under `components/`:

```
components/
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── ui/
│   ├── Button.tsx          → variants: primary (gold), secondary (outline)
│   ├── SectionHeader.tsx   → reusable heading + subheading block
│   ├── Card.tsx            → generic card with title, description, optional icon
│   └── Badge.tsx           → small tag/status badge
├── home/
│   ├── Hero.tsx
│   ├── IntroSection.tsx
│   ├── ServicesGrid.tsx
│   ├── WhyChooseUs.tsx
│   └── CTABanner.tsx
├── about/
│   ├── OurStory.tsx
│   ├── ValuesSection.tsx
│   └── Timeline.tsx
├── projects/
│   ├── ProjectCard.tsx
│   └── ProjectsGrid.tsx    → includes filter tabs
└── contact/
    ├── ContactDetails.tsx
    └── ContactForm.tsx
```

---

## Tailwind Configuration Notes

Extend `tailwind.config.ts` with custom theme values:

```ts
theme: {
  extend: {
    colors: {
      slate: { DEFAULT: '#1E2A38' },
      gold: { DEFAULT: '#C9A84C', light: '#E0C97A' },
      stone: { DEFAULT: '#F8F6F2' },
      pebble: '#F0EDE8',
    },
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      body: ['Lato', 'sans-serif'],
    },
  },
}
```

Add Google Fonts import to `app/layout.tsx` via `<link>` tags in `<head>`.

---

## Additional Requirements

- **No social media links** anywhere — not in footer, not in nav, nowhere.
- **Minimal images** — only hero and project card placeholders. No gallery page.
- **Dynamic year in footer**: `© {new Date().getFullYear()} GraySkull Properties Limited`
- **Responsive**: mobile-first, fully responsive at all breakpoints
- **Accessibility**: semantic HTML (`<main>`, `<section>`, `<nav>`, `aria-label`), sufficient colour contrast
- **Performance**: no unnecessary dependencies — keep it lean
- **No CMS, no database, no auth** — fully static content, easy to maintain
- All copy/content is hardcoded (no CMS needed per client brief — "low maintenance")

---

## Tone of Content

All copy should feel:
- **Professional and established** — 40 years of heritage, not a startup
- **Warm but not casual** — trustworthy, community-rooted
- **Concise** — no waffle, no filler paragraphs
- **UK English** throughout (e.g. "colour", "recognised", "programme")

---

## Deliverable Checklist

- [ ] `app/layout.tsx` with Navbar + Footer
- [ ] `app/page.tsx` — Home (5 sections)
- [ ] `app/about/page.tsx` — About (4 sections)
- [ ] `app/projects/page.tsx` — Projects (filter tabs + grid)
- [ ] `app/contact/page.tsx` — Contact (form + details)
- [ ] All reusable components under `components/`
- [ ] `tailwind.config.ts` with custom theme
- [ ] Google Fonts loaded in layout
- [ ] Dynamic copyright year in footer
- [ ] Fully responsive
- [ ] Zero social media links