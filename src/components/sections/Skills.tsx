import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tag } from '@/components/ui/Tag';
import { Sparkle } from '@/components/doodles';
import { skills } from '@/data/skills';

export function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="relative bg-paper-alt py-20 sm:py-28">
      <Container className="relative">
        <div className="flex items-start justify-between gap-6">
          <SectionHeading eyebrow="Skills" heading="Tools I reach for" accent="sky" />
          <Sparkle accent="sky" className="mt-2 hidden h-10 w-10 sm:block" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((group, index) => (
            <Reveal key={group.id} delay={Math.min(index * 0.05, 0.2)}>
              <div className="h-full rounded-2xl border-2 border-ink/10 bg-paper p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[var(--shadow-card-hover)]">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-faint">{group.label}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Tag key={skill}>{skill}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
