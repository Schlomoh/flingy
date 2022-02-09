//hooks
import { useAiDataSelector } from "../utils/stateManagement/slicesNselectors/analysisSelectors";

// components
import StFaceBox from "./styleComponents/tailored/stFaceBox";

function sizeCss(data: any) {
  return `
    width: ${data.bottomRight[0] - data.topLeft[0]}px;
    height: ${data.bottomRight[1] - data.topLeft[1] - 10}px;
    `;
}

function posCss(data: any) {
  return `
     transform: translate(${data.topLeft[0]}px, ${data.topLeft[1]}px);
     `;
}

const FaceBox = () => {
  const aiResults = useAiDataSelector();
  function iterate(result: any, i: number) {
    let size = sizeCss(result),
      position = posCss(result);
    return <StFaceBox key={i} faceBox={{ size: size, position: position }} />;
  }
  const boxes = aiResults ? aiResults.face?.map(iterate) : null;
  return <>{boxes}</>;
};

export default FaceBox;
