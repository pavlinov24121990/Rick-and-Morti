'use server'
import MainPicture from "../components/mainPicture";
import MainPlusSearchPlusPaginate from "@/components/mainPlusSearchPlusPaginate";

export default async function Home() {

  return (
    <>
      <MainPicture />
      <MainPlusSearchPlusPaginate />
    </>
  )
}
