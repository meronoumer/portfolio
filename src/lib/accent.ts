import type { AccentColor } from '@/data/types';

/**
 * Tailwind can only detect complete literal class names, so accent-driven
 * styling must go through these lookup maps rather than template strings
 * like `bg-${accent}`.
 */
export const accentBg: Record<AccentColor, string> = {
  mustard: 'bg-mustard',
  sky: 'bg-sky',
  blush: 'bg-blush',
  sage: 'bg-sage',
};

export const accentBgSoft: Record<AccentColor, string> = {
  mustard: 'bg-mustard-soft',
  sky: 'bg-sky-soft',
  blush: 'bg-blush-soft',
  sage: 'bg-sage-soft',
};

export const accentBorder: Record<AccentColor, string> = {
  mustard: 'border-mustard',
  sky: 'border-sky',
  blush: 'border-blush',
  sage: 'border-sage',
};

export const accentText: Record<AccentColor, string> = {
  mustard: 'text-mustard',
  sky: 'text-sky',
  blush: 'text-blush',
  sage: 'text-sage',
};
