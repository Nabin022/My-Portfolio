import {
  Linkedin,
  Github,
  Instagram,
  Mail,
  GraduationCap,
  Building2,
  Calendar,
  MapPin,
  Compass,
  PenTool,
  Boxes,
  Cpu,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import type { SocialLink } from '@/data/profile';

export const socialIconMap: Record<SocialLink['icon'], LucideIcon> = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  mail: Mail,
};

export const aboutIconMap = {
  graduation: GraduationCap,
  building: Building2,
  calendar: Calendar,
  location: MapPin,
  compass: Compass,
} as const;

export const skillIconMap = {
  cad: PenTool,
  simulation: Cpu,
  fundamentals: Boxes,
  tools: Wrench,
} as const;
