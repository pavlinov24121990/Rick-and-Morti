import { Resident } from "@/interface/interface";

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
