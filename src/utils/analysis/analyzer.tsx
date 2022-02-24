// import blazeface from "@tensorflow-models/blazeface";
// import cocoSsd from "@tensorflow-models/coco-ssd";
// import * as tf from "@tensorflow/tfjs";

// tf.getBackend();

export async function analyzeImage(imageData: ImageData) {
  const blazeface = await import("@tensorflow-models/blazeface");
  const cocoSsd = await import("@tensorflow-models/coco-ssd");
  const { getBackend } = await import("@tensorflow/tfjs");
  console.log("loaded modules");

  getBackend();

  // Load the model.
  const bf = await blazeface.load();
  const coco = await cocoSsd.load();
  console.log("loaded models");
  // Pass in an image or video to the model. The model returns an array of
  // bounding boxes, probabilities, and landmarks, one for each detected face.

  const returnTensors = false; // Pass in `true` to get tensors back, rather than values.
  let faces = await bf.estimateFaces(imageData, returnTensors);
  let objects = await coco.detect(imageData, undefined, 0.4);

  if (faces.length == 0 && objects.length == 0) {
    faces = objects = undefined as any;
  } else
    return {
      faces: faces,
      coco: objects,
    };
  /*
      `predictions` is an array of objects describing each detected face, for example:
  
      [
        {
          topLeft: [232.28, 145.26],
          bottomRight: [449.75, 308.36],
          probability: [0.998],
          landmarks: [
            [295.13, 177.64], // right eye
            [382.32, 175.56], // left eye
            [341.18, 205.03], // nose
            [345.12, 250.61], // mouth
            [252.76, 211.37], // right ear
            [431.20, 204.93] // left ear
          ]
        }
      ]
      */
}
