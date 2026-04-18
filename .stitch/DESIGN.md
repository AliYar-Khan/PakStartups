# Design System: PakStartups
**Project:** PakStartups.org — Pakistan's Grassroots Startup Ecosystem
**Source Assets:** `public/PakStartups logo png.png`, `public/Desktop banner.png`, `public/mobile banner.png`

---

## 1. Visual Theme & Atmosphere

PakStartups has a **warm, approachable, and grassroots** visual identity. The aesthetic is:

- **Friendly & Community-First** — Soft green tones communicate growth, hope, and accessibility rather than cold corporate energy.
- **Illustrated & Human** — The brand uses hand-drawn style line-art illustrations (a thinking founder, a growth chart, a laptop) that signal inclusiveness and relatability.
- **Bold but Not Aggressive** — Heavy-weight typography with generous letter-spacing communicates confidence without feeling intimidating.
- **Pakistan-rooted** — The logo icon subtly incorporates a crescent-and-star motif within the stylized "P", grounding the brand in its cultural identity.
- **Flat with Depth** — Minimal use of shadows; depth is communicated through color contrast between the two greens rather than elevation or blur.

> **One-word vibe: "Grassroots"** — Energetic, grounded, accessible.

---

## 2. Color Palette & Roles

All colors are extracted directly from the logo and banner assets.

| Descriptive Name | Hex | Role |
|---|---|---|
| **Forest Green** | `#2D6A4F` | Primary brand color — logo background, dark text on light BG, pill/badge fills, icon strokes |
| **Sage Green** | `#8FC87A` | Secondary / accent — banner background, light fills on the logo "P" letterform |
| **Leaf Light** | `#A8D891` | Hover state for Sage Green; subtle highlight tint |
| **Ink Dark** | `#1A3D2B` | Body text on light backgrounds, strong headings, darkest strokes in illustrations |
| **Chalk White** | `#FFFFFF` | Page background (light mode), card surfaces, text on dark backgrounds |
| **Off-White Mist** | `#F4FAF6` | Subtle section backgrounds, input fields, muted card fills |
| **Warm Grey** | `#6B7280` | Secondary/placeholder text, metadata, timestamps, icon defaults |

### Color Relationships
- **Primary pairing:** Forest Green `#2D6A4F` on Sage Green `#8FC87A` background — the brand's signature look (see banner).
- **Inverted pairing:** Chalk White `#FFFFFF` text on Forest Green `#2D6A4F` — used for CTAs, badges, and nav bars.
- **Content pairing:** Ink Dark `#1A3D2B` text on Off-White Mist `#F4FAF6` — for body content and cards.

---

## 3. Typography Rules

### Font Family
The banner uses a **bold, rounded sans-serif** with tight tracking. The closest system/Google Font match is:

- **Display / Headings:** `Nunito` (Bold 700–800, or ExtraBold 900) — matches the banner headline's thick strokes and slight roundness. Alternatively `Plus Jakarta Sans ExtraBold`.
- **Body / UI Text:** `Inter` or `Nunito` Regular/Medium — clean, legible, neutral.
- **Monospace (code/tags):** `JetBrains Mono` — for code snippets or skill tags if needed.

### Scale & Usage

| Token | Size | Weight | Usage |
|---|---|---|---|
| `display` | 48–64px | 900 ExtraBold | Hero headlines |
| `h1` | 36–40px | 800 ExtraBold | Page titles |
| `h2` | 28–32px | 700 Bold | Section headings |
| `h3` | 22–24px | 600 SemiBold | Card titles, sub-sections |
| `body-lg` | 18px | 400 Regular | Lead paragraphs |
| `body` | 16px | 400 Regular | Standard body copy |
| `body-sm` | 14px | 400 Regular | Secondary info, captions |
| `label` | 12px | 600 SemiBold | Tags, badges, nav labels |
| `micro` | 11px | 500 Medium | Timestamps, metadata |

### Text Color Rules
- Headings on light BG → **Ink Dark** `#1A3D2B`
- Body on light BG → **Forest Green** `#2D6A4F` or **Warm Grey** `#6B7280`
- Any text on Forest Green BG → **Chalk White** `#FFFFFF`
- Any text on Sage Green BG → **Forest Green** `#2D6A4F` (high contrast, as seen in banner)

---

## 4. Component Stylings

### Buttons
- **Primary CTA:** Forest Green `#2D6A4F` fill, Chalk White text, `border-radius: 8px` (slightly rounded, not pill-shaped), `font-weight: 700`, `padding: 12px 24px`. On hover: darken to `#1A3D2B`.
- **Secondary / Ghost:** 2px Forest Green border, Forest Green text, transparent fill. On hover: fill with `Off-White Mist`.
- **Pill / Tag Buttons:** Sage Green `#8FC87A` fill, Forest Green text, `border-radius: 999px` (full pill). Used for category chips and skill tags.
- **Danger:** Standard semantic red `#DC2626` — only for destructive actions (delete, etc.).

