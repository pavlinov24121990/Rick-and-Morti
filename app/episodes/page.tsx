'use server'

import MainPictureLocations from "../UI/mainPictureLocations"
import MainSearchAndMain from "./components/mainSearchAndMain"


export default async function Home() {

  return (
    <>
      <MainPictureLocations />
      <MainSearchAndMain />
    </>
  )
}
