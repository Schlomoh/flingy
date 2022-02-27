import { useDispatch } from "react-redux";
import { useShowResultSelector } from "../../utils/stateManagement/slicesNselectors/analysisSelectors";
import { setShowResult } from "../../utils/stateManagement/slicesNselectors/analysisSlice";
import BaseModal from "../baseComponents/baseModal";
import StBaseButton from "../styleComponents/base/stBaseButton";

const ResultModal = () => {
  const show = useShowResultSelector();
  const dispatch = useDispatch();
  return (
    <BaseModal show={show}>
      <StBaseButton margin='0' inner onClick={() => dispatch(setShowResult(false))}>
        Close
      </StBaseButton>
      <div>
        <h2>balbala</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui beatae
          tenetur aliquam, laborum, voluptatem architecto tempora officia enim
          possimus ducimus similique at accusamus cum. Velit deleniti
          dignissimos aliquid quibusdam itaque!
        </p>
      </div>
    </BaseModal>
  );
};

export default ResultModal;