### Badges & Labels
- Style: Pill-shaped (`border-radius: 999px`), small (`padding: 2px 10px`), `font-size: 12px`, SemiBold.
- **Role badges** (Founder, Investor, etc.): Forest Green background, Chalk White text.
- **Stage badges** (MVP, Growth, etc.): Sage Green background, Ink Dark text.
- **Category tags**: Off-White Mist background, Warm Grey text with subtle border.

### Cards
- Background: **Chalk White** `#FFFFFF`
- Border: 1px solid `#E5E7EB` (light grey — barely visible)
- Border radius: `12px`
- Shadow: `0 2px 8px rgba(45, 106, 79, 0.08)` — very subtle green-tinted shadow
- On hover: border color shifts to Sage Green `#8FC87A`, shadow deepens slightly.

### Navigation Bar
- Background: **Chalk White** with `border-bottom: 1px solid #E5E7EB`
- Logo: Full logo mark (icon + wordmark) at left
- Nav links: `body-sm` size, Warm Grey, active link in Forest Green with an underline accent
- CTA button: Primary button style ("Join Now" / "Sign In")

### Input Fields
- Background: `Off-White Mist #F4FAF6`
- Border: `1px solid #D1D5DB`; on focus: `2px solid #2D6A4F` (Forest Green)
- Border radius: `8px`
- Placeholder text: Warm Grey `#6B7280`

### Illustrations & Icons
- Icon style: **Line-art**, stroke weight ~2px, matching Forest Green `#2D6A4F`.
- The brand illustration style is **flat, slightly cartoonish human figures** with a single accent stroke — do not use photographic imagery where illustration is set.
- Icon library recommendation: `Lucide Icons` or `Phosphor Icons` (outline style) to complement the brand stroke aesthetic.

---

## 5. Layout Principles

### Grid & Spacing
- **Base unit:** 8px (all spacing is a multiple of 8)
- **Max content width:** 1280px, centered
- **Page gutter (desktop):** 80px horizontal padding
- **Page gutter (mobile):** 20px horizontal padding
- **Section vertical padding:** 80px top/bottom on desktop, 48px on mobile
- **Card grid:** 3-column on desktop, 2-column on tablet, 1-column on mobile

### Whitespace Strategy
- Generous whitespace is used to let content breathe — the brand is not dense or information-heavy.
- Section separators are **horizontal rule lines** (3px, Sage Green, tapered) as seen in the banner — not full dividers, just decorative strokes.
- Sections alternate between **Chalk White** and **Off-White Mist** backgrounds for rhythm without a hard border.

### Responsive Philosophy
- **Mobile-first** with a clean stack-to-grid breakpoint at 768px.
- The brand's illustration style scales well — hero illustrations move from side-by-side (desktop) to stacked below text (mobile), as evidenced in the two banner variants.

---

## 6. Brand Iconography & Logo Usage

### Logo Mark (Icon)
- A rounded-square container (`border-radius: 18px`) in **Forest Green** `#2D6A4F`.
- Inside: A stylized bold "P" letterform in **Sage Green** `#8FC87A`, with a crescent-and-sparkle motif overlaid in **Forest Green** strokes.
- **Minimum size:** 32×32px (icon only). Below this, use text wordmark only.
- **Do not** recolor or stretch the logo mark.

### Wordmark
- "PakStartups" — Bold, matching the display font (Nunito ExtraBold or Plus Jakarta Sans ExtraBold).
- Color: **Forest Green** on light backgrounds, **Chalk White** on dark backgrounds.

### Clear Space
- Maintain a minimum clear space of **50% of the logo height** on all sides.

### Logo Don'ts
- Do not place on busy photographic backgrounds.
- Do not use the Sage Green as a logo container background (low contrast).
- Do not add drop shadows to the logo mark.

---

## 7. Illustration & Decorative Elements

- **Illustration style:** Flat line-art, monochromatic (single Forest Green stroke), slightly cartoonish proportions.
- **Decorative strokes:** Short, tapered horizontal lines (as seen under the banner headline) — used as section accents, not full dividers.
- **Sparkle / star motif:** The 4-point sparkle from the logo can be used sparingly as a brand flourish (e.g., on empty states, success screens).
- **Crescent motif:** Reserved for brand-level usage only (logo, splash screens) — do not use as a generic UI element.

---

## 8. Motion & Interaction

- **Philosophy:** Subtle and purposeful — animations should feel organic and not distracting.
- **Hover transitions:** `transition: all 0.2s ease` on interactive elements.
- **Button press:** `transform: scale(0.97)` on active state.
- **Card hover:** `transform: translateY(-2px)` + deeper shadow.
- **Page transitions:** Simple fade-in (`opacity 0 → 1`, 200ms).
- No flashy motion — the community-first brand should feel warm and calm, not flashy.
