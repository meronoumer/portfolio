import { CharacterPortrait } from '@/components/character';
import { Container } from '@/components/ui/Container';
import { LinkPill } from '@/components/ui/LinkPill';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tag } from '@/components/ui/Tag';
import { research } from '@/data/research';
import { accentBorder } from '@/lib/accent';
import { formatDateRange } from '@/lib/date';

export function Research() {
  return (
    <section id="research" aria-label="Research" className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading eyebrow="Research" heading="Benchmarking systems that don't behave" accent="sage" />
          <Reveal className="mx-auto w-full max-w-[200px] md:mx-0">
            <CharacterPortrait variant="research" alt="Meron at a whiteboard with benchmark curves" />
          </Reveal>
        </div>

        <div className="space-y-8">
          {research.map((item) => (
            <Reveal key={item.id}>
              <article
                className={`rounded-2xl border-2 border-ink/10 border-l-4 bg-paper p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[var(--shadow-card-hover)] sm:p-8 ${accentBorder[item.accent]}`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                  <p className="text-sm font-medium text-ink-faint">{formatDateRange(item.dates)}</p>
                </div>
                <p className="text-ink-soft">{item.organization}</p>
                <p className="mt-3 text-ink-soft">{item.summary}</p>

                <ul className="mt-3 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm text-ink-soft">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/30" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <Tag key={tool}>{tool}</Tag>
                  ))}
                </div>

                {item.links?.length ? (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {item.links.map((link) => (
                      <LinkPill key={link.href} link={link} />
                    ))}
                  </div>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
