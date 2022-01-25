import { useSelector } from "react-redux";

type Tanalysis = { analysis: IanalysisInitialState };

export const useImageSelector = () => {
  return useSelector((state: Tanalysis) => state.analysis.img);
};

export const useFaceDataSelector = () => {
  return useSelector((state: Tanalysis) => state.analysis.aiResult);
};
