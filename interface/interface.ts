export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface CharacterList {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

export interface FilterAndSearchProps {
  charactersToShow: Character[];
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface LocationInfo {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

export interface Location {
  id: number;
  created: string;
  dimension: string;
  name: string;
  type: string;
  residents: string[];
  url: string;
}

export interface ApiResponseLocations {
  info: LocationInfo;
  results: Location[];
}

export interface Resident {
  id: number;
  name: string;
  species: string;
  image: string;
}
