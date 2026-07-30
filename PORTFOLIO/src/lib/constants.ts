import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa6';
import type { NavItem } from '@/types';

export const siteConfig = {
  name: 'Neil Dua',
  title: 'CSE Student & Product-minded Builder',
  description: 'The portfolio of Neil Dua — a Computer Science student building thoughtful digital products from Delhi NCR.',
  url: import.meta.env.VITE_SITE_URL ?? 'https://your-domain.com',
  email: 'neildua@example.com',
  github: 'https://github.com/Neil-166',
  linkedin: 'https://linkedin.com/in/neil-dua',
};

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Coding', href: '/coding' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks = [
  { label: 'GitHub', href: siteConfig.github, icon: FaGithub },
  { label: 'LinkedIn', href: siteConfig.linkedin, icon: FaLinkedinIn },
  { label: 'Email', href: `mailto:${siteConfig.email}`, icon: FaEnvelope },
];
