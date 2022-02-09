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

  predictions: {
    face: TblazefaceResult | undefined;
    coco: any;
  };

  state: "idle" | "loading" | "loaded";

  _base = { face: undefined, coco: undefined };

  // instanciating class vars
  constructor() {
    this._models = { blazeface: undefined, cocoSSD: undefined };
    this.predictions = this._base;
    this.state = "idle";
  }
  // loading models
  async initialize( bf?: any, ccssd? : any ) {
    console.log("Starting loading of models");
    this.state = "loading";
    if (!bf) bf = await blazeface.load();
    if (!ccssd) ccssd = await cocoSsd.load();
    const inits = { blazeface: bf, cocoSSD: ccssd };
    this._models = inits;
    this.state = "loaded";
    console.log("Models initialized.");
    return inits;
  }

  // analyzing image
  async analyze(image: ImageData) {
    console.log("img that the analyzer got", image);
    try {
      // Pass in `true` to get tensors back, rather than values.
      const bfPred = await this._models.blazeface.estimateFaces(image, false);
      if (bfPred.length > 0) {
        this.predictions.face = bfPred;
      }
      this.predictions.coco = await this._models.cocoSSD.detect(image);
      console.log("SUCCESS ANALYZING", this.predictions);
    } catch (e) {
      console.log("ERROR ANALYZING", e);
    }
  }

  clear() {
    this.predictions = this._base;
  }

  // returning result
  get result() {
    if (this.predictions.face) {
      return this.predictions;
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
