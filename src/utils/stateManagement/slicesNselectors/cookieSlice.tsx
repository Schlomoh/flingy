import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

const initialState = {} as IcookieInitialState;

const cookieSlice = createSlice({
  name: "cookies",
  initialState,
  reducers: {
    setAnalysis(state, action) {
        
    },
  },
});

export default cookieSlice.reducer;
