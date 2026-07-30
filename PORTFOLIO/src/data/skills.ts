import { FaDatabase, FaFigma, FaGitAlt, FaNodeJs, FaPython, FaReact } from 'react-icons/fa6';
import { SiCplusplus, SiExpress, SiJavascript, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';
import type { Skill, Technology } from '@/types';

export const skills: Skill[] = [
  { name: 'React', level: 78, category: 'Frontend', color: '#61dafb', icon: FaReact },
  { name: 'TypeScript', level: 64, category: 'Frontend', color: '#3178c6', icon: SiTypescript },
  { name: 'JavaScript', level: 80, category: 'Frontend', color: '#f7df1e', icon: SiJavascript },
  { name: 'Tailwind CSS', level: 76, category: 'Frontend', color: '#38bdf8', icon: SiTailwindcss },
  { name: 'Node.js', level: 62, category: 'Backend', color: '#8cc84b', icon: FaNodeJs },
  { name: 'Express', level: 60, category: 'Backend', color: '#a3a3a3', icon: SiExpress },
  { name: 'MongoDB', level: 58, category: 'Data', color: '#47a248', icon: SiMongodb },
  { name: 'SQL', level: 56, category: 'Data', color: '#60a5fa', icon: FaDatabase },
  { name: 'C++', level: 72, category: 'Core', color: '#6295cb', icon: SiCplusplus },
  { name: 'Python', level: 65, category: 'Core', color: '#facc15', icon: FaPython },
  { name: 'Git', level: 68, category: 'Tools', color: '#f05032', icon: FaGitAlt },
  { name: 'Figma', level: 60, category: 'Tools', color: '#f24e1e', icon: FaFigma },
];

export const radarSkills = [
  { subject: 'Frontend', value: 78, fullMark: 100 }, { subject: 'Backend', value: 62, fullMark: 100 }, { subject: 'DSA', value: 72, fullMark: 100 }, { subject: 'Databases', value: 58, fullMark: 100 }, { subject: 'DevOps', value: 34, fullMark: 100 }, { subject: 'Design', value: 60, fullMark: 100 },
];

export const technologies: Technology[] = [
  { name: 'React', category: 'Frontend', description: 'A component-driven library for building clear, responsive interfaces.', uses: ['Reusable UI systems', 'Stateful application flows', 'Performance-minded rendering'], color: '#61dafb', icon: FaReact },
  { name: 'TypeScript', category: 'Language', description: 'JavaScript with static typing for safer, more scalable codebases.', uses: ['Typed component contracts', 'Reliable API data', 'Refactor confidence'], color: '#3178c6', icon: SiTypescript },
  { name: 'Node.js', category: 'Backend', description: 'A JavaScript runtime used to create fast, event-driven web services.', uses: ['REST APIs', 'Backend utilities', 'Build tooling'], color: '#8cc84b', icon: FaNodeJs },
  { name: 'MongoDB', category: 'Data', description: 'A flexible document database for application data that evolves quickly.', uses: ['User data', 'Content records', 'Rapid prototyping'], color: '#47a248', icon: SiMongodb },
  { name: 'Tailwind CSS', category: 'Design system', description: 'A utility-first CSS framework for building precise, responsive interfaces.', uses: ['Responsive layout', 'Design tokens', 'Consistent visual rhythm'], color: '#38bdf8', icon: SiTailwindcss },
  { name: 'Git', category: 'Workflow', description: 'Version control for thoughtful iteration, collaboration, and reliable releases.', uses: ['Feature branches', 'Code history', 'Collaborative reviews'], color: '#f05032', icon: FaGitAlt },
];
