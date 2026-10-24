export interface ProjectSection {
  heading: string;
  body: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  kind: 'report' | 'publication' | 'details' | 'external';
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  tools: string[];
  tags: string[];
  image?: string; // card image
  gallery?: ProjectImage[];
  sections?: ProjectSection[];
  links?: ProjectLink[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'ic-engine-piston',
    title:
      'Comparative Thermo-Mechanical Performance & Material Optimization of Bare and Thermal Barrier Coated IC Engine Pistons',
    summary:
      'Compared the thermal behaviour, stress, deformation, and material performance of bare and thermal-barrier-coated IC engine pistons using ANSYS Workbench and Fusion 360, across A2618, Al-GHS1300, and Ti-6Al-4V.',
    tools: ['ANSYS Workbench', 'Fusion 360'],
    tags: ['Thermal Analysis', 'Thermo-Mechanical', 'Material Optimization', 'IC Engine'],
    featured: true,
    image: '/projects/piston-placeholder.svg',
    sections: [
      {
        heading: 'Objective',
        body: 'Evaluate and compare the thermal and thermo-mechanical performance of bare and thermal-barrier-coated pistons, and identify the most suitable material among A2618, Al-GHS1300, and Ti-6Al-4V for improved piston durability.',
      },
      {
        heading: 'Methodology',
        body: 'Modelled the piston in Fusion 360, then set up steady-state thermal and coupled thermo-mechanical simulations in ANSYS Workbench. Applied realistic engine thermal loads and boundary conditions to compare temperature distribution, stress, and deformation.',
      },
      {
        heading: 'Simulation Setup',
        body: 'Define material properties for each candidate alloy, apply combustion-side thermal loads and cooling-side boundary conditions, mesh the piston geometry, and solve thermal followed by structural cases.',
      },
      {
        heading: 'Verified finding',
        body: 'The study reported a 23.4% reduction in total deformation for the coated A2618 piston configuration. Add the verified stress and temperature comparisons here as the project record is expanded.',
      },
      {
        heading: 'Publication',
        body: 'The findings were co-authored and published in the International Journal of Engineering Research & Technology (IJERT) in 2026.',
      },
    ],
    gallery: [
      {
        src: '/projects/piston-placeholder.svg',
        alt: 'Piston CAD model placeholder',
        caption: 'Fusion 360 piston geometry — replace this gallery slot with the final model render.'
      },
      {
        src: '/projects/piston-results-placeholder.svg',
        alt: 'Thermal results placeholder',
        caption: 'ANSYS Workbench results — replace this gallery slot with the final contour plot or comparison graph.'
      },
    ],
    links: [
      {
        label: 'View Publication',
        href: '',
        kind: 'publication',
      },
    ],
  },
  {
    id: 'cad-modelling',
    title: 'CAD Modelling & Mechanical Design',
    summary:
      'A growing collection of CAD models, engineering drawings, assemblies, and design exercises. Add your models, technical drawings, and descriptions here.',
    tools: ['AutoCAD', 'SolidWorks', 'Fusion 360'],
    tags: ['CAD', '3D Modelling', 'Drafting', 'Assembly'],
    image: '/projects/cad-placeholder.svg',
    sections: [
      {
        heading: 'Objective',
        body: 'Practise and demonstrate core mechanical design skills — part modelling, assemblies, and production-ready engineering drawings.',
      },
      {
        heading: 'Description',
        body: 'Add individual model descriptions, dimensions, and design rationale here as you build out this collection.',
      },
    ],
    gallery: [
      {
        src: '/projects/cad-placeholder.svg',
        alt: 'CAD model placeholder',
        caption: 'Add your CAD model renders and drawings.',
      },
    ],
  },
  {
    id: 'thermal-analysis',
    title: 'Thermal & Engineering Analysis',
    summary:
      'Additional simulation and engineering-analysis work. Leave placeholders for images, objectives, methods, and results until you add specific studies.',
    tools: ['ANSYS Workbench'],
    tags: ['CAE', 'Thermal', 'Analysis'],
    image: '/projects/thermal-placeholder.svg',
    sections: [
      {
        heading: 'Objective',
        body: 'Describe the goal of this analysis study.',
      },
      {
        heading: 'Methods',
        body: 'Describe the setup, loads, boundary conditions, and assumptions.',
      },
      {
        heading: 'Results',
        body: 'Add your findings, contour plots, and conclusions here.',
      },
    ],
    gallery: [
      {
        src: '/projects/thermal-placeholder.svg',
        alt: 'Analysis results placeholder',
        caption: 'Add your simulation contour plots and graphs.',
      },
    ],
  },
];
