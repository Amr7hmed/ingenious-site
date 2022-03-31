import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
};

export const StaticContentSlice = createSlice({
  name: "StaticContent",
  initialState,
  reducers: {
    SetContent: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { SetContent } = StaticContentSlice.actions;

export default StaticContentSlice.reducer;
