### Q1. Why don’t image paths written inside JSON work in Vite?
**Answer:**  
Vite can only process image paths that are imported in code files.  
JSON is loaded at runtime, so Vite never processes the paths written inside it.  
That’s why relative paths fail, and only images placed in the `public/` folder with absolute paths work correctly.

---

### Q2. What is the purpose of the `public/` folder in Vite?
**Answer:**  
The `public/` folder is used for static files that should be served directly by the browser.  
Vite does not process these files, so they can be accessed using normal URLs.  
This makes it ideal for images or assets that come from JSON data or external APIs.

---

### Q3. What does `vite-env.d.ts` do?
**Answer:**  
`vite-env.d.ts` helps TypeScript understand Vite-specific features and asset imports.  
It only affects type checking during development and compilation.  
It does not control how images load or behave at runtime.

---

### Q4. Why does the parent component handle data instead of `TeamCard`?
**Answer:**  
To keep responsibilities clear.  
The parent component handles data loading and preparation, while `TeamCard` only focuses on displaying the UI based on props.  
This makes the component easier to reuse, easier to test, and simpler to maintain.

---

### Q5. How would this design change if the data came from an API instead of JSON?
**Answer:**
The UI components would not change. Only the data source would. Since the JSON already mimics API responses, replacing it with a fetch call would be straightforward.

--- 

### Q6. Why is this project structure scalable?
**Answer:**
Because it cleanly separates:
- data layer (JSON / API)
- routing
- layout
- presentational components (components that focus only on rendering UI based on props and do not handle data fetching or business logic)

This makes future changes isolated and predictable.

---

### Q7. Why do you name a file `teams.selectors.ts` instead of putting the logic inside a component or a generic utils.ts file?
**Answer:**
The file is named `teams.selectors.ts` because it contains selector functions, which are pure functions responsible for retrieving or deriving specific data from a dataset.

In this case, functions like `getTeamById` operate on the teams collection and return a specific team based on some criteria. Naming the file teams.selectors.ts clearly communicates two things:
- Domain: The logic belongs to the teams data domain
- Responsibility: The logic is for selecting or deriving data, not rendering UI or performing side effects

---

### Q8. Why it is preferrable to include typescript in your react applications?
**Answer:**
- JavaScript is dynamically typed, meaning type errors appear at runtime. TypeScript introduces static typing, which catches errors at compile time.
- Without Typescript:
```tsx
    function UserCard({ age }) {
        return <div>{age.toFixed(2)}</div>;     //toFixed() returns number till 2 decimal places
    }
```
If age is passed as a string, the app crashes at runtime.
- With Typescript:
```tsx
    type Props = {
        age: number;
    };

    function UserCard({ age }: Props) {
        return <div>{age.toFixed(2)}</div>;
    }
```
If someone passes age="25", TypeScript throws a compile-time error.
- Impact: Fewer production bugs.

---

### Q9. Why Vite is preferred over Creat-React-App(CRA) to start development server?
**Answer:**
Vite is preferred over Create React App because it starts the development server much faster and updates changes almost instantly. CRA bundles the whole app before running, which makes it slower as the project grows. Vite uses modern browser features, so it only processes what is needed, making development smoother.

---

### Q10. When adding an icon button, why
```html
    <Button> <DeleteIcon /> </Button> 
```
is not preferred over 
```html
<IconButton> <DeleteIcon /> </IconButton>
```
**Answer:**
1️⃣ Semantic Intent (Component Meaning): In Material UI, components are designed with specific use-cases.
- `Button` → designed for text-based actions
- `IconButton` → designed for icon-only actions
2️⃣ Visual & Layout Differences
- `Button` → comes with default settings to accomodate text. Example: horizontal padding optimised for text
- `IconButton` → comes with default settings to render an icon. Example equal padding on all sides
- Visually: `Button`  →  [   🗑   ]   `IconButton`   →   ( 🗑 )

---

### Q11. You've set the bg-color of drawer by applying css properties on slotProps.Paper. Why didn't you use sx property directly on drawer?
**Answer:**
- Drawer renders sth like this:
```ts
    Drawer
    └── Modal
        └── Paper  ← this is the visible panel
```
- When we do:
```tsx
    <Drawer sx={{ bgcolor: "secondary.main" }} />
```
You are styling the root wrapper, not the visible side panel. So nothing visually changes.
- I didn’t apply sx directly on Drawer because the visible side panel is actually rendered by the internal Paper slot. In MUI v6+, internal elements are customized using `slotProps`, so I targeted `slotProps.paper` to correctly style the rendered surface.

---

### Q12. Explain difference between null & undefined in react.
**Answer:**
🔹 undefined
    - A variable has been declared but not assigned a value (ex: let x) or the object property does not exist
🔹 null
    - Explicitly the variable is assigned a value null. Meaning: “There is intentionally no value.”
- In React, `null` is commonly used for initial state or intentional absence of data, while `undefined` usually means something was not provided (like a missing prop). Both render nothing in JSX, but they represent different intent.

---

### Q13. What is the meaning of `size={{ xs: 12, sm: 6, md: 4 }}` in MUI Grid?
**Answer:**
MUI Grid is based on a 12-column layout system. The `size` prop tells each item how many of those 12 columns it should occupy at different breakpoints:
- `xs: 12` → full width on extra-small screens, so 1 card per row
- `sm: 6` → half width on small screens, so 2 cards per row
- `md: 4` → one-third width on medium and larger screens, so 3 cards per row

This makes the component responsive without changing the component structure.

