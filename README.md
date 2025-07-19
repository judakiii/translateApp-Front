# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project Features

This project includes modern React tooling and a set of powerful features:

### ✅ Tech Stack Versions

- **React**: v20.12.2
- **Vite**: v7.0.4
- **Node.js**: v20.12.2
- **pnpm**: v10.13.1
- **Tailwind CSS**: v3

---

### ⚙️ Features and Best Practices

- **📦 Aliased SVG Imports as Components**  
  SVG icons are imported directly as React components using alias paths (e.g., `@assets/icons/MyIcon.svg`) without relative `../../` paths.

- **🎨 TailwindCSS 3 Integration**  
  Utility-first styling using the latest version of Tailwind for rapid UI development.

- **📥 Form Handling with React Hook Form**  
  Form logic and validation are handled via [react-hook-form](https://react-hook-form.com/) for performance and simplicity.

- **🛡 Zod Validation**  
  Schema-based form validation using [Zod](https://zod.dev/), integrated with React Hook Form for type-safe validation.

- **🔍 Debounced Search Filtering**  
  Search input is optimized with a debouncing mechanism to prevent unnecessary renders and API/localStorage calls.

- **🖱 Lazy Loading + Infinite Scroll**  
  Implements lazy loading of items using scroll events for better performance and UX.

- **⌛ Suspense + Lazy Components**  
  Route-based code splitting using `React.lazy` and `Suspense` to load pages lazily with fallback loaders.

- **✍️ Add / Update / Delete Functionality**  
  Fully implemented CRUD operations with local state and localStorage persistence.

- **📦 Drag & Drop Without Libraries**  
  Native HTML5 Drag and Drop API used to rearrange items without third-party libraries like `react-dnd`.

---

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
