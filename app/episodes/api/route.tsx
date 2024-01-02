import { Character, Episode, EpisodesAndInfo } from "@/interface/interface";

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

export async function fetchEpisodeCharactersShow(url: string): Promise<Character> {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};