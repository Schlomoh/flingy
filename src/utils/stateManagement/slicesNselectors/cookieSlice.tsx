import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

const initialState = {
  selection: { analysis: false, advertisement: false },
  showManageView: false,
  showModal: false
} as IcookieInitialState;

const cookieSlice = createSlice({
  name: "cookies",
  initialState,
  reducers: {
    setCookieSelection(state, action) {
      state.selection = action.payload;
    },
    setShowManageView(state, action) {
      state.showManageView = action.payload;
    },
    setShowCookieModal(state, action) {
      state.showModal = action.payload
    }
  },
});

export const { setCookieSelection, setShowManageView, setShowCookieModal} = cookieSlice.actions;

export default cookieSlice.reducer;
