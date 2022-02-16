import { reset } from "../utils/stateManagement/slicesNselectors/analysisSlice";
import StBaseButton from "./styleComponents/base/stBaseButton";
import { useDispatch } from "react-redux";
import { FiTrash } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useEffect } from "react";

const RemoveButton = ({ onRemove }: { onRemove: CallableFunction }) => {
  const dispatch = useDispatch();
  const remove = () => {
    onRemove();
    dispatch(reset());
  };

  return (
    <StBaseButton warn position="absolute" bottom round={60} onClick={remove}>
      <IconContext.Provider value={{ size: "26px" }}>
        <FiTrash />
      </IconContext.Provider>
    </StBaseButton>
  );
};

export default RemoveButton;
