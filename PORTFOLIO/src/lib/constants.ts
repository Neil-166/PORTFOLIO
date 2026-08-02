import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { SiCodechef, SiLeetcode } from 'react-icons/si';
import type { CodingProfile, NavItem } from '@/types';

export const siteConfig = {
  name: 'Neil Dua',
  title: 'Neil Dua | B.Tech CSE Student | Aspiring Software Engineer',
  description:
    'Portfolio of Neil Dua — 2nd-year B.Tech CSE student at ABES Engineering College, Ghaziabad. Focused on DSA, React, and web development. Explore projects and connect for internship opportunities.',
  url: (import.meta.env.VITE_SITE_URL ?? 'https://neildua.vercel.app').replace(/\/$/, ''),
  email: 'neildua0704@gmail.com',
  github: 'https://github.com/Neil-166',
  linkedin: 'https://linkedin.com/in/neil-dua',
  leetcode: 'https://leetcode.com/u/Neil_Dua/',
  codechef: 'https://www.codechef.com/users/neil0704',
  resumePath: '/NEIL DUA RESUME.pdf',
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
];

export const codingProfiles: CodingProfile[] = [
  {
    platform: 'LeetCode',
    username: 'Neil_Dua',
    href: siteConfig.leetcode,
    description: 'Problem solving practice profile',
    icon: SiLeetcode,
  },
  {
    platform: 'CodeChef',
    username: 'neil0704',
    href: siteConfig.codechef,
    description: 'Problem solving practice profile',
    icon: SiCodechef,
  },
];

export const currentlyLearning = [
  'Data Structures & Algorithms',
  'React Router',
  'Tailwind CSS',
  'Node.js Basics',
  'Git & GitHub',
  'Problem Solving on LeetCode and CodeChef',
];
