import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "Eng",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    switchLanguage: (state) => {
      state.language = state.language === "Eng" ? "Tr" : "Eng";
    },
  },
});

export const { switchLanguage } = languageSlice.actions;

export default languageSlice.reducer;
