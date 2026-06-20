# executing-plans

**Category:** Planning  
**Type:** Claude Code skill  
**Source:** [obra/superpowers](https://github.com/obra/superpowers/blob/main/skills/executing-plans/SKILL.md)

## What

Loads a written plan, reviews it critically, then executes tasks one-by-one with checkpoints. Stops immediately on blockers — asks, doesn't guess. Finishes by invoking finishing-a-development-branch.

## Why

Keeps execution structured and reviewable. Each checkpoint is a natural pause point before the next task batch.

## Setup

```bash
/plugin marketplace add obra/superpowers
```

Then:
```
/executing-plans
```

## Notes

- Requires a plan from writing-plans — not for ad-hoc task lists
- Prefers subagent-driven-development when subagents are available (higher quality)
- Never starts on main/master without explicit consent
- Part of the superpowers suite: brainstorming → writing-plans → executing-plans
