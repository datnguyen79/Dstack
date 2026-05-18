# karpathy-guidelines

**Category:** Coding Behavior  
**Type:** Claude Code skill  
**Source:** [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills)

## What

Behavioral guidelines that reduce common LLM coding mistakes, derived from [Andrej Karpathy's observations](https://x.com/karpathy/status/2015883857489522876). Four principles:

1. **Think Before Coding** — surface assumptions, present tradeoffs, stop when confused
2. **Simplicity First** — minimum code that solves the problem, nothing speculative
3. **Surgical Changes** — only touch what the task requires, no orthogonal edits
4. **Goal-Driven Execution** — define verifiable success criteria before implementing

## Why

Claude defaults to: silent assumptions, overengineered abstractions, touching code it shouldn't, no pushback. This skill directly counteracts all four failure modes.

## Setup

```bash
# Install via plugin marketplace
/plugin marketplace add forrestchang/andrej-karpathy-skills
/plugin install andrej-karpathy-skills@karpathy-skills
/reload-plugins
```

Then in any Claude session:
```
/karpathy-guidelines
```
