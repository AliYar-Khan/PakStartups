```markdown
# Design System: The Cultivated Commons

## 1. Overview & Creative North Star
This design system is anchored by the Creative North Star: **"The Cultivated Commons."** It is an editorial-first framework designed to transform a standard Blog and Success Stories page into a high-end digital publication. 

Moving away from the "templated" look of the modern web, this system embraces **intentional asymmetry** and **tonal depth**. We treat the screen not as a flat surface, but as an architectural space where content is "cultivated." By utilizing dramatic typography scales, overlapping elements, and a "No-Line" philosophy, we create an experience that feels organic yet authoritative—much like a premium physical journal.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a deep, botanical foundation. We use high-contrast greens to establish authority and soft, misty neutrals to provide breathing room.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Boundaries must be defined solely through background color shifts or subtle tonal transitions.
*   **Surface Hierarchy:** Instead of a border, place a `surface-container-lowest` card on a `surface-container-low` background. 
*   **Nesting:** Treat the UI as a series of physical layers. Each inner container should use a slightly higher tier (e.g., `surface_container_highest`) to define its importance and "lift" from the page.

### Signature Textures & Glassmorphism
*   **The Glass Rule:** For floating elements like navigation bars or category filters, use **Glassmorphism**. Apply a semi-transparent `surface` color with a 12px-20px backdrop-blur. This integrates the element into the environment rather than "pasting" it on top.
*   **Tonal Gradients:** To give the UI "soul," use subtle linear gradients (e.g., `primary` to `primary_container`) for hero backgrounds or main CTAs. This mimics the natural variegation of light through a forest canopy.

---

## 3. Typography
We use **Plus Jakarta Sans** to bridge the gap between modern tech and classical editorial layouts.

*   **Display (ExtraBold):** Use `display-lg` (3.5rem) for hero headlines. Use tight letter-spacing (-0.02em) to create a "blocky," authoritative impact.
*   **Headlines (Ink Dark #1A3D2B):** These are the anchors of the page. Even at smaller scales like `headline-sm`, the weight remains heavy to maintain the editorial voice.
*   **Titles (Bold):** Reserved for card headings and article titles in lists. These should feel punchy and immediate.
*   **Body (Warm Grey #6B7280):** Set in `body-lg` (1rem). The warm grey reduces ocular strain against the `off-white-mist` backgrounds, ensuring long-form success stories remain readable and inviting.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than traditional drop shadows or structural lines.

*   **The Layering Principle:** Stack `surface-container` tiers to create a natural "lift." 
    *   *Example:* Page Background (`surface`) -> Section (`surface_container_low`) -> Article Card (`surface_container_lowest`).
*   **Ambient Shadows:** If a floating effect is mandatory, use an "Ambient Shadow." Shadows must be extra-diffused (blur: 40px+) and low-opacity (4%-6%). The shadow color must be a tinted version of `on-surface` (a dark forest green tint) to mimic natural light.
*   **The "Ghost Border" Fallback:** If accessibility requires a container edge, use a "Ghost Border"—the `outline_variant` token at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components

### Buttons
*   **Primary:** `primary` (#0f5238) background with `on_primary` text. 8px radius.
*   **Secondary:** `secondary_container` background. These should feel "recessed" into the page.
*   **Interaction:** On hover, shift from a flat color to a subtle gradient transition toward `primary_container`.

### Cards & Success Story Previews
*   **Structure:** 12px (`md`) corner radius.
*   **Separation:** Absolute prohibition of divider lines. Use vertical white space (64px+) and `surface` shifts to distinguish between different articles.
*   **Editorial Flare:** Allow images to slightly break the card container (negative margins) to create a sense of movement.

### Chips & Tags (Pill)
*   **Pill Tags:** Use `full` (9999px) radius. 
*   **Coloring:** Use `secondary_fixed` for a "Sage Green" accent that highlights categories without competing with the primary headlines.

### Input Fields
*   **Style:** Minimalist. No bottom line or full box. Use a `surface_container_high` background with an 8px radius. 
*   **Focus:** Indicate focus via a 2px "Ghost Border" in `primary` at 40% opacity.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts. Let a success story image take up 60% of the width while text takes up 40%.
*   **Do** prioritize "Breathing Room." If a section feels crowded, double the white space rather than adding a border.
*   **Do** use the `Ink Dark` heading color for all primary storytelling elements to ensure an authoritative tone.

### Don’t:
*   **Don’t** use pure black (#000000). It breaks the organic "Indus" feel. Use `on_surface` or `Ink Dark`.
*   **Don’t** use standard Material Design drop shadows. They feel "app-like" and ruin the editorial, "fine paper" aesthetic.
*   **Don’t** use center-alignment for long-form text. Keep it left-aligned to maintain the professional, curated journal look.

---

## 7. Signature Layout Patterns
*   **The Overlap:** Place a success story quote (set in `headline-md`) so it partially overlaps a high-resolution forest photograph.
*   **The Tonal Block:** End the page with a full-width `primary_container` section to anchor the experience and provide a high-contrast area for the final CTA.```