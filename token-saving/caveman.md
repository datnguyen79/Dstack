# caveman

**Category:** Token Saving  
**Type:** Claude Code skill

## What

Forces Claude to respond like a terse, smart caveman. Strips: articles (a/an/the), filler words (just/really/basically/actually), pleasantries (sure/certainly/happy to), and hedging. Full technical substance stays intact. Code blocks unchanged.

Three intensity levels: `full` (default), `lite`, `ultra`.

## Why

Claude's default responses have ~20–40% filler. Caveman removes it without losing signal. Works every turn, survives long sessions, no drift back to verbose mode.

## Setup

Caveman is a Claude Code skill. Install it:

```bash
# The skill file lives at ~/.claude/skills/caveman/
# Activate in any session:
/caveman
```

Switch levels mid-session:
```
/caveman lite    # softer tone, still drops filler
/caveman full    # default
/caveman ultra   # maximum compression
```

Turn off:
```
stop caveman
# or
normal mode
```

## Notes

- Auto-clarity kicks in for security warnings, irreversible ops, and multi-step sequences where fragment order risks misread
- Code, commits, PRs always written normally regardless of level
- Persists until session end or explicit stop
