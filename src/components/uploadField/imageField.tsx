// components
import StUploadImage from "../styleComponents/tailored/stUploadImage";
import FaceBox from "../faceBox";

// hooks
import { useImageSelector } from "../../utils/stateManagement/slicesNselectors/analysisSelectors";
import { useAiData } from "../../utils/analysis/useAiData";

//import for type
import Analyzer from "../../utils/analysis";
import { useState } from "react";

/**
 * Displays the given image and calls the analyzer on it
 */
const ImageField = ({ analyzer }: { analyzer: Analyzer }) => {
  const [imgReady, setReady] = useState(false);
  const img = useImageSelector();

  // pass in the initialized analyzer class
  console.log("reloaded");
  useAiData(analyzer, imgReady);

  return (
    <StUploadImage>
      <FaceBox />
      <img
        id="imageBG"
        onLoad={() => setReady(true)}
        src={img}
        alt="Uploaded image background"
      />
      <img id="uploadImage" src={img} alt="Uploaded image" />
    </StUploadImage>
  );
};

export default ImageField;
