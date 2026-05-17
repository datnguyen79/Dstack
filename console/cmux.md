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
# Install (recommended)
brew tap manaflow-ai/cmux
brew install --cask cmux

# Wire Claude Code hooks after install
cmux hooks setup
```

Or download the `.dmg` from [releases](https://github.com/manaflow-ai/cmux/releases/latest/download/cmux-macos.dmg) and drag to Applications.

Skills in the cmux family:
- `/cmux` — core workspace
- `/cmux-browser` — browser integration
- `/cmux-workspace` — workspace presets
- `/cmux-markdown` — markdown preview pane

## Notes

- Define workspace layouts once, reuse per project type
- Combine with `dmux-workflows` for full workflow automation
