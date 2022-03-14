import { reset } from "../../utils/stateManagement/slicesNselectors/analysisSlice";
import StBaseButton from "../styleComponents/base/stBaseButton";
import { FiTrash } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useAiDataSelector } from "../../utils/stateManagement/slicesNselectors/analysisSelectors";
import store from "../../utils/stateManagement/store";

const RemoveButton = ({ onRemove }: { onRemove: CallableFunction }) => {
  const remove = () => {
    onRemove();
    store.dispatch(reset());
  };

  const aiData = useAiDataSelector();

  return aiData?.finished ? (
    <StBaseButton warn position="absolute" bottom right round={45} onClick={remove}>
      <IconContext.Provider value={{ size: "22px" }}>
        <FiTrash />
      </IconContext.Provider>
    </StBaseButton>
  ) : null;
};

export default RemoveButton;
