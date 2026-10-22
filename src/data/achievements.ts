export interface Achievement {
  id: string;
  date: string;
  title: string;
  description?: string;
  link?: string;
  category: 'project' | 'research' | 'competition' | 'other';
}

export const achievements: Achievement[] = [
  {
    id: 'piston-research',
    date: '2025',
    title: 'Research Publication — IC Engine Piston Thermo-Mechanical Analysis',
    description:
      'Comparative thermo-mechanical performance and material optimization study published via IJERT. Add your publication URL below.',
    link: '',
    category: 'research',
  },
  {
    id: 'piston-project',
    date: '2025',
    title: 'Major Engineering Project — Piston Analysis',
    description:
      'Completed a full simulation-based study comparing bare and thermal-barrier-coated pistons across three materials.',
    category: 'project',
  },
  {
    id: 'achievement-placeholder-1',
    date: '',
    title: 'Add a competition, workshop, or technical event',
    description:
      'Placeholder — replace with a verified engineering competition, workshop, or technical event you participated in.',
    category: 'competition',
  },
  {
    id: 'achievement-placeholder-2',
    date: '',
    title: 'Add another achievement',
    description: 'Placeholder for an academic or extracurricular achievement.',
    category: 'other',
  },
];
