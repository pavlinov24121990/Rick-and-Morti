import { Character } from "@/interface/interface";

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
