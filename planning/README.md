# Planning

> Goal: turn an idea into a fully validated, executable plan before writing a single line of code.

## Pipeline

```
brainstorming → grilling (optional) → writing-plans → executing-plans
```

| Skill | Role | Source |
|-------|------|--------|
| [brainstorming](./brainstorming.md) | Explore intent, design, constraints before touching code | obra/superpowers |
| [grilling](./grilling.md) | Stress-test a plan with relentless one-at-a-time questions | mattpocock/skills |
| [grill-with-docs](./grill-with-docs.md) | Grilling + ADRs + glossary generated as you go | mattpocock/skills |
| [writing-plans](./writing-plans.md) | Write bite-sized, TDD-driven implementation plans | obra/superpowers |
| [executing-plans](./executing-plans.md) | Execute plan task-by-task with review checkpoints | obra/superpowers |

## When to Use What

- **New feature from scratch** → brainstorming → writing-plans → executing-plans
- **Design feels underspecified** → grilling before writing-plans
- **Architecture-heavy decision** → grill-with-docs (creates ADR trail)
- **Already have a spec** → skip brainstorming, go to writing-plans
