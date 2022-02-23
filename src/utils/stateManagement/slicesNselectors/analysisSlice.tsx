import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

const initialState = {
  img: undefined,
  aiResult: undefined,
  output: undefined,
  faces: undefined,
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
    setFaces(state, action: PayloadAction<Tfaces>) {
      state.faces = action.payload
    },
    reset(state) {
      state.output = state.aiResult = state.faces = state.img = undefined;
    },
  },
});

export const { setImage, setAiResult, setFaces, setOutput, reset } =
  analysisSlice.actions;
export default analysisSlice.reducer;
