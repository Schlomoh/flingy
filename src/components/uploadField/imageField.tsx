// components
import StUploadImage from "../styleComponents/tailored/stUploadImage";
import FaceBox from "./faceBox";

// hooks
import {
  useAiDataSelector,
  useBoundingBoxSelector,
  useImageSelector,
} from "../../utils/stateManagement/slicesNselectors/analysisSelectors";
import { useAnalyzer } from "../../utils/analysis/useAiWorker";

import {
  useRef,
  LegacyRef,
  MutableRefObject,
  useState,
  useEffect,
} from "react";
import Loader from "./loader";
import RemoveButton from "./removeButton";
import { NoResultsImage } from "../resultItems/noResults";
import { Dispatch } from "@reduxjs/toolkit";

/**
 * Displays the given image and calls the analyzer on it
 */
const ImageField = ({
  worker,
  dispatch,
}: {
  worker: MutableRefObject<Worker | undefined>;
  dispatch: Dispatch;
}) => {
  //selectors
  const aiPredictions = useAiDataSelector();
  const imgUrl = useImageSelector();
  const boundingBoxes = useBoundingBoxSelector();
  // upload image reference
  const image: LegacyRef<HTMLImageElement> = useRef(null);
  // states
  const [imageSizes, setImageSizes] = useState<TimageSizes | undefined>();
  const [imageData, setImageData] = useState<ImageData | undefined>();
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  let canvas: OffscreenCanvas | undefined;

  if (imageSizes) {
    canvas = new OffscreenCanvas(imageSizes.natural.w, imageSizes.natural.h);
  }
// create imageData for the analyzer
  useEffect(() => {
    if (image.current && !imageSizes && imageLoaded) {
      const [width, height, scaledWidth, scaledHeight] = [
        image.current.naturalWidth,
        image.current.naturalHeight,
        image.current?.width,
        image.current?.height,
      ];

      setImageSizes({
        natural: { w: width, h: height },
        scaled: { w: scaledWidth, h: scaledHeight },
      });
    }
    if (canvas && imageSizes && !imageData && image.current) {
      // canvas.width = imageSizes?.natural.w;
      // canvas.width = imageSizes?.natural.h;
      let ctx = canvas.getContext("2d");
      ctx?.drawImage(image.current, 0, 0);
      let imgData = ctx?.getImageData(
        0,
        0,
        imageSizes.natural.w,
        imageSizes.natural.h
      );
      setImageData(imgData);
    }
  });

  // call analyzer hook with worker instance
  useAnalyzer(worker, imageData, dispatch);

  const Overlay = () => {
    return !aiPredictions?.finished ? (
      <Loader />
    ) : boundingBoxes && boundingBoxes.length > 0 ? (
      <FaceBox sizes={imageSizes} />
    ) : (
      <NoResultsImage />
    );
  };

  return (
    <StUploadImage>
      <Overlay />
      <RemoveButton onRemove={() => {}} dispatch={dispatch} />
      <img id="imageBG" src={imgUrl} alt="Uploaded image background" />
      <img
        ref={image}
        onLoad={() => {
          setImageLoaded(true);
        }}
        id="uploadImage"
        src={imgUrl}
        alt="Uploaded image"
      />
    </StUploadImage>
  );
};

export default ImageField;
