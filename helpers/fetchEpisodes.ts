import { EpisodesAndInfo } from "@/interface/interface";

export async function fetchEpisodes(nameEpisodes: string, currentPageEpisodes: number): Promise<EpisodesAndInfo> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${currentPageEpisodes}&name=${nameEpisodes}`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
