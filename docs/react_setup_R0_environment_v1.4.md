# 🧠 React R0 Environment Setup — Create React App (CRA) Baseline (v1.4)

**Repo:** `react-onboarding-projects-v3`  
**Phase:** R0 — Environment Setup  
**Last Updated:** November 2025  
**Maintainer:** Gorby  

---

## 🧱 1. Verify Environment

Before setting up the React app, ensure your Node.js and npm are properly installed and up to date.

### Check Versions

```bash
node -v
npm -v
```

✅ **Expected:**  
- Node.js v18+ (LTS recommended, v25+ also supported)  
- npm v9+

If these commands throw an error or versions are too old:
- Go to [https://nodejs.org](https://nodejs.org)
- Download the **LTS version** and reinstall (includes npm).

To recheck after install:
```bash
node -v && npm -v
```

---

## ⚙️ 2. Initialize React Project

Inside your **cloned GitHub repo folder**:

```bash
npx create-react-app .
```

This will:
- Install all base dependencies (React, React-DOM, scripts, etc.)
- Create a default `.gitignore` (keep this one)
- Set up all configs in the current directory (no extra folder)

### Sanity Check
Once setup finishes:
```bash
npm start
```
You should see the default React page at [http://localhost:3000](http://localhost:3000).  
If it loads — success. 🚀

---

## 🧹 3. Clean the Boilerplate

After confirming the app runs fine, delete unnecessary files to create a clean base.

### Delete:
From `src/` remove:
```
App.test.js
logo.svg
reportWebVitals.js
setupTests.js
```

### Clean `App.js`:
Replace everything with:

```jsx
import React from "react";

function App() {
  return (
    <main className="App">
      <h1>React R0 Environment Ready 🚀</h1>
    </main>
  );
}

export default App;
```

### (Optional) Clean `index.css`
You can strip out all CRA default styling to start fresh.

---

## 🧩 3.5. Fix `index.js` After Cleanup

By default, CRA references `reportWebVitals.js` in `index.js`, which we just deleted.

To fix the compile error:

1. Open `src/index.js`
2. Remove these two lines:
   ```js
   import reportWebVitals from './reportWebVitals';
   reportWebVitals();
   ```
3. Ensure your file now looks like this:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

4. Save and run `npm start` again — your app should now compile successfully.

---

## 📁 4. Create Base Folders

Inside `src/`, create:
```
components/
assets/
styles/         ← optional but useful for CSS modules or global themes
utils/          ← optional for helper or utility functions
```

🧠 **Notes:**
- `components/` → reusable React UI components  
- `assets/` → images, icons, or fonts  
- `styles/` → shared CSS or theme files  
- `utils/` → helper functions and utilities  

Start minimal with `components/` and `assets/`, then add others later.

---

## 🧰 5. Install Dev Tools — Prettier + ESLint

### 🪄 5.1 — Prettier (Formatting)

Install:
```bash
npm install --save-dev prettier
```

Create **`.prettierrc`** in the project root (same folder as `package.json`):

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5",
  "printWidth": 80
}
```

Create **`.prettierignore`** (also in project root):

```
node_modules
build
coverage
```

Sanity check Prettier:
```bash
npx prettier --check .
```
✅ Expected: Lists formatted files or confirms all are formatted.

If needed, fix everything automatically:
```bash
npx prettier --write .
```

---

### 🔍 5.2 — ESLint (Linting)

Install:
```bash
npm install --save-dev eslint eslint-plugin-react
```

#### 🚫 Cleanup (Important!)
If ESLint auto-generates a **`eslint.config.mjs`**, delete it:
```bash
rm eslint.config.mjs
```
CRA uses the older `.eslintrc` system, and leaving the flat config file may cause runtime errors.

#### ✅ Create a Legacy Config Instead
Create **`.eslintrc.json`** manually in the project root with this content:

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

Run a lint check:
```bash
npx eslint src
```

✅ Expected: “No problems found.”  
Minor React warnings are fine.

---

### ⚙️ Sanity Check — Final Package Verification

After completing all setup steps, run:
```bash
npm list --depth=0
```

✅ Expected key packages:
- `react`, `react-dom`, `react-scripts`
- `eslint`, `eslint-plugin-react`
- `prettier`

If you see these without missing peer dependency errors, your environment is healthy.

---

## 💾 6. Initial Commit

Once all tests pass and app runs cleanly:
```bash
git add .
git commit -m "R0: Initialize CRA environment + cleanup + ESLint + Prettier setup"
git push origin feat/r0-cra-setup
```

---

## ✅ Final Checklist

- [x] Node & npm verified  
- [x] CRA setup complete (`npm start` works)  
- [x] CRA boilerplate removed  
- [x] `index.js` fixed (no reportWebVitals)  
- [x] Folder structure created (`components`, `assets`, optional: `styles`, `utils`)  
- [x] Prettier & ESLint installed and tested  
- [x] `eslint.config.mjs` removed if present  
- [x] Sanity check passed (`npm list --depth=0`)  
- [x] Initial commit pushed  

---

**End of Document — R0 Setup Complete (v1.4)**  
