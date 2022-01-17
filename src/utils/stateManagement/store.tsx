import { configureStore } from "@reduxjs/toolkit";

// slices
import analysisSlice from "./slices/analysisSlice";
import cookieSlice from "./slices/cookieSlice";
import routingSlice from "./slices/routingSlice";

const store = configureStore({
  reducer: {
    three: analysisSlice,
    one: cookieSlice,
    two: routingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
