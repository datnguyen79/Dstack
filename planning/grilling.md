# grilling

**Category:** Planning  
**Type:** Claude Code skill  
**Source:** [mattpocock/skills](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md)

## What

Relentless one-at-a-time interview to stress-test a plan or design. Claude walks every branch of the design tree, resolves decision dependencies, and recommends an answer for each question before asking the next.

If a question can be answered by exploring the codebase, it does that instead of asking.

## Why

Surfaces assumptions and gaps before they become bugs. Fast to run, expensive to skip.

## Setup

```bash
/plugin marketplace add mattpocock/skills
```

Then:
```
/grilling
```

## Notes

- Use after brainstorming, before writing-plans, when design feels shaky
- Pairs with grill-with-docs if you want an ADR trail
- One question per message — don't ask for multiple answers at once
