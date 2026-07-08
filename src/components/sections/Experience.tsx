import { Container } from '@/components/ui/Container';
import { LinkPill } from '@/components/ui/LinkPill';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tag } from '@/components/ui/Tag';
import { experience } from '@/data/experience';
import type { Experience as ExperienceItem } from '@/data/types';
import { accentBg, accentBorder } from '@/lib/accent';
import { formatDateRange } from '@/lib/date';

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <Reveal delay={Math.min(index * 0.05, 0.3)}>
      <article
        className={`relative rounded-2xl border-2 border-ink/10 border-l-4 bg-paper p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[var(--shadow-card-hover)] sm:p-8 ${accentBorder[item.accent]}`}
      >
        <span
          aria-hidden="true"
          className={`absolute -left-1.5 top-8 hidden h-3 w-3 rounded-full border-2 border-paper-alt sm:block ${accentBg[item.accent]}`}
        />
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-xl font-semibold text-ink">{item.role}</h3>
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

        {item.tools.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.tools.map((tool) => (
              <Tag key={tool}>{tool}</Tag>
            ))}
          </div>
        ) : null}

        {item.links?.length ? (
          <div className="mt-4 flex flex-wrap gap-4">
            {item.links.map((link) => (
              <LinkPill key={link.href} link={link} />
            ))}
          </div>
        ) : null}
      </article>
    </Reveal>
  );
}

export function Experience() {
  return (
    <section id="experience" aria-label="Experience" className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Experience" heading="Where I've been building" accent="blush" />
        <div className="relative space-y-8 sm:pl-6">
          <div aria-hidden="true" className="absolute left-[5px] top-2 bottom-2 hidden w-px border-l-2 border-dashed border-ink/15 sm:block" />
          {experience.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
