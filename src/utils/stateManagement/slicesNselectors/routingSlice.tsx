import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  location: "/",
} as IroutingInitialState;

const routingSlice = createSlice({
  name: "routing",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<String>) {
      state.location = action.payload;
    },
  },
});

export const { setPage } = routingSlice.actions;
export default routingSlice.reducer;
