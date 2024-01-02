import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EpisodesAndInfo } from '@/interface/interface';

const initialState: EpisodesAndInfo = {
  info: {
    count: 0,
    next: null,
    pages: 0,
    prev: null,
  },
  results: [],
};

const episodes = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    setEpisodes: (state, action: PayloadAction<EpisodesAndInfo>) => {
      state.info = action.payload.info;
      state.results = action.payload.results;
    },
  },
});

export const { setEpisodes } = episodes.actions;
export default episodes.reducer;
