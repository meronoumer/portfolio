import type { LinkRef } from './types';

export const site = {
  name: 'Meron Oumer',
  pronouns: 'She/Her',
  location: 'Greater Boston, MA',
  role: 'CS + Applied Mathematics @ Smith College · Class of 2028',
  email: 'moumer@smith.edu',
} as const;

export const socialLinks: LinkRef[] = [
  { label: 'GitHub', href: 'https://github.com/meronoumer' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/meronoumer' },
  { label: 'Email', href: 'mailto:moumer@smith.edu' },
];

export const navLinks: LinkRef[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Projects', href: '#projects' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: "Hi, I'm Meron",
  headline: 'Building reliable AI systems, ML infrastructure, and backend platforms.',
  subhead:
    'CS + Applied Math student at Smith College focused on AI agents, ML systems, backend/data infrastructure, and the reliability and evaluation work that makes them trustworthy.',
  targetRoles: [
    'Software Engineering',
    'AI/ML Engineering',
    'Data Engineering',
    'Backend Engineering',
    'ML Systems',
    'Platform/Infrastructure',
  ],
  targetNote: 'Seeking Summer 2027 internships',
  primaryCta: { label: 'View Projects', href: '#projects' },
  secondaryCta: { label: 'Get in Touch', href: '#contact' },
};

export const about = {
  eyebrow: 'About',
  heading: 'A little about how I work',
  paragraphs: [
    "I'm a Computer Science + Applied Mathematics student at Smith College, building software where correctness and reliability actually matter — AI agents, ML systems, backend services, and the data infrastructure underneath them.",
    "I care about the unglamorous parts that make systems trustworthy: evaluation, observability, error handling, and the pipelines that keep data honest. I'm happiest tracing down why something is unreliable and making it less so.",
  ],
  currentlyBuilding: {
    heading: 'Recently, I’ve built',
    items: [
      'HPC benchmarking infrastructure in Python/C++ for Bayesian optimization and hyperparameter tuning research — first-author poster accepted to CCSCNE 2026.',
      'Operational Insights, an ML-powered workflow analytics system that detects bottlenecks across 5,000+ operational events and surfaces risk through a Streamlit dashboard.',
      'Ubuntu Curricula, an offline-first Next.js + Supabase platform for program tracking in low-connectivity environments, with local persistence, batched sync, and validation workflows.',
      'A biomedical ML pipeline for heart sound classification using Librosa/openSMILE and scikit-learn, with a clinician-facing Streamlit prototype.',
      'AI engineering projects using GitHub Copilot and Claude Code for agentic, backend-integrated, user-facing features.',
    ],
  },
  notes: ['curious', 'reliability-minded', 'builds useful systems'],
};

export const contact = {
  eyebrow: 'Contact',
  heading: "Let's talk",
  body: "I'm looking for Summer 2027 internships in software engineering, AI/ML engineering, data engineering, backend engineering, ML systems, or platform/infrastructure. If that overlaps with what you're building, I'd love to hear from you.",
};
