import { CharacterPortrait } from '@/components/character';
import { Container } from '@/components/ui/Container';
import { LinkPill } from '@/components/ui/LinkPill';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Tag } from '@/components/ui/Tag';
import { projects } from '@/data/projects';
import type { Project, ProjectStatus } from '@/data/types';
import { accentBorder } from '@/lib/accent';

const statusLabel: Record<ProjectStatus, string> = {
  shipped: 'Shipped',
  'in-progress': 'In progress',
  planned: 'Planned',
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={Math.min(index * 0.04, 0.3)} className="h-full">
      <article
        className={`flex h-full flex-col rounded-2xl border-2 border-ink/10 border-l-4 bg-paper p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:rotate-[0.3deg] hover:border-ink/20 hover:shadow-[var(--shadow-card-hover)] ${accentBorder[project.accent]}`}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
          <span className="shrink-0 rounded-full bg-paper-dim px-2.5 py-1 text-xs font-medium text-ink-faint">
            {statusLabel[project.status]}
          </span>
        </div>

        <p className="mt-2 text-sm text-ink-soft">{project.summary}</p>

        <ul className="mt-3 space-y-1.5">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2 text-sm text-ink-soft">
              <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink/30" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <Tag key={tool}>{tool}</Tag>
          ))}
        </div>

        {project.links?.length ? (
          <div className="mt-4 flex flex-wrap gap-4 pt-1">
            {project.links.map((link) => (
              <LinkPill key={link.href} link={link} />
            ))}
          </div>
        ) : null}
      </article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="bg-paper-alt py-20 sm:py-28">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <SectionHeading eyebrow="Projects" heading="Things I've built on the side" accent="mustard" />
          <Reveal className="mx-auto w-full max-w-[200px] md:mx-0">
            <CharacterPortrait variant="projects" alt="Meron laying out project cards like a scrapbook" />
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
