import { useState, useEffect, useRef, MutableRefObject } from "react";
import { useDispatch } from "react-redux";
import { setAiResult } from "../stateManagement/slicesNselectors/analysisSlice";
import AnalysisWorker from "worker-loader!../dedicated_worker/aiWorker";
import { useAiDataSelector } from "../stateManagement/slicesNselectors/analysisSelectors";

// using webworker
export function useAiWorker(
  worker: {
    instance: Worker | undefined;
    action: enumActions;
    loaded: boolean;
  },
  image: null | string | ImageData | undefined
) {
  // aidata is the ai result redux state (to differentiate between the return value)

  const [response, setResponse]: any = useState();
  const [loaded, setLoaded] = useState(false);
  const aiData = useAiDataSelector();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!worker.instance && worker.action === "load") {
      console.log('called with action "load"');
      worker.instance = new AnalysisWorker();
      worker.instance.postMessage({ action: "initialize" });
    }
    if (!response && worker.action === "analyze") {
      console.log('called with action "analyze"');
      worker.instance?.postMessage({ action: "analyze", image: image });
    }
    if (response && !aiData) {
      let result = response.result;
      dispatch(setAiResult({ ...result, finished: true }));
    }

    if (worker.action === "clear") {
      worker.instance?.terminate();
    }

    if (worker.instance)
      worker.instance.onmessage = (e: MessageEvent) => {
        const [result, finished, ready] = [
          e.data.result,
          e.data.finished,
          e.data.ready,
        ];

        if (ready && !loaded) {
          setLoaded(true);
        }
        if (finished && !response)
          setResponse({
            result: result as TaiResult,
            finished: finished,
          });
      };
  });
  return loaded
}
