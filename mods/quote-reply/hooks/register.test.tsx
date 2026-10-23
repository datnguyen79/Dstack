import { expect, mock, test } from 'claude-code/testing'
import type { TestBody } from 'claude-code/testing'
import type { On, UiSelection } from 'claude-code'

const setup = (on: On, fillDelay = 0) => {
  const clock = mock.clock(on)
  const world = {
    clock,
    selection: undefined as UiSelection | undefined,
    draft: { text: '', cursor: 0 },
    type(text: string) {
      const { text: t, cursor } = world.draft
      world.draft = { text: t.slice(0, cursor) + text + t.slice(cursor), cursor: cursor + text.length }
    },
  }
  on('session.start', (_, e) => ({ cwd: e.cwd }))
  on('ui.selection', () => ({ value: world.selection }))
  on('prompt.read', () => ({ value: { ...world.draft } }))
  on('prompt.fill', async (_, e) => {
    if (fillDelay > 0) {
      await clock.sleep(fillDelay)
    }
    if (e.mode === 'replace') {
      world.draft = { text: e.text, cursor: e.text.length }
    } else {
      world.type(e.text)
    }
    return { isFilled: true, ...world.draft }
  })
  return world
}

const start = ($: Parameters<TestBody>[0]) =>
  $.session.start({ cwd: '/', surface: 'terminal', isInteractive: true })

test('quotes A, then B after typing, with the highlight never clearing', async ($, on) => {
  const world = setup(on)
  const { clock } = world
  await start($)

  world.selection = { text: 'line A', requestId: 'r1' }
  await clock.advance(1000)
  expect(world.draft.text).toBe('> line A\n')

  world.type('reply A')
  world.selection = { text: 'line B', requestId: 'r1' }
  await clock.advance(1000)
  expect(world.draft.text).toBe('> line A\nreply A\n> line B\n')

  world.type('reply B')
  world.selection = { text: 'line C\nmore C', requestId: 'r1' }
  await clock.advance(1000)
  expect(world.draft.text).toBe('> line A\nreply A\n> line B\nreply B\n> line C\n> more C\n')
})

test('quotes B right after A when nothing is typed in between', async ($, on) => {
  const world = setup(on)
  const { clock } = world
  await start($)

  world.selection = { text: 'line A', requestId: 'r1' }
  await clock.advance(1000)
  await clock.advance(2000)
  world.selection = { text: 'line B', requestId: 'r1' }
  await clock.advance(1000)
  expect(world.draft.text).toBe('> line A\n> line B\n')
})

test('a highlight that stays put is inserted once', async ($, on) => {
  const world = setup(on)
  const { clock } = world
  await start($)

  world.selection = { text: 'line A', requestId: 'r1' }
  await clock.advance(10000)
  expect(world.draft.text).toBe('> line A\n')
})

test('the text shifting under the highlight right after an insert does not loop', async ($, on) => {
  const world = setup(on)
  const { clock } = world
  await start($)

  world.selection = { text: 'line A', requestId: 'r1' }
  await clock.advance(500)
  expect(world.draft.text).toBe('> line A\n')
  for (const shifted of ['shift 1', 'shift 2', 'shift 3']) {
    world.selection = { text: shifted, requestId: 'r1' }
    await clock.advance(500)
  }
  expect(world.draft.text).toBe('> line A\n')
})

test('a highlight outside one transcript row is ignored', async ($, on) => {
  const world = setup(on)
  const { clock } = world
  await start($)

  world.selection = { text: 'text in the prompt box' }
  await clock.advance(2000)
  expect(world.draft.text).toBe('')
})

test('the same text can be quoted again once the highlight has cleared', async ($, on) => {
  const world = setup(on)
  const { clock } = world
  await start($)

  world.selection = { text: 'line A', requestId: 'r1' }
  await clock.advance(1000)
  world.draft = { text: '', cursor: 0 }
  world.selection = undefined
  await clock.advance(2000)
  world.selection = { text: 'line A', requestId: 'r2' }
  await clock.advance(1000)
  expect(world.draft.text).toBe('> line A\n')
})

test('a slow fill does not let the next tick insert the same quote again', async ($, on) => {
  const world = setup(on, 600)
  const { clock } = world
  await start($)

  world.selection = { text: 'line A', requestId: 'r1' }
  await clock.advance(3000)
  expect(world.draft.text).toBe('> line A\n')
})

const BAND = {
  plugin: 'quote-reply',
  component: 'AbovePrompt',
  props: { hasSurvey: false, isWorking: false, maxRows: 10, bodyColumns: 80, scroll: { offset: 0, bodyRows: 10 }, view: {} },
} as const

test('the clear button counts quotes and removes the latest one per press', async ($, on) => {
  const world = setup(on)
  const { clock } = world
  // Stands for the engine's own band once the mod has nothing to show.
  on('ui.render', ($, e) => {
    const { Text } = $.ui.resolve(e)
    return <Text>engine</Text>
  })
  await start($)

  world.selection = { text: 'line A', requestId: 'r1' }
  await clock.advance(1000)
  world.type('reply A\n')
  world.selection = { text: 'line B', requestId: 'r1' }
  await clock.advance(1000)
  world.type('reply B')

  for (const surface of ['terminal', 'desktop'] as const) {
    const ui = await $.ui.mount({ ...BAND, surface })
    expect((await ui.find({ key: 'clear-quote' }))?.text).toBe('Clear quote (2)')
    await ui.unmount()
  }

  const ui = await $.ui.mount({ ...BAND, surface: 'terminal' })
  await ui.press({ key: 'clear-quote' })
  expect(world.draft.text).toBe('> line A\nreply A\nreply B')
  expect((await ui.find({ key: 'clear-quote' }))?.text).toBe('Clear quote (1)')

  await ui.press({ key: 'clear-quote' })
  expect(world.draft.text).toBe('reply A\nreply B')
  expect(await ui.find({ key: 'clear-quote' })).toBeUndefined()
  await ui.unmount()
})
