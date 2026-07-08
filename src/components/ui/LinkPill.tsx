import { FiArrowUpRight } from 'react-icons/fi';
import type { LinkRef } from '@/data/types';

export function LinkPill({ link }: { link: LinkRef }) {
  return (
    <a
      href={link.href}
      target={link.href.startsWith('http') ? '_blank' : undefined}
      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
      className="inline-flex items-center gap-1 text-sm font-medium text-ink underline decoration-ink/30 underline-offset-4 transition hover:decoration-ink"
    >
      {link.label}
      <FiArrowUpRight aria-hidden="true" />
    </a>
  );
}
