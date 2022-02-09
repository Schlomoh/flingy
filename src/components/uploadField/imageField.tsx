// components
import StUploadImage from "../styleComponents/tailored/stUploadImage";
import FaceBox from "../faceBox";

// hooks
import { useImageSelector } from "../../utils/stateManagement/slicesNselectors/analysisSelectors";
import { useAiWorker } from "../../utils/analysis/useAiData";

//import for type
import { useRef, useState, LegacyRef } from "react";

/**
 * Displays the given image and calls the analyzer on it
 */
const ImageField = ({ worker }: any) => {
  let imageData;
  const [imgReady, setReady] = useState(false);
  const imgUrl = useImageSelector();
  const image: LegacyRef<HTMLImageElement> = useRef(null);

  if (image.current) {
    const [width, height] = [image.current.width, image.current.height];
    const canvas = new OffscreenCanvas(width, height);
    const ctx = canvas.getContext("2d");
    ctx?.drawImage(image.current, 0, 0);
    imageData = ctx?.getImageData(0, 0, width, height);
  }

  useAiWorker(worker, "analyze", imgReady, imageData);

  return (
    <StUploadImage>
      <FaceBox />
      <img id="imageBG" src={imgUrl} alt="Uploaded image background" />
      <img
        ref={image}
        onLoad={() => setReady(true)}
        id="uploadImage"
        src={imgUrl}
        alt="Uploaded image"
      />
    </StUploadImage>
  );
};

export default ImageField;
