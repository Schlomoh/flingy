// dat back-end shiat
import "@tensorflow/tfjs-backend-webgl";
import "@tensorflow/tfjs-backend-cpu";

import * as blazeface from "@tensorflow-models/blazeface";
import * as cocoSsd from "@tensorflow-models/coco-ssd";

class Analyzer {
  // sum types
  _models: {
    blazeface: any;
    cocoSSD: any;
  };

  _predictions: {
    face: TblazefaceResult | undefined;
    coco: any;
  };

  state: "idle" | "loading" | "loaded";

  // instanciating class vars
  constructor() {
    this._models = { blazeface: undefined, cocoSSD: undefined };
    this._predictions = { face: undefined, coco: undefined };
    this.state = "idle";
  }
  // loading models
  async initialize() {
    this.state = "loading";
    const bf = await blazeface.load();
    const coco = await cocoSsd.load();
    this._models = { blazeface: bf, cocoSSD: coco };
    this.state = "loaded";
    console.log("Models initialized.");
  }

  // analyzing image
  async analyze() {
    const image = document.getElementById("uploadImage");
    console.log('img that the analyzer got', image)
    if (image) {
      try {
        // Pass in `true` to get tensors back, rather than values.
        const bfPred = await this._models.blazeface.estimateFaces(image, false);
        if (bfPred.length > 0) {
          this._predictions.face = bfPred;
        }
        this._predictions.coco = await this._models.cocoSSD.detect(image);
        console.log("SUCCESS ANALYZING", this._predictions);
      } catch (e) {
        console.log("ERROR ANALYZING", e);
      }
    } else console.log("No image defined... dork");
  }

  // returning result
  get result() {
    if (this._predictions.face) {
      return this._predictions;
    }
  }
}

// usage

/*
const a = new Analyzer();
const f = async () => {
  await a.initialize();
  await a.analyze();
  const { face, coco } = a.result;
};
*/

export default Analyzer;
