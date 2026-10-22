export interface Certification {
  id: string;
  title: string;
  organization: string;
  date: string;
  type: 'training' | 'certification';
  description?: string;
  link?: string;
}

export const certifications: Certification[] = [
  {
    id: 'dvc-training',
    title: 'Industrial Training — Mejia Thermal Power Station',
    organization: 'Damodar Valley Corporation (DVC)',
    date: 'July 2025',
    type: 'training',
    description:
      'On-site industrial training at a thermal power station — exposure to boiler, turbine, and auxiliary systems in a real operating environment.',
  },
  {
    id: 'rkvy-training',
    title: 'Railway Workshop Training',
    organization: 'RKVY',
    date: 'July 2024',
    type: 'training',
    description:
      'Workshop training covering railway maintenance practices, fabrication, and mechanical workshop operations.',
  },
  {
    id: 'cad-cert-placeholder',
    title: 'CAD / CAE Certification',
    organization: 'Add issuing organization',
    date: 'Add date',
    type: 'certification',
    description:
      'Placeholder for a CAD, CAE, manufacturing, or design course certificate. Replace with your actual certification details and verification link.',
  },
];
