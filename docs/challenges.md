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
