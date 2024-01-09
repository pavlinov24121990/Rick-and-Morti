'use client'
import { fetchLocations } from '@/helpers/fetchLocations';
import { LoadMoreValidateLocations } from '@/helpers/LoadMoreValidate';
import { setLocations } from '@/provider/redux/locations';
import { setLoadMoreValid } from '@/provider/redux/paginationSlice';
import { RootState } from '@/provider/redux/store';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '/scss/mainLocations.scss';



const MainLocations: React.FC = () => {

  const dispatch = useDispatch();
  const locations = useSelector((state: RootState) => state.locations);
  const { loadMoreValid, loadMoreLocations, currentPageLocations } = useSelector((state: RootState) => state.paginationSlice);
  const locationssToShow = loadMoreValid ? locations?.results?.slice(loadMoreLocations).reverse() : locations?.results;
  const { type, dimension, nameLocations } = useSelector((state: RootState) => state.filters);

  useEffect(() => {
    fetchLocations(currentPageLocations, type, dimension, nameLocations)
      .then((data) => {
        dispatch(setLocations(data));
        dispatch(setLoadMoreValid(LoadMoreValidateLocations(type, dimension, nameLocations)));
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [currentPageLocations, type, dimension, nameLocations]);

  return (
    <div className="main-locations">
      {locationssToShow?.map((location) => (
        <Link href={`/locations/${location.id}`} key={location.id}>
          <div>
            <h1>{location.name}</h1>
            <p>{location.type}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MainLocations;
