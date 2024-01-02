import { clickLoadMore } from "@/helpers/clickLoadMore";
import { setCurrentPage, setCurrentPageEpisodes, setCurrentPageLocations, setLoadMore, setLoadMoreEpisodes, setLoadMoreLocations } from "@/provider/redux/paginationSlice";
import { RootState } from "@/provider/redux/store";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import '/scss/paginate.scss'
import { isOnLocationsPage } from "@/helpers/isOnLocationsPage";
import { usePathname } from "next/navigation";

export default function Paginate() {
  const { characters } = useSelector((state: RootState) => state.charactersSlice);
  const locations = useSelector((state: RootState) => state.locations);
  const { currentPage, loadMoreValid, loadMore, loadMoreLocations, currentPageLocations, loadMoreEpisodes, currentPageEpisodes } = useSelector((state: RootState) => state.paginationSlice);
  const episodes = useSelector((state: RootState) => state.episodes);
  const dispatch = useDispatch();
  const router = usePathname();

  const SwitchStatePaginatePage = (url: string): any => {
    if (url.includes('/locations')) {
      return setLoadMoreLocations;
    } else if (url.includes('/character')) {
      return setLoadMore;
    } else if (url.includes('/episodes')) {
      return setLoadMoreEpisodes;
    } else {
      return setLoadMore
    }
  };

  const SwitchValueStatePaginatePage = (url: string): any => {
    if (url.includes('/locations')) {
      return loadMoreLocations;
    } else if (url.includes('/character')) {
      return loadMore;
    } else if (url.includes('/episodes')) {
      return loadMoreEpisodes;
    } else {
      return loadMore
    }
  };

  const SwitchDataInfoPaginatePage = (url: string): any => {
    if (url.includes('/locations')) {
      return locations;
    } else if (url.includes('/character')) {
      return characters;
    } else if (url.includes('/episodes')) {
      return episodes;
    } else {
      return characters
    }
  };

  const SwitchNumberPagePaginatePage = (url: string): any => {
    if (url.includes('/locations')) {
      return setLoadMoreLocations;
    } else if (url.includes('/character')) {
      return setLoadMore;
    } else if (url.includes('/episodes')) {
      return setLoadMoreEpisodes;
    } else {
      return loadMore === 0 ? setLoadMore : ""
    }
  };

  const SwitchPageStatePaginatePage = (url: string): any => {
    if (url.includes('/locations')) {
      return setCurrentPageLocations;
    } else if (url.includes('/character')) {
      return setCurrentPage;
    } else if (url.includes('/episodes')) {
      return setCurrentPageEpisodes;
    } else {
      return setCurrentPage
    }
  };

  const SwitchPagePaginatePage = (url: string): any => {
    if (url.includes('/locations')) {
      return currentPageLocations;
    } else if (url.includes('/character')) {
      return currentPage;
    } else if (url.includes('/episodes')) {
      return currentPageEpisodes;
    } else {
      return currentPage
    }
  };

  const onLocationsPage = isOnLocationsPage();
  const onSwitchStatePaginatePage = SwitchStatePaginatePage(router)
  const onSwitchValueStatePaginatePage = SwitchValueStatePaginatePage(router)
  const onSwitchDataInfoPaginatePage = SwitchDataInfoPaginatePage(router)
  const onSwitchNumberPagePaginatePage = SwitchNumberPagePaginatePage(router)
  const onSwitchPageStatePaginatePage = SwitchPageStatePaginatePage(router)
  const onSwitchPagePaginatePage = SwitchPagePaginatePage(router)

  const handlePageClick = (page: number): void => {
    loadMoreLocations === 0 ? dispatch(onSwitchNumberPagePaginatePage(12)) : "";
    loadMore === 0 ? dispatch(onSwitchNumberPagePaginatePage(12)) : "";
    loadMoreEpisodes === 0 ? dispatch(onSwitchNumberPagePaginatePage(12)) : "";
    dispatch(onSwitchPageStatePaginatePage(page));
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
          const isCurrent = onSwitchPagePaginatePage === page;
          const isWithinRange =
            page <= onSwitchPagePaginatePage + adjacentPages && page >= onSwitchPagePaginatePage - adjacentPages;
          if (isCurrent || isWithinRange) {
            const key = `${onSwitchPagePaginatePage}${page}`;
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
          <button onClick={() => dispatch(onSwitchStatePaginatePage(clickLoadMore(data)))}>
            LOAD MORE
          </button>
        </div>
      );
    } else {
      return (
        onSwitchDataInfoPaginatePage && onSwitchDataInfoPaginatePage?.info?.pages > 1 && renderPagination(onSwitchDataInfoPaginatePage)
      );
    }
  };

  return (
    <>
      {validateSlisePaginate(onSwitchValueStatePaginatePage, loadMoreValid)}
    </>
  )
}
