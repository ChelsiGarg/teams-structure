## 🔹 Challenge 1: Handling images in Vite when data comes from JSON

### Problem
I faced an issue while rendering images in MUI `CardMedia` when the image path was coming from a JSON file.  
Relative paths (e.g. `../assets/logo.jpg`) worked when imported in code, but failed when placed inside JSON.

### Why it happened
Vite processes assets only when they are imported in JavaScript/TypeScript files.  
JSON files are treated as runtime data, so Vite does not process or resolve image paths written inside them.

As a result, relative image paths inside JSON could not be bundled or served correctly.

### Solution
I moved all static images referenced by JSON into the `public/` directory and stored absolute paths in the JSON. Assets in `public/` are served directly (not touched by Vite), so they work well when image paths come from JSON or API data.

---

## 🔹 Challenge 2: Misunderstanding the role of `vite-env.d.ts`

### Problem
When images were not rendering correctly, I initially assumed that adding image file extensions in `vite-env.d.ts` would fix the issue.

### Reality
`vite-env.d.ts` only helps TypeScript understand that certain file types (like `.png` or `.jpg`) can be imported.  
It does not affect how images are loaded or served in the browser at runtime.

Even if TypeScript shows no errors, images can still fail to render due to incorrect asset handling.

### Solution
I clearly separated responsibilities between tools:

- **TypeScript** → compile-time type checking only  
- **Vite** → bundling, asset resolution, and serving files to the browser  

In short, `vite-env.d.ts` only satisfies TypeScript. It doesn’t affect runtime behavior, so the real fix had to be in how Vite handled assets.

---

## 🔹 Challenge 3: Layout issues caused by MUI AppBar default positioning

### Problem
While building the layout using MUI’s `AppBar` and `Toolbar`, I noticed that:
- Main content was overlapping with the header
- An unnecessary vertical scrollbar appeared

At first, this was confusing because I was already using MUI components correctly (AppBar + Toolbar).

### Why it happened
The key issue was that `AppBar` uses `position="fixed"` by default.

Because of this:
- The header was removed from the normal document flow
- Its height was no longer counted when the browser calculated layout

This caused a mismatch:
- **Layout calculation** ignored the header height (because it was fixed)
- **Visual space** was still taken by the header
- Result: content overlap and extra scrolling due to header height

### Solution
Once I understood this interaction, I fixed the layout by:
- Explicitly controlling the `AppBar` position (kept it `static`) & hence now the header became a part of normal document flow and its height was now counted by browser

After aligning with CSS flow and MUI’s intended layout patterns, the overlap and scroll issues were resolved.

---

## 🔹 Challenge 4: Implement a collapsible side navbar on teams page

### Problem
While implementing a collapsible side navigation using MUI’s Drawer, I noticed that:
- Clicking the menu button caused the entire screen to appear blocked
- A backdrop covered the content
    When you open something like a modal or temporary drawer:
    - The main content becomes dimmed
    - You cannot interact with it
    - Focus shifts to the active component
    That dimmed layer is the backdrop.
- `overflow: hidden` was dynamically added to the <body> element

At first, this was confusing because the Drawer was controlled only by state (open={isDrawerOpen}), and I hadn’t manually modified any global styles.

### Why it happened
The root cause was that MUI’s default Drawer variant is "temporary".
In MUI:
- `variant="temporary"` internally uses a Modal
- It injects `overflow: hidden` into the <body> when `open = true`
- It renders a backdrop that overlays the entire viewport

Because of this:
- The Drawer was removed from normal layout flow
    - The Drawer was removed from normal layout flow because the default variant="temporary" in MUI renders it using a Modal, and that Modal uses `position: fixed`.
- It behaved like an overlay instead of a sidebar
- Background scrolling was intentionally disabled (caused by css property- overflow:hidden)
- The screen appeared “fully taken over”

