export const extractLocationId = (url:string): number | null => {
  const match = url.match(/\/location\/(\d+)/);
  return match ? parseInt(match[1], 10) : null;
}
