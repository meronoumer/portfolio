/**
 * Shared content types for all portfolio data files.
 * Keeping these separate from the components lets content
 * be edited without touching any rendering code.
 */

/** Identifies which recurring-character pose illustrates a section or item. */
export type CharacterPose =
  | 'waving'
  | 'laptop-tea'
  | 'timeline-pins'
  | 'inspecting-gateway'
  | 'civic-records'
  | 'whiteboard-benchmarks'
  | 'charts-dashboard'
  | 'offline-sync'
  | 'workflow-bottleneck'
  | 'agent-eval-checklist'
  | 'scrapbook-cards'
  | 'teaching-mentoring'
  | 'tool-stickers'
  | 'diploma-notebook'
  | 'paper-airplane';

export type AccentColor = 'mustard' | 'sky' | 'blush' | 'sage';

export interface DateRange {
  start: string;
  end: string | 'Present';
}

export interface LinkRef {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  organization: string;
  role: string;
  dates: DateRange;
  location?: string;
  summary: string;
  bullets: string[];
  tools: string[];
  illustration: CharacterPose;
  accent: AccentColor;
  links?: LinkRef[];
}

export interface ResearchItem {
  id: string;
  title: string;
  organization: string;
  dates: DateRange;
  summary: string;
  bullets: string[];
  tools: string[];
  illustration: CharacterPose;
  accent: AccentColor;
  links?: LinkRef[];
}

export type ProjectStatus = 'shipped' | 'in-progress' | 'planned';

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  summary: string;
  bullets: string[];
  tools: string[];
  illustration: CharacterPose;
  accent: AccentColor;
  links?: LinkRef[];
}

export interface LeadershipItem {
  id: string;
  organization: string;
  role: string;
  dates?: DateRange;
  summary: string;
  illustration: CharacterPose;
  accent: AccentColor;
}

export interface EducationItem {
  id: string;
  institution: string;
  credential: string;
  dates: DateRange;
  details?: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issued: string;
  skills?: string[];
  credentialUrl?: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  skills: string[];
}
