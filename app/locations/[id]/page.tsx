'use server'

import ButtonGoBack from "@/app/UI/buttonGoBack"
import { fetchResidentsShow } from "@/helpers/fetchResidentsShow"
import { fetchShowLocations } from "@/helpers/fetchShowLocations"
import Image from "next/image"
import Link from "next/link"
import '/scss/locationsShow.scss'

export default async function Home({ params }: { params: { id: number } }) {

  const locationShow = await fetchShowLocations(params.id)
  const residentsData = await Promise.all(
    locationShow.residents.map(async (episodeURL: string) => {
      const response = await fetchResidentsShow(episodeURL);
      return response;
    })
  );
  
  return (
    <div className='mainShow'>
      <div className='locations-show'>
        <ButtonGoBack />
        <h2>{locationShow.name}</h2>
      </div>
      <div className='main-type-dimension'>
        <span>
          <p>
            Type
          </p>
          <p className='type'>
            {locationShow.type}
          </p>
        </span>
        <span>
          <p>
            Dimension
          </p>
          <p className='type'>
            {locationShow.dimension}
          </p>
        </span>
      </div>
      <div className='main'>
        <div>
          <p>Residents</p>
        </div>
        <ul>
          {residentsData.map((resident) => (
            <li key={resident.id}>
              <Link href={`/character/${resident.id}`}>
                <Image src={resident.image} width={240} height={224} alt='Logo Link' />
                <p>{resident.name}</p>
                <p>{resident.species}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
