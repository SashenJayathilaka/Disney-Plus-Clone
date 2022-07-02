import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popular: null,
  newTo: null,
  original: null,
  hollywood: null,
  kidsTv: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.popular = action.payload.popular;
      state.newTo = action.payload.newTo;
      state.original = action.payload.original;
      state.hollywood = action.payload.hollywood;
      state.kidsTv = action.payload.kidsTv;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.popular;
export const selectNewDisney = (state) => state.movie.newTo;
export const selectOriginal = (state) => state.movie.original;
export const selectHollywood = (state) => state.movie.hollywood;
export const selectricTv = (state) => state.movie.kidsTv;
export const selectTrend = (state) => state.movie.trending;

export default movieSlice.reducer;
