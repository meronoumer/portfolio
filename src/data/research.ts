import type { ResearchItem } from './types';

export const research: ResearchItem[] = [
  {
    id: 'smith-hpc-lab',
    title: 'Parallel Multi-Surrogate Bayesian Optimization',
    organization: 'Smith College HPC Lab',
    dates: { start: '2025', end: 'Present' },
    summary:
      'Benchmarking distributed hyperparameter optimization frameworks to understand where parallel Bayesian optimization scales, and where it stalls.',
    bullets: [
      'Built benchmarking and profiling infrastructure in Python and C++ to compare parallel multi-surrogate Bayesian optimization approaches.',
      'Evaluated distributed hyperparameter optimization across BoTorch, DeepHyper, Optuna, and Ray Tune.',
      'Profiled runtime bottlenecks in distributed optimization loops running on HPC systems.',
      'First-author poster accepted to CCSCNE 2026.',
    ],
    tools: ['Python', 'C++', 'BoTorch', 'DeepHyper', 'Optuna', 'Ray Tune'],
    illustration: 'whiteboard-benchmarks',
    accent: 'sky',
    links: [{ label: 'Repository', href: 'https://github.com/meronoumer/hpc-bayes-opt' }],
  },
];
