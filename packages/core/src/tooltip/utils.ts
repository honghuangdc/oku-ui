import type { PopperContentProps } from '../popper/index.ts'
import type { Point, Polygon } from '../shared/index.ts'

type Side = NonNullable<PopperContentProps['side']>

export function getExitSideFromRect(point: Point, rect: DOMRect): Side {
  const [x, y] = point
  const top = Math.abs(rect.top - y)
  const bottom = Math.abs(rect.bottom - y)
  const right = Math.abs(rect.right - x)
  const left = Math.abs(rect.left - x)

  switch (Math.min(top, bottom, right, left)) {
    case left:
      return 'left'
    case right:
      return 'right'
    case top:
      return 'top'
    case bottom:
      return 'bottom'
    default:
      throw new Error('unreachable')
  }
}

export function getPaddedExitPoints(exitPoint: Point, exitSide: Side, padding = 5): Polygon {
  const paddedExitPoints: Polygon = []
  const [x, y] = exitPoint

  switch (exitSide) {
    case 'top':
      paddedExitPoints.push(
        [x - padding, y + padding],
        [x + padding, y + padding],
      )
      break
    case 'bottom':
      paddedExitPoints.push(
        [x - padding, y - padding],
        [x + padding, y - padding],
      )
      break
    case 'left':
      paddedExitPoints.push(
        [x + padding, y - padding],
        [x + padding, y + padding],
      )
      break
    case 'right':
      paddedExitPoints.push(
        [x - padding, y - padding],
        [x - padding, y + padding],
      )
      break
  }

  return paddedExitPoints
}

export function getPointsFromRect(rect: DOMRect): Polygon {
  const { top, right, bottom, left } = rect

  return [
    [left, top],
    [right, top],
    [right, bottom],
    [left, bottom],
  ]
}

// Returns a new array of points representing the convex hull of the given set of points.
// https://www.nayuki.io/page/convex-hull-algorithm
export function getHull<P extends Point>(points: Readonly<Array<P>>): Array<P> {
  const newPoints: Array<P> = points.slice()

  newPoints.sort((a: Point, b: Point) => {
    const [a1, b1] = a
    const [a2, b2] = b

    if (a1 < a2)
      return -1
    else if (a1 > a2)
      return +1
    else if (b1 < b2)
      return -1
    else if (b1 > b2)
      return +1
    else return 0
  })

  return getHullPresorted(newPoints)
}

// Returns the convex hull, assuming that each points[i] <= points[i + 1]. Runs in O(n) time.
function getHullPresorted<P extends Point>(points: Readonly<Array<P>>): Array<P> {
  if (points.length <= 1)
    return points.slice()

  const upperHull: Array<P> = []

  for (let i = 0; i < points.length; i++) {
    const p = points[i]!
    const [pX, pY] = p
    while (upperHull.length >= 2) {
      const [qX, qY] = upperHull[upperHull.length - 1]!
      const [rX, rY] = upperHull[upperHull.length - 2]!
      if ((qX - rX) * (pY - rY) >= (qY - rY) * (pX - rX))
        upperHull.pop()
      else break
    }
    upperHull.push(p)
  }

  upperHull.pop()

  const lowerHull: Array<P> = []
  for (let i = points.length - 1; i >= 0; i--) {
    const p = points[i]!
    const [pX, pY] = p
    while (lowerHull.length >= 2) {
      const [qX, qY] = lowerHull[lowerHull.length - 1]!
      const [rX, rY] = lowerHull[lowerHull.length - 2]!
      if ((qX - rX) * (pY - rY) >= (qY - rY) * (pX - rX))
        lowerHull.pop()
      else break
    }
    lowerHull.push(p)
  }
  lowerHull.pop()

  if (
    upperHull.length === 1
    && lowerHull.length === 1
    && upperHull[0]?.[0] === lowerHull[0]?.[0]
    && upperHull[0]?.[1] === lowerHull[0]?.[1]
  ) {
    return upperHull
  }

  return upperHull.concat(lowerHull)
}
