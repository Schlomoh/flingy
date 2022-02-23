import Analyzer from "../analysis";

// async function load(a: Analyzer) {
//   await a.initialize();
//   postMessage({ ready: true });
// }

// async function analyze(a: Analyzer, image: ImageData) {
//   await a.analyze(image);
//   const result = a.result;
//   a.clear();
//   postMessage({ result: result, finished: true });
// }

// {
//   const ctx: Worker = self as any;
//   let analyzer: Analyzer;

//   ctx.onmessage = (event: MessageEvent) => {
//     const [action, image] = [event.data.action, event.data.image];

//     if (!analyzer) analyzer = new Analyzer();

//     switch (action) {
//       case "initialize":
//         if (!(analyzer.state === "loading" || analyzer.state === "loaded"))
//           load(analyzer);
//         break;
//       case "analyze":
//         if (image && analyzer.state === "loaded") analyze(analyzer, image);
//         break;
//     }
//   };
// }

import { analyzeImage } from "../analysis/analyzer";

const worker = self as any;

async function getResult(img: ImageData) {
  worker.postMessage({ result: await analyzeImage(img) });
}

worker.onmessage = (e: MessageEvent) => {
  const img = e.data[0].image;
  if (img) getResult(img);
};

export {};
