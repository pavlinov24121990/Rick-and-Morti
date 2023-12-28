import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocationInfo, Location, ApiResponseLocations } from '@/interface/interface';

interface LocationsState {
  info: LocationInfo;
  results: Location[];
}

const initialState: LocationsState = {
  info: {
    count: 0,
    next: null,
    pages: 0,
    prev: null,
  },
  results: [],
};

const locations = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    setLocations: (state, action: PayloadAction<ApiResponseLocations>) => {
      state.info = action.payload.info;
      state.results = action.payload.results;
    },
  },
});

export const { setLocations } = locations.actions;
export default locations.reducer;
