import { Location } from "@/interface/interface";

export async function fetchShowLocations(id: number): Promise<Location> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
