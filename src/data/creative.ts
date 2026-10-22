export interface CreativeItem {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description?: string;
  thumbnail: string;
  /** Optional embed URL (YouTube/Vimeo). If empty, a placeholder is shown. */
  embedUrl?: string;
}

export interface CreativeSubsection {
  id: 'graphic' | 'video' | 'photo' | 'social';
  title: string;
  blurb: string;
}

export const creativeSubsections: CreativeSubsection[] = [
  {
    id: 'graphic',
    title: 'Graphic Design',
    blurb: 'Posters, banners, thumbnails, social media creatives, and visual designs.',
  },
  {
    id: 'video',
    title: 'Video Editing',
    blurb: 'Reels, short-form videos, cinematic edits, event videos, and transformation edits.',
  },
  {
    id: 'photo',
    title: 'Photography & Visual Storytelling',
    blurb: 'Personal photography, travel, campus life, portraits, and creative experiments.',
  },
  {
    id: 'social',
    title: 'Social Media & Content Creation',
    blurb: 'Content creation interests and social media projects.',
  },
];

export const graphicDesignFilters = ['All', 'Poster', 'Banner', 'Thumbnail', 'Social'];

export const graphicDesign: CreativeItem[] = [
  {
    id: 'g1',
    title: 'Add your poster design',
    category: 'Poster',
    src: '/creative/graphic-placeholder.svg',
    alt: 'Graphic design placeholder',
  },
  {
    id: 'g2',
    title: 'Add your banner design',
    category: 'Banner',
    src: '/creative/graphic-placeholder.svg',
    alt: 'Graphic design placeholder',
  },
  {
    id: 'g3',
    title: 'Add a thumbnail design',
    category: 'Thumbnail',
    src: '/creative/graphic-placeholder.svg',
    alt: 'Graphic design placeholder',
  },
  {
    id: 'g4',
    title: 'Add a social media creative',
    category: 'Social',
    src: '/creative/graphic-placeholder.svg',
    alt: 'Graphic design placeholder',
  },
];

export const videos: VideoItem[] = [
  {
    id: 'v1',
    title: 'Add your reel or short-form video',
    description: 'Add an embed URL (YouTube/Vimeo) in src/data/creative.ts to enable playback.',
    thumbnail: '/creative/video-placeholder.svg',
  },
  {
    id: 'v2',
    title: 'Add a cinematic edit',
    thumbnail: '/creative/video-placeholder.svg',
  },
  {
    id: 'v3',
    title: 'Add an event video',
    thumbnail: '/creative/video-placeholder.svg',
  },
];

export const photography: CreativeItem[] = [
  {
    id: 'p1',
    title: 'Add a photograph',
    category: 'Travel',
    src: '/creative/photo-placeholder.svg',
    alt: 'Photography placeholder',
  },
  {
    id: 'p2',
    title: 'Add a portrait',
    category: 'Portrait',
    src: '/creative/photo-placeholder.svg',
    alt: 'Photography placeholder',
  },
  {
    id: 'p3',
    title: 'Add a campus life shot',
    category: 'Campus',
    src: '/creative/photo-placeholder.svg',
    alt: 'Photography placeholder',
  },
  {
    id: 'p4',
    title: 'Add a creative experiment',
    category: 'Creative',
    src: '/creative/photo-placeholder.svg',
    alt: 'Photography placeholder',
  },
  {
    id: 'p5',
    title: 'Add another photograph',
    category: 'Travel',
    src: '/creative/photo-placeholder.svg',
    alt: 'Photography placeholder',
  },
  {
    id: 'p6',
    title: 'Add another portrait',
    category: 'Portrait',
    src: '/creative/photo-placeholder.svg',
    alt: 'Photography placeholder',
  },
];

export const social = {
  instagram: 'https://www.instagram.com/nabin.js/',
  handle: '@nabin.js',
  blurb:
    "I share creative work — designs, edits, photography, and experiments — on my Instagram page. Connect the posts below by adding image paths in src/data/creative.ts. These are static selections, not live scraped posts.",
  posts: [
    { id: 's1', src: '/creative/social-placeholder.svg', alt: 'Instagram post placeholder' },
    { id: 's2', src: '/creative/social-placeholder.svg', alt: 'Instagram post placeholder' },
    { id: 's3', src: '/creative/social-placeholder.svg', alt: 'Instagram post placeholder' },
    { id: 's4', src: '/creative/social-placeholder.svg', alt: 'Instagram post placeholder' },
  ],
};


