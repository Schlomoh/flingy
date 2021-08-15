import { useState } from "react";
import { Row, Col, Container } from "react-grid-system";
import styled from "styled-components";
import { StBasePage } from "../BaseStyle";

// blues illustrations as react component import
import starter from "../assets/starter.png";
import reply from "../assets/reply.png";

// overlay modules
import { Starter } from "../overlays/starter";
import { Reply } from "../overlays/reply";

// Declaring the needed styled components

import {
  StCard,
  StImage,
  StTextWrapper,
  StButton,
  Overlay,
} from "../components/styledComps";

// small props interface for the category selection card
interface SelBoxProps {
  title: String;
  content: String;
  version: String;
  imgEl: any;
}

// Home component and other smaller functional components

export function Home() {
  const [overlay, setShowOL] = useState(false);
  const [btnDiabled, setDisabled] = useState(false);
  const [overlayContent, setOLContent]: any = useState("");

  const toggleOverlay: any = (version: any) => {
    setShowOL(!overlay);
    setDisabled(true);
    //check which box the button was clicked from to set the right overlay content
    setOLContent(version);
    //shortly disable the buttons when clicked to prevent spamming
    setTimeout(() => {
      setDisabled(false);
    }, 800);
  };
  let vis = overlay ? 1 : 0;

  // category box card
  const SelectorBox: React.FC<SelBoxProps> = (props) => {
    return (
      <StCard>
        <StTextWrapper color="light">
          <Container>
            <Row>
              <Col
                xs={4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <h2>{props.title}</h2>
              </Col>
              <Col xs={8}>
                <StImage>
                  <img src={props.imgEl} alt="" />
                </StImage>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>{props.content}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <StButton
                  disabled={btnDiabled}
                  color="light"
                  onClick={() => toggleOverlay(props.version)}
                >
                  Open
                </StButton>
              </Col>
            </Row>
          </Container>
        </StTextWrapper>
      </StCard>
    );
  };

  // Actual home component
  return (
    <StBasePage>
      <Overlay show={vis}>
        <StButton
          fixed
          style={{ margin: "20px" }}
          disabled={btnDiabled}
          size="small"
          onClick={toggleOverlay}
        >
          Close
        </StButton>

        <StTextWrapper>
          {overlayContent === "starter" ? (
            <Starter />
          ) : overlayContent === "reply" ? (
            <Reply />
          ) : null}
        </StTextWrapper>
      </Overlay>
      <Container>
        <Row>
          <Col xl={2} />
          <Col>
            <Row>
              <Col>
                <StTextWrapper color="#272727">
                  <h1 style={{ margin: 0 }}>Boost your texting game</h1>
                  <h2 style={{ margin: 0, marginTop: "10px" }}>
                    with the help of AI.{"  "}
                    {String.fromCodePoint(0x1f913)}
                  </h2>
                </StTextWrapper>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <SelectorBox
                  title="Starter"
                  imgEl={starter}
                  version="starter"
                  content="The algorithm analyses a screenshot of the profile you 
                  are trying to message. It then gives you a starter line that will 
                  most likely score."
                />
              </Col>
              <Col md={6}>
                <SelectorBox
                  title="Reply Generator"
                  imgEl={reply}
                  version="reply"
                  content="Supply the AI with the last few lines of your conversation 
                  and receive suggestions for your next message."
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <StTextWrapper>
                  <h2>
                    <br />
                    Do you sometimes struggle to find the right words?
                  </h2>
                  <p>
                    That's normal, but now you can use this handy tool to either
                    start or get help continuing a conversation. <br />
                    Send replies and starter lines suggested by an AI that will
                    most likely score.
                  </p>
                </StTextWrapper>
              </Col>
            </Row>
          </Col>
          <Col xl={2} />
        </Row>
      </Container>
    </StBasePage>
  );
}
