import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/movieSlice";
import UserReducers from "../features/movie/UserReducers";

export default configureStore({
  reducer: {
    user: UserReducers,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
