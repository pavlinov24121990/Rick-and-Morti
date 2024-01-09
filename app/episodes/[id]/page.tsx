'use server'

import ButtonGoBack from "@/app/UI/buttonGoBack"
import { fetchEpisodeCharactersShow } from "@/helpers/fetchEpisodeCharactersShow"
import { fetchEpisodeShow } from "@/helpers/fetchEpisodeShow"
import Image from "next/image"
import Link from "next/link"
import '/scss/locationsShow.scss'


export default async function Home({ params }: { params: { id: number } }) {
  const episodeShow = await fetchEpisodeShow(params.id)

  const charactersData = await Promise.all(
    episodeShow.characters.map(async (charactersURL: string) => {
      const response = await fetchEpisodeCharactersShow(charactersURL);
      return response;
    })
  );
  
  return (
    <div className='mainShow'>
      <div className='locations-show'>
        <ButtonGoBack />
        <h2>{episodeShow.name}</h2>
      </div>
      <div className='main-type-dimension'>
        <span>
          <p>
            Episode
          </p>
          <p className='type'>
            {episodeShow.episode}
          </p>
        </span>
        <span>
          <p>
            Date
          </p>
          <p className='type'>
            {episodeShow.air_date}
          </p>
        </span>
      </div>
      <div className='main'>
        <div>
          <p>Cast</p>
        </div>
        <ul>
          {charactersData.map((character) => (
            <li key={character.id}>
              <Link href={`/character/${character.id}`}>
                <Image src={character.image} width={240} height={224} alt='Logo Link' />
                <p>{character.name}</p>
                <p>{character.species}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
