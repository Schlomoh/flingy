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
import store from "../../utils/stateManagement/store";

const RemoveButton = () => {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(reset());
    console.log(store.getState())
  };
  return (
    <StBaseButton warn onClick={remove} inner>
      Remove Image
    </StBaseButton>
  );
};

const ImageInput = ({props}: any) => {
  const imageLoaded = useImageSelector() !== undefined;
  const { analyzer }: { analyzer: Analyzer } = props;
  return !imageLoaded ? (
    <UploadButton />
  ) : (
    <>
      <RemoveButton />
      <ImageField analyzer={analyzer} />;
    </>
  );
};

const UploadField = (props: any) => {
  return (
    <StUploadContainer>
      <ImageInput props={props} />
    </StUploadContainer>
  );
};

export default UploadField;
