```markdown
# Design System Strategy: The Entrepreneurial Greenhouse

## 1. Overview & Creative North Star: "The Digital Greenhouse"
This design system moves away from the sterile, rigid grids of traditional SaaS platforms. Instead, it adopts the **"Digital Greenhouse"** philosophy—a concept where professional structure meets organic growth. This is an "Editorial-First" system, treating the notification center not as a list of chores, but as a curated stream of entrepreneurial intelligence.

To achieve this, we reject the "template" look. We use **intentional asymmetry**, **tonal depth**, and **overlapping elements** to create a sense of bespoke craftsmanship. The layout should feel like a high-end financial journal—authoritative yet breathable—positioning every notification as a valuable insight rather than a disruptive alert.

---

## 2. Colors: Tonal Architecture
The palette is rooted in growth (Greens) and stability (Ink/Mist). We do not use color merely for decoration; we use it to build a three-dimensional environment.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders for sectioning are strictly prohibited. The "box" is dead. Boundaries must be defined solely through background color shifts or subtle tonal transitions. Use `surface-container-low` (#d5fde2) to house content against a `surface` (#e8ffee) background. This creates a soft, modern boundary that feels architectural rather than drafted.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine, semi-translucent paper.
- **Base Level:** `surface` (#e8ffee) - The foundation of the notification tray.
- **Section Level:** `surface-container-low` (#d5fde2) - Used for grouping types of notifications (e.g., "Earlier today").
- **Interaction Level:** `surface-container-highest` (#c4ecd2) - The active state of a notification card.

### The "Glass & Gradient" Rule
To elevate the "entrepreneurial" feel, use **Glassmorphism** for floating elements (like toast notifications). Use `surface` (#e8ffee) at 80% opacity with a `20px` backdrop-blur. 
**Signature Texture:** For primary CTAs or high-priority headers, use a subtle linear gradient from `primary` (#0f5238) to `primary-container` (#2d6a4f). This prevents the "flat-and-cheap" look of hex-only buttons.

---

## 3. Typography: Editorial Authority
We use **Plus Jakarta Sans** to balance high-tech precision with human warmth.

- **Display & Headlines:** Use `headline-md` (1.75rem) in **Bold** using `on_surface` (#002112). These should have tight letter-spacing (-0.02em) to mimic premium editorial titles.
- **Labels:** Use `label-md` (0.75rem) in **SemiBold** for category tags (e.g., "INVESTMENT," "NETWORK"). These should always be uppercase with 0.05em tracking to ensure "scannability."
- **Body:** Use `body-md` (0.875rem) in **Regular** using `on_surface_variant` (#404943). This reduced contrast from the headings ensures the hierarchy is felt, not just seen.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are often "dirty." In this system, we use light and tone to imply importance.

- **The Layering Principle:** Place a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#d5fde2) background to create a "natural lift." The eye perceives the brighter white as being closer to the viewer.
- **Ambient Shadows:** For "floating" items (Modals/Toasts), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(15, 82, 56, 0.08);`. The shadow is tinted with the Primary Forest Green, making it feel like part of the environment rather than a grey smudge.
- **The "Ghost Border" Fallback:** If a container sits on a background of the same color, use a 1px "Ghost Border" using `outline_variant` at 20% opacity. It should be felt, not seen.

---

## 5. Components: Refined Interaction

### Notification Cards (The Core)
*   **Structure:** 12px (`lg`) radius. No borders.
*   **Separation:** Forbidden to use horizontal rules/dividers. Separate notifications using an **8px vertical gap** (from the spacing scale), allowing the background to act as the divider.
*   **State:** Unread notifications use a subtle `secondary_container` (#b4ef9d) accent dot.

### Buttons (The Action)
*   **Shape:** 8px (`md`) radius.
*   **Primary:** Gradient of Forest Green. Text is `on_primary` (#ffffff).
*   **Secondary:** Ghost style. No background, no border. Text is `primary` (#0f5238) in **SemiBold**.

### Circular Iconography
*   All notification icons must be housed in a 40px circle.
*   **Success:** Sage Green (#8FC87A) background with Ink Dark icon.
*   **Alerts:** `error_container` (#ffdad6) background with `error` (#ba1a1a) icon.

### Selection Chips
*   **Shape:** Full radius (`9999px`).
*   **Style:** Use `surface-container-high` (#caf2d7) for inactive chips and `primary` (#0f5238) with white text for active states. This provides a "tactile" pill look that is easy to tap.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical white space. Leave more room at the top of a notification group than between individual items to create "clusters" of information.
*   **Do** use "Mist" (#F4FAF6) for large background areas to reduce eye strain compared to pure white.
*   **Do** prioritize the `title-sm` (1rem) for notification headers to maintain a "trustworthy" and serious tone.

### Don’t:
*   **Don’t** use pure black (#000000). Use Ink Dark (#1A3D2B) for all "black" needs to maintain the organic palette.
*   **Don’t** use standard "Drop Shadows." Only use the Ambient Shadow formula provided in Section 4.
*   **Don’t** use sharp 90-degree corners. Everything must feel approachable and "entrepreneurial-friendly."
*   **Don’t** use dividers between list items. Rely on the "No-Line" rule and background color shifts.