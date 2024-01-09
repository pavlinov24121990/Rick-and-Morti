'use client'
import { fetchEpisodes } from "@/helpers/fetchEpisodes";
import { LoadMoreValidateEpisodes } from "@/helpers/LoadMoreValidate";
import { setEpisodes } from "@/provider/redux/episodes";
import { setLoadMoreValid } from "@/provider/redux/paginationSlice";
import { RootState } from "@/provider/redux/store";
import Link from "next/link";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import '/scss/mainLocations.scss';



export default function MainEpisode() {

  const dispatch = useDispatch();
  const episodes = useSelector((state: RootState) => state.episodes);
  const { loadMoreValid, currentPageEpisodes, loadMoreEpisodes } = useSelector((state: RootState) => state.paginationSlice);
  const episodesToShow = loadMoreValid ? episodes?.results?.slice(loadMoreEpisodes).reverse() : episodes?.results;
  const { nameEpisodes } = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    fetchEpisodes(nameEpisodes, currentPageEpisodes)
      .then((data) => {
        dispatch(setEpisodes(data));
        dispatch(setLoadMoreValid(LoadMoreValidateEpisodes(nameEpisodes)));
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [currentPageEpisodes, nameEpisodes]);


  return (
    <>
      <div className="main-locations">
        {episodesToShow?.map((episod) => (
          <Link href={`/episodes/${episod.id}`} key={episod.id}>
            <div>
              <h1>{episod.name}</h1>
              <p>{episod.air_date}</p>
              <p>{episod.episode}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
