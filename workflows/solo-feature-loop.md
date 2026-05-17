# Solo Feature Loop

> Full cycle for shipping a feature alone, fast.

## Stack Used

| Step | Tool / Skill |
|------|-------------|
| Research | `gh search`, Context7 docs |
| Plan | `/plan` skill |
| TDD | `/tdd` skill |
| Code review | `code-reviewer` agent |
| Token efficiency | caveman + rtk throughout |

## Loop

```
1. RESEARCH
   gh search repos/code → find existing pattern
   Context7 → confirm API/library behavior
   
2. PLAN
   /plan → generate task breakdown
   Align on approach before writing code

3. TDD
   /tdd → write failing test first
   Implement minimum to pass
   Refactor
   Target: 80%+ coverage

4. REVIEW
   code-reviewer agent → catch quality/security issues
   Fix CRITICAL + HIGH before committing

5. SHIP
   Commit (conventional format)
   Push / PR
```

## Notes

- Run caveman at session start — keep it on the whole loop
- rtk runs transparently via hook — no manual steps
- Don't skip plan step for "small" features. It costs 2 minutes and saves 20.
