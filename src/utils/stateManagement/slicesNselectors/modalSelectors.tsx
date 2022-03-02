import { useSelector } from "react-redux";

export const useShowResultSelector = () => {
  return useSelector(
    (state: { modal: ImodalInitialState }) => state.modal.showResult
  );
};
