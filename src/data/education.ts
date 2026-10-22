export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  board: string;
  period: string;
  description?: string;
}

export const education: EducationItem[] = [
  {
    id: 'btech',
    degree: 'B.Tech — Mechanical Engineering',
    institution: 'Cooch Behar Government Engineering College',
    board: 'MAKAUT',
    period: '2022 – 2026',
    description:
      'Undergraduate studies in mechanical engineering — design, thermal, manufacturing, materials, and CAE coursework with hands-on projects.',
  },
  {
    id: 'higher-secondary',
    degree: 'Higher Secondary (Class XII)',
    institution: 'Putimari High School',
    board: 'WBCHSE',
    period: '2021',
  },
  {
    id: 'secondary',
    degree: 'Secondary (Class X)',
    institution: 'Bamanhat High School',
    board: 'WBBSE',
    period: '2019',
  },
];
