# caveman

**Category:** Token Saving  
**Type:** Claude Code skill  
**Source:** [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)

## What

Forces Claude to respond like a terse, smart caveman. Strips: articles (a/an/the), filler words (just/really/basically/actually), pleasantries (sure/certainly/happy to), and hedging. Full technical substance stays intact. Code blocks unchanged.

Three intensity levels: `full` (default), `lite`, `ultra`.

## Why

Claude's default responses have ~20–40% filler. Caveman removes it without losing signal. Works every turn, survives long sessions, no drift back to verbose mode.

## Setup

```bash
# Install (macOS/Linux/WSL — needs Node ≥18)
curl -fsSL https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.sh | bash

# Windows
irm https://raw.githubusercontent.com/JuliusBrussee/caveman/main/install.ps1 | iex
```

Then in any Claude session:
```
/caveman          # activate (full by default)
/caveman lite     # softer, still drops filler
/caveman ultra    # telegraphic
stop caveman      # turn off
```

## Notes

- Auto-clarity kicks in for security warnings, irreversible ops, and multi-step sequences where fragment order risks misread
- Code, commits, PRs always written normally regardless of level
- Persists until session end or explicit stop
