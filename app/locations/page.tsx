'use server'

import MainPictureLocations from "./companents/mainPictureLocations";
import MainAndFilters from "./companents/mainAndFilters";

export default async function Home() {

  return (
    <>
      <MainPictureLocations />
      <MainAndFilters />
    </>
  )
}
