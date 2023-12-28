export const clickLoadMore = (data: number): number => {
  return data === 0 ? data + 12 : data - 4
}