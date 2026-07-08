import { motion, useReducedMotion } from 'framer-motion';
import type { AccentColor } from '@/data/types';
import { accentHex } from '@/components/character/accentColors';

/** A hand-drawn squiggle that draws itself in under a heading when scrolled into view. */
export function SketchUnderline({
  accent = 'mustard',
  className = '',
  width = 180,
}: {
  accent?: AccentColor;
  className?: string;
  width?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 180 14" width={width} height={14} className={className} aria-hidden="true">
      <motion.path
        d="M2 8 Q25 1 46 8 T90 7 T134 8 T178 6"
        fill="none"
        stroke={accentHex[accent]}
        strokeWidth={5}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={reduce ? { duration: 0 } : { duration: 0.7, ease: 'easeInOut' }}
      />
    </svg>
  );
}
