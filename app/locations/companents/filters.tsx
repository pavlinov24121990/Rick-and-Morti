
import { handleChange } from "@/helpers/handleChange";
import { setDimension, setName, setNameLocations, setType } from "@/provider/redux/filters";
import { RootState } from "@/provider/redux/store";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import IconSearch from '/foto/IconSearch.svg';
import '/scss/filterAndSearch.scss';

export default function Filters() {
  const dispatch = useDispatch();
  const { type, dimension, nameLocations } = useSelector((state: RootState) => state.filters);
  return (
    <div className="filterAndSearch">
      <div>
        <input type="text" defaultValue={nameLocations} placeholder="Filter by name..." onChange={(event) => dispatch(setNameLocations(handleChange(event)))} />
        <Image src={IconSearch} width={24} height={24} alt='Logo Search' />
      </div>
       <select defaultValue={type} onChange={(event) => dispatch(setType(handleChange(event)))} >
          <option value="">Type</option>
          <option value="Planet">Planet</option>
          <option value="Cluster">Cluster</option>
          <option value="Space station">Space station</option>
          <option value="TV">TV</option>
          <option value="Microverse">Microverse</option>
          <option value="Resort">Resort</option>
          <option value="Fantasy town">Fantasy town</option>
          <option value="Dream">Dream</option>
      </select>
      <select defaultValue={dimension} onChange={(event) => dispatch(setDimension(handleChange(event)))} >
          <option value="">Dimension</option>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="genderless">genderless</option>
          <option value="unknown">unknown</option>
      </select>
    </div>
  )
}
