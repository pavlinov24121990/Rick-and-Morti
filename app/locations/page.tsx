'use server'

import MainPictureLocations from "../UI/mainPictureLocations";
import MainAndFilters from "./companents/mainAndFilters";

export default async function Home() {

  return (
    <>
      <MainPictureLocations />
      <MainAndFilters />
    </>
  )
}
