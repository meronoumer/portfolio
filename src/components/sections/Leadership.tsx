import { CharacterPortrait } from '@/components/character';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { leadership } from '@/data/leadership';
import { accentBorder } from '@/lib/accent';
import { formatDateRange } from '@/lib/date';

export function Leadership() {
  return (
    <section id="leadership" aria-label="Leadership" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading eyebrow="Leadership" heading="Mentoring and organizing on campus" accent="sage" />
          <Reveal className="mx-auto w-full max-w-[200px] md:mx-0">
            <CharacterPortrait variant="leadership" alt="Meron mentoring a group" />
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {leadership.map((item, index) => (
            <Reveal key={item.id} delay={Math.min(index * 0.04, 0.24)}>
              <article className={`h-full rounded-2xl border-2 border-ink/10 border-l-4 bg-paper p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[var(--shadow-card-hover)] ${accentBorder[item.accent]}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-ink">{item.role}</h3>
                  {item.dates ? <p className="text-sm font-medium text-ink-faint">{formatDateRange(item.dates)}</p> : null}
                </div>
                <p className="text-ink-soft">{item.organization}</p>
                <p className="mt-2 text-sm text-ink-soft">{item.summary}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
