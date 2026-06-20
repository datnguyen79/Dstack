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
| [Coding Behavior](#coding-behavior) | Correct LLM coding failure modes |
| [Planning](#planning) | Idea → validated spec → executable plan |
| [Code Review](#code-review) | Structural audit before merge |
| [Workflows](#workflows) | How I combine tools end-to-end |

---

## Token Saving

> Goal: cut token usage 60–90% on dev operations without sacrificing output quality.

| Tool / Skill | Role |
|---|---|
| [ponytail](./token-saving/ponytail.md) | YAGNI ladder before every code write — cuts LOC/cost/time |
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

## Coding Behavior

> Goal: correct default LLM failure modes before they become bugs or bloat.

| Tool / Skill | Role |
|---|---|
| [karpathy-guidelines](./coding-behavior/karpathy-guidelines.md) | Think before coding, simplicity, surgical changes, goal-driven execution |

→ [Full coding-behavior category](./coding-behavior/README.md)

---

## Planning

> Goal: turn an idea into a validated spec and machine-executable plan before writing code.

| Skill | Role |
|---|---|
| [brainstorming](./planning/brainstorming.md) | Explore intent + design; hard gate before implementation |
| [grilling](./planning/grilling.md) | Stress-test a plan with relentless one-at-a-time questions |
| [grill-with-docs](./planning/grill-with-docs.md) | Grilling + ADR + glossary generation |
| [writing-plans](./planning/writing-plans.md) | Write bite-sized TDD-driven implementation plans |
| [executing-plans](./planning/executing-plans.md) | Execute plan task-by-task with checkpoints |

Pipeline: `brainstorming → [grilling] → writing-plans → executing-plans`

→ [Full planning category](./planning/README.md)

---

## Code Review

> Goal: catch structural regressions, missed simplifications, and complexity that should have been deleted.

| Skill | Role |
|---|---|
| [thermo-nuclear-review](./code-review/thermo-nuclear-review.md) | Extreme structural audit — code judo, 1k-line limit, spaghetti detection |

→ [Full code-review category](./code-review/README.md)

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
Token layer:    ponytail + rtk                         → write less code, filter CLI noise
Design layer:   taste + emil                           → quality UI without templates
Console layer:  cmux                                   → organized terminal
Behavior layer: karpathy-guidelines                    → think first, stay surgical
Planning layer: brainstorm → grill → plan → execute    → idea to code without drift
Review layer:   thermo-nuclear-review                  → structural audit, delete complexity
Workflow:       plan → tdd → review → ship
```

---

*This is a living doc. I add tools as I adopt them.*
