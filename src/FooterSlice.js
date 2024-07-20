import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "abanoz722@hotmail.com",
  linkedin: "linkedin",
};

const footerSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateFooter: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { updateFooter } = footerSlice.actions;

export default footerSlice.reducer;
