import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Git_hub: "Github",
  View_Link: "View Site",
  Name: "Murathan Abanoz",
};

const projectItemSlice = createSlice({
  name: "ProjectItem",
  initialState,
  reducers: {
    updateProjectItem: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { updateProjectItem } = projectItemSlice.actions;

export default projectItemSlice.reducer;
