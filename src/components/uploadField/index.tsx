// hooks
import { useDispatch } from "react-redux";
import { useImageSelector } from "../../utils/stateManagement/slicesNselectors/analysisSelectors";

//action
import { reset } from "../../utils/stateManagement/slicesNselectors/analysisSlice";

// type
import Analyzer from "../../utils/analysis";

// components
import StUploadContainer from "../styleComponents/tailored/stUploadContainer";
import StBaseButton from "../styleComponents/base/stBaseButton";
import ImageField from "./imageField";
import UploadButton from "./uploadButton";


const RemoveButton = () => {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(reset());
  };
  return (
    <StBaseButton warn onClick={remove} inner>
      Remove Image
    </StBaseButton>
  );
};

const ImageInput = ({worker}: any) => {
  const imageLoaded = useImageSelector() !== undefined;
  return !imageLoaded ? (
    <UploadButton />
  ) : (
    <>
      <RemoveButton />
      <ImageField worker={worker} />;
    </>
  );
};

const UploadField = ({worker}: any) => {
  return (
    <StUploadContainer>
      <ImageInput worker={worker} />
    </StUploadContainer>
  );
};

export default UploadField;
