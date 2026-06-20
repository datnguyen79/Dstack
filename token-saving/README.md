# Token Saving

> Cut Claude token usage 60–90% on routine dev operations.

Two-layer approach: write less code (ponytail), filter noise from *command output* (rtk).

## Tools

| Tool | Saves tokens by... |
|------|-------------------|
| [ponytail](./ponytail.md) | Making Claude write only necessary code — YAGNI ladder before every write |
| [rtk](./rtk.md) | Filtering verbose CLI output before it enters the context window |

## Combined Impact

ponytail cuts code size (LOC -54%, cost -20%, time -27%); rtk cuts what Claude reads from commands. On heavy git/build workflows, combined savings are substantial.

## Removed

`caveman` — terse prose responses, but benchmarks show it *increases* tokens/cost/time vs baseline (+7%, +3%, +2%). Replaced by ponytail which cuts all metrics.
