import type { Booking } from '../models/booking'

export function countSeats(items: Booking[]): number {
  let total = 0
  for (const item of items) total += item.seats
  return total
}
