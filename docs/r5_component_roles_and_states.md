# React R5 Summary

## Component Roles (3 Types)

### 1. Layout Components
- Structure and sections  
- Usually stateless  
- Pass data down  
- Examples: `App`, `TaskList`

### 2. Feature Components
- Own local UI state  
- Handle interactions and logic  
- Examples: `TaskItem`, `TaskInput`, `ThemeToggler`

### 3. Display Components
- Pure presentation  
- No state or logic  
- Simple UI blocks  

---

## The State Ownership Rule

**State should live in the lowest component that needs to *control* it.**

- If multiple components depend on a value → lift it up.  
- If only one component needs it → keep it local.  
- If the value is part of app data → store it in the global state (e.g., inside `taskArray`).  

### R5 Examples in RB1

| State         | Owner         | Reason |
|---------------|---------------|--------|
| `taskArray`   | App           | Global data model; many components need it |
| `complete`    | App           | Part of the task model |
| `selected`    | App           | Interaction state across components |
| `isEditing`   | TaskItem      | Local UI control |
| `editValue`   | TaskItem      | Local input buffer |
| `newTask`     | TaskInput     | Local controlled input |
| `theme`       | ThemeToggler  | User preference |

---

## Derived State

Derived state = values **computed** from existing state, not stored with `useState`.

### Examples:
- `selectedCount`  
- `hasSelected`  

Avoid storing values you can compute on the fly — it reduces bugs and keeps logic clean.
