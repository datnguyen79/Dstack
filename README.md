# Dstack

My personal AI-powered solo dev stack — tools, skills, and workflows I actually use daily.

Built around [Claude Code](https://claude.ai/code). Organized by category. Each entry includes what it does, why it's in my stack, and how to set it up.

---

## Stack Index

| Category | What's in it |
|----------|-------------|
| [Token Saving](#token-saving) | Keep costs low without losing capability |
| [Frontend Design](#frontend-design) | Ship high-quality UI fast |
| [Console](#console) | Terminal productivity |
| [Workflows](#workflows) | How I combine tools end-to-end |

---

## Token Saving

> Goal: cut token usage 60–90% on dev operations without sacrificing output quality.

| Tool / Skill | Role |
|---|---|
| [caveman](./token-saving/caveman.md) | Strips filler from Claude responses |
| [rtk](./token-saving/rtk.md) | CLI proxy that filters verbose command output |

→ [Full token-saving category](./token-saving/README.md)

---

## Frontend Design

> Goal: produce intentional, non-template-looking UI with speed.

| Tool / Skill | Role |
|---|---|
| [taste skill](./frontend-design/taste-skill.md) | Design direction + quality bar enforcement |
| [emil](./frontend-design/emil.md) | Senior design engineer persona for UI implementation |

→ [Full frontend-design category](./frontend-design/README.md)

---

## Console

> Goal: fast, organized terminal workflow.

| Tool / Skill | Role |
|---|---|
| [cmux](./console/cmux.md) | Multi-pane terminal workspace manager |

→ [Full console category](./console/README.md)

---

## Workflows

> How I combine tools together for specific tasks.

| Workflow | Description |
|---|---|
| [Solo feature loop](./workflows/solo-feature-loop.md) | Plan → TDD → ship a feature end-to-end |

→ [Full workflows](./workflows/README.md)

---

## Stack at a Glance

```
Token layer:   caveman + rtk        → strip noise, save cost
Design layer:  taste + emil         → quality UI without templates
Console layer: cmux                 → organized terminal
Workflow:      plan → tdd → review → ship
```

---

*This is a living doc. I add tools as I adopt them.*
