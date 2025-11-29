# React Onboarding — R8 Environment Setup (Vite + Tailwind)
**Version: 1.1**  
**Last updated: 2025-11-28**

A complete, idiot-proof, step-by-step guide for setting up a modern React environment using Vite + Tailwind.  
This document mirrors the tone, structure, and clarity of the original CRA R0 guide, but updated for a modern, stable stack.

This setup is intentionally:
- simple  
- stable  
- beginner-friendly  
- industry-standard  
- aligned with React 19 and Tailwind 3.4  

---

# ============================================
#   STEP 0 — Verify System Environment
# ============================================

Before installing anything, make sure your system has correct versions of Node, npm, and Git.

---

## 0.1 — Check Node.js Version

Command: node -v  
Expected: Node v18.x, v20.x, v22.x, or v25.x  
Avoid: Node v16 or older  
If needed: https://nodejs.org/en

---

## 0.2 — Check npm Version

Command: npm -v  
Expected: npm 9.x or 10.x  
If outdated: npm install -g npm

---

## 0.3 — Check Git (optional but recommended)

Command: git --version  
If missing: https://git-scm.com/downloads

---

# ============================================
#   STEP 1 — Create Project Folder
# ============================================

1. Create an empty project folder.  
2. Open it in VSCode.

---

# ============================================
#   STEP 2 — Initialize Vite (React + JavaScript)
# ============================================

Command: npm create vite@latest .

Choose:
- Framework: React  
- Variant: JavaScript  
- Use rolldown-vite? → No  
- Install dependencies now? → Yes  

Stop dev server with CTRL + C then Y.

---

# ============================================
#   STEP 3 — Install Tailwind CSS (Stable Version)
# ============================================

Command: npm install -D tailwindcss@3.4.1 postcss autoprefixer

---

# ============================================
#   STEP 4 — Generate Tailwind & PostCSS Configs
# ============================================

Command: npx tailwindcss init -p

---

# ============================================
#   STEP 5 — Configure Tailwind Content Paths
# ============================================

Replace tailwind.config.js content with:

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

---

# ============================================
#   STEP 6 — Replace index.css With Tailwind Layers
# ============================================

Replace src/index.css content with:

@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root {
  height: 100%;
  margin: 0;
}

---

# ============================================
#   STEP 7 — Import Tailwind in main.jsx
# ============================================

Ensure FIRST line of src/main.jsx is:

import './index.css';

---

# ============================================
#   STEP 8 — Install clsx
# ============================================

Command: npm install clsx

---

# ============================================
#   STEP 9 — Replace App.jsx With Tailwind Test UI
# ============================================

Replace src/App.jsx content with:

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
            Nice — tailwind working
          </button>
        </div>
      </div>
    </div>
  );
}

---

# ============================================
#   STEP 10 — Enable Auto-Open Dev Server
# ============================================

Replace vite.config.js content with:

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
});

---

# ============================================
#   STEP 11 — Install Prettier
# ============================================

Command: npm install -D prettier

Create .prettierrc:

{
  "singleQuote": true,
  "semi": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2
}

Create .prettierignore (optional):

node_modules  
dist  
.husky  

---

# ============================================
#   STEP 12 — Add Prettier Format Script
# ============================================

Add to package.json scripts:

"format": "prettier --write ."

---

# ============================================
#   STEP 13 — Install ESLint (Minimal + Stable)
# ============================================

Command:
npm install -D eslint eslint-plugin-react eslint-plugin-react-hooks

Create .eslintrc.json:

{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "react/react-in-jsx-scope": "off"
  }
}

---

# ============================================
#   STEP 14 — Final Sanity Tests
# ============================================

Prettier: npm run format  
ESLint: npm run lint  
Dev Server: npm run dev  

Expected:
- Browser auto-opens  
- Tailwind card displays  
- No errors  
- Hot reload works  

---

# ============================================
#   STEP 15 — Final Package Verification
# ============================================

Command: npm list --depth=0

Expect:
- react  
- react-dom  
- vite  
- @vitejs/plugin-react  
- tailwindcss  
- postcss  
- autoprefixer  
- prettier  
- eslint  
- eslint-plugin-react  
- eslint-plugin-react-hooks  
- clsx  

---

# FINAL CHECKLIST

☑ Node version OK  
☑ npm version OK  
☑ Vite initialized  
☑ Tailwind installed & configured  
☑ index.css replaced  
☑ main.jsx imports index.css first  
☑ clsx installed  
☑ App.jsx test UI renders  
☑ Dev server auto-opens  
☑ Prettier working  
☑ ESLint working  
☑ npm list matches expected packages  

🎉 Your R8 Vite + Tailwind environment is now complete!