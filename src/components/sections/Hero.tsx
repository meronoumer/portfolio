import { motion } from 'framer-motion';
import { CharacterPortrait } from '@/components/character';
import { Container } from '@/components/ui/Container';
import { FloatingLabelCard, SketchArrow, Sparkle } from '@/components/doodles';
import { hero, site } from '@/data/site';

const floatingLabels: { label: string; accent: 'mustard' | 'sky' | 'blush' | 'sage'; className: string; rotate: number; delay: number }[] = [
  { label: 'AI systems', accent: 'sky', className: 'left-1 -top-5 sm:-left-8', rotate: -6, delay: 0.1 },
  { label: 'ML infrastructure', accent: 'blush', className: 'right-1 top-8 sm:-right-10', rotate: 5, delay: 0.25 },
  { label: 'backend platforms', accent: 'sage', className: 'left-1 top-[13rem] sm:-left-14', rotate: 4, delay: 0.4 },
  { label: 'reliability', accent: 'mustard', className: 'right-1 top-[21rem] sm:-right-12', rotate: -4, delay: 0.55 },
  { label: 'data pipelines', accent: 'sky', className: 'left-6 -bottom-5 sm:-left-6', rotate: -3, delay: 0.7 },
];

export function Hero() {
  return (
    <section id="hero" aria-label="Introduction" className="relative overflow-hidden pt-14 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-dot-grid" aria-hidden="true" />

      <Container className="relative grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="font-hand text-2xl text-ink-soft">{hero.eyebrow}</p>
          <h1 className="text-balance mt-2 text-4xl font-bold leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
            {hero.headline}
          </h1>
          <p className="mt-5 max-w-lg text-lg text-ink-soft">{hero.subhead}</p>

          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-faint">{hero.targetNote}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {hero.targetRoles.map((role) => (
                <span
                  key={role}
                  className="rounded-full border-2 border-ink bg-mustard-soft/60 px-3 py-1 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:bg-mustard-soft"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={hero.primaryCta.href}
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper shadow-[var(--shadow-sketch)] transition hover:-translate-y-0.5 hover:shadow-none"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="rounded-full border-2 border-ink px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-ink hover:text-paper"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <p className="mt-6 text-sm text-ink-faint">
            {site.role} · {site.location}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mustard-soft/50 blur-3xl"
          />

          <Sparkle accent="blush" className="absolute -right-2 -top-6 z-10 h-8 w-8 sm:h-10 sm:w-10" />
          <Sparkle accent="sky" className="absolute -left-4 bottom-10 z-10 h-6 w-6" />

          <SketchArrow className="absolute -left-10 top-16 z-10 hidden h-11 w-16 -scale-x-100 sm:block" delay={0.3} />
          <SketchArrow className="absolute -right-8 bottom-24 z-10 hidden h-11 w-16 sm:block" delay={0.5} />

          {floatingLabels.map((item) => (
            <FloatingLabelCard
              key={item.label}
              label={item.label}
              accent={item.accent}
              className={`z-10 ${item.className}`}
              rotate={item.rotate}
              delay={item.delay}
            />
          ))}

          <CharacterPortrait
            variant="hero"
            alt={`${site.name} waving hello`}
            float
            className="relative z-0 mx-auto max-w-sm rounded-[2rem] border-2 border-ink/10 bg-paper"
          />
        </motion.div>
      </Container>
    </section>
  );
}
