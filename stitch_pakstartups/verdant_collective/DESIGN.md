# Design System Strategy: The Organic Architect

## 1. Overview & Creative North Star
This design system is built upon the North Star of **"The Organic Architect."** For the PakStartups Volunteer & Ambassador ecosystem, we must balance the rigorous structure of a professional incubator with the warmth of a community-driven movement. 

We are moving away from the "SaaS-template" look—characterized by thin grey borders and flat grids—and moving toward a **High-End Editorial** experience. By utilizing intentional asymmetry, deep tonal layering, and sophisticated typography scales, we create an environment that feels prestigious yet accessible. The interface should feel like a premium digital journal: structured by logic, but softened by organic color transitions and generous breathing room.

---

## 2. Color & Texture Strategy
Our palette is rooted in the earth, using deep forest tones and mist-like neutrals to convey growth and stability.

### The "No-Line" Rule
To achieve a high-end feel, **1px solid borders are strictly prohibited** for sectioning or containment. Boundaries must be defined solely through background color shifts. Use `surface-container-low` (#d5fde2) sections sitting against a `surface` (#e8ffee) background to define space.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked sheets of fine paper.
*   **Base:** `surface` (#e8ffee)
*   **Sectioning:** `surface-container-low` (#d5fde2) for large secondary areas.
*   **Prominence:** `surface-container-highest` (#c4ecd2) for interactive elements or focused content blocks.
*   **Nesting:** When a card is placed inside a section, the card should use `surface-container-lowest` (#ffffff) to "pop" naturally against the tinted background.

### The "Glass & Gradient" Rule
Flat colors can feel static. To inject "visual soul":
*   **Signature Gradients:** For primary CTAs and Hero sections, use a subtle linear gradient (135°) from `primary` (#0f5238) to `primary_container` (#2D6A4F).
*   **Glassmorphism:** For floating navigation or modal overlays, use `surface` (#e8ffee) at 70% opacity with a `24px` backdrop-blur. This ensures the organic greens bleed through the UI, maintaining a sense of depth.

---

## 3. Typography: Editorial Authority
We utilize **Plus Jakarta Sans** to bridge the gap between modern tech and professional journalism.

*   **Display & Headlines (ExtraBold):** Use `display-lg` and `headline-lg` to create "Editorial Moments." These should be set with tight letter-spacing (-0.02em) to feel authoritative and "ink-heavy."
*   **Card Titles (Bold):** `title-lg` should be used for card headings to ensure a clear information hierarchy.
*   **Body Text (Regular):** Use `body-md` for general legibility. The use of `Warm Grey` (#6B7280) for body text reduces visual vibration against the green-tinted backgrounds, making long-form application instructions easier to digest.

---

## 4. Elevation & Depth
Depth is a functional tool, not a decoration. We achieve it through **Tonal Layering** rather than traditional structural lines.

### The Layering Principle
Hierarchy is established by "stacking" surface tiers. A `surface-container-lowest` card placed on a `surface-container-low` background creates a soft, natural lift that mimics physical paper without needing a shadow.

### Ambient Shadows
Shadows are reserved for "floating" elements (e.g., Modals, Dropdowns).
*   **Blur:** Minimum 32px.
*   **Opacity:** 4%–6%.
*   **Color:** Use a tinted shadow (`on-surface` #002112) rather than pure black. This mimics natural ambient light reflecting off the forest-toned surfaces.

### The "Ghost Border" Fallback
If a border is required for accessibility in high-density data views, use the **Ghost Border**: `outline-variant` at 15% opacity. Never use 100% opaque borders.

---

## 5. Components

### Buttons
*   **Primary:** `8px` radius. Gradient fill (`primary` to `primary_container`). White text.
*   **Secondary:** `8px` radius. `secondary_container` fill with `on_secondary_container` text.
*   **Tertiary:** Ghost style. No background, `primary` text, Bold weight.

### Cards & Application Lists
*   **Radius:** `12px`.
*   **Constraint:** **Strictly no dividers.** Separate items using `24px` vertical spacing or subtle alternating background shifts between `surface-container-low` and `surface-container-lowest`.
*   **Interactive State:** On hover, a card should shift from `surface-container-lowest` to a subtle `surface-bright` with a 4% ambient shadow.

### Chips (Ambassador Tags)
*   **Shape:** Pill (Full radius).
*   **Style:** Use `secondary_fixed` (#b7f2a0) for background with `on_secondary_fixed_variant` (#1e5111) for text. This creates a high-contrast, professional label that feels like a badge.

### Input Fields
*   **Shape:** `8px` radius.
*   **Background:** `surface-container-highest` (#c4ecd2) to provide a clear "well" for data entry.
*   **Active State:** A `2px` "Ghost Border" using the `primary` token at 40% opacity.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins (e.g., wider left margins on headlines) to create an editorial layout.
*   **Do** lean into "Mist" and "Sage" tones for backgrounds to keep the application process feeling calm and welcoming.
*   **Do** use the `display-md` type size for short, impactful pull-quotes from current ambassadors.

### Don’t:
*   **Don't** use 1px solid borders to separate sections; it breaks the premium "Organic Architect" flow.
*   **Don't** use pure black (#000000) for text. Always use `on_background` (Ink Dark) or `on_surface_variant` (Warm Grey) for a softer, high-end finish.
*   **Don't** use standard "drop shadows." If it doesn't look like ambient light, don't use it.
*   **Don't** crowd the layout. If in doubt, add 16px of extra white space.