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
