import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')
  const res = await fetch(`${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await res.json()
  return NextResponse.json({ data })
}

// export async function fetchEpisodeShow(url: string): Promise<Episode> {
//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//        next: { tags: ['EpisodShow'], revalidate: 60  }
//     });
//     revalidateTag('EpisodShow')
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };