# R10 — UI Flows

Purpose:
This branch is dedicated to React R10 work, focusing on:

- UI composition
- Component flow
- Scaffold reuse from R9
- Confidence through repetition

Constraints:

- No global/shared state
- No premature abstraction
- No backend unless explicitly introduced
- This is a sandbox, not a portfolio project

Status:
R10 in progress.

## R10 Notes (In Progress)

Key takeaways so far:
- UI flow comes before abstraction.
- State belongs where coordination happens (top-level App).
- Components are extracted based on shared responsibility, not appearance.
- Buttons were intentionally NOT abstracted because their behaviors differ.
- Abstraction is earned through repetition + shared reasons to change.