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
  StFaceBox,
} from "../../components/styledComps";

// structural components
import { Col, Row, Container } from "react-grid-system";
import { BaseOLStruct } from "../../components/baseStruct";
import { FadeIn, PopIn } from "../../components/globalComponents";

// graphical elements
import GridLoader from "react-spinners/GridLoader";
import { FiUploadCloud } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";

// functional components
//
import { analyseScreenshot } from "../../components/tools/pictureScan";

// the overlay component
export const Starter = () => {
  const [file, setFile]: any = useState({
    fileObj: undefined,
    changed: false,
  });

  const [img, setImg]: any = useState();

  //the blue button for uploading
  const UploadButton = () => {
    // state variable for the input element
    // the input field is not displayed and is queried to be accessed
    // after the parent component is rendered in the browser
    const [inputElement, setInpEl]: any = useState();
    const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFileInput(e)
            }
          />
          <button onClick={() => inputElement.click()}>
            <StIcon>
              <FiUploadCloud />
            </StIcon>
            <h2 style={{ margin: 0 }}>Click here to upload</h2>
          </button>
        </StTextWrapper>
      </StImageUploadField>
    );
  };

  const UploadField = () => {
    // component for displaying the uploaded image
    // contains a button to remove the uploaded image
    const [AIresult, setAIresult]: any = useState();
    const loading = AIresult === undefined ? true : false;
    const [people, setPeople]: any = useState({});
    const [select, setSelect]: any = useState(undefined);

    const ImagePreview = () => {
      async function getAIdata() {
        setAIresult(await Promise.resolve(analyseScreenshot()));
      }
      useEffect(() => {
        if (!AIresult) {
          getAIdata();
        }
      });
      const FaceBox: any = ({ i }: any) => {
        return (
          <StFaceBox
            onClick={(e: any) => {
              setSelect(i);
            }}
            clicked={select === i}
            left={AIresult[i].landmarks[2][0]}
            top={AIresult[i].landmarks[2][1]}
          />
        );
      };

      const getMessage: any = (categories: any) => {
        return categories[0];
      };

      const Dots = () => {
        useEffect(() => {
          if (AIresult.length === 1) setSelect(0);
          setPeople(new_p);
        });

        const categories = ["happy"];
        let dots: any = [];
        let new_p = people;

        for (let i = 0; i < AIresult.length; i++) {
          dots.push(<FaceBox key={i} i={i} />);
          new_p[i] = { key: i, message: getMessage(categories) };
        }
        return dots;
      };

      // Returns the Box that contains the uploaded image
      // and the marking dots for each face
      return (
        <div>
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
              {loading ? (
                <div
                  style={{
                    position: "absolute",
                    left: "40%",
                    top: "40%",
                  }}
                >
                  <FadeIn>
                  <GridLoader
                    color={stdBlue}
                    loading={loading}
                    css={override}
                    size={20}
                    />
                    </FadeIn>
                </div>
              ) : (
                <Dots />
              )}
                <img id="uploadImage" src={img} alt=""></img>
            </div>
          </StImagePreview>
        </div>
      );
    };

    //text and data to be shown next to the uploaded image
    const DetailData = () => {
      const [showPopIn, setShowPopIn] = useState(false);
      const togglePopIn = () => setShowPopIn(!showPopIn);

      return (
        <StDetailData>
          <PopIn
            show={showPopIn}
            toggle={togglePopIn}
            heading={<h2>Results</h2>}
          />
          {select !== undefined ? (
            <StTextWrapper color="grey" align="center">
              <StButton
                color="light"
                style={{
                  height: "200px",
                  width: "100%",
                  borderRadius: "20px",
                }}
                onClick={() => {
                  togglePopIn();
                }}
              >
                <StIcon color="#62bcec">
                  <BsPerson />
                </StIcon>
                Details
              </StButton>

            </StTextWrapper>
          ) : !loading ? (
            <StTextWrapper fat color="grey" align="center">
              <h3>Select a face :)</h3>
            </StTextWrapper>
          ) : (
            <StTextWrapper align="center" color="grey">
              <h3>Wait just a little bit...</h3>
              <p>
                If this takes longer than 20 seconds try another picture or crop
                the current one.
              </p>
            </StTextWrapper>
          )}
        </StDetailData>
      );
    };

    // returns the functional part of the page
    //  So the Input Field and the detail data Button
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
              <StTextWrapper
                fat
                align="center"
                color="grey"
                style={{ paddingTop: "20px" }}
              >
                <h3>Upload an image to get started.</h3>
              </StTextWrapper>
            )}
          </Col>
        </Row>
      </Container>
    );
  };

  // returns the whole overlay page constructed by the Base-Overlay-Structure
  return (
    <FadeIn>
      <BaseOLStruct title="Starter" magicElement={<UploadField />}>
        <StTextWrapper color={"grey"}>
          <p>
            Upload a <strong>screenshot of the persons profile</strong> and wait
            a few seconds to let the algorithm do its magic. Thats it!{" "}
          </p>
          <p>
            After uploading the profile picture, an AI will scan the image and
            you will have to{" "}
            <strong> select the person you want to analyse </strong>
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
    </FadeIn>
  );
};