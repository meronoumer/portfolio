import { SketchUnderline } from '@/components/doodles';
import type { AccentColor } from '@/data/types';

export function SectionHeading({
  eyebrow,
  heading,
  accent = 'mustard',
}: {
  eyebrow: string;
  heading: string;
  accent?: AccentColor;
}) {
  return (
    <div className="mb-10 sm:mb-12">
      <p className="font-hand text-xl text-ink-soft">{eyebrow}</p>
      <h2 className="text-balance mt-1 inline-block text-3xl font-semibold text-ink sm:text-4xl">{heading}</h2>
      <SketchUnderline accent={accent} className="-mt-1 block" />
    </div>
  );
}
