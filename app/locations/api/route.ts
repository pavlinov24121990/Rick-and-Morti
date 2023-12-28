import { ApiResponseLocations, Location, Resident } from "@/interface/interface";

export async function fetchLocations(currentPageLocations: number, type: string, dimension: string, nameLocations: string): Promise<ApiResponseLocations> {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/location?page=${currentPageLocations}&name=${nameLocations}&type=${type}&dimension=${dimension}`, {
      method: 'GET',
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

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

export async function fetchResidentsShow(url: string): Promise<Resident> {
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
