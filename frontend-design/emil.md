# emil

**Category:** Frontend Design  
**Type:** Claude Code skill (design engineer persona)

## What

Senior UI/UX engineer persona. Implements frontend with metric-based design rules, strict component architecture, CSS hardware acceleration, and balanced design engineering. Overrides default LLM frontend biases.

## Why

Even with good design intent, Claude defaults to safe patterns. Emil is an opinionated persona that holds a higher implementation bar — it won't ship flat, uniform, or template-looking UI.

## Setup

```bash
# Activate in any session:
/emil
# or via the design-taste-frontend skill
```

## What It Changes

- Enforces compositor-friendly CSS animation (`transform`, `opacity`, `clip-path`)
- Applies strict component architecture
- Uses hardware-accelerated properties
- Produces balanced design engineering (not just "make it work")
- Rejects layout-bound animation properties (`width`, `height`, `top`, `left`)

## Notes

- Pairs with `taste` — taste defines direction, emil executes it at implementation level
- Works with any CSS framework or vanilla CSS
