# grill-with-docs

**Category:** Planning  
**Type:** Claude Code skill  
**Source:** [mattpocock/skills](https://github.com/mattpocock/skills/blob/main/skills/engineering/grill-with-docs/SKILL.md)

## What

Runs a grilling session and simultaneously generates ADRs and a glossary as decisions are made. Combines `/grilling` + `/domain-modeling` under the hood.

## Why

Grilling surfaces decisions. grill-with-docs captures them. For architecture-heavy or long-lived projects, the ADR trail is worth the extra overhead.

## Setup

```bash
/plugin marketplace add mattpocock/skills
```

Then:
```
/grill-with-docs
```

## Notes

- Use over plain grilling when you need a documented decision record
- Domain modeling runs alongside — glossary builds up as terms get defined
- Good entry point for onboarding: spec + ADRs + glossary in one session
