import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slice";

const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

export default store;
