# quote-reply

> Highlight part of Claude's reply with the mouse and it drops into your prompt as a `> quote`.

Reply to several points in one message: highlight line A, type your answer, highlight line B, type, send.

```
> line A from Claude's reply
my answer to A
> line B
my answer to B
```

A **[ Clear quote (N) ]** button above the prompt shows how many quotes your draft holds; each click removes the latest one.

## Install

At the Claude Code prompt:

```
/plugin install quote-reply --marketplace datnguyen79/Dstack
```

Answer `y` to add the marketplace, then press Enter to pick the user scope. The mod is active right away, no restart.

From a shell instead:

```bash
claude plugin install quote-reply --marketplace datnguyen79/Dstack
```

### For Claude agents installing this for a user

1. Run `claude plugin install quote-reply --marketplace datnguyen79/Dstack` (Claude Code 2.1.309 or later).
2. Confirm with `claude plugin list` that `quote-reply` is listed and enabled.
3. Tell the user it only works in Claude Code's fullscreen layout, where mouse selection is available.

## Requirements

- Claude Code 2.1.309+ (built and tested on it; earlier versions may lack the mod API).
- Fullscreen layout. Outside it Claude Code reports no selection and the mod does nothing.

## Behaviour

- Quotes only highlights inside a single message. Highlights over the prompt box, status line or a pane are ignored.
- Inserts once the highlight stops changing (~0.25–0.5 s after you let go of the mouse).
- Every highlight in a message is inserted, including ones you only meant to copy — delete it or use **Clear quote**.
- A second highlight within 1.5 s of the previous quote, with nothing typed in between, is skipped (guard against the screen reflowing under the highlight).
- After **Clear quote**, the cursor moves to the end of the draft.

## Develop

```bash
claude plugin validate mods/quote-reply
claude plugin test mods/quote-reply
claude --plugin-dir mods/quote-reply   # run a session with your local copy
```
