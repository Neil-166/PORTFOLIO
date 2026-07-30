export interface BlogPost { title: string; description: string; tags: string[]; url: string; publishedAt: string; }

export async function getDevToPosts(username: string): Promise<BlogPost[]> {
  const response = await fetch(`https://dev.to/api/articles?username=${encodeURIComponent(username)}`);
  if (!response.ok) throw new Error('Unable to retrieve articles.');
  const data = await response.json() as Array<{ title: string; description: string; tag_list: string[]; url: string; published_at: string }>;
  return data.map((post) => ({ title: post.title, description: post.description, tags: post.tag_list, url: post.url, publishedAt: post.published_at }));
}
