// dat back-end shiat
import(/* webpackPrefetch: true */ "@tensorflow/tfjs-backend-cpu");
import(/* webpackPrefetch: true */ "@tensorflow/tfjs-backend-webgl");

// import * as blazeface from "@tensorflow-models/blazeface";
// import * as cocoSsd from "@tensorflow-models/coco-ssd";

async function dynImport() {
  const blazeface = await import("@tensorflow-models/blazeface");
  const cocoSsd = await import("@tensorflow-models/coco-ssd");
  return [blazeface, cocoSsd];
}

class Analyzer {
  // sum types
  // models
  _models: {
    blazeface: any;
    cocoSSD: any;
  };

  predictions: {
    faces: TblazefaceResult | undefined;
    coco: any;
  };

  state: "idle" | "loading" | "loaded";

  _base = { faces: undefined, coco: undefined };

  constructor() {
    this._models = { blazeface: undefined, cocoSSD: undefined };
    this.predictions = this._base;
    this.state = "idle";
  }

  // loading models
  async initialize(bf?: any, ccssd?: any) {
    console.log("Loading models...");
    this.state = "loading";

    // lib import
    const [libBf, libCoco] = await dynImport();

    //loading
    if (!bf) bf = await libBf.load()
    if (!ccssd) ccssd = await libCoco.load();

    // object of the initialized models
    const inits = { blazeface: bf, cocoSSD: ccssd };
    this._models = inits;
    this.state = "loaded";
    console.log("Models initialized.");
    return inits;
  }

  // analyzing image
  async analyze(image: ImageData) {
    console.log("\nImage to analyze: ", image, "\n");
    try {
      // Pass in `true` to get tensors back, rather than values.
      const bfPred = await this._models.blazeface.estimateFaces(image, false);
      if (bfPred.length > 0) {
        this.predictions.faces = bfPred;
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
    if (this.predictions.faces) {
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
