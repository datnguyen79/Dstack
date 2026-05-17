# Token Saving

> Cut Claude token usage 60–90% on routine dev operations.

Two-layer approach: strip filler from *responses* (caveman), filter noise from *command output* (rtk).

## Tools

| Tool | Saves tokens by... |
|------|-------------------|
| [caveman](./caveman.md) | Removing articles, pleasantries, hedging from Claude replies |
| [rtk](./rtk.md) | Filtering verbose CLI output before it enters the context window |

## Combined Impact

Running both = compound savings. Caveman cuts response size; rtk cuts what Claude reads. On heavy git/build workflows, combined savings hit 80%+.
