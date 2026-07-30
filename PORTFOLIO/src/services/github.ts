import type { GitHubProfile, GitHubRepository } from '@/types';

const username = import.meta.env.VITE_GITHUB_USERNAME ?? 'Neil-166';
const baseUrl = 'https://api.github.com';

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${baseUrl}${path}`, { headers: { Accept: 'application/vnd.github+json' } });
  if (!response.ok) throw new Error(`GitHub request failed (${response.status})`);
  return response.json() as Promise<T>;
}

export const githubService = {
  getProfile: () => request<GitHubProfile>(`/users/${username}`),
  getRepositories: () => request<GitHubRepository[]>(`/users/${username}/repos?sort=updated&per_page=6`),
};
