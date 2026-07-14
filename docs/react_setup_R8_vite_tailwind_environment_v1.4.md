# React Onboarding — R8 Environment Setup (Vite + Tailwind)

**Version: 1.3**  
**Last updated: 2025-12-16**

A complete, idiot-proof, step-by-step guide for setting up a modern React environment using Vite + Tailwind.

---

# STEP 0 — Verify System Environment

## 0.1 — Check Node.js Version (18.x+ LTS)

```bash
node -v
```

## 0.2 — Check npm Version (9.x+)

```bash
npm -v
```

## 0.3 — Check Git Version (2.40+)

```bash
git --version
```

---

# STEP 1 — Create Project Folder

1. Create your project folder.
2. Open it in VSCode.

---

# STEP 2 — Initialize Vite (React + JS)

```bash
npm create vite@latest .
```

<!-- If a README.md was created beforehand, select ignore and continue with installation -->

Choose:

- React
- JavaScript
- rolldown-vite → No
- Install deps now → Yes

Stop server if it auto-starts:

```bash
Ctrl + C
```

<!-- Vite automatically creates `/src` and scaffolds the base React files. -->

---

# STEP 2.1 — (Optional) Add Common Project Folders

Inside `/src`, optionally create:

```
src/
  components/
  utils/
  styles/
```

<!--Optional organizational folders for larger projects.
Safe to skip for small demos or experiments. -->

---

# STEP 3 — Install Tailwind (root folder)

```bash
npm install -D tailwindcss@3.4.1 postcss autoprefixer
```

---

# STEP 4 — Generate Tailwind + PostCSS Config

```bash
npx tailwindcss init -p
```

---

# STEP 5 — Configure Tailwind Content Paths (tailwind.config.js)

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {} },
  plugins: [],
};
```

---

# STEP 6 — Replace index.css (src folder)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body,
#root {
  height: 100%;
  margin: 0;
}
```

---

# STEP 7 — Import Tailwind in main.jsx (move it as the first line)

```js
import './index.css';
```

---

# STEP 8 — Install clsx (root folder)

```bash
npm install clsx
```

---

# STEP 9 — Replace App.jsx With Tailwind Test UI (src folder)

```jsx
export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Vite + React + Tailwind</h1>
        <p className="text-sm text-slate-600">
          If you can see this styled card, Tailwind is working.
        </p>
        <div className="mt-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Nice — Tailwind working
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

# STEP 10 — Enable Auto-Open Dev Server (vite.config.js, root folder)

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { open: true },
});
```

---

# STEP 11 — Install Prettier (root folder)

```bash
npm install -D prettier
```

Create `.prettierrc.json`:

```json
{
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2
}
```

---

# STEP 12 — Add Prettier Script (under scripts)

Add to `package.json`:

```json
"format": "prettier --write ."
```

---

# STEP 13 — Verify ESLint

```bash
npm run lint
```

---

# STEP 14 — Final Sanity Tests

```bash
npm run format
npm run dev
```

---

# STEP 15 — Verify Installed Packages

```bash
npm list --depth=0
```

<!--
Dependencies:
- react
- react-dom
- clsx

Dev Dependencies:
- vite
- @vitejs/plugin-react
- tailwindcss
- postcss
- autoprefixer
- prettier
- eslint
- eslint-plugin-react
- eslint-plugin-react-hooks
 -->

---

# FINAL CHECKLIST

☑ Node version OK  
☑ npm version OK  
☑ Vite initialized  
☑ Tailwind installed  
☑ index.css replaced  
☑ main.jsx imports index.css  
☑ clsx installed  
☑ App.jsx test UI renders  
☑ Dev server auto-opens  
☑ Prettier OK  
☑ ESLint OK

🎉 Environment ready!
