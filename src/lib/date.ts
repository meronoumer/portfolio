import type { DateRange } from '@/data/types';

export function formatDateRange({ start, end }: DateRange): string {
  if (start === end) return start;
  return `${start} – ${end}`;
}
