# brainstorming

**Category:** Planning  
**Type:** Claude Code skill  
**Source:** [obra/superpowers](https://github.com/obra/superpowers/tree/main/skills/brainstorming)

## What

Collaborative design exploration before any implementation. One question at a time, proposes 2–3 approaches, writes a spec doc, then hands off to `writing-plans`.

Hard gate: no code, no scaffolding, no implementation until design is approved.

Flow: explore context → clarify → propose approaches → present design → write spec → invoke writing-plans

## Why

Prevents the most expensive mistake: building the wrong thing. Even "simple" features benefit — unexamined assumptions here cause wasted work, not at review time.

## Setup

```bash
/plugin marketplace add obra/superpowers
```

Then:
```
/brainstorming
```

## Notes

- Part of the superpowers suite — pairs with writing-plans and executing-plans
- Saves spec to `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`
- Always transitions to writing-plans, never directly to implementation skills
