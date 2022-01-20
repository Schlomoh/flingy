import store from "../../../utils/stateManagement/store";
import StBaseContainer from "../../styleComponents/base/stBaseContainer";
import ImageField from "./imageField";
import UploadButton from "./uploadButton";

const UploadField = () => {
  const showImage = store.getState().analysis.img !== undefined;
  const content = showImage ? <ImageField /> : <UploadButton />;

  return <StBaseContainer>{content}</StBaseContainer>;
};

export default UploadField;
