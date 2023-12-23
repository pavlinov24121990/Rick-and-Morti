import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CharacterList } from '@/interface/interface';

interface CharactersState {
  characters: CharacterList;
}

const initialState: CharactersState = {
  characters: { info: { count: 0, pages: 0, next: null, prev: null }, results: [] },
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<CharacterList>) => {
      state.characters = action.payload;
    },
  },
});

export const { setCharacters } = charactersSlice.actions;
export default charactersSlice.reducer;
