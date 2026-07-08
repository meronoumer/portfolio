import type { EducationItem } from './types';

export const education: EducationItem[] = [
  {
    id: 'smith-college',
    institution: 'Smith College',
    credential: 'B.A. in Computer Science and Applied Mathematics',
    dates: { start: 'Aug 2024', end: 'May 2028' },
    details: ['Smithies in Computer Science', 'Pan-African Student Association', 'AI/ML Development Club'],
  },
  {
    id: 'codepath-ai-engineering',
    institution: 'CodePath',
    credential: 'AI Engineering Apprenticeship — Graduated with Honors',
    dates: { start: 'Feb 2026', end: 'May 2026' },
  },
  {
    id: 'codepath-foundations',
    institution: 'CodePath',
    credential: 'Technical Foundations Program',
    dates: { start: 'May 2025', end: 'Aug 2025' },
    details: ['Python', 'Data Structures'],
  },
];
