// hooks
import { MutableRefObject } from "react";
import { useImageSelector } from "../../utils/stateManagement/slicesNselectors/analysisSelectors";

// components
import StUploadContainer from "../styleComponents/tailored/stUploadContainer";
import ImageField from "./imageField";
import UploadButton from "./uploadButton";

const UploadField = (  {worker}: {worker: MutableRefObject<Worker | undefined> } ) => {

  const imageLoaded = useImageSelector() !== undefined;
  const element = !imageLoaded ? (
    <UploadButton />
  ) : (
    <ImageField worker={worker} />
  );
  return <StUploadContainer>{element}</StUploadContainer>;
};

export default UploadField;
