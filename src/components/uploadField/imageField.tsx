// components
import StUploadImage from "../styleComponents/tailored/stUploadImage";
import FaceBox from "../faceBox";

// hooks
import {
  useAiDataSelector,
  useImageSelector,
} from "../../utils/stateManagement/slicesNselectors/analysisSelectors";
import { useAiWorker } from "../../utils/analysis/useAiWorker";

import {
  useRef,
  LegacyRef,
  MutableRefObject,
  useEffect,
  useState,
  SetStateAction,
  Dispatch,
} from "react";
import Loader from "../loader";
import RemoveButton from "../removeButton";
import { NoResultsImage } from "../noResults";

/**
 * Displays the given image and calls the analyzer on it
 */

const ImageField = ({
  worker,
}: {
  worker: MutableRefObject<{
    instance: Worker | undefined;
    action: enumActions;
    loaded: boolean;
  }>;
}) => {
  // img shiat
  type TimageDataState = [
    ImageData | undefined,
    Dispatch<SetStateAction<ImageData | undefined>>
  ];

  const aiPredictions = useAiDataSelector();
  const imgUrl = useImageSelector();
  const image: LegacyRef<HTMLImageElement> = useRef(null);
  const [imageData, setImageData]: TimageDataState = useState();

  let imageSizes: TimageSizes;

  console.log("In image effect", image.current);
  useEffect(() => {
    if (image.current) {
      console.log("Image.current: ", image.current);
      // get bot image sizes to calculate new bbox from full scale image
      const [width, height, scaledWidth, scaledHeight] = [
        image.current.naturalWidth,
        image.current.naturalHeight,
        image.current.width,
        image.current.height,
      ];

      imageSizes = {
        natural: { w: width, h: height },
        scaled: { w: scaledWidth, h: scaledHeight },
      };
    }
  });
  // create offscreen canvas to get imagedata
  //
  // worker has no access to dom or window so
  // either fetch image again or pass in the right type of data
  if (image.current) {
    let canvas = new OffscreenCanvas(
      image.current.naturalWidth,
      image.current.naturalHeight
    );
    let ctx = canvas.getContext("2d");
    if (!imageData && ctx) {
      console.log("not image Data. ctx is present");
      ctx.drawImage(image.current, 0, 0);
      console.log(ctx);
      setImageData(
        ctx.getImageData(
          0,
          0,
          image.current.naturalWidth,
          image.current.naturalHeight
        )
      );
    }
  }

  useEffect(() => {
    if (worker.current.loaded) {
      worker.current.action = "analyze";
    }
  });

  worker.current.loaded = useAiWorker(worker.current, imageData);

  function clear() {
    setImageData(undefined);
    worker.current.action = "clear";
  }

  const Overlay = () => {
    return !aiPredictions?.finished ? (
      <Loader />
    ) : aiPredictions.coco && aiPredictions.faces ? (
      <FaceBox sizes={imageSizes} />
    ) : (
      <NoResultsImage />
    );
  };

  return (
    <StUploadImage>
      <Overlay />
      <RemoveButton onRemove={clear} />
      <img id="imageBG" src={imgUrl} alt="Uploaded image background" />
      <img ref={image} id="uploadImage" src={imgUrl} alt="Uploaded image" />
    </StUploadImage>
  );
};

export default ImageField;
