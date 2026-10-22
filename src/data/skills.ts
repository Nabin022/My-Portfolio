export interface Skill {
  name: string;
  description?: string;
  /** 1–5 proficiency level shown as a segmented indicator. Omit to hide. */
  level?: 1 | 2 | 3 | 4 | 5;
}

export interface SkillCategory {
  title: string;
  icon: 'cad' | 'simulation' | 'fundamentals' | 'tools';
  blurb: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'CAD & Design',
    icon: 'cad',
    blurb: 'Drafting, modelling, and engineering drawing fundamentals.',
    skills: [
      { name: 'AutoCAD', level: 4, description: '2D drafting and mechanical drawings.' },
      { name: 'SolidWorks', level: 2, description: 'Basic 3D part modelling — actively learning.' },
      { name: 'Engineering Drawing', level: 4, description: 'Orthographic views, sections, tolerances.' },
      { name: '2D Drafting & 3D Modelling', level: 3 },
    ],
  },
  {
    title: 'Simulation & Analysis',
    icon: 'simulation',
    blurb: 'Thermal and thermo-mechanical analysis using ANSYS Workbench.',
    skills: [
      { name: 'ANSYS Workbench', level: 3, description: 'Steady-state thermal & structural setups.' },
      { name: 'Thermal Analysis', level: 3, description: 'Heat transfer and temperature distribution.' },
      { name: 'Thermo-Mechanical Analysis', level: 3, description: 'Coupled thermal–structural response.' },
      { name: 'Basic Engineering Analysis', level: 2 },
    ],
  },
  {
    title: 'Engineering Fundamentals',
    icon: 'fundamentals',
    blurb: 'Core mechanical engineering knowledge.',
    skills: [
      { name: 'Thermal Engineering', level: 3 },
      { name: 'Manufacturing Processes', level: 3 },
      { name: 'Welding & Fabrication Basics', level: 2 },
      { name: 'Materials & Mechanical Systems', level: 3 },
    ],
  },
  {
    title: 'Additional Tools',
    icon: 'tools',
    blurb: 'Numerical and productivity tools.',
    skills: [
      { name: 'MATLAB', level: 2, description: 'Basic scripts and numerical work — learning.' },
      { name: 'Microsoft Office', level: 4 },
    ],
  },
];
