import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "en",
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    SetEn: (state, action) => {
      state.data = "en";
    },
    SetAr: (state, action) => {
      state.data = "ar";
    },
  },
});

// Action creators are generated for each case reducer function
export const { SetEn, SetAr } = langSlice.actions;

export default langSlice.reducer;
