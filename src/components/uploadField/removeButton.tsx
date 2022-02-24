import { reset } from "../../utils/stateManagement/slicesNselectors/analysisSlice";
import StBaseButton from "../styleComponents/base/stBaseButton";
import { FiTrash } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Dispatch } from "@reduxjs/toolkit";
import { useAiDataSelector } from "../../utils/stateManagement/slicesNselectors/analysisSelectors";

const RemoveButton = ({ onRemove, dispatch }: { onRemove: CallableFunction, dispatch: Dispatch}) => {
  const remove = () => {
    onRemove();
    dispatch(reset());
  };

  const aiData = useAiDataSelector()

  return aiData?.finished ? (
    <StBaseButton warn position="absolute" bottom round={45} onClick={remove}>
      <IconContext.Provider value={{ size: "22px" }}>
        <FiTrash />
      </IconContext.Provider>
    </StBaseButton>
  ) : null
};

export default RemoveButton;
