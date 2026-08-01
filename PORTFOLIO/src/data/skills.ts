import { FaGitAlt, FaNodeJs } from 'react-icons/fa6';
import { SiCplusplus, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiReact, SiTailwindcss } from 'react-icons/si';
import type { Skill, Technology } from '@/types';

export const skills: Skill[] = [
  { name: 'C++', levelLabel: 'Intermediate', category: 'Core', color: '#6295cb', icon: SiCplusplus },
  { name: 'HTML/CSS', levelLabel: 'Intermediate', category: 'Frontend', color: '#e34f26', icon: SiHtml5 },
  { name: 'JavaScript', levelLabel: 'Intermediate', category: 'Frontend', color: '#f7df1e', icon: SiJavascript },
  { name: 'React', levelLabel: 'Beginner to Intermediate', category: 'Frontend', color: '#61dafb', icon: SiReact },
  { name: 'Tailwind CSS', levelLabel: 'Beginner to Intermediate', category: 'Frontend', color: '#38bdf8', icon: SiTailwindcss },
  { name: 'Node.js', levelLabel: 'Beginner', category: 'Backend', color: '#8cc84b', icon: FaNodeJs },
  { name: 'Express.js', levelLabel: 'Beginner', category: 'Backend', color: '#a3a3a3', icon: SiExpress },
  { name: 'MongoDB', levelLabel: 'Beginner', category: 'Data', color: '#47a248', icon: SiMongodb },
  { name: 'Git/GitHub', levelLabel: 'Intermediate', category: 'Tools', color: '#f05032', icon: FaGitAlt },
];

/** Soft visual weight for radar chart — not a proficiency claim. */
const levelWeight: Record<Skill['levelLabel'], number> = {
  Beginner: 30,
  'Beginner to Intermediate': 45,
  Intermediate: 58,
};

export const radarSkills = [
  { subject: 'Frontend', value: 48, fullMark: 100 },
  { subject: 'Backend', value: 32, fullMark: 100 },
  { subject: 'DSA', value: 42, fullMark: 100 },
  { subject: 'Databases', value: 28, fullMark: 100 },
  { subject: 'DevOps', value: 22, fullMark: 100 },
  { subject: 'Tools', value: levelWeight.Intermediate, fullMark: 100 },
];

export const technologies: Technology[] = [
  { name: 'React', category: 'Frontend', description: 'A component-driven library for building clear, responsive interfaces.', uses: ['Reusable UI systems', 'Stateful application flows', 'Performance-minded rendering'], color: '#61dafb', icon: SiReact },
  { name: 'JavaScript', category: 'Language', description: 'The language powering interactive web experiences and full-stack development.', uses: ['DOM manipulation', 'Async API calls', 'Application logic'], color: '#f7df1e', icon: SiJavascript },
  { name: 'Node.js', category: 'Backend', description: 'A JavaScript runtime used to create fast, event-driven web services.', uses: ['REST APIs', 'Backend utilities', 'Build tooling'], color: '#8cc84b', icon: FaNodeJs },
  { name: 'MongoDB', category: 'Data', description: 'A flexible document database for application data that evolves quickly.', uses: ['User data', 'Content records', 'Rapid prototyping'], color: '#47a248', icon: SiMongodb },
  { name: 'Tailwind CSS', category: 'Design system', description: 'A utility-first CSS framework for building precise, responsive interfaces.', uses: ['Responsive layout', 'Design tokens', 'Consistent visual rhythm'], color: '#38bdf8', icon: SiTailwindcss },
  { name: 'Git', category: 'Workflow', description: 'Version control for thoughtful iteration, collaboration, and reliable releases.', uses: ['Feature branches', 'Code history', 'Collaborative reviews'], color: '#f05032', icon: FaGitAlt },
];

export const levelBadgeStyles: Record<Skill['levelLabel'], string> = {
  Beginner: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-300',
  'Beginner to Intermediate': 'border-brand/25 bg-brand/10 text-brand',
  Intermediate: 'border-cyan-400/25 bg-cyan-400/10 text-cyan-300',
};

export const levelIndicatorDots: Record<Skill['levelLabel'], number> = {
  Beginner: 2,
  'Beginner to Intermediate': 3,
  Intermediate: 4,
};
