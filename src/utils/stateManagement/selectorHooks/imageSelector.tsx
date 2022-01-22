import { useSelector } from "react-redux";

export const useImageSelector = () => {
  return useSelector(
    (state: { analysis: IanalysisInitialState }) => state.analysis.img
  );
};
