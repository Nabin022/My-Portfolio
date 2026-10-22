export interface InfoCard {
  label: string;
  value: string;
  icon: 'graduation' | 'building' | 'calendar' | 'location' | 'compass';
}

export const about = {
  heading: 'About Me',
  body: [
    "I'm a Mechanical Engineering graduate from Cooch Behar Government Engineering College (MAKAUT). My interest lies in mechanical design, engineering analysis, and product development — taking a problem from concept to a workable, well-modelled solution.",
    "I'm a willing learner who enjoys solving practical engineering problems, and I'm actively building my skills in CAD, CAE, and thermal simulation. I like understanding how systems behave under real conditions — stresses, temperatures, materials — and using that understanding to make better design decisions.",
    "Alongside engineering, I have a strong creative side: graphic design, video editing, photography, and digital content creation. I treat both as different expressions of the same instinct — observing carefully, designing deliberately, and building things that work and look right.",
  ],
  cards: [
    { label: 'Degree', value: 'B.Tech in Mechanical Engineering', icon: 'graduation' },
    { label: 'College', value: 'Cooch Behar Government Engineering College', icon: 'building' },
    { label: 'Graduation', value: '2026', icon: 'calendar' },
    { label: 'Location', value: 'West Bengal, India', icon: 'location' },
    {
      label: 'Career Interests',
      value: 'Mechanical Design · CAD/CAE · Product Development · Engineering Analysis',
      icon: 'compass',
    },
  ] as InfoCard[],
};