---

### Q14. What does a value like `mt: 0.7` or `mt: 0.625` mean in MUI `sx`?
**Answer:**
In MUI, spacing values in the `sx` prop are usually multiplied by the theme spacing unit. By default, `theme.spacing(1)` equals `8px`.

So:
- `mt: 1` means `8px`
- `mt: 0.5` means `4px`
- `mt: 0.625` means `5px`

This allows spacing to stay aligned with the design system instead of hardcoding pixel values everywhere.

---

### Q15. In the `TechStack` component, why couldn’t you use `.map()` directly on `techStack`, and why did you first convert it with `Object.entries(techStack)`?
Code reference: `src/components/TechStack.tsx` where `techStack` is read from context and converted into `techStackEntries`.
**Answer:**
Because `techStack` is an object, not an array. Its shape is something like:

```ts
{
    languages: string[];
    frameworks: string[];
    tools: string[];
    platforms: string[];
}
```

The `.map()` method exists on arrays, not on plain objects. So I first had to convert the object into an array-like structure using `Object.entries(techStack)`, and then iterate over the resulting key-value pairs.

---

### Q16. In this `TechStack` line `techStackEntries.map(([category, items]) => ...)`, what is the difference between `map((value) => ...)` and `map(([category, items]) => ...)`?
Code reference: `src/components/TechStack.tsx` where `techStackEntries.map(([category, items]) => ...)` renders each category card.
**Answer:**
`map((value) => ...)` gives me the whole current element as one variable.

For example, when iterating over `Object.entries(techStack)`, `value` would be:

```ts
["languages", ["Python", "SQL"]]
```

`map(([category, items]) => ...)` uses array destructuring, so the same value is immediately split into:
- `category` → the object key
- `items` → the array stored under that key

This makes the code more readable because I can directly use meaningful names instead of writing `value[0]` and `value[1]`.

---

### Q17. In the `TechStack` component, why did you create a `techStackMeta` object for labels and icons instead of writing `if` or `switch` conditions inside JSX?
Code reference: `src/components/TechStack.tsx` where `techStackMeta[category].icon` and `techStackMeta[category].label` are used inside the card header.
**Answer:**
I used a metadata object so that each category key could map to its display configuration in one place.

For example, each category has:
- a label
- an icon

This is better than writing repeated `if` or `switch` logic inside JSX because:
- the render code stays cleaner
- the mapping is easier to maintain
- adding a new category becomes easier

It is a simple example of a data-driven UI pattern.

---

### Q18. In the `techStackMeta` declaration, why is `Record<keyof TeamTechStack, { label: string; icon: JSX.Element }>` useful?
Code reference: `src/components/TechStack.tsx` where `techStackMeta` is declared above the component.
**Answer:**
`Record<keyof TeamTechStack, ...>` makes sure the metadata object stays aligned with the `TechStack` type.

That means TypeScript enforces that every category key has a corresponding metadata entry.

So if I later add a new category like `databases` to `TeamTechStack`, TypeScript will immediately remind me to also add its label and icon in the metadata object.

This improves maintainability and prevents UI mappings from getting out of sync with the data model.

---

### Q19. Why is this normalization needed in a multi-select handler: `typeof value === "string" ? value.split(",") : value`?
Code reference: `src/components/Projects.tsx` where the selected statuses are stored in state.
**Answer:**
In a multi-select, the component state should remain a `string[]`. However, the incoming select value can sometimes arrive as either:
- a `string[]`
- or a comma-separated `string`

The normalization step converts both cases into the same final shape:
- if it is already an array, use it directly
- if it is a string like `"active,inactive"`, split it into `["active", "inactive"]`

This keeps the state predictable and aligned with the component’s controlled value type.

---

### Q20. What does `renderValue` do in a MUI select?
Code reference: `src/components/Projects.tsx` where `renderValue` is passed under `slotProps.select`.
**Answer:**
`renderValue` controls what the select field displays after selection.

It does not change:
- the list of dropdown options
- the selected state itself

It only customizes the visible content inside the select input area.

That makes it useful for patterns like:
- placeholder-like empty text such as `Select status`
- chip-based rendering for selected values
- summary text like `All statuses` when every option is selected

---

### Q21. Why did clicking a chip delete icon open the select dropdown, and why does `onMouseDown` fix it?
Code reference: `src/components/Projects.tsx` where chips are rendered inside `renderValue`.
**Answer:**
The chips are rendered inside the select trigger area. Because of that, pointer events from the chip can bubble up to the parent select.

MUI `Select` commonly reacts on `mousedown`, not only on `click`. So when the delete icon is pressed:
- the `mousedown` event reaches the select
- the dropdown opens
- the chip interaction feels broken or interrupted

Adding:

```tsx
onMouseDown={(event) => event.stopPropagation()}
```

prevents that `mousedown` event from reaching the parent select. Then the chip’s `onDelete` behavior can proceed without opening the menu.

So the responsibilities are:
- `onDelete` removes the chip from state
- `onMouseDown` stops the select from opening during that interaction

---

### Q22. Why use `displayEmpty` together with a shrunk label in a MUI select?
Code reference: `src/components/Projects.tsx` where the empty state displays `Select status`.
**Answer:**
`displayEmpty` allows the select to render custom content even when no value is selected.

But once empty text is rendered, the label can visually overlap with that content unless the label is also shrunk. That is why the select needs both ideas together:
- `displayEmpty` to show the empty-state display value
- a shrunk label so the label stays floated above the content instead of sitting in the same space

---