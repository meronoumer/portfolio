import { motion, useReducedMotion } from 'framer-motion';
import type { AccentColor } from '@/data/types';
import { accentHex } from '@/components/character/accentColors';

export function FloatingLabelCard({
  label,
  accent = 'mustard',
  className = '',
  rotate = -4,
  delay = 0,
}: {
  label: string;
  accent?: AccentColor;
  className?: string;
  rotate?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{ rotate }}
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay }}
        className="flex items-center gap-2 rounded-xl border-2 border-ink bg-paper px-3 py-2 text-sm font-semibold text-ink shadow-[var(--shadow-card)]"
      >
        <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: accentHex[accent] }} />
        {label}
      </motion.div>
    </motion.div>
  );
}