### Solution
- After analyzing the behavior, I recognized that the default Drawer variant in MUI is temporary, which is modal-based and responsible for scroll locking and backdrop rendering.
- Since my requirement was a toggle-controlled side panel, I:
    - Kept the default temporary variant
    - Controlled visibility using React state (isDrawerOpen)
    - Implemented explicit width (250px) inside the Drawer to ensure consistent panel sizing
    - Used the onClose handler to properly manage open/close lifecycle
    - This approach:
        - Resolved visibility issues
        - Maintained predictable overlay behavior
        - Leveraged MUI’s intended modal-based navigation pattern for collapsible panels

---

## 🔹 Challenge 5: Building equal-height member cards with responsive MUI Grid

### Problem
While designing the Members page, I wanted:
- exactly 3 cards per row on desktop
- responsive fallback to fewer columns on smaller screens
- equal height for all cards within the same row
- different rows to still size naturally based on their own content

At first, the layout looked inconsistent because some cards had more content than others, causing uneven row presentation.

### Why it happened
The key issue was understanding which element was actually being stretched.

- MUI `Grid` with `container` uses flexbox internally
- `alignItems="stretch"` stretches the direct Grid items in a row
- it does **not** automatically force the nested card component to fill that stretched height

Because of this, even though the Grid item had equal height, the `Card` inside it could still shrink to its own content height unless it explicitly expanded.

### Solution
I solved this by combining responsive Grid sizing with full-height cards:

- Used responsive item sizes like `xs: 12`, `sm: 6`, `md: 4` to get 1 / 2 / 3 cards per row across breakpoints
- Applied `alignItems="stretch"` on the Grid container so all items in the same row share the tallest row height
- Applied `display: "flex"` on each Grid item so the card can expand cleanly inside it
- Applied `width: "100%"` and `height: "100%"` on the card so it fills the grid cell consistently
- Kept the inner content as a column flex layout so content remains vertically structured and predictable

This gave me equal-height cards per row without forcing all rows to have the same global height.

---

## 🔹 Challenge 6: Building a multi-select status filter with chips in MUI

### Problem
While building the `Projects` page, I wanted the `Status` filter to support:
- multiple selected values
- chip-based display inside the field
- a placeholder-like empty state (`Select status`)
- a compact summary (`All statuses`) when everything is selected

At first, this introduced a few related issues:
- the select value needed to support multiple values instead of a single string
- chip delete clicks opened the dropdown instead of only removing the chip
- the empty display text overlapped with the floating label

### Why it happened
This came from how MUI `TextField` with `select` works internally:

- multi-select uses the underlying `Select` component, so the controlled value becomes array-based
- selected content shown inside the closed field is controlled by `renderValue`
- the select opens from its trigger area, so interactions inside the rendered value can bubble up and open the menu
- `displayEmpty` allows custom empty-state text, but the label still needs to shrink so both do not occupy the same space

### Solution
I solved this by combining MUI select configuration, controlled state, and event handling:

- used `multiple: true` in `slotProps.select`
- controlled the value with `useState<string[]>([])`
- handled selection updates with `onChange`
- normalized incoming values with:
    - `typeof value === "string" ? value.split(",") : value`
    - this keeps the state consistently as `string[]`
- used `renderValue` to customize closed-field display:
    - show muted `Select status` when empty
    - show `All statuses` when all options are selected
    - show chips for partial selections
- used `onMouseDown={(event) => event.stopPropagation()}` on chips so delete clicks do not open the dropdown
- used `displayEmpty: true` with a shrunk label to avoid overlap

### Key learning
The important shift was understanding that the visible content of a MUI select is not limited to plain text. Once I used `renderValue`, the field became a small rendering surface that needed both layout handling and event handling.

The final behavior worked well because each concern was handled at the right level:
- `onChange` updates selected values
- `renderValue` controls how those values appear
- `onMouseDown` prevents the select trigger from hijacking chip deletion
- `displayEmpty` and label shrink keep the empty state readable

---
