// styled component
import StUploadImage from "../styleComponents/tailored/stUploadImage";
import StFaceBox from "../styleComponents/tailored/stFaceBox";

// hooks
import { useFaceData } from "../../utils/analysis/aiHooks/useFaceData";
import {
  useFaceDataSelector,
  useImageSelector,
} from "../../utils/stateManagement/selectorHooks/analysisSelectors";

function sizeCss(data: any) {
  return `
  width: ${data.bottomRight[0] - data.topLeft[0] - 10}px;
  height: ${data.bottomRight[1] - data.topLeft[1] - 10}px;
  `;
}

function posCss(data: any) {
  return `
   transform: translate(${data.topLeft[0]}px, ${data.topLeft[1] + 10}px);
   `;
}

const FaceBox = () => {
  const aiResults = useFaceDataSelector();
  function iterate(result: any, i: number) {
    let size = sizeCss(result),
      position = posCss(result);
    return <StFaceBox key={i} faceBox={{ size: size, position: position }} />;
  }
  const boxes = aiResults ? aiResults.map(iterate) : null;
  return <>{boxes}</>;
};

/**
 * Displays the given image and calls the analyzer on it
 */
const ImageField = () => {
  useFaceData();
  const img = useImageSelector();
  return (
    <StUploadImage>
      <FaceBox />
      <img id="imageBG" src={img} alt="Uploaded image background" />
      <img id="uploadImage" src={img} alt="Uploaded image" />
    </StUploadImage>
  );
};

export default ImageField;
