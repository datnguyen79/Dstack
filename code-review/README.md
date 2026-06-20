# Code Review

> Goal: catch structural regressions, missed simplifications, and maintainability rot before they merge.

## Tools

| Skill | Role |
|-------|------|
| [thermo-nuclear-review](./thermo-nuclear-review.md) | Extreme structural audit — code judo, 1k-line limit, spaghetti detection |

## Philosophy

Standard linting catches style. These tools catch design problems:
- Complexity that could be deleted but wasn't
- Logic living in the wrong layer
- Files growing past maintainability thresholds
- Abstractions that add indirection without buying clarity
