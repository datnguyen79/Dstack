# writing-plans

**Category:** Planning  
**Type:** Claude Code skill  
**Source:** [obra/superpowers](https://github.com/obra/superpowers/blob/main/skills/writing-plans/SKILL.md)

## What

Writes comprehensive, bite-sized implementation plans assuming the engineer has zero codebase context. Each step is 2–5 minutes: write failing test → run it → implement → run again → commit.

No placeholders. Every step contains actual code, exact file paths, and exact commands with expected output.

Saves to `docs/superpowers/plans/YYYY-MM-DD-<feature-name>.md` then offers execution via subagent-driven-development or executing-plans.

## Why

Turns a design into a machine-executable task list. Plans built this way can be handed to a subagent without supervision.

## Setup

```bash
/plugin marketplace add obra/superpowers
```

Then:
```
/writing-plans
```

## Notes

- Always invoked by brainstorming at the end of design — rarely called standalone
- Self-reviews for placeholders, type consistency, and spec coverage before saving
- Pairs with executing-plans for inline execution or subagent-driven-development for parallel dispatch
