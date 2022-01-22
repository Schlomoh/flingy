import { useImageSelector } from "../../utils/stateManagement/selectorHooks/imageSelector";
import StUploadImage from "../styleComponents/tailored/stUploadImage";

const ImageField = () => {
  const img = useImageSelector();

  return (
    <StUploadImage>
      <img id="imageBG" src={img} alt="Uploaded image background" />
      <img id="uploadImage" src={img} alt="Uploaded image" />
    </StUploadImage>
  );
};

export default ImageField;
