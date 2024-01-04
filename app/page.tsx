'use server'
import MainPlusSearchPlusPaginate from "@/components/mainPlusSearchPlusPaginate";
import MainPictureLocations from "./UI/mainPictureLocations";

export default async function Home() {

  return (
    <>
      <MainPictureLocations />
      <MainPlusSearchPlusPaginate />
    </>
  )
}
