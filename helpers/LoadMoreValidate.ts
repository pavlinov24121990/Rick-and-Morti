export const LoadMoreValidate = (status: string, gender: string, species: string, name: string): boolean => {
  return !(name.length || status.length || species.length || gender.length);
}

export const LoadMoreValidateLocations = (type: string, dimension: string, nameLocations: string): boolean => {
  return !(type.length || nameLocations.length || dimension.length);
}

export const LoadMoreValidateEpisodes = (nameEpisodes: string): boolean => {
  return !(nameEpisodes.length);
}