import { Episode } from "@/interface/interface";

export async function fetchEpisodeShow(id: number): Promise<Episode> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
