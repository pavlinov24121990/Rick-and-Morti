import { Character, Episode } from "@/interface/interface";
import { revalidateTag } from "next/cache";

export async function fetchCharacterShow(id: number): Promise<Character> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
      method: 'GET',
       next: { tags: ['CharacterShow'], revalidate: 60  }
    });
    revalidateTag('CharacterShow')
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export async function fetchEpisodeShow(url: string): Promise<Episode> {
  try {
    const response = await fetch(url, {
      method: 'GET',
       next: { tags: ['EpisodShow'], revalidate: 60  }
    });
    revalidateTag('EpisodShow')
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

