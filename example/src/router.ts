import { makeRouter, Route, RouteWithParams } from './util/router'

// Re-export for convenience, so we don't have to also import the abstract router util
export { Route, RouteWithParams }


export type BlueParams = { id: string }
export type GreenParams = { id: string, popup?: string }

export const index = Route('')
export const blue = Route<BlueParams>('blue/:id')
export const green = Route<GreenParams>('blue/:id/green?popup')
export const red = Route<BlueParams>('blue/:id/red')

const router = makeRouter([
  index,
  blue,
  green,
  red
], { urlSync: 'hash' })

export const current = router.currentRoute
export const transitionTo = router.transitionTo
export const replaceParams = router.instance.replaceParams
export const link = router.instance.link
