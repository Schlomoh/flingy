import { Col, Container, Row } from "react-grid-system";
import { StTextWrapper } from "../pages/Home";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";

const StImageUploadField = styled.div`
  #input-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto;
    height: 30vh;
    border-radius: 10px;
    padding: 30px;
    margin-top: 50px;
    text-align: center;
    background-color: #62bcec;
    cursor: pointer;
    filter: drop-shadow(0 5px 20px rgba(0, 0, 0, 0.2));
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
  return (
    <div style={{ padding: "0 30px 48px 30px" }}>
      <Container fluid>
        <Row>
          <Col>
            <h2>
              Starter
              <br />
            </h2>
            <p>Uplod your screenshot and let it get analysed.</p>
          </Col>
        </Row>
        <Row>
          <Col>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};
