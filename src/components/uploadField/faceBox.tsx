//hooks
import { useCallback } from "react";
import { useBoundingBoxSelector } from "../../utils/stateManagement/slicesNselectors/analysisSelectors";

// components
import StFaceBox from "../styleComponents/tailored/stFaceBox";

function sizeCss(width: number, height: number) {
  return `
    width: ${width}px;
    height: ${height}px;
    `;
}

function posCss(x: number, y: number) {
  return `
     transform: translate(${x - 5}px, ${y - 5}px);
     `;
}

/**
 * Resize the facebox measurements since the result is based on the full scale image
 *
 * advantage being that the highRes pic has a higher probability of faces getting recognized
 *
 * This function calcs the ratio of original image (in offscreenCanvas)
 * and scaled image (in User view) and recalculates the face bounding box accordingly
 *
 *
 * @param result
 * @param sizes
 * @returns
 */
function resize(bboxes: number[], sizes: TimageSizes) {
  let 
  scalarH,
  scalarW,
    ratioOriginal,
    ratioElement,
    offsetX,
    offsetY,
    actualImageW,
    actualImageH,
    x,
    y,
    w,
    h;

  offsetX = offsetY = 0;

  // full scale bbox position and size
  let [bboxX, bboxY, bboxW, bboxH]: number[] = bboxes;

  [bboxX, bboxY, bboxX, bboxH] = [bboxX, bboxY, bboxX, bboxH].map((value) => {
    return value > 0 ? value : 0;
  });

  const [elementWidth, elementHeight] = [sizes.scaled.w, sizes.scaled.h];
  const [originalWidth, originalHeight] = [sizes.natural.w, sizes.natural.h];

  ratioOriginal = originalWidth / originalHeight;
  ratioElement = elementWidth / elementHeight;

  if (ratioOriginal >= ratioElement) {
    actualImageW = elementWidth;
    actualImageH = elementWidth / ratioOriginal;
    offsetY = (elementHeight - actualImageH) / 2;
  } else {
    actualImageW = elementHeight * ratioOriginal;
    actualImageH = elementHeight;
    offsetX = (elementWidth - actualImageW) / 2;
  }

  scalarH = originalHeight / actualImageH;
  scalarW = originalWidth / actualImageW;

  [x, y, w, h] = [
    bboxX / scalarH + offsetX,
    bboxY / scalarH + offsetY,
    bboxW / scalarH,
    bboxH / scalarW,
  ];

  return {
    size: sizeCss(w, h),
    position: posCss(x, y),
  };
}

const FaceBox = ({ sizes }: { sizes: TimageSizes | undefined }) => {
  const memResize = useCallback(resize, []);

  // iterator function for map method
  function iterate(bboxes: number[], i: number) {
    if (sizes) {
      const { size, position } = memResize(bboxes, sizes);
      return <StFaceBox key={i} faceBox={{ size: size, position: position }} />;
    }
  }

  // get ai predictions
  const boundingBoxes = useBoundingBoxSelector();

  // when predictions are available create face boxes
  const boxes = boundingBoxes ? boundingBoxes.map(iterate) : null;
  return <>{boxes}</>;
};

export default FaceBox;
