'use server'

import Image from "next/image"
import Link from "next/link"
import { fetchCharacterShow, fetchEpisodeShow } from "./api/route"
import '/scss/characterShow.scss'
import arrowLink from '/foto/arrowLink.svg'

export default async function Home({ params }: { params: { id: number } }) {
  
  const CharacterShow = await fetchCharacterShow(params.id)
  const episodesData = await Promise.all(
    CharacterShow.episode.map(async (episodeURL) => {
      const response = await fetchEpisodeShow(episodeURL);
      return response;
    })
  );
  
  return (
    <div className="character-show">
      <div className='character-link'>
        <Link href="/">
          <Image src={arrowLink} width={24} height={24} alt='Logo Link' />
          GO BACK
        </Link>
      </div>
      <div className='character-img'>
        <Image src={CharacterShow.image} width={300} height={300} alt='Logo Rick and Morti' />
      </div>
      <h2>{CharacterShow.name}</h2>
      <div className="informations-episodes">
        <div className="informations">
          <p className='informations-block'>Informations</p>
          <ul>
            <li>
              <p>Gender</p>
              <p>{CharacterShow.gender}</p>
              <i></i>
            </li>
            <li>
              <p>Status</p>
              <p>{CharacterShow.status}</p>
              <i></i>
            </li>
            <li>
              <p>Specie</p>
              <p>{CharacterShow.species}</p>
              <i></i>
            </li>
            <li>
              <p>Origin</p>
              <p>{CharacterShow.origin.name}</p>
              <i></i>
            </li>
            <li>
              <p>Type</p>
              <p>{CharacterShow.type}</p>
              <i></i>
            </li>
            <li>
              <Link href=''>
                <span>
                  <p>Location</p>
                  <p>{CharacterShow.location.name}</p>
                  <i></i>
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="episodes">
          <p className='episodes-block'>Episodes</p>
          <ul>
            {episodesData.map((episode) => (
              <li key={episode.id}>
                <Link href="">
                  <span>
                  <p>{episode.episode}</p>
                  <p>{episode.name}</p>
                  <p>{episode.air_date}</p>
                  <i></i>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
