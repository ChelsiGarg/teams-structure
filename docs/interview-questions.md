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