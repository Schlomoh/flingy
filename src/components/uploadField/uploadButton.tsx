// types & react hooks
import { ChangeEvent, LegacyRef, useRef } from "react";

// redux functionality
import { setImage } from "../../utils/stateManagement/slicesNselectors/analysisSlice"; // action
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
function handleInput(e: ChangeEvent<HTMLInputElement>) {
  const files = e.target.files;
  if (files !== null) {
    const fileUrl = URL.createObjectURL(files[0]);
    store.dispatch(setImage(fileUrl));
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
  const ref: LegacyRef<HTMLInputElement> = useRef(null);

  return (
    <StUploadButton>
      <button id="uploadButton" onClick={() => ref.current?.click()}>
        <img src={plus} alt="add image" />
      </button>
      <input
        id="imageInput"
        accept="image/*"
        type="file"
        onInput={(e: ChangeEvent<HTMLInputElement>) => handleInput(e)}
        ref={ref}
      />
    </StUploadButton>
  );
};
export default UploadButton;
