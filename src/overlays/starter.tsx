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
  StDetailData,
  stdBlue,
  override,
  FaceBox,
} from "../components/styledComps";

// structural components
import { Col, Row, Container } from "react-grid-system";
import { BaseOLStruct } from "../components/baseStruct";
import { FadeIn } from "../components/globalComponents";

// graphical elements
import GridLoader from "react-spinners/GridLoader";
import { FiUploadCloud } from "react-icons/fi";

// functional components
//
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

          //setFile({fileObj: file.fileObj, changed: false})
        }
      }, [inputElement]);

      // returning the blue button
      return (
        <StImageUploadField>
          <StTextWrapper fat color="light">
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

    const [AIresult, setAIresult]: any = useState();
    const [people, setPeople]: any = useState({});
    const [select, setSelect]: any = useState(undefined);
    const ImagePreview = () => {
      const getDots = () => {
        let dots: any = [];
        let new_p = people;
        for (let i = 0; i < AIresult.length; i++) {
          dots.push(
            <FaceBox
              onClick={(e: any) => {
                setSelect(i);
                console.log(select);
                console.log(people[i]);
              }}
              key={i}
              left={AIresult[i].landmarks[2][0]}
              top={AIresult[i].landmarks[2][1]}
            />
          );

          new_p[i] = { key: i, message: `you are so beautiful n${i + 1}` };
          setPeople(new_p);
        }
        return dots;
      };
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
            <div>
              {AIresult ? getDots() : null}
              <img id="uploadImage" src={img} alt=""></img>
            </div>
          </StImagePreview>
        </FadeIn>
      );
    };

    //text and data to be shown next to the uploaded image
    const DetailData = () => {
      async function getAIdata() {
        setAIresult(await Promise.resolve(analyseScreenshot()));
      }
      useEffect(() => {
        if (!AIresult) {
          getAIdata();
        } else {
          console.log(AIresult);
        }
      });
      const loading = AIresult === undefined ? true : false;
      return (
        <StDetailData>
          {loading ? (
            <FadeIn>
              <GridLoader
                color={stdBlue}
                loading={loading}
                css={override}
                size={20}
              />
            </FadeIn>
          ) : (
            <FadeIn>
              {select !== undefined ? (
                <StTextWrapper color="grey" align="center">
                  <p>{people[select].message}</p>
                </StTextWrapper>
              ) : (
                <StTextWrapper fat color="grey" align="center">
                  <h3>Select a face :)</h3>
                </StTextWrapper>
              )}
            </FadeIn>
          )}
        </StDetailData>
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
            {img ? (
              <DetailData />
            ) : (
              <StTextWrapper fat align="center" color="grey">
                <p>Upload an image to get started.</p>
              </StTextWrapper>
            )}
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
          After uploading the profile picture, an AI will scan the image and you
          will have to <strong> select the person you want to analyse </strong>
          further.
        </p>
        <p>
          After that,{" "}
          <strong>
            {" "}
            the algorithm will present you a recommended starting message{" "}
          </strong>{" "}
          based on the person selected. {String.fromCodePoint(0x1f9e0)}
        </p>
      </StTextWrapper>
    </BaseOLStruct>
  );
};
