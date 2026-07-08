import { motion, useReducedMotion } from 'framer-motion';
import type { AccentColor } from '@/data/types';
import { accentHex } from '@/components/character/accentColors';

export function Sparkle({ accent = 'mustard', className = '' }: { accent?: AccentColor; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      animate={reduce ? undefined : { rotate: [0, 12, -8, 0], scale: [1, 1.12, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path
        d="M20 2 L23 16 Q24 19 27 20 L38 20 L27 24 Q24 25 23 28 L20 38 L17 28 Q16 25 13 24 L2 20 L13 20 Q16 19 17 16 Z"
        fill={accentHex[accent]}
        stroke="var(--color-ink)"
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
