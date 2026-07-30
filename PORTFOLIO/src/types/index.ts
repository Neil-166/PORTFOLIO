import type { IconType } from 'react-icons';

export interface NavItem { label: string; href: string; }
export interface Skill { name: string; level: number; category: string; color: string; icon: IconType; }
export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  gradient: string;
  screenshot: string;
  stack: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  improvements: string[];
  github: string;
  demo?: string;
}
export interface RoadmapItem { title: string; completion: number; detail: string; lessons: string[]; accent: string; }
export interface Technology { name: string; category: string; description: string; uses: string[]; color: string; icon: IconType; }
export interface Toast { id: string; type: 'success' | 'error'; message: string; }
export interface GitHubProfile { login: string; name: string | null; public_repos: number; followers: number; following: number; avatar_url: string; html_url: string; }
export interface GitHubRepository { id: number; name: string; description: string | null; html_url: string; stargazers_count: number; forks_count: number; language: string | null; }
