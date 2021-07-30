import { Col, Container, Row } from "react-grid-system";
import { StTextWrapper } from "../pages/Home";
import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

const StImageUploadField = styled.div``;

export const Starter = () => {
  const [inputElement, setInpEl]: any = useState();
  // after rendering the component the file input gets queried to be clickable
  useEffect(() => {
    setInpEl(document.getElementById("file-input"));
  });
  const handleFileInput: any = (event: any) => {};
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Starter</h1>;
          </Col>
        </Row>
        <Row>
          <Col>
            <StImageUploadField>
              {
                // hidden input element which calls the handle function on input
                // gets activated through click on Button linked by its id
              }

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
              <div id="input-button" onClick={inputElement.click()} />
            </StImageUploadField>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
