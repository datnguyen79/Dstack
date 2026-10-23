import { atom, read, update } from 'claude-code'
import type { Register } from 'claude-code'

// Each quote block the mod inserted and the draft still holds, oldest first.
const quotes = atom({ plugin: 'quote-reply', key: 'quotes' } as const, [])

const quote = (text: string) =>
  `${text.trimEnd().split('\n').map(line => `> ${line}`).join('\n')}\n`

export const register: Register = on => {
  let last: string | null = null
  let inserted: string | null = null
  let insertedAt = 0
  let draftAfterInsert: string | null = null
  // clock.every does not await its callback, so a slow tick would overlap the next and insert twice.
  let isBusy = false

  on('session.start', async ($, e, next) => {
    $.clock.every(250, async () => {
      if (isBusy) {
        return
      }
      isBusy = true
      try {
        const selected = await $.ui.selection().catch(() => undefined)
        // requestId is set only for a highlight within one transcript row, never the prompt box or a pane.
        const text = selected?.requestId && selected.text.trim() ? selected.text : null
        // No event marks a mouse release, so treat a selection unchanged across two polls as released.
        const isSettled = text !== null && text === last
        last = text
        if (text === null) {
          inserted = null
        }
        // The selection is sticky until the next highlight, so a new quote shows up as a changed text.
        if (!isSettled || text === inserted) {
          return
        }

        const now = await $.clock.now()
        const draft = await $.prompt.read()
        // A change right after an insert, with the draft untouched, is the screen reflowing under the highlight.
        if (draft.text === draftAfterInsert && now - insertedAt < 1500) {
          inserted = text
          insertedAt = now
          return
        }

        const atLineStart = draft.cursor === 0 || draft.text[draft.cursor - 1] === '\n'
        const block = quote(text)
        const filled = await $.prompt.fill({
          text: `${atLineStart ? '' : '\n'}${block}`,
          mode: 'insert',
        })
        if (filled.isFilled) {
          inserted = text
          insertedAt = now
          draftAfterInsert = filled.text
          await update($, quotes, list => [...list, block])
        }
      } finally {
        isBusy = false
      }
    })

    return next(e)
  })

  // Forget quotes the person deleted or sent, so the count follows the draft.
  on('prompt.edit', async ($, e, next) => {
    const box = await next(e)
    await update($, quotes, list => list.filter(block => box.text.includes(block)))
    return box
  })

  on('prompt.change', async ($, e, next) => {
    await update($, quotes, list => list.filter(block => e.text.includes(block)))
    return next(e)
  })

  on('ui.render', { component: 'AbovePrompt' }, async ($, e, next) => {
    const list = await read($, quotes)
    if (e.props.hasSurvey || list.length === 0) {
      return next(e)
    }

    const { Button } = $.ui.resolve(e)

    return (
      <Button
        key="clear-quote"
        label={`Clear quote (${list.length})`}
        onPress={async () => {
          const latest = list[list.length - 1]
          const { text } = await $.prompt.read()
          const at = latest === undefined ? -1 : text.lastIndexOf(latest)
          if (latest === undefined || at === -1) {
            return
          }
          const filled = await $.prompt.fill({
            text: text.slice(0, at) + text.slice(at + latest.length),
            mode: 'replace',
          })
          if (filled.isFilled) {
            await update($, quotes, current => current.filter(block => block !== latest))
          }
        }}
      />
    )
  })
}
