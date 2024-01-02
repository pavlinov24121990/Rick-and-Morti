'use server'
import MainPicture from "../components/mainPicture";
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
