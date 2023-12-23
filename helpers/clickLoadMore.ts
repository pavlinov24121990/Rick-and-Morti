export const clickLoadMore = (loadMore: number): number => {
  return loadMore === 0 ? loadMore + 12 : loadMore - 4
}