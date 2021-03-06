import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

const initialState = {
  img: undefined,
  aiResult: undefined,
  output: undefined,
} as IanalysisInitialState;

const analysisSlice = createSlice({
  name: "analysis",
  initialState,
  reducers: {
    setImage(state, action: PayloadAction<string | undefined>) {
      state.img = action.payload as WritableDraft<IanalysisInitialState["img"]>;
    },
    setAiResult(state, action: PayloadAction<TaiResult>) {
      state.aiResult = action.payload;
    },
    setOutput(state, action: PayloadAction<Toutput>) {
      state.output = action.payload;
    },
    reset(state) {
      state.output = state.aiResult = state.img = undefined;
    },
  },
});

export const { setImage, setAiResult, setOutput, reset } =
  analysisSlice.actions;
export default analysisSlice.reducer;
