import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  status: string;
  species: string;
  gender: string;
  name: string;
}

const initialState: FiltersState = {
  status: '',
  species: '',
  gender: '',
  name: '',
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
  },
});

export const { setStatus, setSpecies, setGender, setName } = filtersSlice.actions;
export default filtersSlice.reducer;
