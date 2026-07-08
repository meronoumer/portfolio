import type { AccentColor } from '@/data/types';
import { accentSoftHex } from '@/components/character/accentColors';

/** A small rotated scrap of paper/sticky-note, purely decorative. */
export function PaperScrap({
  accent = 'mustard',
  rotate = -6,
  className = '',
}: {
  accent?: AccentColor;
  rotate?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={className}
      aria-hidden="true"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M6 4 H54 V50 L44 56 H6 Z"
        fill={accentSoftHex[accent]}
        stroke="var(--color-ink)"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <path d="M44 56 V50 H54 Z" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth={2} strokeLinejoin="round" />
    </svg>
  );
}
