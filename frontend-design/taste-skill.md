# taste skill

**Category:** Frontend Design  
**Type:** Claude Code skill  
**Source:** [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill)

## What

Enforces design quality standards before writing frontend code. Sets a specific style direction, defines the palette and typography strategy, rejects generic template patterns, and gates output against a quality checklist.

## Why

Claude's default frontend output looks like every other AI-generated site. The taste skill forces a real design decision before any code is written — style direction first, implementation second.

## Setup

```bash
# Install skill
npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"
```

Then in any Claude session:
```
/taste
```

## What It Enforces

**Before writing frontend code:**
1. Pick a specific style direction (not "clean minimal")
2. Define palette intentionally
3. Choose typography deliberately
4. Reference real design examples

**Worthwhile directions it pushes toward:**
- Editorial / magazine
- Neo-brutalism
- Glassmorphism with real depth
- Dark luxury / light luxury
- Bento layouts
- Scrollytelling
- Swiss / International
- Retro-futurism

**Quality checklist per component:**
- [ ] Doesn't look like default Tailwind/shadcn?
- [ ] Intentional hover/focus/active states?
- [ ] Hierarchy rather than uniform emphasis?
- [ ] Would look believable in a real product screenshot?

## Notes

- Pairs with `emil` — taste sets direction, emil executes
- Does not default to dark mode; chooses what the product wants
