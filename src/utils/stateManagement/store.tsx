import { configureStore } from "@reduxjs/toolkit";

// slices
import analysisSlice from "./slicesNselectors/analysisSlice";
import cookieSlice from "./slicesNselectors/cookieSlice";
import routingSlice from "./slicesNselectors/routingSlice";

const store = configureStore({
  reducer: {
    analysis: analysisSlice,
    cookies: cookieSlice,
    rounting: routingSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
