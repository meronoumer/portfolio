import type { Experience } from './types';

export const experience: Experience[] = [
  {
    id: 'go-clarifi',
    organization: 'Go Clarifi',
    role: 'AI Infrastructure Engineering Intern',
    dates: { start: 'May 2026', end: 'Present' },
    summary:
      'Auditing an MCP-based AI insurance gateway for production readiness, closing reliability gaps before real underwriting workflows depend on it.',
    bullets: [
      'Audited a Model Context Protocol (MCP) AI gateway connecting LLM agents to a physics-based property & casualty underwriting engine.',
      'Identified reliability gaps and implemented token metering and structured error handling across MCP tool calls.',
      'Built mock execution paths and dependency validation so risky tools can be tested safely before production use.',
      'Verified workflow and API alignment across the MCP tool surface, including underwriting-scan and claims-simulation tools.',
    ],
    tools: ['Python', 'MCP', 'PostgreSQL', 'Docker', 'Claude Desktop'],
    illustration: 'inspecting-gateway',
    accent: 'sky',
  },
  {
    id: 'spartan-judicial',
    organization: 'Harris County Judiciary — Spartan Judicial',
    role: 'Lead Data Engineering Intern',
    dates: { start: 'May 2026', end: 'Present' },
    summary:
      'Leading a source-linked civic data pipeline turning messy public judicial and campaign data into audit-ready records.',
    bullets: [
      'Designed a layered (bronze/silver/gold) data pipeline transforming raw public filings into campaign-ready outputs.',
      'Built judicial candidate records, court backlog metrics, and campaign profiles with Pydantic-validated schemas.',
      'Prioritized audit-friendly source tracking so every downstream number traces back to its original document.',
      'Shipped a Streamlit dashboard surfacing campaign readiness and risk signals to non-technical stakeholders.',
    ],
    tools: ['Python', 'Pydantic', 'Streamlit', 'ETL'],
    illustration: 'civic-records',
    accent: 'mustard',
    links: [{ label: 'Repository', href: 'https://github.com/meronoumer/spartan-campaign-data-platform' }],
  },
  {
    id: 'chambers-capital',
    organization: 'Chambers Capital Ventures',
    role: 'AI Engineering Intern',
    dates: { start: '2025', end: '2025' },
    summary:
      'Built Operational Insights, an ML-powered workflow analytics tool that turns raw event logs into bottleneck and risk signals.',
    bullets: [
      'Analyzed 5,000+ historical and 2,000+ live operational workflow events to detect process bottlenecks.',
      'Engineered structured features from unstructured workflow logs to power bottleneck and risk detection.',
      'Shipped a Streamlit dashboard used to reduce manual review time on flagged workflows.',
    ],
    tools: ['Python', 'Streamlit', 'Data Engineering', 'ML'],
    illustration: 'workflow-bottleneck',
    accent: 'blush',
  },
  {
    id: 'break-through-tech',
    organization: 'Break Through Tech x Cornell Tech',
    role: 'AI & Machine Learning Fellow',
    dates: { start: '2025', end: '2026' },
    summary:
      'Selected as one of 1,000 fellows nationally for a year-long applied machine learning and AI program.',
    bullets: [
      'Completed applied coursework in AI workflows, LangGraph agent design, LLM APIs, and ML evaluation.',
      'Practiced reproducibility and structured debugging habits for applied ML projects.',
      'Earned the Machine Learning Foundations certificate from Cornell Tech.',
    ],
    tools: ['LangGraph', 'LLM APIs', 'ML Evaluation', 'Python'],
    illustration: 'agent-eval-checklist',
    accent: 'sage',
  },
  {
    id: 'conway-center',
    organization: 'Conway Innovation and Entrepreneurship Center',
    role: 'Conway Fellow & Software Developer',
    dates: { start: 'Jan 2026', end: 'May 2026' },
    summary:
      'Built Ubuntu Curricula, an offline-first platform for tracking community program delivery in low-connectivity environments.',
    bullets: [
      'Developed the platform with Next.js and Supabase, using local persistence and batched synchronization to preserve data consistency across intermittent connections.',
      'Designed validation workflows for attendance, engagement, and reporting data to improve downstream analysis reliability.',
    ],
    tools: ['Next.js', 'Supabase', 'TypeScript'],
    illustration: 'offline-sync',
    accent: 'sage',
    links: [{ label: 'Repository', href: 'https://github.com/meronoumer/ubuntu-curriculum' }],
  },
  {
    id: 'smith-dataviz-studio',
    organization: 'Smith Data Visualization Studio',
    role: 'Software Engineering Intern',
    dates: { start: '2025', end: '2025' },
    summary:
      'Built reusable interactive charting interfaces for exploring datasets without writing visualization code.',
    bullets: [
      'Built a drag-and-drop chart builder in React and TypeScript, backed by Vega-Lite.',
      'Implemented automatic data-type detection (quantitative, nominal, temporal) to drive encoding suggestions.',
      'Designed reusable chart interface components for interactive data visualization workflows.',
    ],
    tools: ['React', 'TypeScript', 'Vega-Lite', 'Vite'],
    illustration: 'charts-dashboard',
    accent: 'sky',
    links: [{ label: 'Repository', href: 'https://github.com/meronoumer/datavisualization' }],
  },
  {
    id: 'codepath-ai-engineering',
    organization: 'CodePath',
    role: 'AI Engineering Apprenticeship (Graduated with Honors)',
    dates: { start: 'Feb 2026', end: 'May 2026' },
    summary:
      'Applied coursework in production-oriented AI applications, backend integration, and deployable user-facing features.',
    bullets: [
      'Built AI-enabled projects using GitHub Copilot and Claude Code for implementation planning, debugging, and rapid iteration.',
      'Connected AI model behavior to real software systems through prompting, tool use, backend logic, and evaluation.',
    ],
    tools: ['Python', 'Backend Integration', 'Agentic Coding'],
    illustration: 'agent-eval-checklist',
    accent: 'mustard',
  },
  {
    id: 'wayfair-tech-early-leader',
    organization: 'Wayfair',
    role: 'Tech Early Leader',
    dates: { start: 'May 2026', end: 'May 2026' },
    summary:
      'Selected through a competitive process for a selective immersion program exploring technology, product, and business operations in e-commerce.',
    bullets: [
      'Engaged with senior leaders and cross-functional teams on how engineering, product, analytics, and operations support large-scale digital commerce.',
      'Placed 2nd in the final business case competition, presenting a team recommendation to a panel of Wayfair managers.',
    ],
    tools: [],
    illustration: 'teaching-mentoring',
    accent: 'blush',
  },
];
