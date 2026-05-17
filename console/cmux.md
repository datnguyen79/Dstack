# cmux

**Category:** Console  
**Type:** Claude Code skill  
**Source:** [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux)

## What

Multi-pane terminal workspace manager. Creates structured terminal layouts — split panes for different concerns (logs, server, git, Claude, etc.) — and manages them as named workspaces.

## Why

Solo dev context-switching is expensive. cmux keeps relevant panes visible simultaneously: server running left, git right, logs bottom. No constant tab-switching.

## Setup

```bash
# Activate workspace management in any Claude session:
/cmux
```

Skills in the cmux family:
- `/cmux` — core workspace
- `/cmux-browser` — browser integration
- `/cmux-workspace` — workspace presets
- `/cmux-markdown` — markdown preview pane

## Notes

- Define workspace layouts once, reuse per project type
- Combine with `dmux-workflows` for full workflow automation
