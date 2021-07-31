import { StTextWrapper } from "../pages/Home";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { BaseOLStruct } from "./baseStruct";

const StImageUploadField = styled.div`
  #input-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
    height: 50vh;
    border-radius: 20px;
    padding: 30px;
    margin-top: 50px;
    text-align: center;
    background-color: #62bcec;
    cursor: pointer;
    filter: drop-shadow(0 5px 20px rgba(0, 0, 0, 0.2));
    transition: background-color ease-in-out 0.2s;
    :active {
      background-color: grey;
    }
  }
`;

const StIcon = styled.div`
  svg,
  path,
  line,
  polyline {
    color: white;
    height: 48px;
    width: 48px;
    margin-bottom: 20px;
  }
`;

export const Starter = () => {
  // state for the input element to be stored in
  const [inputElement, setInpEl]: any = useState();

  // after rendering the component the file input gets queried to be clickable
  useEffect(() => {
    setInpEl(document.getElementById("file-input"));
  }, []);

  const handleFileInput: any = (event: any) => {};
  const UploadField = () => (
    <StImageUploadField>
      {
        // hidden input element which calls the handle function on input
        // gets activated through click on Button linked by its id
      }
      <StTextWrapper color="light">
        <input
          accept=".png, .jpg, .jpeg, .tiff"
          id="file-input"
          type="file"
          style={{ display: "none" }}
          onInput={(e) => handleFileInput(e)}
        />
        {
          // sort of a huge button which should display the image on input
          // activates the input element on click
        }
        <div
          id="input-button"
          onClick={() => {
            inputElement.click();
          }}
        >
          <StIcon>
            <FiUploadCloud />
          </StIcon>
          <h2 style={{ margin: 0 }}>Click here to upload</h2>
        </div>
      </StTextWrapper>
    </StImageUploadField>
  );

  return (
    <BaseOLStruct title="Starter" magicElement={<UploadField />}>
      <StTextWrapper color={"grey"}>
        <p>
          Upload a <strong>screenshot of the persons profile</strong> and wait a
          few seconds to let the algorithm do its magic. Thats it!{" "}
        </p>
        <p>
          If you upload a a profile picture with multiple people, you will have
          to <strong> select the person you want analysed.</strong>
        </p>
        <p>
          After that,{" "}
          <strong>
            {" "}
            the Ai will present you the recommended starting message{" "}
          </strong>{" "}
          based on the person selected. {String.fromCodePoint(0x1f9e0)}
        </p>
      </StTextWrapper>
    </BaseOLStruct>
  );
};
