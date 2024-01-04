import { Character, Episode } from "@/interface/interface";
import { revalidateTag } from "next/cache";
import { CharacterList } from "@/interface/interface";

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

export async function fetchCharacter(status: string, gender: string, species: string, name: string, currentPage: number): Promise<CharacterList> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}&status=${status}&gender=${gender}&species=${species}&name=${name}`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

