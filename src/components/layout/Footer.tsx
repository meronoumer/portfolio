import { socialLinks, site } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-ink/10 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 text-sm text-ink-soft sm:flex-row sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <ul className="flex gap-5">
          {socialLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-ink" target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
