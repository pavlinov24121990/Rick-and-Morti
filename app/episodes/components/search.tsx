
import { handleChange } from '@/helpers/handleChange';
import { setNameEpisodes } from '@/provider/redux/filters';
import { RootState } from '@/provider/redux/store';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import IconSearch from '/foto/IconSearch.svg';
import '/scss/filterAndSearch.scss';
import '/scss/searchEpisod.scss'

export default function Search() {
  const dispatch = useDispatch();
  const { nameEpisodes } = useSelector((state: RootState) => state.filters);

  return (
    <div className="filterAndSearch">
      <div>
        <input className='episod' type="text" defaultValue={nameEpisodes} onChange={(event) => dispatch(setNameEpisodes(handleChange(event)))} placeholder="Filter by name or episode (ex. S01 or S01E02)" />
        <Image src={IconSearch} width={24} height={24} alt='Logo Search' />
      </div>
    </div>
  )
}
