import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

const initialState = {
  img: undefined,
  aiResult: undefined,
  messages: undefined,
} as IanalysisInitialState;

const analysisSlice = createSlice({
  name: "analysis",
  initialState,
  reducers: {
    setImage(state, action: PayloadAction<HTMLImageElement | String>) {
      state.img = action.payload as WritableDraft<IanalysisInitialState["img"]>;
    },
    setAiResult(state, action: PayloadAction<TaiResult>) {
      state.aiResult = action.payload;
    },
    setMessages(state, action: PayloadAction<Toutput>) {
      state.messages = action.payload;
    },
  },
});

export const { setImage } = analysisSlice.actions;
export default analysisSlice.reducer;
