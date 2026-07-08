import { motion, useReducedMotion } from 'framer-motion';

export type CharacterVariant = 'hero' | 'research' | 'projects' | 'leadership' | 'contact';

/**
 * Final hand-drawn character portraits, dropped in by the designer at
 * src/assets/illustrations/<variant>-character.png. Using import.meta.glob
 * (rather than a static import per file) means a missing asset degrades to
 * a labeled placeholder instead of breaking the whole build.
 */
const illustrations = import.meta.glob<{ default: string }>('/src/assets/illustrations/*.png', {
  eager: true,
});

function resolveSrc(variant: CharacterVariant): string | undefined {
  return illustrations[`/src/assets/illustrations/${variant}-character.png`]?.default;
}

export function CharacterPortrait({
  variant,
  alt,
  className = '',
  float = false,
}: {
  variant: CharacterVariant;
  alt: string;
  className?: string;
  float?: boolean;
}) {
  const reduce = useReducedMotion();
  const src = resolveSrc(variant);

  if (!src) {
    return (
      <div
        className={`flex aspect-[4/5] w-full items-center justify-center rounded-3xl border-2 border-dashed border-ink/20 bg-paper-dim px-4 text-center text-sm text-ink-faint ${className}`}
      >
        Add src/assets/illustrations/{variant}-character.png
      </div>
    );
  }

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`w-full drop-shadow-[0_20px_32px_rgba(23,22,26,0.14)] ${className}`}
      animate={float && !reduce ? { y: [0, -10, 0] } : undefined}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}
