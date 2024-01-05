'use client'

import Image from "next/image"
import Link from "next/link"
import '/scss/characterShow.scss'
import ButtonGoBack from "@/app/UI/buttonGoBack"
import { extractLocationId } from "@/helpers/extractUrlId"
import { useEffect, useState } from "react"
import { Character, Episodes } from "@/interface/interface"

export default function ShowPage({ params }: { params: { id: number } }) {

  const CharacterData = {
    created: "string",
    episode: [""],
    gender: "string",
    id: 20,
    image: "",
    location: {
      name: "",
      url: "",
    },
    name: "",
    origin: {
      name: "",
      url: "",
    },
    species: "",
    status: "",
    type: "",
    url: "",
  }

  const episodesInit: Episodes[] = [
  {
    data: {
      air_date: "",
      characters: [""],
      created: "",
      episode: "",
      id: 10,
      name: "",
      url: "",
    },
  },
];

  const [characterShow, setCharacterShow] = useState<Character>(CharacterData);
  const [episodesData, setEpisodesData] = useState<Episodes[]>(episodesInit)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`api/?id=${params.id}`);
        const data = await response.json();
        setCharacterShow(data.data)

        const episodesPromises = data.data.episode.map(async (episodeURL: string) => {
        const response = await fetch(`api/episodes?url=${episodeURL}`);
        const data = await response.json();
        return data as Episodes;
      });

      const resolvedEpisodes = await Promise.all(episodesPromises);
      
      setEpisodesData(resolvedEpisodes as Episodes[]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const locationId = extractLocationId(characterShow.location.url);

  return (
    <div className="character-show">
      <ButtonGoBack />
      <div className='character-img'>
        {characterShow && characterShow.image && (
          <Image src={characterShow.image} width={300} height={300} alt='Logo Rick and Morti' />
        )}
      </div>
      <h2>{characterShow.name}</h2>
      <div className="informations-episodes">
        <div className="informations">
          <p className='informations-block'>Informations</p>
          <ul>
            <li>
              <p>Gender</p>
              <p>{characterShow.gender}</p>
              <i></i>
            </li>
            <li>
              <p>Status</p>
              <p>{characterShow.status}</p>
              <i></i>
            </li>
            <li>
              <p>Specie</p>
              <p>{characterShow.species}</p>
              <i></i>
            </li>
            <li>
              <p>Origin</p>
              <p>{characterShow.origin.name}</p>
              <i></i>
            </li>
            <li>
              <p>Type</p>
              <p>{characterShow.type}</p>
              <i></i>
            </li>
            <li>
              <Link href={`/locations/${locationId}`}>
                <span>
                  <p>Location</p>
                  <p>{characterShow.location.name}</p>
                  <i></i>
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="episodes">
          <p className='episodes-block'>Episodes</p>
          <ul>
            {episodesData?.map((episode: Episodes) => (
              <li key={episode.data.id}>
                <Link href={`/episodes/${episode.data.id}`}>
                  <span>
                  <p>{episode.data.episode}</p>
                  <p>{episode.data.name}</p>
                  <p>{episode.data.air_date}</p>
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
