export interface SocialLink {
  label: string;
  href: string;
  icon: 'linkedin' | 'github' | 'instagram' | 'mail';
}

export const profile = {
  name: 'Nabin Sarkar',
  headline: 'Mechanical Design Engineer | CAD & CAE | Thermo-Mechanical Analysis',
  shortHeadline: 'Mechanical Design Engineer',
  location: 'West Bengal, India',
  photo: '/creative/image.png',
  resume: '/Nabin_Sarkar_Resume.pdf',
  intro:
    "Mechanical Engineering graduate focused on CAD modelling, thermo-mechanical analysis, and practical product development. I combine engineering discipline with a strong interest in visual communication and creative work.",
  longIntro:
    "My focus areas include CAD modelling, thermal and thermo-mechanical simulation, and design thinking. I'm currently expanding my skills in CAE workflows and engineering analysis while staying curious and hands-on. Beyond engineering, I create digital content — posters, reels, photography — and I run an Instagram page where I share that side of my work.",
  socials: [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/nabin-sarkar-sd23m09y03', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/Nabin022', icon: 'github' },
    { label: 'Instagram', href: 'https://www.instagram.com/nabin.js/', icon: 'instagram' },
    { label: 'Email', href: 'mailto:nabin00032@gmail.com', icon: 'mail' },
  ] as SocialLink[],
  contactEmail: 'nabin00032@gmail.com',
};
