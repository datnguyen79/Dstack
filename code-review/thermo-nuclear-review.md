# thermo-nuclear-code-quality-review

**Category:** Code Review  
**Type:** Claude Code skill  
**Source:** [cursor/plugins](https://github.com/cursor/plugins/blob/main/cursor-team-kit/skills/thermo-nuclear-code-quality-review/SKILL.md)

## What

Unusually strict structural code review. Not a linter wrapper — a maintainability audit that actively hunts for "code judo" moves: restructurings that preserve behavior while making the implementation dramatically simpler.

Core prompt it runs:
> Perform a deep code quality audit of the current branch's changes. Rethink how to structure / implement the changes to meaningfully improve code quality without impacting behavior. Work to improve abstractions, modularity, reduce spaghetti code, improve succinctness and legibility. Be ambitious.

## Non-Negotiable Rules It Enforces

1. **No file crosses 1000 lines due to a PR** — extract helpers/modules first
2. **No spaghetti growth** — new ad-hoc conditionals bolted onto unrelated flows = design problem, not nit
3. **Don't rubber-stamp working code** — if structure can be cleaner without behavior change, push for it
4. **No magic / hacky abstractions** — thin wrappers, identity helpers, cast-heavy code all flagged
5. **Types and boundaries must be clean** — no `any`, `unknown`, unnecessary optionality
6. **Logic in canonical layer only** — feature logic leaking into shared paths = blocked
7. **Avoid unnecessary sequential orchestration** — independent work should run in parallel

## Approval Bar

Blocks unless:
- No structural regression
- No missed code-judo opportunity (if one is clearly visible)
- PR doesn't push file from <1000 → >1000 lines unjustifiably
- No spaghetti branching added to existing flows
- No abstraction/cast/wrapper churn obscuring real design
- No logic in wrong layer or duplicating canonical helper

## Priority Order of Findings

1. Structural regressions
2. Missed simplification / code-judo moves
3. Spaghetti / branching complexity
4. Boundary / type-contract issues
5. File-size violations
6. Modularity problems
7. Legibility concerns

## Setup

```
/plugin marketplace add cursor/plugins
```

Then:
```
/thermo-nuclear-code-quality-review
```

## When to Use

- Before merging any non-trivial PR
- When a file is getting large and the diff adds more
- When you suspect a feature is being crammed into the wrong layer
- When code passes tests but feels wrong
