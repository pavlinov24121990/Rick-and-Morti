import { clickLoadMore } from "@/helpers/clickLoadMore";
import { setCurrentPage, setLoadMore } from "@/provider/redux/paginationSlice";
import { RootState } from "@/provider/redux/store";
import { useDispatch, useSelector } from "react-redux";
import '/scss/paginate.scss'

export default function Paginate() {
  const { characters } = useSelector((state: RootState) => state.charactersSlice);
  const { currentPage, loadMoreValid, loadMore } = useSelector((state: RootState) => state.paginationSlice);
  const dispatch = useDispatch();

  const handlePageClick = (page: number): void => {
    loadMore === 0 ? dispatch(setLoadMore(12)) : ""
    dispatch(setCurrentPage(page));
  };
  
  const renderPagination = () => {
  if (!characters) {
    return null;
  }

  const totalPages = characters.info.pages;
  const adjacentPages = 2;
  const ellipsis = '...';

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination">
      {pages.map((page: number, index: number) => {
        const isCurrent = currentPage === page;
        const isWithinRange =
          page <= currentPage + adjacentPages && page >= currentPage - adjacentPages;
        if (isCurrent || isWithinRange) {
          return (
            <button
              key={page}
              className={`btn me-3 mb-3 ${isCurrent ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => handlePageClick(page)}>
              {page}
            </button>
          );
        }
        if (index === 0 || index === pages.length - 1) {
          return (
            <span key={index} className="me-3 mb-3">
              {ellipsis}
            </span>
          );
        }
        return null;
      })}
    </div>
  );
};

  return (
    <>
      {loadMore !== 0 && loadMoreValid ? (
        <div className='button-load'>
          <button onClick={() => dispatch(setLoadMore(clickLoadMore(loadMore)))}>LOAD MORE</button>
        </div>)
       :
      (characters && characters?.info?.pages > 1 && renderPagination())}
    </>
  )
}
