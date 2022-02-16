// hooks
import { MutableRefObject, useRef } from "react";
import { useImageSelector } from "../../utils/stateManagement/slicesNselectors/analysisSelectors";

// components
import StUploadContainer from "../styleComponents/tailored/stUploadContainer";
import ImageField from "./imageField";
import UploadButton from "./uploadButton";

const ImageInput = () => {
  const worker: MutableRefObject<{
    instance: Worker | undefined;
    action: enumActions;
    loaded: boolean;
  }> = useRef({ instance: undefined, action: "load", loaded: false });
  const imageLoaded = useImageSelector() !== undefined;
  return !imageLoaded ? <UploadButton /> : <ImageField worker={worker} />;
};

const UploadField = () => {
  return (
    <StUploadContainer>
      <ImageInput />
    </StUploadContainer>
  );
};

export default UploadField;
