export type Quotes = string[]

declare module 'claude-code' {
  interface PluginState {
    'quote-reply': { quotes: Quotes }
  }
}
