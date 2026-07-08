import type { Project } from './types';

export const projects: Project[] = [
  {
    id: 'taskpilot',
    name: 'TaskPilot',
    status: 'in-progress',
    summary: 'An AI workflow automation system for defining, running, and tracking multi-step agent tasks.',
    bullets: [
      'FastAPI backend orchestrating LangGraph agent workflows with Postgres-backed state.',
      'Dockerized for reproducible local development and deployment.',
    ],
    tools: ['Python', 'TypeScript', 'FastAPI', 'LangGraph', 'PostgreSQL', 'Docker'],
    illustration: 'scrapbook-cards',
    accent: 'mustard',
  },
  {
    id: 'tracegraph-studio',
    name: 'TraceGraph Studio',
    status: 'planned',
    summary:
      'An AI agent trace reliability platform for turning raw agent execution traces into failure taxonomies and reliability metrics.',
    bullets: [
      'Planned: event ingestion pipeline for agent execution traces.',
      'Planned: graph analytics over trace data to surface common failure paths.',
      'Planned: dashboard visualizing failure taxonomy and reliability metrics over time.',
    ],
    tools: ['Graph Analytics', 'Event Ingestion', 'Reliability Metrics'],
    illustration: 'scrapbook-cards',
    accent: 'sky',
  },
  {
    id: 'heart-disease-diagnostic-aid',
    name: 'Heart Disease Diagnostic Aid',
    status: 'shipped',
    summary:
      'A multi-label ML pipeline classifying cardiovascular disease from phonocardiogram (heart sound) recordings.',
    bullets: [
      'Extracted audio features from phonocardiogram signals using Librosa and openSMILE.',
      'Trained multi-label classifiers with scikit-learn on noisy real-world signal data.',
      'Built a Streamlit prototype for clinician-facing interpretation of predictions.',
    ],
    tools: ['Python', 'Librosa', 'openSMILE', 'scikit-learn', 'Streamlit'],
    illustration: 'scrapbook-cards',
    accent: 'blush',
    links: [{ label: 'Repository', href: 'https://github.com/meronoumer/heart-disease-diagnostic-aid' }],
  },
  {
    id: 'dataviz-studio',
    name: 'DataViz Studio',
    status: 'shipped',
    summary: 'A drag-and-drop data visualization tool for building interactive charts without writing code.',
    bullets: [
      'React + TypeScript + Vega-Lite interface with live chart rendering as fields are dropped in.',
      'Automatic detection of quantitative, nominal, and temporal fields to suggest encodings.',
    ],
    tools: ['React', 'TypeScript', 'Vega-Lite', 'Vite'],
    illustration: 'charts-dashboard',
    accent: 'sky',
    links: [{ label: 'Repository', href: 'https://github.com/meronoumer/datavisualization' }],
  },
  {
    id: 'moodreads',
    name: 'Sentiment-Aware Book Recommender',
    status: 'shipped',
    summary: 'A mood-based book recommender matching a reader’s sentiment to book descriptions.',
    bullets: [
      'Python backend scoring sentiment alignment between user input and book descriptions.',
      'TypeScript frontend for browsing mood-matched recommendations.',
    ],
    tools: ['Python', 'TypeScript', 'NLP'],
    illustration: 'scrapbook-cards',
    accent: 'sage',
    links: [
      { label: 'Frontend', href: 'https://github.com/meronoumer/moodreads' },
      { label: 'Backend', href: 'https://github.com/meronoumer/moodreads-backend' },
    ],
  },
  {
    id: 'assistive-vision-app',
    name: 'Assistive Vision App',
    status: 'shipped',
    summary: 'A lightweight on-device vision model helping identify objects for assistive use cases.',
    bullets: [
      'Fine-tuned MobileNetV2 for multi-label image classification.',
      'Exported to TensorFlow Lite for on-device inference.',
    ],
    tools: ['Python', 'TensorFlow Lite', 'MobileNetV2'],
    illustration: 'scrapbook-cards',
    accent: 'mustard',
    links: [{ label: 'Repository', href: 'https://github.com/meronoumer/assistive-vision-app' }],
  },
];
