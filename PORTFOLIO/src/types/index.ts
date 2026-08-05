import type { IconType } from 'react-icons';

export interface NavItem {
  label: string;
  href: string;
  /** Section id on the home page that this nav item scrolls to. */
  sectionId?: string;
}

export type SkillLevel = 'Beginner' | 'Beginner to Intermediate' | 'Intermediate';

export interface Skill {
  name: string;
  levelLabel: SkillLevel;
  category: string;
  color: string;
  icon: IconType;
}

export interface Project {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  problemStatement: string;
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

export interface CodingProfile {
  platform: string;
  username: string;
  href: string;
  description: string;
  icon: IconType;
}

export interface RoadmapItem { title: string; status: 'Early Stage' | 'In Progress' | 'Exploring'; detail: string; lessons: string[]; accent: string; }
export interface Technology { name: string; category: string; description: string; uses: string[]; color: string; icon: IconType; }
export interface Toast { id: string; type: 'success' | 'error'; message: string; }
export interface GitHubProfile { login: string; name: string | null; public_repos: number; followers: number; following: number; avatar_url: string; html_url: string; }
export interface GitHubRepository { id: number; name: string; description: string | null; html_url: string; stargazers_count: number; forks_count: number; language: string | null; }
