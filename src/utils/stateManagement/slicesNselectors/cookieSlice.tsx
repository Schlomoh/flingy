import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

const initialState = {
  analysisCookies: false,
  advertisementCookies: false,
  showManageView: false,
} as IcookieInitialState;

const cookieSlice = createSlice({
  name: "cookies",
  initialState,
  reducers: {
    setAnalysis(state, action) {
      state.analysisCookies = action.payload;
    },

    setAdvertisement(state, action) {
      state.advertisementCookies = action.payload;
    },
  },
});

export default cookieSlice.reducer;
