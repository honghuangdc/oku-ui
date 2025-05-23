import type { Direction } from '../direction/index.ts'

export type Orientation = 'horizontal' | 'vertical'

export const ENTRY_FOCUS = 'rovingFocusGroup.onEntryFocus'
export const EVENT_OPTIONS: { bubbles: boolean, cancelable: boolean } = { bubbles: false, cancelable: true }

export const MAP_KEY_TO_FOCUS_INTENT: Record<string, FocusIntent> = {
  ArrowLeft: 'prev',
  ArrowUp: 'prev',
  ArrowRight: 'next',
  ArrowDown: 'next',
  PageUp: 'first',
  Home: 'first',
  PageDown: 'last',
  End: 'last',
}

export function getDirectionAwareKey(key: string, dir?: Direction): string {
  if (dir !== 'rtl')
    return key

  return key === 'ArrowLeft' ? 'ArrowRight' : key === 'ArrowRight' ? 'ArrowLeft' : key
}

type FocusIntent = 'first' | 'last' | 'prev' | 'next'

export function getFocusIntent(event: KeyboardEvent, orientation?: Orientation, dir?: Direction): FocusIntent | undefined {
  const key = getDirectionAwareKey(event.key, dir)
  if (orientation === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(key))
    return undefined

  if (orientation === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(key))
    return undefined

  return MAP_KEY_TO_FOCUS_INTENT[key]
}
