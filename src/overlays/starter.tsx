// react shiat
import { useEffect } from "react";
import { useState } from "react";

// styled components
import {
  StTextWrapper,
  StButton,
  StImageUploadField,
  StImagePreview,
  StIcon,
  stdBlue,
  override,
} from "../components/styledComps";

// structural components
import { Col, Row, Container } from "react-grid-system";
import { BaseOLStruct } from "../components/baseStruct";
import { FadeIn } from "../components/globalComponents";

// graphical elements
import GridLoader from "react-spinners/GridLoader";
import { FiUploadCloud } from "react-icons/fi";

// functional components
import { analyseScreenshot } from "../components/tools/pictureScan";

// the overlay component
export const Starter = () => {
  const [file, setFile]: any = useState({
    fileObj: undefined,
    changed: false,
  });

  const UploadField = () => {
    const [img, setImg]: any = useState();

    //the blue button for uploading
    const UploadButton = () => {
      // state variable for the input element
      // the input field is not displayed and is queried to be accessed
      // after the parent component is rendered in the browser
      const [inputElement, setInpEl]: any = useState();
      const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("CALLED HANDLE INPUT");
        //setImg(undefined);
        if (event.target.files) {
          setFile({ fileObj: event.target.files[0], changed: true });
        }
      };

      // load img with generated url from selected image
      useEffect(() => {
        // after rendering the component the file input gets queried to be clickable
        if (!inputElement) setInpEl(document.getElementById("file-input"));
        if (file.changed && !img) {
          console.log("changing img to file");
          const url = URL.createObjectURL(file.fileObj);
          setImg(url);
          //analyseScreenshot(url);
          //setFile({fileObj: file.fileObj, changed: false})
        }
      }, [inputElement]);

      // returning the blue button
      return (
        <StImageUploadField>
          <StTextWrapper color="light">
            <input
              accept=".png, .jpg, .jpeg, .tiff"
              id="file-input"
              type="file"
              name="name"
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log("on change");
                handleFileInput(e);
              }}
            />
            <button
              onClick={() => {
                inputElement.click();
              }}
            >
              <StIcon>
                <FiUploadCloud />
              </StIcon>
              <h2 style={{ margin: 0 }}>Click here to upload</h2>
            </button>
          </StTextWrapper>
        </StImageUploadField>
      );
    };

    // component for displaying the uploaded image
    // contains a button to remove the uploaded image
    const ImagePreview = () => {
      return (
        <FadeIn>
          <StButton
            color="warn"
            onClick={() => {
              setImg();
              setFile({
                fileObj: undefined,
                changed: false,
              });
            }}
            style={{
              position: "absolute",
              width: "80%",
              right: "10%",
              bottom: "5%",
            }}
          >
            Remove Image
          </StButton>
          <StImagePreview>
            <img src={img} alt="" />
          </StImagePreview>
        </FadeIn>
      );
    };

    //text and data to be shown next to the uploaded image
    const DetailData = () => {
      const loading = false;
      return (
        <FadeIn>
          {loading ? (
            <GridLoader
              color={stdBlue}
              loading={loading}
              css={override}
              size={30}
            />
          ) : (
            <h3>loaded</h3>
          )}
        </FadeIn>
      );
    };

    // returns the button which turns into an the image
    // preview when uploading an image
    // And the 'analysis' part which displays the information
    // about the profiles image
    return (
      <Container fluid>
        <Row>
          <Col md={6}>{img ? <ImagePreview /> : <UploadButton />}</Col>
          <Col
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <StTextWrapper align="center" color="grey">
              {img ? <DetailData /> : <h3>Upload an image to get started.</h3>}
            </StTextWrapper>
          </Col>
        </Row>
      </Container>
    );
  };


  // returns the whole overlay page constructed by the Base-Overlay-Structure
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
