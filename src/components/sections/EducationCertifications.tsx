import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tag } from '@/components/ui/Tag';
import { PaperScrap } from '@/components/doodles';
import { certifications } from '@/data/certifications';
import { education } from '@/data/education';
import { formatDateRange } from '@/lib/date';

export function EducationCertifications() {
  return (
    <section id="education" aria-label="Education and certifications" className="relative py-20 sm:py-28">
      <Container className="relative max-w-3xl">
        <PaperScrap accent="mustard" className="absolute -right-2 top-0 hidden h-14 w-14 md:block" rotate={10} />
        <SectionHeading eyebrow="Education" heading="Education & certifications" accent="mustard" />

        <div className="space-y-5">
          {education.map((item) => (
            <Reveal key={item.id}>
              <div className="rounded-2xl border-2 border-ink/10 bg-paper p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[var(--shadow-card-hover)]">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-semibold text-ink">{item.institution}</h3>
                  <p className="text-sm font-medium text-ink-faint">{formatDateRange(item.dates)}</p>
                </div>
                <p className="text-ink-soft">{item.credential}</p>
                {item.details?.length ? (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.details.map((d) => (
                      <Tag key={d}>{d}</Tag>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

        <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-ink-faint">Certifications</h3>
        <div className="mt-3 space-y-3">
          {certifications.map((cert) => (
            <Reveal key={cert.id}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 rounded-xl border border-ink/10 bg-paper-dim/60 px-4 py-3">
                <p className="font-medium text-ink">
                  {cert.name} <span className="font-normal text-ink-soft">— {cert.issuer}</span>
                </p>
                <p className="text-sm text-ink-faint">{cert.issued}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
