# rtk (Rust Token Killer)

**Category:** Token Saving  
**Type:** CLI proxy tool  
**Source:** [rtk-ai/rtk](https://github.com/rtk-ai/rtk)

## What

Token-optimized CLI proxy. Intercepts shell commands (git, npm, cargo, etc.) and filters verbose output before it enters Claude's context window. 60–90% savings on dev operations.

Hook-based: commands are automatically rewritten by the Claude Code hook — no manual `rtk` prefix needed.

## Why

`git status`, `npm install`, build logs — all dump far more than Claude needs. rtk filters noise at the source, before it's tokenized.

## Setup

```bash
# Install
cargo install --git https://github.com/rtk-ai/rtk

# Init for Claude Code
rtk init -g

# Verify
rtk --version
rtk gain          # show token savings analytics
which rtk         # confirm correct binary
```

Meta commands (always call directly):
```bash
rtk gain              # savings analytics
rtk gain --history    # command history with savings
rtk discover          # analyze Claude Code history for missed opportunities
rtk proxy <cmd>       # raw command without filtering (debug)
```

⚠️ **Name collision**: `reachingforthejack/rtk` (Rust Type Kit) exists. If `rtk gain` fails, wrong binary installed.

## Notes

- All other commands auto-rewritten by the Claude Code hook — transparent, zero overhead
- Pair with caveman for compound token savings
