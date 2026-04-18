# Design System Strategy: The Analytical Arboretum

## 1. Overview & Creative North Star
This design system is built to transform the "PakStartups Idea Validation System" from a mere utility into a high-end editorial experience. We are moving away from the "SaaS dashboard" aesthetic and toward a "Digital Boutique" feel.

**Creative North Star: "The Analytical Arboretum"**
Just as an arboretum provides a structured, supportive environment for growth, this system balances organic growth with clinical analysis. We achieve this through a "High-End Editorial" lens: massive typographic scale, generous white space, and a rejection of traditional UI boundaries. We prioritize **asymmetry**—placing content off-center or overlapping elements—to create a sense of bespoke craftsmanship rather than rigid, template-driven layouts.

---

## 2. Color Philosophy & Tonal Depth
We utilize a palette rooted in nature but refined by data. The Forest Green (`primary`) represents the deep roots of a solid idea, while Sage Green (`secondary`) highlights the fresh growth of validation.

### The "No-Line" Rule
To achieve a premium editorial feel, **1px solid borders are strictly prohibited for sectioning.** We do not "box in" ideas. Boundaries must be defined solely through background color shifts.
*   **The Transition:** Use `surface-container-low` (#eff5f1) for secondary sections sitting on a `surface` (#f5fbf7) background. 
*   **Surface Hierarchy & Nesting:** Treat the UI as layers of fine paper. An inner card (`surface-container-lowest` / #ffffff) should sit on a section background (`surface-container-low`), creating depth through value rather than lines.

### Glass & Gradient Rule
Flatness is the enemy of premium design. 
*   **Signature Textures:** For Hero sections and primary CTAs, use subtle linear gradients transitioning from `primary` (#0f5238) to `primary_container` (#2d6a4f). 
*   **Glassmorphism:** For floating navigation or modal overlays, use `surface` colors at 80% opacity with a `20px` backdrop-blur. This ensures the "Arboretum" background bleeds through, keeping the experience integrated.

---

## 3. Typography: The Editorial Voice
We use **Plus Jakarta Sans** to bridge the gap between technical precision and human warmth.

*   **The Power of Scale:** Use `display-lg` (3.5rem) in **ExtraBold** for page titles. These should often be left-aligned with significant negative space to their right, mimicking a high-end magazine layout.
*   **The Authority of Ink:** All headings must use `on_surface` (#171d1b, our "Ink Dark"). This provides the heavy visual anchor required for "analytical" trust.
*   **Body & Labels:** Use `body-lg` in **Regular** for readability. For metadata or "analytical" stats, use `label-md` in **Medium** with 5% letter spacing to enhance the "data-driven" feel.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows often look "dirty." In this system, depth is achieved through light and tone.

*   **The Layering Principle:** Stack your containers.
    *   **Level 0:** `background` (#f5fbf7) – The base canvas.
    *   **Level 1:** `surface-container-low` (#eff5f1) – Large content sections.
    *   **Level 2:** `surface-container-lowest` (#ffffff) – Individual interactive cards.
*   **Ambient Shadows:** If a card must float (e.g., a hover state), use an extra-diffused shadow: `0px 20px 40px rgba(26, 61, 43, 0.06)`. Note the color: we use a tint of our Ink Dark, never pure black.
*   **The Ghost Border:** If accessibility requires a stroke (e.g., in high-contrast scenarios), use `outline-variant` (#bfc9c1) at **20% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons & Interaction
*   **Primary Button:** 8px radius. Forest Green background (`primary`) with White text. For a signature touch, add a subtle 2px inner-glow on the top edge.
*   **Secondary/Accent Button:** Sage Green (`secondary_container`). Use these for "Validation" actions to signify growth.
*   **The Pill Tag:** All tags (categories, statuses) must be full-radius "pills." This rounds out the sharp edges of the analytical data.

### Input Fields
*   **Styling:** 8px radius. Use `surface-container-highest` (#dee4e0) for the field background. 
*   **States:** On focus, do not use a heavy border. Transition the background to `surface-container-lowest` (#ffffff) and apply a 2px "Ghost Border" in `primary`.

### Cards & Lists
*   **Card Radius:** Strictly 12px.
*   **No Dividers:** In list views, **forbid the use of divider lines.** Separate list items using `16px` of vertical white space or by alternating background tones between `surface` and `surface-container-low`.
*   **The Validation Meter:** A custom component for this system. Use a thick, 8px height progress bar with a gradient from `primary` to `secondary` to visualize "Idea Strength."

---

## 6. Do’s and Don’ts

### Do
*   **Do** use intentional asymmetry. Place a large headline on the left and a small "analytical" summary on the right with a wide gap.
*   **Do** use "Off-White Mist" (`surface_container_low`) for large background areas to reduce eye strain and feel more "premium paper" than "digital screen."
*   **Do** prioritize typography over icons. Let the words and the scale do the talking.

### Don’t
*   **Don’t** use pure black (#000000) for anything. Use Ink Dark (#1A3D2B) for text and deep tones.
*   **Don’t** use default 1px borders. If you feel you need a line, use a background color change instead.
*   **Don’t** crowd the interface. If a screen feels "full," it is over-designed. Increase the padding by 50%.
*   **Don’t** use standard "drop shadows." If it doesn't look like ambient natural light, it doesn't belong in the Arboretum.