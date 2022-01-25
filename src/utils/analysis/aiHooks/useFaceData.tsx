import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAiResult } from "../../stateManagement/slices/analysisSlice";
import getFaceData from "../analysisModules/getFaceData";

export const useFaceData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getResult();

    async function getResult() {
      const result = await Promise.resolve(getFaceData());
      if (result) dispatch(setAiResult(result));
    }
  });
};
