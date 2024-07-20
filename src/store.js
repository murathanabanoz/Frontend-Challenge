import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./slice";
import profileReducer from "./Profile";
import projectItemReducer from "./ProjectItem";
import FooterSlice from "./FooterSlice";

const store = configureStore({
  reducer: {
    language: languageReducer,
    profile: profileReducer,
    projectItem: projectItemReducer,
    footer: FooterSlice,
  },
});

export default store;
