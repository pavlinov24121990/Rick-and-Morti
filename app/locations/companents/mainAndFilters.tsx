'use client'

import Paginate from "@/components/paginate";
import ReduxProvider from "@/provider/ReduxProvider";
import Filters from "./filters";
import MainLocations from "./mainLocations";

const MainAndFilters: React.FC = () => {
  return (
    <>
      <ReduxProvider>
        <Filters />
        <MainLocations />
        <Paginate />
      </ReduxProvider>
    </>
  );
};

export default MainAndFilters;
