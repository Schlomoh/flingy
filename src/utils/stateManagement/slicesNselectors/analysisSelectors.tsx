import { useSelector } from "react-redux";

type Tanalysis = { analysis: IanalysisInitialState };

export const useImageSelector = () => {
  return useSelector((state: Tanalysis) => state.analysis.img);
};

export const useAiDataSelector = () => {
  return useSelector((state: Tanalysis) => state.analysis.aiResult);
};

export const useAiInitSelector = () => {
  return useSelector((state: Tanalysis) => state.analysis.init);
};
