# CSS/UI/UX Starter Guidelines (Vanilla CSS)

This document provides baseline UI/UX principles for non-Tailwind projects.

## Design Principles
- Keep spacing consistent (8px or 4px scale).
- Use neutral colors first; avoid “rainbow UI”.
- Use max-width containers for readability.
- Typography hierarchy: h1 > h2 > h3 > body.

## Layout Foundations
- Use flexbox for most layouts.
- Use grid only when necessary.
- Avoid deeply nested divs.

## Interaction Patterns
- Buttons: clear, consistent size.
- Hover + active states required.
- Always include focus styles.

## File Organization
- globals.css: reset + variables
- layout.css: wrappers, grids, flex utilities
- components/: component-specific styles

## Future Tailwind Version
A Tailwind-specific version will replace these utilities with:
- spacing classes
- typography presets
- responsive utilities
- component patterns
