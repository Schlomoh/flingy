import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAiResult,
  setInit,
} from "../stateManagement/slicesNselectors/analysisSlice";
import { useAiInitSelector } from "../stateManagement/slicesNselectors/analysisSelectors";
import Analyzer from ".";

import AnalysisWorker from "worker-loader!../dedicated_worker/aiWorker";

// initialization - hook for pre-loading the AI models
export const useInitAi = () => {
  const dispatch = useDispatch();
  const initialized = useAiInitSelector();
  const [analyzer, setAnalyzer]: any = useState();
  useEffect(() => {
    if (!initialized) {
      (async function init() {
        const a = new Analyzer();
        await a.initialize();
        dispatch(setInit(true));
        setAnalyzer(a);
      })();
    }
  });
  if (initialized && analyzer) return analyzer;
};

// hook for calling the async analyzing method
export const useAiData = (analyzer: Analyzer, imgReady: boolean) => {
  const dispatch = useDispatch();

  async function start(a: Analyzer) {
    // await a.analyze();
    if (a.result) dispatch(setAiResult(a.result));
  }
  useEffect(() => {
    if (analyzer && imgReady) {
      if (analyzer.state === "loaded") {
        start(analyzer);
      }
    }
  });
};

// using webworker
export const useAiWorker = (
  worker: AnalysisWorker,
  action: Taction,
  imgReady?: boolean,
  image?: null | string | ImageData | undefined
) => {
  const [modelReady, setReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (action) {
      case "initialize":
        if (!modelReady) worker.postMessage({ action: "initialize" });
        break;
      case "analyze":
        if (imgReady) worker.postMessage({ action: "analyze", image: image });
        break;
    }
  });
  worker.onmessage = (e) => {
    if (e.data.ready) setReady(true);
    if (e.data.result) dispatch(setAiResult(e.data.result));
  };
};
