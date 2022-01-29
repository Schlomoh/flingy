import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  setAiResult,
  setInit,
} from "../stateManagement/slicesNselectors/analysisSlice";
import { useAiInitSelector } from "../stateManagement/slicesNselectors/analysisSelectors";
import Analyzer from ".";

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
export const useAiData = (analyzer: Analyzer, imgReady : boolean) => {
  const dispatch = useDispatch();

  async function start(a: Analyzer) {
    await a.analyze();
    if (a.result) dispatch(setAiResult(a.result));
  }

  console.log("gone into hook");
  useEffect(() => {
    console.log("gone into effect");
    console.log("gibts den analyzer? ", analyzer !== undefined);
    if (analyzer) {
      console.log("analyzer present");
      if (analyzer.state === "loaded" && imgReady) {
        console.log("analyzer state == 'loaded'");
        start(analyzer);
      }
    }
  });
};
