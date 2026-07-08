import { motion, useReducedMotion } from 'framer-motion';

/** A short curved hand-drawn connector arrow, used to link floating elements. */
export function SketchArrow({
  className = '',
  d = 'M4 40 Q30 10 60 6',
  flip = false,
  delay = 0,
}: {
  className?: string;
  d?: string;
  flip?: boolean;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <svg
      viewBox="0 0 64 44"
      className={className}
      aria-hidden="true"
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    >
      <motion.path
        d={d}
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeDasharray="2 0.1"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.55 }}
        viewport={{ once: true }}
        transition={reduce ? { duration: 0 } : { duration: 0.8, delay, ease: 'easeInOut' }}
      />
      <path d="M56 2 L61 7 L54 10 Z" fill="var(--color-ink)" opacity={0.55} />
    </svg>
  );
}
