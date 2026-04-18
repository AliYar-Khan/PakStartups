# Design System Strategy: The Cultivated Commons

## 1. Overview & Creative North Star
**Creative North Star: "The Cultivated Commons"**

This design system is built to bridge the gap between high-velocity tech innovation and deep-rooted community trust. We are moving away from the "Generic SaaS" look—characterized by thin lines and cold blues—and toward an editorial, tactile experience that feels like a prestigious journal for the modern entrepreneur. 

The aesthetic is **Organic Editorial**. We achieve this through "The Cultivated Commons" approach: 
- **Intentional Asymmetry:** Breaking the 12-column grid with overlapping elements and staggered card layouts to mimic the organic growth of a startup ecosystem.
- **Tonal Depth:** Replacing harsh structural lines with soft shifts in green-tinted neutrals.
- **Aggressive Typographic Scale:** Using extreme contrast between massive, 900-weight headlines and functional, spacious body text.

---

## 2. Colors & The Surface Manifesto
Our palette reflects the lifecycle of growth, from the deep `primary` (Forest Green) of a mature oak to the `secondary` (Sage Green) of new sprouts.

### The "No-Line" Rule
To achieve a premium, custom feel, **1px solid borders are strictly prohibited for sectioning.** Boundaries must be defined solely through background color shifts or subtle tonal transitions. 
- Use `surface` (#e8ffee) for the page base.
- Use `surface-container-low` (#d5fde2) to define secondary content areas.
- Use `surface-container-lowest` (#ffffff) for high-priority interactive elements.

### Surface Hierarchy & Nesting
Treat the UI as a series of nested layers of fine paper. 
- **Level 0 (Foundation):** `background` (#e8ffee).
- **Level 1 (Sections):** `surface-container` (#cff7dd).
- **Level 2 (Interactive Cards):** `surface-container-lowest` (#ffffff).

### The Glass & Gradient Rule
For floating elements or modal overlays, utilize **Glassmorphism**. Apply a semi-transparent `surface-variant` with a `backdrop-blur` of 20px. 
**Signature Texture:** Main CTAs or Hero Backgrounds should utilize a subtle linear gradient (135°) from `primary` (#0f5238) to `primary_container` (#2d6a4f). This adds a "visual soul" that flat color cannot replicate.

---

## 3. Typography: Editorial Authority
We use **Plus Jakarta Sans** as our sole typeface, relying on weight and scale rather than multiple fonts to drive hierarchy.

- **Display (ExtraBold 900):** Use `display-lg` (3.5rem) and `display-md` (2.75rem) for hero statements. Tighten letter spacing (-0.04em) to create a "blocky," authoritative feel. Use `on_surface` (Ink Dark) for maximum impact.
- **Headlines (Bold 700):** Use for section headers. These should feel grounded and clear.
- **Body (Regular 400):** Set at `body-lg` (1rem) for readability. The `on_surface_variant` (Warm Grey) provides a softer reading experience, reducing eye strain in long-form community content.
- **Labels (Medium 500):** For pill tags and metadata. Always uppercase with a slight letter spacing (+0.05em) for an "archival" look.

---

## 4. Elevation & Depth: Tonal Layering
Traditional UI uses shadows to represent height. This system uses **Tonal Layering** and **Ambient Light**.

### The Layering Principle
Depth is achieved by "stacking." A `surface-container-lowest` card sitting on a `surface-container-low` background creates a natural lift. This is the "Soft Minimalism" standard for this system.

### Ambient Shadows
When an element must float (e.g., a primary CTA button or a detached navigation bar), use an **Ambient Green Shadow**:
- **Color:** `#0F5238` (Primary) at 6% opacity.
- **Blur:** 24px to 40px.
- **Offset:** Y: 8px.
This mimics natural light filtering through a canopy, staying consistent with our "Forest" theme.

### The "Ghost Border" Fallback
If accessibility requires a container boundary, use a **Ghost Border**: `outline-variant` (#bfc9c1) at 15% opacity. Never use a 100% opaque border.

---

## 5. Components

### Buttons
- **Primary:** `primary` background, `on_primary` text. Radius: 8px. Apply the signature gradient for "Hero" buttons.
- **Secondary:** `secondary_container` background with `on_secondary_container` text. No border.
- **Tertiary:** No background. `primary` text. Use for low-emphasis actions like "Cancel" or "Read More."

### Cards (The Ecosystem Cell)
Cards are the heart of the platform.
- **Radius:** 12px (`md` scale).
- **Styling:** No borders. Background: `surface-container-lowest`. 
- **Spacing:** Use 32px (`xl`) internal padding to give startup profiles room to breathe.

### Pill Tags
- **Styling:** `secondary_fixed` background, `on_secondary_fixed` text. 
- **Radius:** 999px.
- **Usage:** Use for industry categories (e.g., "FinTech," "AgriTech").

### Input Fields
- **Background:** `surface_container_high`.
- **States:** On focus, transition the background to `surface_container_lowest` and apply a 2px "Ghost Border" using the `primary` color at 40% opacity.

### Navigation & Lists
**Forbid the divider line.** Separate list items using 16px of vertical whitespace or a subtle background hover state shift to `surface_container_low`.

### Featured Component: The Growth Illustration
Use the "Flat Line-Art" style. Human figures should be stylized, using `primary` stroke colors (#2D6A4F). Illustrations should never be boxed; they should overlap container edges to break the layout's rigidity.

---

## 6. Do's and Don'ts

### Do
- **Do** use whitespace as a structural element. If a section feels crowded, increase the padding rather than adding a line.
- **Do** use the "Ink Dark" (`on_surface`) color for all headings to maintain an authoritative editorial voice.
- **Do** align illustrations to the right or left of text blocks to create an asymmetrical, custom layout feel.

### Don't
- **Don't** use pure black (#000000) for shadows or text. It breaks the organic warmth of the green palette.
- **Don't** use standard 4px or 6px border radii. Stick to the 8px (buttons) and 12px (cards) rhythm to maintain the brand's unique "soft-yet-structured" silhouette.
- **Don't** stack more than three levels of surface containers. It leads to visual "mush." Keep the hierarchy shallow and intentional.