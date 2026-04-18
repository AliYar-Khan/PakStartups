# Design System Specification: High-End Editorial

## 1. Overview & Creative North Star

### Creative North Star: "The Curated Greenhouse"
This design system is built for an entrepreneurial ecosystem that values growth, clarity, and sophistication. It moves away from the rigid, "boxed-in" feel of standard SaaS platforms, opting instead for a **High-End Editorial** aesthetic. 

The goal is to treat the screen like a premium broadsheet or a luxury journal. We achieve this through **Organic Brutalism**: high-contrast typography and generous whitespace combined with a palette that feels rooted in nature. By breaking the standard grid with intentional asymmetry—such as overlapping elements and varying column widths—we create a digital experience that feels bespoke rather than templated.

---

## 2. Colors

The palette is anchored in deep, authoritative greens and soft, mist-like neutrals. We avoid pure blacks and generic grays to maintain a premium tonal depth.

### The "No-Line" Rule
To maintain an editorial feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries between different content areas must be defined solely through background color shifts. For example, a `surface-container-low` section should sit directly against a `surface` background to create a "bleed" effect.

### Surface Hierarchy & Nesting
Treat the UI as a series of layered papers. Use the `surface-container` tiers to create depth:
- **Surface (Chalk White):** The base layer.
- **Surface-Container-Low:** For secondary sidebars or subtle background shifts.
- **Surface-Container-High:** For interactive cards or "lifted" content blocks.
- **Nesting:** An inner container should always be at least one tier higher or lower than its parent to define its importance without needing a stroke.

### The "Glass & Gradient" Rule
To add "soul" to the interface:
- **Glassmorphism:** Use `surface_container_lowest` at 80% opacity with a `20px` backdrop blur for floating navigation bars or modal headers.
- **Signature Gradients:** For primary CTAs and hero backgrounds, use a subtle linear gradient transitioning from `primary` (#0f5238) to `primary_container` (#2d6a4f) at a 135-degree angle. This provides a tactile richness that flat color cannot achieve.

---

## 3. Typography

The typography is the voice of the system. By using **Plus Jakarta Sans**, we balance geometric modernism with high-end readability.

- **Display & Headlines:** Use `ExtraBold` weight. These should be treated as graphic elements. The high contrast between the heavy `headline-lg` and the `body-md` creates an authoritative, editorial rhythm.
- **Body Text:** Use `Regular` weight. Set leading (line height) to 1.6 for maximum breathability in long-form entrepreneurial content.
- **Buttons & Labels:** Use `Bold` weight. This ensures that even at smaller sizes, action items are distinct and confident.
- **Hierarchy:** The system uses a dramatic scale. Large display type should be used to anchor pages, while `label-sm` is reserved for metadata, always in `on_surface_variant` (#404943) to prevent visual clutter.

---

## 4. Elevation & Depth

We convey hierarchy through **Tonal Layering** rather than traditional structural lines.

### The Layering Principle
Depth is achieved by "stacking." A `surface-container-lowest` card placed on a `surface-container-low` section creates a soft, natural lift. This mimics the way physical paper catches light.

### Ambient Shadows
When an element must "float" (e.g., a dropdown or modal):
- **Shadow Tint:** Shadows must never be pure gray. Use a tinted version of `on_surface` (#151c27).
- **Diffusion:** Shadows must be extra-diffused. 
  - *Example:* `box-shadow: 0 20px 40px rgba(21, 28, 39, 0.06);`
- **Ghost Border Fallback:** If accessibility requires a container definition, use a "Ghost Border": the `outline-variant` token at **15% opacity**.

### Glassmorphism & Depth
For desktop-first experiences, use backdrop blurs on `surface_variant` layers. This allows the lush `primary` greens of the background to bleed through, softening the edges of the UI and making the layout feel integrated rather than "pasted on."

---

## 5. Components

### Buttons
- **Primary:** Forest Green gradient (Primary to Primary-Container), 8px radius. White text, Bold.
- **Secondary:** Transparent background with a `Ghost Border` (Outline-Variant at 20%).
- **Tertiary:** Text-only, using the Sage Green (`secondary`) for the label to denote action without weight.

### Cards
- **Construction:** 12px radius. No borders. Use `surface_container_lowest` for the card body. 
- **Interaction:** On hover, shift the background to `surface_container_high` and apply an `Ambient Shadow`. Do not use "lift" animations; prefer subtle color transitions.

### Input Fields
- **Background:** Always `Off-White Mist` (#F4FAF6).
- **Radius:** 8px.
- **States:** On focus, the border transitions to a 2px `primary` (#0f5238) weight, but only on the bottom edge (editorial style) or a soft full-border `outline`.

### Lists & Navigation
- **The "No-Divider" Rule:** Forbid 1px horizontal lines between list items. Use **Vertical White Space** (16px or 24px) or a subtle alternating tonal shift between `surface` and `surface_container_low`.

### Unique Components
- **The "Growth Gauge":** A custom progress indicator using `secondary_fixed` (Sage Green) to track entrepreneurial milestones, featuring a soft "glow" (shadow) in the same color.
- **Editorial Pull-Quotes:** Large `title-lg` text in `Ink Dark`, left-aligned with a 4px `primary` vertical accent bar to highlight key insights.

---

## 6. Do's and Don'ts

### Do
- **Embrace Whitespace:** If a section feels crowded, double the padding. Editorial design lives and breathes through margins.
- **Asymmetric Layouts:** Shift a headline 40px to the left of the body text to create a more dynamic, "magazine" feel.
- **Tonal Transitions:** Use background colors to guide the user's eye from one content block to the next.

### Don't
- **Don't use 1px Borders:** Never use a solid line to separate content. It breaks the "premium paper" illusion.
- **Don't use Default Shadows:** Avoid the "black smudge" look. If it's not a tinted, diffused ambient shadow, it doesn't belong.
- **Don't Over-Color:** Keep the background `Chalk White` or `Off-White Mist`. Use the `Forest Green` and `Sage Green` as intentional accents and "anchor" points.
- **Don't Center-Align Everything:** Use strong left-alignment for body text and headlines to maintain the editorial grid.