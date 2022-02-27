// hooks
import { MutableRefObject, useRef } from "react";
import { useDispatch } from "react-redux";
import { useImageSelector } from "../../utils/stateManagement/slicesNselectors/analysisSelectors";

// components
import StUploadContainer from "../styleComponents/tailored/stUploadContainer";
import ImageField from "./imageField";
import UploadButton from "./uploadButton";

const UploadField = () => {
  const worker: MutableRefObject<Worker | undefined> = useRef(undefined);

  const dispatch = useDispatch();

  const imageLoaded = useImageSelector() !== undefined;
  const element = !imageLoaded ? (
    <UploadButton />
  ) : (
    <ImageField dispatch={dispatch} worker={worker} />
  );
  return <StUploadContainer>{element}</StUploadContainer>;
};

export default UploadField;
