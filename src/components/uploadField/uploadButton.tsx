// types & react hooks
import { ChangeEvent, MutableRefObject, useRef } from "react";

// redux functionality
import { useDispatch } from "react-redux"; // hook
import { Dispatch } from "@reduxjs/toolkit"; // type
import { setImage } from "../../utils/stateManagement/slices/analysisSlice"; // action
import store from "../../utils/stateManagement/store"; // state tree

//content
import plus from "../../content/assets/plus.png";

//style
import StUploadButton from "../styleComponents/tailored/stUploadButton";

/**
 * Handles the input file
 *
 * Registers the corresponding data url in the redux store
 *
 * @param e - input event‚
 */
function handleInput(e: ChangeEvent<HTMLInputElement>, dispatch: Dispatch) {
  const files = e.target.files;
  if (files !== null) {
    const fileUrl = URL.createObjectURL(files[0]);
    dispatch(setImage(fileUrl));
    console.log("dispatch log", store.getState().analysis.img);
  }
}

/**
 *
 * Contains an invisible input to handle the import of an image file
 * The input gets triggered by a button acting as the input
 *
 * Calls the 'handle' input function on input
 */
const UploadButton = (): JSX.Element => {
  const ref = useRef() as MutableRefObject<HTMLInputElement>;
  const dispatch = useDispatch();

  return (
    <StUploadButton>
      <button id="uploadButton" onClick={() => ref.current.click()}>
          <img src={plus} alt="add image" />
      </button>
      <input
        id="imageInput"
        accept="image/*"
        type="file"
        onInput={(e: ChangeEvent<HTMLInputElement>) => handleInput(e, dispatch)}
        ref={ref}
      />
    </StUploadButton>
  );
};
export default UploadButton;
