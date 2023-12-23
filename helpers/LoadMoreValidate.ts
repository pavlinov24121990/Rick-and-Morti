export const LoadMoreValidate = (status: string, gender: string, species: string, name: string): boolean => {
  return !(name.length || status.length || species.length || gender.length);
}