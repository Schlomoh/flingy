import { useEffect } from "react";
import store from "../../../utils/stateManagement/store";
import StUploadImage from "../../styleComponents/tailored/stUploadImage";

const ImageField = () => {
  let img: any;
  useEffect(() => {
    store.subscribe(() => {
      img = store.getState().analysis.img;
      console.log("image field", img);
    });
  });

  return (
    <StUploadImage>
      <img src={img} alt="Uploaded image" />
    </StUploadImage>
  );
};

export default ImageField;
