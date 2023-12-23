'use client'
import ReduxProvider from "@/provider/ReduxProvider";
import FindAndSearch from "./findAndSearch";
import Main from "./main";
import Paginate from "./paginate";

const MainPlusSearchPlusPaginate: React.FC = () => {

  return (
    <>
      <ReduxProvider>
        <FindAndSearch />
        <Main />
        <Paginate />
      </ReduxProvider>
    </>
  )
};

export default MainPlusSearchPlusPaginate;
