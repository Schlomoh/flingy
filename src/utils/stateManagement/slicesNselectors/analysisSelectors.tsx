import { useSelector } from "react-redux";

export const useImageSelector = () => {
  return useSelector((state: Tanalysis) => state.analysis.img);
};

export const useAiDataSelector = () => {
  return useSelector((state: Tanalysis) => state.analysis.aiResult);
};

export const useBoundingBoxSelector = () => {
  return useSelector((state: Tanalysis) => {
    return state.analysis.aiResult?.faces?.map((face) => {
      let [bboxX, bboxY] = [face.topLeft[0], face.topLeft[1]];
      let [bboxW, bboxH] = [
        face.bottomRight[0] - face.topLeft[0],
        face.bottomRight[1] - face.topLeft[1],
      ];
      let probability = face.probability[0];
      return [bboxX, bboxY, bboxW, bboxH, probability];
    });
  });
};
