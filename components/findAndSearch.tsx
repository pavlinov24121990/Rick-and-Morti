'use client'
import Image from "next/image";
import IconSearch from '/foto/IconSearch.svg';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../provider/redux/store';
import { setStatus, setSpecies, setGender, setName } from '../provider/redux/filters';
import { handleChange } from "@/helpers/handleChange";
import '/scss/filterAndSearch.scss';
import Modals from "@/app/UI/modal";

export default function FindAndSearch() {

  const dispatch = useDispatch();
  const { status, species, gender, name } = useSelector((state: RootState) => state.filters);

  return (
    <div className="filterAndSearch">
      <div>
        <input type="text" defaultValue={name} onChange={(event) => dispatch(setName(handleChange(event)))} placeholder="Filter by name..." />
        <Image src={IconSearch} width={24} height={24} alt='Logo Search' />
      </div>
      <div className='modals'>
        <Modals />
      </div>
      <div className='find'>
        <select defaultValue={species} onChange={(event) => dispatch(setSpecies(handleChange(event)))}>
            <option value="">Species</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="Poopybutthole">Poopybutthole</option>
        </select>
        <select defaultValue={gender} onChange={(event) => dispatch(setGender(handleChange(event)))}>
            <option value="">Gender</option>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="genderless">genderless</option>
            <option value="unknown">unknown</option>
        </select>
        <select defaultValue={status} onChange={(event) => dispatch(setStatus(handleChange(event)))}>
          <option value="">Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
    </div>
  )
}
