import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PaperScrap, Sparkle } from '@/components/doodles';
import { about } from '@/data/site';

export function About() {
  return (
    <section id="about" aria-label="About me" className="relative bg-paper-alt py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow={about.eyebrow} heading={about.heading} accent="sky" />

        <div className="grid gap-10 md:grid-cols-[0.8fr_1.3fr] md:items-start md:gap-12">
          <Reveal className="relative mx-auto w-full max-w-xs md:mx-0">
            <div className="relative rounded-3xl border-2 border-ink/10 bg-paper p-6 shadow-[var(--shadow-card)]">
              <Sparkle accent="sky" className="absolute -right-3 -top-4 h-9 w-9" />
              <PaperScrap accent="blush" className="absolute -bottom-4 -left-3 h-10 w-10" rotate={-10} />
              <p className="font-hand text-xl text-ink">what drives me</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {about.notes.map((note) => (
                  <li
                    key={note}
                    className="rounded-full border-2 border-ink bg-sky-soft/50 px-3 py-1 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:bg-sky-soft"
                  >
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4 text-lg text-ink-soft">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <h3 className="mt-8 text-xl font-semibold text-ink">{about.currentlyBuilding.heading}</h3>
            <ul className="mt-3 space-y-3">
              {about.currentlyBuilding.items.map((item) => (
                <li key={item} className="flex gap-3 text-ink-soft">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mustard" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
