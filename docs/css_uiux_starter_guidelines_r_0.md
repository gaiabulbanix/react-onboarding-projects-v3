# 🧠 R0: CSS & UI/UX Starter Guidelines (Pre‑Tailwind)
**Developer:** Gorby  
**Assistant Codename:** Bob  
**Version:** v1.0 — Initial Draft

---

## 📌 Section 0 — Before You Touch CSS: Core Mental Models
This section defines the *mindset* you should have before writing any CSS. These are universal ideas that apply across React, Tailwind, and modern frontend.

### **0.1 — Everything is a Box**
Every single element on a webpage is a rectangular box. Styling is simply:
- adjusting its size,
- adjusting its spacing,
- adjusting its position,
- adjusting how it relates to other boxes.

### **0.2 — Parent → Child Relationships Drive Layout**
Most layout problems come from misunderstanding who controls what.
- Parents control **layout direction**, spacing, alignment, and structure.
- Children control **content** and the box itself.

### **0.3 — Default CSS is Ugly (by Design)**
Browsers start with *minimal, inconsistent, outdated styling*. Your job is to supply the structure and spacing that turns:
```
unstyled HTML → intentional UI
```

### **0.4 — Good UI Comes From Spacing & Alignment, Not Fancy Colors**
A clean design is:
- sensible spacing
- consistent alignment
- organized sections
- predictable structure

Colors, fonts, and gradients come *last*.

---

## 📌 Section 1 — The 10-Minute Base Layout Recipe
Whenever you face a blank page, apply this recipe in this order.
It prevents chaos and gives you a dependable starting point.

### **1.1 — Constrain the Layout**
```css
.container {
  max-width: 600px;
  margin: 0 auto;
}
```
Why:
- Centers content on large screens.
- Prevents lines of text from stretching too wide.
- Makes your app readable.

### **1.2 — Add Breathing Room**
```css
section {
  margin-bottom: 1rem;
  padding: 1rem;
}
```
Why:
- Sections shouldn’t visually collide.
- Padding gives each “box” internal space.

### **1.3 — Use Flexbox Early**
```css
.row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
```
Why:
- Flexbox solves 90% of layout problems.
- Gap avoids items sticking together.

### **1.4 — Push Items with Auto-Margins**
```css
.right {
  margin-left: auto;
}
```
Why:
- The easiest, cleanest way to right-align elements in a row.

### **1.5 — Round Corners + Light Borders**
```css
.card {
  border-radius: 0.5rem;
  border: 1px solid rgba(0,0,0,0.05);
  background: rgba(0,0,0,0.03);
}
```
Why:
- Instantly modern.
- Separates visual sections subtly.

---

## 📌 Section 2 — Flexbox for Humans (Minimal Ruleset)
Flexbox is simpler than it looks. You only need a few properties.

### **2.1 — Default Horizontal Row**
```css
display: flex;
```

### **2.2 — Align Vertically**
```css
align-items: center;
```

### **2.3 — Space Between Children**
```css
gap: 0.5rem;
```

### **2.4 — Push Something Right**
```css
margin-left: auto;
```

### **2.5 — Stack Vertically**
```css
flex-direction: column;
```

This is 80% of flexbox in five lines.

---

## 📌 Section 3 — Visual Hierarchy (Typography & Structure)
How to make content readable and visually organized.

### **3.1 — Use Heading Scale Consistently**
```css
h1 { font-size: 2rem; }
h2 { font-size: 1.25rem; margin-bottom: 0.75rem; }
```

### **3.2 — Group Content into Sections**
Every section should feel like a distinct “thought.”

### **3.3 — Add Space Between Sections, Not Inside Text Blocks**
Spacing improves scannability, not decoration.

---

## 📌 Section 4 — Inputs, Buttons, and Actions
Modern UI patterns to make controls feel cohesive.

### **4.1 — Pair Input + Button as a Unit**
```css
input, button {
  padding: 0.6rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.5rem;
}
```

### **4.2 — Use Gap for Multi-Control Rows**
```css
form { display: flex; gap: 0.5rem; }
```

### **4.3 — Use Focus Styles**
```css
input:focus, button:focus {
  box-shadow: 0 0 0 3px rgba(99,102,241,0.12);
}
```

### **4.4 — Add Interaction Feedback**
```css
button:hover { opacity: 0.85; }
button:active { transform: scale(0.98); }
```

Buttons should *feel alive*, not static.

---

## 📌 Section 5 — Card Layout Pattern (Your New Best Friend)
This is the structure behind modern apps.

### **5.1 — Add Card-like Sections**
```css
.card {
  background: rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.05);
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
}
```
Apply `.card` to anything that represents a logical block.

---

## 📌 Section 6 — "When in Doubt" Mini Rules
A fallback checklist when you freeze during styling.

1. **Constrain width** (`max-width: 600px; margin: auto;`)
2. **Add vertical spacing** (`margin-bottom: 1rem;`)
3. **Convert layout to flex** (`display: flex; align-items: center;`)
4. **Add gap** (`gap: 0.5rem;`)
5. **Push optional items right** (`margin-left: auto;`)
6. **Round corners** (`border-radius: 0.5rem;`)
7. **Add subtle backgrounds**
8. **Make interactive controls feel interactive**
9. **Use consistent font sizing for headings**
10. **Stop early — good UI is spacing, not decorations.**

---

## 📌 Section 7 — The 3-Phase Styling Workflow (Your New Habit)
This structure keeps you from feeling overwhelmed.

### **Phase 1 — Structure**
- sections
- containers
- flex layouts
- grouping

### **Phase 2 — Spacing**
- padding
- margins
- gaps
- alignment

### **Phase 3 — Polish**
- corners
- borders
- colors
- fonts
- interactions

Never style backwards.
Following this order prevents chaos.

---

## 📌 Section 8 — What Comes Next (Tailwind Prep)
These guidelines directly map to Tailwind utilities:
- `max-w-*` → layout containment
- `mx-auto` → horizontal centering
- `p-*` / `m-*` → spacing
- `flex`, `items-center`, `gap-*` → layout
- `rounded-*`, `shadow-*`, `bg-*` → polish

Your mental models stay the same.
Tailwind simply makes the syntax faster.

---

**End of Document — R0 CSS & UI/UX Starter Guidelines (v1.0)**

