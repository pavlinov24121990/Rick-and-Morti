import { clickLoadMore } from "@/helpers/clickLoadMore";
import { setCurrentPage, setCurrentPageLocations, setLoadMore, setLoadMoreLocations } from "@/provider/redux/paginationSlice";
import { RootState } from "@/provider/redux/store";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import '/scss/paginate.scss'
import { isOnLocationsPage } from "@/helpers/isOnLocationsPage";

export default function Paginate() {
  const { characters } = useSelector((state: RootState) => state.charactersSlice);
  const locations = useSelector((state: RootState) => state.locations);
  const { currentPage, loadMoreValid, loadMore, loadMoreLocations, currentPageLocations } = useSelector((state: RootState) => state.paginationSlice);
  const dispatch = useDispatch();

  const onLocationsPage = isOnLocationsPage();

  const handlePageClick = (page: number): void => {
    onLocationsPage ? loadMoreLocations === 0 ? dispatch(setLoadMoreLocations(12)) : "" : loadMore === 0 ? dispatch(setLoadMore(12)) : ""
    dispatch((onLocationsPage ? setCurrentPageLocations : setCurrentPage)(page));
  };

  const renderPagination = (data: any) => {
    if (!data) {
      return null;
    }

    const totalPages = data.info.pages;
    const adjacentPages = 2;
    const ellipsis = '...';

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
      <div className="pagination">
        {pages.map((page: number, index: number) => {
          const isCurrent = (onLocationsPage ? currentPageLocations : currentPage) === page;
          const isWithinRange =
            page <= (onLocationsPage ? currentPageLocations : currentPage) + adjacentPages && page >= (onLocationsPage ? currentPageLocations : currentPage) - adjacentPages;
          if (isCurrent || isWithinRange) {
            const key = onLocationsPage ? `locations${page}` : `characters${page}`;
            return (
              <button
                key={key}
                className={`btn me-3 mb-3 ${isCurrent ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => handlePageClick(page)}>
                {page}
              </button>
            );
          }
          if (index === 0 || index === pages.length - 1) {
            const key = onLocationsPage ? `locations${index}${page}` : `characters${index}${page}`;
            return (
              <span key={key} className="me-3 mb-3">
                {ellipsis}
              </span>
            );
          }
          return null;
        })}
      </div>
    );
  };

  const validateSlisePaginate = (data: number, loadMoreValid: boolean) => {
    if (data !== 0 && loadMoreValid) {
      return (
        <div className='button-load'>
          <button onClick={() => dispatch((onLocationsPage ? setLoadMoreLocations : setLoadMore)(clickLoadMore(data)))}>
            LOAD MORE
          </button>
        </div>
      );
    } else {
      return (
        onLocationsPage ? 
          locations && locations?.info?.pages > 1 && renderPagination(locations) :
          characters && characters?.info?.pages > 1 && renderPagination(characters)
      );
    }
  };

  return (
    <>
      {validateSlisePaginate((onLocationsPage ? loadMoreLocations : loadMore), loadMoreValid)}
    </>
  )
}
