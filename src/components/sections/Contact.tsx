import { CharacterPortrait } from '@/components/character';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { SketchUnderline, Sparkle } from '@/components/doodles';
import { contact, site, socialLinks } from '@/data/site';

export function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="py-20 sm:py-28">
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
        <Reveal>
          <p className="font-hand text-2xl text-ink-soft">{contact.eyebrow}</p>
          <h2 className="text-balance mt-1 inline-block text-3xl font-semibold text-ink sm:text-4xl">
            {contact.heading}
          </h2>
          <SketchUnderline accent="blush" className="-mt-1 block" />
          <p className="mt-4 max-w-md text-lg text-ink-soft">{contact.body}</p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper shadow-[var(--shadow-sketch)] transition hover:-translate-y-0.5 hover:shadow-none"
            >
              Email {site.email}
            </a>
          </div>

          <ul className="mt-5 flex flex-wrap gap-5">
            {socialLinks
              .filter((l) => l.label !== 'Email')
              .map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-sm">
          <Sparkle accent="sage" className="absolute -left-2 -top-4 h-8 w-8" />
          <CharacterPortrait variant="contact" alt={`${site.name} sending a paper airplane`} float />
        </Reveal>
      </Container>
    </section>
  );
}
