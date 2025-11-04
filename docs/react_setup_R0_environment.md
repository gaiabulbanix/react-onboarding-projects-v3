# 🧠 React R0 Environment Setup — Create React App (CRA) Baseline

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
- Node.js v18+ (LTS recommended)  
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
If it loads — you’re golden. 🚀

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

## 📁 4. Create Base Folders

Inside `src/`, create:
```
components/
assets/
```

This will serve as your standard structure going forward.

---

## 🧰 5. Install Optional Dev Tools

We’ll keep this minimal for now — just **Prettier** and **ESLint**.

### Install Prettier
```bash
npm install --save-dev prettier
```

Create `.prettierrc`:
```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5"
}
```

### Install ESLint
```bash
npm install --save-dev eslint
npx eslint --init
```

Follow prompts:
- ✔ How would you like to use ESLint? → *To check syntax and find problems*  
- ✔ What type of modules does your project use? → *JavaScript modules (import/export)*  
- ✔ Framework? → *React*  
- ✔ TypeScript? → *No*  
- ✔ Environment? → *Browser*  
- ✔ Format config file as → *JSON*  
- ✔ Install dependencies → *Yes*

Then, test:
```bash
npx eslint src
```

If you get no major errors — it’s good to go.

---

## 💾 6. First Commit

After confirming everything works:
```bash
git add .
git commit -m "R0: Initialize CRA environment + cleanup + base folders"
git push origin main
```

This is your **baseline commit** — the foundation for R1+ mini-projects.

---

## 🧭 7. Troubleshooting (Sanity Checks)

| Issue | Likely Fix |
|-------|-------------|
| `npm start` fails after setup | Delete `node_modules` and `package-lock.json`, then run `npm install` again. |
| ESLint config errors | Delete `.eslintrc.*`, re-run `npx eslint --init`. |
| Prettier not formatting | Check VSCode settings → enable “Format on Save” + ensure Prettier is the default formatter. |
| App won’t load | Double-check you’re in the correct repo folder. Try `npm start` again. |

---

## ✅ Final Checklist

- [ ] Node and npm verified  
- [ ] CRA setup complete (`npm start` works)  
- [ ] CRA clutter removed  
- [ ] Folder structure clean (`components`, `assets`)  
- [ ] Prettier + ESLint installed and functional  
- [ ] Initial commit pushed  

---

**End of Document — R0 Setup Complete**
