// react
import { useEffect, MutableRefObject } from "react";
// state management
import { setAiResult } from "../stateManagement/slicesNselectors/analysisSlice";
import { useAiDataSelector } from "../stateManagement/slicesNselectors/analysisSelectors";
//worker
import AnalysisWorker from "worker-loader!../dedicated_worker/aiWorker";
import useCreateOutput from "./createOutput";
import store from "../stateManagement/store";

export const useAnalyzer = (
  worker: MutableRefObject<Worker | undefined>,
  image: null | string | ImageData | undefined
) => {
  const aiData = useAiDataSelector();
  useCreateOutput();

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
        if (result) store.dispatch(setAiResult({ ...result, finished: true }));
        result = undefined;
      };
    }
  });
};
