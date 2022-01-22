import { useImageSelector } from "../../utils/stateManagement/selectorHooks/imageSelector";

import StBaseContainer from "../styleComponents/base/stBaseContainer";
import StUploadContainer from "../styleComponents/tailored/stUploadContainer";
import ImageField from "./imageField";
import UploadButton from "./uploadButton";

const UploadField = () => {
  const ImageInput = () => {
    const imageLoaded = useImageSelector() !== undefined;
    return !imageLoaded ? <UploadButton /> : <ImageField />;
  };

  return (
    <StUploadContainer>
      <ImageInput />
    </StUploadContainer>
  );
};

export default UploadField;
