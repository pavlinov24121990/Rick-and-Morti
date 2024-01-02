import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  status: string;
  species: string;
  gender: string;
  name: string;
  type: string;
  dimension: string;
  nameLocations: string;
  nameEpisodes: string;
}

const initialState: FiltersState = {
  status: '',
  species: '',
  gender: '',
  name: '',
  type: '',
  dimension: '',
  nameLocations: '',
  nameEpisodes: '',
};
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setSpecies: (state, action: PayloadAction<string>) => {
      state.species = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload;
    },
    setDimension: (state, action: PayloadAction<string>) => {
      state.dimension = action.payload;
    },
     setNameLocations: (state, action: PayloadAction<string>) => {
      state.nameLocations = action.payload;
    },
    setNameEpisodes: (state, action: PayloadAction<string>) => {
      state.nameEpisodes = action.payload;
    },
  },
});

export const { setStatus, setSpecies, setGender, setName, setType, setDimension, setNameLocations, setNameEpisodes } = filtersSlice.actions;
export default filtersSlice.reducer;
