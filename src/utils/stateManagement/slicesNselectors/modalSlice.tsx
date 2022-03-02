import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showResult: { show: false, id: 0 },
} as ImodalInitialState;

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setShowResult(state, action) {
      state.showResult = action.payload;
    },
  },
});

export const { setShowResult } = modalSlice.actions;

export default modalSlice.reducer;
