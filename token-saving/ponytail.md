# ponytail

**Category:** Token Saving  
**Type:** Claude Code skill  
**Source:** [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)

## What

Before writing any code, stops at the first rung of this ladder that holds:

```
1. Does this need to exist?   → no: skip it (YAGNI)
2. Stdlib does it?            → use it
3. Native platform feature?   → use it
4. Installed dependency?      → use it
5. One line?                  → one line
6. Only then: the minimum that works
```

Never cuts validation, error handling, security, or accessibility. Code ends up small because it's necessary, not golfed.

## Why

Benchmark vs no-skill baseline (agentic, Haiku 4.5, n=4, FastAPI + React repo):

| | LOC | tokens | cost | time | safe |
|---|--:|--:|--:|--:|--:|
| **ponytail** | **-54%** | **-22%** | **-20%** | **-27%** | **100%** |
| caveman (prose control) | -20% | +7% | +3% | +2% | 100% |

Caveman trims prose verbosity. Ponytail trims code size. Code size is what moves cost and time; prose trimming barely does.

## Setup

```
/plugin marketplace add DietrichGebert/ponytail
/plugin install ponytail@ponytail
```

Desktop app (no `/plugin` command): Customize → + by personal plugins → Create plugin → Add from repository → enter repo URL.

Optional default level (env var or config):
```bash
export PONYTAIL_DEFAULT_MODE=full   # lite | full | ultra | off
```

## Commands

| Command | What |
|---------|------|
| `/ponytail [lite\|full\|ultra\|off]` | Set level or check current |
| `/ponytail-review` | Review current diff for over-engineering |
| `/ponytail-audit` | Audit whole repo for over-engineering |
| `/ponytail-debt` | Harvest deferred `ponytail:` shortcuts into a ledger |
| `/ponytail-gain` | Show measured impact scoreboard |

## Notes

- Default level: `full`
- Active every session once installed — no per-session activation needed
- Works with Claude Code, Codex, OpenCode, Gemini CLI, Copilot CLI
