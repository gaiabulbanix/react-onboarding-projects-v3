# React R7 Summary — Controlled Components & Form Patterns

R7 teaches the foundational patterns behind all real-world React forms:
- controlled components
- multi-field form state
- derived state values
- declarative validation
- object and nested state updates
- state-driven UI behavior

These patterns power login forms, profile editors, search bars, CRUD apps, dashboards, and every MERN project you will build.

---

## 1. Controlled Components — The Core Pattern

A controlled component is an input whose value is completely owned and managed by React state.

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

### Key Idea
Typing does **not** update the input directly.
React:
1. Receives the input event
2. Updates state through your handler
3. Re-renders the component
4. Applies the new value to the input

React, not the browser, controls the value.

---

## 2. The Event → State → UI Cycle

Controlled components always follow this flow:

1. User types  
2. Browser fires the input event  
3. React calls your `onChange`  
4. `setState` updates internal state  
5. React re-renders  
6. Input displays the new state value  

This pattern is the backbone of all React form logic.

---

## 3. Multiple Update Sources (Buttons, Logic, Etc.)

Controlled state can be updated from anywhere.

```jsx
<button onClick={() => setName("")}>Clear</button>
```

Inputs only ever display the current state — no exceptions.

---

## 4. Derived State — Values Computed From Other State

Derived state is computed from existing fields and not stored directly.

```jsx
const fullName = `${first} ${last}`.trim();
```

You use it for:
- Display purposes  
- Validation  
- Computed values (totals, summaries)  
- Formatting  

This avoids storing redundant or duplicative data.

---

## 5. Declarative Validation & Button Disabling

UI becomes predictable and state-driven.

```jsx
const isValid = first.length > 0 && last.length > 0;

<button disabled={!isValid}>Submit</button>
```

React enables or disables elements automatically based on rules expressed through state.

---

## 6. Object-Based State for Multi-Field Forms

Instead of separate state values for each field, forms usually combine them:

```jsx
const [profile, setProfile] = useState({
  username: "",
  age: "",
  email: ""
});
```

This keeps related data grouped and easier to manage.

---

## 7. Updating Object State — The Spread Pattern

Functional updates ensure you don’t accidentally overwrite unrelated fields.

```jsx
setProfile(prev => ({
  ...prev,
  username: "Bob"
}));
```

`...prev` copies the previous state.
You then overwrite only the specific field you want.

---

## 8. Dynamic Field Updating — The `updateField` Helper

Reusable field-updater for forms with many fields:

```jsx
function updateField(field, value) {
  setProfile(prev => ({
    ...prev,
    [field]: value
  }));
}
```

Used like this:

```jsx
onChange={(e) => updateField("email", e.target.value)}
```

This pattern scales gracefully for large forms.

---

## 9. Nested Object State — One Level Deeper

Real apps often have grouped form sections:

```jsx
const [profile, setProfile] = useState({
  name: "",
  contact: {
    email: "",
    phone: ""
  }
});
```

Updating nested data requires spreading both levels:

```jsx
setProfile(prev => ({
  ...prev,
  contact: {
    ...prev.contact,
    phone: "12345"
  }
}));
```

This is the same pattern from earlier — just repeated one layer further.

---

## 10. The Core Patterns You Now Understand

You now know how to:

- build simple controlled inputs  
- manage multi-field forms  
- compute derived values  
- declaratively validate user input  
- enable/disable UI elements  
- update object-based state safely  
- update nested state safely  
- understand exactly how onChange interacts with state  
- see the direct connection between UI and state  
- apply the event → state → UI cycle in any scenario  

These skills are the heart of React development.

---

## 11. Developer Mental Model Cheat-Sheet

```
React controls all input values.
DOM never owns form state.

User types → onChange → setState → React re-renders → input shows new state.

Derived state = computed, not stored.

Object form state = spread previous → override one field.

Nested state = spread outer → spread inner → override field.

Validation & UI behavior = always state-driven.
```

R7 completes the real foundation for building full React applications — especially forms, CRUD systems, dashboards, and the MERN stack.
