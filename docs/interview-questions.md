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