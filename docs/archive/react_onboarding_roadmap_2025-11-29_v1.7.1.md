# React Onboarding Roadmap — v1.7.1  
Updated: 2025-11-29  
Status: Incorporates Methodology Overhaul v1.0 (Micro-Repetition + Scaffold System)

---

# ✅ R0–R8 Completed (Summary Only)
- CRA → Vite/Tailwind progression
- Component patterns R1–R7
- Modern environment setup (R8)

---

# 🟦 R9 — Tailwind Foundations & UI Composition (Updated Methodology)

## **New Section: Phase Methodology Integration**
This version integrates:
- Micro Repetition Drills  
- S1/S2 Scaffold System  
- Early phase blending  
- Gentle real-world exposure  

---

# 🔹 **R9 Core Objectives**
1. Build confidence using Tailwind utility classes  
2. Rebuild familiar R5–R7 patterns visually  
3. Develop “structuring from scratch” skill  
4. Produce reusable scaffolds for later phases  
5. Keep sessions low-burnout and highly repeatable  

---

# 🔹 **R9 Updated Checklist (Based on Methodology Overhaul v1.0)**

## **1. Micro Repetition Drills (5–20 mins each)**  
Perform these at the start of R9 sessions:

### **Drill A — Tailwind Panel Component**
- Create a `<Panel>` with padding, rounded corners, shadow, and responsive width.
- Purpose: establish visual confidence + utility pattern familiarity.

### **Drill B — Action Row**
- A row with:  
  `Label | (Primary Button) (Secondary Button)`
- Purpose: layout fluency + spacing mental model.

### **Drill C — Tailwind Controlled Input**
- Convert a simple controlled input (from R7)  
  into a Tailwind-styled component with disabled-submit state.
- Purpose: reinforce controlled logic + Tailwind styling.

---

## **2. S1: Build From Scratch**
Create a mini-page (name: `r9-scaffold-1`) combining:
- `<Panel>`  
- `<ActionRow>`  
- `<FormInput>`  
- Basic layout  

This page exists only to practice composition.

---

## **3. S2: Extract Scaffold Components**
Move stable components into:
```
src/components/scaffold/
  Panel.jsx  
  ActionRow.jsx  
  FormInput.jsx  
  README.md
```

README contains:
- How to import  
- Expected props  
- Example usage  

---

## **4. Visual Composition Fundamentals**
- Margin/padding hierarchy  
- Flexbox basics  
- Responsive classes  
- Using container max-widths  

---

## **5. Light Real-World Exposure (Safe & Controlled)**
- 1 vague requirement per session  
- 1 small bug intentionally introduced (optional)  
- Mild ambiguity exercises  

(Designed to reduce fear and build true dev instincts.)

---

# 🟩 Upcoming Phases (Unchanged Goals, Updated Methodology Will Apply)

## R10 — UI Component Library (Tailwind)
- Buttons, cards, modals, list items
- S1/S2 loops applied

## R11 — Mini React Projects
- 0.5–2 days  
- Repeating patterns at scale  

## R12 — Dashboard Fundamentals

## R13–R15 — App Assembly  
- Authentication  
- API integration  
- Backend blending  

---

# End of File — v1.7.1  
