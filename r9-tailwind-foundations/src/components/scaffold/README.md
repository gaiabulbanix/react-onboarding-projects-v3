# Scaffold Components

## Panel

Reusable container with optional variants. Handles layout, padding, and section titles.

**Usage:**

```jsx
<Panel title="Example" variant="soft" className="mt-4">
  <p>Content here</p>
</Panel>
```

## ActionRow

Row layout with a left-side label and right-side actions.

**Usage:**

```jsx
<ActionRow label="Example">
  <button>Action</button>
</ActionRow>
```

## FormInput

Labeled input field with built-in controlled state and focus styling.

**Usage:**

```jsx
<FormInput label="Username" placeholder="Enter your username" className="mt-2" />
```

## Button Component

Reusable button component with variants and sizes.

### Button Props

| Prop        | Type     | Default     | Description                                                      |
| ----------- | -------- | ----------- | ---------------------------------------------------------------- |
| `variant`   | string   | `"primary"` | Button color style (`primary`, `secondary`, `danger`, `success`) |
| `size`      | string   | `"md"`      | Button size (`md`, `sm`)                                         |
| `onClick`   | function | `() => {}`  | Click handler                                                    |
| `className` | string   | `""`        | Extra Tailwind classes                                           |
| `children`  | node     | —           | Button label/content                                             |

**Usage:**

```jsx
<Button variant="primary">Save</Button>
<Button variant="secondary">View</Button>
<Button variant="danger">Delete</Button>
<Button variant="success">Enable</Button>
<Button size="md">Submit</Button> //default
<Button size="sm">Edit</Button>
```

### Button Notes

- `variant` controls the button’s color and hover behavior.
- `size` controls padding and font size.
- Always use `<Button>` instead of raw `<button>` for consistent design.
- Additional variants (ghost, outline, icon buttons) may be added later.
