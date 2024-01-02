'use client'
import Paginate from "@/components/paginate"
import ReduxProvider from "@/provider/ReduxProvider"
import MainEpisode from "./main"
import Search from "./search"


export default function MainSearchAndMain() {

  return (
    <>
      <ReduxProvider>
        <Search />
        <MainEpisode />
        <Paginate />
      </ReduxProvider>
    </>
  )
}
