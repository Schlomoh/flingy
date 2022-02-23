// react
import { useEffect, MutableRefObject } from "react";
// type
import { Dispatch } from "@reduxjs/toolkit";
// state management
import { setAiResult } from "../stateManagement/slicesNselectors/analysisSlice";
import { useAiDataSelector } from "../stateManagement/slicesNselectors/analysisSelectors";
//worker
import AnalysisWorker from "worker-loader!../dedicated_worker/aiWorker";

export const useAnalyzer = (
  worker: MutableRefObject<Worker | undefined>,
  image: null | string | ImageData | undefined,
  dispatch: Dispatch
) => {
  const aiData = useAiDataSelector();

  useEffect(() => {
    if (!worker.current) {
      worker.current = new AnalysisWorker();
    }

    if (!aiData && image) {
      worker.current.postMessage([{ image: image }]);
    }
    if (worker.current) {
      worker.current.onmessage = (e: MessageEvent) => {
        let result = e.data.result;
        if (result) dispatch(setAiResult({ ...result, finished: true }));
        result = undefined;
      };
    }
  });
};
