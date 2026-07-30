export interface CodingStats { platform: string; solved: number | null; streak: number | null; contests: number | null; status: 'available' | 'pending'; }

// Public profile providers differ by username and CORS support. Keep the UI useful until a stable endpoint is configured.
export async function getCodingStats(): Promise<CodingStats[]> {
  return [
    { platform: 'LeetCode', solved: null, streak: null, contests: null, status: 'pending' },
    { platform: 'CodeChef', solved: null, streak: null, contests: null, status: 'pending' },
  ];
}
