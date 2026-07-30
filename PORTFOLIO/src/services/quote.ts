export interface Quote { content: string; author: string; }

export async function getQuote(): Promise<Quote> {
  const response = await fetch('https://api.quotable.io/random?maxLength=120');
  if (!response.ok) throw new Error('Unable to retrieve a quote.');
  const quote = await response.json() as { content: string; author: string };
  return quote;
}
