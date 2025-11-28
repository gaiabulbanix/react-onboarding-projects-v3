# Combined React Concepts Guide — R5 to R7

This document merges R5, R6, and R7 into one cohesive "advanced fundamentals" guide.

---

# R5 — Component Roles & State Placement

## Component Roles
- **Display component:** Pure UI, no state.
- **Logic component:** Holds state, handlers, and calculations.
- **Layout component:** Arranges children, minimal/no logic.

## State Placement Rules
1. If multiple components need the same data → lift state up.
2. If a value can be derived → do NOT store it in state.
3. Keep state minimal but meaningful.

---

# R6 — Reusable UI & Composition Patterns

## Patterns
- **Row pattern:** label + action
- **Panel pattern:** box with padding + shadow
- **List pattern:** array → mapped components
- **Action bar:** set of buttons grouped logically

## Composition Principles
- Small components > large components.
- Each component handles ONE concern.
- Reuse panels, cards, rows across projects.

---

# R7 — Controlled Components & Form Patterns

## Controlled Component Rules
- Input value comes from state.
- onChange updates state.
- UI always reflects state.

## Form Patterns
- Multi-field state object (e.g. { name, email })
- Update via: setForm(prev => ({ ...prev, field: value }))
- Derived values computed inline, not stored.

---

# Integration: The R5–R7 Mental Framework

1. Identify component roles.
2. Decide where state belongs.
3. Build reusable UI structure.
4. Add controlled form behavior.
5. Use derived values for validation.
