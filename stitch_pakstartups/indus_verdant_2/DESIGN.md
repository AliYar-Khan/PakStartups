# Design System Strategy: The Verdant Archive

### 1. Overview & Creative North Star
**Creative North Star: The Verdant Archive**
This design system moves away from the sterile, "SaaS-standard" dashboard look toward a high-end editorial aesthetic. We are building a "Verdant Archive"—a professional, high-density environment that feels like a premium financial journal rather than a generic software tool. 

While the data is dense and functional, the experience is elevated through **intentional asymmetry**, **tonal depth**, and **typographic authority**. We break the "template" feel by treating the interface as a series of layered, physical materials where hierarchy is defined by light and color, never by rigid lines.

---

### 2. Colors & Surface Logic
The palette is rooted in the "Ink Dark" and "Forest Green" tones, providing a sophisticated foundation for moderation and administrative tasks.

*   **The "No-Line" Rule:** To achieve a bespoke, premium feel, **1px solid borders are strictly prohibited for sectioning.** Do not use borders to separate the sidebar from the main content or to define card boundaries. Instead, boundaries must be created through background color shifts.
*   **Surface Hierarchy & Nesting:**
    *   **Level 0 (Base):** `surface` (#f5fbf7) — The global canvas.
    *   **Level 1 (Sections):** `surface_container_low` (#eff5f1) — Used for large structural blocks like the sidebar or secondary panels.
    *   **Level 2 (Cards):** `surface_container_lowest` (#ffffff) — Reserved for primary data cards to make them "pop" against the slightly darker background.
    *   **Level 3 (Interactive):** `surface_container_high` (#e3eae6) — Used for hover states or nested utility panels.
*   **The "Glass & Gradient" Rule:** For floating modals or "sticky" navigation bars, use `surface_variant` (#dee4e0) at 80% opacity with a `backdrop-filter: blur(12px)`. 
*   **Signature Textures:** For primary call-to-action buttons or high-level stat cards, use a subtle linear gradient: `primary` (#0f5238) to `primary_container` (#2d6a4f). This adds a "weighted" feel that flat colors lack.

---

### 3. Typography
We utilize **Plus Jakarta Sans** for its modern, geometric clarity and high readability in data-rich environments.

*   **Headings (Ink Dark #1A3D2B):** Use **Bold** for all `headline` and `display` tokens. The high contrast between the Ink Dark text and Chalk White backgrounds creates an authoritative editorial feel.
*   **Table Headers:** Use **SemiBold** with the `label-md` or `label-sm` tokens. This ensures that even at small sizes, the data structure remains rigid and clear.
*   **Body & Metadata:** Use **Regular** for all `body` tokens. For secondary metadata, utilize `on_surface_variant` (#404943) to create a clear visual step-down from primary content.
*   **Hierarchy Tip:** Use `display-sm` for large numerical data (e.g., total startups) to give the dashboard a "big-data" command-center vibe.

---

### 4. Elevation & Depth
In this system, depth is a tool for focus, not just decoration.

*   **Tonal Layering:** Avoid shadows for static elements. A `surface_container_lowest` card sitting on a `surface_container_low` background provides enough "natural lift" for an internal tool.
*   **Ambient Shadows:** When an element must float (e.g., a dropdown or a "New Startup" modal), use an extra-diffused shadow:
    *   *Shadow Color:* Tinted with `on_background` (#171d1b) at 6% opacity.
    *   *Blur:* 24px - 40px to simulate soft, natural ambient light.
*   **The "Ghost Border" Fallback:** If a layout requires a boundary for accessibility (e.g., input fields), use the `outline_variant` (#bfc9c1) at **15% opacity**. This creates a "suggestion" of a line rather than a hard edge.
*   **Glassmorphism:** Use semi-transparent layers for the sidebar (`surface_container_low` @ 90% opacity) to allow the main background to subtly bleed through, making the dense UI feel more breathable.

---

### 5. Components

#### Buttons
*   **Primary:** `primary` (#0f5238) background with `on_primary` (#ffffff) text. **8px radius**. Use the signature gradient for the default state.
*   **Secondary:** `primary_fixed` (#b1f0ce) background with `on_primary_fixed_variant` (#0e5138) text. No border.
*   **Sizing:** Keep buttons compact (32px or 36px height) to suit the dense dashboard environment.

#### Data Tables
*   **Shape:** **0px radius (Square edges).** This is a key stylistic choice to emphasize the "professional, functional" vibe.
*   **Borders:** Forbid horizontal and vertical divider lines. Instead, use a subtle `surface_container_low` background on every second row (Zebra striping) to guide the eye.
*   **Headers:** SemiBold, all-caps, with 2px letter spacing for a premium "archival" feel.

#### Cards & Containers
*   **Shape:** **8px radius.**
*   **Content Separation:** Forbid divider lines within cards. Use **vertical white space** (using the `body-lg` font size as a spacer unit) or a subtle shift to `surface_container_low` for footer sections within the card.

#### Input Fields
*   **Styling:** Background-only inputs using `surface_container_highest` (#dee4e0). Use a **Ghost Border** that only becomes 100% opaque on focus using the `primary` (#0f5238) color.

---

### 6. Do’s and Don’ts

**Do:**
*   **Do** embrace density. Use `body-sm` for secondary data to pack more value into a single screen.
*   **Do** use asymmetrical layouts. For example, a wide data table paired with a narrower, high-contrast "Action Insight" panel.
*   **Do** use `secondary` (Sage Green) to highlight "Success" or "Growth" metrics exclusively.

**Don’t:**
*   **Don’t** use pure black for text. Always use `on_background` (#171d1b) or `on_surface_variant` (#404943).
*   **Don’t** use shadows on every card. Reserve elevation for elements that require immediate user interaction.
*   **Don’t** use 1px dividers. If you feel the need to separate two sections, increase the padding or change the background tone slightly.
*   **Don't** round the corners of data tables. Keep them square to maintain the "functional archive" aesthetic.