import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dogum_tarihi: "12.09.1998",
  ikametgah: "Trabzon",
  egitim_durumu: "Kocaeli ünv. RTS",
  tercih_ettigi_rol: "Frontend Developer",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
  },
});

export const { updateProfile } = profileSlice.actions;

export default profileSlice.reducer;
