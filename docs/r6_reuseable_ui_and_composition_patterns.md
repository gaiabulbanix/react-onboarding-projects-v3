# React R6 Summary — Reusable UI & Composition Patterns

## Overview
R6 teaches you how to recognize and build reusable UI patterns in React. React UIs are composed of boxes inside boxes, and these boxes follow common patterns:
- Panel (Section)
- Input Row
- Action Row
- List Row

Understanding these patterns makes building new components easier and more predictable.

---

# 1. Panel / Section Container Pattern

A reusable wrapper for grouped UI content.

## Purpose
- Provides consistent structure
- Reduces repeated CSS
- Common in dashboards, forms, settings

## Minimal Example
\`\`\`jsx
function Panel({ title, children }) {
  return (
    <section className="panel">
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}
\`\`\`

## Diagram
\`\`\`
+----------------------------------+
|  Panel (outer box)               |
|  +----------------------------+  |
|  |  Title (optional)          |  |
|  +----------------------------+  |
|  |  Children (content here)   |  |
|  +----------------------------+  |
+----------------------------------+
\`\`\`

---

# 2. Input + Button Row Pattern (Form Row)

A standard pattern for input fields paired with actions.

## Purpose
- Aligns input + button horizontally
- Standardizes spacing and layout

## Minimal Example
\`\`\`jsx
function InputRow({ children }) {
  return <div className="input-row">{children}</div>;
}
\`\`\`

## Diagram
\`\`\`
+------------------------------------------------------+
|  [ Input Field ]   [ Button ]   [ Optional Extras ]  |
+------------------------------------------------------+
\`\`\`

## Common Uses
- Search bars
- Task creation
- Login forms
- Chat inputs
- Filter bars

---

# 3. Action Row Pattern

A grouped set of actions, often aligned right.

## Purpose
- Keeps actions together
- Works in lists, cards, headers, panels

## Minimal Example
\`\`\`jsx
function ActionRow({ children }) {
  return <div className="action-row">{children}</div>;
}
\`\`\`

## Diagram
\`\`\`
[ ActionRow ]
+--------------------------+
|  Edit | Delete | Toggle  |
+--------------------------+
\`\`\`

## Variations
- Buttons  
- Icons  
- Toggles  
- Dropdown menus  
- "More" / overflow ellipsis  

---

# 4. List Row Pattern (Macro Pattern)

Represents a single item in a list-based UI. Combines content + ActionRow.

## Structure
\`\`\`
[ Left Content ]      [ Right Actions ]
\`\`\`

## Minimal Example
\`\`\`jsx
function ListRow({ left, right, className }) {
  return (
    <div className={'list-row ' + (className || '')}>
      <div className="list-row-left">{left}</div>
      <div className="list-row-right">{right}</div>
    </div>
  );
}
\`\`\`

## Diagram
\`\`\`
+---------------------------------------------------------------+
|  [ Left Content ]        |      [ Action Row ]                |
|  (text, icon, meta)      |   (Edit | Delete | Checkbox)       |
+---------------------------------------------------------------+
\`\`\`

## Common Uses
- Todo lists  
- Notifications  
- Email inbox  
- File explorers  
- Admin dashboards  
- User lists  
- Shopping carts  
- Playlists  

---

# 5. Combining Patterns

Patterns stack into larger UI structures.

Example:
\`\`\`jsx
<Panel>
  <ListRow
    left={<span>Task</span>}
    right={
      <ActionRow>
        <button>Edit</button>
        <button>Delete</button>
      </ActionRow>
    }
  />
</Panel>
\`\`\`

Diagram:
\`\`\`
Panel
└── ListRow
    ├── LeftContent: "Task"
    └── ActionRow
        ├── Edit
        ├── Delete
        └── Checkbox
\`\`\`

---

# 6. When to Extract a Pattern

Extract when:
- A layout shape repeats  
- You duplicate styling  
- You want consistent spacing  
- You can imagine using the structure again  

Avoid premature abstraction. Only extract stable patterns.

---

# 7. R6 Takeaways

- React UIs are boxes inside boxes.
- Panel, InputRow, ActionRow, and ListRow cover most real-world layouts.
- Recognizing these shapes removes “build from scratch” anxiety.
- RB1 already uses all 4 patterns — R6 teaches you to see them intentionally.
- Tailwind will make these patterns easier and faster to style.
- R6 builds the architecture intuition needed for Vite + Tailwind and future projects.

---

# Cheat-Sheet

\`\`\`
Panel     → Section wrapper (title + content)
InputRow  → Horizontal input + button
ActionRow → Group of right-aligned actions
ListRow   → Left content + right actions (full row)
\`\`\`
