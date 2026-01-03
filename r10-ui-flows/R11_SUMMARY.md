# R11 Summary

Focus:
- Practicing UI flow and state-driven behavior using simple dashboard cards

Key patterns:
- Status-driven UI with constrained primary actions
- Secondary actions as recovery paths
- ActionRow for semantic layout (state vs action)

Abstraction decisions:
- Avoided premature StatusCard abstraction
- Extracted StatusBadge as a display-only component
- Confirmed abstraction should reduce noise, not add logic

Outcome:
- Increased confidence building UI flows from scratch
- Clearer judgement on when and how to abstract