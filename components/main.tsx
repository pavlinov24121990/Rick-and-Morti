'use client'
import Image from 'next/image';
import Link from 'next/link';
import '/scss/main.scss';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/provider/redux/store";
import { useEffect, useState } from 'react';
import { fetchCharacter } from '@/app/api/route';
import { LoadMoreValidate } from '@/helpers/LoadMoreValidate';
import { setLoadMoreValid } from '@/provider/redux/paginationSlice';
import { setCharacters } from '@/provider/redux/charactersSlice';

const Main: React.FC = () => {

  const { characters } = useSelector((state: RootState) => state.charactersSlice);
  const { status, species, gender, name } = useSelector((state: RootState) => state.filters);
  const { currentPage, loadMoreValid, loadMore } = useSelector((state: RootState) => state.paginationSlice);
  const charactersToShow = loadMoreValid ? characters?.results?.slice(loadMore).reverse() : characters?.results;
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCharacter(status, gender, species, name, currentPage)
      .then((data) => {
        dispatch(setCharacters(data));
        dispatch(setLoadMoreValid(LoadMoreValidate(status, gender, species, name)));
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [status, gender, species, name, currentPage]);

  return (
    <div className="main">
      {charactersToShow?.map((character) => (
        <Link href={`/character/${character.id}`} key={character.id}>
          <div>
            <Image src={character.image} width={240} height={224} alt={`Main img of ${character.name}`} />
            <h1>{character.name}</h1>
            <p>{character.species}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Main;
