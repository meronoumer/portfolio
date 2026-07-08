import type { SkillGroup } from './types';

export const skills: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'C', 'C++'],
  },
  {
    id: 'backend-infra',
    label: 'Backend & Infrastructure',
    skills: ['FastAPI', 'REST APIs', 'PostgreSQL', 'Supabase', 'Docker'],
  },
  {
    id: 'data-ml',
    label: 'Data & ML Systems',
    skills: [
      'ETL',
      'Data Validation',
      'Benchmarking',
      'Monitoring Dashboards',
      'Structured Error Analysis',
      'Workflow Tracing',
      'scikit-learn',
      'BoTorch',
      'DeepHyper',
      'Optuna',
      'Ray Tune',
      'LangGraph',
    ],
  },
  {
    id: 'frontend-viz',
    label: 'Frontend & Visualization',
    skills: ['React', 'Next.js', 'Vega-Lite', 'Streamlit', 'HTML/CSS'],
  },
];
